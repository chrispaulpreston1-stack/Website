import React, { useEffect } from 'react';
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
    desc: 'Every report passes a 24-layer QA pipeline. Every number traced to source. No variation between projects.',
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
      {/* ---------- HERO ---------- */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden text-center py-[120px] pt-[120px]"
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
      <section className="py-[120px]" style={{ background: 'linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)' }}>
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
                  <h4 className="text-white font-semibold text-[0.9375rem] mb-2.5">{step.title}</h4>
                  <p className="text-[0.8125rem] text-[#b0b8cc]">{step.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VALUE PROPS ---------- */}
      <section className="py-[120px]">
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
                  <h4 className="text-[1.2rem] font-semibold text-[#27ae60] mb-2.5">{card.title}</h4>
                  <p className="text-[1.0625rem] text-[#6b7280] leading-relaxed">{card.desc}</p>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- VOLUME PRICING ---------- */}
      <section className="py-[120px] bg-gradient-to-b from-white to-[#f7f8fc]">
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
                to="/order-report"
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
