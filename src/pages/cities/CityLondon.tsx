import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const CityLondon = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Site Intelligence London | PF & Co Construction",
  "image": "https://pfcoconstruction.co.uk/wp-content/uploads/2024/01/pfco-logo.png",
  "url": "https://pfcoconstruction.co.uk/si-london/",
  "telephone": "01483 363 210",
  "priceRange": "££",
  "description": "Desktop environmental reports for London projects. Flood risk, contamination, heritage, and ground conditions screening from 60+ data sources.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.5074,
    "longitude": -0.1278
  },
  "areaServed": ["City of London", "Westminster", "Camden", "Islington", "Tower Hamlets", "Southwark", "Lambeth", "Wandsworth", "Hackney", "Greenwich", "Lewisham", "Newham", "Barnet", "Ealing", "Hounslow", "Richmond upon Thames", "Kingston upon Thames", "Croydon", "Bromley", "Bexley"],
  "sameAs": [
    "https://www.facebook.com/profile.php?id=61551576285072",
    "https://www.instagram.com/pf_codevelopment"
  ]
}`;
  let schemaData = {};
  try {
    schemaData = JSON.parse(schemaStr);
  } catch(e) {}

  return (
    <>
      <PageSEO 
        title="Site Intelligence London | PF & Co Construction"
        description="Desktop environmental reports for London projects. Flood risk, contamination, heritage, and ground conditions screening from 60+ data sources."
        url="https://pfcoconstruction.co.uk/si-london/"
        schemaData={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        

{/*  Breadcrumb  */}
<nav className="sic-breadcrumb" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/site-intelligence">Site Intelligence</Link> <span>/</span>
    <span style={{ color: 'var(--sic-white)' }}>London</span>
</nav>

{/*  Hero  */}
<section className="sic-hero" aria-label="Site Intelligence Reports in London">
    <div className="sic-hero-inner">
        <h1>Site Intelligence Reports<br />in London</h1>
        <p className="sic-sub">Thames Flood Zones • Heritage Density • Brownfield Screening</p>
        <p className="sic-subtitle">Desktop environmental reports for London development projects. We screen flood risk, contamination, heritage constraints, and ground conditions across all 33 London planning authorities — typically within 48 hours.</p>
    </div>
</section>

{/*  Atomic Answer  */}
<div className="sic-container">
    <div className="sic-atomic">
        <h2>How Much Does a Desk Study Cost in London?</h2>
        <p>A Site Intelligence™ desktop environmental report for a London site typically costs between <strong>£295 and £495</strong>, depending on the report type. A Site Feasibility Report (broad constraint screening) starts at £295. A Geotechnical Desk Study (ground conditions focus) starts at £395. A Flood Risk Assessment starts at £495.</p>
        <p>By comparison, a traditional Phase 1 environmental consultant in London typically charges <strong>£1,500&ndash;£5,000+</strong> and takes 2&ndash;4 weeks. Site Intelligence reports are desktop-based, drawing on 60+ authoritative data sources, and are typically delivered within 48 hours.</p>
    </div>
</div>

{/*  Local Expertise Callout  */}
<div className="sic-container">
    <div className="sic-expertise">
        <h2>Why London Sites Need Environmental Screening</h2>
        <p className="sic-expertise-sub">33 Planning Authorities. Thousands of Constraints. One Report.</p>
        <ul>
            <li><strong>Thames flood zones</strong> — large parts of central and east London sit within Flood Zones 2 and 3; the Thames Barrier protects against tidal surge but surface water and groundwater flooding remain significant risks</li>
            <li><strong>Heritage density</strong> — London contains over 19,000 listed buildings and more than 150 conservation areas; even minor development near these assets requires heritage impact screening</li>
            <li><strong>Industrial contamination legacy</strong> — former gasworks, docks, railway yards, and factories have left widespread soil and groundwater contamination across inner London boroughs</li>
            <li><strong>Unexploded ordnance (UXO)</strong> — Blitz bombing during WWII means many London sites carry residual UXO risk, particularly in the East End, Docklands, and south of the Thames</li>
            <li><strong>Complex geology</strong> — London Clay, Lambeth Group, Thanet Sand, and Chalk create variable ground conditions that affect foundation design, drainage, and basement feasibility</li>
            <li><strong>Archaeological priority areas</strong> — significant parts of London are designated Archaeological Priority Areas where ground disturbance may trigger a requirement for archaeological evaluation</li>
            <li><strong>Air quality management</strong> — the whole of Greater London is an Air Quality Management Area (AQMA); development proposals may need to demonstrate air quality neutrality</li>
            <li><strong>Protected strategic views</strong> — the London View Management Framework protects sight lines to St Paul’s Cathedral and the Palace of Westminster, constraining building heights across wide corridors</li>
        </ul>
    </div>
</div>

{/*  Local Challenges  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Why London projects need screening">
    <div className="sic-container">
        <h2 className="sic-section-title">London’s Environmental Risk Landscape</h2>
        <p className="sic-body">London’s development history stretches back two millennia, leaving layers of environmental complexity that standard conveyancing searches rarely capture. Site Intelligence screens these risks before you commit.</p>
        <div className="sic-grid">
            <div className="sic-card">
                <h3>Thames &amp; Surface Water Flooding</h3>
                <p>The Thames floodplain extends deep into central London. While the Thames Barrier provides tidal protection until 2070, <strong>surface water flooding</strong> is the fastest-growing risk. Boroughs like Lewisham, Southwark, and Hammersmith &amp; Fulham have experienced repeated surface water events. Our Flood Risk Assessment maps all four flood sources and models climate change allowances to 2125.</p>
            </div>
            <div className="sic-card">
                <h3>Contaminated Land &amp; Made Ground</h3>
                <p>London’s industrial past has left a legacy of <strong>contaminated soil and groundwater</strong> across former gasworks (e.g., Beckton, Old Kent Road), railway lands, and dockside sites. Our Geotechnical Desk Study screens historical land use, BGS geology, and Environment Agency records to identify contamination risks before you instruct intrusive investigation.</p>
            </div>
            <div className="sic-card">
                <h3>Heritage &amp; Conservation Constraints</h3>
                <p>With <strong>19,000+ listed buildings</strong>, World Heritage Sites (Tower of London, Westminster), and 150+ conservation areas, heritage constraints are almost unavoidable in inner London. Our Site Feasibility Report identifies heritage designations within the site and its setting, flagging where a Heritage Impact Assessment may be required.</p>
            </div>
            <div className="sic-card">
                <h3>Ground Conditions &amp; Geology</h3>
                <p><strong>London Clay</strong> dominates much of the capital, but the underlying Lambeth Group and Thanet Sand create variable conditions that significantly affect foundation design. Shrink-swell clay risk is particularly acute in outer boroughs with mature trees. Our desktop ground investigation analyses BGS mapping, borehole logs, and groundwater data.</p>
            </div>
            <div className="sic-card">
                <h3>Borough-Specific Planning Policies</h3>
                <p>Each of London’s <strong>33 local planning authorities</strong> operates under both the London Plan and its own Local Plan, creating a patchwork of policies on density, affordable housing, design standards, and sustainability requirements. Our reports reference the correct LPA policies for your site location.</p>
            </div>
        </div>
    </div>
</section>

{/*  Products Grid  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Site Intelligence reports for London">
    <div className="sic-container">
        <h2 className="sic-section-title">Reports for London Projects</h2>
        <p className="sic-body">Each report draws on 60+ authoritative data sources and is interpreted by qualified engineers with London-specific knowledge.</p>
        <div className="sic-product-grid">
            <div className="sic-product-card">
                <span className="sic-product-icon">&#128506;</span>
                <h3>Site Feasibility Report</h3>
                <p>Broad constraint screening across 27+ categories. Identifies planning restrictions, flood risk, heritage designations, ecology, and ground conditions for your London site. Includes Planning Friction Score™ and risk register.</p>
                <a href="/site-intelligence/site-feasibility-report/" className="sic-product-btn">From £295 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#9939;</span>
                <h3>Geotechnical Desk Study</h3>
                <p>Desktop ground investigation analysing London Clay geology, borehole data, groundwater levels, shrink-swell risk, and contamination history. Foundation recommendations included for London’s variable ground conditions.</p>
                <a href="/site-intelligence/geotechnical-desk-study/" className="sic-product-btn">From £395 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#127754;</span>
                <h3>Flood Risk Assessment</h3>
                <p>Planning-ready FRA covering Thames fluvial risk, surface water flooding, groundwater, and sewer flood risk. Includes climate change allowances, Sequential Test guidance, and mitigation strategy for London boroughs.</p>
                <a href="/site-intelligence/flood-risk-assessment/" className="sic-product-btn">From £495 — Learn More</a>
            </div>
        </div>
    </div>
</section>

{/*  LPA Info  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="London local planning authorities">
    <div className="sic-container">
        <h2 className="sic-section-title">London Planning Authorities We Cover</h2>
        <p className="sic-body">Site Intelligence reports are available for sites under any of London’s 33 local planning authorities. Reports reference the correct Local Plan policies and validation requirements for your borough.</p>
        <div className="sic-lpa-grid">
            <div className="sic-lpa-card">
                <h4>Central London</h4>
                <p>City of London, Westminster, Camden, Islington, Kensington &amp; Chelsea, Southwark, Lambeth, Tower Hamlets</p>
                <p>Typically: heritage-dense, AQMA, strategic views, Article 4 directions</p>
            </div>
            <div className="sic-lpa-card">
                <h4>South London</h4>
                <p>Wandsworth, Lewisham, Greenwich, Croydon, Bromley, Sutton, Merton, Kingston upon Thames, Richmond upon Thames</p>
                <p>Typically: surface water flood risk, conservation areas, green belt (outer)</p>
            </div>
            <div className="sic-lpa-card">
                <h4>North &amp; East London</h4>
                <p>Hackney, Haringey, Barnet, Enfield, Waltham Forest, Redbridge, Newham, Barking &amp; Dagenham, Havering</p>
                <p>Typically: contaminated former industrial land, UXO risk, Lee Valley flood risk</p>
            </div>
            <div className="sic-lpa-card">
                <h4>West London</h4>
                <p>Ealing, Hounslow, Hillingdon, Brent, Harrow, Hammersmith &amp; Fulham</p>
                <p>Typically: Heathrow safeguarding, Grand Union Canal corridor, surface water flooding</p>
            </div>
        </div>
    </div>
</section>

{/*  Process Steps  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="How it works">
    <div className="sic-container">
        <h2 className="sic-section-title">How It Works</h2>
        <div className="sic-process">
            <div className="sic-step">
                <div className="sic-step-num">1</div>
                <div className="sic-step-content">
                    <h4>Send Us the Address</h4>
                    <p>Give us the property address, postcode, or a What3Words reference. That’s all we need to get started. No drawings required.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">2</div>
                <div className="sic-step-content">
                    <h4>We Pull the Data</h4>
                    <p>Our system queries 60+ authoritative sources — the Environment Agency, British Geological Survey, Historic England, Natural England, the GLA, and your borough’s planning portal.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">3</div>
                <div className="sic-step-content">
                    <h4>Engineers Interpret</h4>
                    <p>Raw data is meaningless without context. Our qualified engineers read every dataset, identify what matters for your London project, and translate findings into actionable advice.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">4</div>
                <div className="sic-step-content">
                    <h4>Report Delivered</h4>
                    <p>You receive a professionally formatted report with traffic-light ratings, risk scores, and clear next steps. Typically within 48 hours of instruction.</p>
                </div>
            </div>
        </div>
    </div>
</section>

{/*  FAQ  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="London environmental report FAQs">
    <div className="sic-container">
        <h2 className="sic-section-title">London Environmental Report FAQs</h2>
        <div className="sic-faq">
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Do I need an environmental report for a London planning application?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    It depends on the site and your proposal. If your London site is in or near a flood zone, you will almost certainly need a <strong>Flood Risk Assessment</strong>. If the site has a history of industrial or commercial use, most boroughs will require a <strong>Phase 1 Desk Study</strong> (contamination screening) as a validation requirement. Near heritage assets, a <strong>Heritage Impact Assessment</strong> may be required. A Site Feasibility Report screens all of these constraints in one document, telling you which specialist reports are actually needed.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What flood risks affect London development sites?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    London faces four main flood sources: <strong>tidal flooding</strong> from the Thames (mitigated by the Thames Barrier until 2070), <strong>fluvial flooding</strong> from tributaries like the Lea, Wandle, and Ravensbourne, <strong>surface water flooding</strong> (the fastest-growing risk, especially in heavily paved inner boroughs), and <strong>groundwater flooding</strong> in areas where the water table is high. Our Flood Risk Assessment covers all four sources with climate change projections.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is contaminated land common in London?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes. London’s industrial heritage means contaminated land is widespread, particularly on former <strong>gasworks, railway sidings, docklands, tanneries, and factory sites</strong>. Even residential streets in inner London may overlie made ground containing construction rubble, coal ash, or heavy metals. Our Geotechnical Desk Study screens historical land use maps, Environment Agency pollution records, and BGS geology data to assess contamination risk before you commit to costly intrusive investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How does the London Plan affect environmental reporting?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    The <strong>London Plan 2021</strong> sits above each borough’s Local Plan and sets strategic policies on sustainable drainage (Policy SI&nbsp;13), air quality (Policy SI&nbsp;1), heritage (Policy HC&nbsp;1), and biodiversity net gain. All London planning applications must comply with both tiers. Our reports reference relevant London Plan and Local Plan policies for your specific borough, so you know exactly what the planning authority expects.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Can I use a desktop report instead of a full Phase 1 site investigation?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    A desktop environmental report is a <strong>Tier 1 assessment</strong> — it analyses published data from authoritative sources without a physical site visit. For many planning applications, a desktop report is sufficient to satisfy validation requirements and identify whether further intrusive investigation is needed. If your site has complex contamination or geotechnical issues, a desktop study is the cost-effective first step before committing to a full Phase 2 intrusive investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Which London boroughs require a Flood Risk Assessment?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Any London borough may require an FRA if your site is in <strong>Flood Zone 2 or 3</strong>, or if the site exceeds 1 hectare in Flood Zone 1. Boroughs with the highest flood risk include <strong>Richmond, Kingston, Hammersmith &amp; Fulham, Tower Hamlets, Greenwich, Lewisham, and Newham</strong>. However, surface water flood risk can trigger an FRA requirement anywhere in London. Our Flood Risk Assessment identifies exactly which flood sources affect your site and provides a planning-ready document.
                </div>
            </div>
        </div>
    </div>
</section>

{/*  Trust Signals  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Trust signals">
    <div className="sic-container">
        <div className="sic-stats">
            <div>
                <p className="sic-stat-num">60+</p>
                <p className="sic-stat-label">Data Sources Interrogated</p>
            </div>
            <div>
                <p className="sic-stat-num">48hr</p>
                <p className="sic-stat-label">Typical Turnaround</p>
            </div>
            <div>
                <p className="sic-stat-num">33</p>
                <p className="sic-stat-label">London LPAs Covered</p>
            </div>
            <div>
                <p className="sic-stat-num">300+</p>
                <p className="sic-stat-label">Projects Delivered</p>
            </div>
        </div>
        <div className="sic-info">
            <h4>Engineering Interpretation, Not Just Data</h4>
            <p>Anyone can pull a flood map or check a planning portal. The difference is interpretation. Our qualified engineers read every dataset in context — cross-referencing London Clay geology with drainage capacity, Thames flood zones with climate change projections, heritage designations with planning policy. The result is actionable intelligence, not a data dump.</p>
        </div>
    </div>
</section>

{/*  CTA Footer  */}
<section className="sic-cta-footer">
    <h2>Request a Report for London</h2>
    <p>Send us a London property address and we’ll screen it against 60+ data sources — typically within 48 hours.</p>
    <a href="/contact-pf-co-construction/" className="sic-cta-footer-btn">Request a Report</a>
</section>




      </main>
    </>
  );
};

export default CityLondon;
