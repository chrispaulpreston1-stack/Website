import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const CityManchester = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Site Intelligence Manchester | PF & Co Construction",
  "image": "https://pfcoconstruction.co.uk/wp-content/uploads/2024/01/pfco-logo.png",
  "url": "https://pfcoconstruction.co.uk/si-manchester/",
  "telephone": "01483 363 210",
  "priceRange": "££",
  "description": "Desktop environmental reports for Manchester projects. Flood risk, contamination, ground conditions, and heritage screening from 60+ data sources.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Manchester",
    "addressRegion": "Greater Manchester",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.4808,
    "longitude": -2.2426
  },
  "areaServed": ["Manchester", "Salford", "Trafford", "Stockport", "Tameside", "Oldham", "Bury", "Rochdale"],
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
        title="Site Intelligence Manchester | PF & Co Construction"
        description="Desktop environmental reports for Manchester projects. Flood risk, contamination, ground conditions, and heritage screening from 60+ data sources."
        path="/si-manchester"
        jsonLd={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        

{/*  Breadcrumb  */}
<nav className="sic-breadcrumb" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/site-intelligence">Site Intelligence</Link> <span>/</span>
    <span style={{ color: 'var(--sic-white)' }}>Manchester</span>
</nav>

{/*  Hero  */}
<section className="sic-hero" style={{ backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.6), rgba(15, 23, 42, 0.8)), url('/images/manchester_city_hero.png')` }} aria-label="Site Intelligence Reports in Manchester">
    <div className="sic-hero-inner">
        <h1>Site Intelligence Reports<br />in Manchester</h1>
        <p className="sic-sub">Mersey Flood Plain • Former Industrial Land • Major Regeneration Zones</p>
        <p className="sic-subtitle"><strong>Desktop-First Pre-Planning Due Diligence:</strong> Desktop environmental reports for Manchester development projects. We screen flood risk, contamination, ground conditions, and heritage constraints across all 10 Greater Manchester planning authorities — typically within 48 hours.</p>
    </div>
</section>

{/*  Atomic Answer  */}
<div className="sic-container">
    <div className="sic-atomic">
        <h2>How Much Does a Desk Study Cost in Manchester?</h2>
        <p>A Site Intelligence™ desktop environmental report for a Manchester site typically costs between <strong>£295 and £495</strong>, depending on the report type. A Site Feasibility Report (broad constraint screening) starts at £295. A Geotechnical Desk Study (ground conditions focus) starts at £395. A Flood Risk Assessment starts at £495.</p>
        <p>By comparison, a traditional Phase 1 environmental consultant in Manchester typically charges <strong>£1,500&ndash;£5,000+</strong> and takes 2&ndash;4 weeks. Site Intelligence reports are desktop-based, drawing on 60+ authoritative data sources, and are typically delivered within 48 hours.</p>
    </div>
</div>

{/*  Local Expertise Callout  */}
<div className="sic-container">
    <div className="sic-expertise">
        <h2>Why Manchester Sites Need Desktop Screening First</h2>
        <p className="sic-expertise-sub">10 Planning Authorities. Complex Industrial Legacy. One Report.</p>
        <ul>
            <li><strong>Mersey and Irwell flood risk</strong> — the Mersey, Irwell, and Medlock river corridors create extensive Flood Zone 2 and 3 areas across central Manchester and Salford; surface water flooding compounds the risk in low-lying areas</li>
            <li><strong>Former textile and chemical industry contamination</strong> — Manchester’s industrial heritage has left widespread soil contamination from cotton mills, dyeworks, chemical plants, and bleach works across inner-city brownfield sites</li>
            <li><strong>Manchester Ship Canal corridor</strong> — the canal and its associated dock basins present contamination, flood risk, and heritage considerations for Trafford and Salford Quays development sites</li>
            <li><strong>Coal mining legacy in outer boroughs</strong> — areas around Wigan, Bolton, and parts of Oldham fall within Coal Authority referral areas where mining subsidence risk requires assessment</li>
            <li><strong>Peat and glacial deposits</strong> — Manchester sits on glacial till over Carboniferous sandstone and mudstone; peat deposits in eastern areas affect foundation design and settlement calculations</li>
            <li><strong>Major regeneration zones</strong> — Northern Quarter, Salford Quays, NOMA, and the Eastern Gateway are subject to strategic regeneration frameworks that impose additional planning requirements</li>
            <li><strong>Radon risk in eastern areas</strong> — parts of Stockport, Tameside, and the eastern fringe of Greater Manchester fall within radon-affected areas where protective measures may be required</li>
            <li><strong>Air quality management</strong> — much of Greater Manchester is designated as an Air Quality Management Area (AQMA); the Clean Air Zone and development proposals may need to demonstrate air quality mitigation</li>
        </ul>
    </div>
</div>

{/*  Local Challenges  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Why Manchester projects need screening">
    <div className="sic-container">
        <h2 className="sic-section-title">Manchester’s Environmental Risk Landscape</h2>
        <p className="sic-body">Greater Manchester’s transformation from industrial powerhouse to modern city region has left a complex environmental legacy that standard conveyancing searches rarely capture. Site Intelligence screens these risks before you commit.</p>
        <div className="sic-grid">
            <div className="sic-card">
                <h3>Mersey &amp; Irwell Flood Risk</h3>
                <p>The Mersey, Irwell, and Medlock river corridors create significant <strong>fluvial flood risk</strong> across central Manchester and Salford. The Boxing Day 2015 floods demonstrated the vulnerability of riverside development. Surface water flooding is also a growing concern in heavily urbanised areas with ageing combined sewers. Our Flood Risk Assessment maps all flood sources and models climate change allowances to 2125.</p>
            </div>
            <div className="sic-card">
                <h3>Industrial Contamination Legacy</h3>
                <p>Manchester was the birthplace of the Industrial Revolution. Former <strong>cotton mills, dyeworks, gasworks, chemical plants, and engineering works</strong> have left a legacy of contaminated soil and groundwater across inner-city boroughs. Even sites that appear clean may overlie made ground containing heavy metals, hydrocarbons, or asbestos. Our Geotechnical Desk Study screens historical land use and Environment Agency records to identify contamination risks.</p>
            </div>
            <div className="sic-card">
                <h3>Coal Mining &amp; Ground Stability</h3>
                <p>Outer Greater Manchester boroughs — particularly <strong>Wigan, Bolton, and parts of Oldham and Rochdale</strong> — fall within Coal Authority referral areas. Shallow coal seams, mine entries, and former workings can cause subsidence and ground instability. Our reports identify whether a Coal Authority mining report is required and screen BGS data for recorded mine workings.</p>
            </div>
            <div className="sic-card">
                <h3>Complex Glacial Geology</h3>
                <p>Manchester’s geology comprises <strong>glacial till, sand, and gravel</strong> overlying Carboniferous sandstone (Manchester Marls and Coal Measures). Variable drift thickness and peat deposits in eastern areas create challenging ground conditions for foundation design. Our desktop ground investigation analyses BGS mapping, borehole logs, and groundwater data to inform preliminary foundation recommendations.</p>
            </div>
            <div className="sic-card">
                <h3>Regeneration &amp; Strategic Planning</h3>
                <p>Greater Manchester’s <strong>Places for Everyone</strong> joint development plan sets the strategic framework for housing and employment growth across nine boroughs. Sites within strategic allocations face additional policy requirements around density, infrastructure contributions, and sustainability standards. Our reports reference the correct local and strategic policies for your site location.</p>
            </div>
        </div>
    </div>
</section>

{/*  Products Grid  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Site Intelligence reports for Manchester">
    <div className="sic-container">
        <h2 className="sic-section-title">Reports for Manchester Projects</h2>
        <p className="sic-body">Each report draws on 60+ authoritative data sources and is interpreted by qualified engineers with Manchester-specific knowledge.</p>
        <div className="sic-product-grid">
            <div className="sic-product-card">
                <span className="sic-product-icon">&#128506;</span>
                <h3>Site Feasibility Report</h3>
                <p>Broad constraint screening across 27+ categories. Identifies planning restrictions, flood risk, heritage designations, ecology, contamination, and ground conditions for your Manchester site. Includes Planning Friction Score™ and risk register.</p>
                <a href="/site-intelligence/site-feasibility-report/" className="sic-product-btn">From £295 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#9939;</span>
                <h3>Geotechnical Desk Study</h3>
                <p>Desktop ground investigation analysing glacial till and Carboniferous geology, borehole data, groundwater levels, coal mining risk, and contamination history. Foundation recommendations included for Manchester’s variable ground conditions.</p>
                <a href="/site-intelligence/geotechnical-desk-study/" className="sic-product-btn">From £395 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#127754;</span>
                <h3>Flood Risk Assessment</h3>
                <p>Planning-ready FRA covering Mersey and Irwell fluvial risk, surface water flooding, groundwater, and sewer flood risk. Includes climate change allowances, Sequential Test guidance, and mitigation strategy for Greater Manchester authorities.</p>
                <a href="/site-intelligence/flood-risk-assessment/" className="sic-product-btn">From £495 — Learn More</a>
            </div>
        </div>
    </div>
</section>

{/*  LPA Info  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Manchester local planning authorities">
    <div className="sic-container">
        <h2 className="sic-section-title">Greater Manchester Planning Authorities We Cover</h2>
        <p className="sic-body">Site Intelligence reports are available for sites under any of Greater Manchester’s 10 local planning authorities. Reports reference the correct Local Plan policies and validation requirements for your borough.</p>
        <div className="sic-lpa-grid">
            <div className="sic-lpa-card">
                <h4>Manchester &amp; Salford</h4>
                <p>Manchester City Council, Salford City Council</p>
                <p>Typically: Mersey/Irwell flood risk, industrial contamination, regeneration frameworks, AQMA constraints</p>
            </div>
            <div className="sic-lpa-card">
                <h4>South Greater Manchester</h4>
                <p>Trafford, Stockport</p>
                <p>Typically: Ship Canal corridor, conservation areas, radon risk (Stockport), green belt</p>
            </div>
            <div className="sic-lpa-card">
                <h4>East Greater Manchester</h4>
                <p>Tameside, Oldham, Rochdale</p>
                <p>Typically: coal mining legacy, peat deposits, moorland ecology, steep topography</p>
            </div>
            <div className="sic-lpa-card">
                <h4>North &amp; West Greater Manchester</h4>
                <p>Bury, Bolton, Wigan</p>
                <p>Typically: coal mining subsidence, former heavy industry, flood risk from Irwell tributaries</p>
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
                    <p>Our system queries 60+ authoritative sources — the Environment Agency, British Geological Survey, Historic England, Natural England, the Coal Authority, and your borough’s planning portal.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">3</div>
                <div className="sic-step-content">
                    <h4>Engineers Interpret</h4>
                    <p>Raw data is meaningless without context. Our qualified engineers read every dataset, identify what matters for your Manchester project, and translate findings into actionable advice.</p>
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
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Manchester environmental report FAQs">
    <div className="sic-container">
        <h2 className="sic-section-title">Manchester Environmental Report FAQs</h2>
        <div className="sic-faq">
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What flood risks affect Manchester development sites?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Manchester faces three main flood sources: <strong>fluvial flooding</strong> from the Mersey, Irwell, Medlock, and their tributaries, <strong>surface water flooding</strong> caused by heavy rainfall overwhelming ageing combined sewer systems in densely urbanised areas, and <strong>groundwater flooding</strong> in low-lying areas near river corridors. The Boxing Day 2015 floods caused widespread damage across Salford and central Manchester, highlighting the vulnerability of riverside development. Our Flood Risk Assessment covers all flood sources with climate change projections to 2125.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is contamination from Manchester’s industrial past a concern?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes. Manchester was at the heart of the Industrial Revolution, and former <strong>cotton mills, dyeworks, gasworks, chemical plants, bleach works, and engineering factories</strong> have left a legacy of contaminated soil and groundwater across the city. Common contaminants include heavy metals, polycyclic aromatic hydrocarbons (PAHs), solvents, and asbestos in made ground. Even residential streets may overlie infilled mill lodges or industrial waste. Our Geotechnical Desk Study screens historical Ordnance Survey maps, Environment Agency pollution records, and BGS geology data to assess contamination risk before you instruct intrusive investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is radon a risk in Greater Manchester?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Radon risk varies across Greater Manchester. Parts of <strong>Stockport, Tameside, and the eastern fringe</strong> of the conurbation fall within radon-affected areas where the underlying geology (Carboniferous sandstone and limestone) can produce elevated radon levels. Public Health England data indicates that some postcodes in these areas require <strong>basic or full radon protective measures</strong> in new buildings. Our reports screen UK radon data and flag whether protective measures are likely to be required under Building Regulations Approved Document C.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How does the Greater Manchester strategic framework affect planning?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    The <strong>Places for Everyone</strong> joint development plan covers nine of the ten Greater Manchester authorities (all except Stockport, which withdrew). It sets strategic policies on housing allocations, employment land, green belt release, infrastructure, and sustainability. Sites within strategic allocations face additional requirements around density, affordable housing, and design quality. Each borough also maintains its own Local Plan. Our reports reference both the strategic framework and the correct Local Plan policies for your specific site location.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What is the difference between brownfield and greenfield risk in Manchester?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    <strong>Brownfield sites</strong> (previously developed land) in Manchester typically carry higher contamination and ground stability risks due to industrial heritage, but benefit from planning policy support under NPPF paragraph 120. <strong>Greenfield sites</strong> in outer boroughs may face coal mining risk, ecological constraints, and green belt policy barriers, but generally have simpler ground conditions. Both types require environmental screening — the risks are different rather than absent. A Site Feasibility Report identifies the specific constraints affecting your site regardless of its development history.
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
                <p className="sic-stat-num">10</p>
                <p className="sic-stat-label">Greater Manchester LPAs Covered</p>
            </div>
            <div>
                <p className="sic-stat-num">300+</p>
                <p className="sic-stat-label">Projects Delivered</p>
            </div>
        </div>
        <div className="sic-info">
            <h4>Engineering Interpretation, Not Just Data</h4>
            <p>Anyone can pull a flood map or check a planning portal. The difference is interpretation. Our qualified engineers read every dataset in context — cross-referencing glacial geology with drainage capacity, Mersey flood zones with climate change projections, coal mining records with ground stability data. The result is actionable intelligence, not a data dump.</p>
        </div>
    </div>
</section>

{/*  CTA Footer  */}
<section className="sic-cta-footer">
    <h2>Request a Report for Manchester</h2>
    <p>Send us a Manchester property address and we’ll screen it against 60+ data sources — typically within 48 hours.</p>
    <a href="/contact-pf-co-construction/" className="sic-cta-footer-btn">Request a Report</a>
</section>




      </main>
    </>
  );
};

export default CityManchester;
