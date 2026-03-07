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
import { DocumentMockup } from '../components/DocumentMockup';
import { bundles, reports, getReportBySlug, type ReportBundle } from '../data/reports';

const phases = [
  { id: 'assessment', label: 'Site Assessment', shortLabel: 'Assessment', icon: Search, stage: '0-1', color: 'from-teal-500/80 to-cyan-600/80', lightBg: 'bg-white/70 backdrop-blur-xl', accentColor: 'text-teal-600', borderColor: 'border-teal-500/20' },
  { id: 'strategy', label: 'Strategy', shortLabel: 'Strategy', icon: Compass, stage: '1', color: 'from-violet-500/80 to-purple-600/80', lightBg: 'bg-white/70 backdrop-blur-xl', accentColor: 'text-violet-600', borderColor: 'border-violet-500/20' },
  { id: 'application', label: 'Planning Application', shortLabel: 'Planning', icon: FileText, stage: '2-3', color: 'from-blue-500/80 to-indigo-600/80', lightBg: 'bg-white/70 backdrop-blur-xl', accentColor: 'text-blue-600', borderColor: 'border-blue-500/20' },
  { id: 'post-permission', label: 'Post-Permission', shortLabel: 'Post-Perm', icon: Award, stage: '4', color: 'from-amber-500/80 to-orange-600/80', lightBg: 'bg-white/70 backdrop-blur-xl', accentColor: 'text-amber-600', borderColor: 'border-amber-500/20' },
  { id: 'construction', label: 'Construction', shortLabel: 'Building', icon: Hammer, stage: '5', color: 'from-rose-500/80 to-red-600/80', lightBg: 'bg-white/70 backdrop-blur-xl', accentColor: 'text-rose-600', borderColor: 'border-rose-500/20' },
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
    { slug: 'tree-survey', whatItTellsYou: 'Desktop tree categorisation, RPAs, impact assessment.', midMarket: '£400-£900', required: 'If TPOs/trees' },
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

function PhaseSection({ phaseId, index }: { phaseId: string; index: number; key?: string }) {
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
        <div className={`rounded-2xl sm:rounded-[2.5rem] overflow-hidden mb-10 relative ${phase.lightBg} border border-gray-200 shadow-xl shadow-black/5`}>
          <div className={`absolute inset-0 bg-gradient-to-br ${phase.color} opacity-[0.03]`} />
          <div className="relative z-10 p-5 sm:p-8 md:p-12">
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg shrink-0`}>
                <phase.icon size={24} className="text-white" />
              </div>
              <div>
                <span className={`text-xs uppercase tracking-widest font-bold ${phase.accentColor} block`}>Phase {index + 1} — RIBA Stage {phase.stage}</span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{content.title}</h2>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-brand-secondary font-light max-w-2xl mb-6 sm:mb-8">{content.subtitle}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className={`p-5 rounded-2xl bg-white border ${phase.borderColor} hover:shadow-md transition-shadow`}>
                <div className="flex items-center gap-2 mb-2">
                  <Clock size={16} className={phase.accentColor} />
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-primary/40">When</span>
                </div>
                <p className="text-base text-brand-primary/80">{content.when}</p>
              </div>
              <div className={`p-5 rounded-2xl bg-white border ${phase.borderColor} hover:shadow-md transition-shadow`}>
                <div className="flex items-center gap-2 mb-2">
                  <Target size={16} className={phase.accentColor} />
                  <span className="text-xs uppercase tracking-widest font-bold text-brand-primary/40">Who</span>
                </div>
                <p className="text-base text-brand-primary/80">{content.who}</p>
              </div>
            </div>

            {/* Phase Mockup Decoration (Hidden on small screens) */}
            <div className="hidden lg:flex items-center justify-center shrink-0 w-48 lg:w-64 h-[350px] relative group pointer-events-none">
              {phase.id === 'assessment' && (
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.3] lg:scale-[0.38] group-hover:scale-[0.40] transition-transform duration-500 z-10 w-[600px] pointer-events-auto">
                   <DocumentMockup 
                      title="Market Intelligence Report" 
                      subtitle="Residential Development — Bentley, Hampshire"
                      documentRef="014-BENTLEY26-PFCO-MarketIntelligence-R00"
                      className="rotate-3 shadow-2xl group-hover:rotate-0"
                   />
                 </div>
              )}
              {phase.id === 'strategy' && (
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.3] lg:scale-[0.38] group-hover:scale-[0.40] transition-transform duration-500 z-10 w-[600px] pointer-events-auto">
                   <DocumentMockup 
                      title="Flood Risk Assessment" 
                      subtitle="Tier 1 Desktop Flood Assessment"
                      documentRef="014-BENTLEY26-PFCO-REP-FloodRisk-R00"
                      className="-rotate-2 shadow-2xl group-hover:-rotate-0"
                   />
                 </div>
              )}
              {phase.id === 'application' && (
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.3] lg:scale-[0.38] group-hover:scale-[0.40] transition-transform duration-500 z-10 w-[600px] pointer-events-auto">
                   <DocumentMockup 
                      title="Sustainability and Energy Statement" 
                      subtitle="Desktop Energy Assessment"
                      preparedFor="Jerome Roith"
                      documentRef="014-BENTLEY26-PFCO-REP-SustainabilityEnergy-R00"
                      className="rotate-2 shadow-2xl group-hover:rotate-0"
                   />
                 </div>
              )}
              {phase.id === 'post-permission' && (
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.3] lg:scale-[0.38] group-hover:scale-[0.40] transition-transform duration-500 z-10 w-[600px] pointer-events-auto">
                   <DocumentMockup 
                      title="Geotechnical Desk Study" 
                      subtitle="Desktop Ground Investigation for Foundation Design"
                      preparedFor="Jerome Roith"
                      documentRef="014-BENTLEY26-PFCO-REP-GeotechDeskStudy-R00"
                      className="-rotate-2 shadow-2xl group-hover:rotate-0"
                   />
                 </div>
              )}
              {phase.id === 'construction' && (
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.3] lg:scale-[0.38] group-hover:scale-[0.40] transition-transform duration-500 z-10 w-[600px] pointer-events-auto">
                   <DocumentMockup 
                      title="Structural Design Package" 
                      subtitle="Pre-Construction Engineering Submission"
                      documentRef="014-BENTLEY26-PFCO-REP-StructuralDesign-R00"
                      className="rotate-3 shadow-2xl group-hover:rotate-0"
                   />
                 </div>
              )}
            </div>
          </div>
        </div>

        {content.note && (
          <div className={`p-5 rounded-2xl border mb-8 bg-white ${phase.borderColor}`}>
            <div className="flex items-start gap-3">
              <Zap size={18} className={`${phase.accentColor} shrink-0 mt-0.5`} />
              <p className="text-base text-brand-primary/80 font-medium">{content.note}</p>
            </div>
          </div>
        )}

        {/* Bundle Callouts (Now First) */}
        {phaseBundleList.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-brand-primary flex items-center gap-2 mb-4">
              <Zap size={20} className="text-brand-accent" />
              Save with a Bundle
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {phaseBundleList.map((bundle) => (
                <Link
                  key={bundle.slug}
                  to={`/order-report?report=${bundle.slug}`}
                  className="group relative p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-brand-accent/50 text-brand-primary hover:-translate-y-1 transition-all shadow-md hover:shadow-xl overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 blur-[40px] group-hover:bg-brand-accent/10 transition-colors" />
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs uppercase tracking-widest font-bold text-brand-accent">
                        {bundle.isNew ? 'New Bundle' : bundle.isMostPopular ? 'Most Popular' : 'Bundle'}
                      </span>
                      <ArrowRight size={16} className="text-brand-primary/30 group-hover:text-brand-accent transition-colors" />
                    </div>
                    <h4 className="text-xl font-bold mb-1 group-hover:text-brand-accent transition-colors">{bundle.name}</h4>
                    <p className="text-brand-secondary text-base mb-4">{bundle.tagline}</p>
                    <div className="flex items-end gap-3 mb-3">
                      <span className="text-3xl font-bold">{formatPrice(bundle.earlyAccessPrice)}</span>
                      <span className="text-brand-primary/40 line-through text-sm">RRP {formatPrice(bundle.rrp)}</span>
                    </div>
                    <div className="flex items-center gap-2">
                       <span className="bg-brand-accent/10 border border-brand-accent/20 text-brand-accent px-3 py-1 rounded-full text-sm font-bold">
                        Save {formatPrice(bundle.savings)} ({bundle.savingsPercent}%)
                      </span>
                      <span className="text-brand-primary/40 text-sm">{bundle.includedReports.length} reports</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Report Cards (Now Second) */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-xl font-bold text-brand-primary/80 flex items-center gap-2">
              <FileText size={20} className={phase.accentColor} />
              Build Your Own (Individual Reports)
            </h3>
            {!isConstructionPhase && (
              <span className="text-xs text-brand-accent/80 font-bold">Prices shown are Early Access</span>
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
                  className="p-4 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-brand-accent/30 hover:-translate-y-0.5 transition-all group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-primary/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 relative z-10">
                    <div className="flex-grow">
                      <Link to={report.path} className="font-bold text-brand-primary group-hover:text-brand-accent transition-colors text-lg">
                        {report.name}
                      </Link>
                      <p className="text-base text-brand-secondary mt-1 leading-relaxed">{pr.whatItTellsYou}</p>
                      {isApplicationPhase && pr.required && (
                        <span className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-bold border ${
                          pr.required === 'Usually yes' || pr.required === 'Often yes' || pr.required === 'Mandatory (most)'
                            ? `bg-${phase.color.split('-')[1]}-50 text-${phase.accentColor.split('-')[1]}-600 border-${phase.accentColor.split('-')[1]}-500/30`
                            : 'bg-gray-50 text-brand-primary/50 border-gray-200'
                        }`}>
                          {pr.required}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 sm:gap-6 md:gap-8 shrink-0">
                      {!isConstructionPhase ? (
                        <>
                          <div className="text-right">
                            <div className="text-xs uppercase tracking-widest text-brand-accent font-bold">Our Price</div>
                            <div className="font-bold text-brand-accent text-xl">{formatPrice(report.stripePrice)}</div>
                          </div>
                          <div className="text-right hidden sm:block">
                            <div className="text-xs uppercase tracking-widest text-brand-primary/30 font-bold">Mid-Market</div>
                            <div className="text-brand-primary/40 text-base line-through">{pr.midMarket}</div>
                          </div>
                        </>
                      ) : (
                        <div className="text-right">
                          <div className="text-xs uppercase tracking-widest text-brand-primary/40 font-bold">Pricing</div>
                          <div className="font-bold text-brand-primary/90">Project-based</div>
                        </div>
                      )}
                      <Link
                        to={report.path}
                        className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center group-hover:bg-brand-accent/10 group-hover:border-brand-accent/30 transition-colors"
                      >
                        <ChevronRight size={18} className="text-brand-primary/40 group-hover:text-brand-accent transition-colors" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {content.afterNote && (
          <div className="p-5 rounded-2xl bg-brand-accent/5 border border-brand-accent/20 mb-8">
            <div className="flex items-start gap-3">
              <Check size={18} className="text-brand-accent shrink-0 mt-0.5" />
              <p className="text-base text-brand-primary/90 font-medium">{content.afterNote}</p>
            </div>
          </div>
        )}

        {/* Visual Connector - Crisp light UI line */}
        {index < phases.length - 1 && (
          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center gap-2 relative">
              <motion.div 
                className="w-px h-16 bg-gradient-to-b from-brand-accent to-transparent absolute top-0"
                animate={{ opacity: [0.5, 1, 0.5], height: ["0%", "100%", "0%"] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              />
              <div className="w-px h-16 bg-brand-primary/10" />
              <ArrowDown size={20} className="mt-2 text-brand-primary/20" />
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
    <div className="min-h-screen bg-brand-surface text-brand-primary selection:bg-brand-accent/30 selection:text-brand-primary">
      <PageSEO
        title="Plans & Pricing — Your Project Roadmap | PF & Co Engineering"
        description="From finding a site to breaking ground — your complete project roadmap. See exactly which reports you need at each stage and what they cost."
        path="/plans-and-pricing"
        jsonLd={[
          {
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
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What reports do I need for planning permission in the UK?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'This depends heavily on your site. Our recommendation is always to start with the Site Feasibility Report (SFR) in Phase 1. It screens your site against 22+ constraints and explicitly tells you which Phase 3 application reports are required for your local planning authority.'
                }
              },
              {
                '@type': 'Question',
                name: 'How much does a site feasibility report cost?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'The mid-market cost for an equivalent report is between £1,000 to £4,000. Our Early Access price is £500. This provides you with 22+ environmental and planning constraints, a Planning Friction Score, and a Buildability Rating.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can I submit evidence after a planning appeal?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Following SI 2026/122, planning appeals will no longer accept new evidence. The application you submit is the case the Inspector decides. Our technical evidence documents are built from day one to be appeal-ready.'
                }
              }
            ]
          }
        ]}
      />

      {/* Hero — Full Bleed Light */}
      <section className="relative bg-gradient-to-br from-brand-surface via-white to-gray-50 text-brand-primary overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-brand-accent/5 rounded-full blur-[100px]" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
          {/* Grid Pattern */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(15,23,42,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.1) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }} />
        </div>

        <div className="relative z-10 pt-28 sm:pt-40 pb-16 sm:pb-24 max-w-6xl mx-auto px-4 sm:px-6">
          <div className="lg:flex lg:items-center lg:justify-between lg:gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left lg:max-w-3xl"
            >
              <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-6 block">Project Roadmap</span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 sm:mb-8 tracking-tight leading-[0.9]">
                Your Project.<br />
                <span className="italic font-accent font-light text-brand-secondary">Our Intelligence.</span>
              </h1>
              <p className="text-xl md:text-2xl text-brand-secondary leading-relaxed mx-auto lg:mx-0 font-light">
                From finding a site to breaking ground — here's exactly where we help, what you need, and what it costs.
              </p>
            </motion.div>
          </div>

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
                className="group flex flex-col items-center gap-2 sm:gap-3 p-3 sm:p-6 rounded-2xl bg-white border border-gray-200 hover:border-brand-accent/50 hover:shadow-lg transition-all min-w-[4.5rem] sm:min-w-0"
              >
                <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-110 transition-transform`}>
                  <phase.icon className="text-white w-[18px] h-[18px] sm:w-[22px] sm:h-[22px]" />
                </div>
                <div className="text-center">
                  <span className="text-xs sm:text-sm font-bold text-brand-primary block">{i + 1}</span>
                  <span className="text-[10px] sm:text-xs uppercase tracking-widest text-brand-primary/40 hidden sm:block">{phase.shortLabel}</span>
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
                <div className="text-xs uppercase tracking-widest text-brand-primary/40 font-bold">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom wave transition - adjusted for light mode */}
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
          className="p-6 md:p-8 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/50 border border-amber-200 shadow-md backdrop-blur-xl"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center shrink-0 border border-amber-200">
              <AlertTriangle className="text-amber-600" size={22} />
            </div>
            <div>
              <h3 className="font-bold text-brand-primary mb-2 text-lg">Appeal-Ready from Day One — SI 2026/122</h3>
              <p className="text-base text-brand-secondary leading-relaxed">
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

      {/* Sticky Phase Selector (Light Mode) */}
      <div className="sticky top-16 z-40 bg-brand-surface/90 backdrop-blur-xl border-b border-gray-200 mb-16 shadow-[0_4px_20px_rgba(0,0,0,0.02)]">
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
                      ? `bg-brand-primary text-white shadow-md`
                      : 'bg-transparent text-brand-primary/60 hover:text-brand-primary border border-transparent hover:bg-black/5'
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6 relative">
        {/* The continuous digital thread line in the background */}
        <div className="absolute top-0 bottom-0 left-8 md:left-[51px] w-0.5 bg-gradient-to-b from-transparent via-brand-primary/10 to-transparent hidden md:block" />
        
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
          
          {/* Mockup Stack Decoration */}
          <div className="hidden md:block absolute -right-40 lg:-right-10 top-1/2 -translate-y-1/2 w-[400px] lg:w-[500px] h-[500px] pointer-events-none opacity-50 lg:opacity-80 z-0">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.25] lg:scale-[0.35] rotate-12 drop-shadow-2xl">
               <DocumentMockup 
                  title="Site Feasibility Report" 
                  subtitle="Desktop Feasibility Study"
                  documentRef="014-PFCO-REP-Feasibility-R00"
                  className=""
               />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.25] lg:scale-[0.35] -rotate-6 drop-shadow-2xl -ml-8 lg:-ml-16 mt-4 lg:mt-8">
               <DocumentMockup 
                  title="Planning Statement" 
                  subtitle="Desktop Planning Assessment"
                  documentRef="014-PFCO-REP-Planning-R00"
                  className=""
               />
             </div>
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.25] lg:scale-[0.35] rotate-2 drop-shadow-2xl -ml-16 lg:-ml-32 mt-8 lg:mt-16">
               <DocumentMockup 
                  title="Sustainability and Energy" 
                  subtitle="Desktop Energy Assessment"
                  documentRef="014-PFCO-REP-Energy-R00"
                  className=""
               />
             </div>
          </div>

          {/* Contrast Gradient to protect text from mockups */}
          <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-brand-primary via-brand-primary/90 to-transparent z-[5] w-[75%] pointer-events-none" />

          <div className="relative z-10 text-center lg:text-left md:max-w-lg lg:max-w-2xl mx-auto lg:mx-0">
            <div className="w-16 h-16 rounded-2xl bg-amber-400/20 flex items-center justify-center mx-auto lg:mx-0 mb-6">
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
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link
                to="/order-report?report=complete-intelligence"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-400 text-brand-primary px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform shadow-[0_0_30px_-5px_rgba(251,191,36,0.4)]"
              >
                Order Complete Intelligence <ArrowRight size={20} />
              </Link>
              <a
                href="mailto:contact@pfcoconstruction.co.uk?subject=Complete Intelligence Package Strategy Call"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 text-white border border-white/20 px-8 py-4 rounded-full font-bold text-base sm:text-lg hover:bg-white/20 transition-all hover:border-white/40"
              >
                Book a Strategy Call
              </a>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Who Is This For */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16 sm:mb-24 relative overflow-hidden pb-10">
        <div className="hidden md:flex absolute top-0 right-0 w-full h-full pointer-events-none opacity-40 z-0 justify-end">
           <div className="scale-[0.25] lg:scale-[0.3] rotate-[15deg] drop-shadow-xl translate-x-12 lg:translate-x-24 -translate-y-16">
             <DocumentMockup 
                title="Project Scoping" 
                subtitle="Client Requirements & Briefing"
                documentRef="014-PFCO-BRIEF-R00"
                className=""
             />
           </div>
        </div>
        <div className="relative z-10">
          <div className="text-center mb-8 sm:mb-12">
            <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-2 block">Built For You</span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-primary mb-4">Who Is This <span className="italic font-accent font-light text-brand-accent text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-emerald-500">For?</span></h2>
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
              className="p-5 sm:p-8 rounded-2xl sm:rounded-[2rem] bg-white border border-gray-100 shadow-xl hover:shadow-2xl hover:border-brand-accent/30 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg`}>
                  <item.icon size={24} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-primary text-xl">{item.who}</h4>
                  <p className="text-base text-brand-secondary">{item.desc}</p>
                </div>
              </div>
              <div className="space-y-4 text-base">
                <div className="p-3 rounded-xl bg-red-50 border border-red-100">
                  <span className="text-red-500 font-bold text-xs uppercase tracking-widest block mb-1">Without Roadmap</span>
                  <span className="text-brand-secondary">{item.before}</span>
                </div>
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100">
                  <span className="text-emerald-600 font-bold text-xs uppercase tracking-widest block mb-1">With Roadmap</span>
                  <span className="text-brand-primary/90">{item.after}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </section>

      {/* AI / SEO FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-24 relative z-10">
        <div className="text-center mb-12">
          <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-brand-accent mb-2 block">Common Questions</span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-brand-primary mb-4">You Asked. <span className="italic font-accent font-light text-brand-accent">We Answered.</span></h2>
        </div>
        <div className="space-y-4">
          {[
            { q: "What reports do I need for planning permission in the UK?", a: "This depends heavily on your site. Our recommendation is always to start with the Site Feasibility Report (SFR) in Phase 1. It screens your site against 22+ constraints and explicitly tells you which Phase 3 application reports are required for your local planning authority." },
            { q: "How much does a site feasibility report cost?", a: "The mid-market cost for an equivalent report is between £1,000 to £4,000. Our Early Access price is £500. This provides you with 22+ environmental and planning constraints, a Planning Friction Score, and a Buildability Rating." },
            { q: "Can I submit evidence after a planning appeal?", a: "Following SI 2026/122, planning appeals will no longer accept new evidence. The application you submit is the case the Inspector decides. Our technical evidence documents are built from day one to be appeal-ready." },
          ].map((faq, i) => (
             <div key={i} className="p-6 rounded-2xl bg-white shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-brand-primary mb-2">{faq.q}</h3>
              <p className="text-brand-secondary leading-relaxed font-light">{faq.a}</p>
             </div>
          ))}
        </div>
      </section>

      {/* Bottom CTAs */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 text-center pb-24 relative z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] -z-10" />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-primary mb-4">Ready to get started?</h2>
        <p className="text-brand-secondary mb-8 text-lg font-light">View all our packages or order individual reports.</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/report-packages"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-brand-accent text-slate-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(20,184,166,0.2)]"
          >
            View Packages <ArrowRight size={18} />
          </Link>
          <Link
            to="/order-report"
            className="w-full sm:w-auto inline-flex justify-center items-center gap-2 bg-white text-brand-primary border border-gray-200 shadow-sm px-8 py-4 rounded-full font-bold hover:bg-gray-50 hover:border-gray-300 transition-all"
          >
            Order Individual Reports <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HowItWorks;
