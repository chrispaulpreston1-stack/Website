import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageSEO from '../../components/PageSEO';
import '../../styles/CityLanding.css'; // We'll create this CSS file

const CitySheffield = () => {
  // Simple state to handle FAQ toggling
  const [activeFaq, setActiveFaq] = useState<number>(0);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? -1 : index);
  };

  const schemaStr = `{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Site Intelligence Sheffield | PF & Co Construction",
  "image": "https://pfcoconstruction.co.uk/wp-content/uploads/2024/01/pfco-logo.png",
  "url": "https://pfcoconstruction.co.uk/si-sheffield/",
  "telephone": "01483 363 210",
  "priceRange": "££",
  "description": "Desktop environmental reports for Sheffield projects. Contamination, flood risk, ecology, and ground conditions screening from 60+ data sources.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Sheffield",
    "addressRegion": "South Yorkshire",
    "addressCountry": "GB"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.3811,
    "longitude": -1.4701
  },
  "areaServed": ["Sheffield", "Rotherham", "Doncaster", "Barnsley", "Chesterfield", "Hillsborough", "Ecclesall"],
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
        title="Site Intelligence Sheffield | PF & Co Construction"
        description="Desktop environmental reports for Sheffield projects. Contamination, flood risk, ecology, and ground conditions screening from 60+ data sources."
        url="https://pfcoconstruction.co.uk/si-sheffield/"
        schemaData={schemaData}
      />
      <main className="city-landing-page min-h-screen">
        

{/*  Breadcrumb  */}
<nav className="sic-breadcrumb" aria-label="Breadcrumb">
    <Link to="/">Home</Link> <span>/</span>
    <Link to="/site-intelligence">Site Intelligence</Link> <span>/</span>
    <span style={{ color: 'var(--sic-white)' }}>Sheffield</span>
</nav>

{/*  Hero  */}
<section className="sic-hero" aria-label="Site Intelligence Reports in Sheffield">
    <div className="sic-hero-inner">
        <h1>Site Intelligence Reports<br />in Sheffield</h1>
        <p className="sic-sub">Steel Industry Brownfield • Don Valley Flooding • Peak District Ecology</p>
        <p className="sic-subtitle">Desktop environmental reports for Sheffield development projects. We screen contamination, flood risk, ecology, and ground conditions across the Sheffield district — typically within 48 hours.</p>
    </div>
</section>

{/*  Atomic Answer  */}
<div className="sic-container">
    <div className="sic-atomic">
        <h2>Is Contaminated Land Common in Sheffield?</h2>
        <p>Yes. Sheffield’s <strong>steel and heavy industry heritage</strong> has left widespread contamination across the city’s former industrial areas. The Don Valley corridor — including Attercliffe, Brightside, and Tinsley — was once the heart of the British steel industry, and sites here commonly contain heavy metals, hydrocarbons, asbestos, and slag in the soil and groundwater.</p>
        <p>A Site Intelligence™ Geotechnical Desk Study screens historical land use, Environment Agency pollution records, and BGS geology data to assess contamination risk — typically from <strong>£395</strong>, delivered within 48 hours. By comparison, a traditional Phase 1 consultant in Sheffield typically charges <strong>£1,500&ndash;£4,000+</strong> and takes 2&ndash;4 weeks. A desktop study is the cost-effective first step before committing to intrusive investigation.</p>
    </div>
</div>

{/*  Local Expertise Callout  */}
<div className="sic-container">
    <div className="sic-expertise">
        <h2>Why Sheffield Sites Need Environmental Screening</h2>
        <p className="sic-expertise-sub">Steel City Legacy. National Park Fringe. Complex Terrain.</p>
        <ul>
            <li><strong>Steel industry brownfield contamination</strong> — Sheffield’s steel, cutlery, and heavy engineering past has left widespread heavy metal contamination across the Don Valley, Attercliffe, and the Lower Don corridor; sites often contain slag, metallic waste, and hydrocarbon contamination</li>
            <li><strong>Don Valley flood risk</strong> — the catastrophic June 2007 floods caused over £100 million in damage across Sheffield; the River Don and its tributaries (Sheaf, Loxley, Rivelin) remain significant flood risk corridors through the city</li>
            <li><strong>Peak District National Park fringe</strong> — the western third of the Sheffield district lies within or adjacent to the Peak District National Park; development near the boundary triggers heightened ecological and landscape sensitivity assessments</li>
            <li><strong>Coal Measures geology</strong> — Sheffield sits on the South Yorkshire Coalfield with extensive historical mining; shallow coal workings, mine shafts, and ground instability affect sites across the east and south of the city</li>
            <li><strong>Heart of the City II regeneration</strong> — Sheffield’s city centre is undergoing major regeneration with the Heart of the City II masterplan; sites within this zone face overlapping heritage, contamination, and flood risk constraints</li>
            <li><strong>Steep topography</strong> — Sheffield’s famous hills create challenging drainage conditions and increase surface water flood risk; steep gradients channel runoff rapidly into valley bottoms during intense rainfall</li>
            <li><strong>Sheffield &amp; Rotherham Wildlife Trust designations</strong> — over 80 Local Wildlife Sites and multiple SSSIs are present across the Sheffield district; development near these sites requires ecological impact screening and potential biodiversity net gain assessment</li>
            <li><strong>Conservation area coverage</strong> — Sheffield has 38 conservation areas ranging from Victorian suburban estates to industrial heritage sites; development within or affecting their setting requires heritage impact screening under the Planning (Listed Buildings and Conservation Areas) Act 1990</li>
        </ul>
    </div>
</div>

{/*  Local Challenges  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Why Sheffield projects need screening">
    <div className="sic-container">
        <h2 className="sic-section-title">Sheffield’s Environmental Risk Landscape</h2>
        <p className="sic-body">Sheffield’s identity was forged in steel, and its environmental legacy reflects two centuries of heavy industry set within some of England’s most dramatic landscapes. Standard conveyancing searches rarely capture the full picture. Site Intelligence screens these risks before you commit.</p>
        <div className="sic-grid">
            <div className="sic-card">
                <h3>Steel Industry Contamination</h3>
                <p>The Don Valley was the beating heart of British steelmaking. Former steelworks, forges, rolling mills, and grinding shops across <strong>Attercliffe, Brightside, Tinsley, and the Lower Don</strong> have left a legacy of heavy metals (chromium, nickel, lead), hydrocarbons, asbestos, and steel slag in the soil. Even sites that appear cleared may overlie deep made ground containing industrial waste. Our Geotechnical Desk Study screens historical land use maps, Environment Agency pollution records, and BGS data to identify contamination risks.</p>
            </div>
            <div className="sic-card">
                <h3>Don Valley &amp; Tributary Flooding</h3>
                <p>The <strong>June 2007 floods</strong> devastated Sheffield, with the River Don and its tributaries overwhelming defences across Hillsborough, Meadowhall, and the Lower Don Valley. The Rivers Sheaf, Loxley, and Rivelin also present significant flood risk. Sheffield’s steep topography means rainfall concentrates rapidly in valley bottoms. Our Flood Risk Assessment maps all four flood sources and models climate change allowances to 2125.</p>
            </div>
            <div className="sic-card">
                <h3>Peak District Ecology &amp; Landscape</h3>
                <p>The western fringe of Sheffield lies within or adjacent to the <strong>Peak District National Park</strong>. Development near the park boundary is subject to heightened scrutiny on landscape impact, ecological sensitivity, and light pollution. Ancient woodland, upland heathland, and protected habitats are present across the western suburbs and rural fringe. Our Site Feasibility Report screens ecological designations and flags where specialist surveys may be required.</p>
            </div>
            <div className="sic-card">
                <h3>Coal Mining &amp; Ground Stability</h3>
                <p>Sheffield sits on the <strong>South Yorkshire Coalfield</strong>. Historical mining activity has left a legacy of shallow workings, abandoned mine shafts, and areas of ground instability across the east and south of the city. Coal Authority Development High Risk Areas cover significant portions of the district. Our Geotechnical Desk Study screens Coal Authority records, BGS borehole logs, and geological mapping to assess mining-related ground risks.</p>
            </div>
            <div className="sic-card">
                <h3>City Centre Regeneration Constraints</h3>
                <p>The <strong>Heart of the City II</strong> masterplan is transforming Sheffield’s city centre with new public realm, commercial, and residential development. Sites within the regeneration zone face heritage constraints (including the Grade II* listed City Hall and Peace Gardens setting), contaminated former industrial land, and River Sheaf culvert flood risk. Our reports identify which constraints apply to your specific site.</p>
            </div>
        </div>
    </div>
</section>

{/*  Products Grid  */}
<section className="sic-section" style={{ background: 'var(--sic-dark-alt)' }} aria-label="Site Intelligence reports for Sheffield">
    <div className="sic-container">
        <h2 className="sic-section-title">Reports for Sheffield Projects</h2>
        <p className="sic-body">Each report draws on 60+ authoritative data sources and is interpreted by qualified engineers with knowledge of Sheffield’s specific environmental risks.</p>
        <div className="sic-product-grid">
            <div className="sic-product-card">
                <span className="sic-product-icon">&#128506;</span>
                <h3>Site Feasibility Report</h3>
                <p>Broad constraint screening across 27+ categories. Identifies planning restrictions, Don Valley flood risk, steel industry contamination, Peak District ecology, mining subsidence, and ground conditions for your Sheffield site. Includes Planning Friction Score™ and risk register.</p>
                <a href="/site-intelligence/site-feasibility-report/" className="sic-product-btn">From £295 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#9939;</span>
                <h3>Geotechnical Desk Study</h3>
                <p>Desktop ground investigation analysing Coal Measures geology, mining subsidence risk, steel industry contamination history, borehole data, and groundwater levels. Foundation recommendations included for Sheffield’s variable brownfield ground conditions.</p>
                <a href="/site-intelligence/geotechnical-desk-study/" className="sic-product-btn">From £395 — Learn More</a>
            </div>
            <div className="sic-product-card">
                <span className="sic-product-icon">&#127754;</span>
                <h3>Flood Risk Assessment</h3>
                <p>Planning-ready FRA covering Don Valley fluvial risk, steep catchment surface water flooding, groundwater, and sewer flood risk. Includes climate change allowances, Sequential Test guidance, and mitigation strategy for Sheffield’s challenging topography.</p>
                <a href="/site-intelligence/flood-risk-assessment/" className="sic-product-btn">From £495 — Learn More</a>
            </div>
        </div>
    </div>
</section>

{/*  LPA Info  */}
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Sheffield local planning authority">
    <div className="sic-container">
        <h2 className="sic-section-title">Sheffield Planning Authority Coverage</h2>
        <p className="sic-body">Sheffield is a single unitary authority covering a wide geographic area from the city centre to the Peak District fringe. Site Intelligence reports reference the correct Sheffield Local Plan policies and validation requirements for your site.</p>
        <div className="sic-lpa-grid">
            <div className="sic-lpa-card">
                <h4>City Centre &amp; Don Valley</h4>
                <p>Central Sheffield, Heart of the City II, Attercliffe, Brightside, Kelham Island, Neepsend</p>
                <p>Typically: steel industry contamination, Don Valley flood risk, heritage assets, regeneration zone policies</p>
            </div>
            <div className="sic-lpa-card">
                <h4>South &amp; East Sheffield</h4>
                <p>Ecclesall, Nether Edge, Meersbrook, Woodseats, Gleadless, Mosborough, Handsworth</p>
                <p>Typically: coal mining subsidence, conservation areas, surface water flood risk, former colliery land</p>
            </div>
            <div className="sic-lpa-card">
                <h4>North Sheffield</h4>
                <p>Hillsborough, Stannington, Stocksbridge, Chapeltown, High Green, Ecclesfield</p>
                <p>Typically: Loxley Valley flooding, former steel and mining land, green belt constraints, rural fringe ecology</p>
            </div>
            <div className="sic-lpa-card">
                <h4>West Sheffield &amp; Peak Fringe</h4>
                <p>Fulwood, Ranmoor, Dore, Totley, Bradfield, Dungworth</p>
                <p>Typically: Peak District National Park buffer, ancient woodland, upland ecology, landscape sensitivity, steep topography drainage</p>
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
                    <p>Our system queries 60+ authoritative sources — the Environment Agency, British Geological Survey, Coal Authority, Historic England, Natural England, and Sheffield City Council’s planning portal.</p>
                </div>
            </div>
            <div className="sic-step">
                <div className="sic-step-num">3</div>
                <div className="sic-step-content">
                    <h4>Engineers Interpret</h4>
                    <p>Raw data is meaningless without context. Our qualified engineers read every dataset, identify what matters for your Sheffield project, and translate findings into actionable advice.</p>
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
<section className="sic-section" style={{ background: 'var(--sic-dark)' }} aria-label="Sheffield environmental report FAQs">
    <div className="sic-container">
        <h2 className="sic-section-title">Sheffield Environmental Report FAQs</h2>
        <div className="sic-faq">
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>How does steel industry contamination affect development in Sheffield?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Sheffield’s steel heritage has left <strong>widespread contamination</strong> across the Don Valley and surrounding industrial areas. Former steelworks, forges, and grinding shops deposited heavy metals (chromium, nickel, lead, cadmium), hydrocarbons, asbestos, and steel slag into the soil and groundwater. Sheffield City Council typically requires a <strong>Phase 1 Desk Study</strong> as a planning validation requirement for sites with any history of industrial use. Our Geotechnical Desk Study screens historical land use, Environment Agency records, and BGS data to assess contamination risk before you commit to costly intrusive investigation.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is Don Valley flooding still a risk after the 2007 floods?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Yes. While flood defences have been improved since the <strong>June 2007 floods</strong>, the River Don and its tributaries remain significant flood risk corridors. Sheffield’s steep topography means rainfall concentrates rapidly in the valley bottom. The Environment Agency’s Flood Map shows extensive Flood Zone 2 and 3 areas along the Don through Hillsborough, Kelham Island, and the Lower Don Valley. If your site is in or near these zones, you will need a Flood Risk Assessment. Our FRA covers all four flood sources with climate change projections modelled to 2125.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Does proximity to the Peak District affect my planning application?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Potentially, yes. The western third of the Sheffield district lies within or adjacent to the <strong>Peak District National Park</strong>. Development within the national park is subject to the Peak District National Park Authority as the planning authority, not Sheffield City Council. Even sites outside the park boundary but within its <strong>setting</strong> may face additional scrutiny regarding landscape impact, light pollution, and ecological sensitivity. Our Site Feasibility Report identifies whether your site falls within or near the national park boundary and flags the relevant policy tests and ecological designations.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Is mining subsidence a risk for my Sheffield development?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    Potentially, yes. Sheffield sits on the <strong>South Yorkshire Coalfield</strong>, with extensive historical mining activity across the east and south of the city. Areas including Mosborough, Handsworth, Chapeltown, and parts of the Don Valley have recorded mine workings and mine entries. If your site falls within a Coal Authority <strong>Development High Risk Area</strong>, you will need a Coal Mining Risk Assessment as a planning validation requirement. Our Geotechnical Desk Study screens Coal Authority data, BGS borehole records, and historical mining plans to assess subsidence and ground stability risk.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>What is the difference between brownfield and greenfield environmental risks in Sheffield?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    <strong>Brownfield sites</strong> (previously developed land) in Sheffield typically carry contamination risk from former industrial use, made ground issues, and potentially unstable foundations. The primary concerns are heavy metals, hydrocarbons, and ground stability. <strong>Greenfield sites</strong> in Sheffield may carry different risks including agricultural contamination, ecological designations (especially near the Peak District), flood risk from undeveloped floodplain, and green belt policy constraints. Both types benefit from a desktop environmental screening to identify which specific risks apply before you commit to development.
                </div>
            </div>
            <div className="sic-faq-item">
                <div className="sic-faq-q">
                    <h4>Can I use a desktop report instead of a full site investigation?</h4>
                    <span className="sic-faq-icon">&#9660;</span>
                </div>
                <div className="sic-faq-a">
                    A desktop environmental report is a <strong>Tier 1 assessment</strong> — it analyses published data from authoritative sources without a physical site visit. For many planning applications, a desktop report is sufficient to satisfy validation requirements and identify whether further intrusive investigation is needed. If your Sheffield site has complex contamination from the steel industry or significant mining legacy, a desktop study is the cost-effective first step before committing to a full Phase 2 intrusive investigation.
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
                <p className="sic-stat-num">38</p>
                <p className="sic-stat-label">Sheffield Conservation Areas</p>
            </div>
            <div>
                <p className="sic-stat-num">300+</p>
                <p className="sic-stat-label">Projects Delivered</p>
            </div>
        </div>
        <div className="sic-info">
            <h4>Engineering Interpretation, Not Just Data</h4>
            <p>Anyone can pull a flood map or check a contamination register. The difference is interpretation. Our qualified engineers read every dataset in context — cross-referencing Coal Measures geology with mining subsidence risk, Don Valley flood zones with climate change projections, steel industry land use with contamination pathways. The result is actionable intelligence, not a data dump.</p>
        </div>
    </div>
</section>

{/*  CTA Footer  */}
<section className="sic-cta-footer">
    <h2>Request a Report for Sheffield</h2>
    <p>Send us a Sheffield property address and we’ll screen it against 60+ data sources — typically within 48 hours.</p>
    <a href="/contact-pf-co-construction/" className="sic-cta-footer-btn">Request a Report</a>
</section>




      </main>
    </>
  );
};

export default CitySheffield;
