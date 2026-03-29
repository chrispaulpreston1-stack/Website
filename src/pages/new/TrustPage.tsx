import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';

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
  { name: 'Environment Agency', desc: 'Flood zones, surface water mapping, reservoir risk, historic flood events. The statutory flood risk authority for England -- the same data planning officers consult.' },
  { name: 'British Geological Survey', desc: "Bedrock and superficial geology, ground conditions, borehole records, shrink-swell risk. The UK's geological data authority since 1835." },
  { name: 'Historic England', desc: "Listed buildings, conservation areas, scheduled monuments, registered parks and gardens. The government's advisor on the historic environment." },
  { name: 'Natural England', desc: "SSSI, SAC, SPA, Ramsar sites, habitat mapping, agricultural land classification. The government's advisor on the natural environment." },
  { name: 'DEFRA', desc: 'Air quality data, AQMA boundaries, agricultural land classification, environmental designations. Government department for environment, food, and rural affairs.' },
  { name: 'Ordnance Survey', desc: "Authoritative mapping, boundary data, land use, address data. Britain's national mapping agency -- the definitive geographic reference." },
  { name: 'Office for National Statistics', desc: "Census demographics, housing data, affordability ratios, population projections. The UK's statistical authority." },
  { name: 'Department for Transport', desc: 'Traffic counts, road classification, accessibility data. Government data on every counted road in England.' },
  { name: 'HM Land Registry', desc: 'Price paid data, comparable sales, ownership records. The government register for property ownership in England and Wales.' },
];

const qaItems = [
  { title: 'Source traceability', desc: 'Every number traces back to its source. If a planning officer asks "where did you get this?", one click reveals the authoritative data behind it.' },
  { title: 'Cross-referencing', desc: 'Every constraint is cross-referenced against multiple data sources. A flood zone boundary is checked against the Environment Agency, surface water mapping, and historic flood data.' },
  { title: 'Regulatory verification', desc: "Every policy reference is verified against the current NPPF (December 2024), relevant PPG methodology, and the site's local plan." },
  { title: 'Internal consistency', desc: 'Numbers, conclusions, and recommendations are checked for consistency across all reports in the pack. A constraint identified in one report is reflected in every other.' },
  { title: 'Currency and formatting', desc: "All financial figures are verified and formatted correctly. CIL calculations are checked against the LPA's published charging schedule." },
];

/* ================================================================== */
export default function TrustPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Trust & Data Sources | 76+ Authoritative Government Sources</title>
        <meta name="description" content="Every number traces to its source. 76+ government data sources, 34-layer QA pipeline, 650+ verified case law references. 302 LPAs covered across England." />
        <meta property="og:title" content="Built on Authoritative Data — Site Intelligence" />
        <meta property="og:description" content="76+ government data sources. 34-layer QA pipeline. Every number traced to source." />
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
                  "text": "Every report passes through a 34-layer automated QA pipeline that verifies data sources, cross-references constraints, checks regulatory currency, and validates internal consistency. We reference 650+ verified case law precedents."
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
                  "text": "We use 76+ authoritative government data sources including the Environment Agency (flood risk, contaminated land), British Geological Survey (geology, ground stability), Historic England (listed buildings, scheduled monuments, conservation areas), Natural England (SSSIs, priority habitats, designated sites), DEFRA, Ordnance Survey, ONS, DfT, and HM Land Registry. Every data point is traceable to its source."
                }
              },
              {
                "@type": "Question",
                "name": "How are planning reports quality checked?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Every report passes through a 34-layer automated QA pipeline. This verifies data source currency, cross-references constraints between reports, validates regulatory compliance, checks internal consistency, and confirms case law references against our database of 650+ verified precedents. Reports that fail any critical check are flagged for review before delivery."
                }
              },
              {
                "@type": "Question",
                "name": "Are desktop planning assessments reliable?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Desktop assessments are the standard Tier 1 methodology for planning applications and are accepted by all 302 English LPAs. They use the same government datasets that planning officers consult when determining applications. Our reports identify where further specialist investigation may be needed, such as protected species surveys or ground investigation."
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
            <div className="mt-8">
              <span className="inline-block text-6xl md:text-7xl font-extrabold text-[#27ae60] leading-none">34+</span>
              <br />
              <span className="text-sm text-[#8892a8] uppercase tracking-widest font-semibold">QA pipeline checks on every report</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ---------- DATA SOURCES ---------- */}
      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">Our data sources</h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded my-5" />
            <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed mb-12">
              Every report draws from the same authoritative government and statutory data sources that planning officers rely on. No proprietary guesswork. No unverified estimates.
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

      {/* ---------- QA PROCESS ---------- */}
      <section className="py-16 md:py-[120px] bg-gradient-to-b from-[#f7f8fc] to-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">Our quality process</h2>
            <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded my-5" />
            <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed mb-12">
              Every report passes through a 34-layer quality assurance pipeline before delivery. This is not a manual review — it is a systematic, automated verification of every data point, every calculation, and every regulatory reference.
            </p>
          </FadeUp>

          <div className="space-y-3.5 mt-8">
            {qaItems.map((item, i) => (
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

      {/* ---------- SAMPLE REPORT CTA ---------- */}
      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-[660px] mx-auto">
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">See it for yourself</h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
              <p className="text-[1.1rem] text-[#6b7280] leading-relaxed">
                Request a sample report for a site you know, so you can verify our accuracy against your own knowledge. Pick a site you've worked on — compare what we produce against what you already know about the constraints.
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

      {/* ---------- HONESTY ---------- */}
      <section className="py-16 md:py-[120px] bg-gradient-to-b from-[#f7f8fc] to-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="p-6 sm:p-12 rounded-[20px] border border-[#e2e5ed] bg-gradient-to-br from-[#f7f8fc] to-white">
              <h3 className="text-[1.35rem] font-semibold mb-6">What we're not</h3>
              <ul className="space-y-2.5">
                {[
                  "We're not a replacement for professional judgment on complex or politically sensitive sites",
                  "We don't produce site-visit surveys -- we flag when they're needed",
                  "We don't submit planning applications -- your architect or planning consultant handles that",
                  'We produce the desktop intelligence that powers informed decisions',
                ].map((item) => (
                  <li key={item} className="relative pl-6 text-[0.9375rem] text-[#6b7280] py-1">
                    <span className="absolute left-0 text-[#27ae60] font-bold">--</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
