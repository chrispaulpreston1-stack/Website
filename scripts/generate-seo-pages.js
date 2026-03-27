#!/usr/bin/env node
/**
 * Post-build SEO page generator for PF & Co Site Intelligence SPA
 *
 * Problem: React SPA serves the same index.html for every route.
 *          Bots that don't execute JS see generic meta tags for all pages.
 *
 * Solution: After vite build, this script reads dist/index.html and generates
 *           per-route HTML files with correct <title>, <meta>, OG tags, and JSON-LD.
 *           Vercel serves these static files before falling back to SPA rewrites.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const DIST = join(__dirname, '..', 'dist');
const BASE_URL = 'https://www.pfandco.co.uk';

// ── Route Metadata Map ───────────────────────────────────────────────────────
// Keep in sync with PageSEO calls in src/pages/*.tsx

const routes = [
  {
    path: '/',
    title: 'PF & Co | AI-Powered Site Intelligence & Planning Reports',
    description: 'Planning-ready site intelligence reports for any UK site. 60 data sources, 112 AI agents, 48-hour turnaround. From £375. Subscribe from £399/mo.',
  },
  {
    path: '/structural-engineering',
    title: 'Structural Engineering & Calculations | PF & Co Nationwide',
    description: 'Professional structural engineering services offering bespoke calculations, design verification, and Building Regs submissions nationwide.',
  },
  {
    path: '/construction',
    title: 'Precision Construction | PF & Co Nationwide',
    description: 'Expert construction services led by engineers — from design coordination through to completion on residential, commercial, and heritage projects.',
  },
  {
    path: '/building-control',
    title: 'BC Readiness Check | Project-Dependent | PF & Co',
    description: 'BC Readiness Check ensuring your drawings, specs, and calculations are complete before Building Control submission.',
  },
  {
    path: '/party-wall',
    title: 'Party Wall Pre-Assessment | PF & Co',
    description: 'Premium Party Wall Surveyor services — engineering-led party wall assessments under the Party Wall Act 1996.',
  },
  {
    path: '/site-intelligence',
    title: 'Site Intelligence | Pre-Construction Screening | PF & Co',
    description: 'Interrogate 60 data sources across 11 constraint categories. Planning Friction Score, risk profiling, and buildability ratings in 48 hours.',
  },
  {
    path: '/site-intelligence/site-acquisition-intelligence',
    title: 'Site Acquisition Report | Development Appraisal | PF & Co',
    description: 'Should you buy this site? Development capacity, GDV, build cost, residual land value, planning risk, and go/no-go recommendation — delivered in 48-72 hours.',
    jsonLd: { '@type': 'Product', name: 'Site Acquisition Report', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '995', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/development-finance-summary',
    title: 'Development Finance Summary | Viability Screening | PF & Co',
    description: 'Development finance memo: GDV, build cost, profit on cost, RLV, risk dashboard, and sensitivity analysis. Delivered in 48-72 hours.',
    jsonLd: { '@type': 'Product', name: 'Development Finance Summary', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '795', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/site-feasibility-report',
    title: 'Site Feasibility Report | Constraint Screening | PF & Co',
    description: 'A data-driven pre-construction screening report interrogating 22+ planning, environmental, and ground risk constraints for any UK property. From £595.',
    jsonLd: { '@type': 'Product', name: 'Site Feasibility Report', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '595', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/geotechnical-desk-study',
    title: 'Geotechnical Desk Study | Ground Investigation | PF & Co',
    description: 'Comprehensive desktop ground investigation covering BGS geology, groundwater, contamination history, and foundation risk assessment.',
    jsonLd: { '@type': 'Product', name: 'Geotechnical Desk Study', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '495', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/flood-risk-assessment',
    title: 'Flood Risk Assessment | Planning-Ready Reports | PF & Co',
    description: 'Tier 1 Desktop Flood Risk Assessment evaluating fluvial, surface water, groundwater, and sewer flood risk with 4 Decision Risk Scores.',
    jsonLd: { '@type': 'Product', name: 'Flood Risk Assessment', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '375', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/planning-statement',
    title: 'Planning Statement | Policy Evidence | PF & Co',
    description: 'A submission-ready document that demonstrates how your development proposals comply with national and local planning policy.',
    jsonLd: { '@type': 'Product', name: 'Planning Statement', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '495', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/design-and-access-statement',
    title: 'Design and Access Statement (DAS) | PF & Co',
    description: 'A submission-ready Design and Access Statement explaining the design rationale, site context, and accessibility for your planning application.',
    jsonLd: { '@type': 'Product', name: 'Design and Access Statement', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '395', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/heritage-impact-assessment',
    title: 'Heritage Impact Assessment (HIA) | PF & Co',
    description: 'A proportionate, evidence-based heritage statement covering listed buildings, conservation areas, and impact on setting.',
    jsonLd: { '@type': 'Product', name: 'Heritage Impact Assessment', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '545', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/biodiversity-net-gain',
    title: 'Biodiversity Net Gain (BNG) Screening | PF & Co',
    description: 'Find out whether BNG applies to your site, what it will cost, and what measures are needed to meet the 10% mandatory requirement.',
    jsonLd: { '@type': 'Product', name: 'Biodiversity Net Gain Screening', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '495', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/energy-statement',
    title: 'Energy Statement | Sustainability Evidence | PF & Co',
    description: 'Desktop sustainability and energy evidence covering Part L compliance, renewable energy feasibility, overheating risk, and MEES.',
    jsonLd: { '@type': 'Product', name: 'Energy Statement', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '445', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/transport-statement',
    title: 'Transport Statement | Highways & Accessibility | PF & Co',
    description: 'A professional transport statement covering trip generation, accessibility, and highways safety for your planning application.',
    jsonLd: { '@type': 'Product', name: 'Transport Statement', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '495', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/parking-survey',
    title: 'Parking Survey | Parking Provision Statements | PF & Co',
    description: 'An evidence-based parking provision statement analysing demand, capacity, and standards compliance for your development.',
    jsonLd: { '@type': 'Product', name: 'Parking Survey', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '345', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/feasibility-study',
    title: 'Feasibility Study | Pre-Design Concept Options | PF & Co',
    description: 'Understand what is possible, what it costs, and which route to take — before investing in full design.',
    jsonLd: { '@type': 'Product', name: 'Feasibility Study', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '795', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/pre-application-advice',
    title: 'Pre-Application Advice | Planning Enquiry Packs | PF & Co',
    description: 'Ask the right questions before you commit to a planning application. Targeted enquiry pack for LPA pre-submission engagement.',
    jsonLd: { '@type': 'Product', name: 'Pre-Application Advice Pack', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '245', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/pre-construction-design-review',
    title: 'Pre-Construction Design Review | Project Readiness | PF & Co',
    description: 'A systematic 95-check review of your drawing package to catch coordination clashes and gaps before construction begins.',
    jsonLd: { '@type': 'Product', name: 'Pre-Construction Design Review', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '895', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/construction-management-plan',
    title: 'Construction Management Plan (CMP) | PF & Co',
    description: 'Satisfy CMP planning conditions and demonstrate responsible construction management to the local authority.',
    jsonLd: { '@type': 'Product', name: 'Construction Management Plan', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '595', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/tree-survey',
    title: 'Arboricultural Constraints Appraisal | PF & Co',
    description: 'Desktop arboricultural assessment using LiDAR canopy modelling and TPO register data. BS 5837 categorisation and RPA mapping for planning applications.',
    jsonLd: { '@type': 'Product', name: 'Arboricultural Constraints Appraisal', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '575', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/cil-liability-assessment',
    title: 'CIL Liability Assessment | £295 | PF & Co Site Intelligence',
    description: 'Know your Community Infrastructure Levy exposure before you start. Exemption checks, relief options, and liability calculation.',
    jsonLd: { '@type': 'Product', name: 'CIL Liability Assessment', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '295', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/noise-impact-assessment',
    title: 'Noise Screening Report | £445 | PF & Co Site Intelligence',
    description: 'BS 4142/BS 8233/ProPG noise screening for residential schemes near roads, railways, or commercial uses.',
    jsonLd: { '@type': 'Product', name: 'Noise Screening Report', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '445', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/air-quality-screening',
    title: 'Air Quality Screening | £395 | PF & Co Site Intelligence',
    description: 'IAQM/EPUK air quality screening with AQMA proximity analysis and construction dust risk assessment.',
    jsonLd: { '@type': 'Product', name: 'Air Quality Screening Assessment', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '395', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/phase-1-contamination',
    title: 'Phase 1 Desk Study | £595 | PF & Co Site Intelligence',
    description: 'LCRM 2020 / BS 10175 Preliminary Risk Assessment with Conceptual Site Model and remediation screening.',
    jsonLd: { '@type': 'Product', name: 'Phase 1 Desk Study', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '595', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/daylight-sunlight-assessment',
    title: 'Daylight & Sunlight Screening | £595 | PF & Co Site Intelligence',
    description: 'BRE 209 daylight/sunlight screening including VSC, APSH, NSL, and sun-on-ground risk indicators.',
    jsonLd: { '@type': 'Product', name: 'Daylight & Sunlight Screening', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }, offers: { '@type': 'Offer', price: '595', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/data-sources',
    title: 'Data Sources (40+ APIs) | Site Intelligence | PF & Co',
    description: 'Explore the 40+ government data sources mapped and aggregated in our Site Intelligence reports for pre-construction planning.',
    jsonLd: { '@type': 'Product', name: 'Site Intelligence Data Sources', brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' } },
  },
  {
    path: '/report-packages',
    title: 'Report Packages & Bundles | PF & Co Engineering',
    description: 'Save up to 63% with our report bundles. From the Triple Threat starter to The Complete Intelligence — every report we produce in one package.',
  },
  {
    path: '/plans-and-pricing',
    title: 'Plans & Pricing — Your Project Roadmap | PF & Co Engineering',
    description: 'From finding a site to breaking ground — your complete project roadmap. See exactly which reports you need at each stage and what they cost.',
  },
  {
    path: '/order-report',
    title: 'Order Report | Site Intelligence | PF & Co',
    description: 'Order planning-ready site intelligence reports from PF & Co. Choose from 20 professional reports, 8 bundles, or The Complete Intelligence package.',
  },
  {
    path: '/subscriptions',
    title: 'Engineering Subscriptions & Partner Credits | PF & Co',
    description: 'Site intelligence subscriptions from £399/mo. Fixed cost, 48-hour turnaround, 60 data sources. Tiers for all project scales.',
  },
  {
    path: '/ai-innovation',
    title: 'AI Innovation | PF & Co Structural Engineering',
    description: 'Explore our multi-agent AI system interrogating 60 authoritative data sources to produce planning-ready site intelligence reports in 48 hours.',
  },
  {
    path: '/blog',
    title: 'Engineering Insights | PF & Co',
    description: 'Expert advice and technical insights on structural engineering, AI in construction, and site intelligence from PF & Co.',
  },
  {
    path: '/contact',
    title: 'Contact Us | PF & Co Site Intelligence',
    description: 'Get in touch with PF & Co for structural engineering, construction, and site intelligence services nationwide across England and Wales.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | PF & Co Site Intelligence',
    description: 'How PF & Co Site Intelligence collects, uses, and protects your personal data in line with GDPR.',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | PF & Co Site Intelligence',
    description: 'Terms and conditions governing the use of PF & Co Site Intelligence website and services, including report orders and subscriptions.',
  },
  {
    path: '/ai-compliance',
    title: 'AI Standards & Compliance | RICS AI Aligned | PF & Co',
    description: 'Our AI compliance framework: 112 specialised agents, 60 authoritative data sources, 24-category QA pipeline, and RICS AI Standard alignment.',
  },
  {
    path: '/ai-governance-policy',
    title: 'AI Governance Policy | PF & Co Site Intelligence',
    description: 'Our policy for the responsible use of artificial intelligence in site intelligence and engineering services.',
  },
  {
    path: '/about',
    title: 'About Us | PF & Co Site Intelligence',
    description: 'PF & Co Site Intelligence: AI-powered site intelligence and planning reports. Founded by Chris Preston BEng (Hons). 300+ projects, 112 AI agents, 60 data sources, 48-hour delivery.',
  },
  {
    path: '/honest-assessment',
    title: 'Honest Assessment | We Tell You the Truth | PF & Co',
    description: 'Every site gets an honest, upfront assessment of its development prospects. If there are dealbreakers, you\'ll know before committing to architect fees and application costs.',
  },
  {
    path: '/for-architects',
    title: 'For Architects & Planners | PF & Co Engineering',
    description: 'You do the design. We provide the evidence. AI-powered technical reports supporting your planning applications natively.',
  },
  {
    path: '/for-developers',
    title: 'For Developers | Site Intelligence — Planning Reports in 48 Hours',
    description: 'Complete planning intelligence for any development site. Same desktop reports you would wait months for from 10 consultants, delivered in 48 hours.',
    ogTitle: 'For Developers — Site Intelligence',
    ogDescription: 'Complete planning intelligence for any development site in 48 hours. From £199.',
  },
  {
    path: '/for-professionals',
    title: 'For Architects & Professionals | Site Intelligence',
    description: 'Stop coordinating 10 consultants. One order, 48 hours, every desktop report your submissions need. Volume pricing for practices.',
    ogTitle: 'For Professionals — Site Intelligence',
    ogDescription: 'One order replaces 10 consultants. Desktop planning reports in 48 hours.',
  },
  {
    path: '/whats-included',
    title: "What's Included | 36+ Planning Reports Tailored to Your Site",
    description: '36+ desktop planning reports auto-selected by your site constraints. Flood risk, heritage, ecology, transport, contamination and more.',
    ogTitle: "What's Included — Site Intelligence",
    ogDescription: '36+ reports tailored to your site. Constraint-triggered selection from 76+ data sources.',
  },
  {
    path: '/trust',
    title: 'Trust & Data Sources | 76+ Authoritative Government Sources',
    description: 'Every number traces to its source. 76+ government data sources, 24-layer QA pipeline, 361+ verified case law references.',
    ogTitle: 'Built on Authoritative Data — Site Intelligence',
    ogDescription: '76+ government data sources. 24-layer QA pipeline. Every number traced to source.',
  },
  {
    path: '/order',
    title: 'Order Your Pack | Site Intelligence — From £199',
    description: 'Order your planning intelligence pack. Enter your site address, choose your product, pay securely. Reports delivered in 48 hours.',
    ogTitle: 'Order Your Pack — Site Intelligence',
    ogDescription: 'Planning intelligence from £199. Choose your product, pay online, receive in 48 hours.',
  },
  {
    path: '/for-self-builders',
    title: 'For Homeowners & Self-Builders | PF & Co Engineering',
    description: 'Understand your site before you hire an architect. Avoid expensive mistakes with our easy-to-understand Site Intelligence reports.',
  },
  {
    path: '/order-success',
    title: 'Order Confirmation | Site Intelligence',
    description: 'Your report order has been confirmed.',
    noindex: true,
  },
];

// ── Dynamic Blog Routes ─────────────────────────────────────────────────────
// Parse blogPosts.ts to generate per-article SEO pages automatically

function getBlogRoutes() {
  const blogPath = join(__dirname, '..', 'src', 'data', 'blogPosts.ts');
  const blogSrc = readFileSync(blogPath, 'utf8');

  const posts = [];
  const postRegex = /slug:\s*'([^']+)'[\s\S]*?title:\s*'([^']+)'[\s\S]*?excerpt:\s*'([^']+)'[\s\S]*?image:\s*'([^']+)'/g;

  let match;
  while ((match = postRegex.exec(blogSrc)) !== null) {
    posts.push({
      path: `/insights/${match[1]}`,
      title: `${match[2]} | PF & Co Insights`,
      description: match[3],
      ogImage: match[4],
      jsonLd: {
        '@type': 'Article',
        headline: match[2],
        description: match[3],
        image: match[4],
        author: { '@type': 'Organization', name: 'PF & Co Site Intelligence' },
        publisher: { '@type': 'Organization', name: 'PF & Co Site Intelligence' },
      },
    });
  }

  return posts;
}

// ── HTML Generation ──────────────────────────────────────────────────────────

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function generate() {
  const templatePath = join(DIST, 'index.html');
  if (!existsSync(templatePath)) {
    console.error('dist/index.html not found — run vite build first');
    process.exit(1);
  }

  const template = readFileSync(templatePath, 'utf8');
  let generated = 0;

  // Merge static routes with dynamically-parsed blog routes
  const blogRoutes = getBlogRoutes();
  const allRoutes = [...routes, ...blogRoutes];
  console.log(`SEO: Found ${blogRoutes.length} blog articles to pre-render`);

  for (const route of allRoutes) {
    // Skip homepage — it's already index.html
    if (route.path === '/') {
      // Still update the root index.html meta tags
      const html = injectMeta(template, route);
      writeFileSync(templatePath, html, 'utf8');
      generated++;
      continue;
    }

    const outDir = join(DIST, route.path);
    const outFile = join(outDir, 'index.html');

    mkdirSync(outDir, { recursive: true });

    const html = injectMeta(template, route);
    writeFileSync(outFile, html, 'utf8');
    generated++;
  }

  console.log(`SEO: Generated ${generated} pre-rendered HTML files in dist/`);
}

function injectMeta(template, route) {
  const title = escapeHtml(route.title);
  const desc = escapeHtml(route.description);
  const canonical = `${BASE_URL}${route.path}`;
  const ogImage = route.ogImage || `${BASE_URL}/api/og?path=${encodeURIComponent(route.path)}`;

  let html = template;

  // Replace title
  html = html.replace(/<title[^>]*>[^<]*<\/title>/, `<title data-rh="true">${title}</title>`);

  // Replace meta title
  html = html.replace(
    /<meta name="title" content="[^"]*"/,
    `<meta name="title" content="${title}"`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description"\s*content="[^"]*"/,
    `<meta name="description" content="${desc}"`
  );

  // Replace OG tags
  html = html.replace(/<meta property="og:url" content="[^"]*"/, `<meta property="og:url" content="${canonical}"`);
  html = html.replace(/<meta property="og:title" content="[^"]*"/, `<meta property="og:title" content="${title}"`);
  html = html.replace(/<meta property="og:description"\s*content="[^"]*"/, `<meta property="og:description" content="${desc}"`);
  html = html.replace(/<meta property="og:image" content="[^"]*"/, `<meta property="og:image" content="${ogImage}"`);

  // Replace Twitter tags
  html = html.replace(/<meta property="twitter:url" content="[^"]*"/, `<meta property="twitter:url" content="${canonical}"`);
  html = html.replace(/<meta property="twitter:title" content="[^"]*"/, `<meta property="twitter:title" content="${title}"`);
  html = html.replace(/<meta property="twitter:description"\s*content="[^"]*"/, `<meta property="twitter:description" content="${desc}"`);
  html = html.replace(/<meta property="twitter:image" content="[^"]*"/, `<meta property="twitter:image" content="${ogImage}"`);

  // Add canonical link (before </head>)
  if (!html.includes('rel="canonical"')) {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonical}" data-rh="true" />\n</head>`);
  }

  // Add noindex meta tag for pages that should not be indexed (e.g. post-purchase)
  if (route.noindex) {
    html = html.replace('</head>', `  <meta name="robots" content="noindex, nofollow" data-rh="true" />\n</head>`);
  }

  // Add route-specific JSON-LD if provided (before </head>)
  if (route.jsonLd) {
    const ld = { '@context': 'https://schema.org', ...route.jsonLd };

    // Enrich Product schemas with fields Google requires
    if (ld['@type'] === 'Product') {
      if (!ld.image) ld.image = ogImage;
      if (!ld.description) ld.description = route.description;
      // Google wants Brand, not Organization
      if (ld.brand && ld.brand['@type'] === 'Organization') {
        ld.brand = { '@type': 'Brand', name: ld.brand.name };
      }
    }

    html = html.replace('</head>', `  <script type="application/ld+json" data-rh="true">${JSON.stringify(ld)}</script>\n</head>`);
  }

  return html;
}

generate();
