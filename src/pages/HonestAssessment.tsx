import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import {
  ShieldCheck,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Target,
  ArrowRight,
  PoundSterling,
  Search,
  Scale,
  TrendingDown,
  FileWarning,
  Lightbulb,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const INDUSTRY_PROBLEMS = [
  {
    icon: <PoundSterling size={22} />,
    title: 'Fee-driven advice',
    text: 'Most consultancies earn fees from the application process itself. The longer the process runs, the more they bill. There is a structural incentive to proceed, even when a site has fundamental problems.',
  },
  {
    icon: <TrendingDown size={22} />,
    title: 'Late-stage bad news',
    text: 'Developers routinely discover dealbreakers — Green Belt harm, heritage objections, flood risk, access deficiencies — after spending thousands on architects, surveys, and application fees.',
  },
  {
    icon: <FileWarning size={22} />,
    title: 'Sugar-coated assessments',
    text: 'Reports that downplay constraints to keep the project moving forward. Optimistic language where a clear warning was needed. The client pays the price when the application is refused.',
  },
];

const CONSTRAINT_CATEGORIES = [
  'Green Belt & designation status',
  'Conservation area & Article 4',
  'Listed building & heritage setting',
  'Flood zones & surface water risk',
  'Ecology & protected habitats',
  'Tree preservation orders',
  'Ground contamination history',
  'Access & highways constraints',
  'Noise & air quality exposure',
  'Utilities & infrastructure capacity',
  'Rights of way & easements',
  'Planning history & refusal patterns',
  'Local plan policy conflicts',
  'Neighbourhood plan restrictions',
  'CIL & S106 exposure',
  'Building height & massing limits',
  'Daylight & sunlight impact',
  'Biodiversity net gain obligations',
  'Agricultural land classification',
  'Mineral safeguarding areas',
  'Source protection zones',
  'COMAH & UXO risk zones',
];

const DIFFERENTIATORS = [
  {
    icon: <Target size={22} />,
    title: 'Fixed-price, no incentive to proceed',
    text: 'Our AI-powered model delivers a complete constraint screening for a fixed fee. We do not earn more if you proceed to application. We earn the same fee whether the report says "go" or "stop".',
  },
  {
    icon: <Search size={22} />,
    title: '22 constraint categories, not a gut feeling',
    text: 'Every site is screened against 22 categories of planning, environmental, and ground risk constraint using 60 authoritative government data sources. Nothing is missed because nothing is skipped.',
  },
  {
    icon: <Scale size={22} />,
    title: 'Objective, data-driven conclusions',
    text: 'Each constraint is assessed against published policy and verifiable data. The report tells you what the data says, not what you want to hear. Risk ratings are transparent and evidence-based.',
  },
  {
    icon: <Lightbulb size={22} />,
    title: 'Clear, actionable language',
    text: 'Constraints are categorised as realistic, risky, or a non-starter. No ambiguity. No hedging. If a site has a fatal flaw, you will know in plain English before you spend another penny.',
  },
];

const TRAFFIC_LIGHT = [
  {
    colour: 'emerald',
    label: 'Realistic',
    desc: 'Constraint is minor or manageable within normal planning parameters. Proceed with confidence.',
    icon: <CheckCircle2 size={20} />,
    bg: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-100',
  },
  {
    colour: 'amber',
    label: 'Risky',
    desc: 'Constraint is material and will require mitigation, specialist input, or negotiation with the LPA. Proceed with caution.',
    icon: <AlertTriangle size={20} />,
    bg: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-100',
  },
  {
    colour: 'red',
    label: 'Non-starter',
    desc: 'Constraint is fundamental and likely to result in refusal. Do not proceed without resolving this issue first.',
    icon: <XCircle size={20} />,
    bg: 'bg-red-50',
    text: 'text-red-600',
    border: 'border-red-100',
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function HonestAssessment() {
  return (
    <div className="bg-brand-surface">
      <PageSEO
        title="Honest Assessment | We Tell You the Truth | PF & Co"
        description="Every site gets an honest, upfront assessment of its development prospects. If there are dealbreakers, you'll know before committing to architect fees and application costs."
        path="/honest-assessment"
        jsonLd={{
          '@type': 'WebPage',
          name: 'Honest Assessment',
          description: 'PF & Co\'s honest assessment approach: upfront constraint screening that tells you the truth before you spend money.',
          publisher: { '@type': 'Organization', name: 'PF & Co Site Intelligence', url: 'https://www.pfandco.co.uk' },
        }}
      />

      {/* ── Hero ───────────────────────────────────────────────────── */}
      <section className="pt-32 pb-24 bg-brand-surface">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-8">
              <ShieldCheck size={14} />
              Brand Differentiator
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 tracking-tight leading-tight">
              We Tell You the Truth <br className="hidden md:block" />Before You Spend Money
            </h1>
            <p className="text-xl text-brand-primary/60 leading-relaxed max-w-3xl mx-auto font-light">
              Every site gets an honest, upfront assessment of its development prospects. If there are dealbreakers — Green Belt harm, heritage constraints, flood risk, access issues — you will know before committing to architect fees and application costs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── The Problem ────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">The Industry Problem</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Why Developers Waste Thousands</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              The traditional planning consultancy model has a fundamental conflict of interest. The people advising you on whether to proceed are the same people who get paid when you do.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {INDUSTRY_PROBLEMS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-red-500 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">{card.title}</h3>
                <p className="text-sm text-brand-primary/50 leading-relaxed font-light">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Approach ───────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">Our Approach</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">No Incentive to Tell You What You Want to Hear</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              PF & Co's fixed-price, AI-powered model eliminates the conflict of interest. We earn the same fee regardless of whether the report says "proceed" or "walk away".
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {DIFFERENTIATORS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">{card.title}</h3>
                <p className="text-sm text-brand-primary/50 leading-relaxed font-light">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works: Traffic Light System ──────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">How It Works</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Honest Ratings, Not Optimistic Spin</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              Every constraint is assessed and rated using a clear three-tier system. No ambiguity. No room for misinterpretation.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            {TRAFFIC_LIGHT.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-[2rem] ${item.bg} border ${item.border}`}
              >
                <div className={`w-12 h-12 rounded-xl bg-white flex items-center justify-center ${item.text} mb-5`}>
                  {item.icon}
                </div>
                <h3 className={`text-lg font-bold ${item.text} mb-2`}>{item.label}</h3>
                <p className="text-sm text-brand-primary/50 leading-relaxed font-light">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 22 Constraint Categories ───────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">Comprehensive Screening</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">22 Constraint Categories. Nothing Missed.</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              Our Site Feasibility Reports screen every site against the full spectrum of planning, environmental, and ground risk constraints. Each one is assessed, rated, and explained.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {CONSTRAINT_CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="flex items-center gap-3 p-4 rounded-2xl bg-white border border-brand-primary/5 shadow-sm"
              >
                <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0" />
                <span className="text-sm font-medium text-brand-primary">{cat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Philosophy Quote ───────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mx-auto mb-8">
              <ShieldCheck size={28} />
            </div>
            <blockquote className="text-2xl md:text-3xl font-bold text-brand-primary leading-snug mb-6">
              "A £595 report that saves you £20,000 in wasted application costs is not an expense — it is the smartest investment in your project."
            </blockquote>
            <p className="text-brand-primary/40 text-sm font-medium uppercase tracking-widest">
              PF & Co Philosophy
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── The Numbers ────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">The Maths</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">What a Bad Site Costs You</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              These are the typical costs developers incur before discovering a site has fundamental issues that should have been flagged at the outset.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { stat: '£3,000+', label: 'Architect fees', sub: 'Concept to planning drawings' },
              { stat: '£5,000+', label: 'Specialist surveys', sub: 'Ecology, trees, flood, heritage' },
              { stat: '£2,000+', label: 'Application fees', sub: 'LPA fees and agent costs' },
              { stat: '£10,000+', label: 'Total at risk', sub: 'Before a single brick is laid' },
            ].map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm text-center"
              >
                <div className="text-3xl font-bold text-red-500 mb-2">{card.stat}</div>
                <div className="text-sm font-bold text-brand-primary mb-1">{card.label}</div>
                <div className="text-xs text-brand-primary/40">{card.sub}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 max-w-5xl mx-auto"
          >
            <div className="p-8 rounded-[2rem] bg-emerald-50 border border-emerald-100 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">From £595</div>
              <div className="text-sm font-bold text-brand-primary mb-1">Site Feasibility Report</div>
              <div className="text-xs text-brand-primary/40">Know the truth before you commit</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.08),transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mx-auto mb-8">
                <Target size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get the Truth About Your Site</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-10">
                Order a Site Feasibility Report and know exactly where your site stands — before you spend money on architects, surveys, and application fees. 22 constraint categories. 60 data sources. Delivered in 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/site-intelligence/site-feasibility-report"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white text-brand-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl"
                >
                  Site Feasibility Report
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/order-report"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-brand-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                >
                  Order Report
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
