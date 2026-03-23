import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const CityNottingham = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Site Intelligence Nottingham | PF & Co Construction",
  "image": "https://pfcoconstruction.co.uk/wp-content/uploads/2024/01/pfco-logo.png",
  "url": "https://pfcoconstruction.co.uk/si-nottingham/",
  "telephone": "01483 363 210",
  "priceRange": "££",
  "description": "Desktop environmental reports for Nottingham projects. Flood risk, contamination, ground conditions, and aquifer screening from 60+ data sources.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Nottingham",
    "addressRegion": "Nottinghamshire",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 52.9548,
    "longitude": -1.1581
  },
  "areaServed": ["Nottingham", "West Bridgford", "Beeston", "Arnold", "Carlton", "Hucknall", "Long Eaton"],
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
        title="Site Intelligence Nottingham | PF & Co Construction"
        description="Desktop environmental reports for Nottingham projects. Flood risk, contamination, ground conditions, and aquifer screening from 60+ data sources."
        path="/si-nottingham"
        jsonLd={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        

{/*  Breadcrumb  */}
<nav className="sic-breadcrumb" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/site-intelligence">Site Intelligence</Link> <span>/</span>
    <span style={{ color: 'var(--sic-white)' }}>Nottingham</span>
</nav>

{/*  Hero  */}
<section className="sic-hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('/images/nottingham_city_hero.png')` }} aria-label="Site Intelligence Reports in Nottingham">
    <div className="sic-hero-inner">
        <h1>Site Intelligence Reports<br />in Nottingham</h1>
        <p className="sic-sub">Sherwood Sandstone Aquifer • Cave Systems • Lace Industry Contamination</p>
        <p className="sic-subtitle"><strong>Desktop-First Pre-Planning Due Diligence:</strong> Desktop environmental reports for Nottingham development projects. We screen flood risk, contamination, aquifer sensitivity, and ground conditions across Nottingham and the surrounding boroughs — typically within 48 hours.</p>
    </div>
</section>

{/*  Atomic Answer  */}
<div className="sic-container">
    <div className="sic-atomic">
        <h2>Do I Need a Ground Investigation in Nottingham?</h2>
        <p>Whether you need a ground investigation depends on your site’s geology, history, and what you plan to build. In Nottingham, the underlying <strong>Sherwood Sandstone</strong> and <strong>Mercia Mudstone</strong> create variable ground conditions, and the city’s famous sandstone cave network can affect stability beneath development sites in the city centre and surrounding areas.</p>
        <p>A Site Intelligence™ desktop report is the cost-effective first step. We screen BGS geology data, historical land use maps, Environment Agency records, and borehole logs to assess whether intrusive investigation is genuinely needed — or whether desktop data alone is sufficient to satisfy your planning authority. Reports are typically delivered within <strong>48 hours</strong> and start from <strong>£295</strong>.</p>
    </div>
</div>

{/*  Local Expertise Callout  */}
<div className="sic-container">
    <div className="sic-expertise">
        <h2>Why Nottingham Sites Need Desktop Screening First</h2>
        <p className="sic-expertise-sub">Sandstone Aquifer. Cave Systems. Industrial Legacy. One Report.</p>
        <ul>
            <li><strong>Sherwood Sandstone Aquifer</strong> — a principal aquifer and major drinking water source; development near it triggers groundwater protection requirements from the Environment Agency under Source Protection Zone policies</li>
            <li><strong>Sandstone cave network</strong> — Nottingham sits above an extensive system of man-made sandstone caves; development sites in the city centre and Lace Market area may be affected by underground voids and stability concerns</li>
            <li><strong>Lace industry contamination</strong> — Nottingham’s historic lace and textile industry, including bleaching works and dyeing operations, has left a legacy of heavy metal and chemical contamination across former industrial sites</li>
            <li><strong>Trent Valley flood risk</strong> — the River Trent floodplain extends across significant areas of southern and western Nottingham; Flood Zones 2 and 3 affect sites in Meadows, Colwick, and along the Trent corridor</li>
            <li><strong>Bunter Sandstone geology</strong> — variable ground conditions between the permeable Sherwood Sandstone and the clay-rich Mercia Mudstone create differential settlement risks that affect foundation design</li>
            <li><strong>Coal mining legacy</strong> — surrounding areas including Hucknall, Arnold, and Gedling have extensive coal mining history; shallow workings and shafts can cause subsidence risk on development sites</li>
            <li><strong>Southside regeneration</strong> — large-scale regeneration south of the city centre is redeveloping former industrial and railway land where contamination screening is a standard validation requirement</li>
            <li><strong>Made ground across the city</strong> — centuries of urban development have created significant depths of made ground, particularly in the Lace Market, Broadmarsh, and along former canal corridors</li>
        </ul>
    </div>
</div>

{/*  Local Challenges  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Why Nottingham projects need screening">
    <div className="sic-container">
        <h2 className="sic-section-title">Nottingham’s Environmental Risk Landscape</h2>
        <p className="sic-body">Nottingham’s geology is uniquely complex — a sandstone aquifer beneath the city, a network of over 800 caves, and an industrial heritage that has left contamination across former textile and manufacturing sites. Standard conveyancing searches rarely capture these risks.</p>
        <div className="sic-grid">
            <div className="sic-card">
                <h3>Sandstone Caves &amp; Ground Stability</h3>
                <p>Nottingham’s sandstone cave network is one of the most extensive in the United Kingdom, with <strong>over 800 recorded caves</strong> beneath the city. Many are unmapped. Development sites in the city centre, Lace Market, and Park Estate may overlie unknown voids that affect structural stability. Our Geotechnical Desk Study screens BGS records, cave registry data, and historical mapping to assess void risk before you commit to intrusive investigation.</p>
            </div>
            <div className="sic-card">
                <h3>Aquifer &amp; Groundwater Protection</h3>
                <p>The <strong>Sherwood Sandstone Aquifer</strong> beneath Nottingham is classified as a Principal Aquifer by the Environment Agency and supplies drinking water to the region. Development within Source Protection Zones triggers strict requirements for contamination prevention, drainage design, and construction methodology. Our reports identify SPZ boundaries and flag groundwater sensitivity for your specific site.</p>
            </div>
            <div className="sic-card">
                <h3>Industrial Contamination Legacy</h3>
                <p>Nottingham’s <strong>lace, textile, and bleaching industries</strong> operated across the city for over 200 years, leaving contaminated soil and groundwater on former works sites. Additionally, engineering works, tanneries, and coal-related industries have contributed to widespread made ground. Our desktop screening analyses historical Ordnance Survey maps and pollution records to assess contamination risk.</p>
            </div>
            <div className="sic-card">
                <h3>Trent Valley Flood Risk</h3>
                <p>The <strong>River Trent</strong> forms a major flood corridor through southern Nottingham. Areas including the Meadows, Colwick, and West Bridgford sit within Flood Zones 2 and 3. Surface water flooding also affects low-lying areas across the city. Our Flood Risk Assessment maps all flood sources, models climate change allowances, and provides Sequential Test guidance for planning applications.</p>
            </div>
            <div className="sic-card">
                <h3>Coal Mining Subsidence</h3>
                <p>While central Nottingham is largely unaffected, surrounding areas — including <strong>Hucknall, Arnold, Gedling, and the former Gedling Colliery site</strong> — have extensive coal mining history. Shallow mine workings, shafts, and adits can cause subsidence risk. Our reports screen Coal Authority data and historical mining records to identify whether a Coal Mining Risk Assessment is needed for your site.</p>
            </div>
        </div>
    </div>
</section>

{/*  Products Grid  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Site Intelligence reports for Nottingham">
    <div className="sic-container">
        <h2 className="sic-section-title">Reports for Nottingham Projects</h2>
        <p className="sic-body">Each report draws on 60+ authoritative data sources and is interpreted by qualified engineers with knowledge of Nottingham’s sandstone geology and industrial heritage.</p>
        <div className="sic-product-grid">
            <div className="sic-product-card">
                <span className="sic-product-icon">&#128506;</span>
                <h3>Site Feasibility Report</h3>
                <p>Broad constraint screening across 27+ categories. Identifies aquifer sensitivity, cave risk zones, mining legacy, flood risk, and contamination for your Nottingham site. Includes Planning Friction Score™ and risk register.</p>
                <a href="/site-intelligence/site-feasibility-report/" className="sic-product-btn">From £295 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#9939;</span>
                <h3>Geotechnical Desk Study</h3>
                <p>Desktop ground investigation analysing Sherwood Sandstone and Mercia Mudstone geology, borehole data, cave registry records, groundwater levels, and contamination history. Foundation recommendations tailored to Nottingham’s variable ground conditions.</p>
                <a href="/site-intelligence/geotechnical-desk-study/" className="sic-product-btn">From £395 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#127754;</span>
                <h3>Flood Risk Assessment</h3>
                <p>Planning-ready FRA covering Trent fluvial flood risk, surface water flooding, groundwater risk from the sandstone aquifer, and sewer flood risk. Includes climate change allowances and Sequential Test guidance for Nottingham planning applications.</p>
                <a href="/site-intelligence/flood-risk-assessment/" className="sic-product-btn">From £495 — Learn More</a>
            </div>
        </div>
    </div>
</section>

{/*  LPA Info  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Nottingham local planning authorities">
    <div className="sic-container">
        <h2 className="sic-section-title">Nottingham Planning Authorities We Cover</h2>
        <p className="sic-body">Site Intelligence reports are available for sites under Nottingham City Council and the surrounding borough councils. Reports reference the correct Local Plan policies and validation requirements for your authority.</p>
        <div className="sic-lpa-grid">
            <div className="sic-lpa-card">
                <h4>Nottingham City Council</h4>
                <p>Covers the city centre, Lace Market, Meadows, St Ann’s, Sneinton, Bulwell, and Bestwood. The Local Plan Part 2 (2020) includes policies on sandstone cave protection, contaminated land, and the Southside regeneration area.</p>
                <p>Typically: cave stability screening, contamination assessment, aquifer protection</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Broxtowe Borough Council</h4>
                <p>Covers Beeston, Stapleford, Eastwood, and Kimberley to the west of Nottingham. The Part 2 Local Plan (2019) addresses Trent Valley flood risk and the regeneration of former industrial sites along the A610 corridor.</p>
                <p>Typically: Trent flood risk, former industrial land contamination, green belt</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Gedling Borough Council</h4>
                <p>Covers Arnold, Carlton, Mapperley, and the former Gedling Colliery site to the east. The Aligned Core Strategy and Local Planning Document address coal mining legacy, ecology, and greenfield development pressures.</p>
                <p>Typically: coal mining risk assessment, colliery site contamination, green belt</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Rushcliffe Borough Council</h4>
                <p>Covers West Bridgford, Bingham, Radcliffe-on-Trent, and East Leake to the south. The Local Plan Part 2 (2019) addresses Trent Valley flood risk, gypsum dissolution, and strategic housing sites.</p>
                <p>Typically: Trent floodplain, gypsum ground instability, rural ecology</p>
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
                    <p>Our system queries 60+ authoritative sources — the Environment Agency, British Geological Survey, Historic England, Natural England, the Coal Authority, and Nottingham’s planning portal.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">3</div>
                <div className="sic-step-content">
                    <h4>Engineers Interpret</h4>
                    <p>Raw data is meaningless without context. Our qualified engineers read every dataset, identify what matters for your Nottingham project, and translate findings into actionable advice.</p>
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
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Nottingham environmental report FAQs">
    <div className="sic-container">
        <h2 className="sic-section-title">Nottingham Environmental Report FAQs</h2>
        <div className="sic-faq">
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Do Nottingham’s sandstone caves pose a risk to development?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    They can. Nottingham has over <strong>800 recorded sandstone caves</strong> beneath the city, carved over centuries for storage, tanning, and habitation. Many are unmapped. If your development site is in or near the city centre, Lace Market, Park Estate, or Castle area, there is a genuine risk of unknown voids beneath the surface. A desktop study screens the Nottingham Caves Survey registry and BGS records to assess whether further investigation is needed before construction.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What are the aquifer protection requirements in Nottingham?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    The <strong>Sherwood Sandstone Aquifer</strong> beneath Nottingham is classified as a Principal Aquifer and supplies drinking water to the region. If your site is within a Source Protection Zone (SPZ), the Environment Agency imposes strict controls on drainage design, contamination prevention, and construction methodology. Certain types of development — including those involving fuel storage, industrial processes, or deep excavation — may face additional constraints. Our reports identify your site’s SPZ status and flag the specific requirements that apply.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How does Trent Valley flooding affect planning in Nottingham?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    The River Trent floodplain extends across significant areas south and west of Nottingham city centre. Sites in the <strong>Meadows, Colwick, Wilford, and parts of West Bridgford</strong> sit within Flood Zones 2 and 3. Under the NPPF, development in these zones requires a site-specific <strong>Flood Risk Assessment</strong> and must pass the Sequential Test. Even sites in Flood Zone 1 may be affected by surface water or groundwater flooding. Our FRA maps all flood sources and provides the documentation your planning authority requires.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is contaminated land common in Nottingham?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes. Nottingham’s <strong>lace, textile, bleaching, and engineering industries</strong> operated across the city for over two centuries. Former bleaching works used chemicals including chlorine and sulphuric acid, leaving soil and groundwater contamination. Railway lands, gasworks, and tanneries have added further contamination in areas like Sneinton, Basford, and the Southside regeneration area. A desktop contamination screening analyses historical maps, Environment Agency records, and BGS data to assess risk before you instruct costly intrusive investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Do I need a Coal Mining Risk Assessment in the Nottingham area?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    It depends on location. Central Nottingham is largely unaffected by coal mining, but surrounding areas — including <strong>Hucknall, Arnold, Bestwood, Gedling, and Eastwood</strong> — lie within the Coal Authority’s defined Development High Risk Area. If your site is within this area, a <strong>Coal Mining Risk Assessment</strong> is a standard validation requirement. Our Site Feasibility Report screens Coal Authority records and identifies whether your site is affected, saving you from commissioning unnecessary specialist reports.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Can I use a desktop report instead of a full site investigation?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    A desktop environmental report is a <strong>Tier 1 assessment</strong> — it analyses published data from authoritative sources without a physical site visit. For many planning applications in Nottingham, a desktop report is sufficient to satisfy validation requirements and identify whether further intrusive investigation is needed. If your site has complex ground conditions, cave risk, or contamination concerns, a desktop study is the cost-effective first step before committing to a full Phase 2 intrusive investigation.
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
                <p className="sic-stat-label">Nottingham LPAs Covered</p>
            </div>
            <div>
                <p className="sic-stat-num">300+</p>
                <p className="sic-stat-label">Projects Delivered</p>
            </div>
        </div>
        <div className="sic-info">
            <h4>Engineering Interpretation, Not Just Data</h4>
            <p>Anyone can pull a flood map or check a planning portal. The difference is interpretation. Our qualified engineers read every dataset in context — cross-referencing Sherwood Sandstone geology with aquifer sensitivity, Trent flood zones with climate change projections, cave registry data with ground stability assessments. The result is actionable intelligence, not a data dump.</p>
        </div>
    </div>
</section>

{/*  CTA Footer  */}
<section className="sic-cta-footer">
    <h2>Request a Report for Nottingham</h2>
    <p>Send us a Nottingham property address and we’ll screen it against 60+ data sources — typically within 48 hours.</p>
    <a href="/contact-pf-co-construction/" className="sic-cta-footer-btn">Request a Report</a>
</section>




      </main>
    </>
  );
};

export default CityNottingham;
