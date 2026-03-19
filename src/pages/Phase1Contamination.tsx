import PackageCrossSellBanner from '../components/PackageCrossSellBanner';
import { motion } from 'motion/react';
import { FlaskConical, Check, ArrowRight, Info, HelpCircle, Clock, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import { getReportBySlug } from '../data/reports';
import ReportMethodology from '../components/ReportMethodology';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const Phase1Contamination = () => {
  const report = getReportBySlug('phase-1-contamination')!;
  const features = [
    { title: "LCRM 2020 Framework", desc: "Assessment following the Land Contamination Risk Management framework (formerly CLR11)." },
    { title: "Historical Land Use Review", desc: "Ordnance Survey historical mapping analysis from 1840s to present day." },
    { title: "Conceptual Site Model", desc: "Source-pathway-receptor linkage analysis with risk classification matrix." },
    { title: "Environmental Database Search", desc: "Comprehensive search of EA pollution incidents, landfill records, and waste sites." },
    { title: "Regulatory Consultation Summary", desc: "Desktop review of environmental permits, Part 2A determinations, and remediation notices." },
    { title: "Preliminary Risk Assessment", desc: "CIRIA C552 risk classification with qualitative risk matrix." },
    { title: "Remediation Cost Screening", desc: "Order-of-magnitude cost estimates for identified contamination risks." },
    { title: "Ground Investigation Recommendations", desc: "Specification for Phase 2 intrusive investigation where required." }
  ];

  const comparisonCategories = [
    {
      title: "Technical Analysis",
      rows: [
        { feature: "LCRM 2020 framework assessment", pfco: true, competitor1: "Often outdated CLR11", competitor2: false },
        { feature: "Conceptual Site Model", pfco: true, competitor1: "Sometimes omitted", competitor2: false },
        { feature: "Historical OS mapping review", pfco: true, competitor1: "Limited epochs", competitor2: false },
      ]
    },
    {
      title: "Regulatory Compliance",
      rows: [
        { feature: "Environmental database search", pfco: true, competitor1: "Basic search only", competitor2: false },
        { feature: "Regulatory consultation summary", pfco: true, competitor1: "Often deferred", competitor2: false },
        { feature: "BS 10175 compliance", pfco: true, competitor1: "Not always referenced", competitor2: false },
      ]
    },
    {
      title: "Value & Format",
      rows: [
        { feature: "Remediation cost screening", pfco: true, competitor1: "Not provided", competitor2: false },
        { feature: "Proportional to contamination risk (5-30 pages)", pfco: true, competitor1: "One-size-fits-all", competitor2: "Variable" },
        { feature: "Branded submission-ready Word document", pfco: true, competitor1: "Email summary", competitor2: "Generic template" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Phase 1 Desk Study | Preliminary Risk Assessment | PF & Co"
        description="LCRM 2020 / BS 10175 Preliminary Risk Assessment with Conceptual Site Model and remediation screening."
        path="/site-intelligence/phase-1-contamination"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Phase 1 Desk Study',
            description: 'LCRM 2020 / BS 10175 Preliminary Risk Assessment with Conceptual Site Model and remediation screening.',
            brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
          },
          {
            '@type': 'VideoObject',
            name: 'Phase 1 Desk Study — What\'s Inside Your Report',
            description: 'A walkthrough of the PF & Co Phase 1 Desk Study, showing how we apply the LCRM 2020 framework and build a Conceptual Site Model to assess contamination risk for your site.',
            thumbnailUrl: 'https://www.pfandco.co.uk/videos/contamination-demo-thumb.jpg',
            contentUrl: 'https://www.pfandco.co.uk/videos/contamination-demo.mp4',
            uploadDate: '2026-03-07',
            duration: 'PT1M45S',
            publisher: { '@type': 'Organization', name: 'PF & Co Site Intelligence', url: 'https://www.pfandco.co.uk' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Is this a Phase 2 ground investigation?', acceptedAnswer: { '@type': 'Answer', text: 'No — this is a Phase 1 desktop assessment. It reviews historical mapping, environmental databases, and regulatory records to assess contamination risk without any physical site work. If we identify potential contamination, we will recommend a Phase 2 intrusive investigation as a next step.' } },
              { '@type': 'Question', name: 'When does my council require a contamination assessment?', acceptedAnswer: { '@type': 'Answer', text: 'Building Control will require one for any new dwelling on previously developed land. Planning officers may also condition a contamination assessment where historical land use suggests potential risk — former industrial sites, petrol stations, agricultural land, or sites near landfills.' } },
              { '@type': 'Question', name: 'What is a Conceptual Site Model?', acceptedAnswer: { '@type': 'Answer', text: 'A CSM identifies potential contamination sources (e.g. former fuel tank), pathways (e.g. permeable soil), and receptors (e.g. future residents). If a plausible source-pathway-receptor linkage exists, further investigation is recommended. If not, the risk is classified as low and no further action is typically required.' } },
            ]
          }
        ]}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            PHASE 1
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-orange-400 font-bold mb-6 block">Site Intelligence / Product 20</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Phase 1 <br />
              <span className="text-orange-400 italic font-accent font-light">Contamination</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              LCRM 2020 / BS 10175 Preliminary Risk Assessment with Conceptual Site Model and remediation screening.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=phase-1-contamination" className="px-10 py-5 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-xl shadow-orange-500/20 flex items-center gap-2">
                Buy Now <FlaskConical size={20} className="text-orange-200" />
              </Link>
              <div className="flex flex-col">
                <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent text-[10px] uppercase tracking-widest font-bold mb-3 self-start">
                  Early Access Pricing - Up to 40% off.
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-mono font-bold text-white">Early Access: £{formatPrice(report.earlyAccessPrice)}</span>
                  <span className="text-base text-white/50 line-through font-medium">Was £{formatPrice(report.rrp)}</span>
                </div>
                <span className="text-xs text-white/70 italic">First 50 reports at early access pricing</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-white/5 backdrop-blur-xl rounded-[4rem] border border-white/10 p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/40">
                    <FlaskConical size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Risk Status</div>
                    <div className="text-sm font-bold text-orange-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> LCRM 2020 Assessed
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Contamination Risk</h3>

                <div className="space-y-6">
                  {[
                    { label: "Historical Land Use", score: 7, color: "bg-orange-400" },
                    { label: "Environmental Data", score: 8, color: "bg-blue-400" },
                    { label: "Source-Pathway-Receptor", score: 6, color: "bg-emerald-400" },
                    { label: "Remediation Screening", score: 9, color: "bg-orange-400" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-[10px] uppercase tracking-widest mb-2 font-bold text-white/60">
                        <span>{item.label}</span>
                        <span>{item.score}/10</span>
                      </div>
                      <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score * 10}%` }}
                          transition={{ delay: 0.8 + (i * 0.1), duration: 1.5, ease: "easeOut" }}
                          className={`h-full ${item.color} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative z-10 pt-8 border-t border-white/10 flex justify-between items-end">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Assessment Framework</div>
                  <div className="text-lg font-bold">LCRM 2020 <span className="text-xs font-normal opacity-60">(BS 10175)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Info size={20} className="text-orange-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-orange-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why Contamination Risk is a <br /><span className="font-accent italic font-light text-orange-600">Gateway Condition.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Any site with previous industrial, commercial, or agricultural use may carry contamination risk. Councils routinely condition a Phase 1 assessment before granting approval for sensitive end uses such as residential development.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-orange-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
                    <div>
                      <h4 className="font-bold mb-1 text-brand-primary">{f.title}</h4>
                      <p className="text-sm text-brand-primary/60 font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-8">
                {features.slice(4).map((f, i) => (
                  <div key={i} className="group">
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-orange-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48-72hr Turnaround <br /><span className="text-orange-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Phase 1 assessments within 48-72 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-orange-400 hover:gap-4 transition-all relative z-10">
                  Instruct a Report <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <ComparisonTable
            title="Phase 1 Desk Study"
            subtitle="What you get vs a typical consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Mention"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK geoenvironmental consultancy practices. PF&Co Phase 1 Assessment follows LCRM 2020 and references EA, BGS, and local authority environmental data."
            accentColor="text-orange-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-orange-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Phase 1 Desk Study is essential.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Former Industrial", r: "Previous factory or works", c: "Full PRA with remediation screening" },
              { s: "Filled Ground", r: "Made ground suspected", c: "Gas risk + leachate assessment" },
              { s: "Near Landfill", r: "Historic landfill within 250m", c: "Gas and contamination pathways" },
              { s: "Residential", r: "Sensitive end use", c: "GAC screening + garden assessment" },
              { s: "Agricultural", r: "Farm or nursery land", c: "Pesticide/herbicide + tank storage" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-orange-500 font-bold mb-4">Scenario 0{i+1}</div>
                  <h4 className="text-xl font-bold mb-2 text-brand-primary">{row.s}</h4>
                  <p className="text-xs text-brand-primary/60 uppercase tracking-wider font-bold mb-6">{row.r}</p>
                </div>
                <p className="text-sm text-brand-primary/60 italic font-accent font-light">{row.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Methodology */}
      {(() => {
        const report = getReportBySlug('phase-1-contamination');
        return report?.methodologySummary ? (
          <ReportMethodology methodologySummary={report.methodologySummary} dataCategories={report.dataCategories || []} />
        ) : null;
      })()}

      {/* FAQ - Minimal Editorial */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-orange-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "Is this a Phase 2 ground investigation?", a: "No — this is a Phase 1 desktop assessment. It reviews historical mapping, environmental databases, and regulatory records to assess contamination risk without any physical site work. If we identify potential contamination, we will recommend a Phase 2 intrusive investigation as a next step." },
              { q: "When does my council require a contamination assessment?", a: "Building Control will require one for any new dwelling on previously developed land. Planning officers may also condition a contamination assessment where historical land use suggests potential risk — former industrial sites, petrol stations, agricultural land, or sites near landfills." },
              { q: "What is a Conceptual Site Model?", a: "A CSM identifies potential contamination sources (e.g. former fuel tank), pathways (e.g. permeable soil), and receptors (e.g. future residents). If a plausible source-pathway-receptor linkage exists, further investigation is recommended. If not, the risk is classified as low and no further action is typically required." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-orange-500 font-mono text-sm">Q.</span>
                  {item.q}
                </h4>
                <p className="text-brand-primary/60 leading-relaxed pl-9 border-l border-brand-primary/5 font-light">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* MEGA PILLAR CROSS-LINK */}
      <section className="max-w-4xl mx-auto px-6 pb-24 -mt-8">
        <div className="bg-brand-surface border-2 border-brand-accent/20 rounded-[2rem] p-8 md:p-10 text-center shadow-xl shadow-brand-primary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[50px] rounded-full" />
          <p className="text-brand-primary/90 font-medium text-lg md:text-xl relative z-10 leading-relaxed">
            Not sure which reports you need? <br className="hidden sm:block" />
            See our complete engineering guide: <br className="hidden sm:block" />
            <a href="/insights/what-reports-do-you-need-for-planning-permission" className="text-brand-accent font-bold hover:underline decoration-2 underline-offset-4 mt-2 inline-block">
              What Reports Do You Need for Planning Permission? &rarr;
            </a>
          </p>
        </div>
      </section>

      <PackageCrossSellBanner />

      {/* Final CTA - High Impact */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-orange-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-orange-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to Assess Your <br />Contamination Risk?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get submission-ready contamination evidence for your planning application. LCRM 2020 compliant, specific to your site's history and risk profile.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-white text-orange-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Get Your Phase 1 Assessment
              </Link>
              <div className="flex items-center gap-3 px-8 py-6 bg-orange-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
                <Clock size={18} />
                48-72hr Delivery
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Phase1Contamination;
