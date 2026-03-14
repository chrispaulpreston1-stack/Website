import { motion } from 'motion/react';
import { Zap, Check, ArrowRight, Info, HelpCircle, Clock, ShieldCheck, Sun, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';
import { getReportBySlug } from '../data/reports';
import ReportMethodology from '../components/ReportMethodology';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const EnergyStatement = () => {
  const report = getReportBySlug('energy-statement')!;
  const features = [
    { title: "Part L Fabric Compliance", desc: "Assessment against Part L 2021 standards for U-values, thermal bridging, and air permeability." },
    { title: "Solar PV Feasibility", desc: "Site-specific solar yield estimates using PVGIS data based on roof orientation and pitch." },
    { title: "Air Source Heat Pump Assessment", desc: "Technical viability assessment considering external space, noise, and heat demand." },
    { title: "Part O Overheating Screening", desc: "Risk screening using the simplified method from Approved Document O." },
    { title: "Part G Water Efficiency", desc: "Documentation of water efficiency measures to meet 125L (or 110L) per person targets." },
    { title: "Part S EV Charging", desc: "Assessment of electric vehicle charging infrastructure requirements and provision." },
    { title: "Embodied Carbon Considerations", desc: "Proportionate guidance on material selection and whole-life carbon reduction." },
    { title: "Renewable Cost-Benefit Summary", desc: "Comparison of capital costs vs expected energy contribution and payback periods." }
  ];

  const comparisonCategories = [
    {
      title: "Technical Analysis",
      rows: [
        { feature: "Part L fabric compliance assessment", pfco: true, competitor1: "Often omitted", competitor2: false },
        { feature: "Solar PV feasibility with PVGIS yield data", pfco: true, competitor1: "Generic estimates", competitor2: false },
        { feature: "Air source heat pump feasibility", pfco: true, competitor1: "Rarely assessed", competitor2: false },
      ]
    },
    {
      title: "Regulatory Compliance",
      rows: [
        { feature: "Part O overheating screening (Simplified)", pfco: true, competitor1: "Often deferred", competitor2: false },
        { feature: "Part G water efficiency measures", pfco: true, competitor1: "Brief mention", competitor2: false },
        { feature: "Embodied carbon considerations", pfco: true, competitor1: "Rarely addressed", competitor2: false },
      ]
    },
    {
      title: "Value & Format",
      rows: [
        { feature: "Renewable energy cost-benefit summary", pfco: true, competitor1: "Not provided", competitor2: false },
        { feature: "Proportional to project scale (3–25 pages)", pfco: true, competitor1: "One-size-fits-all", competitor2: "Variable" },
        { feature: "Branded submission-ready Word document", pfco: true, competitor1: "Email summary", competitor2: "Generic template" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Energy Statement | Sustainability Evidence | PF & Co"
        description="Desktop sustainability and energy evidence for your planning application — covering Part L compliance, renewable energy feasibility, and overheating risk."
        path="/site-intelligence/energy-statement"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Energy Statement',
            description: 'Desktop sustainability and energy evidence covering Part L compliance, renewable energy feasibility, and overheating risk.',
            brand: { '@type': 'Organization', name: 'PF & Co Construction' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
          },
          {
            '@type': 'VideoObject',
            name: 'Energy Statement — What\'s Inside Your Report',
            description: 'A walkthrough of the PF & Co Energy Statement, showing how we pull real PVGIS solar yield data and assess Part L compliance to help you satisfy council sustainability requirements.',
            thumbnailUrl: 'https://www.pfcoconstruction.co.uk/videos/energy-demo-thumb.jpg',
            contentUrl: 'https://www.pfcoconstruction.co.uk/videos/energy-demo.mp4',
            uploadDate: '2026-03-02',
            duration: 'PT1M34S',
            publisher: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfcoconstruction.co.uk' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do I need an Energy Statement for an extension?', acceptedAnswer: { '@type': 'Answer', text: 'It depends on your council. A growing number of LPAs require sustainability evidence even for householder applications, particularly where they\'ve adopted a Climate Change SPD. We can check your council\'s requirements for you.' } },
              { '@type': 'Question', name: 'Is this the same as a SAP calculation?', acceptedAnswer: { '@type': 'Answer', text: 'No. A SAP calculation is a Building Control requirement used to demonstrate Part L compliance through a detailed model. Our Energy Statement is a planning-stage document that demonstrates your approach at a strategic level.' } },
              { '@type': 'Question', name: 'What renewable technologies do you assess?', acceptedAnswer: { '@type': 'Answer', text: 'We assess Solar PV, Air Source Heat Pumps, MVHR, enhanced glazing, and EV charging. Each assessment is site-specific, looking at orientation, space, and cost-effectiveness.' } },
            ]
          }
        ]}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            ENERGY
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-amber-400 font-bold mb-6 block">Site Intelligence / Product 07</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Energy <br />
              <span className="text-amber-400 italic font-accent font-light">Statement</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              Desktop sustainability and energy evidence for your planning application — covering Part L compliance, renewable energy feasibility, and overheating risk.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=energy-statement" className="px-10 py-5 bg-amber-500 text-white rounded-full font-bold hover:bg-amber-600 transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-amber-200" />
              </Link>
              <a href="/samples/energy-statement-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-amber-400" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/40">
                    <Sun size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Efficiency Status</div>
                    <div className="text-sm font-bold text-amber-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> Part L Compliant
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Energy Strategy</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Fabric Performance", score: 8, color: "bg-amber-400" },
                    { label: "Renewable Yield", score: 9, color: "bg-blue-400" },
                    { label: "Overheating Risk", score: 2, color: "bg-emerald-400" },
                    { label: "Carbon Reduction", score: 7, color: "bg-amber-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Sustainability Context</div>
                  <div className="text-lg font-bold">Climate SPD <span className="text-xs font-normal opacity-60">(Gateway Requirement)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Info size={20} className="text-amber-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer
        title="Energy Statement"
        accentColor="amber-500"
        description="Watch our walkthrough to see how we pull real PVGIS solar yield data and assess Part L compliance, helping you satisfy council sustainability requirements without over-engineering."
        thumbnailUrl="/videos/energy-demo-thumb.jpg"
        videoUrl="/videos/energy-demo.mp4"
        duration="1:34"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why Energy Evidence is Now a <br /><span className="font-accent italic font-light text-amber-600">Planning Requirement.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                A growing number of councils now require sustainability evidence. If your LPA has adopted a Climate Change SPD, your application may not even be registered without an Energy Statement.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-amber-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-amber-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-amber-400 hover:gap-4 transition-all relative z-10">
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
            title="Energy Statement"
            subtitle="What you get vs a typical consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Mention"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK sustainability consultancy practices. PF&Co Energy Statement pulls data from 60 authoritative sources and references the latest Part L 2021 and Part O 2021 requirements."
            accentColor="text-amber-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-amber-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where an Energy Statement is mandatory for planning.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Validation", r: "Checklist requirement", c: "Directly satisfies the validation requirement" },
              { s: "Climate SPD", r: "Adopted council policy", c: "Addresses SPD requirements proportionately" },
              { s: "New Build", r: "Residential dwelling", c: "Full Part L + renewables + overheating" },
              { s: "Major Reno", r: "Significant works", c: "Scaled to the scope of works" },
              { s: "Householder", r: "Proactive councils", c: "Concise 3–5 page report covering key headings" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold mb-4">Scenario 0{i+1}</div>
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
        const report = getReportBySlug('energy-statement');
        return report?.methodologySummary ? (
          <ReportMethodology methodologySummary={report.methodologySummary} dataCategories={report.dataCategories || []} />
        ) : null;
      })()}

      {/* FAQ - Minimal Editorial */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-amber-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "Do I need an Energy Statement for an extension?", a: "It depends on your council. A growing number of LPAs require sustainability evidence even for householder applications, particularly where they've adopted a Climate Change SPD. We can check your council's requirements for you." },
              { q: "Is this the same as a SAP calculation?", a: "No. A SAP calculation is a Building Control requirement used to demonstrate Part L compliance through a detailed model. Our Energy Statement is a planning-stage document that demonstrates your approach at a strategic level." },
              { q: "What renewable technologies do you assess?", a: "We assess Solar PV, Air Source Heat Pumps, MVHR, enhanced glazing, and EV charging. Each assessment is site-specific, looking at orientation, space, and cost-effectiveness." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-amber-500 font-mono text-sm">Q.</span>
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
        <div className="bg-amber-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-amber-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to Satisfy Your <br />Energy Requirements?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get submission-ready sustainability evidence for your planning application. Proportionate to your project, specific to your council's expectations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact"
                className="px-12 py-6 bg-white text-amber-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Get Your Energy Statement
              </Link>
              <a href="/samples/energy-statement-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-amber-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-amber-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
              <div className="flex items-center gap-3 px-8 py-6 bg-amber-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
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

export default EnergyStatement;
