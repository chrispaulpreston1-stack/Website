import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const CityPlymouth = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Site Intelligence Plymouth | PF & Co Construction",
  "image": "https://pfcoconstruction.co.uk/wp-content/uploads/2024/01/pfco-logo.png",
  "url": "https://pfcoconstruction.co.uk/si-plymouth/",
  "telephone": "01483 363 210",
  "priceRange": "££",
  "description": "Desktop environmental reports for Plymouth projects. Coastal erosion, brownfield contamination, marine conservation, and ground conditions screening from 60+ data sources.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Plymouth",
    "addressRegion": "Devon",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 50.3755,
    "longitude": -4.1427
  },
  "areaServed": ["Plymouth", "Devonport", "Plympton", "Plymstock", "Saltash", "Ivybridge", "Tavistock"],
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
        title="Site Intelligence Plymouth | PF & Co Construction"
        description="Desktop environmental reports for Plymouth projects. Coastal erosion, brownfield contamination, marine conservation, and ground conditions screening from 60+ data sources."
        path="/si-plymouth"
        jsonLd={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        

{/*  Breadcrumb  */}
<nav className="sic-breadcrumb" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/site-intelligence">Site Intelligence</Link> <span>/</span>
    <span style={{ color: 'var(--sic-white)' }}>Plymouth</span>
</nav>

{/*  Hero  */}
<section className="sic-hero" aria-label="Site Intelligence Reports in Plymouth">
    <div className="sic-hero-inner">
        <h1>Site Intelligence Reports<br />in Plymouth</h1>
        <p className="sic-sub">Coastal Erosion • Naval Brownfield • Marine Conservation Zones</p>
        <p className="sic-subtitle">Desktop environmental reports for Plymouth development projects. We screen coastal risk, brownfield contamination, marine conservation, and ground conditions across Plymouth and the surrounding districts — typically within 48 hours.</p>
    </div>
</section>

{/*  Atomic Answer  */}
<div className="sic-container">
    <div className="sic-atomic">
        <h2>Do I Need an Environmental Report for a Plymouth Planning Application?</h2>
        <p>In most cases, yes. Plymouth’s coastal location, naval dockyard heritage, and proximity to <strong>Dartmoor National Park</strong> and the <strong>South Devon AONB</strong> create a complex environmental landscape. Sites in Devonport carry brownfield contamination risk from centuries of naval and industrial use. Coastal sites face erosion, cliff instability, and marine conservation constraints. Even inland sites may be affected by steep topography, Devonian Limestone geology, and surface water drainage challenges.</p>
        <p>Based in the South West, PF &amp; Co Construction has direct knowledge of Plymouth’s environmental landscape. A Site Intelligence™ desktop report screens all of these constraints in one document, typically delivered within <strong>48 hours</strong> and starting from <strong>£295</strong>.</p>
    </div>
</div>

{/*  Local Expertise Callout  */}
<div className="sic-container">
    <div className="sic-expertise">
        <h2>Why Plymouth Sites Need Environmental Screening</h2>
        <p className="sic-expertise-sub">Coastal Risk. Naval Heritage. Marine Protection. One Report.</p>
        <ul>
            <li><strong>Coastal erosion and cliff instability</strong> — Plymouth’s coastline includes actively eroding cliffs, particularly along the Hoe, Mount Batten, and the Sound; development near the coast requires erosion risk assessment and may be affected by Shoreline Management Plan policies</li>
            <li><strong>Naval dockyard brownfield</strong> — Devonport Dockyard and surrounding land carry a legacy of heavy metal, hydrocarbon, and asbestos contamination from centuries of naval construction, ship-breaking, and ordnance handling</li>
            <li><strong>Marine conservation zones</strong> — Plymouth Sound and Estuaries is a Marine Conservation Zone and Special Area of Conservation; development that may affect the marine environment triggers Habitat Regulations Assessment requirements</li>
            <li><strong>Dartmoor National Park fringe</strong> — the north-eastern edge of Plymouth abuts Dartmoor National Park; development in the buffer zone may require landscape and visual impact assessment to protect the National Park setting</li>
            <li><strong>Devonian Limestone and slate geology</strong> — Plymouth’s bedrock geology creates variable ground conditions including limestone dissolution features (cavities and sinkholes) and steep rock slopes that affect foundation design</li>
            <li><strong>South Devon AONB</strong> — the South Devon Area of Outstanding Natural Beauty borders Plymouth to the east; development proposals visible from or affecting the setting of the AONB face heightened landscape scrutiny</li>
            <li><strong>Steep topography and drainage</strong> — Plymouth’s hilly terrain creates significant surface water drainage challenges; steep catchments can concentrate runoff rapidly, increasing flood risk in lower-lying areas</li>
            <li><strong>Waterfront regeneration</strong> — the Plymouth Plan promotes major regeneration along the waterfront, Millbay, and Devonport; these sites typically require comprehensive environmental screening as a condition of development</li>
        </ul>
    </div>
</div>

{/*  Local Challenges  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Why Plymouth projects need screening">
    <div className="sic-container">
        <h2 className="sic-section-title">Plymouth’s Environmental Risk Landscape</h2>
        <p className="sic-body">Plymouth’s position between the sea and the moor, combined with its naval and industrial heritage, creates an environmental risk profile unlike any other English city. Standard conveyancing searches rarely capture the full picture.</p>
        <div className="sic-grid">
            <div className="sic-card">
                <h3>Coastal Erosion &amp; Cliff Instability</h3>
                <p>Plymouth’s coastline includes <strong>actively eroding cliffs and slopes</strong> along the Hoe, Mount Batten, Jennycliff, and the Plym Estuary. The Shoreline Management Plan classifies sections as &ldquo;No Active Intervention&rdquo; or &ldquo;Managed Realignment&rdquo;, meaning development in these zones faces significant constraints. Our reports screen coastal erosion data, cliff recession rates, and SMP policies to assess risk before you commit to a site.</p>
            </div>
            <div className="sic-card">
                <h3>Naval Brownfield Contamination</h3>
                <p><strong>Devonport Dockyard</strong> has operated since 1691, making it the oldest naval dockyard in continuous use. Centuries of ship-building, ordnance storage, and industrial processing have left heavy metal contamination, hydrocarbons, asbestos, and unexploded ordnance across Devonport and surrounding areas. Our Geotechnical Desk Study screens historical land use, Environment Agency records, and MoD contamination data.</p>
            </div>
            <div className="sic-card">
                <h3>Marine Conservation Constraints</h3>
                <p><strong>Plymouth Sound and Estuaries</strong> is designated as both a Marine Conservation Zone and a Special Area of Conservation (SAC). Development proposals that could affect water quality, sediment transport, or marine habitats may trigger Habitat Regulations Assessment. Our Site Feasibility Report identifies marine designations and flags where ecological assessment is likely to be required.</p>
            </div>
            <div className="sic-card">
                <h3>Devonian Limestone Ground Conditions</h3>
                <p>Plymouth’s bedrock is predominantly <strong>Devonian Limestone and slate</strong>, creating variable ground conditions. Limestone dissolution can form cavities, fissures, and sinkholes, while steep rock slopes affect foundation design and excavation. The overlying drift deposits vary significantly across the city. Our desktop ground investigation analyses BGS mapping, borehole logs, and dissolution risk data.</p>
            </div>
            <div className="sic-card">
                <h3>Dartmoor &amp; AONB Buffer Zones</h3>
                <p><strong>Dartmoor National Park</strong> borders Plymouth to the north-east, and the <strong>South Devon AONB</strong> borders to the east. Development visible from these designated landscapes or affecting their setting faces heightened scrutiny. Our reports screen landscape designations, intervisibility zones, and relevant planning policies from the Plymouth Plan and National Park Authority guidance.</p>
            </div>
        </div>
    </div>
</section>

{/*  Products Grid  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Site Intelligence reports for Plymouth">
    <div className="sic-container">
        <h2 className="sic-section-title">Reports for Plymouth Projects</h2>
        <p className="sic-body">Each report draws on 60+ authoritative data sources and is interpreted by qualified engineers with knowledge of Plymouth’s coastal geology and naval heritage.</p>
        <div className="sic-product-grid">
            <div className="sic-product-card">
                <span className="sic-product-icon">&#128506;</span>
                <h3>Site Feasibility Report</h3>
                <p>Broad constraint screening across 27+ categories. Identifies coastal erosion risk, marine conservation designations, brownfield contamination, Dartmoor buffer zones, and flood risk for your Plymouth site. Includes Planning Friction Score™ and risk register.</p>
                <a href="/site-intelligence/site-feasibility-report/" className="sic-product-btn">From £295 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#9939;</span>
                <h3>Geotechnical Desk Study</h3>
                <p>Desktop ground investigation analysing Devonian Limestone and slate geology, borehole data, dissolution risk, cliff stability, and naval brownfield contamination history. Foundation recommendations tailored to Plymouth’s variable rock and slope conditions.</p>
                <a href="/site-intelligence/geotechnical-desk-study/" className="sic-product-btn">From £395 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#127754;</span>
                <h3>Flood Risk Assessment</h3>
                <p>Planning-ready FRA covering tidal and coastal flood risk, surface water flooding from steep catchments, groundwater, and sewer capacity. Includes climate change allowances, Sequential Test guidance, and SuDS recommendations for Plymouth’s varied topography.</p>
                <a href="/site-intelligence/flood-risk-assessment/" className="sic-product-btn">From £495 — Learn More</a>
            </div>
        </div>
    </div>
</section>

{/*  LPA Info  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Plymouth local planning authorities">
    <div className="sic-container">
        <h2 className="sic-section-title">Plymouth Planning Authorities We Cover</h2>
        <p className="sic-body">Site Intelligence reports are available for sites under Plymouth City Council and the surrounding district councils. Reports reference the correct Local Plan policies and validation requirements for your authority.</p>
        <div className="sic-lpa-grid">
            <div className="sic-lpa-card">
                <h4>Plymouth City Council</h4>
                <p>Covers the city centre, Devonport, Stonehouse, the Hoe, Millbay, Plympton, Plymstock, and Derriford. The Plymouth Plan and Joint Local Plan set out policies on waterfront regeneration, brownfield redevelopment, and coastal risk management.</p>
                <p>Typically: naval brownfield contamination, coastal erosion, marine conservation, flood risk</p>
            </div>
            <div className="sic-lpa-card">
                <h4>South Hams District Council</h4>
                <p>Covers Ivybridge, Kingsbridge, Totnes, Salcombe, and the South Devon coastline east of Plymouth. The Joint Local Plan and South Devon AONB Management Plan address landscape sensitivity, rural character, and coastal change.</p>
                <p>Typically: AONB landscape impact, coastal erosion, rural ecology, agricultural land</p>
            </div>
            <div className="sic-lpa-card">
                <h4>West Devon Borough Council</h4>
                <p>Covers Tavistock, Okehampton, and the western fringes of Dartmoor. The Joint Local Plan addresses Dartmoor National Park buffer zone impacts, rural housing delivery, and the former mining landscape heritage.</p>
                <p>Typically: Dartmoor buffer zone, mining contamination, landscape sensitivity, flood risk</p>
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
                    <p>Our system queries 60+ authoritative sources — the Environment Agency, British Geological Survey, Historic England, Natural England, the Marine Management Organisation, and Plymouth’s planning portal.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">3</div>
                <div className="sic-step-content">
                    <h4>Engineers Interpret</h4>
                    <p>Raw data is meaningless without context. Our qualified engineers read every dataset, identify what matters for your Plymouth project, and translate findings into actionable advice.</p>
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
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Plymouth environmental report FAQs">
    <div className="sic-container">
        <h2 className="sic-section-title">Plymouth Environmental Report FAQs</h2>
        <div className="sic-faq">
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How does coastal erosion affect development in Plymouth?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Plymouth’s coastline includes <strong>actively eroding cliffs and slopes</strong> along the Hoe, Mount Batten, Jennycliff, and sections of the Plym Estuary. The Shoreline Management Plan classifies parts of the coast under different management policies, ranging from &ldquo;Hold the Line&rdquo; to &ldquo;No Active Intervention&rdquo;. Development within or near Coastal Change Management Areas may be restricted or require a Coastal Erosion Vulnerability Assessment. Our reports screen coastal erosion data, cliff recession rates, and SMP policies for your specific site location.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is naval brownfield contamination a risk in Plymouth?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes, particularly in and around <strong>Devonport</strong>. The Royal Dockyard has operated since 1691, and centuries of ship-building, ordnance handling, fuel storage, and industrial processing have left a legacy of heavy metals, hydrocarbons, polychlorinated biphenyls (PCBs), and asbestos in soil and groundwater. Unexploded ordnance (UXO) risk also exists in the dockyard vicinity and along the waterfront. Our Geotechnical Desk Study screens historical land use, MoD records, and Environment Agency pollution data to assess contamination risk before you commit to intrusive investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What are the marine conservation constraints in Plymouth Sound?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    <strong>Plymouth Sound and Estuaries</strong> is designated as a Marine Conservation Zone (MCZ), a Special Area of Conservation (SAC), and a Site of Special Scientific Interest (SSSI). The area supports protected habitats including seagrass beds, reef structures, and intertidal mudflats. Development proposals that could affect water quality, sediment dynamics, or marine habitats may trigger a <strong>Habitat Regulations Assessment</strong>. Even land-based development near the coast can be affected if drainage enters the marine environment. Our reports identify all relevant marine designations and flag where assessment is required.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Does Dartmoor National Park affect Plymouth planning applications?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    It can. <strong>Dartmoor National Park</strong> borders Plymouth to the north-east, and the NPPF gives great weight to conserving the landscape and scenic beauty of National Parks. Development on Plymouth’s northern fringe that is visible from Dartmoor, or that could affect the setting of the National Park, may require a Landscape and Visual Impact Assessment. The Dartmoor National Park Authority is also a statutory consultee on significant applications near the park boundary. Our Site Feasibility Report screens intervisibility with the National Park and flags relevant policy requirements.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What flood risks affect Plymouth development sites?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Plymouth faces multiple flood sources. <strong>Tidal and coastal flooding</strong> affects the waterfront, Sutton Harbour, Cattewater, and low-lying areas along the Plym and Tamar estuaries. <strong>Surface water flooding</strong> is a significant risk because Plymouth’s steep topography concentrates runoff rapidly into lower-lying areas — Stonehouse, North Prospect, and parts of the city centre are particularly affected. Fluvial flooding from the Plym and its tributaries also affects eastern Plymouth. Our Flood Risk Assessment maps all sources with climate change allowances and provides planning-ready documentation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Can I use a desktop report instead of a full site investigation?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    A desktop environmental report is a <strong>Tier 1 assessment</strong> — it analyses published data from authoritative sources without a physical site visit. For many planning applications in Plymouth, a desktop report is sufficient to satisfy validation requirements and identify whether further intrusive investigation is needed. Given the complexity of Plymouth’s coastal and brownfield risks, a desktop study is the cost-effective first step before committing to a full Phase 2 intrusive investigation or specialist coastal survey.
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
                <p className="sic-stat-num">3</p>
                <p className="sic-stat-label">Plymouth-Area LPAs Covered</p>
            </div>
            <div>
                <p className="sic-stat-num">300+</p>
                <p className="sic-stat-label">Projects Delivered</p>
            </div>
        </div>
        <div className="sic-info">
            <h4>Engineering Interpretation, Not Just Data</h4>
            <p>Anyone can pull a flood map or check a planning portal. The difference is interpretation. Our qualified engineers read every dataset in context — cross-referencing Devonian Limestone geology with dissolution risk, coastal erosion rates with Shoreline Management Plan policies, marine conservation designations with drainage pathways. The result is actionable intelligence, not a data dump.</p>
        </div>
    </div>
</section>

{/*  CTA Footer  */}
<section className="sic-cta-footer">
    <h2>Request a Report for Plymouth</h2>
    <p>Send us a Plymouth property address and we’ll screen it against 60+ data sources — typically within 48 hours.</p>
    <a href="/contact-pf-co-construction/" className="sic-cta-footer-btn">Request a Report</a>
</section>




      </main>
    </>
  );
};

export default CityPlymouth;
