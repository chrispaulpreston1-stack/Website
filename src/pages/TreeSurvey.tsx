import { motion } from 'motion/react';
import { TreePine, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, Leaf, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';

const TreeSurvey = () => {
  const features = [
    { title: "BS 5837:2012 Compliance", desc: "Full BS 5837:2012 compliant tree survey, categorization, and retention advice." },
    { title: "Tree Constraints Plan (TCP)", desc: "Mapping of tree positions, crown spreads, and Root Protection Areas (RPAs)." },
    { title: "Arboricultural Impact Assessment", desc: "Assessment of how your proposal affects the trees and vice versa." },
    { title: "Arboricultural Method Statement", desc: "Detailed instructions for tree protection during construction work." },
    { title: "Tree Protection Plan (TPP)", desc: "Plan showing the location of protective fencing and ground protection." },
    { title: "TPO & Conservation Area Check", desc: "Verification of any Tree Preservation Orders or Conservation Area status." },
    { title: "Species & Condition Schedule", desc: "Detailed schedule of every tree surveyed, including species, height, and health." },
    { title: "Mitigation & Planting Advice", desc: "Recommendations for tree retention, removal, and replacement planting." }
  ];

  const comparisonCategories = [
    {
      title: "Survey Standards",
      rows: [
        { feature: "BS 5837:2012 compliant survey", pfco: true, competitor1: true, competitor2: "Basic check" },
        { feature: "Root Protection Area (RPA) mapping", pfco: true, competitor1: true, competitor2: false },
        { feature: "Tree categorization (A, B, C, U)", pfco: true, competitor1: true, competitor2: true },
      ]
    },
    {
      title: "Impact & Protection",
      rows: [
        { feature: "Arboricultural Impact Assessment (AIA)", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Arboricultural Method Statement (AMS)", pfco: true, competitor1: "Additional fee", competitor2: false },
        { feature: "Tree Protection Plan (TPP) included", pfco: true, competitor1: "Additional fee", competitor2: false },
      ]
    },
    {
      title: "Delivery & Format",
      rows: [
        { feature: "Branded, submission-ready Word document", pfco: true, competitor1: "PDF only", competitor2: "Email only" },
        { feature: "Fixed price with no hidden extras", pfco: true, competitor1: "Hourly typical", competitor2: "Variable" },
        { feature: "Typical turnaround under 10 working days", pfco: true, competitor1: "3–6 weeks", competitor2: "Variable" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Tree Survey | BS 5837 Arboricultural Reports | PF & Co"
        description="A professional BS 5837:2012 compliant tree survey and arboricultural impact assessment for planning applications."
        path="/site-intelligence/tree-survey"
        jsonLd={{
          '@type': 'Product',
          name: 'Tree Survey',
          description: 'BS 5837:2012 compliant tree survey and arboricultural impact assessment for planning applications.',
          brand: { '@type': 'Organization', name: 'PF & Co Construction' },
          offers: { '@type': 'Offer', price: '395', priceCurrency: 'GBP' },
        }}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            TREES
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-emerald-400 font-bold mb-6 block">Site Intelligence / Product 15</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter text-white">
              Tree <br />
              <span className="text-emerald-400 italic font-accent font-light">Survey</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              A professional BS 5837:2012 compliant tree survey and arboricultural impact assessment for planning applications.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=tree-survey" className="px-10 py-5 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-emerald-200" />
              </Link>
              <a href="/samples/tree-survey-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-emerald-400" />
              </a>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-emerald-400 font-bold mb-1">Introductory Offer</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-bold text-white">£395</span>
                  <span className="text-sm text-white/60 line-through">RRP £575</span>
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
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/40">
                    <TreePine size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Arboricultural Status</div>
                    <div className="text-sm font-bold text-emerald-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> BS 5837 Verified
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Tree Constraints</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Retention Value", score: 8, color: "bg-emerald-400" },
                    { label: "RPA Protection", score: 9, color: "bg-blue-400" },
                    { label: "Impact Mitigation", score: 8, color: "bg-emerald-400" },
                    { label: "Planting Potential", score: 7, color: "bg-amber-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Arboricultural Context</div>
                  <div className="text-lg font-bold">Mature Canopies <span className="text-xs font-normal opacity-60">(High Sensitivity)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Leaf size={20} className="text-emerald-400" />
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
              <span className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why Trees Can <br /><span className="font-accent italic font-light text-emerald-600">Stop Development.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Trees are a major planning constraint. Councils are increasingly protective of canopy cover and biodiversity. A BS 5837 tree survey is essential for any site with trees.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
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
            title="Tree Survey (BS 5837)"
            subtitle="What you get vs a typical arboricultural consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Advice"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK arboricultural consultancy practices. PF&Co Tree Survey follows BS 5837:2012 standards and includes impact assessment and protection plans."
            accentColor="text-emerald-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-emerald-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Tree Survey is essential for planning.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Trees on Site", r: "Core use case", c: "Mandatory for planning where trees are present" },
              { s: "TPO Trees", r: "High sensitivity", c: "Specialist assessment for protected trees" },
              { s: "Conservation Areas", r: "Character zones", c: "Tree protection within conservation areas" },
              { s: "Nearby Trees", r: "Off-site impact", c: "Assess impact on trees on adjacent land" },
              { s: "New Development", r: "Layout design", c: "Design around Root Protection Areas (RPAs)" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold mb-4">Scenario 0{i+1}</div>
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
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-emerald-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "What is a BS 5837 tree survey?", a: "It's the national standard for tree surveys in relation to design, demolition, and construction. It categorizes trees based on their quality and value and identifies Root Protection Areas." },
              { q: "Can I build within a Root Protection Area (RPA)?", a: "It is possible with specialist foundation design (e.g. pile and beam) and arboricultural supervision, but it requires careful justification in the impact assessment." },
              { q: "Do I need this if I'm not removing any trees?", a: "Yes. Even if you aren't removing trees, you must demonstrate that construction activity (plant, materials, scaffolding) won't damage the trees or their roots." }
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
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter text-white">Trees on Your <br />Development Site?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get the BS 5837 evidence you need. Send us the site address and we'll confirm the tree context — no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-white text-emerald-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Order Tree Survey
              </Link>
              <a href="/samples/tree-survey-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-emerald-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-emerald-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
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

export default TreeSurvey;
