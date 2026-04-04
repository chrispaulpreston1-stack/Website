import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Star,
  FileText,
  Map,
  Layers,
  Leaf,
  Trees,
  Calculator,
  LayoutGrid,
  ArrowDown,
  Droplets,
  Landmark,
  Bus,
  BarChart3,
  Wind,
  Volume2,
  Mountain,
  Scroll,
  Home,
  BarChart2,
  Thermometer,
  AlertTriangle,
  Eye,
  Sun,
  Building2,
  CalendarDays,
  PlusCircle,
  Sparkles,
  Award,
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
interface ReportItem {
  icon: React.ReactNode;
  name: string;
  desc: string;
  trigger?: string;
  intel?: string;
  article?: string;
}

const alwaysIncluded: ReportItem[] = [
  { icon: <Star size={18} />, name: 'Site Feasibility Report', desc: 'Complete site appraisal with constraints, opportunities, and risks', intel: 'All constraint data + development economics + comparable sales + LPA decision patterns + appeal risk analysis' },
  { icon: <FileText size={18} />, name: 'Client Decision Pack', desc: 'Options, viability overview, and recommendation', intel: 'BCIS-informed costings + Land Registry comparables + cross-domain risk intelligence' },
  { icon: <Map size={18} />, name: 'Phase 1 Contaminated Land', desc: 'BGS geology, historic land use, contamination risk assessment', intel: 'BGS geology + borehole records + historic land use + EA contaminated land register + 6 geohazard categories' },
  { icon: <Layers size={18} />, name: 'Geotechnical Desk Study', desc: 'Ground conditions, shrink-swell, made ground assessment', intel: 'BGS bedrock + superficial geology + GeoSure hazards + radon data + borehole logs + SOILSCAPES' },
  { icon: <Leaf size={18} />, name: 'Preliminary Ecological Appraisal', desc: 'Desktop ecology screening, designated sites, habitat mapping', intel: 'SSSI Impact Risk Zones + priority habitats + NBN species records + CIEEM methodology + NE standing advice' },
  { icon: <Trees size={18} />, name: 'BNG Screening Statement', desc: 'Biodiversity net gain baseline assessment', intel: 'Priority Habitat Inventory + habitat mapping + Environment Act 2021 provisions + BNG Metric guidance', article: '/insights/bng-first-year-mandatory-biodiversity-net-gain' },
  { icon: <Calculator size={18} />, name: 'CIL Liability Assessment', desc: 'Community Infrastructure Levy calculation and exemptions', intel: "Your LPA's published charging schedule + indexation + exemption analysis + S106 obligation scan" },
  { icon: <LayoutGrid size={18} />, name: 'Executive Summaries', desc: 'Developer, Architect, Technical, Finance, and Risk overviews -- the 5-minute read' },
  { icon: <ArrowDown size={18} />, name: 'Next Steps', desc: 'Clear action plan -- what to do, who to hire, what to commission next' },
];

const triggeredReports: ReportItem[] = [
  { icon: <Droplets size={18} />, name: 'Flood Risk Assessment', desc: 'Sequential test, exception test, mitigation strategy', trigger: 'Flood Zone 2/3 or site over 1 hectare', intel: 'EA flood maps + surface water + reservoir risk + climate change allowances + appeal Sequential Test decisions', article: '/insights/flood-risk-assessment-complete-guide' },
  { icon: <Landmark size={18} />, name: 'Heritage Statement', desc: 'Significance assessment and impact on setting', trigger: 'Listed building, conservation area, or heritage setting', intel: 'NHLE database + conservation areas + Historic England GPA3 methodology + 850+ appeal precedents on heritage harm', article: '/insights/heritage-harm-balancing-exercise-case-law' },
  { icon: <Bus size={18} />, name: 'Transport Statement', desc: 'Trip generation, access, parking, sustainability', trigger: '10+ dwellings', intel: 'DfT traffic counts + STATS19 accidents + bus/rail timetables + Manual for Streets + LTN 1/20' },
  { icon: <BarChart3 size={18} />, name: 'Drainage Strategy', desc: 'SuDS hierarchy, attenuation, discharge rates', trigger: 'Major development' },
  { icon: <Wind size={18} />, name: 'Air Quality Assessment', desc: 'Exposure assessment, mitigation measures', trigger: 'Near Air Quality Management Area' },
  { icon: <Volume2 size={18} />, name: 'Noise Impact Assessment', desc: 'Noise climate, mitigation, internal levels', trigger: 'Near road, rail, or commercial noise' },
  { icon: <Mountain size={18} />, name: 'LVIA', desc: 'Landscape and Visual Impact Assessment', trigger: 'AONB, National Landscape, or sensitivity' },
  { icon: <Scroll size={18} />, name: 'Archaeological Assessment', desc: 'HER data, archaeological potential, mitigation', trigger: 'Archaeological Priority Area' },
  { icon: <Home size={18} />, name: 'Affordable Housing Statement', desc: 'Policy compliance, tenure mix, viability', trigger: '10+ dwellings' },
  { icon: <BarChart2 size={18} />, name: 'Housing Needs Assessment', desc: 'Local demand, housing mix, demographics', trigger: '10+ dwellings' },
  { icon: <Thermometer size={18} />, name: 'Sustainability and Energy', desc: 'Carbon reduction, renewable energy, Building Regs', trigger: 'Required by local planning policy' },
  { icon: <AlertTriangle size={18} />, name: 'EIA Screening', desc: 'Schedule 2 screening opinion assessment', trigger: 'Schedule 2 thresholds' },
  { icon: <Eye size={18} />, name: 'HRA Nutrient Neutrality', desc: 'Nutrient budget calculation and mitigation', trigger: 'Affected SAC catchment' },
  { icon: <Sun size={18} />, name: 'Daylight and Sunlight', desc: 'BRE guidance compliance, overshadowing analysis', trigger: 'Proximity to existing dwellings' },
  { icon: <Building2 size={18} />, name: 'Townscape and Visual Impact', desc: 'Urban character, visual amenity, design response', trigger: 'Urban sensitivity' },
  { icon: <CalendarDays size={18} />, name: 'Construction Management Plan', desc: 'Access, routing, hours, dust, noise mitigation', trigger: 'Major development or constrained' },
  { icon: <PlusCircle size={18} />, name: 'Socio-Economic Assessment', desc: 'Employment, services, community impact', trigger: '10+ dwellings' },
  { icon: <Award size={18} />, name: 'Social Value Assessment', desc: 'Community benefit, social value quantification', trigger: 'Major development' },
];

/* ------------------------------------------------------------------ */
function ReportCard({ item, accent }: { item: ReportItem; accent: 'green' | 'blue' }) {
  const isGreen = accent === 'green';
  return (
    <motion.div
      whileHover={{ y: -3, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
      className={`relative p-6 bg-white border border-[#e2e5ed] rounded-xl flex flex-col gap-2 overflow-hidden transition-all hover:border-${isGreen ? '[#27ae60]/20' : '[#0f3460]/20'}`}
    >
      {/* Top accent bar (hidden, shown on hover) */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] opacity-0 hover:opacity-100 transition-opacity"
        style={{
          background: isGreen
            ? 'linear-gradient(90deg, #27ae60, #2ecc71)'
            : 'linear-gradient(90deg, #0f3460, #2980b9)',
        }}
      />
      <div
        className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mb-1"
        style={{
          background: isGreen
            ? 'linear-gradient(135deg, rgba(39,174,96,0.08), rgba(39,174,96,0.15))'
            : 'linear-gradient(135deg, rgba(15,52,96,0.08), rgba(15,52,96,0.15))',
          color: isGreen ? '#27ae60' : '#0f3460',
        }}
      >
        {item.icon}
      </div>
      <div className="font-bold text-[0.95rem] text-[#2c2c3a] leading-snug">{item.name}</div>
      <div className="text-[0.825rem] text-[#6b7280] leading-relaxed flex-grow">{item.desc}</div>
      {item.trigger && (
        <span className="inline-flex items-center gap-1 self-start mt-1 px-3 py-1 rounded-full text-[0.7rem] bg-[#f0f9ff] text-[#0369a1] font-semibold tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0369a1] shrink-0" />
          {item.trigger}
        </span>
      )}
      {item.intel && (
        <div className="mt-2 pt-2 border-t border-[#f0f1f5] text-[0.7rem] text-[#9ca3af] leading-relaxed">
          <span className="font-semibold text-[#b0b8cc]">Draws from:</span> {item.intel}
          {item.article && (
            <Link to={item.article} className="block mt-1.5 text-[#27ae60] font-semibold hover:underline" onClick={(e) => e.stopPropagation()}>
              Read our guide &rarr;
            </Link>
          )}
        </div>
      )}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
const dataSources = [
  { name: 'Environment Agency', desc: 'Flood zones, surface water, historic flooding' },
  { name: 'British Geological Survey', desc: 'Geology, ground conditions, boreholes' },
  { name: 'Historic England', desc: 'Listed buildings, conservation areas, scheduled monuments' },
  { name: 'Natural England', desc: 'SSSI, SAC, SPA, Ramsar, habitat mapping' },
  { name: 'DEFRA', desc: 'Air quality, agricultural land classification' },
  { name: 'Ordnance Survey', desc: 'Mapping, boundaries, land use' },
  { name: 'ONS', desc: 'Census demographics, housing data, affordability' },
  { name: 'DfT', desc: 'Traffic counts, road data' },
  { name: 'HM Land Registry', desc: 'Comparable sales, ownership data' },
];

/* ================================================================== */
export default function WhatsIncludedPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>What's Included | 38+ Planning Reports Tailored to Your Site</title>
        <meta name="description" content="38+ desktop planning reports auto-selected by your site constraints. Flood risk, heritage, ecology, transport, contamination and more. 80+ data sources." />
        <meta property="og:title" content="What's Included — Site Intelligence" />
        <meta property="og:description" content="38+ reports tailored to your site. Constraint-triggered selection from 80+ data sources." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.pfandco.co.uk/og-image.png" />
        <link rel="canonical" href="https://www.pfandco.co.uk/whats-included" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How many reports do I get?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Up to 38+ reports, tailored to your site. You always receive the core reports (feasibility, contaminated land, geotechnical, ecology, BNG, CIL, executive summaries). Additional reports are triggered automatically when your site\u2019s constraints require them."
                }
              },
              {
                "@type": "Question",
                "name": "What data sources do you use?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We draw from 80+ authoritative government sources including the Environment Agency, British Geological Survey, Historic England, Natural England, DEFRA, Ordnance Survey, ONS, DfT, and HM Land Registry."
                }
              },
              {
                "@type": "Question",
                "name": "Are these real planning reports?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Every report is a desktop assessment that follows the same methodology and references the same data sources that planning officers rely on. They are not AI summaries \u2014 they are structured technical assessments with source traceability."
                }
              },
              {
                "@type": "Question",
                "name": "What is a constraint-triggered report?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "When you order a pack, our system analyses your site against 80+ data sources and automatically determines which reports are needed. For example, a site near a listed building triggers a heritage impact assessment; a site in Flood Zone 2 or 3 triggers a sequential test and flood risk assessment. You never choose individual reports \u2014 you choose a product and get everything your site requires."
                }
              },
              {
                "@type": "Question",
                "name": "Do I get a flood risk assessment?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, if your site requires one. Our system checks Environment Agency flood maps, surface water flood risk, reservoir flood risk, and historical flood records. Sites in Flood Zones 2 or 3 automatically receive a full flood risk assessment and sequential test. Sites in Flood Zone 1 receive a flood risk screening statement."
                }
              },
              {
                "@type": "Question",
                "name": "Is a preliminary ecological appraisal included?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Every Feasibility pack and above includes a desktop preliminary ecological appraisal covering designated sites (SSSIs, SACs, SPAs, Ramsar, local wildlife sites), priority habitats, protected species indicators, and habitat mapping using Natural England and DEFRA data. It identifies whether further specialist ecological surveys may be needed."
                }
              },
              {
                "@type": "Question",
                "name": "What planning documents do I need for a full application?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A full planning application typically requires a planning statement, design and access statement, flood risk assessment, heritage impact assessment, ecological appraisal, BNG assessment, transport statement, contaminated land assessment, and CIL forms. Our Full Pack (Product 4) generates all the desktop documents in a single order, with a submission pack index and covering letter."
                }
              },
              {
                "@type": "Question",
                "name": "How does the CIL and S106 analysis work?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "We check your LPA\u2019s adopted CIL charging schedule, calculate the estimated CIL liability based on your proposed development, and identify any S106 obligations that may apply. The analysis includes current rates, exemptions you may qualify for, and the CIL forms pre-populated for your scheme."
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
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,52,96,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-[800px] px-6">
          <FadeUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}>
              What's in <span className="text-[#27ae60]">the pack.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-[#b0b8cc] max-w-[640px] mx-auto leading-relaxed">
              Our system detects your site's constraints and automatically selects which reports are needed. You never pick reports — you pick a product.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8">
              <span className="inline-block text-6xl md:text-7xl font-extrabold text-[#27ae60] leading-none">38+</span>
              <br />
              <span className="text-sm text-[#8892a8] uppercase tracking-widest font-semibold">Reports available, tailored to your site</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ---------- ALWAYS INCLUDED ---------- */}
      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">Reports that are always included</h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded my-5" />
            <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed mb-12">
              These reports are generated for every site, regardless of constraints.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {alwaysIncluded.map((item, i) => (
              <FadeUp key={item.name} delay={i * 0.04}>
                <ReportCard item={item} accent="green" />
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- TRIGGERED REPORTS ---------- */}
      <section className="py-16 md:py-[120px] bg-gradient-to-b from-[#f7f8fc] to-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">Reports triggered by your site's constraints</h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded my-5" />
            <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed mb-12">
              These reports are generated only when your site's data triggers them. You don't choose — the system detects what's needed.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {triggeredReports.map((item, i) => (
              <FadeUp key={item.name} delay={i * 0.03}>
                <ReportCard item={item} accent="blue" />
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.2}>
            <p className="mt-6 text-sm text-[#6b7280]">
              Products 3 and 4 add further documents: Pre-Application Advice Report, Planning Statement, Design &amp; Access Statement, Submission Pack Index, CIL Forms, and Covering Letter.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* ---------- HONESTY ---------- */}
      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="p-6 sm:p-12 rounded-[20px] border border-[#e2e5ed] bg-gradient-to-br from-[#f7f8fc] to-white">
              <h3 className="text-[1.35rem] font-semibold mb-6">What we don't produce (and why)</h3>
              <ul className="space-y-2.5">
                {[
                  'Architectural drawings -- these need an architect',
                  'Site-visit surveys (tree survey BS 5837, Phase 2 ground investigation, detailed ecological surveys) -- these need specialists on site',
                ].map((item) => (
                  <li key={item} className="relative pl-6 text-[0.9375rem] text-[#6b7280] py-1">
                    <span className="absolute left-0 text-[#27ae60] font-bold">--</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-medium text-[#2c2c3a] text-[1.0625rem]">
                Our desktop reports flag exactly which site-visit surveys are needed, so you don't waste money on unnecessary ones.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ---------- DATA SOURCES ---------- */}
      <section className="py-16 md:py-[120px] bg-gradient-to-b from-[#f7f8fc] to-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-[660px] mx-auto mb-14">
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">Data sources</h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
              <p className="text-[1.1rem] text-[#6b7280] leading-relaxed">
                Every data point in our reports is sourced from authoritative government and statutory bodies.
              </p>
            </div>
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
                  <p className="text-[0.8125rem] text-[#6b7280]">{src.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
