import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'motion/react';
import {
  MapPin,
  ShieldCheck,
  FileText,
  ChevronDown,
  Star,
  CheckCircle2,
  Heart,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Count-up hook                                                      */
/* ------------------------------------------------------------------ */
function useCountUp(end: number, suffix: string, duration = 1800) {
  const [value, setValue] = useState('0');
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  useEffect(() => {
    if (!inView) return;
    const start = 0;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * eased);
      setValue(current + suffix);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, end, suffix, duration]);

  return { ref, value };
}

/* ------------------------------------------------------------------ */
/*  Fade-up wrapper                                                    */
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
/*  Stats data                                                         */
/* ------------------------------------------------------------------ */
const stats = [
  { end: 76, suffix: '+', label: 'Data sources & APIs' },
  { end: 34, suffix: '+', label: 'Constraint checkers' },
  { end: 361, suffix: '+', label: 'Verified case law refs' },
  { end: 24, suffix: '+', label: 'QA pipeline checks' },
  { end: 48, suffix: 'hr', label: 'Turnaround' },
];

const dataBadges = [
  'Environment Agency',
  'British Geological Survey',
  'Historic England',
  'DEFRA',
  'Ordnance Survey',
  'Office for National Statistics',
  'Natural England',
  'HM Land Registry',
];

/* ------------------------------------------------------------------ */
/*  Stat component                                                     */
/* ------------------------------------------------------------------ */
function StatItem({ end, suffix, label }: { end: number; suffix: string; label: string; key?: React.Key }) {
  const { ref, value } = useCountUp(end, suffix);
  return (
    <div ref={ref} className="text-center px-4 py-10">
      <div className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-[#27ae60] tracking-tight leading-none transition-transform hover:scale-105">
        {value}
      </div>
      <div className="mt-3 text-xs text-[#b0b8cc]/70 font-medium uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  HOME PAGE                                                          */
/* ================================================================== */
export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center pt-[67px]">
        {/* Animated gradient BG */}
        <div className="absolute inset-0 z-0 animate-[heroGradient_20s_ease_infinite] bg-[length:400%_400%]"
          style={{
            background: 'linear-gradient(135deg, #0d0d1a, #1a1a2e, #16213e, #0f3460, #1a1a2e)',
            backgroundSize: '400% 400%',
          }}
        />
        {/* Glow orbs */}
        <div className="absolute top-[10%] right-[15%] w-[600px] h-[600px] rounded-full pointer-events-none animate-[heroGlow1_12s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, rgba(39,174,96,0.1) 0%, transparent 70%)' }}
        />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none animate-[heroGlow2_15s_ease-in-out_infinite]"
          style={{ background: 'radial-gradient(circle, rgba(15,52,96,0.25) 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-[860px] px-6">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-extrabold text-white leading-[1.05] tracking-tight mb-7"
            style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}
          >
            Planning intelligence.
            <br />
            <span className="text-[#27ae60]">48 hours. Any site in England.</span>
            <span className="inline-block w-[3px] h-[0.9em] bg-[#27ae60] ml-1 align-text-bottom animate-[blink_1s_ease-in-out_infinite]" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.4, 0, 0.2, 1] }}
            className="text-lg md:text-xl text-[#b0b8cc]/90 mb-12 max-w-[620px] mx-auto leading-relaxed"
          >
            Every desktop planning report your application needs — feasibility, flood risk, heritage, ecology, transport, and more — in a single integrated pack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-0"
          >
            <Link
              to="/for-developers"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[15px] font-semibold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52] shadow-[0_2px_8px_rgba(39,174,96,0.3)] hover:from-[#2ecc71] hover:to-[#27ae60] hover:-translate-y-px hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(39,174,96,0.3)] active:scale-[0.98] transition-all"
            >
              I'm a Developer
            </Link>
            <Link
              to="/for-professionals"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[15px] font-semibold text-white border-[1.5px] border-white/25 hover:border-white/50 hover:bg-white/5 hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              I'm a Professional
            </Link>
          </motion.div>

          {/* Trust mini-badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex items-center justify-center gap-4 sm:gap-6 flex-wrap"
          >
            <span className="flex items-center gap-2 text-[#b0b8cc]/60 text-xs sm:text-[0.85rem]">
              <Star size={14} className="text-[#27ae60]/60 shrink-0" fill="rgba(39,174,96,0.6)" />
              76+ data sources
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2 text-[#b0b8cc]/60 text-xs sm:text-[0.85rem]">
              <CheckCircle2 size={14} className="text-[#27ae60]/60 shrink-0" />
              24-layer QA
            </span>
            <span className="hidden sm:block w-px h-4 bg-white/10" />
            <span className="flex items-center gap-2 text-[#b0b8cc]/60 text-xs sm:text-[0.85rem]">
              <Heart size={14} className="text-[#27ae60]/60 shrink-0" fill="rgba(39,174,96,0.6)" />
              England-wide
            </span>
          </motion.div>
        </div>

        {/* Scroll chevron */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-[scrollBounce_2s_ease-in-out_infinite] cursor-pointer">
          <ChevronDown size={28} className="text-white/50" />
        </div>
      </section>

      {/* ---------- HOW IT WORKS ---------- */}
      <section className="py-[140px] bg-gradient-to-b from-white to-[#f7f8fc]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-[660px] mx-auto mb-14">
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">How it works</h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
              <p className="text-[1.1rem] text-[#6b7280] leading-relaxed">
                Three steps from site address to complete planning intelligence pack.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16">
            {[
              {
                icon: <MapPin size={36} />,
                num: 1,
                title: 'Tell us your site',
                desc: "Share the address, the development type, and the scale. That's all we need.",
              },
              {
                icon: <ShieldCheck size={36} />,
                num: 2,
                title: 'We detect constraints automatically',
                desc: 'Our system cross-references 76+ authoritative data sources and 34 constraint checkers to determine exactly what your site needs.',
              },
              {
                icon: <FileText size={36} />,
                num: 3,
                title: 'Receive your tailored report pack',
                desc: 'A complete, submission-quality desktop report pack — every number traced to source, every constraint mapped.',
              },
            ].map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div className="text-center px-5 group">
                  <div className="text-[#27ae60] mb-4 flex justify-center">{step.icon}</div>
                  <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#27ae60] to-[#2ecc71] text-white inline-flex items-center justify-center text-[1.75rem] font-extrabold mb-7 shadow-[0_8px_24px_rgba(39,174,96,0.25)] group-hover:scale-105 group-hover:shadow-[0_12px_32px_rgba(39,174,96,0.35)] transition-all">
                    {step.num}
                  </div>
                  <h4 className="text-[1.25rem] font-semibold mb-3">{step.title}</h4>
                  <p className="text-base text-[#6b7280] max-w-[320px] mx-auto leading-relaxed">{step.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- THREE USPs: SPEED, COST, INTEGRATION ---------- */}
      <section className="py-[120px] bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, rgba(15,52,96,0.03) 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
        <div className="max-w-[1120px] mx-auto px-6 relative z-10">
          <FadeUp>
            <div className="text-center max-w-[700px] mx-auto mb-16">
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">Why Site Intelligence</h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
              <p className="text-[1.1rem] text-[#6b7280] leading-relaxed">
                Three things no traditional consultancy can match.
              </p>
            </div>
          </FadeUp>

          <div className="grid md:grid-cols-3 gap-8">
            {/* SPEED */}
            <FadeUp delay={0}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(39,174,96,0.12)' }}
                className="relative bg-white rounded-2xl p-10 border border-[#e2e5ed] overflow-hidden transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#27ae60] to-[#2ecc71]" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(39,174,96,0.08)] to-[rgba(39,174,96,0.15)] flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div className="text-[2.5rem] font-extrabold text-[#27ae60] leading-none mb-2">48hrs</div>
                <h3 className="text-xl font-bold mb-3">Speed</h3>
                <p className="text-[0.95rem] text-[#6b7280] leading-relaxed mb-4">
                  Traditional consultants take 3-6 months coordinating 8-12 separate firms. We deliver the same desktop intelligence in 48 hours. One order. One delivery.
                </p>
                <div className="text-sm font-semibold text-[#27ae60]">vs. 3-6 months traditional</div>
              </motion.div>
            </FadeUp>

            {/* COST */}
            <FadeUp delay={0.1}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(15,52,96,0.12)' }}
                className="relative bg-white rounded-2xl p-10 border border-[#e2e5ed] overflow-hidden transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0f3460] to-[#2980b9]" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(15,52,96,0.08)] to-[rgba(15,52,96,0.15)] flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0f3460" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10M10 20V10a4 4 0 0 1 8 0M6 14h8"/></svg>
                </div>
                <div className="text-[2.5rem] font-extrabold text-[#0f3460] leading-none mb-2">85-93%</div>
                <h3 className="text-xl font-bold mb-3">Cost</h3>
                <p className="text-[0.95rem] text-[#6b7280] leading-relaxed mb-4">
                  A 15-unit scheme typically costs &pound;17,000-&pound;52,000 in desktop consultant reports. Same scope from Site Intelligence: a fraction of that. Same data sources. Same quality.
                </p>
                <div className="text-sm font-semibold text-[#0f3460]">saving vs. traditional consultancy</div>
              </motion.div>
            </FadeUp>

            {/* INTEGRATION */}
            <FadeUp delay={0.2}>
              <motion.div
                whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(124,58,237,0.12)' }}
                className="relative bg-white rounded-2xl p-10 border border-[#e2e5ed] overflow-hidden transition-all"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7c3aed] to-[#9b59b6]" />
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[rgba(124,58,237,0.08)] to-[rgba(124,58,237,0.15)] flex items-center justify-center mb-6">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><line x1="6" y1="6" x2="9.5" y2="10.5"/><line x1="18" y1="6" x2="14.5" y2="10.5"/><line x1="6" y1="18" x2="9.5" y2="13.5"/><line x1="18" y1="18" x2="14.5" y2="13.5"/></svg>
                </div>
                <div className="text-[2.5rem] font-extrabold text-[#7c3aed] leading-none mb-2">1 system</div>
                <h3 className="text-xl font-bold mb-3">Integration</h3>
                <p className="text-[0.95rem] text-[#6b7280] leading-relaxed mb-4">
                  Traditional consultants work in silos. Our system connects every data point across every discipline — when flood mitigation adds &pound;200k to your build costs, your viability assessment already knows.
                </p>
                <div className="text-sm font-semibold text-[#7c3aed]">vs. 10+ separate consultants</div>
              </motion.div>
            </FadeUp>
          </div>

          <FadeUp delay={0.3}>
            <div className="mt-14 text-center">
              <p className="text-lg text-[#6b7280] max-w-[700px] mx-auto leading-relaxed">
                Every report references every other report. Flood risk feeds viability. Ecology shapes layout. Heritage constrains design. CIL affects finance. <span className="font-semibold text-[#2c2c3a]">One integrated intelligence system, not 15 disconnected PDFs.</span>
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ---------- STATS BAR ---------- */}
      <section className="relative py-[160px] overflow-hidden" style={{ background: 'linear-gradient(135deg, #0d0d1a, #1a1a2e, #0f3460)' }}>
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(39,174,96,0.06) 0%, transparent 60%)' }} />
        <div className="max-w-[1120px] mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px">
            {stats.map((s) => (
              <StatItem key={s.label} end={s.end} suffix={s.suffix} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DATA SOURCE BADGES ---------- */}
      <section className="py-[120px] bg-gradient-to-b from-[#f7f8fc] to-white">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-[660px] mx-auto mb-14">
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">Trusted data sources</h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
              <p className="text-[1.1rem] text-[#6b7280] leading-relaxed">
                We use the same authoritative government data sources that planning officers rely on.
              </p>
            </div>
          </FadeUp>
          <div className="flex flex-wrap gap-3.5 justify-center mt-12">
            {dataBadges.map((name, i) => (
              <FadeUp key={name} delay={i * 0.04}>
                <motion.span
                  whileHover={{ y: -2, boxShadow: '0 6px 20px rgba(15,52,96,0.12)' }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-[10px] bg-white border border-[#e2e5ed] text-[0.8125rem] font-semibold text-[#0f3460] tracking-wide shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:border-[#0f3460] transition-all cursor-default"
                >
                  <ShieldCheck size={14} className="text-[#27ae60] shrink-0" />
                  {name}
                </motion.span>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FINAL CTA ---------- */}
      <section className="relative py-[160px] text-center overflow-hidden" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(39,174,96,0.08) 0%, transparent 60%)' }} />
        <div className="max-w-[1120px] mx-auto px-6 relative z-10">
          <FadeUp>
            <h2 className="text-3xl md:text-[2.75rem] font-bold text-white leading-tight tracking-tight mb-5">
              Ready to see what your site needs?
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-[1.15rem] text-[#b0b8cc]/80 mb-10 max-w-[540px] mx-auto leading-relaxed">
              Get a complete planning intelligence pack for your site in 48 hours.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/for-developers"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[15px] font-semibold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52] shadow-[0_2px_8px_rgba(39,174,96,0.3)] hover:from-[#2ecc71] hover:to-[#27ae60] hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                Get Started
              </Link>
              <Link
                to="/trust"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-[10px] text-[15px] font-semibold text-white border-[1.5px] border-white/25 hover:border-white/50 hover:bg-white/5 hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                See How It Works
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes heroGradient {
          0% { background-position: 0% 50%; }
          25% { background-position: 100% 50%; }
          50% { background-position: 100% 100%; }
          75% { background-position: 0% 100%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes heroGlow1 {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.07; }
          33% { transform: translate(30px,-20px) scale(1.1); opacity: 0.1; }
          66% { transform: translate(-20px,15px) scale(0.95); opacity: 0.06; }
        }
        @keyframes heroGlow2 {
          0%, 100% { transform: translate(0,0) scale(1); opacity: 0.05; }
          50% { transform: translate(-25px,20px) scale(1.15); opacity: 0.08; }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: translateY(0) translateX(-50%); opacity: 0.6; }
          50% { transform: translateY(10px) translateX(-50%); opacity: 1; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
    </>
  );
}
