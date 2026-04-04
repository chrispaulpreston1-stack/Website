import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Sparkles,
  ShieldCheck,
  Scale,
  BookOpen,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
const FadeUp = ({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.7, delay, ease: [0.4, 0, 0.2, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ------------------------------------------------------------------ */
const dataSources = [
  { name: 'Environment Agency', desc: 'Flood zones, surface water mapping, reservoir risk, historic flood events, flood defences, contaminated land register, and catchment data. The statutory flood risk authority for England.' },
  { name: 'British Geological Survey', desc: 'Bedrock and superficial geology, borehole records, shrink-swell risk, landslide susceptibility, compressibility, dissolution, and radon data. The UK\'s geological authority since 1835.' },
  { name: 'Historic England', desc: 'Listed buildings, conservation areas, scheduled monuments, registered parks and gardens, heritage at risk register. The government\'s advisor on the historic environment.' },
  { name: 'Natural England', desc: 'SSSIs, SACs, SPAs, Ramsar sites, SSSI Impact Risk Zones, priority habitat inventory, National Nature Reserves, agricultural land classification. The government\'s advisor on the natural environment.' },
  { name: 'DEFRA', desc: 'Air quality management areas, background pollution concentrations, noise contour mapping, environmental designations, and MAGIC Map data layers.' },
  { name: 'Ordnance Survey', desc: 'Authoritative mapping, boundary data, land use classification, elevation models, and address data. Britain\'s national mapping agency.' },
  { name: 'Office for National Statistics', desc: 'Census demographics, housing data, affordability ratios, population projections, and local area profiles.' },
  { name: 'Department for Transport', desc: 'Traffic counts at 1,000+ monitoring points, STATS19 accident data, bus and rail timetables, and cycling infrastructure data.' },
  { name: 'HM Land Registry', desc: 'Price paid data, comparable sales analysis, UK House Price Index, and ownership records.' },
  { name: 'Coal Authority', desc: 'Historic mining activity, development high-risk areas, mine entries, and mining reporting areas across England\'s coalfields.' },
  { name: 'National Biodiversity Network', desc: 'Protected species occurrence records and biological recording data from local environmental records centres across England.' },
  { name: 'Planning Data (DLUHC)', desc: 'Local plan status and timetables, conservation area boundaries, Green Belt, Article 4 directions, and Tree Preservation Orders via planning.data.gov.uk.' },
];

const policyItems = [
  { title: 'NPPF verification', desc: 'Every policy reference is verified against the current National Planning Policy Framework (December 2024). We don\'t cite outdated paragraph numbers or superseded policy.' },
  { title: 'Local plan policy mapping', desc: 'Reports reference your council\'s adopted development plan policies -- not generic national guidance. We map site constraints to the specific policies that your planning officer will assess against.' },
  { title: 'PPG methodology compliance', desc: 'Assessments follow Planning Practice Guidance methodology -- the same step-by-step frameworks that planning officers and statutory consultees expect to see.' },
  { title: 'Appeal precedent analysis', desc: '850+ verified appeal decisions inform our risk assessments. We reference real inspector reasoning on sites with similar constraints -- not generic warnings.' },
  { title: 'LPA-specific intelligence', desc: 'Reports are informed by your council\'s adopted policies and local plan requirements. We know what your specific planning authority requires, not just what the NPPF says.' },
];

const qaItems = [
  { title: 'Source traceability', desc: 'Every number traces back to its authoritative source. If a planning officer asks "where did you get this?", one click reveals the government data behind it.' },
  { title: 'Data cross-referencing', desc: 'Every constraint is cross-referenced against multiple data sources. Flood risk alone is checked against EA flood maps, surface water mapping, reservoir risk, historic flood events, and climate change allowances.' },
  { title: 'Regulatory currency', desc: 'Every policy reference is verified against the December 2024 NPPF, relevant PPG methodology, and your site\'s local plan. We don\'t cite superseded policy.' },
  { title: 'Arithmetic accuracy', desc: 'CIL calculations are verified against your LPA\'s published charging schedule with correct indexation. Development economics use real comparable sales data, not estimates.' },
  { title: 'Cross-report consistency', desc: 'Numbers, conclusions, and recommendations are checked for consistency across all reports in the pack. A constraint identified in one report is reflected in every other.' },
  { title: 'Technical accuracy', desc: 'Automated checks verify that narrative content matches the underlying enrichment data across 7 domains -- geology, flood, heritage, ecology, transport, demographics, and contamination.' },
  { title: 'Case law verification', desc: 'Every appeal precedent cited in reports is verified against the original decision on BAILII and PINS databases. We don\'t cite cases that don\'t exist.' },
  { title: 'Constraint-aware logic', desc: '15 feasibility rules check that conclusions are consistent with the site\'s actual constraints. A site in Flood Zone 3 cannot receive a low flood risk rating.' },
  { title: 'Schema and formatting', desc: 'All reports are validated for complete data population, correct formatting, consistent currency display, and proper table structure before delivery.' },
  { title: 'Expert review layer', desc: 'After automated checks, reports pass through specialist review covering heritage significance, ecological sensitivity, highway safety, and viability assessment.' },
];

const standards = [
  { standard: 'CIEEM', body: 'Chartered Institute of Ecology and Environmental Management', use: 'Desktop ecological appraisal methodology' },
  { standard: 'CIfA', body: 'Chartered Institute for Archaeologists', use: 'Archaeological desk-based assessment' },
  { standard: 'IAQM', body: 'Institute of Air Quality Management', use: 'Air quality screening and assessment' },
  { standard: 'ProPG', body: 'ProPG: Planning & Noise', use: 'Noise impact assessment methodology' },
  { standard: 'Historic England GPA3', body: 'Historic England', use: 'Heritage significance and setting assessment' },
  { standard: 'Manual for Streets', body: 'DfT / DCLG', use: 'Street design and highway assessment' },
  { standard: 'LTN 1/20', body: 'Department for Transport', use: 'Cycle infrastructure and active travel' },
  { standard: 'BRE Guide', body: 'Building Research Establishment', use: 'Daylight, sunlight, and overshadowing' },
  { standard: 'CIRIA C753', body: 'CIRIA', use: 'SuDS design and drainage strategy' },
  { standard: 'RICS / BCIS', body: 'Royal Institution of Chartered Surveyors', use: 'Development costings and viability methodology' },
];

/* ================================================================== */
export default function TrustPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Trust & Data Sources | 80+ Authoritative Government Sources</title>
        <meta name="description" content="Every number traces to its source. 80+ government data sources, 200+ automated quality checks, 850+ verified appeal precedents. 307 LPAs covered across England." />
        <meta property="og:title" content="Built on Authoritative Data — Site Intelligence" />
        <meta property="og:description" content="80+ government data sources. 200+ automated quality checks. 850+ verified appeal precedents. Every number traced to source." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.pfandco.co.uk/og-image.png" />
        <link rel="canonical" href="https://www.pfandco.co.uk/trust" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do you ensure accuracy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every report passes through 200+ automated quality checks that verify data sources, cross-reference constraints, check regulatory currency, validate internal consistency, and confirm case law citations. We reference 850+ verified appeal precedents."
                }
              },
              {
                "@type": "Question",
                "name": "Can I see a sample report before ordering?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. You can download a sample feasibility report from our Trust page, or request a sample for a specific site you know so you can verify our accuracy against your own knowledge."
                }
              },
              {
                "@type": "Question",
                "name": "What data sources do planning reports use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We use 80+ authoritative government data sources including the Environment Agency (flood risk, contaminated land), British Geological Survey (geology, ground stability, radon), Historic England (listed buildings, scheduled monuments, conservation areas), Natural England (SSSIs, priority habitats, SSSI Impact Risk Zones), DEFRA, Ordnance Survey, ONS, DfT, HM Land Registry, Coal Authority, and the National Biodiversity Network. Every data point is traceable to its source."
                }
              },
              {
                "@type": "Question",
                "name": "How are planning reports quality checked?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every report passes through 200+ automated quality checks covering data source verification, arithmetic accuracy, cross-report consistency, regulatory compliance, technical accuracy across 7 domains, constraint-aware feasibility logic, and case law citation verification against BAILII and PINS databases. Reports that fail any critical check are flagged for review before delivery."
                }
              },
              {
                "@type": "Question",
                "name": "Are desktop planning assessments reliable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Desktop assessments are the standard Tier 1 methodology for planning applications and are accepted by all 307 English LPAs. They use the same government datasets that planning officers consult when determining applications. Our reports identify where further specialist investigation may be needed, such as protected species surveys or ground investigation."
                }
              },
              {
                "@type": "Question",
                "name": "What professional standards do you follow?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Our assessments follow the desktop methodology within established professional standards including CIEEM (ecology), CIfA (archaeology), IAQM (air quality), ProPG (noise), Historic England GPA3 (heritage), Manual for Streets (highways), LTN 1/20 (cycling), BRE (daylight/sunlight), CIRIA C753 (drainage), and RICS/BCIS (development costings and viability)."
                }
              },
              {
                "@type": "Question",
                "name": "How do you reference planning policy?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every report is verified against the current NPPF (December 2024), references your council's adopted local plan policies, follows Planning Practice Guidance methodology, and draws on 850+ verified appeal precedents to inform risk assessments. We don't cite outdated paragraph numbers or superseded policy."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      {/* ---------- HERO ---------- */}
      <section
        className="relative min-h-[70vh] md:min-h-screen flex items-center justify-center overflow-hidden text-center py-16 pt-24 md:py-[120px] md:pt-[120px]"
        style={{ background: 'linear-gradient(135deg, #0d0d1a, #1a1a2e, #0f3460)', backgroundSize: '300% 300%' }}
      >
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(39,174,96,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,52,96,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-[800px] px-6">
          <FadeUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}>
              Built on <span className="text-[#27ae60]">authoritative data.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-[#b0b8cc] max-w-[640px] mx-auto leading-relaxed">
              Every number in every report traces back to its source. If a planning officer asks "where did you get this?" -- one click.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-8 justify-center">
              <div className="text-center">
                <span className="inline-block text-5xl md:text-6xl font-extrabold text-[#27ae60] leading-none">80+</span>
                <br />
                <span className="text-xs text-[#8892a8] uppercase tracking-widest font-semibold">Data sources</span>
              </div>
              <div className="text-center">
                <span className="inline-block text-5xl md:text-6xl font-extrabold text-[#27ae60] leading-none">850+</span>
                <br />
                <span className="text-xs text-[#8892a8] uppercase tracking-widest font-semibold">Verified precedents</span>
              </div>
              <div className="text-center">
                <span className="inline-block text-5xl md:text-6xl font-extrabold text-[#27ae60] leading-none">200+</span>
                <br />
                <span className="text-xs text-[#8892a8] uppercase tracking-widest font-semibold">Quality checks</span>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ---------- 1. DATA SOURCES ---------- */}
      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <Sparkles size={20} className="text-[#27ae60]" />
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">Data sources</h2>
            </div>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded my-5" />
            <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed mb-12">
              Every report draws from the same authoritative government and statutory data sources that planning officers rely on. We query 80+ distinct datasets in real-time for every site -- no proprietary guesswork, no unverified estimates.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
            {dataSources.map((src, i) => (
              <FadeUp key={src.name} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
                  className="p-7 rounded-[14px] bg-white border border-[#e2e5ed] transition-all"
                >
                  <h4 className="text-[0.9375rem] font-semibold text-[#0f3460] mb-2 flex items-center gap-1.5">
                    <Sparkles size={14} className="text-[#27ae60] shrink-0" />
                    {src.name}
                  </h4>
                  <p className="text-[0.8125rem] text-[#6b7280] leading-relaxed">{src.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 2. POLICY INTELLIGENCE ---------- */}
      <section className="py-16 md:py-[120px] bg-gradient-to-b from-[#f7f8fc] to-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <Scale size={20} className="text-[#27ae60]" />
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">Policy intelligence</h2>
            </div>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded my-5" />
            <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed mb-12">
              We don't just report data -- we analyse what it means for your planning application. Every report is grounded in current planning policy, verified appeal precedents, and your council's specific requirements.
            </p>
          </FadeUp>

          <div className="space-y-3.5 mt-8">
            {policyItems.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -1, boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
                  className="p-6 bg-white border border-[#e2e5ed] rounded-xl text-[0.9375rem] text-[#6b7280] transition-all"
                >
                  <strong className="text-[#2c2c3a]">{item.title}</strong> — {item.desc}
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 3. QUALITY ASSURANCE ---------- */}
      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck size={20} className="text-[#27ae60]" />
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">200+ quality checks</h2>
            </div>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded my-5" />
            <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed mb-12">
              Every report passes through 200+ automated quality checks before delivery. This is not a manual review -- it is a systematic, automated verification of every data point, every calculation, every policy reference, and every case law citation.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            {qaItems.map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -1, boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
                  className="p-6 bg-white border border-[#e2e5ed] rounded-xl transition-all h-full"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 size={16} className="text-[#27ae60] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[0.9375rem] text-[#2c2c3a] block mb-1">{item.title}</strong>
                      <p className="text-[0.8125rem] text-[#6b7280] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- 4. PROFESSIONAL STANDARDS ---------- */}
      <section className="py-16 md:py-[120px] bg-gradient-to-b from-[#f7f8fc] to-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <BookOpen size={20} className="text-[#27ae60]" />
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">Professional standards</h2>
            </div>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded my-5" />
            <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed mb-12">
              Our assessments follow the desktop methodology within established professional standards. These are the same data-led approaches used as the first stage of any planning assessment -- the methodology that statutory consultees expect to see.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
            {standards.map((s, i) => (
              <FadeUp key={s.standard} delay={i * 0.04}>
                <motion.div
                  whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
                  className="p-5 rounded-[14px] bg-white border border-[#e2e5ed] transition-all h-full"
                >
                  <div className="text-[0.95rem] font-bold text-[#0f3460] mb-1">{s.standard}</div>
                  <div className="text-[0.7rem] text-[#9ca3af] font-medium uppercase tracking-wide mb-2">{s.body}</div>
                  <div className="text-[0.8rem] text-[#6b7280] leading-relaxed">{s.use}</div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <p className="mt-8 text-sm text-[#9ca3af] text-center">
              Plus 150+ additional technical guidance documents from government bodies and professional institutions, referenced where relevant to your site's specific constraints.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ---------- SAMPLE REPORT CTA ---------- */}
      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-[660px] mx-auto">
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">See it for yourself</h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
              <p className="text-[1.1rem] text-[#6b7280] leading-relaxed">
                Request a sample report for a site you know, so you can verify our accuracy against your own knowledge. Pick a site you've worked on -- compare what we produce against what you already know about the constraints.
              </p>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <Link
                  to="/order"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[15px] font-semibold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52] shadow-[0_2px_8px_rgba(39,174,96,0.3)] hover:from-[#2ecc71] hover:to-[#27ae60] hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Request a Sample Report
                </Link>
                <a
                  href="/samples/site-feasibility-report-sample.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 sm:px-7 py-3.5 rounded-[10px] text-[15px] font-semibold text-[#0f3460] border-[1.5px] border-[#e2e5ed] hover:border-[#0f3460] hover:bg-[#eff6ff] hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  Download Sample Feasibility Report (PDF)
                </a>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ---------- 5. HONEST LIMITATIONS ---------- */}
      <section className="py-16 md:py-[120px] bg-gradient-to-b from-[#f7f8fc] to-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="p-6 sm:p-12 rounded-[20px] border border-[#e2e5ed] bg-gradient-to-br from-[#f7f8fc] to-white">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle size={20} className="text-[#f59e0b]" />
                <h3 className="text-[1.35rem] font-semibold">What we're not</h3>
              </div>
              <ul className="space-y-2.5">
                {[
                  "We're a desktop intelligence platform -- we tell you what the data says and what specialist surveys you need. We don't replace site visits, and we don't pretend to.",
                  "We're not a replacement for professional judgment on complex or politically sensitive sites",
                  "We don't produce site-visit surveys (protected species, tree surveys, ground investigation) -- we flag exactly which ones are needed so you don't waste money on unnecessary ones",
                  "We don't submit planning applications -- your architect or planning consultant handles that",
                  "Development costings are BCIS-informed desktop estimates, not RICS-compliant cost plans -- they identify site-specific abnormals at feasibility stage, not RIBA Stage 3+ detail",
                ].map((item) => (
                  <li key={item} className="relative pl-6 text-[0.9375rem] text-[#6b7280] py-1">
                    <span className="absolute left-0 text-[#f59e0b] font-bold">--</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 font-medium text-[#2c2c3a] text-[1.0625rem]">
                We produce the desktop intelligence that powers informed decisions -- at the right stage, before you commit capital.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
