import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight, Check, Search, Layers, FileText, Award, HardHat,
  ChevronRight, Crown, AlertTriangle, MapPin, Shield, Clock,
  Landmark, Droplets, TreePine, Zap, Scale
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { bundles, reports, getReportBySlug, type ReportBundle } from '../data/reports';

const phases = [
  { id: 'assessment', label: 'Site Assessment', shortLabel: 'Assessment', icon: Search, stage: '0-1' },
  { id: 'strategy', label: 'Strategy', shortLabel: 'Strategy', icon: Layers, stage: '1' },
  { id: 'application', label: 'Planning Application', shortLabel: 'Planning', icon: FileText, stage: '2-3' },
  { id: 'post-permission', label: 'Post-Permission', shortLabel: 'Post-Perm', icon: Award, stage: '4' },
  { id: 'construction', label: 'Construction', shortLabel: 'Building', icon: HardHat, stage: '5' },
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
  assessment: ['developer-due-diligence', 'triple-threat'],
  strategy: [],
  application: ['full-planning-suite', 'appeal-ready-pack'],
  'post-permission': ['construction-readiness'],
  construction: [],
};

const phaseContent: Record<string, { title: string; when: string; who: string; note?: string; afterNote?: string }> = {
  assessment: {
    title: 'SHOULD I BUY THIS SITE?',
    when: 'Before you commit to a site, before you exchange, before you tie up capital.',
    who: 'Developers, land buyers, investors, self-builders, homeowners considering a plot.',
    afterNote: 'Start here: The SFR is the entry point for every project. It screens your site against 22+ constraint categories and tells you what other reports you need.',
  },
  strategy: {
    title: 'WHAT CAN I BUILD?',
    when: 'Before your architect starts drawing, before you invest in design fees.',
    who: 'Anyone with a site who wants to understand what\'s achievable before committing to design.',
    note: 'Pre-application engagement with the council is the single most effective way to avoid refusal. Know your CIL liability before you design — it affects viability.',
  },
  application: {
    title: 'PREPARING THE PLANNING APPLICATION',
    when: 'Your architect is designing the scheme. You need the supporting evidence documents.',
    who: 'Architects, planning consultants, homeowners, developers preparing to submit.',
    note: 'We produce the technical evidence documents. Your architect produces the drawings.',
    afterNote: 'Not sure which you need? Your SFR from Phase 1 tells you exactly which reports are required for your site. No guesswork, no missing documents, no invalid applications.',
  },
  'post-permission': {
    title: 'PERMISSION GRANTED — NOW WHAT?',
    when: 'You have planning permission. Pre-commencement conditions need discharging.',
    who: 'Self-builders, developers, contractors, project managers.',
    afterNote: 'Just received planning permission? Congratulations. Here\'s what you need before breaking ground.',
  },
  construction: {
    title: 'BUILDING',
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
    <section id={`phase-${phaseId}`} className="scroll-mt-32 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Phase Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-2xl bg-brand-accent/10 flex items-center justify-center">
            <span className="text-brand-accent font-bold text-lg">{index + 1}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent block">Phase {index + 1}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-brand-primary">{content.title}</h2>
          </div>
        </div>

        {/* When / Who */}
        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-white border border-brand-primary/5">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 block mb-1">When</span>
            <p className="text-sm text-brand-primary/70">{content.when}</p>
          </div>
          <div className="p-4 rounded-2xl bg-white border border-brand-primary/5">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-primary/40 block mb-1">Who</span>
            <p className="text-sm text-brand-primary/70">{content.who}</p>
          </div>
        </div>

        {content.note && (
          <div className="p-4 rounded-2xl bg-brand-accent/5 border border-brand-accent/20 mb-8">
            <p className="text-sm text-brand-primary/80 font-medium">{content.note}</p>
          </div>
        )}

        {/* Report Table */}
        <div className="overflow-x-auto mb-8">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-brand-primary/10">
                <th className="text-left py-3 pr-4 font-bold text-brand-primary">Report</th>
                <th className="text-left py-3 px-4 font-bold text-brand-primary hidden md:table-cell">What It Tells You</th>
                <th className="text-right py-3 px-4 font-bold text-brand-primary">EA Price</th>
                <th className="text-right py-3 px-4 font-bold text-brand-primary hidden sm:table-cell">Stripe</th>
                <th className="text-right py-3 px-4 font-bold text-brand-primary hidden lg:table-cell">Mid-Market</th>
                {isApplicationPhase && (
                  <th className="text-center py-3 pl-4 font-bold text-brand-primary hidden lg:table-cell">Required?</th>
                )}
              </tr>
            </thead>
            <tbody>
              {reportList.map((pr) => {
                const report = getReportBySlug(pr.slug);
                if (!report) return null;
                return (
                  <tr key={pr.slug} className="border-b border-brand-primary/5 hover:bg-brand-accent/5 transition-colors">
                    <td className="py-4 pr-4">
                      <Link to={report.path} className="font-bold text-brand-primary hover:text-brand-accent transition-colors">
                        {report.name}
                      </Link>
                      <p className="text-xs text-brand-primary/40 mt-1 md:hidden">{pr.whatItTellsYou}</p>
                    </td>
                    <td className="py-4 px-4 text-brand-primary/60 hidden md:table-cell">{pr.whatItTellsYou}</td>
                    <td className="text-right py-4 px-4 font-bold text-brand-primary whitespace-nowrap">
                      {isConstructionPhase ? 'Project' : formatPrice(report.earlyAccessPrice)}
                    </td>
                    <td className="text-right py-4 px-4 font-bold text-brand-accent whitespace-nowrap hidden sm:table-cell">
                      {isConstructionPhase ? '—' : formatPrice(report.stripePrice)}
                    </td>
                    <td className="text-right py-4 px-4 text-brand-primary/40 whitespace-nowrap hidden lg:table-cell">
                      {pr.midMarket}
                    </td>
                    {isApplicationPhase && (
                      <td className="text-center py-4 pl-4 hidden lg:table-cell">
                        {pr.required && (
                          <span className={`inline-block px-2 py-1 rounded-full text-[10px] font-bold ${
                            pr.required === 'Usually yes' || pr.required === 'Often yes' || pr.required === 'Mandatory (most)'
                              ? 'bg-brand-accent/10 text-brand-accent'
                              : 'bg-brand-primary/5 text-brand-primary/50'
                          }`}>
                            {pr.required}
                          </span>
                        )}
                      </td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        {content.afterNote && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 mb-8">
            <p className="text-sm text-emerald-800 font-medium">{content.afterNote}</p>
          </div>
        )}

        {/* Bundle Callouts */}
        {phaseBundleList.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {phaseBundleList.map((bundle) => (
              <Link
                key={bundle.slug}
                to={`/order-report?report=${bundle.slug}`}
                className="group p-6 rounded-2xl bg-brand-primary text-white hover:scale-[1.02] transition-all shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-brand-accent">
                    {bundle.isNew ? 'New Bundle' : bundle.isMostPopular ? 'Most Popular' : 'Bundle'}
                  </span>
                  <ArrowRight size={16} className="text-white/40 group-hover:text-brand-accent transition-colors" />
                </div>
                <h4 className="text-lg font-bold mb-1">{bundle.name}</h4>
                <p className="text-white/50 text-sm mb-4">{bundle.tagline}</p>
                <div className="flex items-end gap-3">
                  <span className="text-2xl font-bold">{formatPrice(bundle.earlyAccessPrice)}</span>
                  <span className="text-emerald-400 text-xs font-bold">saves {formatPrice(bundle.savings)} vs RRP</span>
                </div>
              </Link>
            ))}
          </div>
        )}
      </motion.div>
    </section>
  );
}

const HowItWorks = () => {
  const [activePhase, setActivePhase] = useState('assessment');
  const stickyRef = useRef<HTMLDivElement>(null);

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
    <div className="pt-32 pb-24 bg-brand-surface min-h-screen">
      <PageSEO
        title="How It Works — Your Project Roadmap | PF & Co Engineering"
        description="From finding a site to breaking ground — your complete project roadmap. See exactly which reports you need at each stage and what they cost."
        path="/how-it-works"
      />

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 mb-16 text-center">
        <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-brand-accent mb-4 block">Project Roadmap</span>
        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-brand-primary tracking-tight">
          Your Project. <span className="italic font-accent font-light text-brand-primary/60">Our Intelligence.</span>
        </h1>
        <p className="text-xl text-brand-primary/70 leading-relaxed max-w-3xl mx-auto mb-12">
          From finding a site to breaking ground — here's exactly where we help, what you need, and what it costs.
        </p>

        {/* Phase Buttons */}
        <div className="flex flex-wrap justify-center gap-3">
          {phases.map((phase, i) => (
            <button
              key={phase.id}
              onClick={() => scrollToPhase(phase.id)}
              className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-brand-primary/10 text-sm font-bold text-brand-primary hover:border-brand-accent hover:text-brand-accent transition-all shadow-sm"
            >
              <phase.icon size={16} />
              <span className="hidden sm:inline">{phase.label}</span>
              <span className="sm:hidden">{phase.shortLabel}</span>
            </button>
          ))}
        </div>
      </section>

      {/* Appeal Readiness Banner */}
      <section className="max-w-5xl mx-auto px-6 mb-16">
        <div className="p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-amber-500 shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-brand-primary mb-2">Appeal-Ready from Day One — SI 2026/122</h3>
              <p className="text-sm text-brand-primary/70 leading-relaxed">
                From 1 April 2026, planning appeals no longer accept new evidence. The application you submit is the case the Inspector decides.
                Our reports are built to be appeal-ready from day one — every data source cited, every policy referenced, every constraint evidenced.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Phase Selector */}
      <div ref={stickyRef} className="sticky top-16 z-40 bg-brand-surface/95 backdrop-blur-md border-b border-brand-primary/5 mb-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {phases.map((phase, i) => (
              <button
                key={phase.id}
                onClick={() => scrollToPhase(phase.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  activePhase === phase.id
                    ? 'bg-brand-primary text-white shadow-md'
                    : 'bg-white text-brand-primary/50 hover:text-brand-primary border border-brand-primary/5'
                }`}
              >
                <span>{i + 1}.</span>
                <span className="hidden sm:inline">{phase.label}</span>
                <span className="sm:hidden">{phase.shortLabel}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Phase Sections */}
      <div className="max-w-5xl mx-auto px-6">
        {phases.map((phase, i) => (
          <PhaseSection key={phase.id} phaseId={phase.id} index={i} />
        ))}
      </div>

      {/* Complete Intelligence CTA */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="rounded-[3rem] overflow-hidden bg-gradient-to-br from-brand-primary via-brand-primary to-slate-900 text-white p-10 md:p-16 relative shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 blur-[120px]" />
          <div className="relative z-10 text-center">
            <Crown className="text-amber-400 mx-auto mb-4" size={32} />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Complete Intelligence</h2>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              For sites where you can't afford to miss anything. All 16 purchasable reports, every phase covered, one price.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              <span className="text-white/40 line-through text-lg">RRP: £15,625</span>
              <span className="text-4xl font-bold">£6,995</span>
              <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold">Save 55%</span>
            </div>
            <Link
              to="/order-report?report=complete-intelligence"
              className="inline-flex items-center gap-2 bg-amber-400 text-brand-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-xl"
            >
              Order Complete Intelligence <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* How We Help Grid */}
      <section className="max-w-5xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-4">Who Is This <span className="italic font-accent font-light text-brand-primary/60">For?</span></h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { who: 'Homeowner', before: 'Sees 16 reports, doesn\'t know where to start.', after: 'Sees "Start with SFR" and follows 5 clear steps.', icon: MapPin },
            { who: 'Architect', before: 'Unsure which evidence docs they need for submission.', after: 'Phase 3 shows exactly what supports their drawings.', icon: Layers },
            { who: 'Developer', before: 'Has to figure out which bundle fits their stage.', after: 'Phase 1 bundles are clearly labelled "before you buy".', icon: Landmark },
            { who: 'Self-Builder', before: 'Overwhelmed by options.', after: 'Self-Build Starter highlighted at Phase 1, Construction Readiness at Phase 4.', icon: HardHat },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl bg-white border border-brand-primary/5 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center">
                  <item.icon size={18} className="text-brand-accent" />
                </div>
                <h4 className="font-bold text-brand-primary">{item.who}</h4>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-red-400 font-bold text-xs mt-0.5 shrink-0">Before:</span>
                  <span className="text-brand-primary/60">{item.before}</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold text-xs mt-0.5 shrink-0">After:</span>
                  <span className="text-brand-primary/80">{item.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* View Packages CTA */}
      <section className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold text-brand-primary mb-4">Ready to get started?</h2>
        <p className="text-brand-primary/50 mb-8">View all our packages or order individual reports.</p>
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
