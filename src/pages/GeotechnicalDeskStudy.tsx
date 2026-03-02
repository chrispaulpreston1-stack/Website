import { motion } from 'motion/react';
import { Database, Check, ArrowRight, HelpCircle, Clock, X, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';

const GeotechnicalDeskStudy = () => {
  const features = [
    { title: "BGS Geological Mapping", desc: "Bedrock, superficial deposits, drift geology interpretation. We identify the geological formations beneath your site." },
    { title: "Borehole & Trial Pit Data", desc: "BGS borehole records within proximity of the site, including strata logs. Historical data provides direct evidence of subsurface conditions." },
    { title: "Groundwater Assessment", desc: "Aquifer classification, water table indicators, and dewatering risk. High groundwater can affect foundation excavation." },
    { title: "Shrink–Swell Clay Analysis", desc: "Plasticity index, volume change potential, and tree proximity assessment. Critical for foundation design in South East England." },
    { title: "Contamination Risk Screen", desc: "Historical land use review, industrial activity indicators, and landfill proximity check." },
    { title: "Radon Assessment", desc: "PHE radon data for the site location, with protection measures specified if required by Building Regulations." },
    { title: "Foundation Recommendations", desc: "Preliminary foundation depth and type guidance based on desk study findings for your structural engineer." },
    { title: "Borehole Location Map", desc: "Professionally generated map showing BGS boreholes near the site, plotted with distance and depth information." }
  ];

  const comparisonCategories = [
    {
      title: "Geological Assessment",
      rows: [
        { feature: "Bedrock geology (formation, lithology, age)", pfco: true, competitor1: true, competitor2: true },
        { feature: "Superficial deposits", pfco: true, competitor1: true, competitor2: true },
        { feature: "Shrink-swell classification (BGS GeoSure A-E)", pfco: true, competitor1: true, competitor2: "Data only" },
        { feature: "BGS borehole records within 500m (mandatory)", pfco: true, competitor1: true, competitor2: "Listed, not interpreted" },
        { feature: "Supplementary boreholes 500m-1,500m", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Generated borehole location map", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Landslide, compressible ground & cavity hazard", pfco: true, competitor1: true, competitor2: "Data only" },
      ]
    },
    {
      title: "Contamination & Environmental",
      rows: [
        { feature: "Historical land use review (all OS editions)", pfco: true, competitor1: true, competitor2: true },
        { feature: "EA pollution & landfill register check", pfco: true, competitor1: true, competitor2: true },
        { feature: "UXO risk indicators", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Ground gas risk assessment", pfco: true, competitor1: true, competitor2: "Data only" },
        { feature: "Conceptual Site Model (BS 10175 / LCRM)", pfco: true, competitor1: true, competitor2: false },
        { feature: "Preliminary Risk Assessment (LCRM Stage 1)", pfco: true, competitor1: true, competitor2: false },
        { feature: "Pollutant linkage assessment tables", pfco: true, competitor1: true, competitor2: false },
      ]
    },
    {
      title: "Foundation & Engineering Guidance",
      rows: [
        { feature: "Preliminary foundation type recommendation", pfco: true, competitor1: true, competitor2: false },
        { feature: "Foundation depth range estimates", pfco: true, competitor1: true, competitor2: false },
        { feature: "Sulphate resistance class", pfco: true, competitor1: true, competitor2: false },
        { feature: "Design Hold Points table", pfco: true, competitor1: "Recommendations", competitor2: false },
        { feature: "Design Risk Register (formal, numbered)", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Laboratory testing specification (BS 5930)", pfco: true, competitor1: true, competitor2: false },
      ]
    },
    {
      title: "Commercial & Practical Guidance",
      rows: [
        { feature: "Commercial implications table", pfco: true, competitor1: false, competitor2: false },
        { feature: "Cost sensitivity summary (% increase)", pfco: true, competitor1: false, competitor2: false },
        { feature: "Contractor briefing note", pfco: true, competitor1: false, competitor2: false },
        { feature: "Easements & rights of way foundation impact", pfco: true, competitor1: false, competitor2: false },
        { feature: "How to Read This Report client guide", pfco: true, competitor1: false, competitor2: false },
      ]
    }
  ];

  return (
    <div className="pt-20 bg-[#f5f2ed]">
      <PageSEO
        title="Geotechnical Desk Study | Ground Investigation | PF & Co"
        description="Comprehensive desktop ground investigation analyzing geology, groundwater, contamination history, and foundation risk before you break ground."
        path="/site-intelligence/geotechnical-desk-study"
        jsonLd={{
          '@type': 'Product',
          name: 'Geotechnical Desk Study',
          description: 'Comprehensive desktop ground investigation analyzing geology, groundwater, contamination history, and foundation risk.',
          brand: { '@type': 'Organization', name: 'PF & Co Construction' },
          offers: { '@type': 'Offer', price: '297', priceCurrency: 'GBP' },
        }}
      />

      {/* Prestige Hero */}
      <section className="relative min-h-screen flex items-center bg-[#f5f2ed] overflow-hidden">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-amber-600/5 skew-x-12 translate-x-32" />
          <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-brand-primary/5 -skew-x-12 -translate-x-20" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-amber-700 font-bold mb-8 block">Subsurface Intelligence / Product 02</span>
            <h1 className="text-7xl md:text-8xl font-serif font-light leading-[0.9] mb-10 text-brand-primary">
              Geotechnical <br />
              <span className="italic text-amber-700">Desk Study.</span>
            </h1>
            <p className="text-xl text-brand-primary/60 leading-relaxed mb-12 max-w-xl font-light">
              A definitive desktop investigation into the geological DNA of your site. We analyze history, hydrology, and strata to eliminate ground-related risk before you break ground.
            </p>
            <div className="flex flex-wrap gap-8 items-center">
              <Link to="/order-report?report=geotechnical-desk-study" className="px-12 py-5 bg-brand-primary text-white rounded-full font-bold hover:bg-brand-primary/90 transition-all shadow-2xl flex items-center gap-2">
                Buy Now <Zap size={20} className="text-brand-accent" />
              </Link>
              <a href="/samples/geotechnical-desk-study-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-white/10 backdrop-blur-md text-brand-primary border border-brand-primary/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-amber-700" />
              </a>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-amber-700 font-bold mb-1">Introductory Offer</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-bold text-brand-primary">£297</span>
                  <span className="text-sm text-brand-primary/60 line-through">RRP £345</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="lg:col-span-5 relative"
          >
            <div className="bg-white p-2 rounded-[3rem] shadow-2xl rotate-2">
              <div className="bg-brand-surface rounded-[2.5rem] p-10 border border-brand-primary/5">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-amber-600 rounded-full flex items-center justify-center text-white">
                    <Database size={24} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/60">Ground Risk Profile</div>
                    <div className="font-bold text-brand-primary">Site ID: GDS-2024-08</div>
                  </div>
                </div>

                <div className="space-y-8">
                  {[
                    { label: "Clay Shrinkage", score: 8, color: "bg-red-500", desc: "High Volume Change Potential" },
                    { label: "Groundwater Risk", score: 3, color: "bg-blue-500", desc: "Deep Water Table" },
                    { label: "Contamination", score: 5, color: "bg-amber-500", desc: "Historical Industrial Use" },
                    { label: "Foundation Depth", score: 6, color: "bg-amber-500", desc: "Recommended: 1.5m - 2.0m" }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-primary/60">{item.label}</span>
                        <span className="text-sm font-serif italic text-amber-700">{item.score}/10</span>
                      </div>
                      <div className="h-1 bg-brand-primary/5 rounded-full overflow-hidden mb-2">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${item.score * 10}%` }}
                          transition={{ delay: 1 + (i * 0.1), duration: 1.5 }}
                          className={`h-full ${item.color}`}
                        />
                      </div>
                      <p className="text-[10px] text-brand-primary/60 font-medium">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strata Section - Vertical Editorial */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="sticky top-32">
              <span className="text-amber-700 font-bold text-sm uppercase tracking-widest mb-4 block">The Investigation</span>
              <h2 className="text-6xl font-serif font-light mb-8 leading-tight text-brand-primary">Decoding the <br /><span className="italic">Subsurface.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Our Geotechnical Desk Study is more than a data dump. It's an engineering interpretation of the ground beneath your feet. We translate geological maps and historical borehole logs into actionable foundation guidance.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="p-8 rounded-3xl bg-brand-surface border border-brand-primary/5">
                  <div className="text-4xl font-serif italic text-amber-700 mb-2">15+</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Data Sources</div>
                </div>
                <div className="p-8 rounded-3xl bg-brand-surface border border-brand-primary/5">
                  <div className="text-4xl font-serif italic text-amber-700 mb-2">48h</div>
                  <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Turnaround</div>
                </div>
              </div>
            </div>

            <div className="space-y-12">
              {features.map((f, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="group relative pl-12"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-brand-primary/10 group-hover:bg-amber-600 transition-colors" />
                  <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-brand-primary/20 group-hover:bg-amber-600 transition-colors" />
                  
                  <h4 className="text-2xl font-serif italic mb-4 text-brand-primary group-hover:text-amber-700 transition-colors">{f.title}</h4>
                  <p className="text-brand-primary/60 leading-relaxed font-light">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios - Prestige Grid */}
      <section className="py-32 bg-brand-primary text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5 engineering-grid" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-serif font-light mb-6">When Ground Risk <br /><span className="italic text-amber-500">Becomes Cost.</span></h2>
              <p className="text-white/60 text-lg font-light">Five scenarios where a desk study saves thousands in wasted foundation costs and on-site delays.</p>
            </div>
            <div className="text-right">
              <div className="text-6xl font-serif italic text-amber-500">05</div>
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-40">Critical Scenarios</div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
            {[
              { s: "Greenfield Build", r: "Unknown geology, tree root risk", c: "Foundation depth specified" },
              { s: "Clay Extension", r: "Shrink-swell risk, movement", c: "Engineered foundation design" },
              { s: "Old Industrial", r: "Contamination indicators", c: "Remediation scope defined" },
              { s: "Near Trees", r: "Root-related subsidence risk", c: "NHBC Ch4.2 depth calculation" },
              { s: "Waterlogged Site", r: "Stability & drainage concerns", c: "Retaining wall design" },
            ].map((row, i) => (
              <div key={i} className="p-8 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-[10px] font-bold mb-8 group-hover:bg-amber-500 group-hover:border-amber-500 transition-all">
                  {i+1}
                </div>
                <h4 className="text-xl font-bold mb-4">{row.s}</h4>
                <p className="text-xs text-white/60 uppercase tracking-widest font-bold mb-6">{row.r}</p>
                <p className="text-sm text-amber-500 italic font-serif">{row.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ComparisonTable 
            title="Geotechnical Desk Study"
            subtitle="What you get vs a traditional geotechnical consultancy or data report"
            columns={["Feature", "PF&Co Site Intelligence", "Traditional Geo Consultancy", "Envirocheck / Data Report"]}
            categories={comparisonCategories}
            footerNote="Comparison based on publicly available product information from Earth Environmental, Southern Testing, SOCOTEC, RSK Geosciences, Landmark Envirocheck, and typical UK geotechnical consultancies. Features may vary by provider. Traditional geotechnical consultancies typically charge £600-800+VAT and require a physical site walkover. PF&Co Geotechnical Desk Study is a desktop product consulting 18+ authoritative data sources, suitable for planning and Building Control submissions."
            accentColor="text-amber-700"
          />
        </div>
      </section>

      {/* FAQ - Editorial Serif */}
      <section className="py-32 bg-[#f5f2ed]">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-5xl font-serif font-light mb-16 text-center text-brand-primary">Technical <span className="italic">Clarifications.</span></h2>
          <div className="space-y-16">
            {[
              { q: "Is a desk study the same as a site investigation?", a: "No. A desk study is a desktop exercise using published data. A site investigation involves physical work on-site such as trial pits and boreholes. The desk study tells you whether you need a site investigation and what to test for." },
              { q: "Will Building Control accept a desk study?", a: "Building Control typically requires evidence of ground conditions for foundation approval. A desk study provides this evidence and informs the structural engineer's foundation design." },
              { q: "How does this relate to structural calculations?", a: "The desk study feeds directly into foundation design. Your structural engineer uses the geology, bearing capacity, and shrinkage data to specify foundation type, depth, and reinforcement." }
            ].map((item, i) => (
              <div key={i} className="relative">
                <div className="text-sm font-serif italic text-amber-700 mb-4">Inquiry 0{i+1}</div>
                <h4 className="text-2xl font-serif font-bold mb-6 text-brand-primary leading-tight">{item.q}</h4>
                <p className="text-brand-primary/60 leading-relaxed font-light text-lg">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Prestige Finish */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-brand-primary rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-600/20 blur-[120px]" />
          
          <div className="relative z-10">
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-amber-500 font-bold mb-8 block">Instruct Your Report</span>
            <h2 className="text-6xl md:text-7xl font-serif font-light mb-10 tracking-tight">Know Your <span className="italic text-amber-500">Ground.</span></h2>
            <p className="text-white/60 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Send us your site address and we'll provide a definitive ground risk profile typically within 24 hours. No obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <Link 
                to="/contact"
                className="px-12 py-6 bg-amber-600 text-white rounded-full font-bold hover:scale-105 transition-all shadow-2xl"
              >
                Request a Quote
              </Link>
              <a href="/samples/geotechnical-desk-study-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-white/5 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
              <div className="flex flex-col items-start">
                <span className="text-[10px] uppercase tracking-widest text-white/60 font-bold">Typical Delivery</span>
                <span className="text-lg font-serif italic text-amber-500">48 Hours</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeotechnicalDeskStudy;
