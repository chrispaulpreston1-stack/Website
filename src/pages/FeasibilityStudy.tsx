import { motion } from 'motion/react';
import { Layout, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, Ruler, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';

const FeasibilityStudy = () => {
  const features = [
    { title: "Three Concept Options", desc: "Up to three realistic design options tailored to your brief and budget, compared side-by-side." },
    { title: "Hand-Sketch Floor Plans", desc: "Rendered floor plans in a hand-sketch style for clear spatial understanding without technical jargon." },
    { title: "Cost Confidence Bands", desc: "Indicative construction costs for each option with +/- 15–20% confidence bands." },
    { title: "VAT Analysis", desc: "Breakdown of VAT implications for each option, including potential structuring for tax recovery." },
    { title: "Planning Route Assessment", desc: "Clear identification of the planning route (PD, Householder, Full) for each design option." },
    { title: "Neighbour Precedent Analysis", desc: "Research into immediate planning history to identify relevant precedents and anticipate objections." },
    { title: "Phasing Strategy", desc: "Assessment of whether splitting the project into phases could reduce cost or simplify planning." },
    { title: "Budget Architecture Diagram", desc: "Visual breakdown of budget allocation across structure, finishes, fees, and contingency." }
  ];

  const comparisonCategories = [
    {
      title: "Design & Options",
      rows: [
        { feature: "Three distinct concept options compared", pfco: true, competitor1: "Usually 1 only", competitor2: "Brief mention" },
        { feature: "Hand-sketch floor plans per option", pfco: true, competitor1: "Rarely provided", competitor2: false },
        { feature: "Spatial trade-off analysis", pfco: true, competitor1: "Informal", competitor2: false },
      ]
    },
    {
      title: "Financial Intelligence",
      rows: [
        { feature: "Cost estimates with confidence bands", pfco: true, competitor1: "Single figure", competitor2: "None" },
        { feature: "VAT analysis per option", pfco: true, competitor1: "Rarely considered", competitor2: false },
        { feature: "Budget architecture visual breakdown", pfco: true, competitor1: "Spreadsheet only", competitor2: false },
      ]
    },
    {
      title: "Planning & Risk",
      rows: [
        { feature: "Planning route per option (PD/Householder)", pfco: true, competitor1: "Generic advice", competitor2: false },
        { feature: "Neighbour precedent research", pfco: true, competitor1: "Not typically done", competitor2: false },
        { feature: "Phasing strategy where relevant", pfco: true, competitor1: "Not assessed", competitor2: false },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Feasibility Study | Pre-Design Concept Options | PF & Co"
        description="Understand what's possible, what it costs, and which route to take — before you spend a penny on architect fees. Three concept options compared."
        path="/site-intelligence/feasibility-study"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Feasibility Study',
            description: 'Pre-design concept feasibility study — understand what is possible, what it costs, and which route to take.',
            brand: { '@type': 'Organization', name: 'PF & Co Construction' },
            offers: { '@type': 'Offer', price: '1200', priceCurrency: 'GBP' },
          },
          {
            '@type': 'VideoObject',
            name: 'Feasibility Study — What\'s Inside Your Report',
            description: 'A walkthrough of the PF & Co Feasibility Study, showing how we compare three design options side-by-side with real costs and planning routes to help you brief your architect with confidence.',
            thumbnailUrl: 'https://www.pfcoconstruction.co.uk/videos/feasibility-study-thumb.jpg',
            contentUrl: 'https://www.pfcoconstruction.co.uk/videos/feasibility-study-demo.mp4',
            uploadDate: '2026-03-02',
            duration: 'PT1M15S',
            publisher: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfcoconstruction.co.uk' },
          }
        ]}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            FEASIBILITY
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-400 font-bold mb-6 block">Site Intelligence / Product 08</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Feasibility <br />
              <span className="text-violet-400 italic font-accent font-light">Study</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              Understand what's possible, what it costs, and which route to take — before you spend a penny on architect fees.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=feasibility-study" className="px-10 py-5 bg-violet-600 text-white rounded-full font-bold hover:bg-violet-700 transition-all shadow-xl shadow-violet-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-violet-200" />
              </Link>
              <a href="/samples/feasibility-study-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-violet-400" />
              </a>
              <div className="flex flex-col">
                <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent text-[10px] uppercase tracking-widest font-bold mb-3 self-start">
                  Early Access Pricing - 40% off all reports.
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-mono font-bold text-white">Early Access: £1,200</span>
                  <span className="text-base text-white/50 line-through font-medium">Was £2,000</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-violet-600 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/40">
                    <Ruler size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Design Status</div>
                    <div className="text-sm font-bold text-violet-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> Brief Validated
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Option Appraisal</h3>

                <div className="space-y-6">
                  {[
                    { label: "Spatial Efficiency", score: 9, color: "bg-violet-400" },
                    { label: "Budget Alignment", score: 8, color: "bg-blue-400" },
                    { label: "Planning Risk", score: 3, color: "bg-emerald-400" },
                    { label: "Build Complexity", score: 5, color: "bg-amber-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Project Context</div>
                  <div className="text-lg font-bold">Concept Stage <span className="text-xs font-normal opacity-60">(Pre-Architect)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Info size={20} className="text-violet-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer
        title="Feasibility Study"
        accentColor="violet-500"
        description="Watch our walkthrough to see how we compare three design options side-by-side with real costs and planning routes, helping you brief your architect with confidence."
        thumbnailUrl="/videos/feasibility-study-thumb.jpg"
        videoUrl="/videos/feasibility-study-demo.mp4"
        duration="1:15"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-violet-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why You Need a <br /><span className="font-accent italic font-light text-violet-600">Feasibility Study.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Most projects start the wrong way round. They invest in drawings, then discover the budget doesn't stretch. A Feasibility Study puts the decision-making first.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-violet-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i + 1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-violet-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-emerald-400 italic font-accent font-light">Guaranteed.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-violet-400 hover:gap-4 transition-all relative z-10">
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
            title="Feasibility Study"
            subtitle="What you get vs a typical architect or consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Architect", "Basic Advice"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK architectural practice. PF&Co Feasibility Study provides strategic groundwork to make design drawings worthwhile."
            accentColor="text-violet-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-violet-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Feasibility Study is the smartest first step.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Extension", r: "Rear/Side/Wrap", c: "Compare extension options and costs" },
              { s: "Loft Conversion", r: "Dormer/Mansard", c: "Dormer vs mansard vs rooflight compared" },
              { s: "New Build", r: "Residential plot", c: "Scheme options with planning route per option" },
              { s: "Pre-Architect", r: "Strategy stage", c: "Option appraisal before architect appointment" },
              { s: "Budget Check", r: "Risk management", c: "Confidence-banded costs prevent surprises" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-violet-500 font-bold mb-4">Scenario 0{i + 1}</div>
                  <h4 className="text-xl font-bold mb-2 text-brand-primary">{row.s}</h4>
                  <p className="text-xs text-brand-primary/60 uppercase tracking-wider font-bold mb-6">{row.r}</p>
                </div>
                <p className="text-sm text-brand-primary/60 italic font-accent font-light">{row.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Minimal Editorial */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-violet-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "Do I still need an architect after this?", a: "Yes. A Feasibility Study is pre-design — it tells you what's possible and what it costs. Once you've chosen an option, you'll appoint an architect to develop it into technical drawings with far more clarity." },
              { q: "How accurate are the cost estimates?", a: "We provide indicative costs with +/- 15–20% confidence bands based on current regional rates. They are intended for decision-making and budget validation, not for tendering." },
              { q: "Can I use the floor plans for planning?", a: "No. The hand-sketch plans are concept-stage illustrations to help you understand spatial layout. They are not measured drawings for Planning or Building Control." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-violet-500 font-mono text-sm">Q.</span>
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
            <a href="/blog/what-reports-do-you-need-for-planning-permission/" className="text-brand-accent font-bold hover:underline decoration-2 underline-offset-4 mt-2 inline-block">
              What Reports Do You Need for Planning Permission? &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* Final CTA - High Impact */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-violet-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-violet-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to Find Out <br />What's Possible?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get honest answers about your project before you commit to architect fees. Three options, real costs, clear planning routes.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-white text-violet-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Get Your Feasibility Study
              </Link>
              <a href="/samples/feasibility-study-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-violet-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-violet-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
              <div className="flex items-center gap-3 px-8 py-6 bg-violet-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
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

export default FeasibilityStudy;
