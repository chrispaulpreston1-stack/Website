import { motion } from 'motion/react';
import { ShieldAlert, Check, ArrowRight, Info, HelpCircle, Clock, X, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';

const FloodRiskAssessment = () => {
  const features = [
    { title: "4 Decision Risk Scores", desc: "Planning Risk, Technical Mitigation Complexity, Cost Exposure, and Programme Risk — each rated 0–10." },
    { title: "Fluvial Flood Assessment", desc: "EA flood zone classification, historic flood event analysis, and river catchment context." },
    { title: "Surface Water Analysis", desc: "Surface water flow paths, ponding areas, and drainage capacity assessment." },
    { title: "Groundwater & Sewer Risk", desc: "Aquifer levels, groundwater emergence potential, and sewer surcharge data." },
    { title: "Sequential & Exception Tests", desc: "Planning policy compliance assessment including vulnerability classification." },
    { title: "Climate Change Allowances", desc: "Catchment-specific uplift factors applied to flood levels, aligned with NPPF (Dec 2024)." },
    { title: "Mitigation Strategy", desc: "SuDS design principles, finished floor level recommendations, and flood resilience measures." },
    { title: "Insurance & Mortgage Reality", desc: "Flood Re eligibility assessment, lender requirements, and valuation impact." },
    { title: "Flood Zone Maps", desc: "EA-sourced flood zone maps embedded directly in the report for clear visual reference." }
  ];

  const comparisonCategories = [
    {
      title: "Decision Support (Front of Report)",
      rows: [
        { feature: "1-page Planning Verdict with traffic-light ratings", pfco: true, competitor1: false, competitor2: false },
        { feature: "4 Decision Risk Scores (Planning, Technical, Cost, Programme)", pfco: true, competitor1: false, competitor2: false },
        { feature: "Feasibility assessment with stop/proceed logic", pfco: true, competitor1: false, competitor2: false },
        { feature: "What kills planning honest red flags", pfco: true, competitor1: false, competitor2: false },
        { feature: "Typical planner concerns table with pre-written responses", pfco: true, competitor1: false, competitor2: false },
        { feature: "How to Read This Report client guide", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Flood Sources Assessed",
      rows: [
        { feature: "Fluvial (river) flood risk", pfco: true, competitor1: true, competitor2: true },
        { feature: "Tidal & coastal flood risk", pfco: true, competitor1: true, competitor2: "Sometimes" },
        { feature: "Surface water (pluvial) flood risk", pfco: true, competitor1: true, competitor2: true },
        { feature: "Groundwater flood risk", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Sewer flood risk", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Reservoir flood risk (dry & wet day)", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Artificial sources (canals, raised infrastructure)", pfco: true, competitor1: false, competitor2: false },
        { feature: "All 7 flood sources in combined risk matrix", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Hydrological Data & Analysis",
      rows: [
        { feature: "NRFA gauging station analysis (QMED, Q100, AMAX)", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "EA flood monitoring station data", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Historical flood events (EA records since 1946)", pfco: true, competitor1: true, competitor2: "Summary" },
        { feature: "Flood Hazard Rating calculation (HR formula)", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "EA flood defence condition assessment (AIMS)", pfco: true, competitor1: "Sometimes", competitor2: false },
      ]
    },
    {
      title: "Climate Change Assessment",
      rows: [
        { feature: "Catchment-specific climate change allowances", pfco: true, competitor1: "Often national", competitor2: false },
        { feature: "3 epochs x 3 percentiles peak flow table", pfco: true, competitor1: false, competitor2: false },
        { feature: "Future flood zone projection (2080s)", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Climate Change Vulnerability rating", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Surface Water Drainage Strategy",
      rows: [
        { feature: "SuDS National Standards 2025 compliance (S1-S7)", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Greenfield runoff rate calculation (IH124)", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "FEH statistical cross-check", pfco: true, competitor1: false, competitor2: false },
        { feature: "Infiltration viability assessment (geology-based)", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "SuDS Viability headline rating", pfco: true, competitor1: false, competitor2: false },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Flood Risk Assessment | Planning-Ready Reports | PF & Co"
        description="Tier 1 Desktop Flood Risk Assessment evaluating fluvial, surface water, groundwater, and sewer flood risk with Decision Risk Scores."
        path="/site-intelligence/flood-risk-assessment"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Flood Risk Assessment',
            description: 'Tier 1 Desktop Flood Risk Assessment evaluating fluvial, surface water, groundwater, and sewer flood risk.',
            brand: { '@type': 'Organization', name: 'PF & Co Construction' },
            offers: { '@type': 'Offer', price: '375', priceCurrency: 'GBP' },
          },
          {
            '@type': 'VideoObject',
            name: 'Flood Risk Assessment — What\'s Inside Your Report',
            description: 'A walkthrough of the PF & Co Flood Risk Assessment, showing how we translate complex hydrological data into 4 Decision Risk Scores to help you understand planning risk and mitigation complexity.',
            thumbnailUrl: 'https://www.pfcoconstruction.co.uk/videos/fra-demo-thumb.jpg',
            contentUrl: 'https://www.pfcoconstruction.co.uk/videos/fra-demo.mp4',
            uploadDate: '2026-03-02',
            duration: 'PT1M31S',
            publisher: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfcoconstruction.co.uk' },
          }
        ]}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            FLOOD
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-400 font-bold mb-6 block">Site Intelligence / Product 03</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Flood Risk <br />
              <span className="text-blue-400 italic font-accent font-light">Assessment</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              A Tier 1 Desktop assessment that translates complex hydrological data into engineering decisions. Planning-ready, data-driven, and delivered in 48 hours.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=flood-risk-assessment" className="px-10 py-5 bg-blue-500 text-white rounded-full font-bold hover:bg-blue-600 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-blue-200" />
              </Link>
              <a href="/samples/flood-risk-assessment-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-blue-400" />
              </a>
              <div className="flex flex-col">
                <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent text-[10px] uppercase tracking-widest font-bold mb-3 self-start">
                  Early Access Pricing - 40% off all reports.
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-mono font-bold text-white">Early Access: £375</span>
                  <span className="text-base text-white/50 line-through font-medium">Was £600</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/40">
                    <ShieldAlert size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Report Status</div>
                    <div className="text-sm font-bold text-green-400">Ready for Planning</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Decision Risk Scores</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Planning Risk", score: 2, color: "bg-green-400" },
                    { label: "Mitigation Complexity", score: 7, color: "bg-amber-400" },
                    { label: "Cost Exposure", score: 4, color: "bg-blue-400" },
                    { label: "Programme Risk", score: 3, color: "bg-green-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Hydrological Context</div>
                  <div className="text-lg font-bold">Zone 3a <span className="text-xs font-normal opacity-60">(High Risk)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Info size={20} className="text-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer
        title="Flood Risk Assessment"
        accentColor="blue-500"
        description="Watch our walkthrough to see how we translate complex hydrological data into 4 Decision Risk Scores, helping you understand planning risk and mitigation complexity in minutes."
        thumbnailUrl="/videos/fra-demo-thumb.jpg"
        videoUrl="/videos/fra-demo.mp4"
        duration="1:31"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">What's Inside the <br /><span className="font-accent italic font-light">Intelligence</span> Report.</h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                We don't just provide maps. We provide engineering interpretation. Our reports are designed to be read by planning officers and structural engineers alike.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-blue-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-blue-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-blue-400 hover:gap-4 transition-all relative z-10">
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
            title="Flood Risk Assessment"
            subtitle="What you get vs a typical FRA consultant or budget provider"
            columns={["Feature", "PF&Co Site Intelligence", "Typical FRA Consultant", "Budget / Basic FRA"]}
            categories={comparisonCategories}
            footerNote="Comparison based on publicly available product information from GeoSmart FloodSmart, Ark Environmental, FloodPlan Reports, Urban Water, and typical UK flood risk consultancies. Features may vary by provider and product tier. PF&Co Flood Risk Assessment pulls data from 25+ free authoritative APIs and references the latest NPPF (Dec 2024), PPG (Sep 2025), SuDS National Standards (Jun 2025) and EA Standing Advice (Oct 2025)."
            accentColor="text-blue-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Five critical scenarios where a Flood Risk Assessment is mandatory for planning or finance.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Flood Zone 2/3", r: "Required for planning", c: "Full Sequential/Exception Test" },
              { s: "Surface Water", r: "Often required by LPA", c: "SuDS strategy" },
              { s: "Major Dev", r: "Always required", c: "Drainage strategy" },
              { s: "Change of Use", r: "Required if risk present", c: "Vulnerability reclassification" },
              { s: "Mortgage Query", r: "Supports applications", c: "Risk summary for insurers" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold mb-4">Scenario 0{i+1}</div>
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
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-brand-primary">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "Do I need an FRA for my extension?", a: "If your site is in Flood Zone 2 or 3, or if your local planning authority has identified surface water flood risk, you will typically need an FRA. Even Zone 1 sites may require one if there is recorded surface water flooding." },
              { q: "Is this a Tier 2 FRA?", a: "This is a Tier 1 Desktop FRA based on published data and engineering interpretation. It does not include hydraulic modelling. For complex sites, a Tier 2 assessment with detailed modelling may be recommended." },
              { q: "Will this satisfy my planning officer?", a: "The report is structured for planning submission and addresses the Sequential Test, Exception Test, and NPPF requirements. However, some LPAs may require additional detail depending on site complexity." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-blue-500 font-mono text-sm">Q.</span>
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
        <div className="bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to Screen <br />Your Site?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Send us the property address and we'll provide a site-specific hydrological risk profile typically within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact"
                className="px-12 py-6 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Request a Quote
              </Link>
              <a href="/samples/flood-risk-assessment-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-blue-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-blue-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
              <div className="flex items-center gap-3 px-8 py-6 bg-blue-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
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

export default FloodRiskAssessment;
