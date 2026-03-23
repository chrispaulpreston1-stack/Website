import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const CityBirmingham = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Site Intelligence Birmingham | PF & Co Construction",
  "image": "https://pfcoconstruction.co.uk/wp-content/uploads/2024/01/pfco-logo.png",
  "url": "https://pfcoconstruction.co.uk/si-birmingham/",
  "telephone": "01483 363 210",
  "priceRange": "££",
  "description": "Desktop environmental reports for Birmingham projects. Coal mining risk, contamination, flood risk, and heritage screening from 60+ data sources.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Birmingham",
    "addressRegion": "West Midlands",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.4862,
    "longitude": -1.8904
  },
  "areaServed": ["Birmingham", "Solihull", "Sandwell", "Dudley", "Walsall", "Wolverhampton", "Sutton Coldfield"],
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
        title="Site Intelligence Birmingham | PF & Co Construction"
        description="Desktop environmental reports for Birmingham projects. Coal mining risk, contamination, flood risk, and heritage screening from 60+ data sources."
        path="/si-birmingham"
        jsonLd={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        

{/*  Breadcrumb  */}
<nav className="sic-breadcrumb" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/site-intelligence">Site Intelligence</Link> <span>/</span>
    <span style={{ color: 'var(--sic-white)' }}>Birmingham</span>
</nav>

{/*  Hero  */}
<section className="sic-hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('/images/birmingham_city_hero.png')` }} aria-label="Site Intelligence Reports in Birmingham">
    <div className="sic-hero-inner">
        <h1>Site Intelligence Reports<br />in Birmingham</h1>
        <p className="sic-sub">Coal Mining Legacy • HS2 Regeneration • Canal Heritage</p>
        <p className="sic-subtitle"><strong>Desktop-First Pre-Planning Due Diligence:</strong> Desktop environmental reports for Birmingham development projects. We screen coal mining risk, contamination, flood risk, and heritage constraints across all 6 West Midlands planning authorities — typically within 48 hours.</p>
    </div>
</section>

{/*  Atomic Answer  */}
<div className="sic-container">
    <div className="sic-atomic">
        <h2>Do I Need an Environmental Report in Birmingham?</h2>
        <p>In most cases, <strong>yes</strong>. Birmingham sits within one of England’s most complex environmental risk areas. Much of the city falls within <strong>Coal Authority referral areas</strong> where a coal mining risk assessment is required before planning permission can be granted. Former metalworking, jewellery manufacturing, and heavy engineering sites carry significant contamination risk.</p>
        <p>A Site Intelligence™ desktop environmental report screens your Birmingham site against 60+ authoritative data sources — identifying whether you need a coal mining report, contamination assessment, flood risk assessment, or heritage impact screening. Reports start from <strong>£295</strong> for a Site Feasibility Report, <strong>£395</strong> for a Geotechnical Desk Study, and <strong>£495</strong> for a Flood Risk Assessment.</p>
    </div>
</div>

{/*  Local Expertise Callout  */}
<div className="sic-container">
    <div className="sic-expertise">
        <h2>Why Birmingham Sites Need Desktop Screening First</h2>
        <p className="sic-expertise-sub">6 Planning Authorities. Deep Industrial Roots. One Report.</p>
        <ul>
            <li><strong>Coal mining subsidence risk</strong> — large parts of Birmingham and the Black Country fall within Coal Authority Development High Risk Areas where shallow coal seams, mine shafts, and former workings can cause ground instability</li>
            <li><strong>HS2 safeguarding zones</strong> — the HS2 Phase 1 route through Birmingham creates safeguarding zones where development proposals require consultation with HS2 Ltd before planning consent can be granted</li>
            <li><strong>Metalworking contamination legacy</strong> — Birmingham’s history of metalworking, gun-making, jewellery manufacturing, and heavy engineering has left widespread soil contamination with heavy metals, solvents, and cutting oils</li>
            <li><strong>Canal network heritage</strong> — Birmingham has more miles of canal than Venice; development near the canal network triggers heritage and ecological considerations under the Canal &amp; River Trust’s consultation requirements</li>
            <li><strong>Tame, Cole, and Rea river flooding</strong> — the River Tame and its tributaries create extensive Flood Zone 2 and 3 areas across north and east Birmingham; the River Rea corridor poses flood risk through the city centre</li>
            <li><strong>Mercia Mudstone and Coal Measures geology</strong> — Birmingham’s geology transitions from Mercia Mudstone in the south-east to Coal Measures in the north and west, creating variable ground conditions that affect foundation design</li>
            <li><strong>Smithfield and Curzon regeneration</strong> — major regeneration zones around the former wholesale markets and Curzon Street HS2 station impose specific design, density, and sustainability requirements on development proposals</li>
            <li><strong>Jewellery Quarter conservation</strong> — the Jewellery Quarter Conservation Area contains over 200 listed buildings; development within or affecting the setting of this area requires heritage impact assessment</li>
        </ul>
    </div>
</div>

{/*  Local Challenges  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Why Birmingham projects need screening">
    <div className="sic-container">
        <h2 className="sic-section-title">Birmingham’s Environmental Risk Landscape</h2>
        <p className="sic-body">Birmingham’s position at the heart of England’s industrial belt has created layers of environmental complexity that standard conveyancing searches rarely capture. Site Intelligence screens these risks before you commit.</p>
        <div className="sic-grid">
            <div className="sic-card">
                <h3>Coal Mining &amp; Ground Stability</h3>
                <p>Much of Birmingham and the wider Black Country lies within <strong>Coal Authority Development High Risk Areas</strong>. Shallow coal seams, abandoned mine shafts, and unrecorded workings can cause sudden subsidence. Areas around Sutton Coldfield, Erdington, and the northern suburbs are particularly affected. Our Geotechnical Desk Study screens Coal Authority records, BGS mining data, and historical maps to identify mining risk before you commit to a site.</p>
            </div>
            <div className="sic-card">
                <h3>Industrial Contamination</h3>
                <p>Birmingham was once the <strong>workshop of the world</strong>. Former metalworking shops, gun manufacturers, brass foundries, electroplating works, and gasworks have left a legacy of contaminated soil across the city. The Jewellery Quarter, Digbeth, and Aston are particularly affected. Common contaminants include cadmium, chromium, lead, and chlorinated solvents. Our desktop study screens historical land use and Environment Agency pollution records.</p>
            </div>
            <div className="sic-card">
                <h3>HS2 Safeguarding &amp; Regeneration</h3>
                <p>The <strong>HS2 Phase 1 route</strong> and the Curzon Street terminus create safeguarding zones across east Birmingham. Development within these zones requires consultation with HS2 Ltd, which can add months to the planning process. However, the surrounding regeneration area offers significant development opportunities. Our Site Feasibility Report identifies whether your site falls within HS2 safeguarding or regeneration zones.</p>
            </div>
            <div className="sic-card">
                <h3>River Flooding &amp; Drainage</h3>
                <p>The <strong>River Tame, River Cole, and River Rea</strong> create flood risk corridors across Birmingham. The Tame valley through north Birmingham and the Cole valley through east Birmingham are particularly vulnerable. Surface water flooding is also a growing concern in heavily urbanised areas. Our Flood Risk Assessment maps all flood sources and models climate change allowances, referencing the latest Birmingham City Council Strategic Flood Risk Assessment.</p>
            </div>
            <div className="sic-card">
                <h3>Canal Heritage &amp; Ecology</h3>
                <p>Birmingham’s <strong>canal network</strong> extends over 100 miles, more than Venice. Development adjacent to canals triggers consultation with the Canal &amp; River Trust and may require heritage impact assessment, ecological surveys, and consideration of towpath access. The canal corridors also function as important wildlife habitats and green infrastructure. Our reports flag canal proximity and the associated planning requirements.</p>
            </div>
        </div>
    </div>
</section>

{/*  Products Grid  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Site Intelligence reports for Birmingham">
    <div className="sic-container">
        <h2 className="sic-section-title">Reports for Birmingham Projects</h2>
        <p className="sic-body">Each report draws on 60+ authoritative data sources and is interpreted by qualified engineers with Birmingham-specific knowledge.</p>
        <div className="sic-product-grid">
            <div className="sic-product-card">
                <span className="sic-product-icon">&#128506;</span>
                <h3>Site Feasibility Report</h3>
                <p>Broad constraint screening across 27+ categories. Identifies coal mining risk, HS2 safeguarding, contamination, flood risk, heritage designations, and ecology for your Birmingham site. Includes Planning Friction Score™ and risk register.</p>
                <a href="/site-intelligence/site-feasibility-report/" className="sic-product-btn">From £295 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#9939;</span>
                <h3>Geotechnical Desk Study</h3>
                <p>Desktop ground investigation analysing Coal Measures and Mercia Mudstone geology, borehole data, coal mining records, groundwater levels, and contamination history. Foundation recommendations included for Birmingham’s variable ground conditions.</p>
                <a href="/site-intelligence/geotechnical-desk-study/" className="sic-product-btn">From £395 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#127754;</span>
                <h3>Flood Risk Assessment</h3>
                <p>Planning-ready FRA covering Tame, Cole, and Rea fluvial risk, surface water flooding, groundwater, and sewer flood risk. Includes climate change allowances, Sequential Test guidance, and mitigation strategy for West Midlands authorities.</p>
                <a href="/site-intelligence/flood-risk-assessment/" className="sic-product-btn">From £495 — Learn More</a>
            </div>
        </div>
    </div>
</section>

{/*  LPA Info  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Birmingham local planning authorities">
    <div className="sic-container">
        <h2 className="sic-section-title">West Midlands Planning Authorities We Cover</h2>
        <p className="sic-body">Site Intelligence reports are available for sites under any of the 6 West Midlands metropolitan planning authorities. Reports reference the correct Local Plan policies and validation requirements for your authority.</p>
        <div className="sic-lpa-grid">
            <div className="sic-lpa-card">
                <h4>Birmingham</h4>
                <p>Birmingham City Council (including Sutton Coldfield)</p>
                <p>Typically: coal mining risk, industrial contamination, HS2 safeguarding, Jewellery Quarter heritage, canal network</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Solihull</h4>
                <p>Solihull Metropolitan Borough Council</p>
                <p>Typically: HS2 Interchange station, green belt, Blythe valley flood risk, conservation areas</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Black Country West</h4>
                <p>Sandwell, Dudley</p>
                <p>Typically: extensive coal mining, heavy industrial contamination, canal heritage, limestone geology (Dudley)</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Black Country North</h4>
                <p>Walsall, Wolverhampton</p>
                <p>Typically: coal mining subsidence, brownfield regeneration, former metalworking contamination, canal corridors</p>
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
                    <p>Our system queries 60+ authoritative sources — the Environment Agency, British Geological Survey, Historic England, Natural England, the Coal Authority, and your local planning authority’s portal.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">3</div>
                <div className="sic-step-content">
                    <h4>Engineers Interpret</h4>
                    <p>Raw data is meaningless without context. Our qualified engineers read every dataset, identify what matters for your Birmingham project, and translate findings into actionable advice.</p>
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
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Birmingham environmental report FAQs">
    <div className="sic-container">
        <h2 className="sic-section-title">Birmingham Environmental Report FAQs</h2>
        <div className="sic-faq">
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is coal mining subsidence a risk for Birmingham development?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes, coal mining is a significant concern across much of Birmingham and the wider Black Country. Large parts of the city fall within <strong>Coal Authority Development High Risk Areas</strong> where shallow coal seams, abandoned mine shafts, and unrecorded workings may be present. Areas including Sutton Coldfield, Erdington, Great Barr, and the northern suburbs are particularly affected. If your site is within a referral area, you will need a <strong>Coal Authority mining report</strong> as part of your planning application. Our Geotechnical Desk Study screens Coal Authority records and BGS mining data to identify this risk early.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How does HS2 affect planning applications in Birmingham?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    The <strong>HS2 Phase 1 route</strong> through Birmingham and the Curzon Street terminus create safeguarding zones where development proposals must be referred to HS2 Ltd for comment. This can add several months to the planning process. Sites within the safeguarding area may face restrictions on building heights, uses, or construction methods. However, the surrounding <strong>Curzon regeneration area</strong> and Smithfield redevelopment offer significant opportunities with supportive planning policies. Our Site Feasibility Report identifies whether your site falls within HS2 safeguarding or regeneration zones.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is contaminated land common in Birmingham?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Very. Birmingham’s industrial heritage means contaminated land is widespread. Former <strong>metalworking shops, gun manufacturers, brass foundries, electroplating works, gasworks, and chemical factories</strong> have left contaminated soil across much of the inner city. The Jewellery Quarter, Digbeth, Aston, and Smethwick are particularly affected. Common contaminants include cadmium, chromium, lead, nickel, and chlorinated solvents. Our Geotechnical Desk Study screens historical Ordnance Survey maps, Environment Agency pollution records, and BGS geology data to assess contamination risk before you instruct intrusive investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What heritage constraints affect Birmingham sites?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Birmingham has significant heritage constraints, particularly around the <strong>Jewellery Quarter Conservation Area</strong> (containing over 200 listed buildings), the canal network, and Victorian civic buildings in the city centre. The <strong>Canal &amp; River Trust</strong> must be consulted on development proposals adjacent to the canal network. Listed buildings, scheduled monuments, and registered parks and gardens (such as Aston Hall grounds) may require heritage impact assessment. Our Site Feasibility Report identifies all heritage designations within and near your site.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Do I need a coal mining report for planning in Birmingham?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    If your site falls within a <strong>Coal Authority Development High Risk Area</strong>, the local planning authority will require a Coal Authority mining report as a planning validation requirement. This applies to significant parts of Birmingham, most of Sandwell, Dudley, Walsall, and Wolverhampton. The mining report identifies recorded mine entries, shallow workings, and subsidence claims near your site. Our Geotechnical Desk Study identifies whether your site is within a referral area and screens available mining data, so you know whether a Coal Authority report is needed before you submit your application.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What are the key environmental risks for brownfield development in Birmingham?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Brownfield development in Birmingham typically involves a combination of environmental risks: <strong>contamination</strong> from former industrial uses (metalworking, chemical processing, gasworks), <strong>coal mining instability</strong> (particularly in northern and western areas), <strong>flood risk</strong> from the Tame, Cole, or Rea river corridors, and <strong>heritage constraints</strong> from canal network proximity or conservation areas. Despite these risks, brownfield sites benefit from strong planning policy support under NPPF paragraph 120. A Site Feasibility Report identifies all relevant constraints in a single document, telling you which specialist reports are actually needed for your planning application.
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
                <p className="sic-stat-num">6</p>
                <p className="sic-stat-label">West Midlands LPAs Covered</p>
            </div>
            <div>
                <p className="sic-stat-num">300+</p>
                <p className="sic-stat-label">Projects Delivered</p>
            </div>
        </div>
        <div className="sic-info">
            <h4>Engineering Interpretation, Not Just Data</h4>
            <p>Anyone can pull a flood map or check a planning portal. The difference is interpretation. Our qualified engineers read every dataset in context — cross-referencing Coal Measures geology with mining records, industrial contamination history with groundwater vulnerability, HS2 safeguarding zones with regeneration policy. The result is actionable intelligence, not a data dump.</p>
        </div>
    </div>
</section>

{/*  CTA Footer  */}
<section className="sic-cta-footer">
    <h2>Request a Report for Birmingham</h2>
    <p>Send us a Birmingham property address and we’ll screen it against 60+ data sources — typically within 48 hours.</p>
    <a href="/contact-pf-co-construction/" className="sic-cta-footer-btn">Request a Report</a>
</section>




      </main>
    </>
  );
};

export default CityBirmingham;
