import { motion } from 'motion/react';
import { PenTool, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';

const DesignAndAccessStatement = () => {
  const features = [
    { title: "DMPO 2015 Compliant Structure", desc: "Structured to satisfy Article 9 of the Development Management Procedure Order 2015." },
    { title: "Design Process Narrative", desc: "Follows the assessment–evaluation–response methodology endorsed by the Design Council." },
    { title: "Five Statutory Design Aspects", desc: "Addresses amount, layout, scale, landscaping, and appearance in dedicated sections." },
    { title: "Site & Context Analysis", desc: "Desktop assessment of physical characteristics, built form, and planning designations." },
    { title: "Access Strategy", desc: "Pedestrian, vehicular, and inclusive access arrangements for all users." },
    { title: "Heritage Context", desc: "Integration of heritage context drawn from Heritage Impact Assessments where relevant." },
    { title: "Landscape & Biodiversity", desc: "Description of soft and hard landscaping proposals and ecological considerations." },
    { title: "Submission-Ready Document", desc: "Professionally formatted Word document ready for direct Planning Portal upload." }
  ];

  const comparisonCategories = [
    {
      title: "Statutory Compliance",
      rows: [
        { feature: "DMPO 2015 Article 9 compliant structure", pfco: true, competitor1: "Usually", competitor2: "Variable" },
        { feature: "All five statutory aspects addressed individually", pfco: true, competitor1: "Often combined", competitor2: "Often missed" },
        { feature: "Assessment–evaluation–response narrative", pfco: true, competitor1: "Descriptive only", competitor2: false },
      ]
    },
    {
      title: "Integration & Detail",
      rows: [
        { feature: "Heritage context integrated (cross-referenced)", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Inclusive access analysis", pfco: true, competitor1: "Sometimes omitted", competitor2: false },
        { feature: "Local plan design policies cited", pfco: true, competitor1: true, competitor2: "Generic" },
      ]
    },
    {
      title: "Delivery & Value",
      rows: [
        { feature: "Branded, submission-ready Word document", pfco: true, competitor1: "PDF only", competitor2: "Email only" },
        { feature: "No duplication of Planning Statement content", pfco: true, competitor1: "Often overlapping", competitor2: false },
        { feature: "Typical turnaround under 5 working days", pfco: true, competitor1: "2–4 weeks", competitor2: "Variable" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Design and Access Statement (DAS) | Planning Submission | PF & Co"
        description="A submission-ready Design and Access Statement covering the five statutory aspects of design and access analysis — compliant with DMPO 2015 Article 9."
        path="/site-intelligence/design-and-access-statement"
        jsonLd={{
          '@type': 'Product',
          name: 'Design and Access Statement',
          description: 'Submission-ready DAS covering the five statutory aspects of design and access analysis — DMPO 2015 Article 9 compliant.',
          brand: { '@type': 'Organization', name: 'PF & Co Construction' },
          offers: { '@type': 'Offer', price: '445', priceCurrency: 'GBP' },
        }}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <h1 className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            DAS
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-indigo-400 font-bold mb-6 block">Site Intelligence / Product 06</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Design & <br />
              <span className="text-indigo-400 italic font-accent font-light">Access Statement</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              A submission-ready statement covering the five statutory aspects of design and access analysis — compliant with DMPO 2015 Article 9.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=design-and-access-statement" className="px-10 py-5 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-indigo-200" />
              </Link>
              <a href="/samples/design-and-access-statement-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-indigo-400" />
              </a>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-indigo-400 font-bold mb-1">Introductory Offer</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-bold text-white">£475</span>
                  <span className="text-sm text-white/40 line-through">RRP £950</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/40">
                    <PenTool size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Statutory Status</div>
                    <div className="text-sm font-bold text-indigo-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> DMPO Compliant
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Design Rationale</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Site Assessment", score: 9, color: "bg-indigo-400" },
                    { label: "Policy Alignment", score: 8, color: "bg-blue-400" },
                    { label: "Inclusive Access", score: 9, color: "bg-indigo-400" },
                    { label: "Visual Character", score: 7, color: "bg-emerald-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Context Analysis</div>
                  <div className="text-lg font-bold">Conservation Area <span className="text-xs font-normal opacity-40">(High Sensitivity)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Info size={20} className="text-indigo-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer
        title="Design & Access Statement"
        accentColor="indigo-500"
        description="Watch our walkthrough to see how we address the five statutory design aspects, helping you demonstrate a rational design process that planning officers can adopt."
        thumbnailUrl="/videos/das-demo-thumb.jpg"
        videoUrl="/videos/das-demo.mp4"
        duration="1:28"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-indigo-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why a DAS is More Than a <br /><span className="font-accent italic font-light text-indigo-600">Formality.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                A DAS is a legal requirement for many applications. Planning officers want to see a clear narrative: how you assessed the site, evaluated constraints, and how the final design responds.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-indigo-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-emerald-400 italic font-accent font-light">Guaranteed.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-indigo-400 hover:gap-4 transition-all relative z-10">
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
            title="Design & Access Statement"
            subtitle="What you get vs a typical planning consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Description"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK planning consultancy practices. PF&Co DAS follows the CABE-endorsed framework and references the latest DMPO 2015 Article 9 requirements."
            accentColor="text-indigo-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-indigo-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Design & Access Statement is a statutory requirement.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Major Dev", r: "10+ dwellings", c: "DAS is a statutory requirement under DMPO 2015" },
              { s: "Listed Buildings", r: "Consent apps", c: "Required regardless of development scale" },
              { s: "Conservation Areas", r: "Designated zones", c: "Required for most planning apps within a CA" },
              { s: "Validation", r: "Council request", c: "Many councils request a DAS on their checklist" },
              { s: "Heritage Context", r: "Combined analysis", c: "Cross-references HIA without duplication" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-indigo-500 font-bold mb-4">Scenario 0{i+1}</div>
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
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-brand-primary text-indigo-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "Do I need a DAS for a house extension?", a: "In most cases, no. Householder applications outside conservation areas don't typically need one. However, if you're in a conservation area or applying for listed building consent, it's usually required." },
              { q: "What's the difference between a DAS and a Planning Statement?", a: "A Planning Statement focuses on policy compliance. A DAS focuses on the design process, addressing the five statutory aspects (amount, layout, scale, landscaping, appearance) and inclusive access." },
              { q: "What are the 'five statutory aspects'?", a: "Under DMPO 2015, a DAS must explain design principles in relation to: amount (how much), layout (arrangement), scale (size relative to surroundings), landscaping (open spaces), and appearance (visual character)." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-indigo-500 font-mono text-sm">Q.</span>
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
        <div className="bg-indigo-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-indigo-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Conservation Area or <br />Major Development?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get the DAS your application requires. Send us the site address and proposal details — no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact"
                className="px-12 py-6 bg-white text-indigo-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Order Your DAS
              </Link>
              <a href="/samples/design-and-access-statement-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-indigo-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-indigo-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
              <div className="flex items-center gap-3 px-8 py-6 bg-indigo-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
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

export default DesignAndAccessStatement;
