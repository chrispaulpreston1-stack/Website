import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const CityLeeds = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Site Intelligence Leeds | PF & Co Construction",
  "image": "https://pfcoconstruction.co.uk/wp-content/uploads/2024/01/pfco-logo.png",
  "url": "https://pfcoconstruction.co.uk/si-leeds/",
  "telephone": "01483 363 210",
  "priceRange": "££",
  "description": "Desktop environmental reports for Leeds projects. Flood risk, contamination, mining subsidence, and ground conditions screening from 60+ data sources.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Leeds",
    "addressRegion": "West Yorkshire",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.8008,
    "longitude": -1.5491
  },
  "areaServed": ["Leeds", "Headingley", "Meanwood", "Roundhay", "Morley", "Otley", "Wetherby", "Garforth"],
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
        title="Site Intelligence Leeds | PF & Co Construction"
        description="Desktop environmental reports for Leeds projects. Flood risk, contamination, mining subsidence, and ground conditions screening from 60+ data sources."
        path="/si-leeds"
        jsonLd={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        

{/*  Breadcrumb  */}
<nav className="sic-breadcrumb" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/site-intelligence">Site Intelligence</Link> <span>/</span>
    <span style={{ color: 'var(--sic-white)' }}>Leeds</span>
</nav>

{/*  Hero  */}
<section className="sic-hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('/images/leeds_city_hero.png')` }} aria-label="Site Intelligence Reports in Leeds">
    <div className="sic-hero-inner">
        <h1>Site Intelligence Reports<br />in Leeds</h1>
        <p className="sic-sub">Aire Valley Flood Risk • Mining Subsidence • South Bank Regeneration</p>
        <p className="sic-subtitle"><strong>Desktop-First Pre-Planning Due Diligence:</strong> Desktop environmental reports for Leeds development projects. We screen flood risk, contamination, mining subsidence, and ground conditions across the Leeds district — typically within 48 hours.</p>
    </div>
</section>

{/*  Atomic Answer  */}
<div className="sic-container">
    <div className="sic-atomic">
        <h2>Do I Need a Flood Risk Assessment in Leeds?</h2>
        <p>If your Leeds site is in <strong>Flood Zone 2 or 3</strong>, you will need a Flood Risk Assessment (FRA) to support any planning application. Sites in Flood Zone 1 that exceed 1 hectare also require an FRA. The Aire Valley corridor through central Leeds — including Holbeck, Hunslet, and the South Bank regeneration area — is extensively mapped within Flood Zones 2 and 3 following the devastating December 2015 floods.</p>
        <p>A Site Intelligence™ Flood Risk Assessment for a Leeds site typically costs from <strong>£495</strong> and is delivered within 48 hours. By comparison, a traditional FRA consultant in Leeds typically charges <strong>£2,000&ndash;£5,000+</strong> and takes 2&ndash;4 weeks. Our desktop FRA covers all four flood sources — fluvial, surface water, groundwater, and sewer — with climate change allowances modelled to 2125.</p>
    </div>
</div>

{/*  Local Expertise Callout  */}
<div className="sic-container">
    <div className="sic-expertise">
        <h2>Why Leeds Sites Need Desktop Screening First</h2>
        <p className="sic-expertise-sub">One Unitary Authority. Complex Terrain. Multiple Risk Layers.</p>
        <ul>
            <li><strong>Aire Valley flood risk</strong> — the River Aire and its tributaries flooded catastrophically in December 2015, inundating over 3,000 properties; the Leeds Flood Alleviation Scheme has improved defences but residual risk remains across the valley corridor</li>
            <li><strong>Coal mining subsidence</strong> — large parts of south and east Leeds overlie former coal workings; Coal Authority development referral areas require mining risk assessments before planning consent is granted</li>
            <li><strong>South Bank regeneration</strong> — the largest city-centre development programme in Europe is transforming 253 acres south of the River Aire; environmental constraints including flood risk, contaminated land, and heritage assets are concentrated in this zone</li>
            <li><strong>Former industrial contamination</strong> — Leeds’s textile, engineering, and chemical manufacturing heritage has left widespread soil and groundwater contamination across inner-city brownfield sites</li>
            <li><strong>Magnesian Limestone geology</strong> — the eastern side of the Leeds district sits on Magnesian Limestone, which creates variable ground conditions including dissolution features and swallow holes that affect foundation design</li>
            <li><strong>Green belt pressure</strong> — Leeds is surrounded by green belt on most sides; proposals on green belt land face heightened scrutiny and must demonstrate very special circumstances under NPPF Chapter 13</li>
            <li><strong>Conservation area density</strong> — Leeds has over 70 conservation areas ranging from Georgian estates to Victorian mill complexes; development within or affecting their setting requires heritage impact screening</li>
            <li><strong>Surface water flooding</strong> — Leeds’s steep topography channels surface water rapidly into valley bottoms; the council’s Strategic Flood Risk Assessment identifies extensive surface water flood risk corridors beyond the main river floodplain</li>
        </ul>
    </div>
</div>

{/*  Local Challenges  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Why Leeds projects need screening">
    <div className="sic-container">
        <h2 className="sic-section-title">Leeds’s Environmental Risk Landscape</h2>
        <p className="sic-body">Leeds sits at the confluence of the River Aire and its tributaries, surrounded by former coalfield land and a legacy of heavy industry. Standard conveyancing searches rarely capture the full picture. Site Intelligence screens these risks before you commit.</p>
        <div className="sic-grid">
            <div className="sic-card">
                <h3>Aire Valley &amp; Tributary Flooding</h3>
                <p>The December 2015 floods were a watershed moment for Leeds, causing over £500 million in damage across the city. The <strong>Leeds Flood Alleviation Scheme</strong> (phases 1 and 2) has significantly improved defences along the Aire through the city centre, but residual risk remains — particularly from tributaries like Meanwood Beck, Wyke Beck, and Farnley Beck. Our Flood Risk Assessment maps all four flood sources and models climate change allowances to 2125.</p>
            </div>
            <div className="sic-card">
                <h3>Mining Subsidence &amp; Ground Stability</h3>
                <p>South and east Leeds sit above the <strong>Yorkshire Coalfield</strong>, with extensive historical mining activity. Coal Authority records show thousands of recorded mine entries, shallow workings, and areas of probable unrecorded mining across Rothwell, Garforth, Middleton, and beyond. Our Geotechnical Desk Study screens Coal Authority data, BGS borehole records, and geological mapping to assess subsidence and ground stability risk.</p>
            </div>
            <div className="sic-card">
                <h3>Industrial Contamination Legacy</h3>
                <p>Leeds was a centre for <strong>textile manufacturing, engineering, tanning, and chemical production</strong> throughout the 18th to 20th centuries. Former mill sites, dyeworks, and engineering yards have left contaminated soil and groundwater across inner-city areas including Holbeck, Hunslet, Armley, and Meanwood. Our reports screen historical land use maps, Environment Agency pollution records, and BGS data to identify contamination risks.</p>
            </div>
            <div className="sic-card">
                <h3>Magnesian Limestone &amp; Variable Geology</h3>
                <p>The Leeds district spans a <strong>complex geological boundary</strong> between Coal Measures in the west and Magnesian Limestone in the east. The limestone belt running through Wetherby, Boston Spa, and Aberford is susceptible to dissolution features that can affect foundation design. Our desktop ground investigation analyses BGS mapping, borehole logs, and groundwater data to identify geological risks specific to your site.</p>
            </div>
            <div className="sic-card">
                <h3>South Bank &amp; City Centre Regeneration</h3>
                <p>The <strong>South Bank regeneration programme</strong> is transforming 253 acres of former industrial land into a mixed-use city centre extension. Sites within this zone face multiple overlapping constraints including flood risk from the River Aire, contaminated former industrial land, heritage assets (including the listed Temple Works), and evolving supplementary planning guidance. Our Site Feasibility Report screens all constraint layers in one document.</p>
            </div>
        </div>
    </div>
</section>

{/*  Products Grid  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Site Intelligence reports for Leeds">
    <div className="sic-container">
        <h2 className="sic-section-title">Reports for Leeds Projects</h2>
        <p className="sic-body">Each report draws on 60+ authoritative data sources and is interpreted by qualified engineers with knowledge of Leeds’s specific environmental risks.</p>
        <div className="sic-product-grid">
            <div className="sic-product-card">
                <span className="sic-product-icon">&#128506;</span>
                <h3>Site Feasibility Report</h3>
                <p>Broad constraint screening across 27+ categories. Identifies planning restrictions, Aire Valley flood risk, mining subsidence zones, heritage designations, ecology, and ground conditions for your Leeds site. Includes Planning Friction Score™ and risk register.</p>
                <a href="/site-intelligence/site-feasibility-report/" className="sic-product-btn">From £295 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#9939;</span>
                <h3>Geotechnical Desk Study</h3>
                <p>Desktop ground investigation analysing Coal Measures and Magnesian Limestone geology, mining subsidence risk, borehole data, groundwater levels, and contamination history. Foundation recommendations included for Leeds’s variable ground conditions.</p>
                <a href="/site-intelligence/geotechnical-desk-study/" className="sic-product-btn">From £395 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#127754;</span>
                <h3>Flood Risk Assessment</h3>
                <p>Planning-ready FRA covering Aire Valley fluvial risk, surface water flooding from steep catchments, groundwater, and sewer flood risk. Includes climate change allowances, Sequential Test guidance, and mitigation strategy referencing the Leeds Flood Alleviation Scheme.</p>
                <a href="/site-intelligence/flood-risk-assessment/" className="sic-product-btn">From £495 — Learn More</a>
            </div>
        </div>
    </div>
</section>

{/*  LPA Info  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Leeds local planning authority">
    <div className="sic-container">
        <h2 className="sic-section-title">Leeds Planning Authority Coverage</h2>
        <p className="sic-body">Leeds is a single unitary authority covering a wide geographic area from the city centre to the rural fringes. Site Intelligence reports reference the correct Leeds Local Plan policies and validation requirements for your site.</p>
        <div className="sic-lpa-grid">
            <div className="sic-lpa-card">
                <h4>Leeds City Centre &amp; South Bank</h4>
                <p>Central Leeds, Holbeck, Hunslet, South Bank regeneration area</p>
                <p>Typically: Aire Valley flood risk, contaminated former industrial land, heritage assets, tall buildings policy</p>
            </div>
            <div className="sic-lpa-card">
                <h4>North Leeds</h4>
                <p>Headingley, Meanwood, Roundhay, Chapel Allerton, Moortown, Alwoodley</p>
                <p>Typically: conservation areas, surface water flood risk, Tree Preservation Orders, green belt fringe</p>
            </div>
            <div className="sic-lpa-card">
                <h4>East &amp; South East Leeds</h4>
                <p>Garforth, Kippax, Rothwell, Cross Gates, Halton, Temple Newsam</p>
                <p>Typically: coal mining subsidence, Magnesian Limestone geology, former colliery contamination</p>
            </div>
            <div className="sic-lpa-card">
                <h4>Outer West &amp; Wharfedale</h4>
                <p>Otley, Wetherby, Pudsey, Morley, Bramley, Horsforth</p>
                <p>Typically: green belt constraints, Wharfe Valley flooding, limestone dissolution, rural conservation areas</p>
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
                    <p>Our system queries 60+ authoritative sources — the Environment Agency, British Geological Survey, Coal Authority, Historic England, Natural England, and Leeds City Council’s planning portal.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">3</div>
                <div className="sic-step-content">
                    <h4>Engineers Interpret</h4>
                    <p>Raw data is meaningless without context. Our qualified engineers read every dataset, identify what matters for your Leeds project, and translate findings into actionable advice.</p>
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
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Leeds environmental report FAQs">
    <div className="sic-container">
        <h2 className="sic-section-title">Leeds Environmental Report FAQs</h2>
        <div className="sic-faq">
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How does Aire Valley flooding affect development in Leeds?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    The River Aire and its tributaries present significant flood risk across central and south Leeds. The <strong>December 2015 floods</strong> caused over £500 million in damage and led to the Leeds Flood Alleviation Scheme (LFAS). Phase 1 protects the city centre with moveable weirs, and Phase 2 extends upstream with natural flood management. Despite these improvements, sites within Flood Zones 2 and 3 still require a Flood Risk Assessment for planning applications. Our FRA maps all four flood sources and references the LFAS defence levels.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is mining subsidence a risk for my Leeds development?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Potentially, yes. Large parts of south and east Leeds sit above the <strong>Yorkshire Coalfield</strong>. Areas including Rothwell, Garforth, Middleton, and parts of Morley have extensive recorded and unrecorded mine workings. If your site falls within a Coal Authority <strong>Development High Risk Area</strong>, you will need a Coal Mining Risk Assessment as a planning validation requirement. Our Geotechnical Desk Study screens Coal Authority data, BGS borehole records, and historical mining plans to assess subsidence risk before you commit to costly ground investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is contaminated land common in Leeds?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes. Leeds’s industrial heritage — <strong>textile mills, engineering works, tanneries, dyeworks, and chemical plants</strong> — has left widespread contamination across inner-city brownfield sites. Areas like Holbeck, Hunslet, Armley, and Kirkstall are particularly affected. Even sites that appear residential today may overlie made ground containing heavy metals, hydrocarbons, or asbestos from historical industrial use. Our Geotechnical Desk Study screens historical land use maps, Environment Agency pollution records, and BGS data to identify contamination risks before you instruct intrusive investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What environmental constraints apply to the South Bank regeneration area?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    The South Bank is one of the most constraint-dense areas in Leeds. Sites face <strong>Aire Valley flood risk</strong> (much of the area is in Flood Zones 2 and 3), <strong>contaminated former industrial land</strong> (gasworks, engineering yards), <strong>heritage assets</strong> (including the Grade I listed Temple Works and the Holbeck Conservation Area), and evolving supplementary planning guidance under the South Bank Framework. A Site Feasibility Report screens all of these constraints in a single document.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Can I build on green belt land in Leeds?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Green belt development is heavily restricted under <strong>NPPF Chapter 13</strong>. Leeds is surrounded by green belt on most sides, protecting the setting of the city and preventing coalescence with neighbouring settlements. New buildings in the green belt are inappropriate development unless they fall within specific exceptions (agriculture, replacement dwellings, limited infilling). You must demonstrate <strong>very special circumstances</strong> that clearly outweigh the harm to the green belt. Our Site Feasibility Report identifies whether your site falls within the green belt and flags the relevant policy tests.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Can I use a desktop report instead of a full Phase 1 site investigation?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    A desktop environmental report is a <strong>Tier 1 assessment</strong> — it analyses published data from authoritative sources without a physical site visit. For many planning applications, a desktop report is sufficient to satisfy validation requirements and identify whether further intrusive investigation is needed. If your Leeds site has complex contamination, mining legacy, or geotechnical issues, a desktop study is the cost-effective first step before committing to a full Phase 2 intrusive investigation.
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
                <p className="sic-stat-num">1</p>
                <p className="sic-stat-label">Unitary Authority Covered</p>
            </div>
            <div>
                <p className="sic-stat-num">300+</p>
                <p className="sic-stat-label">Projects Delivered</p>
            </div>
        </div>
        <div className="sic-info">
            <h4>Engineering Interpretation, Not Just Data</h4>
            <p>Anyone can pull a flood map or check a mining report. The difference is interpretation. Our qualified engineers read every dataset in context — cross-referencing Coal Measures geology with mining subsidence risk, Aire Valley flood zones with climate change projections, Magnesian Limestone with foundation design. The result is actionable intelligence, not a data dump.</p>
        </div>
    </div>
</section>

{/*  CTA Footer  */}
<section className="sic-cta-footer">
    <h2>Request a Report for Leeds</h2>
    <p>Send us a Leeds property address and we’ll screen it against 60+ data sources — typically within 48 hours.</p>
    <a href="/contact-pf-co-construction/" className="sic-cta-footer-btn">Request a Report</a>
</section>




      </main>
    </>
  );
};

export default CityLeeds;
