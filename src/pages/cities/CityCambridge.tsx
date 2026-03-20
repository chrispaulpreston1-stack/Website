import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const CityCambridge = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Site Intelligence Cambridge | PF & Co Construction",
  "image": "https://pfcoconstruction.co.uk/wp-content/uploads/2024/01/pfco-logo.png",
  "url": "https://pfcoconstruction.co.uk/si-cambridge/",
  "telephone": "01483 363 210",
  "priceRange": "££",
  "description": "Desktop environmental reports for Cambridge projects. Aquifer sensitivity, conservation constraints, flood risk, and ground conditions screening from 60+ data sources.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Cambridge",
    "addressRegion": "Cambridgeshire",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.2053,
    "longitude": 0.1218
  },
  "areaServed": ["Cambridge", "Trumpington", "Cherry Hinton", "Girton", "Histon", "Impington", "Cambourne", "Waterbeach"],
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
        title="Site Intelligence Cambridge | PF & Co Construction"
        description="Desktop environmental reports for Cambridge projects. Aquifer sensitivity, conservation constraints, flood risk, and ground conditions screening from 60+ data sources."
        path="/si-cambridge"
        jsonLd={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        

{/*  Breadcrumb  */}
<nav className="sic-breadcrumb" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/site-intelligence">Site Intelligence</Link> <span>/</span>
    <span style={{ color: 'var(--sic-white)' }}>Cambridge</span>
</nav>

{/*  Hero  */}
<section className="sic-hero" aria-label="Site Intelligence Reports in Cambridge">
    <div className="sic-hero-inner">
        <h1>Site Intelligence Reports<br />in Cambridge</h1>
        <p className="sic-sub">Chalk Aquifer Sensitivity • Green Belt Constraints • Extreme Planning Scrutiny</p>
        <p className="sic-subtitle">Desktop environmental reports for Cambridge development projects. We screen aquifer sensitivity, conservation constraints, flood risk, and ground conditions across Cambridge and the surrounding districts — typically within 48 hours.</p>
    </div>
</section>

{/*  Atomic Answer  */}
<div className="sic-container">
    <div className="sic-atomic">
        <h2>What Environmental Constraints Affect Cambridge Development Sites?</h2>
        <p>Cambridge has one of the most constrained development environments in England. The city sits on a <strong>Chalk principal aquifer</strong> with multiple Source Protection Zones, is surrounded by tightly drawn <strong>Green Belt</strong>, and its city centre is almost entirely covered by <strong>conservation area designation</strong>. Add to this nutrient neutrality considerations, high water table drainage challenges, and some of the most rigorous planning scrutiny in the country.</p>
        <p>A Site Intelligence™ desktop report screens all of these constraints in one document, drawing on 60+ authoritative data sources to identify exactly which issues affect your site and which specialist reports your planning authority will require. Reports are typically delivered within <strong>48 hours</strong> and start from <strong>£295</strong>.</p>
    </div>
</div>

{/*  Local Expertise Callout  */}
<div className="sic-container">
    <div className="sic-expertise">
        <h2>Why Cambridge Sites Need Environmental Screening</h2>
        <p className="sic-expertise-sub">Aquifer Sensitivity. Green Belt. Conservation. One Report.</p>
        <ul>
            <li><strong>Chalk aquifer sensitivity</strong> — Cambridge sits on the Chalk principal aquifer with multiple groundwater Source Protection Zones; development proposals must demonstrate that groundwater quality will not be compromised</li>
            <li><strong>Tight Green Belt boundaries</strong> — Cambridge’s Green Belt is drawn exceptionally close to the built-up area, severely restricting outward expansion and making every developable parcel highly contested</li>
            <li><strong>Extensive conservation area</strong> — the Central Cambridge Conservation Area covers the majority of the historic city centre, including college precincts, the Backs, and surrounding streets, triggering heritage impact requirements</li>
            <li><strong>Groundwater flooding risk</strong> — the flat terrain and high water table across much of Cambridge create significant groundwater and surface water flood risk, particularly in lower-lying areas near the River Cam</li>
            <li><strong>Nutrient neutrality considerations</strong> — development in parts of Cambridgeshire may need to demonstrate nutrient neutrality to protect chalk streams and designated water-dependent habitats</li>
            <li><strong>Biotech corridor growth pressure</strong> — rapid expansion of the Cambridge Biomedical Campus, North East Cambridge, and the Southern Fringe creates intense demand for environmental data on previously undeveloped sites</li>
            <li><strong>High water table drainage</strong> — Cambridge’s flat topography and permeable Chalk geology mean that sustainable drainage design must account for seasonally high groundwater levels and limited fall for gravity drainage</li>
            <li><strong>Planning scrutiny intensity</strong> — Cambridge City Council and South Cambridgeshire operate through the Greater Cambridge Shared Planning Service, applying some of the most rigorous design and environmental standards in England</li>
        </ul>
    </div>
</div>

{/*  Local Challenges  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Why Cambridge projects need screening">
    <div className="sic-container">
        <h2 className="sic-section-title">Cambridge’s Environmental Risk Landscape</h2>
        <p className="sic-body">Cambridge’s combination of geological sensitivity, heritage density, and Green Belt constraint makes it one of the most complex planning environments in England. Standard conveyancing searches rarely capture the full picture.</p>
        <div className="sic-grid">
            <div className="sic-card">
                <h3>Chalk Aquifer &amp; Groundwater</h3>
                <p>Cambridge sits on the <strong>Chalk principal aquifer</strong>, one of the most important groundwater resources in eastern England. Multiple Source Protection Zones extend beneath the city and surrounding villages. Development proposals that involve excavation, contamination risk, or changes to drainage must satisfy Environment Agency requirements for groundwater protection. Our reports identify your site’s SPZ status and the specific constraints that apply.</p>
            </div>
            <div className="sic-card">
                <h3>Green Belt &amp; Land Supply</h3>
                <p>Cambridge’s <strong>Green Belt</strong> is drawn tightly around the built-up area, making development land scarce and every application for edge-of-settlement sites highly scrutinised. The Greater Cambridge Local Plan review is considering selective Green Belt releases, but until adoption, any proposal affecting Green Belt land must demonstrate very special circumstances under NPPF paragraph 153. Our Site Feasibility Report identifies Green Belt boundaries and policy implications for your site.</p>
            </div>
            <div className="sic-card">
                <h3>Conservation &amp; Heritage</h3>
                <p>The <strong>Central Cambridge Conservation Area</strong> covers most of the historic city centre, including the university colleges, the Backs, and surrounding streets. There are also over <strong>1,500 listed buildings</strong> within the city. Development within or affecting the setting of these designations requires careful heritage impact assessment. Our reports screen all heritage constraints within the site and its wider setting.</p>
            </div>
            <div className="sic-card">
                <h3>Flood Risk &amp; Drainage</h3>
                <p>Cambridge’s <strong>flat terrain</strong> and high water table create widespread groundwater and surface water flood risk. The River Cam, Hobson’s Conduit, and various lodes and drains are all potential flood sources. SuDS design in Cambridge must account for limited gradient, seasonally high groundwater, and Chalk geology that makes infiltration both an opportunity and a constraint. Our Flood Risk Assessment maps all sources with climate change allowances.</p>
            </div>
            <div className="sic-card">
                <h3>Biodiversity &amp; Nutrient Sensitivity</h3>
                <p>Cambridge is surrounded by nationally important <strong>chalk grassland, fenland, and chalk stream habitats</strong>. Biodiversity net gain requirements apply to all major development, and sites near designated habitats may need to demonstrate nutrient neutrality. The Cam corridor supports protected species including water voles, great crested newts, and otters. Our reports screen ecological designations and flag where Habitat Regulations Assessment may be triggered.</p>
            </div>
        </div>
    </div>
</section>

{/*  Products Grid  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Site Intelligence reports for Cambridge">
    <div className="sic-container">
        <h2 className="sic-section-title">Reports for Cambridge Projects</h2>
        <p className="sic-body">Each report draws on 60+ authoritative data sources and is interpreted by qualified engineers with knowledge of Cambridge’s Chalk geology and planning environment.</p>
        <div className="sic-product-grid">
            <div className="sic-product-card">
                <span className="sic-product-icon">&#128506;</span>
                <h3>Site Feasibility Report</h3>
                <p>Broad constraint screening across 27+ categories. Identifies Green Belt boundaries, aquifer sensitivity, conservation designations, flood risk, and ecology for your Cambridge site. Includes Planning Friction Score™ and risk register.</p>
                <a href="/site-intelligence/site-feasibility-report/" className="sic-product-btn">From £295 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#9939;</span>
                <h3>Geotechnical Desk Study</h3>
                <p>Desktop ground investigation analysing Chalk geology, borehole data, groundwater levels, shrink-swell risk from overlying drift deposits, and historical land use. Foundation recommendations tailored to Cambridge’s variable Chalk and drift geology.</p>
                <a href="/site-intelligence/geotechnical-desk-study/" className="sic-product-btn">From £395 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#127754;</span>
                <h3>Flood Risk Assessment</h3>
                <p>Planning-ready FRA covering River Cam fluvial risk, groundwater flooding, surface water drainage, and sewer capacity. Includes climate change allowances, Sequential Test guidance, and SuDS recommendations for Cambridge’s high water table conditions.</p>
                <a href="/site-intelligence/flood-risk-assessment/" className="sic-product-btn">From £495 — Learn More</a>
            </div>
        </div>
    </div>
</section>

{/*  LPA Info  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Cambridge local planning authorities">
    <div className="sic-container">
        <h2 className="sic-section-title">Cambridge Planning Authorities We Cover</h2>
        <p className="sic-body">Site Intelligence reports are available for sites under Cambridge City Council and the surrounding district councils. Reports reference the correct Local Plan policies and validation requirements for your authority.</p>
        <div className="sic-lpa-grid">
            <div className="sic-lpa-card">
                <h4>Cambridge City Council</h4>
                <p>Covers the city centre, colleges, Arbury, Chesterton, Trumpington, Cherry Hinton, and Queen Edith’s. Part of the Greater Cambridge Shared Planning Service. The Cambridge Local Plan (2018) includes stringent policies on conservation, design quality, and sustainable drainage.</p>
                <p>Typically: conservation area, heritage impact, aquifer protection, high design scrutiny</p>
            </div>
            <div className="sic-lpa-card">
                <h4>South Cambridgeshire District Council</h4>
                <p>Covers the villages surrounding Cambridge including Girton, Histon, Impington, Cambourne, Waterbeach, and Sawston. Part of the Greater Cambridge Shared Planning Service. The South Cambridgeshire Local Plan (2018) addresses Green Belt, new settlement sites, and rural character.</p>
                <p>Typically: Green Belt, village framework boundaries, aquifer SPZs, ecology</p>
            </div>
            <div className="sic-lpa-card">
                <h4>East Cambridgeshire District Council</h4>
                <p>Covers Ely, Soham, Littleport, and the fenland villages to the north-east. The East Cambridgeshire Local Plan (2015) addresses fen-edge development, flood risk from the drainage network, and agricultural land quality.</p>
                <p>Typically: fenland flood risk, agricultural land classification, drainage constraints</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Huntingdonshire District Council</h4>
                <p>Covers Huntingdon, St Ives, St Neots, and Ramsey to the west. The Huntingdonshire Local Plan (2019) addresses growth pressures along the A14 corridor, flood risk from the Great Ouse, and rural landscape sensitivity.</p>
                <p>Typically: Great Ouse flood risk, market town infill, landscape impact</p>
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
                    <p>Our system queries 60+ authoritative sources — the Environment Agency, British Geological Survey, Historic England, Natural England, the Greater Cambridge Shared Planning Service, and relevant district portals.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">3</div>
                <div className="sic-step-content">
                    <h4>Engineers Interpret</h4>
                    <p>Raw data is meaningless without context. Our qualified engineers read every dataset, identify what matters for your Cambridge project, and translate findings into actionable advice.</p>
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
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Cambridge environmental report FAQs">
    <div className="sic-container">
        <h2 className="sic-section-title">Cambridge Environmental Report FAQs</h2>
        <div className="sic-faq">
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How does Cambridge’s Green Belt affect development?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Cambridge’s Green Belt is drawn exceptionally close to the built-up area, making it one of the tightest in England. Development within the Green Belt is restricted under <strong>NPPF paragraph 152</strong>, and proposals must demonstrate very special circumstances to justify approval. The Greater Cambridge Local Plan review is considering selective Green Belt releases at locations including North East Cambridge and edges of some villages, but until the new plan is adopted, existing boundaries apply. A Site Feasibility Report identifies whether your site is within, adjoining, or outside the Green Belt.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What are the chalk aquifer protection requirements?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Cambridge sits on the <strong>Chalk principal aquifer</strong>, which is one of the most important groundwater resources in eastern England. If your site is within a Source Protection Zone (SPZ), the Environment Agency imposes strict requirements on drainage design, contamination prevention, and construction methodology. Infiltration-based SuDS may be restricted in inner SPZs. Development involving fuel storage, car parking, or industrial processes faces additional scrutiny. Our reports identify your site’s SPZ status and the specific conditions that apply.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How much of Cambridge is in a conservation area?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    The <strong>Central Cambridge Conservation Area</strong> covers the majority of the historic city centre, including all of the university colleges, the Backs, King’s Parade, and surrounding residential streets. There are also several smaller conservation areas across the city and in surrounding villages. Any development within or affecting the setting of a conservation area must preserve or enhance its character. Demolition, alterations to street-facing elevations, and tree works all require additional consent. Our reports identify all heritage designations relevant to your site.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is groundwater flooding a risk in Cambridge?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes. Cambridge’s <strong>flat terrain and permeable Chalk geology</strong> mean that the water table can rise close to the surface, particularly during prolonged wet periods. Groundwater flooding affects lower-lying areas near the River Cam, Cherry Hinton Brook, and the Hobson’s Conduit corridor. Basements and below-ground construction are particularly vulnerable. Our Flood Risk Assessment maps groundwater flood risk alongside fluvial, surface water, and sewer flooding, providing the full picture your planning authority requires.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What are the biodiversity net gain requirements for Cambridge?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Under the Environment Act 2021, all major development in England must deliver a minimum <strong>10% biodiversity net gain (BNG)</strong>. In Cambridge, this is particularly significant because of the city’s proximity to chalk grassland, fenland, and chalk stream habitats. Sites near the Cam corridor, Gog Magog Hills, or Wicken Fen may trigger additional ecological requirements. Our Site Feasibility Report screens ecological designations and protected species records, flagging where a BNG assessment or Habitat Regulations Assessment may be needed.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Can I use a desktop report instead of a full environmental assessment?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    A desktop environmental report is a <strong>Tier 1 assessment</strong> — it analyses published data from authoritative sources without a physical site visit. For many planning applications in Cambridge, a desktop report is sufficient to satisfy validation requirements and identify whether further specialist assessment is needed. Given the intensity of planning scrutiny in Cambridge, a desktop report is a cost-effective way to understand the full constraint landscape before committing to more expensive specialist surveys. It tells you exactly what the planning authority will require.
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
                <p className="sic-stat-label">Cambridge-Area LPAs Covered</p>
            </div>
            <div>
                <p className="sic-stat-num">300+</p>
                <p className="sic-stat-label">Projects Delivered</p>
            </div>
        </div>
        <div className="sic-info">
            <h4>Engineering Interpretation, Not Just Data</h4>
            <p>Anyone can pull a flood map or check a planning portal. The difference is interpretation. Our qualified engineers read every dataset in context — cross-referencing Chalk aquifer sensitivity with Source Protection Zones, Green Belt boundaries with emerging Local Plan policy, conservation designations with heritage setting analysis. The result is actionable intelligence, not a data dump.</p>
        </div>
    </div>
</section>

{/*  CTA Footer  */}
<section className="sic-cta-footer">
    <h2>Request a Report for Cambridge</h2>
    <p>Send us a Cambridge property address and we’ll screen it against 60+ data sources — typically within 48 hours.</p>
    <a href="/contact-pf-co-construction/" className="sic-cta-footer-btn">Request a Report</a>
</section>




      </main>
    </>
  );
};

export default CityCambridge;
