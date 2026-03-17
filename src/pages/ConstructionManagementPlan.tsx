import { motion } from 'motion/react';
import { HardHat, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';
import { getReportBySlug } from '../data/reports';
import ReportMethodology from '../components/ReportMethodology';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const ConstructionManagementPlan = () => {
  const report = getReportBySlug('construction-management-plan')!;
  const features = [
    { title: "Dust & Air Quality Management", desc: "Measures to control dust generation during demolition, earthworks, and construction." },
    { title: "Noise & Vibration Control", desc: "Working hours, noise limits, and vibration monitoring thresholds appropriate to your site." },
    { title: "Construction Traffic Management", desc: "Delivery scheduling, vehicle routing, and measures to prevent mud on the highway." },
    { title: "Waste Management & Logistics", desc: "Site waste management plan covering segregation, storage, and disposal." },
    { title: "Ecology & Heritage Protection", desc: "Protection measures for trees, nesting birds, and heritage assets during construction." },
    { title: "Neighbour Liaison", desc: "Advance notification of noisy works and a structured complaint handling procedure." },
    { title: "Working Hours & Scheduling", desc: "Clear working hours aligned with LPA standard conditions and site restrictions." },
    { title: "Proportional Scope", desc: "Document scales from 2–4 pages for householders to 30+ pages for major developments." }
  ];

  const comparisonCategories = [
    {
      title: "Plan Coverage",
      rows: [
        { feature: "12-section comprehensive structure", pfco: true, competitor1: "Often 4–6 sections", competitor2: "Basic summary" },
        { feature: "AQMA-aware dust and emissions measures", pfco: true, competitor1: "Generic measures", competitor2: false },
        { feature: "Tailored noise control for sensitive receptors", pfco: true, competitor1: "Standard boilerplate", competitor2: false },
      ]
    },
    {
      title: "Logistics & Traffic",
      rows: [
        { feature: "Route-specific traffic analysis", pfco: true, competitor1: "Generic statement", competitor2: false },
        { feature: "London CLP/NRMM/DVS provisions", pfco: true, competitor1: "Often separate", competitor2: false },
        { feature: "Site compound and logistics mapping", pfco: true, competitor1: "Sometimes", competitor2: false },
      ]
    },
    {
      title: "Delivery & Format",
      rows: [
        { feature: "Outline and Detailed modes available", pfco: true, competitor1: "Usually single", competitor2: false },
        { feature: "Branded Word document ready for submission", pfco: true, competitor1: "PDF only", competitor2: "Email only" },
        { feature: "Typical turnaround under 7 working days", pfco: true, competitor1: "2–4 weeks", competitor2: "Variable" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Construction Management Plan (CMP) | Planning Conditions | PF & Co"
        description="Satisfy CMP planning conditions and demonstrate responsible construction management — dust, noise, traffic, and neighbour protection in one document."
        path="/site-intelligence/construction-management-plan"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Construction Management Plan',
            description: 'Satisfy CMP planning conditions — dust, noise, traffic, and neighbour protection in one document.',
            brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
          },
          {
            '@type': 'VideoObject',
            name: 'Construction Management Plan — What\'s Inside Your Report',
            description: 'A walkthrough of the PF & Co Site Intelligence Management Plan, showing how we address all 12 sections of a comprehensive CMP to help you discharge pre-commencement conditions and manage neighbour expectations.',
            thumbnailUrl: 'https://www.pfandco.co.uk/videos/cmp-demo-thumb.jpg',
            contentUrl: 'https://www.pfandco.co.uk/videos/cmp-demo.mp4',
            uploadDate: '2026-03-02',
            duration: 'PT1M26S',
            publisher: { '@type': 'Organization', name: 'PF & Co Site Intelligence', url: 'https://www.pfandco.co.uk' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'What is a pre-commencement condition?', acceptedAnswer: { '@type': 'Answer', text: 'It\'s a planning condition that must be formally approved by the council before any work begins on site. If your approval includes a pre-commencement CMP condition, you cannot legally start construction until the council has approved your plan.' } },
              { '@type': 'Question', name: 'Do I need a CMP for a house extension?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on the context. Most straightforward extensions don\'t need one. However, if you\'re near a school, listed building, or have constrained access, the council may require a proportionate 2\u20134 page plan.' } },
              { '@type': 'Question', name: 'What\'s the difference between Outline and Detailed?', acceptedAnswer: { '@type': 'Answer', text: 'An Outline CMP is submitted with the application to show principles. A Detailed CMP is for condition discharge and includes specific method statements, named contacts, and confirmed delivery routes.' } },
            ]
          }
        ]}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            CMP
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-slate-400 font-bold mb-6 block">Site Intelligence / Product 05</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Construction <br />
              <span className="text-slate-400 italic font-accent font-light">Management Plan</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              Satisfy CMP planning conditions and demonstrate responsible construction management — dust, noise, traffic, and neighbour protection in one document.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=construction-management-plan" className="px-10 py-5 bg-slate-600 text-white rounded-full font-bold hover:bg-slate-700 transition-all shadow-xl shadow-slate-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-slate-200" />
              </Link>
              <a href="/samples/construction-management-plan-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-slate-400" />
              </a>
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
              <div className="absolute inset-0 bg-gradient-to-br from-slate-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-slate-600 rounded-2xl flex items-center justify-center shadow-lg shadow-slate-500/40">
                    <HardHat size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Condition Status</div>
                    <div className="text-sm font-bold text-slate-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> Discharge Ready
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Logistics Dashboard</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Noise Mitigation", score: 9, color: "bg-slate-400" },
                    { label: "Traffic Flow", score: 7, color: "bg-blue-400" },
                    { label: "Dust Control", score: 8, color: "bg-slate-400" },
                    { label: "Neighbour Liaison", score: 9, color: "bg-emerald-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Site Sensitivity</div>
                  <div className="text-lg font-bold">High <span className="text-xs font-normal opacity-60">(Near School)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Info size={20} className="text-slate-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer
        title="Construction Management Plan"
        accentColor="slate-500"
        description="Watch our walkthrough to see how we address all 12 sections of a comprehensive CMP, helping you discharge pre-commencement conditions and manage neighbour expectations."
        thumbnailUrl="/videos/cmp-demo-thumb.jpg"
        videoUrl="/videos/cmp-demo.mp4"
        duration="1:26"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-slate-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why Problems Found on Paper Cost Less Than <br /><span className="font-accent italic font-light text-slate-600">Problems Found on Site.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Planning officers increasingly attach CMP conditions to approvals. Miss this, and your project stalls before it begins. A well-structured CMP shows the council you've thought through the construction phase.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-slate-600 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-slate-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-slate-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-slate-400 hover:gap-4 transition-all relative z-10">
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
            title="Construction Management Plan"
            subtitle="What you get vs a typical planning consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Summary"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK planning consultancy practices. PF&Co CMP pulls data from 60 authoritative sources and references the latest LPA validation requirements."
            accentColor="text-slate-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-slate-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Construction Management Plan is essential for planning.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Validation", r: "Submission stage", c: "Outline CMP submitted with the application" },
              { s: "Condition Discharge", r: "Pre-commencement", c: "Detailed CMP for condition discharge" },
              { s: "Sensitive Receptors", r: "Schools/Hospitals", c: "Tailored mitigation for nearby receptors" },
              { s: "London Sites", r: "CLP/NRMM", c: "London-specific provisions included where applicable" },
              { s: "Neighbour Objections", r: "Disruption concerns", c: "Demonstrates responsible management" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold mb-4">Scenario 0{i+1}</div>
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
        const report = getReportBySlug('construction-management-plan');
        return report?.methodologySummary ? (
          <ReportMethodology methodologySummary={report.methodologySummary} dataCategories={report.dataCategories || []} />
        ) : null;
      })()}

      {/* FAQ - Minimal Editorial */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-slate-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "What is a pre-commencement condition?", a: "It's a planning condition that must be formally approved by the council before any work begins on site. If your approval includes a pre-commencement CMP condition, you cannot legally start construction until the council has approved your plan." },
              { q: "Do I need a CMP for a house extension?", a: "It depends on the context. Most straightforward extensions don't need one. However, if you're near a school, listed building, or have constrained access, the council may require a proportionate 2–4 page plan." },
              { q: "What's the difference between Outline and Detailed?", a: "An Outline CMP is submitted with the application to show principles. A Detailed CMP is for condition discharge and includes specific method statements, named contacts, and confirmed delivery routes." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-slate-500 font-mono text-sm">Q.</span>
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

      {/* Final CTA - High Impact */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-slate-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-slate-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Need a Construction <br />Management Plan?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Satisfy your CMP condition or demonstrate responsible construction management — proportionate to your project, ready for submission.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact"
                className="px-12 py-6 bg-white text-slate-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Request a Quote
              </Link>
              <a href="/samples/construction-management-plan-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-slate-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-slate-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
              <div className="flex items-center gap-3 px-8 py-6 bg-slate-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
                <Clock size={18} />
                48hr Delivery
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ConstructionManagementPlan;
