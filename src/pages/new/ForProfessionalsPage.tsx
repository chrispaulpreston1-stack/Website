import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Clock,
  Banknote,
  ShieldCheck,
  Scale,
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
const processSteps = [
  {
    num: '1',
    title: "Enter your client's site address",
    desc: "That's the starting point. Just the address, development type, and scale.",
  },
  {
    num: '2',
    title: 'Tell us the development',
    desc: 'Type, unit count, use class. We handle the rest.',
  },
  {
    num: '3',
    title: 'Receive the evidence pack',
    desc: 'Complete desktop reports in 48 hours, ready for submission.',
  },
  {
    num: '4',
    title: 'Add your drawings, submit',
    desc: 'Pair with your plans. Upload to Planning Portal. Done.',
  },
];

const valueCards = [
  {
    icon: <Clock size={28} />,
    title: 'Save 2-4 months',
    desc: 'No more chasing flood risk consultants, heritage assessors, ecologists. One order, one delivery, 48 hours.',
  },
  {
    icon: <Banknote size={28} />,
    title: 'Save your client \u00A320k-\u00A330k',
    desc: 'Desktop reports at a fraction of traditional consultant fees. Your clients get the same evidence for less.',
  },
  {
    icon: <ShieldCheck size={28} />,
    title: 'Consistent quality',
    desc: 'Every report passes 200+ automated quality checks. Every number traced to source. No variation between projects.',
  },
  {
    icon: <Scale size={28} />,
    title: 'Scale your practice',
    desc: 'Handle more projects without hiring. Same quality every time. Your capacity is no longer limited by consultant availability.',
  },
];

const volumeCards = [
  { num: '3+', label: 'projects per month', desc: 'Preferred rates', color: '#27ae60' },
  { num: '5+', label: 'projects per month', desc: 'Partner rates', color: '#0f3460' },
  { num: 'Retainer', label: 'fixed monthly fee', desc: 'Best rates', color: '#7c3aed' },
];

/* ================================================================== */
export default function ForProfessionalsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>For Architects & Professionals | Site Intelligence</title>
        <meta name="description" content="Stop coordinating 10 consultants. One order, 48 hours, every desktop report your submissions need. Volume pricing for practices." />
        <meta property="og:title" content="For Professionals — Site Intelligence" />
        <meta property="og:description" content="One order replaces 10 consultants. Desktop planning reports in 48 hours." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.pfandco.co.uk/og-image.png" />
        <link rel="canonical" href="https://www.pfandco.co.uk/for-professionals" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Can architects order planning reports for clients?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Many architects and planning professionals use Site Intelligence to provide clients with complete desktop planning intelligence. One order replaces coordinating multiple specialist consultants for flood risk, ecology, heritage, transport, contamination, and other assessments. Volume pricing is available for practices."
                }
              },
              {
                "@type": "Question",
                "name": "How does this replace multiple planning consultants?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Instead of briefing separate consultants for flood risk, ecology, heritage, transport, contaminated land, and geotechnical assessments, you place one order. Our system analyses the site against 80+ data sources and generates every desktop report needed, delivered as a single coordinated pack within 48 hours."
                }
              },
              {
                "@type": "Question",
                "name": "Are the reports accepted by planning officers?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. Our reports are desktop assessments that reference the same authoritative government data sources planning officers use \u2014 Environment Agency, Natural England, Historic England, BGS, and more. Every report includes full source traceability so officers can verify any data point. Reports are validated against 850+ case law precedents."
                }
              },
              {
                "@type": "Question",
                "name": "Is there volume pricing for architectural practices?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. We offer tiered pricing based on dwelling count and can arrange account terms for practices ordering regularly. Contact us to discuss volume arrangements. Screening is \u00a3199 per site regardless of volume; Feasibility packs are priced by dwelling band."
                }
              },
              {
                "@type": "Question",
                "name": "What do I still need to provide as the architect?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You still provide architectural drawings (floor plans, elevations, sections, site layout) and coordinate any specialist surveys that our reports identify as needed \u2014 such as protected species surveys, ground investigation, or topographic survey. We handle all the desktop planning intelligence."
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
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,52,96,0.15) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,52,96,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-[800px] px-6">
          <FadeUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}>
              Stop coordinating
              <br />
              <span className="text-[#27ae60]">10 consultants.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-[#b0b8cc] max-w-[640px] mx-auto leading-relaxed">
              One order. 48 hours. Every desktop report your submissions need. You add the drawings. Your client gets a faster, better service.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8">
              <span className="inline-block text-6xl md:text-7xl font-extrabold text-[#27ae60] leading-none">1</span>
              <br />
              <span className="text-sm text-[#8892a8] uppercase tracking-widest font-semibold">Order replaces 10 consultants</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ---------- PROCESS STEPS ---------- */}
      <section className="py-16 md:py-[120px]" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)' }}>
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-[660px] mx-auto mb-14">
              <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight">
                How it works for your practice
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {processSteps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2, background: 'rgba(255,255,255,0.07)' }}
                  className="text-center p-7 rounded-2xl bg-white/[0.04] border border-white/[0.08] transition-all"
                >
                  <div className="text-[2.5rem] font-extrabold text-[#27ae60] mb-4 tracking-tight">{step.num}</div>
                  <h3 className="text-white font-semibold text-[0.9375rem] mb-2.5">{step.title}</h3>
                  <p className="text-[0.8125rem] text-[#b0b8cc]">{step.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VALUE PROPS ---------- */}
      <section className="py-16 md:py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-[660px] mx-auto mb-14">
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">
                Why practices choose Site Intelligence
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {valueCards.map((card, i) => (
              <FadeUp key={card.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                  className="p-9 rounded-2xl bg-white border border-[#e2e5ed] transition-all"
                >
                  <div className="text-[#27ae60] mb-3.5">{card.icon}</div>
                  <h3 className="text-[1.2rem] font-semibold text-[#27ae60] mb-2.5">{card.title}</h3>
                  <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed">{card.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- WHY PROFESSIONALS TRUST IT ---------- */}
      <section className="py-16 md:py-[120px] bg-gradient-to-b from-[#f7f8fc] to-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-[660px] mx-auto mb-14">
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">
                Why professionals trust the analysis
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
              <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed">
                Speed means nothing if the analysis isn't technically sound. Here's why chartered planners, architects, and developers rely on our intelligence.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
            {[
              { title: 'NPPF December 2024 verified', desc: 'Every policy reference is verified against the current NPPF. We don\'t cite outdated paragraph numbers or superseded policy. When the NPPF changes, our reports update.' },
              { title: 'Your council\'s local plan', desc: 'Reports reference your LPA\'s adopted development plan policies -- not generic national guidance. We know what your specific council requires.' },
              { title: '850+ verified appeal precedents', desc: 'Risk assessments are informed by real inspector decisions on sites with similar constraints -- verified against BAILII and PINS databases. Not generic warnings.' },
              { title: 'PPG methodology compliance', desc: 'Assessments follow Planning Practice Guidance step-by-step methodology -- the same frameworks that statutory consultees and planning officers use.' },
              { title: 'Professional standards', desc: 'Desktop methodology follows CIEEM (ecology), CIfA (archaeology), IAQM (air quality), Historic England GPA3 (heritage), Manual for Streets, and RICS/BCIS (costings).' },
              { title: 'Compare it yourself', desc: 'Request a sample for a site you already know. Compare our output against what you\'d expect from a traditional consultant. That\'s the best test.' },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -1, boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }}
                  className="p-6 bg-white border border-[#e2e5ed] rounded-xl text-[0.9375rem] text-[#6b7280] transition-all"
                >
                  <strong className="text-[#2c2c3a] block mb-1">{item.title}</strong>
                  {item.desc}
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VOLUME PRICING ---------- */}
      <section className="py-16 md:py-[120px] bg-gradient-to-b from-white to-[#f7f8fc]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-[660px] mx-auto mb-10">
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">
                Built for practices, not one-off projects
              </h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
              <p className="text-[1.1rem] text-[#6b7280] leading-relaxed max-w-[640px] mx-auto">
                If you're handling multiple projects per month, we offer volume pricing that makes Site Intelligence a permanent part of your workflow. The more you use it, the better the rate.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-[720px] mx-auto mb-9 text-center">
            {volumeCards.map((card, i) => (
              <FadeUp key={card.num} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -2, boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}
                  className="bg-white rounded-[14px] p-7 border border-[#e5e7eb] transition-all"
                >
                  <div className="text-[1.75rem] font-extrabold" style={{ color: card.color }}>{card.num}</div>
                  <div className="text-xs text-[#6b7280] mt-1">{card.label}</div>
                  <div className="text-sm font-semibold text-[#2c2c3a] mt-2.5">{card.desc}</div>
                </motion.div>
              </FadeUp>
            ))}
          </div>

          <FadeUp delay={0.3}>
            <div className="flex justify-center">
              <Link
                to="/order"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[15px] font-semibold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52] shadow-[0_2px_8px_rgba(39,174,96,0.3)] hover:from-[#2ecc71] hover:to-[#27ae60] hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Talk to Us About Volume Pricing
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
