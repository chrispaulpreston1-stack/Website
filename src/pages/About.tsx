import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import {
  Building2,
  User,
  Bot,
  ShieldCheck,
  Clock,
  Database,
  FileText,
  PoundSterling,
  ArrowRight,
  Phone,
  Mail,
  CheckCircle2,
  Scale,
  Target,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Data                                                                */
/* ------------------------------------------------------------------ */

const KEY_STATS = [
  { stat: '300+', label: 'Projects Delivered', sub: 'Across England and Wales', icon: <Building2 size={20} /> },
  { stat: '127', label: 'AI Agents', sub: 'Interrogating 60+ data sources', icon: <Bot size={20} /> },
  { stat: '48hrs', label: 'Report Turnaround', sub: 'From order to delivery', icon: <Clock size={20} /> },
  { stat: '22', label: 'Report Types', sub: 'Planning-ready documentation', icon: <FileText size={20} /> },
];

const METHODOLOGY_POINTS = [
  {
    title: 'Authoritative Data Only',
    text: 'Every data point comes from official UK government and regulatory sources: Environment Agency, BGS, Historic England, Natural England, Land Registry, and more. We interrogate 60 authoritative APIs so nothing is missed.',
    icon: <Database size={22} />,
  },
  {
    title: 'Multi-Agent Architecture',
    text: '127 specialised AI agents work across defined domains: flood, ecology, heritage, geology, planning policy, transport, and energy. Each agent has a specific scope, input contract, and output schema. No single model tries to do everything.',
    icon: <Bot size={22} />,
  },
  {
    title: '24-Category QA Pipeline',
    text: 'Every report passes through automated quality assurance checks covering accuracy, regulatory compliance, cross-report consistency, citation validity, and formatting. Problems are caught before a human ever sees the draft.',
    icon: <CheckCircle2 size={22} />,
  },
  {
    title: 'Human Engineering Review',
    text: 'AI produces drafts. Engineers produce reports. Every document is reviewed and signed off by a qualified professional. Accountability cannot be delegated to an algorithm.',
    icon: <User size={22} />,
  },
];

const VALUES = [
  {
    title: 'Transparency',
    text: 'We disclose our methodology openly. Clients know that AI contributes to their reports, how it contributes, and where human judgement takes over.',
    icon: <Scale size={22} />,
  },
  {
    title: 'Accuracy Over Speed',
    text: 'Fast turnaround is a consequence of automation, not a compromise on quality. If the data says the site has problems, the report says the site has problems.',
    icon: <Target size={22} />,
  },
  {
    title: 'Fixed, Fair Pricing',
    text: 'Reports start from \u00A3245. No hourly rates, no scope creep, no surprise invoices. You know what you are paying before you order.',
    icon: <PoundSterling size={22} />,
  },
  {
    title: 'RICS AI Standard Aligned',
    text: 'Our framework is designed to align with the RICS standard on the use of artificial intelligence in surveying services: transparency, accountability, fairness, and data governance.',
    icon: <ShieldCheck size={22} />,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function About() {
  return (
    <div className="bg-brand-surface">
      <PageSEO
        title="About Us | PF & Co Site Intelligence"
        description="PF & Co Site Intelligence: AI-powered site intelligence and planning reports. Founded by Chris Preston BEng (Hons). 300+ projects, 127 AI agents, 60+ data sources, 48-hour delivery."
        path="/about"
        jsonLd={{
          '@type': 'AboutPage',
          name: 'About PF & Co Site Intelligence',
          description: 'AI-powered site intelligence and planning reports, founded by Chris Preston BEng (Hons), delivering across England and Wales.',
          publisher: { '@type': 'Organization', name: 'PF & Co Site Intelligence', url: 'https://www.pfandco.co.uk' },
        }}
      />

      {/* -- Hero ---------------------------------------------------- */}
      <section className="pt-32 pb-24 bg-brand-surface">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-widest mb-8">
              <Building2 size={14} />
              Established 2020
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 tracking-tight leading-tight">
              Site Intelligence, <br className="hidden md:block" />Built by Engineers
            </h1>
            <p className="text-xl text-brand-primary/60 leading-relaxed max-w-2xl mx-auto font-light">
              We built the company we wished existed when we were ordering planning reports: faster, more thorough, and honest about what the data actually says.
            </p>
          </motion.div>
        </div>
      </section>

      {/* -- Our Story ----------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">Why We Exist</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">The Problem We Solve</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-brand-primary/60 text-lg leading-relaxed font-light mb-6">
                Planning reports have always been slow and expensive. A single flood risk assessment or heritage impact assessment can take weeks to commission and cost thousands of pounds. For most projects, the core data already exists in public registers and government APIs, but consultants still compile it by hand.
              </p>
              <p className="text-brand-primary/60 text-lg leading-relaxed font-light mb-6">
                PF & Co was founded to change that. We built a multi-agent AI system that interrogates 60+ authoritative data sources, applies a rigorous quality assurance pipeline, and delivers planning-ready reports in 48 hours at a fraction of the traditional cost.
              </p>
              <p className="text-brand-primary/60 text-lg leading-relaxed font-light">
                This is not about replacing professional judgement. It is about giving professionals better tools: faster data extraction, wider coverage, and consistent methodology applied equally to every site.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 rounded-[2rem] bg-brand-surface border border-brand-primary/5"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-5">
                <User size={24} />
              </div>
              <h3 className="text-lg font-bold text-brand-primary mb-2">Chris Preston</h3>
              <p className="text-sm font-bold text-brand-accent mb-4">BEng (Hons), Structural & Civil Engineering</p>
              <p className="text-sm text-brand-primary/50 leading-relaxed font-light mb-4">
                Chris founded PF & Co Site Intelligence in 2020 after spending years in structural and civil engineering, seeing first-hand how much time and money was wasted on report processes that could be automated without sacrificing quality.
              </p>
              <p className="text-sm text-brand-primary/50 leading-relaxed font-light mb-4">
                His engineering background means the company approaches every report as a technical problem: what does the data say, what are the risks, and what does the client actually need to know to make a decision?
              </p>
              <p className="text-sm text-brand-primary/50 leading-relaxed font-light">
                Based in Surrey, PF & Co now operates across England and Wales, serving developers, architects, planning consultants, and homeowners on projects ranging from single extensions to multi-site portfolios.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* -- Key Stats ----------------------------------------------- */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">By the Numbers</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">What We Have Built</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              Five years of engineering, automation, and relentless iteration on data quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {KEY_STATS.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mx-auto mb-4">
                  {card.icon}
                </div>
                <div className="text-4xl font-bold text-brand-primary mb-1">{card.stat}</div>
                <div className="text-sm font-bold text-brand-primary mb-1">{card.label}</div>
                <div className="text-xs text-brand-primary/40">{card.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- AI Methodology ----------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">Our Approach</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">AI as a Tool, Not a Gimmick</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              We use AI where it adds genuine value: processing large volumes of authoritative data, applying consistent methodology, and catching errors humans would miss. We use engineers where they are irreplaceable: interpreting results, exercising judgement, and taking accountability.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {METHODOLOGY_POINTS.map((card, i) => (
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

      {/* -- Honest Assessment --------------------------------------- */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-3xl p-12 md:p-16 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(245,158,11,0.08),transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="flex-1">
                  <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-8">
                    <ShieldCheck size={28} />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Honest Assessment</h2>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    Planning is a trust profession. Clients pay for reports expecting independent, evidence-based advice. They deserve to get it.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-6">
                    We tell you the truth before you spend money. If your site has problems, we will flag them upfront -- not after you have paid for a full application. If flood risk is high, the report says so. If heritage constraints make your scheme difficult, you will know before you instruct an architect.
                  </p>
                  <p className="text-white/60 text-lg font-light leading-relaxed mb-8">
                    Every project we undertake receives an internal honest assessment: a candid, unvarnished view of the site's opportunities and constraints. This is not about telling clients what they want to hear. It is about giving them the information they need to make good decisions.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link
                      to="/order-report"
                      className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-brand-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                    >
                      Order a Report <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* -- Values -------------------------------------------------- */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">How We Work</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Our Commitments</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              The standards we hold ourselves to on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {VALUES.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                  {card.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">{card.title}</h3>
                <p className="text-sm text-brand-primary/50 leading-relaxed font-light">{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* -- Contact CTA --------------------------------------------- */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-brand-primary rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(245,158,11,0.08),transparent_60%)] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-8">
                Whether you need a single report or ongoing site intelligence for a portfolio, we would be happy to discuss your requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
                <a
                  href="tel:01483363210"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-brand-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
                >
                  <Phone size={20} />
                  01483 363210
                </a>
                <a
                  href="mailto:info@pfandco.co.uk"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all border border-white/10"
                >
                  <Mail size={20} />
                  info@pfandco.co.uk
                </a>
              </div>
              <p className="text-white/30 text-xs font-mono">
                PF & Co Site Intelligence Ltd | Registered in England & Wales (No. 12463571) | Based in Surrey
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
