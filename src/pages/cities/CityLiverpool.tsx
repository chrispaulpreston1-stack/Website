import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const CityLiverpool = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Site Intelligence Liverpool | PF & Co Construction",
  "image": "https://pfcoconstruction.co.uk/wp-content/uploads/2024/01/pfco-logo.png",
  "url": "https://pfcoconstruction.co.uk/si-liverpool/",
  "telephone": "01483 363 210",
  "priceRange": "££",
  "description": "Desktop environmental reports for Liverpool projects. Flood risk, contamination, heritage constraints, and ground conditions screening from 60+ data sources.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Liverpool",
    "addressRegion": "Merseyside",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.4084,
    "longitude": -2.9916
  },
  "areaServed": ["Liverpool", "Sefton", "Knowsley", "St Helens", "Wirral", "Bootle", "Birkenhead"],
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
        title="Site Intelligence Liverpool | PF & Co Construction"
        description="Desktop environmental reports for Liverpool projects. Flood risk, contamination, heritage constraints, and ground conditions screening from 60+ data sources."
        url="https://pfcoconstruction.co.uk/si-liverpool/"
        schemaData={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        

{/*  Breadcrumb  */}
<nav className="sic-breadcrumb" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/site-intelligence">Site Intelligence</Link> <span>/</span>
    <span style={{ color: 'var(--sic-white)' }}>Liverpool</span>
</nav>

{/*  Hero  */}
<section className="sic-hero" aria-label="Site Intelligence Reports in Liverpool">
    <div className="sic-hero-inner">
        <h1>Site Intelligence Reports<br />in Liverpool</h1>
        <p className="sic-sub">Mersey Estuary Flooding • Docklands Brownfield • Maritime Heritage</p>
        <p className="sic-subtitle">Desktop environmental reports for Liverpool development projects. We screen flood risk, contamination, heritage constraints, and ground conditions across Liverpool and Merseyside — typically within 48 hours. All reports are prepared under English planning frameworks (TCPA 1990 and NPPF).</p>
    </div>
</section>

{/*  Atomic Answer  */}
<div className="sic-container">
    <div className="sic-atomic">
        <h2>How Much Does an Environmental Report Cost in Liverpool?</h2>
        <p>A Site Intelligence™ desktop environmental report for a Liverpool site typically costs between <strong>£295 and £495</strong>, depending on the report type. A Site Feasibility Report (broad constraint screening) starts at £295. A Geotechnical Desk Study (ground conditions focus) starts at £395. A Flood Risk Assessment starts at £495.</p>
        <p>By comparison, a traditional Phase 1 environmental consultant in Liverpool typically charges <strong>£1,500&ndash;£4,000+</strong> and takes 2&ndash;4 weeks. Site Intelligence reports are desktop-based, drawing on 60+ authoritative data sources, and are typically delivered within 48 hours.</p>
    </div>
</div>

{/*  Local Expertise Callout  */}
<div className="sic-container">
    <div className="sic-expertise">
        <h2>Why Liverpool Sites Need Environmental Screening</h2>
        <p className="sic-expertise-sub">5 Merseyside LPAs. Docklands Legacy. One Report.</p>
        <ul>
            <li><strong>Mersey estuary tidal flooding</strong> — the Mersey estuary creates significant tidal flood risk along Liverpool’s waterfront and docklands; spring tides combined with storm surges can push water levels well above normal, affecting development sites along the river corridor</li>
            <li><strong>Docklands brownfield contamination</strong> — Liverpool’s historic dock system and surrounding industrial land have left widespread soil and groundwater contamination from shipbuilding, warehousing, and heavy industry spanning over 200 years</li>
            <li><strong>Maritime heritage and conservation</strong> — although the World Heritage Site was delisted in 2021, Liverpool retains over 2,500 listed buildings and 36 conservation areas; development near these assets requires heritage impact screening</li>
            <li><strong>Liverpool Waters regeneration</strong> — the 60-hectare Liverpool Waters scheme is one of the largest regeneration projects in the UK; sites within this zone face overlapping constraints including tidal flood risk, dock infrastructure, and contaminated land</li>
            <li><strong>Triassic sandstone geology</strong> — Liverpool sits on Sherwood Sandstone, a major aquifer; groundwater protection zones and the interaction between contaminated land and underlying aquifer create additional environmental constraints</li>
            <li><strong>Knowledge Quarter development</strong> — the area around the University of Liverpool, Royal Liverpool Hospital, and Paddington Village is undergoing intensive redevelopment with constraints including heritage assets, contaminated land, and evolving planning policy</li>
            <li><strong>Former industrial contamination</strong> — beyond the docks, Liverpool’s industrial heritage includes chemical works, copper smelting, oil refining, and manufacturing that have left contamination legacies across Garston, Speke, and the north docks corridor</li>
            <li><strong>Surface water flood risk</strong> — Liverpool’s topography channels surface water from higher ground in the east towards the Mersey; combined sewer systems in older parts of the city are susceptible to overwhelming during intense rainfall events</li>
        </ul>
    </div>
</div>

{/*  Local Challenges  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Why Liverpool projects need screening">
    <div className="sic-container">
        <h2 className="sic-section-title">Liverpool’s Environmental Risk Landscape</h2>
        <p className="sic-body">Liverpool’s maritime and industrial history has shaped one of the most complex brownfield environments in northern England. Standard conveyancing searches rarely capture the full picture. Site Intelligence screens these risks before you commit.</p>
        <div className="sic-grid">
            <div className="sic-card">
                <h3>Mersey Estuary &amp; Tidal Flooding</h3>
                <p>The Mersey estuary creates <strong>significant tidal flood risk</strong> along Liverpool’s waterfront. Spring tides combined with North Atlantic storm surges can push water levels well above predicted heights. The Environment Agency’s Flood Map shows extensive Flood Zone 2 and 3 areas along the docklands and waterfront. Our Flood Risk Assessment maps tidal, fluvial, surface water, and groundwater flood risk with climate change allowances modelled to 2125.</p>
            </div>
            <div className="sic-card">
                <h3>Docklands Contamination</h3>
                <p>Liverpool’s dock system — once the largest in the world — has left a <strong>legacy of contaminated land</strong> across the waterfront and hinterland. Former shipyards, warehouses, timber yards, and industrial works have deposited heavy metals, hydrocarbons, asbestos, and other contaminants into the soil and groundwater. Our Geotechnical Desk Study screens historical land use, Environment Agency pollution records, and BGS data to identify contamination risks.</p>
            </div>
            <div className="sic-card">
                <h3>Heritage &amp; Conservation Constraints</h3>
                <p>Liverpool has over <strong>2,500 listed buildings</strong> and 36 conservation areas, concentrated around the waterfront, Georgian Quarter, and Ropewalks. Despite the World Heritage Site delisting in 2021, heritage constraints remain extensive. The Pier Head, Albert Dock, and Stanley Dock are all Grade I listed. Our Site Feasibility Report identifies heritage designations within the site and its setting, flagging where a Heritage Impact Assessment may be required.</p>
            </div>
            <div className="sic-card">
                <h3>Ground Conditions &amp; Sandstone Aquifer</h3>
                <p>Liverpool sits on <strong>Sherwood Sandstone</strong>, one of the most important aquifers in England. This creates a dual risk: contamination from historical industrial use can migrate into groundwater, and the Environment Agency designates <strong>Source Protection Zones</strong> around public water supply boreholes. Our desktop ground investigation analyses BGS mapping, borehole logs, groundwater data, and aquifer vulnerability to assess risk to your development.</p>
            </div>
            <div className="sic-card">
                <h3>Regeneration Zone Complexity</h3>
                <p>Liverpool is undergoing transformative regeneration across multiple zones — <strong>Liverpool Waters, the Knowledge Quarter, the Baltic Triangle, and Ten Streets</strong>. Each zone has its own supplementary planning document, design codes, and environmental constraints. Sites within these areas face overlapping requirements that standard searches miss. Our reports identify which regeneration framework applies to your site and flag the specific environmental requirements.</p>
            </div>
        </div>
    </div>
</section>

{/*  Products Grid  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Site Intelligence reports for Liverpool">
    <div className="sic-container">
        <h2 className="sic-section-title">Reports for Liverpool Projects</h2>
        <p className="sic-body">Each report draws on 60+ authoritative data sources and is interpreted by qualified engineers with knowledge of Liverpool’s specific environmental risks.</p>
        <div className="sic-product-grid">
            <div className="sic-product-card">
                <span className="sic-product-icon">&#128506;</span>
                <h3>Site Feasibility Report</h3>
                <p>Broad constraint screening across 27+ categories. Identifies planning restrictions, Mersey tidal flood risk, docklands contamination, heritage designations, ecology, and ground conditions for your Liverpool site. Includes Planning Friction Score™ and risk register.</p>
                <a href="/site-intelligence/site-feasibility-report/" className="sic-product-btn">From £295 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#9939;</span>
                <h3>Geotechnical Desk Study</h3>
                <p>Desktop ground investigation analysing Triassic sandstone geology, aquifer vulnerability, borehole data, groundwater levels, and contamination history. Foundation recommendations included for Liverpool’s docklands and brownfield ground conditions.</p>
                <a href="/site-intelligence/geotechnical-desk-study/" className="sic-product-btn">From £395 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#127754;</span>
                <h3>Flood Risk Assessment</h3>
                <p>Planning-ready FRA covering Mersey estuary tidal risk, surface water flooding, groundwater, and sewer flood risk. Includes climate change allowances, Sequential Test guidance, and mitigation strategy for Liverpool and Merseyside authorities.</p>
                <a href="/site-intelligence/flood-risk-assessment/" className="sic-product-btn">From £495 — Learn More</a>
            </div>
        </div>
    </div>
</section>

{/*  LPA Info  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Liverpool local planning authorities">
    <div className="sic-container">
        <h2 className="sic-section-title">Merseyside Planning Authorities We Cover</h2>
        <p className="sic-body">Site Intelligence reports are available for sites under all five Merseyside local planning authorities. Reports reference the correct Local Plan policies and validation requirements for your area.</p>
        <div className="sic-lpa-grid">
            <div className="sic-lpa-card">
                <h4>Liverpool City Council</h4>
                <p>City centre, waterfront, docklands, Toxteth, Wavertree, West Derby, Garston, Speke</p>
                <p>Typically: tidal flood risk, docklands contamination, heritage density, regeneration zone policies</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Sefton Council</h4>
                <p>Bootle, Crosby, Formby, Southport, Maghull, Litherland</p>
                <p>Typically: coastal flood risk, Sefton Coast SSSI, sand dune ecology, north docks contamination</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Knowsley Council</h4>
                <p>Huyton, Kirkby, Prescot, Halewood, Whiston</p>
                <p>Typically: former industrial contamination, Alt corridor flooding, green belt constraints</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Wirral &amp; St Helens</h4>
                <p>Birkenhead, Wallasey, Bebington (Wirral); St Helens, Rainford, Newton-le-Willows (St Helens)</p>
                <p>Typically: Mersey estuary tidal risk, dock contamination (Wirral); coal mining subsidence, former glass and chemical industry contamination (St Helens)</p>
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
                    <p>Our system queries 60+ authoritative sources — the Environment Agency, British Geological Survey, Historic England, Natural England, and Liverpool City Council’s planning portal.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">3</div>
                <div className="sic-step-content">
                    <h4>Engineers Interpret</h4>
                    <p>Raw data is meaningless without context. Our qualified engineers read every dataset, identify what matters for your Liverpool project, and translate findings into actionable advice.</p>
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
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Liverpool environmental report FAQs">
    <div className="sic-container">
        <h2 className="sic-section-title">Liverpool Environmental Report FAQs</h2>
        <div className="sic-faq">
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How does Mersey estuary flooding affect development in Liverpool?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    The Mersey estuary creates significant <strong>tidal flood risk</strong> along Liverpool’s waterfront and docklands. Spring tides combined with North Atlantic storm surges can push water levels well above predicted heights. The Environment Agency’s Flood Map shows extensive Flood Zone 2 and 3 areas along the waterfront, from the north docks through to Garston. If your site is in or near these zones, you will need a Flood Risk Assessment for any planning application. Our FRA covers tidal, fluvial, surface water, and groundwater flood sources with climate change projections.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is contaminated land common on Liverpool docklands sites?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes. Liverpool’s dock system and surrounding industrial hinterland have left <strong>widespread contamination</strong> from over 200 years of maritime and industrial activity. Former shipyards, timber yards, warehouses, oil storage, and chemical works have deposited heavy metals, hydrocarbons, asbestos, and other contaminants. Sites along the dock road corridor, Stanley Dock, and the north docks are particularly affected. Our Geotechnical Desk Study screens historical land use maps, Environment Agency pollution records, and BGS data to assess contamination risk before you commit to costly intrusive investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What environmental constraints apply to Liverpool Waters?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Liverpool Waters is a 60-hectare regeneration zone covering the historic central and northern docks. Sites face <strong>tidal flood risk</strong> from the Mersey, <strong>contaminated dock and industrial land</strong>, <strong>heritage constraints</strong> (including the Grade I listed Stanley Dock and Tobacco Warehouse), and specific design and density requirements under the Liverpool Waters SPD. A Site Feasibility Report screens all of these constraints in a single document, identifying which specialist reports are needed for your planning application.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Do heritage constraints still apply after World Heritage Site delisting?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes. The delisting of Liverpool’s World Heritage Site in 2021 removed the UNESCO designation, but <strong>all underlying heritage protections remain in force</strong>. Liverpool has over 2,500 listed buildings (including 27 Grade I), 36 conservation areas, and numerous locally listed buildings. The statutory duty under <strong>Sections 66 and 72 of the Planning (Listed Buildings and Conservation Areas) Act 1990</strong> to preserve or enhance listed buildings and conservation areas is unchanged. Development near heritage assets still requires heritage impact screening.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Do I need a contamination screening report for a brownfield site in Liverpool?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    In most cases, yes. Liverpool City Council and other Merseyside authorities typically require a <strong>Phase 1 Desk Study</strong> (contamination screening) as a validation requirement for planning applications on sites with a history of industrial or commercial use. Given Liverpool’s extensive industrial heritage, most brownfield sites will trigger this requirement. A Site Intelligence Geotechnical Desk Study provides the desktop contamination screening that satisfies this validation requirement, identifying whether further Phase 2 intrusive investigation is needed.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Can I use a desktop report instead of a full site investigation?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    A desktop environmental report is a <strong>Tier 1 assessment</strong> — it analyses published data from authoritative sources without a physical site visit. For many planning applications, a desktop report is sufficient to satisfy validation requirements and identify whether further intrusive investigation is needed. If your Liverpool site has complex contamination from docklands or industrial use, a desktop study is the cost-effective first step before committing to a full Phase 2 intrusive investigation.
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
                <p className="sic-stat-num">5</p>
                <p className="sic-stat-label">Merseyside LPAs Covered</p>
            </div>
            <div>
                <p className="sic-stat-num">300+</p>
                <p className="sic-stat-label">Projects Delivered</p>
            </div>
        </div>
        <div className="sic-info">
            <h4>Engineering Interpretation, Not Just Data</h4>
            <p>Anyone can pull a flood map or check a planning portal. The difference is interpretation. Our qualified engineers read every dataset in context — cross-referencing Triassic sandstone aquifer vulnerability with contamination history, Mersey tidal levels with climate change projections, heritage designations with planning policy. The result is actionable intelligence, not a data dump.</p>
        </div>
    </div>
</section>

{/*  CTA Footer  */}
<section className="sic-cta-footer">
    <h2>Request a Report for Liverpool</h2>
    <p>Send us a Liverpool property address and we’ll screen it against 60+ data sources — typically within 48 hours.</p>
    <a href="/contact-pf-co-construction/" className="sic-cta-footer-btn">Request a Report</a>
</section>




      </main>
    </>
  );
};

export default CityLiverpool;
