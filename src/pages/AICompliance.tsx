import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { ShieldCheck, Database, Bot, CheckCircle2, Users, ArrowRight, Mail, Cpu, Eye, Scale, BookOpen } from 'lucide-react';
import { agents, AGENT_CATEGORIES, TOTAL_AGENTS } from '../data/agents';
import { dataSources, DATA_SOURCE_CATEGORIES, TOTAL_DATA_SOURCES } from '../data/dataSources';
import type { AgentCategory } from '../data/agents';
import type { DataSourceCategory } from '../data/dataSources';

/* ------------------------------------------------------------------ */
/*  Derived data — computed from source arrays                         */
/* ------------------------------------------------------------------ */

const DATA_SOURCE_CATEGORY_INFO = (Object.keys(DATA_SOURCE_CATEGORIES) as DataSourceCategory[]).map(cat => ({
  name: DATA_SOURCE_CATEGORIES[cat],
  count: dataSources.filter(ds => ds.category === cat).length,
  description: {
    'geology-ground': 'British Geological Survey mapping, borehole records, geohazard data, and soil classification.',
    'flood-water': 'Environment Agency flood maps, monitoring stations, defence data, and water company records.',
    'heritage': 'Historic England listings, Heritage at Risk Register, and conservation area boundaries.',
    'ecology-environment': 'Natural England designations, protected species records, priority habitats, and ancient woodland.',
    'planning': 'Planning portals, local plan policies, Land Registry, Green Belt, and Article 4 data.',
    'mapping-spatial': 'Ordnance Survey base mapping and Environment Agency LiDAR elevation data.',
    'climate-energy': 'Met Office climate projections, EPC register, DNO capacity heatmaps, and embedded capacity registers.',
    'safety-risk': 'UXO risk mapping and COMAH major hazard installations.',
    'market-infrastructure': 'Land Registry transactions, UK House Price Index, Ofcom broadband, NSIP register, and renewable energy data.',
    'transport-accessibility': 'NaPTAN stops, bus timetables, rail frequencies, DfT traffic data, and cycle infrastructure.',
    'amenity-services': 'Schools, GP surgeries, pharmacies, supermarkets, and food hygiene data.',
  }[cat],
}));

const AGENT_CATEGORY_INFO = (Object.keys(AGENT_CATEGORIES) as AgentCategory[]).map(cat => ({
  name: AGENT_CATEGORIES[cat].label,
  count: agents.filter(a => a.category === cat).length,
  description: AGENT_CATEGORIES[cat].description,
}));

const QA_DOMAINS = [
  { label: 'Accuracy', items: ['Factual accuracy', 'Numerical precision', 'Citation validity'], icon: <CheckCircle2 size={20} /> },
  { label: 'Regulatory', items: ['Planning policy', 'Building regulations', 'Environmental compliance'], icon: <Scale size={20} /> },
  { label: 'Consistency', items: ['Cross-report alignment', 'Terminology', 'Data agreement'], icon: <Database size={20} /> },
  { label: 'Formatting', items: ['Document structure', 'Visual assets', 'Table integrity'], icon: <BookOpen size={20} /> },
  { label: 'Citation', items: ['Source attribution', 'Data freshness', 'Link validity'], icon: <Eye size={20} /> },
];

const RICS_PILLARS = [
  { pillar: 'Transparency', description: 'Public methodology disclosure. Clients are informed that AI is used and how it contributes to their report. This page serves as our standing transparency statement.', icon: <Eye size={24} /> },
  { pillar: 'Accountability', description: 'Named human oversight at every stage. Every report has an accountable engineer. AI does not make autonomous decisions about report content.', icon: <Users size={24} /> },
  { pillar: 'Fairness', description: 'Consistent methodology applied equally to every site. Authoritative government data sources. No algorithmic bias in constraint screening or risk scoring.', icon: <Scale size={24} /> },
  { pillar: 'Data Governance', description: 'We do not train models on client data. All processing is secure and ephemeral. GDPR-compliant data handling with clear retention policies.', icon: <ShieldCheck size={24} /> },
];

const FLOW_STEPS = [
  { label: 'Data Sources', sub: '60 authoritative APIs', icon: <Database size={20} /> },
  { label: 'AI Agents', sub: `${TOTAL_AGENTS} specialised agents`, icon: <Bot size={20} /> },
  { label: 'QA Pipeline', sub: '24-category checks', icon: <CheckCircle2 size={20} /> },
  { label: 'Human Review', sub: 'Engineering sign-off', icon: <Users size={20} /> },
  { label: 'Delivery', sub: 'Client report issued', icon: <Mail size={20} /> },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function AICompliance() {
  return (
    <div className="bg-brand-surface">
      <PageSEO
        title="AI Standards & Compliance | PF & Co Site Intelligence"
        description={`Our AI compliance framework: ${TOTAL_AGENTS} specialised agents, ${TOTAL_DATA_SOURCES} authoritative data sources, 24-category QA pipeline, and RICS AI Standard alignment.`}
        path="/ai-compliance"
        jsonLd={{
          '@type': 'WebPage',
          name: 'AI Standards & Compliance',
          description: `PF & Co Site Intelligence's AI methodology, data governance, and RICS AI Standard alignment for site intelligence reports.`,
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
              RICS AI Standard Aligned
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-brand-primary mb-6 tracking-tight leading-tight">
              AI Standards <br className="hidden md:block" />& Compliance
            </h1>
            <p className="text-xl text-brand-primary/60 leading-relaxed max-w-2xl mx-auto font-light">
              Our commitment to responsible, transparent, and accountable use of artificial intelligence in site intelligence and engineering services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Our AI Methodology ─────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">How It Works</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Our AI Methodology</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              A multi-agent system that interrogates authoritative government data sources, applies a 24-category quality assurance pipeline, and requires human engineering review before every report is issued.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 mb-16">
            {FLOW_STEPS.map((step, i) => (
              <div key={step.label} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-brand-primary/5 shadow-sm flex items-center justify-center text-brand-accent mb-3">
                    {step.icon}
                  </div>
                  <span className="text-sm font-bold text-brand-primary">{step.label}</span>
                  <span className="text-[11px] text-brand-primary/40">{step.sub}</span>
                </motion.div>
                {i < FLOW_STEPS.length - 1 && (
                  <ArrowRight size={18} className="text-brand-primary/20 hidden md:block mx-4 flex-shrink-0" />
                )}
              </div>
            ))}
          </div>

          {/* Stat cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { stat: String(TOTAL_AGENTS), label: 'Specialised Agents', sub: 'Across 7 operational domains', icon: <Cpu size={20} /> },
              { stat: String(TOTAL_DATA_SOURCES), label: 'Data Sources', sub: 'Across 11 categories', icon: <Database size={20} /> },
              { stat: '24', label: 'QA Categories', sub: 'Multi-stage compliance pipeline', icon: <CheckCircle2 size={20} /> },
            ].map((card, i) => (
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

      {/* ── Data Source Categories ──────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">Data Foundations</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">{TOTAL_DATA_SOURCES} Authoritative Data Sources</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              Every report is built on data from official UK government and regulatory sources, organised across {DATA_SOURCE_CATEGORY_INFO.length} categories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {DATA_SOURCE_CATEGORY_INFO.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold text-brand-primary">{cat.name}</h3>
                  <span className="px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest">
                    {cat.count} sources
                  </span>
                </div>
                <p className="text-sm text-brand-primary/50 leading-relaxed font-light">{cat.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-brand-primary/30 italic">
            Individual data source names and per-report mappings are proprietary.
          </p>
        </div>
      </section>

      {/* ── Agent Categories ───────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">AI Architecture</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">{TOTAL_AGENTS} Specialised AI Agents</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              Our multi-agent system is organised into {AGENT_CATEGORY_INFO.length} operational domains. Each agent has a defined scope, input contract, and output schema.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            {AGENT_CATEGORY_INFO.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center text-brand-accent mb-4">
                  <Bot size={18} />
                </div>
                <h3 className="text-sm font-bold text-brand-primary mb-1">{cat.name}</h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-accent block mb-3">{cat.count} agents</span>
                <p className="text-sm text-brand-primary/50 leading-relaxed font-light">{cat.description}</p>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-xs text-brand-primary/30 italic">
            Individual agent names, triggering rules, and report-to-agent mappings are proprietary.
          </p>
        </div>
      </section>

      {/* ── Quality Assurance Overview ─────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">Quality Assurance</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">24-Category QA Pipeline</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              Every report passes through a multi-stage automated quality assurance pipeline before human review. Checks are grouped into five domains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {QA_DOMAINS.map((domain, i) => (
              <motion.div
                key={domain.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                  {domain.icon}
                </div>
                <h3 className="text-sm font-bold text-brand-primary mb-4">{domain.label}</h3>
                <ul className="space-y-2">
                  {domain.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-brand-primary/50 font-light">
                      <CheckCircle2 size={14} className="text-emerald-400 mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Human Oversight Model ──────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">Human-in-the-Loop</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">Human Oversight Model</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              AI augments our engineering capability. It does not replace professional judgement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Engineering Review',
                text: 'Every report is reviewed by a qualified engineer before issue. AI-generated content is treated as a draft, not a deliverable.',
                icon: <Users size={22} />,
              },
              {
                title: 'Accountability',
                text: 'A named individual is accountable for every report issued. Accountability cannot be delegated to an algorithm.',
                icon: <ShieldCheck size={22} />,
              },
              {
                title: 'No Autonomous Decisions',
                text: 'AI does not make final decisions about report content, risk ratings, or recommendations. All outputs are subject to human approval.',
                icon: <Bot size={22} />,
              },
              {
                title: 'Continuous Feedback Loop',
                text: 'Findings from human review are fed back into the system to improve agent performance, QA rules, and data source coverage.',
                icon: <Cpu size={22} />,
              },
            ].map((card, i) => (
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

      {/* ── RICS Alignment Statement ───────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-accent mb-3">Regulatory Alignment</p>
            <h2 className="text-4xl font-bold text-brand-primary mb-4">RICS AI Standard Alignment</h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">
              Our methodology is designed to align with the four pillars of the RICS standard on the use of artificial intelligence in surveying services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {RICS_PILLARS.map((p, i) => (
              <motion.div
                key={p.pillar}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-5">
                  {p.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-primary mb-2">{p.pillar}</h3>
                <p className="text-sm text-brand-primary/50 leading-relaxed font-light">{p.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Due Diligence Pack CTA ─────────────────────────────────── */}
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
                <ShieldCheck size={28} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Supplier Due Diligence Pack</h2>
              <p className="text-white/60 max-w-2xl mx-auto text-lg font-light leading-relaxed mb-8">
                For RICS-regulated professionals, we offer a detailed supplier due diligence pack on request. This includes expanded methodology information at a categorical level.
              </p>
              <a
                href="mailto:info@pfandco.co.uk?subject=AI%20Due%20Diligence%20Pack%20Request"
                className="inline-flex items-center gap-3 px-10 py-5 bg-brand-accent text-brand-primary rounded-full font-bold text-lg hover:scale-105 transition-all shadow-xl shadow-brand-accent/20"
              >
                <Mail size={20} />
                info@pfandco.co.uk
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
