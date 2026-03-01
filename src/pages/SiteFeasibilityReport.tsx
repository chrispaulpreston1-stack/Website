import { motion } from 'motion/react';
import { Search, Check, ArrowRight, HelpCircle, AlertTriangle, Building2, Map, Zap, Clock, X, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';

const SiteFeasibilityReport = () => {
  const features = [
    { title: "Planning Constraints", desc: "Use Class assessment, Permitted Development rights analysis, local plan policy review, and Article 4 directions." },
    { title: "Flood & Drainage Risk", desc: "Environment Agency flood zones, surface water flood risk, reservoir inundation mapping, and SuDS requirements." },
    { title: "Ground Conditions", desc: "BGS geology and borehole records, shrink-swell clay classification, and soil drainage characteristics." },
    { title: "Heritage & Conservation", desc: "Listed buildings, conservation areas, scheduled monuments, and registered parks and gardens." },
    { title: "Ecology & Biodiversity", desc: "SSSIs, SPAs, SACs, priority habitats, ancient woodland, and protected species indicators." },
    { title: "UXO & Contamination", desc: "Historic land use assessment, contamination indicators, and unexploded ordnance (UXO) risk screening." },
    { title: "Planning Friction Score", desc: "A 0–100 score with traffic-light rating that quantifies how much resistance your proposal is likely to face." },
    { title: "Buildability Rating", desc: "A 1–10 rating assessing the practical difficulty and cost impact of building on your site." }
  ];

  const comparisonCategories = [
    {
      title: "Planning Constraint Screening",
      rows: [
        { feature: "Conservation area check", pfco: true, competitor1: true, competitor2: true },
        { feature: "Listed building check (property + adjacent setting)", pfco: true, competitor1: true, competitor2: "Property only" },
        { feature: "Green Belt assessment", pfco: true, competitor1: true, competitor2: false },
        { feature: "AONB / National Park", pfco: true, competitor1: true, competitor2: true },
        { feature: "Article 4 Direction", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Tree Preservation Orders", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Flood zone classification", pfco: true, competitor1: "Basic", competitor2: true },
        { feature: "Registered parks, gardens & battlefields", pfco: true, competitor1: false, competitor2: false },
        { feature: "Heritage at Risk Register", pfco: true, competitor1: false, competitor2: false },
        { feature: "UXO risk indicators", pfco: true, competitor1: false, competitor2: false },
        { feature: "Mining risk assessment", pfco: true, competitor1: false, competitor2: true },
        { feature: "22+ constraint categories in one report", pfco: true, competitor1: "6-8 typical", competitor2: "10 searches" },
      ]
    },
    {
      title: "Ecology & Biodiversity",
      rows: [
        { feature: "SSSI proximity & Impact Risk Zone check", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "SPA / SAC / Ramsar site proximity", pfco: true, competitor1: false, competitor2: false },
        { feature: "Priority Habitat Inventory", pfco: true, competitor1: false, competitor2: false },
        { feature: "Ancient woodland proximity", pfco: true, competitor1: false, competitor2: false },
        { feature: "Protected species records (NBN Atlas)", pfco: true, competitor1: false, competitor2: false },
        { feature: "Bat roost risk assessment", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Permitted Development Analysis",
      rows: [
        { feature: "PD eligibility check (GPDO)", pfco: true, competitor1: true, competitor2: false },
        { feature: "PD dimensional limits vs your proposal", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Cumulative PD check (previous extensions)", pfco: true, competitor1: false, competitor2: false },
        { feature: "Planning route determination with fees & timescales", pfco: true, competitor1: "Route only", competitor2: false },
        { feature: "Multiple proposal analysis (e.g. extension + loft)", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Buildability & Engineering",
      rows: [
        { feature: "Ground conditions & shrink-swell assessment", pfco: true, competitor1: false, competitor2: "Data only" },
        { feature: "Nearest borehole data (BGS)", pfco: true, competitor1: false, competitor2: false },
        { feature: "Soil type & drainage permeability", pfco: true, competitor1: false, competitor2: false },
        { feature: "Radon risk band & Building Regs implications", pfco: true, competitor1: false, competitor2: true },
        { feature: "Site access assessment (road width, crane, skip)", pfco: true, competitor1: false, competitor2: false },
        { feature: "Party wall assessment (Section 1/2/6 triggers)", pfco: true, competitor1: false, competitor2: false },
        { feature: "SuDS & drainage viability", pfco: true, competitor1: false, competitor2: false },
        { feature: "Asbestos risk indicator", pfco: true, competitor1: false, competitor2: false },
        { feature: "Tree/foundation interaction (NHBC 4.2)", pfco: true, competitor1: false, competitor2: false },
      ]
    },
    {
      title: "Scoring & Decision Support",
      rows: [
        { feature: "Quantified Planning Friction Score (0-100)", pfco: true, competitor1: false, competitor2: false },
        { feature: "Quantified Buildability Rating", pfco: true, competitor1: false, competitor2: false },
        { feature: "Traffic-light risk ratings on cover page", pfco: true, competitor1: false, competitor2: false },
        { feature: "Formal risk register with programme impact", pfco: true, competitor1: false, competitor2: false },
        { feature: "Alternative approaches with friction comparison", pfco: true, competitor1: false, competitor2: false },
        { feature: "Cost risk indicators", pfco: true, competitor1: false, competitor2: false },
        { feature: "How to Read This Report client guide", pfco: true, competitor1: false, competitor2: false },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <Helmet>
        <title>Site Feasibility Report | Pre-Construction Screening | PF & Co</title>
        <meta name="description" content="A data-driven pre-construction screening report checking 22+ planning, environmental, and ground risk constraints before you commit." />
      </Helmet>

      {/* SaaS Style Hero */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/50 -skew-x-6 translate-x-24" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-700 text-[10px] font-bold uppercase tracking-widest mb-8">
              <Zap size={12} />
              Pre-Construction Screening
            </div>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter text-brand-primary">
              Site <br />
              <span className="text-teal-600">Feasibility.</span>
            </h1>
            <p className="text-xl text-brand-primary/60 leading-relaxed mb-10 max-w-lg font-light">
              The broadest screen available. We interrogate 22+ planning, environmental, and ground risk constraints for any UK property address in 48 hours.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=site-feasibility" className="px-10 py-5 bg-teal-600 text-white rounded-2xl font-bold hover:bg-teal-700 transition-all shadow-xl shadow-teal-600/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-teal-200" />
              </Link>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-teal-600 border border-teal-100 rounded-2xl font-bold hover:bg-teal-50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-teal-400" />
              </button>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-teal-600 font-bold mb-1">Introductory Offer</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-bold text-brand-primary">£297</span>
                  <span className="text-sm text-brand-primary/40 line-through">RRP £795</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="relative"
          >
            <div className="bg-white rounded-[3rem] shadow-2xl border border-teal-100 p-1 overflow-hidden">
              <div className="bg-brand-surface rounded-[2.8rem] p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-teal-500 to-transparent animate-scan" />
                
                <div className="flex justify-between items-center mb-12">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-teal-600 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-teal-600/30">SFR</div>
                    <div className="font-bold text-brand-primary">Planning Friction</div>
                  </div>
                  <div className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-[10px] font-bold uppercase tracking-widest">Moderate Risk</div>
                </div>

                <div className="flex flex-col items-center justify-center py-10 border-y border-teal-100/50 mb-10">
                  <div className="text-8xl font-bold text-brand-primary mb-2">68</div>
                  <div className="text-xs font-mono uppercase tracking-[0.3em] text-brand-primary/40">Friction Score</div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Flood Zone 2", status: "Alert", color: "text-red-500", icon: <AlertTriangle size={14} /> },
                    { label: "Conservation Area", status: "Present", color: "text-amber-500", icon: <Building2 size={14} /> },
                    { label: "Green Belt", status: "Clear", color: "text-green-500", icon: <Map size={14} /> }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-4 bg-white rounded-2xl border border-teal-50 shadow-sm">
                      <div className="flex items-center gap-3">
                        <div className={`${item.color} opacity-60`}>{item.icon}</div>
                        <span className="text-sm font-bold text-brand-primary/70">{item.label}</span>
                      </div>
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${item.color}`}>{item.status}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer 
        title="Site Feasibility Report"
        accentColor="teal-500"
        description="Watch our 2-minute walkthrough to see how we analyze 22+ planning and environmental constraints to give you a definitive Planning Friction Score."
        thumbnailUrl="https://picsum.photos/seed/planning/1280/720"
      />

      {/* Feature Grid - Brutalist Editorial */}
      <section className="py-32 bg-brand-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.4em] text-teal-400 font-bold mb-4 block">The Scope</span>
              <h2 className="text-5xl font-bold mb-6 tracking-tighter leading-none">22+ Constraints. <br /><span className="text-teal-400 italic font-serif font-light">One Definitive Report.</span></h2>
            </div>
            <p className="text-white/40 text-lg max-w-xs font-light">We interrogate the data so you don't have to. Every report is reviewed by an engineer.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10 rounded-[2rem] overflow-hidden">
            {features.map((f, i) => (
              <div key={i} className="p-10 bg-brand-primary hover:bg-white/5 transition-colors min-h-[300px] flex flex-col">
                <div className="text-4xl font-bold text-teal-400/20 mb-8">0{i+1}</div>
                <h4 className="text-xl font-bold mb-4">{f.title}</h4>
                <p className="text-sm text-white/50 leading-relaxed font-light">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <ComparisonTable 
            title="Site Feasibility Report"
            subtitle="What you get vs a typical planning consultant or automated data search"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Planning Consultant", "Groundsure / Envirocheck"]}
            categories={comparisonCategories}
            footerNote="Comparison based on publicly available product information from Groundsure Avista, Landmark Envirocheck, and typical UK planning consultancy appraisals. Features may vary by provider and product tier. PF&Co Site Feasibility Report checks 22+ constraint categories from 21 authoritative data sources."
            accentColor="text-teal-500"
          />
        </div>
      </section>

      {/* Data Sources - Editorial List */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-8 tracking-tighter">Authoritative <br /><span className="text-teal-600 italic font-serif font-light">Data Sources.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                We don't use "open source" scrapers. We query the same databases used by local authorities, insurers, and major developers.
              </p>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  "British Geological Survey",
                  "Environment Agency",
                  "Historic England NHLE",
                  "Natural England",
                  "Ordnance Survey",
                  "DEFRA MAGIC",
                  "Planning Portal",
                  "EPC Register"
                ].map((source, i) => (
                  <div key={i} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 bg-teal-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-sm font-bold text-brand-primary/70">{source}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-square bg-brand-primary rounded-[3rem] p-12 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 opacity-10 engineering-grid" />
              <div className="relative z-10 text-center">
                <div className="text-8xl font-bold text-teal-400 mb-4">15+</div>
                <div className="text-xs font-mono uppercase tracking-[0.4em] text-white/40">Real-Time Connections</div>
              </div>
              <div className="absolute inset-0 border-[20px] border-white/5 rounded-[3rem]" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Minimal SaaS Style */}
      <section className="py-32 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center tracking-tighter">Common <span className="text-teal-600 italic font-serif font-light">Questions.</span></h2>
          <div className="space-y-8">
            {[
              { q: "Is this the same as a planning application?", a: "No. A Site Feasibility Report is a pre-planning check — it identifies constraints and risks before you submit. It informs your planning strategy but does not replace the application itself." },
              { q: "Do I still need a planning consultant?", a: "The report informs strategy but does not replace the advice of a planning consultant. It gives your planner a comprehensive constraint picture to work from." },
              { q: "What if my site has significant constraints?", a: "The report identifies constraints and suggests mitigation routes. Some constraints are deal-breakers, but most can be managed with the right approach and design adjustments." }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-3xl bg-brand-surface border border-brand-primary/5">
                <h4 className="text-lg font-bold mb-4 flex items-center gap-3">
                  <HelpCircle size={20} className="text-teal-600" />
                  {item.q}
                </h4>
                <p className="text-brand-primary/60 text-sm leading-relaxed font-light">
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - SaaS High Conversion */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-teal-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-teal-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[120px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Screen Your Site <br />in 48 Hours.</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Don't commit to a site or a design without knowing the constraints. Get a definitive feasibility screen for a fixed fee.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact"
                className="px-12 py-6 bg-brand-primary text-white rounded-2xl font-bold hover:scale-105 transition-all shadow-xl"
              >
                Request a Report
              </Link>
              <button className="px-12 py-6 bg-teal-700/50 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold hover:bg-teal-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </button>
              <div className="flex items-center gap-3 px-8 py-6 bg-teal-700/50 backdrop-blur-md rounded-2xl border border-white/10 text-sm font-bold">
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

export default SiteFeasibilityReport;
