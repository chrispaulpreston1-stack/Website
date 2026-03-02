import { motion } from 'motion/react';
import { Leaf, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';

const BiodiversityNetGain = () => {
  const features = [
    { title: "5 Statutory Exemption Checks", desc: "Systematic check of all five exemptions under the Environment Act 2021." },
    { title: "Ecological Constraint Mapping", desc: "Desktop data from Natural England, NBN Atlas, and GCN Risk Zone mapping." },
    { title: "Baseline Biodiversity Estimation", desc: "Likely baseline biodiversity value estimate based on habitat types and aerial imagery." },
    { title: "BNG Delivery Assessment", desc: "Assessment of on-site, off-site, or statutory credit delivery routes." },
    { title: "Cost Implications & Budget Guidance", desc: "Indicative cost ranges for budgeting — from planting to statutory credits." },
    { title: "Survey Identification & Timing", desc: "Identification of required surveys and their seasonal timing windows." },
    { title: "GCN Risk Zone Assessment", desc: "Site check against Great Crested Newt Risk Zone mapping and licensing availability." },
    { title: "Proportional Output", desc: "Report scales from 2–4 pages for householders to 15+ pages for major applications." }
  ];

  const comparisonCategories = [
    {
      title: "Statutory Compliance",
      rows: [
        { feature: "All 5 statutory exemptions systematically checked", pfco: true, competitor1: "Often assumed", competitor2: false },
        { feature: "Environment Act 2021 policy alignment", pfco: true, competitor1: true, competitor2: "Partial" },
        { feature: "LPA-specific BNG requirement review", pfco: true, competitor1: true, competitor2: false },
      ]
    },
    {
      title: "Data & Mapping",
      rows: [
        { feature: "Natural England FeatureServer integration", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "NBN Atlas protected species records", pfco: true, competitor1: true, competitor2: false },
        { feature: "GCN Risk Zone mapping check", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Habitat mapping from aerial imagery", pfco: true, competitor1: true, competitor2: "Basic" },
      ]
    },
    {
      title: "Feasibility & Costing",
      rows: [
        { feature: "Baseline biodiversity value range estimate", pfco: true, competitor1: "Ecologist only", competitor2: false },
        { feature: "Delivery route comparison (On/Off/Credits)", pfco: true, competitor1: "Usually single", competitor2: false },
        { feature: "Indicative cost ranges for budgeting", pfco: true, competitor1: "Rarely provided", competitor2: false },
        { feature: "Survey identification with seasonal windows", pfco: true, competitor1: "Generic list", competitor2: false },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Biodiversity Net Gain (BNG) | Screening & Feasibility | PF & Co"
        description="Find out whether BNG applies to your project, what it will cost, and which surveys you need before you submit your planning application."
        path="/site-intelligence/biodiversity-net-gain"
        jsonLd={{
          '@type': 'Product',
          name: 'Biodiversity Net Gain Screening',
          description: 'BNG screening and feasibility assessment — find out whether BNG applies and which surveys you need.',
          brand: { '@type': 'Organization', name: 'PF & Co Construction' },
          offers: { '@type': 'Offer', price: '345', priceCurrency: 'GBP' },
        }}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <h1 className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            BNG
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-emerald-400 font-bold mb-6 block">Site Intelligence / Product 04</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Biodiversity <br />
              <span className="text-emerald-400 italic font-accent font-light">Net Gain</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              Find out whether BNG applies to your project, what it will cost, and which surveys you need — before you submit your planning application.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=biodiversity-net-gain" className="px-10 py-5 bg-emerald-500 text-white rounded-full font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-emerald-200" />
              </Link>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-emerald-400" />
              </button>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1">Introductory Offer</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-bold text-white">£325</span>
                  <span className="text-sm text-white/40 line-through">RRP £650</span>
                </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/40">
                    <Leaf size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Compliance Status</div>
                    <div className="text-sm font-bold text-emerald-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> Verified
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">BNG Decision Matrix</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Exemption Probability", score: 8, color: "bg-emerald-400" },
                    { label: "Ecological Sensitivity", score: 3, color: "bg-blue-400" },
                    { label: "Mitigation Cost", score: 4, color: "bg-emerald-400" },
                    { label: "Survey Requirement", score: 6, color: "bg-amber-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Ecological Context</div>
                  <div className="text-lg font-bold">Low Impact <span className="text-xs font-normal opacity-40">(Likely Exempt)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Info size={20} className="text-emerald-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer
        title="Biodiversity Net Gain"
        accentColor="emerald-500"
        description="Watch our walkthrough to see how we systematically check for BNG exemptions and estimate baseline biodiversity value, helping you avoid seasonal survey delays and budget surprises."
        thumbnailUrl="/videos/bng-screening-thumb.jpg"
        videoUrl="/videos/bng-screening-demo.mp4"
        duration="1:37"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why BNG is More Than a <br /><span className="font-accent italic font-light text-emerald-600">Tick-Box Exercise.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Since February 2024, most planning applications in England must deliver a 10% Biodiversity Net Gain. Getting this wrong can delay an application by months or add unexpected costs late in the process.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
                    <div>
                      <h4 className="font-bold mb-1 text-brand-primary">{f.title}</h4>
                      <p className="text-sm text-brand-primary/50 font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-8">
                {features.slice(4).map((f, i) => (
                  <div key={i} className="group">
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-emerald-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-emerald-400 italic font-accent font-light">Guaranteed.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-emerald-400 hover:gap-4 transition-all relative z-10">
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
            title="BNG Screening & Feasibility"
            subtitle="What you get vs a typical ecology consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Map Check"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK ecology consultancy practices. PF&Co BNG Screening pulls data from 15+ authoritative sources and references the latest Environment Act 2021 statutory guidance."
            accentColor="text-emerald-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-emerald-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a BNG Screening is essential for planning.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Full Planning", r: "Post-Feb 2024", c: "BNG mandatory — screening identifies obligations" },
              { s: "Small Sites", r: "Post-Apr 2024", c: "BNG mandatory — exemptions may apply" },
              { s: "Householders", r: "Exemption check", c: "Most householder apps are exempt — we confirm it" },
              { s: "Land Purchase", r: "Budget planning", c: "Identify BNG costs early to inform acquisition" },
              { s: "Pre-Application", r: "Strategy stage", c: "Know your BNG position before engaging the LPA" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold mb-4">Scenario 0{i+1}</div>
                  <h4 className="text-xl font-bold mb-2 text-brand-primary">{row.s}</h4>
                  <p className="text-xs text-brand-primary/40 uppercase tracking-wider font-bold mb-6">{row.r}</p>
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
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-brand-primary text-emerald-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "Is my project exempt from BNG?", a: "It depends on the application type, not just the project size. Householder applications and self-builds are often exempt. However, Full Planning applications for single dwellings usually trigger BNG. Our screening checks all five statutory exemptions systematically." },
              { q: "What is the 10% net gain requirement?", a: "The Environment Act 2021 requires most new developments to deliver a measurable 10% increase in biodiversity value compared to the baseline. This can be delivered on-site, off-site, or through statutory credits." },
              { q: "How much does BNG compliance cost?", a: "Costs vary significantly. Simple on-site planting might cost a few hundred pounds. Off-site units typically cost £20k–£30k per unit. Our screening gives you proportionate cost guidance for your specific situation." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-emerald-500 font-mono text-sm">Q.</span>
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

      {/* Final CTA - High Impact */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-emerald-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Need to Know Where <br />You Stand on BNG?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Find out whether your project is exempt, what it will cost if it isn't, and which surveys you need — before you submit your application.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact"
                className="px-12 py-6 bg-white text-emerald-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Request a Quote
              </Link>
              <button className="px-12 py-6 bg-emerald-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-emerald-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </button>
              <div className="flex items-center gap-3 px-8 py-6 bg-emerald-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
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

export default BiodiversityNetGain;
