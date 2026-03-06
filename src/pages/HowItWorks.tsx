import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Check, Search, Layers, FileText, Award, HardHat,
  ChevronRight, Crown, AlertTriangle, MapPin, Shield, Clock,
  Landmark, Droplets, TreePine, Zap, Scale, ArrowDown,
  Building2, Ruler, Target, TrendingUp, Compass, Hammer
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { bundles, reports, getReportBySlug, type ReportBundle } from '../data/reports';

const phases = [
  { id: 'assessment', label: 'Site Assessment', shortLabel: 'Assessment', icon: Search, stage: '0-1', color: 'from-teal-500 to-cyan-600', lightBg: 'bg-teal-50', accentColor: 'text-teal-600', borderColor: 'border-teal-200' },
  { id: 'strategy', label: 'Strategy', shortLabel: 'Strategy', icon: Compass, stage: '1', color: 'from-violet-500 to-purple-600', lightBg: 'bg-violet-50', accentColor: 'text-violet-600', borderColor: 'border-violet-200' },
  { id: 'application', label: 'Planning Application', shortLabel: 'Planning', icon: FileText, stage: '2-3', color: 'from-blue-500 to-indigo-600', lightBg: 'bg-blue-50', accentColor: 'text-blue-600', borderColor: 'border-blue-200' },
  { id: 'post-permission', label: 'Post-Permission', shortLabel: 'Post-Perm', icon: Award, stage: '4', color: 'from-amber-500 to-orange-600', lightBg: 'bg-amber-50', accentColor: 'text-amber-600', borderColor: 'border-amber-200' },
  { id: 'construction', label: 'Construction', shortLabel: 'Building', icon: Hammer, stage: '5', color: 'from-rose-500 to-red-600', lightBg: 'bg-rose-50', accentColor: 'text-rose-600', borderColor: 'border-rose-200' },
];

interface PhaseReport {
  slug: string;
  whatItTellsYou: string;
  midMarket: string;
  required?: string;
}

const phaseReports: Record<string, PhaseReport[]> = {
  assessment: [
    { slug: 'site-feasibility-report', whatItTellsYou: '22+ planning, environmental & ground constraints. Planning Friction Score (0-100). Buildability Rating (1-10).', midMarket: '£1,000-£4,000' },
    { slug: 'geotechnical-desk-study', whatItTellsYou: 'Ground conditions, geology, contamination, foundation risk.', midMarket: '£800-£1,500' },
    { slug: 'flood-risk-assessment', whatItTellsYou: '7 flood sources, Decision Risk Scores (0-10), SuDS viability.', midMarket: '£750-£1,500' },
    { slug: 'feasibility-study', whatItTellsYou: 'Development viability, GDV estimate, cost appraisal.', midMarket: '£2,000-£5,000' },
  ],
  strategy: [
    { slug: 'pre-application-advice', whatItTellsYou: 'Targeted enquiry pack for LPA pre-submission engagement.', midMarket: '£750-£2,000' },
    { slug: 'cil-liability-assessment', whatItTellsYou: 'Your development levy liability, exemption checks, relief options.', midMarket: '£500-£1,500' },
  ],
  application: [
    { slug: 'planning-statement', whatItTellsYou: 'Policy evidence and planning justification.', midMarket: '£1,000-£3,000', required: 'Usually yes' },
    { slug: 'design-and-access-statement', whatItTellsYou: 'Design rationale, site context, accessibility.', midMarket: '£800-£2,000', required: 'Often yes' },
    { slug: 'heritage-impact-assessment', whatItTellsYou: 'Significance, setting impact, NPPF analysis.', midMarket: '£1,000-£2,500', required: 'If heritage flagged' },
    { slug: 'biodiversity-net-gain', whatItTellsYou: 'Habitat assessment, exemption checks, metric.', midMarket: '£1,500-£3,000', required: 'Mandatory (most)' },
    { slug: 'energy-statement', whatItTellsYou: 'SAP, Part L, MEES, carbon analysis.', midMarket: '£750-£2,000', required: 'LPA dependent' },
    { slug: 'transport-statement', whatItTellsYou: 'Highways, accessibility, trip generation.', midMarket: '£1,500-£3,000', required: 'If access issues' },
    { slug: 'parking-survey', whatItTellsYou: 'Evidence-based parking demand & provision.', midMarket: '£1,000-£2,000', required: 'If parking pressure' },
    { slug: 'tree-survey', whatItTellsYou: 'Tree categorisation, RPAs, impact assessment.', midMarket: '£400-£900', required: 'If TPOs/trees' },
  ],
  'post-permission': [
    { slug: 'pre-construction-design-review', whatItTellsYou: '95-check design coordination review — catches clashes before they become site problems.', midMarket: '£1,500-£3,000' },
    { slug: 'construction-management-plan', whatItTellsYou: 'Pre-construction logistics, phasing, site safety. Satisfies CMP pre-commencement conditions.', midMarket: '£1,200-£3,000' },
  ],
  construction: [
    { slug: 'building-control', whatItTellsYou: 'Part A structural calculations and drawings for Building Regs submission.', midMarket: '£850-£2,500' },
    { slug: 'party-wall-assessment', whatItTellsYou: 'Engineering-led party wall assessment under the Party Wall Act 1996.', midMarket: '£850-£2,500' },
  ],
};

const phaseBundles: Record<string, string[]> = {
  assessment: ['developer-due-diligence', 'triple-threat', 'self-build-starter'],
  strategy: [],
  application: ['full-planning-suite', 'appeal-ready-pack', 'architect-support-pack'],
  'post-permission': ['construction-readiness'],
  construction: [],
};

const phaseContent: Record<string, { title: string; subtitle: string; when: string; who: string; note?: string; afterNote?: string }> = {
  assessment: {
    title: 'Should I Buy This Site?',
    subtitle: 'Constraint screening, ground risk, and viability — before you commit.',
    when: 'Before you commit to a site, before you exchange, before you tie up capital.',
    who: 'Developers, land buyers, investors, self-builders, homeowners considering a plot.',
    afterNote: 'Start here: The SFR is the entry point for every project. It screens your site against 22+ constraint categories and tells you what other reports you need.',
  },
  strategy: {
    title: 'What Can I Build?',
    subtitle: 'Pre-application engagement and levy assessment — before design fees.',
    when: 'Before your architect starts drawing, before you invest in design fees.',
    who: 'Anyone with a site who wants to understand what\'s achievable before committing to design.',
    note: 'Pre-application engagement with the council is the single most effective way to avoid refusal. Know your CIL liability before you design — it affects viability.',
  },
  application: {
    title: 'Preparing the Application',
    subtitle: 'The technical evidence documents your planning submission needs.',
    when: 'Your architect is designing the scheme. You need the supporting evidence documents.',
    who: 'Architects, planning consultants, homeowners, developers preparing to submit.',
    note: 'We produce the technical evidence documents. Your architect produces the drawings.',
    afterNote: 'Not sure which you need? Your SFR from Phase 1 tells you exactly which reports are required for your site. No guesswork, no missing documents, no invalid applications.',
  },
  'post-permission': {
    title: 'Permission Granted — Now What?',
    subtitle: 'Design coordination and construction planning — before breaking ground.',
    when: 'You have planning permission. Pre-commencement conditions need discharging.',
    who: 'Self-builders, developers, contractors, project managers.',
    afterNote: 'Just received planning permission? Congratulations. Here\'s what you need before breaking ground.',
  },
  construction: {
    title: 'Building',
    subtitle: 'Structural engineering and party wall services — bespoke to your project.',
    when: 'Construction is about to start or is underway.',
    who: 'Self-builders, developers, contractors.',
    note: 'These are project-dependent services — contact us for a quote. Unlike our standardised reports, these require bespoke engineering work tailored to your specific project.',
  },
};

function formatPrice(price: number) {
  return `£${price.toLocaleString()}`;
}

function PhaseSection({ phaseId, index }: { phaseId: string; index: number }) {
  const phase = phases[index];
  const content = phaseContent[phaseId];
  const reportList = phaseReports[phaseId];
  const bundleSlugs = phaseBundles[phaseId];
  const phaseBundleList = bundleSlugs
    .map(slug => bundles.find(b => b.slug === slug))
    .filter((b): b is ReportBundle => b !== undefined);
  const isConstructionPhase = phaseId === 'construction';
  const isApplicationPhase = phaseId === 'application';

  return (
    <section id={`phase-${phaseId}`} className="scroll-mt-32 mb-32">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.5 }}
      >
        {/* Phase Hero Card */}
        <div className={`rounded-2xl sm:rounded-[2.5rem] overflow-hidden mb-10 relative ${phase.lightBg}`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-[0.07]`} />
          <div className="relative z-10 p-5 sm:p-8 md:p-12">
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg shrink-0`}>
                <phase.icon size={24} className="text-white" />
              </div>
              <div>
                <span className={`text-xs uppercase tracking-widest font-bold ${phase.accentColor} block`}>Phase {index + 1} — RIBA Stage {phase.stage}</span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary">{content.title}</h2>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-brand-primary/60 font-light max-w-2xl mb-6 sm:mb-8">{content.subtitle}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className={`p-5 rounded-2xl bg-white/80 backdrop-blur-sm border ${phase.borderColor}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className={phase.accentColor} />
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-primary/40">When</span>
                </div>
                <p className="text-base text-brand-primary/70">{content.when}</p>
              </div>
              <div className={`p-5 rounded-2xl bg-white/80 backdrop-blur-sm border ${phase.borderColor}`}>
                <div className="flex items-center gap-2 mb-2">
                  <Target size={16} className={phase.accentColor} />
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-primary/40">Who</span>
                </div>
                <p className="text-base text-brand-primary/70">{content.who}</p>
              </div>
            </div>
          </div>
        </div>

        {content.note && (
          <div className={`p-5 rounded-2xl border mb-8 ${phase.lightBg} ${phase.borderColor}`}>
            <div className="flex items-start gap-3">
              <Zap size={18} className={`${phase.accentColor} shrink-0 mt-0.5`} />
              <p className="text-base text-brand-primary/80 font-medium">{content.note}</p>
            </div>
          </div>
        )}

        {/* Report Cards (mobile-friendly card layout instead of table) */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl font-bold text-brand-primary flex items-center gap-2">
              <FileText size={20} className={phase.accentColor} />
              Reports in This Phase
            </h3>
            {!isConstructionPhase && (
              <span className="text-xs text-brand-primary/40 font-medium">Prices shown are Early Access — final checkout price at payment</span>
            )}
          </div>
          <div className="grid gap-4">
            {reportList.map((pr) => {
              const report = getReportBySlug(pr.slug);
              if (!report) return null;
              return (
                <motion.div
                  key={pr.slug}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-brand-primary/5 shadow-sm hover:shadow-md hover:border-brand-accent/30 transition-all group"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-grow">
                      <Link to={report.path} className="font-bold text-brand-primary group-hover:text-brand-accent transition-colors text-lg">
                        {report.name}
                      </Link>
                      <p className="text-base text-brand-primary/50 mt-1 leading-relaxed">{pr.whatItTellsYou}</p>
                      {isApplicationPhase && pr.required && (
                        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold ${
                          pr.required === 'Usually yes' || pr.required === 'Often yes' || pr.required === 'Mandatory (most)'
                            ? `${phase.lightBg} ${phase.accentColor}`
                            : 'bg-brand-primary/5 text-brand-primary/50'
                        }`}>
                          {pr.required}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8 shrink-0">
                      {!isConstructionPhase ? (
                        <>
                          <div className="text-right">
                            <div className="text-xs uppercase tracking-widest text-brand-accent/60 font-bold">Our Price</div>
                            <div className="font-bold text-brand-accent text-xl">{formatPrice(report.stripePrice)}</div>
                          </div>
                          <div className="text-right hidden sm:block">
                            <div className="text-xs uppercase tracking-widest text-brand-primary/20 font-bold">Mid-Market</div>
                            <div className="text-brand-primary/30 text-base line-through">{pr.midMarket}</div>
                          </div>
                        </>
                      ) : (
                        <div className="text-right">
                          <div className="text-xs uppercase tracking-widest text-brand-primary/30 font-bold">Pricing</div>
                          <div className="font-bold text-brand-primary">Project-based</div>
                        </div>
                      )}
                      <Link
                        to={report.path}
                        className="w-10 h-10 rounded-xl bg-brand-surface flex items-center justify-center group-hover:bg-brand-accent/10 transition-colors"
                      >
                        <ChevronRight size={18} className="text-brand-primary/30 group-hover:text-brand-accent transition-colors" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {content.afterNote && (
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 mb-8">
            <div className="flex items-start gap-3">
              <Check size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <p className="text-base text-emerald-800 font-medium">{content.afterNote}</p>
            </div>
          </div>
        )}

        {/* Bundle Callouts */}
        {phaseBundleList.length > 0 && (
          <div>
            <h3 className="text-xl font-bold text-brand-primary flex items-center gap-2 mb-4">
              <Zap size={20} className="text-brand-accent" />
              Save with a Bundle
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {phaseBundleList.map((bundle) => (
                <Link
                  key={bundle.slug}
                  to={`/order-report?report=${bundle.slug}`}
                  className="group relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-brand-primary to-slate-800 text-white hover:scale-[1.02] transition-all shadow-lg overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[60px]" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-widest font-bold text-brand-accent">
                        {bundle.isNew ? 'New Bundle' : bundle.isMostPopular ? 'Most Popular' : 'Bundle'}
                      </span>
                      <ArrowRight size={16} className="text-white/40 group-hover:text-brand-accent transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold mb-1">{bundle.name}</h4>
                    <p className="text-white/50 text-base mb-4">{bundle.tagline}</p>
                    <div className="flex items-end gap-3 mb-3">
                      <span className="text-3xl font-bold">{formatPrice(bundle.earlyAccessPrice)}</span>
                      <span className="text-white/30 line-through text-sm">RRP {formatPrice(bundle.rrp)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-sm font-bold">
                        Save {formatPrice(bundle.savings)} ({bundle.savingsPercent}%)
                      </span>
                      <span className="text-white/30 text-sm">{bundle.includedReports.length} reports</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Visual Connector */}
        {index < phases.length - 1 && (
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 text-brand-primary/20">
              <div className="w-px h-8 bg-brand-primary/10" />
              <ArrowDown size={20} />
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

const HowItWorks = () => {
  const [activePhase, setActivePhase] = useState('assessment');

  useEffect(() => {
    const handleScroll = () => {
      for (const phase of phases) {
        const el = document.getElementById(`phase-${phase.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom > 200) {
            setActivePhase(phase.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPhase = (id: string) => {
    const el = document.getElementById(`phase-${id}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen">
      <PageSEO
        title="Plans & Pricing — Your Project Roadmap | PF & Co Engineering"
        description="From finding a site to breaking ground — your complete project roadmap. See exactly which reports you need at each stage and what they cost."
        path="/how-it-works"
        jsonLd={{
          '@type': 'ItemList',
          name: 'Construction Project Roadmap',
          description: 'Five-phase guide from site assessment to construction completion.',
          numberOfItems: 5,
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Site Assessment', description: 'Constraint screening, ground risk, and viability before you commit.' },
            { '@type': 'ListItem', position: 2, name: 'Strategy', description: 'Pre-application engagement and levy assessment before design fees.' },
            { '@type': 'ListItem', position: 3, name: 'Planning Application', description: 'The technical evidence documents your planning submission needs.' },
            { '@type': 'ListItem', position: 4, name: 'Post-Permission', description: 'Design coordination and construction planning before breaking ground.' },
            { '@type': 'ListItem', position: 5, name: 'Construction', description: 'Structural engineering and party wall services bespoke to your project.' },
          ]
        }}
      />

      {/* Hero — Full Bleed Dark */}
      <section className="relative bg-gradient-to-br from-brand-primary via-brand-primary to-slate-900 text-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 pt-28 sm:pt-40 pb-16 sm:pb-24 max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-6 block">Project Roadmap</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 sm:mb-8 tracking-tight leading-[0.9]">
              Your Project.<br />
              <span className="italic font-accent font-light text-white/50">Our Intelligence.</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/50 leading-relaxed max-w-3xl mx-auto font-light">
              From finding a site to breaking ground — here's exactly where we help, what you need, and what it costs.
            </p>
          </motion.div>

          {/* Phase Journey Visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-2 sm:grid sm:grid-cols-5 sm:gap-4 max-w-4xl mx-auto mb-16 overflow-x-auto pb-2 sm:pb-0 scrollbar-hide"
          >
            {phases.map((phase, i) => (
              <button
                key={phase.id}
                onClick={() => scrollToPhase(phase.id)}
                className="group flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all min-w-[4.5rem] sm:min-w-0"
              >
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                  <phase.icon className="text-white w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
                </div>
                <div className="text-center">
                  <span className="text-xs sm:text-sm font-bold text-white/80 block">{i + 1}</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40 hidden sm:block">{phase.shortLabel}</span>
                </div>
              </button>
            ))}
          </motion.div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {[
              { value: '18', label: 'Reports' },
              { value: '8', label: 'Bundles' },
              { value: '48hr', label: 'Turnaround' },
              { value: '44', label: 'Data Sources' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-brand-accent">{stat.value}</div>
                <div className="text-xs uppercase tracking-widest text-white/30 font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom wave transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 68.7C120 57.3 240 34.7 360 26.7C480 18.7 600 25.3 720 34.7C840 44 960 56 1080 58.7C1200 61.3 1320 54.7 1380 51.3L1440 48V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" className="fill-brand-surface"/>
          </svg>
        </div>
      </section>

      {/* Appeal Readiness Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 -mt-4 mb-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 shadow-lg shadow-amber-100/50"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0">
              <AlertTriangle className="text-amber-600" size={22} />
            </div>
            <div>
              <h3 className="font-bold text-brand-primary mb-2 text-lg">Appeal-Ready from Day One — SI 2026/122</h3>
              <p className="text-base text-brand-primary/70 leading-relaxed">
                {new Date() >= new Date('2026-04-01')
                  ? 'Since 1 April 2026, planning appeals no longer accept new evidence.'
                  : 'From 1 April 2026, planning appeals will no longer accept new evidence.'
                }{' '}The application you submit is the case the Inspector decides.
                Our reports are built to be appeal-ready from day one — every data source cited, every policy referenced, every constraint evidenced.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Sticky Phase Selector */}
      <div className="sticky top-16 z-40 bg-brand-surface/95 backdrop-blur-md border-b border-brand-primary/5 mb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-2 overflow-x-auto py-3 scrollbar-hide">
            {phases.map((phase, i) => {
              const isActive = activePhase === phase.id;
              return (
                <button
                  key={phase.id}
                  onClick={() => scrollToPhase(phase.id)}
                  className={`flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                    isActive
                      ? `bg-gradient-to-r ${phase.color} text-white shadow-md`
                      : 'bg-white text-brand-primary/50 hover:text-brand-primary border border-brand-primary/5'
                  }`}
                >
                  <phase.icon size={14} />
                  <span>{i + 1}.</span>
                  <span className="hidden sm:inline">{phase.label}</span>
                  <span className="sm:hidden">{phase.shortLabel}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phase Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 bg-brand-surface">
        {phases.map((phase, i) => (
          <PhaseSection key={phase.id} phaseId={phase.id} index={i} />
        ))}
      </div>

      {/* Complete Intelligence CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl sm:rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-slate-900 text-white p-6 sm:p-10 md:p-16 relative shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-accent/10 blur-[80px]" />
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/20 flex items-center justify-center mx-auto mb-6">
              <Crown className="text-amber-400" size={32} />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4">The Complete Intelligence</h2>
            <p className="text-white/50 mb-8 max-w-2xl mx-auto text-lg font-light">
              For sites where you can't afford to miss anything. All 16 purchasable reports, every phase covered, one price.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <span className="text-white/30 line-through text-lg">RRP: £15,625</span>
              <span className="text-4xl sm:text-5xl font-bold">£6,995</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-bold">Save 55%</span>
            </div>
            <p className="text-white/30 text-sm mb-8">Mid-market equivalent: £12,550-£35,400</p>
            <Link
              to="/order-report?report=complete-intelligence"
              className="inline-flex items-center gap-2 bg-amber-400 text-brand-primary px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-xl shadow-amber-400/20"
            >
              Order Complete Intelligence <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Who Is This For */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24">
        <div className="text-center mb-8 sm:mb-12">
          <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-2 block">Built For You</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-primary mb-4">Who Is This <span className="italic font-accent font-light text-brand-primary/60">For?</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { who: 'Homeowner', desc: 'Planning an extension or new build?', before: 'Sees 16 reports, doesn\'t know where to start.', after: 'Sees "Start with SFR" and follows 5 clear steps.', icon: MapPin, gradient: 'from-teal-500 to-cyan-600' },
            { who: 'Architect', desc: 'Need evidence documents for a submission?', before: 'Unsure which evidence docs they need for submission.', after: 'Phase 3 shows exactly what supports their drawings.', icon: Ruler, gradient: 'from-violet-500 to-purple-600' },
            { who: 'Developer', desc: 'Evaluating a site for acquisition?', before: 'Has to figure out which bundle fits their stage.', after: 'Phase 1 bundles are clearly labelled "before you buy".', icon: TrendingUp, gradient: 'from-blue-500 to-indigo-600' },
            { who: 'Self-Builder', desc: 'From plot to build — all the reports you need.', before: 'Overwhelmed by options, no clear starting point.', after: 'Self-Build Starter at Phase 1, Construction Readiness at Phase 4 — a clear path.', icon: Hammer, gradient: 'from-amber-500 to-orange-600' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm hover:shadow-lg transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary text-xl">{item.who}</h4>
                  <p className="text-base text-brand-primary/40">{item.desc}</p>
                </div>
              </div>
              <div className="space-y-4 text-base">
                <div className="p-3 rounded-xl bg-red-50/50 border border-red-100">
                  <span className="text-red-400 font-bold text-xs uppercase tracking-widest block mb-1">Without Roadmap</span>
                  <span className="text-brand-primary/60">{item.before}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50/50 border border-emerald-100">
                  <span className="text-emerald-500 font-bold text-xs uppercase tracking-widest block mb-1">With Roadmap</span>
                  <span className="text-brand-primary/80">{item.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center pb-16 sm:pb-24">
        <h2 className="text-2xl sm:text-3xl font-bold text-brand-primary mb-4">Ready to get started?</h2>
        <p className="text-brand-primary/50 mb-8 text-lg">View all our packages or order individual reports.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/report-packages"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
          >
            View Packages <ArrowRight size={18} />
          </Link>
          <Link
            to="/order-report"
            className="inline-flex items-center gap-2 bg-white text-brand-primary px-8 py-4 rounded-full font-bold border-2 border-brand-primary/10 hover:border-brand-accent transition-all"
          >
            Order Individual Reports <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
