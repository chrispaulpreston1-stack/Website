import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Search,
  FileText,
  MessageSquare,
  Package,
  ArrowRight,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Fade-up                                                            */
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
/*  Product data                                                       */
/* ------------------------------------------------------------------ */
interface Product {
  tag: string;
  icon: React.ReactNode;
  name: string;
  question: string;
  turnaround: string;
  features: string[];
  ideal: string;
  price: string;
  color: string;
  colorLight: string;
  btnClass: string;
  ctas: { label: string; style: 'primary' | 'outline' }[];
}

const products: Product[] = [
  {
    tag: 'Product 1',
    icon: <Search size={14} />,
    name: 'Site Screening',
    question: '"Is this site worth looking at?"',
    turnaround: 'Same-day turnaround',
    features: [
      'Traffic-light verdict on development potential',
      'Constraint maps across all key planning layers',
      'Executive summary with clear recommendation',
      'Key risks and showstoppers identified upfront',
    ],
    ideal: 'Quick site evaluation before committing time or money',
    price: '\u00A3199',
    color: '#27ae60',
    colorLight: '#ecfdf5',
    btnClass: 'from-[#27ae60] to-[#219a52] hover:from-[#2ecc71] hover:to-[#27ae60] shadow-[0_2px_8px_rgba(39,174,96,0.3)]',
    ctas: [{ label: 'Order Site Screening', style: 'primary' }],
  },
  {
    tag: 'Product 2',
    icon: <FileText size={14} />,
    name: 'Feasibility Intelligence',
    question: '"Should I commit capital to this site?"',
    turnaround: '48-hour turnaround',
    features: [
      'Full feasibility report with constraints, opportunities, and risks',
      'All constraint-triggered technical reports included',
      '20+ map overlays covering every planning constraint layer',
      'Indicative site layout with dwelling positions',
      'Viability overview with cost and revenue estimates',
    ],
    ideal: 'Due diligence before site acquisition or option agreement',
    price: 'From \u00A3695',
    color: '#0f3460',
    colorLight: '#eff6ff',
    btnClass: 'from-[#0f3460] to-[#0b2848] hover:from-[#16407a] hover:to-[#0f3460] shadow-[0_2px_8px_rgba(15,52,96,0.3)]',
    ctas: [
      { label: 'Order Now', style: 'primary' },
      { label: 'Get a Quote', style: 'outline' },
    ],
  },
  {
    tag: 'Product 3',
    icon: <MessageSquare size={14} />,
    name: 'Pre-Application Pack',
    question: '"Engage the council from a position of strength"',
    turnaround: '1-week turnaround',
    features: [
      'Everything in Feasibility Intelligence, plus:',
      'Pre-application advice report',
      'Draft planning statement',
      'Development strategy with policy justification',
      'Validation checklist against local requirements',
    ],
    ideal: 'Formal pre-application engagement with the LPA',
    price: 'From \u00A3995',
    color: '#7c3aed',
    colorLight: '#f5f3ff',
    btnClass: 'from-[#7c3aed] to-[#6d28d9] hover:from-[#8b5cf6] hover:to-[#7c3aed] shadow-[0_2px_8px_rgba(124,58,237,0.3)]',
    ctas: [{ label: 'Get a Quote', style: 'primary' }],
  },
  {
    tag: 'Product 4',
    icon: <Package size={14} />,
    name: 'Planning Intelligence Pack',
    question: '"Everything for submission, except the drawings"',
    turnaround: '1-2 week turnaround',
    features: [
      'Everything in Pre-Application Pack, plus:',
      'Submission-ready planning statement',
      'Design and access statement',
      'Submission pack index with document reference schedule',
      'CIL forms auto-filled from your site data',
      'Covering letter to the LPA',
    ],
    ideal: "Full planning application — pair with your architect's drawings and submit",
    price: 'Tailored to your site \u2014 get a quote',
    color: '#e67e22',
    colorLight: '#fffbeb',
    btnClass: 'from-[#e67e22] to-[#cf6d17] hover:from-[#f39c12] hover:to-[#e67e22] shadow-[0_2px_8px_rgba(230,126,34,0.3)]',
    ctas: [{ label: 'Get a Quote', style: 'primary' }],
  },
];

/* ================================================================== */
/*  FOR DEVELOPERS PAGE                                                */
/* ================================================================== */
export default function ForDevelopersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden text-center py-[120px] pt-[120px]"
        style={{ background: 'linear-gradient(135deg, #0d0d1a, #1a1a2e, #0f3460)', backgroundSize: '300% 300%' }}
      >
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(39,174,96,0.1) 0%, transparent 70%)' }} />
        <div className="absolute bottom-[15%] left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(15,52,96,0.12) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-[800px] px-6">
          <FadeUp>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}>
              Know everything about your site
              <br />
              <span className="text-[#27ae60]">before you spend a penny.</span>
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl text-[#b0b8cc] max-w-[640px] mx-auto leading-relaxed">
              Right now, evaluating a site means coordinating 8-12 separate consultants, spending {'\u00A3'}17,000-{'\u00A3'}52,000, and waiting 3-6 months.
            </p>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-8">
              <span className="inline-block text-6xl md:text-7xl font-extrabold text-[#27ae60] leading-none">48hrs</span>
              <br />
              <span className="text-sm text-[#8892a8] uppercase tracking-widest font-semibold">Same intelligence. Fraction of the cost.</span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ---------- THREE USPs ---------- */}
      <section className="py-16 bg-gradient-to-b from-[#f7f8fc] to-white border-b border-[#e2e5ed]">
        <div className="max-w-[1120px] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            <FadeUp delay={0}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-[#e2e5ed]">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[rgba(39,174,96,0.1)] to-[rgba(39,174,96,0.2)] flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#27ae60" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#27ae60]">48 Hours</div>
                  <p className="text-sm text-[#6b7280]">vs. 3-6 months coordinating 10+ consultants</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.08}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-[#e2e5ed]">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[rgba(15,52,96,0.1)] to-[rgba(15,52,96,0.2)] flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0f3460" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 20h10M10 20V10a4 4 0 0 1 8 0M6 14h8"/></svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#0f3460]">85-93% Saving</div>
                  <p className="text-sm text-[#6b7280]">Same desktop intelligence, fraction of the cost</p>
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={0.16}>
              <div className="flex items-start gap-4 p-6 rounded-xl bg-white border border-[#e2e5ed]">
                <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[rgba(124,58,237,0.1)] to-[rgba(124,58,237,0.2)] flex items-center justify-center shrink-0">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="4" cy="6" r="2"/><circle cx="20" cy="6" r="2"/><circle cx="4" cy="18" r="2"/><circle cx="20" cy="18" r="2"/><line x1="6" y1="6" x2="9.5" y2="10.5"/><line x1="18" y1="6" x2="14.5" y2="10.5"/><line x1="6" y1="18" x2="9.5" y2="13.5"/><line x1="18" y1="18" x2="14.5" y2="13.5"/></svg>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#7c3aed]">Fully Integrated</div>
                  <p className="text-sm text-[#6b7280]">Every report cross-references every other. One system, not 15 silos.</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ---------- PRODUCTS ---------- */}
      <section className="py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          {products.map((p, i) => (
            <FadeUp key={p.tag} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="relative border border-[#e2e5ed] rounded-[20px] p-8 sm:p-12 pl-10 sm:pl-14 mb-9 bg-white overflow-hidden transition-all"
                style={{
                  boxShadow: 'none',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = `0 20px 60px ${p.color}26, 0 0 0 1px ${p.color}1a`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                }}
              >
                {/* Left accent bar */}
                <div
                  className="absolute top-0 left-0 bottom-0 w-[6px]"
                  style={{ background: `linear-gradient(180deg, ${p.color}, ${p.color}cc)` }}
                />

                {/* Tag */}
                <span
                  className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wide mb-4"
                  style={{ background: p.colorLight, color: p.color }}
                >
                  {p.icon}
                  {p.tag}
                </span>

                <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
                <p className="text-[1.05rem] text-[#6b7280] italic mb-5">{p.question}</p>

                {/* Turnaround badge */}
                <span
                  className="inline-block text-xs font-bold uppercase tracking-wide px-4 py-1.5 rounded-lg mb-5"
                  style={{ background: p.colorLight, color: p.color }}
                >
                  {p.turnaround}
                </span>

                {/* Features */}
                <ul className="mb-7 space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="relative pl-6 text-[0.9375rem] text-[#6b7280] py-1">
                      <span
                        className="absolute left-0 top-[14px] w-2 h-2 rounded-sm"
                        style={{ background: p.color }}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Ideal for */}
                <div className="text-sm italic text-[#6b7280] mb-7 px-5 py-4 bg-[#f7f8fc] rounded-[10px]">
                  Ideal for: {p.ideal}
                </div>

                {/* Price + CTAs */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 flex-wrap">
                  <div className="text-[2rem] font-extrabold tracking-tight" style={{ color: p.color }}>
                    {p.price}
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {p.ctas.map((cta) =>
                      cta.style === 'primary' ? (
                        <Link
                          key={cta.label}
                          to="/order-report"
                          className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-semibold text-white bg-gradient-to-br ${p.btnClass} hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all`}
                        >
                          {cta.label} <ArrowRight size={14} />
                        </Link>
                      ) : (
                        <Link
                          key={cta.label}
                          to="/order-report"
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[10px] text-sm font-semibold text-[#0f3460] border-[1.5px] border-[#e2e5ed] hover:border-[#0f3460] hover:bg-[#eff6ff] hover:scale-[1.02] active:scale-[0.98] transition-all"
                        >
                          {cta.label}
                        </Link>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ---------- COST COMPARISON ---------- */}
      <section className="py-[120px] bg-gradient-to-b from-white to-[#f7f8fc]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="text-center max-w-[660px] mx-auto mb-14">
              <h2 className="text-3xl md:text-[2.75rem] font-bold leading-tight tracking-tight">What you'd normally pay</h2>
              <div className="w-12 h-[3px] bg-gradient-to-r from-[#27ae60] to-[#2ecc71] rounded mx-auto my-5" />
              <p className="text-[1.1rem] text-[#6b7280] leading-relaxed">
                Traditional route vs. Site Intelligence — same desktop evidence, fraction of the cost and time.
              </p>
            </div>
          </FadeUp>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <FadeUp>
              <div className="rounded-2xl p-9 bg-[#fef2f2] border border-[#fecaca]">
                <h4 className="text-xl font-semibold mb-6">Traditional route</h4>
                {[
                  { scheme: '15-unit scheme', cost: '\u00A317,000 - \u00A352,000 over 6-16 weeks' },
                  { scheme: '50-unit scheme', cost: '\u00A348,000 - \u00A3153,000 over 9-24 months' },
                  { scheme: 'Single new build', cost: '\u00A32,500 - \u00A38,000 over 4-8 weeks' },
                ].map((r) => (
                  <div key={r.scheme} className="py-3.5 border-b border-black/[0.06] last:border-b-0 text-[0.9375rem]">
                    <strong className="text-[#2c2c3a]">{r.scheme}</strong>
                    <br />
                    <span className="text-[#6b7280]">{r.cost}</span>
                  </div>
                ))}
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="rounded-2xl p-9 bg-[#f0fdf4] border border-[#bbf7d0]">
                <h4 className="text-xl font-semibold mb-6">Site Intelligence</h4>
                {['15-unit scheme', '50-unit scheme', 'Single new build'].map((scheme) => (
                  <div key={scheme} className="py-3.5 border-b border-black/[0.06] last:border-b-0 text-[0.9375rem]">
                    <strong className="text-[#2c2c3a]">{scheme}</strong>
                    <br />
                    <span className="text-[#6b7280]">48 hours</span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ---------- HONESTY ---------- */}
      <section className="py-[120px]">
        <div className="max-w-[1120px] mx-auto px-6">
          <FadeUp>
            <div className="p-12 rounded-[20px] border border-[#e2e5ed] bg-gradient-to-br from-[#f7f8fc] to-white">
              <h3 className="text-[1.35rem] font-semibold mb-6">What you still need from others</h3>
              <ul className="space-y-2.5">
                {[
                  'Architect for drawings (floor plans, elevations, sections)',
                  'Land surveyor for topographic survey',
                  'Specialist surveys where our desktop reports flag the need (ecology, trees, ground investigation)',
                ].map((item) => (
                  <li key={item} className="relative pl-6 text-[0.9375rem] text-[#6b7280] py-1">
                    <span className="absolute left-0 text-[#27ae60] font-bold">--</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-5 font-medium text-[#2c2c3a] text-[1.0625rem]">
                We tell you exactly which specialist surveys your site needs — saving you from commissioning unnecessary ones.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
