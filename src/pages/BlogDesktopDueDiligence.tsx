import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

const BlogDesktopDueDiligence = () => {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "headline": "Why Smart Developers Do Desktop Due Diligence Before Spending a Penny on Site",
        "description": "RICS, LCRM, and NPPF all mandate desktop assessment first. Learn the 5-stage developer workflow, what it costs the old way, and how to do it in 48 hours.",
        "author": {
          "@type": "Organization",
          "name": "Site Intelligence"
        },
        "publisher": {
          "@type": "Organization",
          "name": "PF & Co Site Intelligence",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.pfandco.co.uk/logo.png"
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "https://www.pfandco.co.uk/blog/desktop-due-diligence-before-spending/"
        },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": [".speakable-intro", ".speakable-definition"]
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is a desktop site assessment enough to get planning permission?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Desktop assessment is Stage 1 and 2 of the 5-stage workflow. It tells you whether to proceed and scopes what specialist investigations you need. Most planning applications will also require some Stage 4 specialist reports (ecology surveys, Phase 2 ground investigation, transport assessment), but desktop assessment determines which ones are actually needed for your specific site."
            }
          },
          {
            "@type": "Question",
            "name": "How much does a traditional site assessment cost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Commissioning individual desktop reports from separate consultants typically costs £10,000 to £50,000+ for a development site, taking 2 to 6 months. Architecture for London estimates professional fees of £15,000 to £50,000 for a typical 10-unit scheme to reach planning application stage."
            }
          },
          {
            "@type": "Question",
            "name": "What is a Phase 1 Desk Study?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A Phase 1 Desk Study is the Tier 1 desktop assessment mandated by the Environment Agency’s LCRM framework. It reviews historical maps, BGS geological data, environmental records, and regulatory databases to identify potential contamination risks before any intrusive ground investigation is commissioned."
            }
          },
          {
            "@type": "Question",
            "name": "What data sources does a desktop site assessment use?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "A comprehensive desktop assessment draws from 60+ sources including EA Flood Map for Planning, BGS geological maps and borehole records, DEFRA MAGIC map, Historic England records, Land Registry, LPA planning portals, Envirocheck data, and utility company infrastructure maps."
            }
          },
          {
            "@type": "Question",
            "name": "When do I need a site visit after desktop assessment?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Desktop assessment identifies whether a site visit adds value. If desktop analysis reveals fatal constraints (Flood Zone 3b, scheduled monument, major contamination), a visit is unnecessary — the site is already dead. If the site passes desktop screening, a walkover confirms findings and identifies issues not visible from the desk."
            }
          },
          {
             "@type": "Question",
             "name": "Do I need a site assessment before buying land for development?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Yes. RICS Red Book Global Standards (2024) mandates due diligence on all relevant matters before committing to a property transaction. A desktop assessment covering planning policy, flood risk, contamination, ecology, heritage, transport, and ground conditions can identify fatal constraints that would make the site undevelopable — before you exchange contracts. The CLA reports that 70% of those who abandoned planning projects had already spent £5,000 to £50,000+."
             }
          }
        ]
      }
    ]
  };

  return (
    <div className="bg-brand-surface min-h-screen">
      <PageSEO 
        title="Desktop Due Diligence: The 5-Stage Site Assessment | SI"
        description="RICS, LCRM, and NPPF all mandate desktop assessment first. Learn the 5-stage developer workflow, what it costs the old way (£10,000–£50,000+), and how to do it in 48 hours from £295."
        path="/blog/desktop-due-diligence-before-spending"
        ogImage="https://www.pfandco.co.uk/images/desktop-first-assessment-hero.jpg"
        jsonLd={schema}
      />

      {/* Article Header */}
      <div className="bg-white border-b border-brand-primary/10 pt-32 pb-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-primary/5 text-brand-primary/60 rounded-full font-mono text-xs font-bold tracking-widest mb-6">
            SITE APPRAISAL
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-brand-primary leading-[1.15] mb-6">
            Why Smart Developers Do <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-amber-300">Desktop Due Diligence</span> Before Spending a Penny on Site
          </h1>
          <p className="text-xl text-brand-primary/60 mb-8 max-w-2xl mx-auto speakable-intro">
            A £295 initial report could save you from burning £35,000 on a structurally doomed development.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm font-medium text-brand-primary/50">
            <span>By Site Intelligence Team</span>
            <span>•</span>
            <span>7 Min Read</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-[1fr_320px] gap-12 py-16">
        {/* Main Content */}
        <article className="prose prose-lg prose-slate max-w-none 
          prose-headings:font-display prose-headings:font-bold prose-headings:text-brand-primary 
          prose-a:text-brand-accent prose-a:font-semibold hover:prose-a:text-brand-accent/80
          prose-p:text-brand-primary/80 prose-p:leading-relaxed
          prose-blockquote:border-l-brand-accent prose-blockquote:bg-brand-primary/5 prose-blockquote:text-brand-primary prose-blockquote:px-6 prose-blockquote:py-2 prose-blockquote:font-medium prose-blockquote:italic
          prose-li:text-brand-primary/80">
          
          <img 
            src="/images/desktop-first-assessment-hero.jpg" 
            alt="Split screen comparing cluttered traditional site assessment desk with a clean single-screen Site Intelligence report" 
            className="w-full rounded-2xl shadow-lg mb-8"
          />

          <p className="speakable-definition"><strong>Desktop due diligence is</strong> the systematic review of publicly available government data sources to assess a development site's constraints and viability before committing to specialist investigations or site visits.</p>

          <p>A developer finds a site. Two acres on the edge of a market town, currently grazing land, walking distance to the high street. The owner is motivated. The price looks right. The instinct is to get moving — appoint an architect, commission surveys, engage with the local planning authority.</p>

          <p>Six months and £35,000 later, the ecology survey reveals great crested newts in the adjacent pond. The Phase 2 ground investigation uncovers a former landfill. The flood modelling shows the access road sits in Flood Zone 3b. The site is dead. The money is gone.</p>

          <p>Every one of those fatal constraints was visible from a desk. Every one could have been identified in 48 hours, from publicly available government data, for a fraction of the cost. The developer did not lack access to the information — they lacked a system for finding it before committing capital.</p>

          <p>This article sets out the standard 5-stage workflow that property developers in England follow when assessing sites, explains why every authoritative framework mandates desktop assessment as the starting point, and shows what comprehensive desktop due diligence actually covers.</p>

          <h2>What Is the 5-Stage Developer Site Assessment Workflow?</h2>

          <p>Property developers in England follow a well-established staged process when assessing potential development sites. This workflow is recognised across RICS, the NPPF, and standard industry practice. Understanding it matters because each stage builds on the last — and skipping stages costs money.</p>

          <ol>
            <li>
                <strong>Stage 1: Initial Screening (Desktop)</strong>
                <p>The first filter. Before visiting the site, before engaging any consultants, the developer checks whether the site has any obvious fatal constraints. This means reviewing planning policy (Local Plan, NPPF, Policies Map), checking planning history through the local authority portal, screening for high-level constraints (Green Belt, flood zone, conservation area, SSSI, AONB), running a title and ownership check through Land Registry, and conducting an initial market assessment using comparable values.</p>
            </li>
            <li>
                <strong>Stage 2: Detailed Desktop Due Diligence</strong>
                <p>If the site passes initial screening, the developer moves to comprehensive desktop assessment. This covers planning appraisal (national and local policy, planning history, precedents), environmental screening (flood risk, contamination, ecology designations), heritage and archaeological screening, transport and access assessment, utilities and infrastructure capacity, ground conditions desktop review (geological maps, BGS data, mining records), CIL and S106 obligations, and viability appraisal.</p>
            </li>
            <li>
                <strong>Stage 3: Site Visit and Walkover</strong>
                <p>Physical site inspection to confirm desktop findings and identify issues not visible from the desk — building condition, access constraints, neighbouring land uses, and anything that needs seeing to understand fully.</p>
            </li>
            <li>
                <strong>Stage 4: Specialist Investigations</strong>
                <p>Commissioned only if the developer decides to proceed. Phase 2 intrusive ground investigation (boreholes and trial pits), protected species surveys, detailed flood modelling with site-specific topographical data, full transport assessment with traffic counts, and topographical survey.</p>
            </li>
            <li>
                <strong>Stage 5: Planning Application Preparation</strong>
                <p>Full suite of supporting reports, design work and architectural drawings, and pre-application engagement with the LPA. By this point, the developer has invested significantly — which is precisely why the early stages exist.</p>
            </li>
          </ol>

          <h2>Why Do RICS, LCRM, and NPPF All Mandate Desktop First?</h2>

          <h3>RICS Red Book Global Standards (2024)</h3>
          <p>The RICS Red Book — the global standard for property valuation and due diligence — mandates:</p>
          <blockquote>"Reasonable due diligence on all relevant matters, right from the initial decision to accept the instruction all the way to the reporting stage."</blockquote>

          <h3>LCRM — The Environment Agency's Phased Framework</h3>
          <p>The Land Contamination Risk Management (LCRM) framework provides the formal staged approach for contaminated land assessment:</p>
          <blockquote>"A preliminary investigation is a desk study and site walkover — this is done as part of a preliminary risk assessment."</blockquote>
          <p>A Phase 1 Desk Study is the Tier 1 desktop assessment mandated by this framework.</p>

          <h3>NPPF Sequential Test</h3>
          <p>The National Planning Policy Framework mandates a desk-first approach to flood risk. Development must be steered toward Flood Zone 1 first. This is inherently a desktop screening exercise.</p>

          <h2>What Does a Desktop Site Assessment Actually Cover?</h2>
          <p>Desktop due diligence is not a cursory Google search. A comprehensive desktop assessment draws from 60 or more government data sources across 15 check categories:</p>
          <ul>
            <li><strong>Planning history and policy:</strong> LPA portal searches, Local Plan analysis, NPPF compliance.</li>
            <li><strong>Flood risk:</strong> EA Flood Map for Planning, surface water maps, reservoir flood maps.</li>
            <li><strong>Contamination and ground conditions:</strong> Historical OS maps, BGS geological maps, Envirocheck.</li>
            <li><strong>Ecology:</strong> MAGIC map designations, habitat data, PEA.</li>
            <li><strong>Heritage:</strong> Historic England records, HER, listed buildings.</li>
          </ul>

          <h2>How Much Does the Traditional Site Assessment Approach Cost?</h2>
          <p>Traditionally, completing Stage 2 requires commissioning 8 to 15 separate consultants. Total cost typically runs from <strong>£10,000 to £50,000+</strong> and takes 2 to 6 months to complete.</p>
          <ul>
            <li>According to the HBF (2025), <strong>56%</strong> of SME home builders saw the cost of obtaining planning permission increase by over 30% in three years.</li>
            <li>According to the HBF, <strong>51%</strong> waited over a year for planning permission. Only <strong>1%</strong> received permission within 3 months.</li>
            <li>According to the CLA, <strong>70%</strong> of those who abandoned planning projects had spent between £5,000 and £50,000+ before giving up.</li>
          </ul>

          <h2>Why Should Developers Do Desktop Assessment First?</h2>
          <h3>1. Kill Bad Sites Early, Kill Them Cheaply</h3>
          <p>If desktop analysis reveals a fatal constraint, the developer avoids spending thousands on specialist investigations for a site they would never develop.</p>
          
          <h3>2. Scope Downstream Investigations Properly</h3>
          <p>A comprehensive desktop assessment does not just identify constraints — it scopes exactly what further investigation is needed.</p>
          
          <h3>3. Accelerate Decision-Making</h3>
          <p>In competitive land markets, the developer who can assess a site's potential fastest has a significant advantage.</p>

          <h2>What Does Desktop Assessment NOT Replace?</h2>
          <p>Desktop assessment is the essential first stage, not the only stage. It does not replace Phase 2 intrusive ground investigation, protected species surveys, detailed flood modelling, or measured surveys. It simply tells you what you need.</p>

          <h2>How Can You Do Desktop Due Diligence in 48 Hours?</h2>
          <p><Link to="/site-intelligence">Site Intelligence</Link> delivers comprehensive Tier 1 desktop assessment — the same staged approach mandated by RICS, LCRM, and the NPPF — from a single platform, querying <Link to="/site-intelligence/data-sources">60+ government data sources</Link> simultaneously, cross-referencing findings across all constraint categories, in 48 hours. <Link to="/site-intelligence/pricing">From £295</Link>.</p>

          <hr className="my-12 border-brand-primary/10" />

          {/* FAQ Section */}
          <div className="bg-brand-surface p-8 rounded-2xl border border-brand-primary/10 mb-12">
            <h2 className="text-2xl font-bold font-display text-brand-primary !mb-6 !mt-0 !border-0 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-brand-primary !mt-0 !mb-2">Q: Is a desktop site assessment enough to get planning permission?</h3>
                <p className="!m-0 text-brand-primary/80">Desktop assessment is Stage 1 and 2 of the 5-stage workflow. It tells you whether to proceed and scopes what specialist investigations you need. Most planning applications will also require some Stage 4 specialist reports (ecology surveys, Phase 2 ground investigation, transport assessment), but desktop assessment determines which ones are actually needed for your specific site.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-primary !mt-0 !mb-2">Q: How much does a traditional site assessment cost?</h3>
                <p className="!m-0 text-brand-primary/80">Commissioning individual desktop reports from separate consultants typically costs £10,000 to £50,000+ for a development site, taking 2 to 6 months. Architecture for London estimates professional fees of £15,000 to £50,000 for a typical 10-unit scheme to reach planning application stage.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-primary !mt-0 !mb-2">Q: What is a Phase 1 Desk Study?</h3>
                <p className="!m-0 text-brand-primary/80">A Phase 1 Desk Study is the Tier 1 desktop assessment mandated by the Environment Agency’s LCRM framework. It reviews historical maps, BGS geological data, environmental records, and regulatory databases to identify potential contamination risks before any intrusive ground investigation is commissioned.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-primary !mt-0 !mb-2">Q: What data sources does a desktop site assessment use?</h3>
                <p className="!m-0 text-brand-primary/80">A comprehensive desktop assessment draws from 60+ sources including EA Flood Map for Planning, BGS geological maps and borehole records, DEFRA MAGIC map, Historic England records, Land Registry, LPA planning portals, Envirocheck data, and utility company infrastructure maps.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-primary !mt-0 !mb-2">Q: When do I need a site visit after desktop assessment?</h3>
                <p className="!m-0 text-brand-primary/80">Desktop assessment identifies whether a site visit adds value. If desktop analysis reveals fatal constraints (Flood Zone 3b, scheduled monument, major contamination), a visit is unnecessary — the site is already dead. If the site passes desktop screening, a walkover confirms findings and identifies issues not visible from the desk.</p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-brand-primary !mt-0 !mb-2">Q: Do I need a site assessment before buying land for development?</h3>
                <p className="!m-0 text-brand-primary/80">Yes. RICS Red Book Global Standards (2024) mandates due diligence on all relevant matters before committing to a property transaction. A desktop assessment covering planning policy, flood risk, contamination, ecology, heritage, transport, and ground conditions can identify fatal constraints that would make the site undevelopable — before you exchange contracts. The CLA reports that 70% of those who abandoned planning projects had already spent £5,000 to £50,000+.</p>
              </div>
            </div>
          </div>

        </article>

        {/* Sidebar */}
        <aside className="space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-brand-primary/10 shadow-sm sticky top-24">
            <h3 className="font-display font-bold text-xl mb-4 text-brand-primary border-b border-brand-primary/10 pb-4">
              Related Services
            </h3>
            <ul className="space-y-4">
              <li>
                <Link to="/site-intelligence/site-feasibility-report" className="block group">
                  <div className="font-bold text-brand-primary group-hover:text-brand-accent transition-colors">Site Feasibility Report</div>
                  <div className="text-sm text-brand-primary/60">Comprehensive Tier 1 screening</div>
                </Link>
              </li>
              <li>
                <Link to="/site-intelligence/geotechnical-desk-study" className="block group">
                  <div className="font-bold text-brand-primary group-hover:text-brand-accent transition-colors">Ground & Desktop Study</div>
                  <div className="text-sm text-brand-primary/60">LCRM compliant Phase 1</div>
                </Link>
              </li>
              <li>
                <Link to="/site-intelligence/flood-risk-assessment" className="block group">
                  <div className="font-bold text-brand-primary group-hover:text-brand-accent transition-colors">Flood Risk Assessment</div>
                  <div className="text-sm text-brand-primary/60">Desktop NPPF sequential testing</div>
                </Link>
              </li>
            </ul>
            <Link to="/order-report" className="mt-8 block w-full bg-brand-primary text-white text-center py-3 rounded-xl font-bold hover:bg-brand-primary/90 transition-colors shadow-lg shadow-brand-primary/20">
              Order a Report
            </Link>
          </div>
        </aside>

      </div>
    </div>
  );
};

export default BlogDesktopDueDiligence;
