import { motion } from 'motion/react';
import { Search, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, ClipboardCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';

const PreConstructionDesignReview = () => {
  const features = [
    { title: "9 Check Categories (~95 Checks)", desc: "Systematic review across dimensional coordination, structural integration, drainage, and more." },
    { title: "Cross-Discipline Coordination", desc: "Examination of interfaces between architectural, structural, and drainage drawings." },
    { title: "Clash Detection", desc: "Identification of physical clashes between different consultants' drawing sets before site work begins." },
    { title: "Missing Information Register", desc: "Structured log of all missing dimensions, materials, or details with priority ratings." },
    { title: "Buildability Assessment", desc: "Practical assessment of construction sequencing, plant access, and temporary works." },
    { title: "Readiness Verdict", desc: "Clear READY / CONDITIONAL / NOT READY verdict for the construction drawing package." },
    { title: "Prioritised Findings Register", desc: "Every finding logged with a priority rating (Critical to Low) for clear team actions." },
    { title: "Branded Word Report", desc: "Professional Project Readiness Report suitable for sharing with design teams and contractors." }
  ];

  const comparisonCategories = [
    {
      title: "Review Depth",
      rows: [
        { feature: "Systematic check across 9 categories (~95 checks)", pfco: true, competitor1: "Ad hoc visual review", competitor2: false },
        { feature: "Cross-discipline coordination review", pfco: true, competitor1: "Rarely done formally", competitor2: false },
        { feature: "Clash detection between drawing sets", pfco: true, competitor1: "Discovered on site", competitor2: false },
      ]
    },
    {
      title: "Output & Action",
      rows: [
        { feature: "Clear readiness verdict (READY/CONDITIONAL)", pfco: true, competitor1: "Informal opinion", competitor2: false },
        { feature: "Prioritised findings register (Critical to Low)", pfco: true, competitor1: "Unstructured notes", competitor2: "Verbal only" },
        { feature: "Buildability assessment included", pfco: true, competitor1: "Left to contractor", competitor2: false },
      ]
    },
    {
      title: "Delivery & Format",
      rows: [
        { feature: "Branded Word document Project Readiness Report", pfco: true, competitor1: "Email or meeting notes", competitor2: "Variable" },
        { feature: "Independent of design team (fresh eyes)", pfco: true, competitor1: "Internal review only", competitor2: true },
        { feature: "Typical turnaround under 7 working days", pfco: true, competitor1: "Variable", competitor2: "Variable" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Pre-Construction Design Review | Project Readiness | PF & Co"
        description="A systematic 95-check review of your drawing package — catching clashes, gaps, and missing information on paper, not on site."
        path="/site-intelligence/pre-construction-design-review"
        jsonLd={{
          '@type': 'Product',
          name: 'Pre-Construction Design Review',
          description: 'Systematic 95-check review of your drawing package — catching clashes, gaps, and missing information.',
          brand: { '@type': 'Organization', name: 'PF & Co Construction' },
          offers: { '@type': 'Offer', price: '545', priceCurrency: 'GBP' },
        }}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <h1 className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            REVIEW
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-rose-400 font-bold mb-6 block">Site Intelligence / Product 13</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Design <br />
              <span className="text-rose-400 italic font-accent font-light">Readiness Review</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              A systematic 95-check review of your drawing package — catching clashes, gaps, and missing information on paper, not on site.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=pre-construction-design-review" className="px-10 py-5 bg-rose-600 text-white rounded-full font-bold hover:bg-rose-700 transition-all shadow-xl shadow-rose-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-rose-200" />
              </Link>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-slate-400" />
              </button>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-rose-400 font-bold mb-1">Introductory Offer</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-bold text-white">£425</span>
                  <span className="text-sm text-white/40 line-through">RRP £850</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-rose-600 rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/40">
                    <Search size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Package Status</div>
                    <div className="text-sm font-bold text-rose-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> 95-Check Verified
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Readiness Verdict</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Dimensional Coordination", score: 9, color: "bg-rose-400" },
                    { label: "Structural Integration", score: 8, color: "bg-blue-400" },
                    { label: "Drainage Coordination", score: 9, color: "bg-rose-400" },
                    { label: "Buildability Rating", score: 7, color: "bg-amber-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Review Context</div>
                  <div className="text-lg font-bold">Pre-Tender <span className="text-xs font-normal opacity-40">(Variation Mitigation)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <ClipboardCheck size={20} className="text-rose-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer 
        title="Pre-Construction Design Review"
        accentColor="rose-500"
        description="Watch our walkthrough to see how we systematically examine drawing packages across 9 categories, helping you catch clashes and missing information before they become costly variations on site."
        thumbnailUrl="https://picsum.photos/seed/review/1280/720"
        duration="3:30"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-rose-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why Problems Found on Paper Cost Less Than <br /><span className="font-accent italic font-light text-rose-600">Problems Found on Site.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                The most expensive problems are discovered during construction. A beam that clashes with drainage, a dimension mismatch — these generate variations and delays. Almost all are visible in drawings beforehand.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-rose-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-rose-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-emerald-400 italic font-accent font-light">Guaranteed.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-rose-400 hover:gap-4 transition-all relative z-10">
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
            title="Design Readiness Review"
            subtitle="What you get vs a typical ad hoc review"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Approach", "Internal Review"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK construction project management practices. PF&Co Design Review follows a systematic 95-check coordination methodology across all disciplines."
            accentColor="text-rose-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-rose-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Design Readiness Review is the smartest pre-construction step.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Pre-Construction", r: "Ideal timing", c: "Full 95-check coordination review" },
              { s: "Multi-Discipline", r: "Core use case", c: "Coordination between all consultants" },
              { s: "Pre-Tender", r: "Risk management", c: "De-risks the tender package for contractors" },
              { s: "Post-BC Comments", r: "Verification", c: "Verify BC changes are coordinated across sets" },
              { s: "Complex Extension", r: "Buildability", c: "Practical assessment of sequencing and access" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-rose-500 font-bold mb-4">Scenario 0{i+1}</div>
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
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-brand-primary text-slate-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "What drawings do you need from me?", a: "We need the full set you intend to issue for construction: architectural plans/sections, structural GA and details, drainage layout, and any specialist drawings (fire, M&E)." },
              { q: "How is this different from Building Control?", a: "Building Control checks compliance with Regulations. Our review checks coordination between disciplines — whether the beam clashes with the architect's window or drainage route." },
              { q: "What does 'CONDITIONAL' readiness mean?", a: "It means the package is substantially complete but has identified items that should be resolved before construction or during early stages. Most real projects receive this on first review." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-rose-500 font-mono text-sm">Q.</span>
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
        <div className="bg-rose-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-rose-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to De-Risk Your <br />Drawing Package?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Catch clashes, gaps, and coordination issues before they become costly on-site variations. 95 checks. Clear verdict. Prioritised action list.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact"
                className="px-12 py-6 bg-white text-rose-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Get Your Design Review
              </Link>
              <button className="px-12 py-6 bg-rose-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-rose-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </button>
              <div className="flex items-center gap-3 px-8 py-6 bg-rose-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
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

export default PreConstructionDesignReview;
