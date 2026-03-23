import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const CityBristol = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Site Intelligence Bristol | PF & Co Construction",
  "image": "https://pfcoconstruction.co.uk/wp-content/uploads/2024/01/pfco-logo.png",
  "url": "https://pfcoconstruction.co.uk/si-bristol/",
  "telephone": "01483 363 210",
  "priceRange": "££",
  "description": "Desktop environmental reports for Bristol projects. Tidal flooding, contamination, conservation area constraints, and ground conditions screening from 60+ data sources.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bristol",
    "addressRegion": "South West England",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 51.4545,
    "longitude": -2.5879
  },
  "areaServed": ["Bristol", "Clifton", "Redland", "Bedminster", "Temple Quarter", "Harbourside", "Southville", "Bishopston"],
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
        title="Site Intelligence Bristol | PF & Co Construction"
        description="Desktop environmental reports for Bristol projects. Tidal flooding, contamination, conservation area constraints, and ground conditions screening from 60+ data sources."
        path="/si-bristol"
        jsonLd={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        

{/*  Breadcrumb  */}
<nav className="sic-breadcrumb" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/site-intelligence">Site Intelligence</Link> <span>/</span>
    <span style={{ color: 'var(--sic-white)' }}>Bristol</span>
</nav>

{/*  Hero  */}
<section className="sic-hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('/images/bristol_city_hero.png')` }} aria-label="Site Intelligence Reports in Bristol">
    <div className="sic-hero-inner">
        <h1>Site Intelligence Reports<br />in Bristol</h1>
        <p className="sic-sub">Avon Gorge Geology • Tidal Flooding • Conservation Areas</p>
        <p className="sic-subtitle"><strong>Desktop-First Pre-Planning Due Diligence:</strong> Desktop environmental reports for Bristol development projects. We screen tidal flood risk, contamination, conservation area constraints, and ground conditions across all 4 Bristol-area planning authorities — typically within 48 hours.</p>
    </div>
</section>

{/*  Atomic Answer  */}
<div className="sic-container">
    <div className="sic-atomic">
        <h2>What Environmental Reports Do I Need for Planning in Bristol?</h2>
        <p>The reports you need depend on your site’s location and constraints. If your Bristol site is near the <strong>River Avon or its tidal reach</strong>, you will almost certainly need a Flood Risk Assessment. If the site has a history of industrial or dock use (common in Harbourside, Temple Quarter, and Bedminster), most authorities will require a <strong>Phase 1 Desk Study</strong> for contamination screening. Within Bristol’s extensive conservation areas (Clifton, Redland, Cotham), a heritage impact screening may be required.</p>
        <p>A Site Intelligence™ Site Feasibility Report screens all of these constraints in one document, telling you exactly which specialist reports are needed. Reports start from <strong>£295</strong> for a Site Feasibility Report, <strong>£395</strong> for a Geotechnical Desk Study, and <strong>£495</strong> for a Flood Risk Assessment.</p>
    </div>
</div>

{/*  Local Expertise Callout  */}
<div className="sic-container">
    <div className="sic-expertise">
        <h2>Why Bristol Sites Need Desktop Screening First</h2>
        <p className="sic-expertise-sub">4 Planning Authorities. Dramatic Geology. One Report.</p>
        <ul>
            <li><strong>Avon Gorge and Carboniferous Limestone geology</strong> — Bristol sits on complex geology including Carboniferous Limestone, sandstone, and Mercia Mudstone; the Avon Gorge exposes dramatic geological features that affect ground stability and foundation design</li>
            <li><strong>Tidal flooding from the River Avon</strong> — the tidal reach of the River Avon extends deep into the city; the Floating Harbour provides some protection, but tidal and fluvial flood risk affects large areas of central and south Bristol</li>
            <li><strong>Extensive conservation areas</strong> — Bristol has over 30 conservation areas including Clifton, Redland, Cotham, and the City Docks; development within or affecting the setting of these areas requires heritage impact screening</li>
            <li><strong>Former dock and industrial contamination</strong> — Harbourside, Temple Quarter, and parts of Bedminster and St Philip’s Marsh have a history of dock activity, chemical works, and manufacturing that has left contaminated soil and groundwater</li>
            <li><strong>Steep topography affecting stability</strong> — Bristol’s hilly terrain creates slope stability challenges, particularly in areas like Clifton, Totterdown, and Windmill Hill where development on steep gradients requires careful geotechnical consideration</li>
            <li><strong>Temple Quarter Enterprise Zone</strong> — the major regeneration zone around Bristol Temple Meads station imposes specific design, density, and sustainability requirements on development proposals within the enterprise zone boundary</li>
            <li><strong>Bristol Tree Replacement Standard</strong> — Bristol City Council requires replacement planting for trees lost to development under its Tree Replacement Standard (BTRS); this affects site layouts and landscaping schemes across the authority area</li>
            <li><strong>Bristol Local Plan 2024</strong> — the emerging Bristol Local Plan introduces new policies on carbon neutrality, ecological emergency, and housing density that affect environmental reporting requirements for all development proposals</li>
        </ul>
    </div>
</div>

{/*  Local Challenges  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Why Bristol projects need screening">
    <div className="sic-container">
        <h2 className="sic-section-title">Bristol’s Environmental Risk Landscape</h2>
        <p className="sic-body">Bristol’s dramatic topography, tidal river, and rich industrial heritage create layers of environmental complexity that standard conveyancing searches rarely capture. Site Intelligence screens these risks before you commit.</p>
        <div className="sic-grid">
            <div className="sic-card">
                <h3>Tidal &amp; Fluvial Flooding</h3>
                <p>The <strong>River Avon’s tidal reach</strong> extends deep into central Bristol, creating significant tidal flood risk along the Floating Harbour, Temple Quarter, and downstream towards Avonmouth. The Frome and Malago tributaries add fluvial and surface water flood risk. Climate change is increasing tidal levels in the Bristol Channel, one of the highest tidal ranges in the world. Our Flood Risk Assessment maps all flood sources and models climate change allowances to 2125.</p>
            </div>
            <div className="sic-card">
                <h3>Contaminated Land &amp; Dockside Legacy</h3>
                <p>Bristol’s dockside and industrial heritage has left a legacy of <strong>contaminated soil and groundwater</strong> across Harbourside, Temple Quarter, St Philip’s Marsh, and parts of Bedminster. Former gas works, chemical plants, lead smelters, and tobacco processing facilities are common sources. Our Geotechnical Desk Study screens historical land use maps, Environment Agency records, and BGS geology data to assess contamination risk.</p>
            </div>
            <div className="sic-card">
                <h3>Conservation Area Constraints</h3>
                <p>Bristol has <strong>over 30 conservation areas</strong> covering significant parts of the city, from Clifton and Redland to the City Docks and Queen Square. Development within or affecting the setting of a conservation area faces additional design scrutiny and may require a Heritage Impact Assessment. Our Site Feasibility Report identifies all heritage designations affecting your site and flags where specialist assessments may be required.</p>
            </div>
            <div className="sic-card">
                <h3>Complex Geology &amp; Slope Stability</h3>
                <p>Bristol’s geology is exceptionally varied: <strong>Carboniferous Limestone</strong> in Clifton and the Avon Gorge, Triassic sandstone in Redland, and Mercia Mudstone in eastern areas. The city’s hilly terrain creates slope stability challenges, particularly on steep sites in Clifton, Totterdown, and Windmill Hill. Our desktop ground investigation analyses BGS mapping, borehole logs, and topographic data to inform preliminary foundation recommendations.</p>
            </div>
            <div className="sic-card">
                <h3>Temple Quarter &amp; Regeneration Policy</h3>
                <p>The <strong>Temple Quarter Enterprise Zone</strong> around Bristol Temple Meads is one of the largest urban regeneration projects in the south-west. Development within the zone benefits from streamlined planning processes but must meet specific design codes, sustainability standards, and infrastructure contribution requirements. Our reports reference the correct regeneration framework policies and identify site-specific constraints within the zone.</p>
            </div>
        </div>
    </div>
</section>

{/*  Products Grid  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Site Intelligence reports for Bristol">
    <div className="sic-container">
        <h2 className="sic-section-title">Reports for Bristol Projects</h2>
        <p className="sic-body">Each report draws on 60+ authoritative data sources and is interpreted by qualified engineers with Bristol-specific knowledge.</p>
        <div className="sic-product-grid">
            <div className="sic-product-card">
                <span className="sic-product-icon">&#128506;</span>
                <h3>Site Feasibility Report</h3>
                <p>Broad constraint screening across 27+ categories. Identifies tidal flood risk, conservation area constraints, contamination, ecology, and ground conditions for your Bristol site. Includes Planning Friction Score™ and risk register.</p>
                <a href="/site-intelligence/site-feasibility-report/" className="sic-product-btn">From £295 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#9939;</span>
                <h3>Geotechnical Desk Study</h3>
                <p>Desktop ground investigation analysing Carboniferous Limestone and Mercia Mudstone geology, borehole data, slope stability, groundwater levels, and contamination history. Foundation recommendations included for Bristol’s variable topography and ground conditions.</p>
                <a href="/site-intelligence/geotechnical-desk-study/" className="sic-product-btn">From £395 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#127754;</span>
                <h3>Flood Risk Assessment</h3>
                <p>Planning-ready FRA covering Avon tidal risk, Frome and Malago fluvial flooding, surface water, and groundwater risk. Includes climate change allowances for the Bristol Channel’s exceptional tidal range and mitigation strategy.</p>
                <a href="/site-intelligence/flood-risk-assessment/" className="sic-product-btn">From £495 — Learn More</a>
            </div>
        </div>
    </div>
</section>

{/*  LPA Info  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Bristol local planning authorities">
    <div className="sic-container">
        <h2 className="sic-section-title">Bristol-Area Planning Authorities We Cover</h2>
        <p className="sic-body">Site Intelligence reports are available for sites under any of the 4 Bristol-area local planning authorities. Reports reference the correct Local Plan policies and validation requirements for your authority.</p>
        <div className="sic-lpa-grid">
            <div className="sic-lpa-card">
                <h4>Bristol City Council</h4>
                <p>Bristol City Council (Clifton, Redland, Bedminster, Temple Quarter, Harbourside, Southville, Bishopston, St Philip’s Marsh)</p>
                <p>Typically: tidal flood risk, conservation areas, dock contamination, Tree Replacement Standard, steep topography</p>
            </div>
            <div className="sic-lpa-card">
                <h4>South Gloucestershire</h4>
                <p>South Gloucestershire Council (Filton, Bradley Stoke, Patchway, Thornbury, Yate)</p>
                <p>Typically: green belt, former aerospace contamination, Severn Estuary flood risk, new neighbourhood growth areas</p>
            </div>
            <div className="sic-lpa-card">
                <h4>North Somerset</h4>
                <p>North Somerset Council (Portishead, Clevedon, Nailsea, Weston-super-Mare)</p>
                <p>Typically: Severn Estuary tidal risk, Mendip Hills AONB, conservation areas, coastal erosion</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Bath &amp; North East Somerset</h4>
                <p>Bath &amp; North East Somerset Council (Bath, Keynsham, Midsomer Norton)</p>
                <p>Typically: World Heritage Site (Bath), extensive conservation areas, coal mining legacy, Avon valley flood risk</p>
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
                    <p>Our system queries 60+ authoritative sources — the Environment Agency, British Geological Survey, Historic England, Natural England, Bristol City Council’s planning portal, and specialist tidal data for the Bristol Channel.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">3</div>
                <div className="sic-step-content">
                    <h4>Engineers Interpret</h4>
                    <p>Raw data is meaningless without context. Our qualified engineers read every dataset, identify what matters for your Bristol project, and translate findings into actionable advice.</p>
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
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Bristol environmental report FAQs">
    <div className="sic-container">
        <h2 className="sic-section-title">Bristol Environmental Report FAQs</h2>
        <div className="sic-faq">
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What flood risks affect Bristol development sites?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Bristol faces three main flood sources: <strong>tidal flooding</strong> from the River Avon, which has one of the highest tidal ranges in the world via the Bristol Channel, <strong>fluvial flooding</strong> from the River Frome, Malago, and other tributaries, and <strong>surface water flooding</strong> caused by heavy rainfall on Bristol’s steep topography overwhelming the drainage network. The Floating Harbour provides some tidal protection to central Bristol, but areas downstream towards Avonmouth and upstream towards Bath Road are particularly vulnerable. Our Flood Risk Assessment covers all flood sources with climate change projections.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is contamination a concern in Harbourside and Temple Quarter?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes. Both <strong>Harbourside and Temple Quarter</strong> have significant histories of industrial and dock activity. Former gas works, lead shot towers, chemical processing plants, tobacco warehouses, and railway maintenance depots have left contaminated soil and groundwater across these areas. Common contaminants include heavy metals (lead, zinc, arsenic), polycyclic aromatic hydrocarbons (PAHs), and petroleum hydrocarbons. <strong>St Philip’s Marsh</strong> is another area with extensive industrial contamination. Our Geotechnical Desk Study screens historical Ordnance Survey maps and Environment Agency pollution records to assess contamination risk before you instruct intrusive investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How do conservation areas affect development in Bristol?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Bristol has <strong>over 30 conservation areas</strong> covering areas such as Clifton, Redland, Cotham, Kingsdown, the City Docks, and Queen Square. Within a conservation area, additional planning controls apply: permitted development rights are restricted, demolition requires consent, and new development must preserve or enhance the character and appearance of the area. Even development <strong>outside but adjacent to</strong> a conservation area must consider its impact on the setting. Our Site Feasibility Report identifies all conservation area designations affecting your site and flags where a Heritage Impact Assessment may be required.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Are steep sites in Bristol difficult to develop?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Bristol’s <strong>hilly topography</strong> creates specific challenges for development. Steep sites in areas like Clifton, Totterdown, Windmill Hill, and Montpelier may require slope stability assessment, retaining wall design, and careful consideration of drainage and access. The underlying geology varies significantly with elevation — Carboniferous Limestone on the ridges, clay in the valleys — affecting foundation design. Our Geotechnical Desk Study analyses topographic data, BGS geology, and borehole records to identify slope stability and foundation risks for steep Bristol sites.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What is the Bristol Tree Replacement Standard?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    The <strong>Bristol Tree Replacement Standard (BTRS)</strong> requires developers to replace trees lost to development. The number of replacement trees is calculated based on the trunk diameter of the trees being removed — typically, one replacement tree is required for every 75mm of trunk diameter lost. This can significantly affect site layouts and landscaping budgets. For example, removing a mature tree with a 600mm trunk diameter could require eight replacement trees. Our Site Feasibility Report identifies tree preservation orders and flags the BTRS requirement, helping you factor replacement planting into your scheme design from the outset.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Can I use a desktop report instead of a full intrusive investigation?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    A desktop environmental report is a <strong>Tier 1 assessment</strong> — it analyses published data from authoritative sources without a physical site visit. For many planning applications, a desktop report is sufficient to satisfy validation requirements and identify whether further intrusive investigation is needed. If your Bristol site has complex contamination, slope stability concerns, or geotechnical issues, a desktop study is the cost-effective first step before committing to a full Phase 2 intrusive investigation. It tells you what you are dealing with before you spend money on boreholes and trial pits.
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
                <p className="sic-stat-num">4</p>
                <p className="sic-stat-label">Bristol-Area LPAs Covered</p>
            </div>
            <div>
                <p className="sic-stat-num">300+</p>
                <p className="sic-stat-label">Projects Delivered</p>
            </div>
        </div>
        <div className="sic-info">
            <h4>Engineering Interpretation, Not Just Data</h4>
            <p>Anyone can pull a flood map or check a planning portal. The difference is interpretation. Our qualified engineers read every dataset in context — cross-referencing Carboniferous Limestone geology with slope stability data, tidal flood zones with Bristol Channel climate change projections, conservation area boundaries with emerging Local Plan policy. The result is actionable intelligence, not a data dump.</p>
        </div>
    </div>
</section>

{/*  CTA Footer  */}
<section className="sic-cta-footer">
    <h2>Request a Report for Bristol</h2>
    <p>Send us a Bristol property address and we’ll screen it against 60+ data sources — typically within 48 hours.</p>
    <a href="/contact-pf-co-construction/" className="sic-cta-footer-btn">Request a Report</a>
</section>




      </main>
    </>
  );
};

export default CityBristol;
