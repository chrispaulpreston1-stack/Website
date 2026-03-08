#!/usr/bin/env node
/**
 * Post-build SEO page generator for PF & Co Construction SPA
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
const BASE_URL = 'https://www.pfcoconstruction.co.uk';

// ── Route Metadata Map ───────────────────────────────────────────────────────
// Keep in sync with PageSEO calls in src/pages/*.tsx

const routes = [
  {
    path: '/',
    title: 'PF & Co | AI-Powered Structural Engineering & Construction',
    description: 'Nationwide AI-powered structural engineering and construction firm. 48-hour Site Intelligence reports, precision construction, and structural design.',
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
    description: 'Dedicated BC Readiness Check ensuring your drawings, specifications, and calculations are complete before Building Control submission. Project-dependent pricing.',
  },
  {
    path: '/party-wall',
    title: 'Party Wall Pre-Assessment | PF & Co',
    description: 'Premium Party Wall Surveyor services — engineering-led party wall assessments under the Party Wall Act 1996.',
  },
  {
    path: '/site-intelligence',
    title: 'PF & Co Site Intelligence | Data-Driven Pre-Construction Screening',
    description: 'Interrogate 58 authoritative data sources across 11 constraint categories. Planning Friction Score, risk profiling, and buildability ratings — delivered in 48 hours.',
  },
  {
    path: '/site-intelligence/site-feasibility-report',
    title: 'Site Feasibility Report | Pre-Construction Screening | PF & Co',
    description: 'A data-driven pre-construction screening report interrogating 22+ planning, environmental, and ground risk constraints for any UK property. From £297.',
    jsonLd: { '@type': 'Product', name: 'Site Feasibility Report', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '297', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/geotechnical-desk-study',
    title: 'Geotechnical Desk Study | Ground Investigation | PF & Co',
    description: 'Comprehensive desktop ground investigation covering BGS geology, groundwater, contamination history, and foundation risk assessment.',
    jsonLd: { '@type': 'Product', name: 'Geotechnical Desk Study', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '297', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/flood-risk-assessment',
    title: 'Flood Risk Assessment | Planning-Ready Reports | PF & Co',
    description: 'Tier 1 Desktop Flood Risk Assessment evaluating fluvial, surface water, groundwater, and sewer flood risk with 4 Decision Risk Scores.',
    jsonLd: { '@type': 'Product', name: 'Flood Risk Assessment', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '297', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/planning-statement',
    title: 'Planning Statement | Submission-Ready Policy Evidence | PF & Co',
    description: 'A submission-ready document that demonstrates how your development proposals comply with national and local planning policy.',
    jsonLd: { '@type': 'Product', name: 'Planning Statement', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '495', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/design-and-access-statement',
    title: 'Design and Access Statement (DAS) | Planning Submission | PF & Co',
    description: 'A submission-ready Design and Access Statement explaining the design rationale, site context, and accessibility for your planning application.',
    jsonLd: { '@type': 'Product', name: 'Design and Access Statement', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '395', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/heritage-impact-assessment',
    title: 'Heritage Impact Assessment (HIA) | Heritage Statements | PF & Co',
    description: 'A proportionate, evidence-based heritage statement covering listed buildings, conservation areas, and impact on setting.',
    jsonLd: { '@type': 'Product', name: 'Heritage Impact Assessment', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '545', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/biodiversity-net-gain',
    title: 'Biodiversity Net Gain (BNG) | Screening & Feasibility | PF & Co',
    description: 'Find out whether BNG applies to your site, what it will cost, and what measures are needed to meet the 10% mandatory requirement.',
    jsonLd: { '@type': 'Product', name: 'Biodiversity Net Gain Screening', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '495', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/energy-statement',
    title: 'Energy Statement | Sustainability Evidence | PF & Co',
    description: 'Desktop sustainability and energy evidence covering Part L compliance, renewable energy feasibility, overheating risk, and MEES.',
    jsonLd: { '@type': 'Product', name: 'Energy Statement', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '445', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/transport-statement',
    title: 'Transport Statement | Highways & Accessibility | PF & Co',
    description: 'A professional transport statement covering trip generation, accessibility, and highways safety for your planning application.',
    jsonLd: { '@type': 'Product', name: 'Transport Statement', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '495', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/parking-survey',
    title: 'Parking Survey | Parking Provision Statements | PF & Co',
    description: 'An evidence-based parking provision statement analysing demand, capacity, and standards compliance for your development.',
    jsonLd: { '@type': 'Product', name: 'Parking Survey', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '345', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/feasibility-study',
    title: 'Concept Feasibility Study | Pre-Design Concept Options | PF & Co',
    description: 'Understand what is possible, what it costs, and which route to take — before investing in full design.',
    jsonLd: { '@type': 'Product', name: 'Concept Feasibility Study', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '795', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/pre-application-advice',
    title: 'Pre-Application Advice | Planning Enquiry Packs | PF & Co',
    description: 'Ask the right questions before you commit to a planning application. Targeted enquiry pack for LPA pre-submission engagement.',
    jsonLd: { '@type': 'Product', name: 'Pre-Application Advice Pack', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '245', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/pre-construction-design-review',
    title: 'Pre-Construction Design Review | Project Readiness | PF & Co',
    description: 'A systematic 95-check review of your drawing package to catch coordination clashes and gaps before construction begins.',
    jsonLd: { '@type': 'Product', name: 'Pre-Construction Design Review', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '895', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/construction-management-plan',
    title: 'Construction Management Plan (CMP) | Planning Conditions | PF & Co',
    description: 'Satisfy CMP planning conditions and demonstrate responsible construction management to the local authority.',
    jsonLd: { '@type': 'Product', name: 'Construction Management Plan', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '595', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/tree-survey',
    title: 'Arboricultural Desk Study | Desktop Tree Assessment | PF & Co',
    description: 'Desktop arboricultural assessment using LiDAR canopy modelling and TPO register data. BS 5837 categorisation and RPA mapping for planning applications.',
    jsonLd: { '@type': 'Product', name: 'Arboricultural Desk Study', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '575', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/cil-liability-assessment',
    title: 'CIL Liability Assessment | £295 | PF & Co Construction',
    description: 'Know your Community Infrastructure Levy exposure before you start. Exemption checks, relief options, and liability calculation.',
    jsonLd: { '@type': 'Product', name: 'CIL Liability Assessment', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '295', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/noise-impact-assessment',
    title: 'Noise Impact Assessment | £445 | PF & Co Construction',
    description: 'BS 4142/BS 8233/ProPG noise screening for residential schemes near roads, railways, or commercial uses.',
    jsonLd: { '@type': 'Product', name: 'Noise Impact Assessment', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '445', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/air-quality-screening',
    title: 'Air Quality Screening | £395 | PF & Co Construction',
    description: 'IAQM/EPUK air quality screening with AQMA proximity analysis and construction dust risk assessment.',
    jsonLd: { '@type': 'Product', name: 'Air Quality Screening', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '395', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/phase-1-contamination',
    title: 'Phase 1 Contamination Assessment | £595 | PF & Co Construction',
    description: 'LCRM 2020 / BS 10175 Preliminary Risk Assessment with Conceptual Site Model and remediation screening.',
    jsonLd: { '@type': 'Product', name: 'Phase 1 Contamination Assessment', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '595', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
  },
  {
    path: '/site-intelligence/daylight-sunlight-assessment',
    title: 'Daylight & Sunlight Assessment | £595 | PF & Co Construction',
    description: 'BRE 209 daylight/sunlight impact assessment including VSC, APSH, NSL, and sun-on-ground analysis.',
    jsonLd: { '@type': 'Product', name: 'Daylight & Sunlight Assessment', brand: { '@type': 'Organization', name: 'PF & Co Construction' }, offers: { '@type': 'Offer', price: '595', priceCurrency: 'GBP', availability: 'https://schema.org/InStock' } },
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
    description: 'Get unlimited structural calculations and priority design support for a fixed monthly fee, or join our B2B Partner Credit system.',
  },
  {
    path: '/ai-innovation',
    title: 'AI Innovation | PF & Co Structural Engineering',
    description: 'Explore our multi-agent AI system interrogating 58 authoritative data sources to produce planning-ready site intelligence reports in 48 hours.',
  },
  {
    path: '/blog',
    title: 'Engineering Insights | PF & Co',
    description: 'Expert advice and technical insights on structural engineering, AI in construction, and site intelligence from PF & Co.',
  },
  {
    path: '/contact',
    title: 'Contact Us | PF & Co Construction',
    description: 'Get in touch with PF & Co for structural engineering, construction, and site intelligence services nationwide across England and Wales.',
  },
  {
    path: '/privacy-policy',
    title: 'Privacy Policy | PF & Co Construction',
    description: 'How PF & Co Construction collects, uses, and protects your personal data in line with GDPR.',
  },
  {
    path: '/terms-of-service',
    title: 'Terms of Service | PF & Co Construction',
    description: 'Terms and conditions governing the use of PF & Co Construction website and services, including report orders and subscriptions.',
  },
  {
    path: '/order-success',
    title: 'Order Confirmation | Site Intelligence',
    description: 'Your report order has been confirmed.',
    noindex: true,
  },
];

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

  for (const route of routes) {
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
  const ogImage = `${BASE_URL}/api/og?path=${encodeURIComponent(route.path)}`;

  let html = template;

  // Replace title
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

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

  // Replace Twitter tags
  html = html.replace(/<meta property="twitter:url" content="[^"]*"/, `<meta property="twitter:url" content="${canonical}"`);
  html = html.replace(/<meta property="twitter:title" content="[^"]*"/, `<meta property="twitter:title" content="${title}"`);
  html = html.replace(/<meta property="twitter:description"\s*content="[^"]*"/, `<meta property="twitter:description" content="${desc}"`);

  // Add canonical link (before </head>)
  if (!html.includes('rel="canonical"')) {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n</head>`);
  }

  // Add noindex meta tag for pages that should not be indexed (e.g. post-purchase)
  if (route.noindex) {
    html = html.replace('</head>', `  <meta name="robots" content="noindex, nofollow" />\n</head>`);
  }

  // Add route-specific JSON-LD if provided (before </head>)
  if (route.jsonLd) {
    const ld = JSON.stringify({ '@context': 'https://schema.org', ...route.jsonLd });
    html = html.replace('</head>', `  <script type="application/ld+json">${ld}</script>\n</head>`);
  }

  return html;
}

generate();
