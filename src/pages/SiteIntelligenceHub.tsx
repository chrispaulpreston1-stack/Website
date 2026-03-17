import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, ShieldAlert, BarChart3, ArrowRight, Check, X, Database, Clock, Users, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import VideoExplainer from '../components/VideoExplainer';
import { reports } from '../data/reports';

const SiteIntelligenceHub = () => {
  const [roleFilter, setRoleFilter] = useState<string>('all');
  const products = [
    {
      title: "Site Feasibility Report",
      desc: "The broadest screen. Checks 22+ planning, environmental, and ground risk constraints for any UK property address.",
      icon: <Search className="text-teal-500" size={32} />,
      link: "/site-intelligence/site-feasibility-report",
      accent: "border-teal-500",
      price: "595",
      rrp: "2,500",
      features: ["Planning constraints & PD rights", "Flood & drainage risk", "Heritage & conservation", "Ecology & biodiversity", "Planning Friction Score (0-100)"],
      sample: "/samples/site-feasibility-report-sample.pdf"
    },
    {
      title: "Geotechnical Desk Study",
      desc: "Deep dive into ground conditions. Analyses geology, groundwater, contamination history, and foundation risk.",
      icon: <Database className="text-amber-600" size={32} />,
      link: "/site-intelligence/geotechnical-desk-study",
      accent: "border-amber-600",
      price: "495",
      rrp: "1,500",
      features: ["BGS geological mapping", "Borehole & trial pit data", "Shrink-swell clay analysis", "Contamination risk screen", "Foundation recommendations"],
      sample: "/samples/geotechnical-desk-study-sample.pdf"
    },
    {
      title: "Flood Risk Assessment",
      desc: "Planning-ready FRA with Decision Risk Scores. Covers fluvial, surface water, groundwater, and sewer flood risk.",
      icon: <ShieldAlert className="text-blue-500" size={32} />,
      link: "/site-intelligence/flood-risk-assessment",
      accent: "border-blue-500",
      price: "375",
      rrp: "600",
      features: ["4 Decision Risk Scores (0-10)", "Climate change allowances", "Sequential & Exception Tests", "Mitigation & SuDS strategy", "Planning-ready format"],
      sample: null
    }
  ];

  const stats = [
    { num: "300+", label: "Projects Delivered" },
    { num: "60", label: "Authoritative Data Sources" },
    { num: "48hr", label: "Typical Turnaround" }
  ];

  return (
    <div className="pt-32 pb-24">
      <PageSEO
        title="PF & Co Site Intelligence | Data-Driven Pre-Construction Screening | PF & Co"
        description="Interrogate 60 authoritative data sources to identify planning, flood, and ground risks before you commit to a site."
        path="/site-intelligence"
        jsonLd={[
          {
            '@type': 'Service',
            name: 'Site Intelligence',
            description: 'Data-driven pre-construction screening interrogating 60 authoritative data sources to identify planning, flood, and ground risks.',
            provider: { '@type': 'Organization', name: 'PF & Co Site Intelligence' },
            areaServed: ['England', 'Wales', 'UK'],
            serviceType: 'Site Intelligence',
          },
          {
            '@type': 'VideoObject',
            name: 'PF & Co Site Intelligence — The Complete Process',
            description: 'See the complete Site Intelligence process from order to delivery. Learn how we interrogate 60 authoritative data sources and translate raw data into engineering decisions for planning, flood, and ground risk screening.',
            thumbnailUrl: 'https://www.pfandco.co.uk/videos/site-intelligence-demo-thumb.jpg',
            contentUrl: 'https://www.pfandco.co.uk/videos/site-intelligence-demo.mp4',
            uploadDate: '2026-03-02',
            duration: 'PT2M32S',
            publisher: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfandco.co.uk' },
          }
        ]}
      />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 mb-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block"
            >
              PF & Co Site Intelligence — A PF & Co Holdings Product
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-bold mb-4 leading-[1.1]"
            >
              Get the Data <span className="text-brand-accent">Before the Market Does</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-2xl font-bold text-brand-accent mb-6"
            >
              22 Reports. 60 Data Sources. 48 Hours.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-brand-primary/60 leading-relaxed mb-8"
            >
              Planning-ready reports for any UK site. From constraint screening to viability appraisals, every document is AI-generated, human-verified, and submission-ready. Buy individually, as a bundle, or subscribe from £399/mo.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/order-report" className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all flex items-center gap-2">
                Order Reports <ArrowRight size={20} />
              </Link>
              <Link to="/subscriptions" className="px-8 py-4 bg-brand-surface border border-brand-primary/5 rounded-xl font-bold hover:bg-brand-primary/5 transition-all flex items-center gap-2">
                View Subscriptions
              </Link>
              <div className="flex items-center gap-2 px-6 py-4 bg-brand-surface border border-brand-primary/5 rounded-xl text-sm font-bold">
                <Clock size={18} className="text-brand-accent" />
                48hr Turnaround
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative aspect-square"
          >
            <div className="absolute inset-0 bg-brand-accent/5 rounded-[4rem] rotate-3" />
            <div className="absolute inset-0 bg-brand-primary/5 rounded-[4rem] -rotate-3" />
            <div className="relative h-full w-full bg-white border border-brand-primary/10 rounded-[4rem] shadow-2xl overflow-hidden p-12 flex flex-col justify-center">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-accent to-transparent animate-scan" />

              <div className="space-y-8 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center text-brand-accent">
                    <Search size={24} />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase tracking-widest text-brand-primary/40">Scanning Site</div>
                    <div className="font-bold">GU21 4LY, Woking</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Planning Constraints", val: "High Friction", color: "text-red-500" },
                    { label: "Flood Risk", val: "Zone 1 (Low)", color: "text-green-500" },
                    { label: "Ground Stability", val: "Clay (Moderate)", color: "text-amber-500" }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + (i * 0.1) }}
                      className="flex justify-between items-center p-4 bg-brand-surface rounded-2xl border border-brand-primary/5"
                    >
                      <span className="text-sm font-medium">{item.label}</span>
                      <span className={`text-sm font-bold ${item.color}`}>{item.val}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="pt-4 border-t border-brand-primary/5">
                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-widest text-brand-primary/40">Intelligence Score</div>
                      <div className="text-4xl font-bold">84<span className="text-sm text-brand-primary/40">/100</span></div>
                    </div>
                    <div className="text-xs font-bold text-brand-accent">Analysis Complete</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product Cards — replaced by catalog below, keeping section wrapper */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-6 tracking-tighter">Our <span className="text-brand-accent italic font-serif font-light">Reports.</span></h2>
          <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">24 report types. Filter by who you are to see what's most relevant.</p>
        </div>

          {/* Role Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { id: 'all', label: 'All Reports' },
              { id: 'developer', label: 'Developer' },
              { id: 'architect', label: 'Architect' },
              { id: 'land-buyer', label: 'Land Buyer' },
              { id: 'homeowner', label: 'Homeowner' },
              { id: 'lender', label: 'Lender / Investor' },
            ].map(role => (
              <button
                key={role.id}
                onClick={() => setRoleFilter(role.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold transition-all ${roleFilter === role.id ? 'bg-brand-primary text-white shadow-lg' : 'bg-white text-brand-primary/60 border border-brand-primary/10 hover:border-brand-accent/30'}`}
              >
                {role.label}
              </button>
            ))}
          </div>

          {/* Report Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(() => {
              const roleReports: Record<string, string[]> = {
                'all': reports.filter(r => r.stripePrice > 0).map(r => r.slug),
                'developer': ['site-acquisition-intelligence', 'development-finance-summary', 'site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment', 'phase-1-contamination', 'planning-statement', 'design-and-access-statement', 'feasibility-study', 'cil-liability-assessment', 'biodiversity-net-gain', 'energy-statement', 'construction-management-plan', 'pre-construction-design-review'],
                'architect': ['site-feasibility-report', 'planning-statement', 'design-and-access-statement', 'heritage-impact-assessment', 'biodiversity-net-gain', 'energy-statement', 'transport-statement', 'parking-survey', 'tree-survey', 'noise-impact-assessment', 'daylight-sunlight-assessment', 'air-quality-screening'],
                'land-buyer': ['site-acquisition-intelligence', 'development-finance-summary', 'site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment', 'feasibility-study', 'cil-liability-assessment'],
                'homeowner': ['site-feasibility-report', 'geotechnical-desk-study', 'flood-risk-assessment', 'planning-statement', 'design-and-access-statement', 'construction-management-plan', 'pre-construction-design-review'],
                'lender': ['site-acquisition-intelligence', 'development-finance-summary', 'site-feasibility-report', 'flood-risk-assessment', 'geotechnical-desk-study', 'phase-1-contamination'],
              };

              const categoryColors: Record<string, string> = {
                'core': 'border-t-teal-500',
                'planning-strategy': 'border-t-violet-500',
                'environmental-ecology': 'border-t-emerald-500',
                'specialist-surveys': 'border-t-blue-500',
                'construction-readiness': 'border-t-amber-500',
              };

              const categoryLabels: Record<string, string> = {
                'core': 'Core Intelligence',
                'planning-strategy': 'Planning & Strategy',
                'environmental-ecology': 'Environmental',
                'specialist-surveys': 'Specialist',
                'construction-readiness': 'Construction',
              };

              const roleLabels: Record<string, string> = {
                'developer': 'Developers',
                'architect': 'Architects',
                'land-buyer': 'Land Buyers',
                'homeowner': 'Homeowners',
                'lender': 'Lenders',
              };

              function bestFor(slug: string): string[] {
                return Object.entries(roleReports)
                  .filter(([key, slugs]) => key !== 'all' && slugs.includes(slug))
                  .map(([key]) => roleLabels[key] || key);
              }

              const slugs = roleReports[roleFilter] || roleReports['all'];
              const filtered = reports.filter(r => slugs.includes(r.slug) && r.stripePrice > 0);

              return filtered.map((report, i) => (
                <motion.div
                  key={report.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                >
                  <Link to={report.path} className={`block p-8 rounded-2xl bg-white border border-brand-primary/5 border-t-4 ${categoryColors[report.category] || 'border-t-brand-accent'} hover:shadow-lg transition-all group h-full`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/30">{categoryLabels[report.category] || report.category}</span>
                      <span className="text-2xl font-bold text-brand-accent">£{report.stripePrice.toLocaleString()}</span>
                    </div>
                    <h4 className="text-lg font-bold text-brand-primary mb-3 group-hover:text-brand-accent transition-colors">{report.name}</h4>
                    <p className="text-brand-primary/50 leading-relaxed mb-3">{report.description}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {bestFor(report.slug).map(role => (
                        <span key={role} className="text-[10px] font-bold uppercase tracking-wider bg-brand-primary/5 text-brand-primary/40 px-2.5 py-1 rounded-full">{role}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-brand-primary/5">
                      <div className="flex items-center gap-2">
                        <Clock size={14} className="text-brand-primary/30" />
                        <span className="text-xs text-brand-primary/40 font-bold">{report.turnaround}</span>
                      </div>
                      <span className="text-sm font-bold text-brand-accent flex items-center gap-1 group-hover:gap-2 transition-all">
                        View <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ));
            })()}
          </div>

          <div className="text-center mt-12">
            <Link to="/order-report" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:scale-105 transition-transform">
              Order Reports <ArrowRight size={18} />
            </Link>
          </div>

        {/* Bundle Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-brand-primary rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl mt-32"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/10 blur-[100px] -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent text-brand-primary text-[10px] font-bold uppercase tracking-widest mb-6">
                <Zap size={14} />
                Maximum Intelligence Bundle
              </div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                The Triple Threat <br />
                <span className="text-brand-accent italic font-serif font-light">Site Screen.</span>
              </h2>
              <p className="text-white/60 text-lg mb-8 font-light max-w-xl">
                Get the complete picture. We combine all three reports into a single, comprehensive site intelligence dossier. Eliminate planning, ground, and flood risk in one go.
              </p>
              <ul className="grid md:grid-cols-2 gap-4 mb-10">
                {["Site Feasibility Report", "Geotechnical Desk Study", "Flood Risk Assessment", "Integrated Risk Summary"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-white/80">
                    <Check size={18} className="text-brand-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2.5rem] p-10 flex flex-col items-center text-center">
              <div className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Bundle Price</div>
              <div className="flex flex-col sm:flex-row items-center sm:items-baseline justify-center gap-2 sm:gap-3 mb-2">
                <span className="text-5xl md:text-6xl font-bold text-white">£995</span>
                <span className="text-lg md:text-xl text-white/40 line-through">RRP £4,600</span>
              </div>
              <div className="text-brand-accent text-xs md:text-sm font-bold mb-8 italic">Save £3,605 (Early Access)</div>

              <Link
                to="/order-report?report=triple-threat"
                className="w-full py-5 bg-brand-accent text-brand-primary rounded-2xl font-bold text-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-accent/20"
              >
                Order Triple Threat — Early Access <Zap size={20} />
              </Link>
              <a href="/samples/site-feasibility-report-sample.pdf" target="_blank" rel="noopener noreferrer" className="w-full py-4 mt-3 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-2xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2">
                Sample Report <FileText size={16} />
              </a>
              <p className="mt-4 text-xs text-white/40 font-light italic">
                Early Access pricing is temporary.
              </p>
              <p className="mt-2 text-xs text-white/40 font-light">
                Includes all 3 reports delivered within 48-72 hours.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* The PF&Co Advantage - Condensed Comparison */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 tracking-tight">Why Our Reports <span className="text-brand-accent italic font-serif font-light">Win.</span></h2>
          <p className="text-brand-primary/60 max-w-2xl mx-auto font-light text-lg">
            We don't just provide data; we provide engineering interpretation. See how we compare to traditional consultants and automated searches.
          </p>
        </div>

        <div className="bg-brand-surface border border-brand-primary/5 rounded-[4rem] p-8 md:p-20 overflow-hidden shadow-2xl shadow-brand-primary/5">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="border-b border-brand-primary/10">
                  <th className="py-8 font-mono text-xs uppercase tracking-[0.3em] text-brand-primary/60 border-b border-brand-primary/10 w-[40%]">Capability</th>
                  <th className="py-8 font-mono text-xs uppercase tracking-[0.3em] text-brand-primary/60 text-center border-b border-brand-primary/10 w-[20%]">Traditional Consultant</th>
                  <th className="py-8 font-mono text-xs uppercase tracking-[0.3em] text-brand-primary/60 text-center border-b border-brand-primary/10 w-[20%]">Online Map Check</th>
                  <th className="py-8 font-mono text-xs uppercase tracking-[0.3em] text-brand-accent text-center bg-brand-primary text-white rounded-t-3xl border-b border-brand-primary/10 w-[20%]">Site Intelligence</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { cap: "Planning constraint analysis", trad: true, map: false, si: true },
                  { cap: "Flood risk (all sources)", trad: true, map: "Partial", si: true },
                  { cap: "Ground conditions & geology", trad: true, map: false, si: true },
                  { cap: "Heritage & ecology screening", trad: "Sometimes", map: false, si: true },
                  { cap: "Engineer interpretation", trad: true, map: false, si: true },
                  { cap: "Turnaround", trad: "2-4 weeks", map: "Instant", si: "48 hours" },
                  { cap: "Typical cost", trad: "£1,500-£5,000+", map: "Free-£50", si: "From £245" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-brand-primary/5 hover:bg-brand-primary/5 transition-colors group">
                    <td className="py-6 font-bold text-brand-primary/80 group-hover:text-brand-primary transition-colors">{row.cap}</td>
                    <td className="py-6 text-center text-brand-primary/60">
                      <div className="flex justify-center">
                        {row.trad === true ? <Check size={24} strokeWidth={3} className="text-green-600" /> : row.trad === false ? <X size={24} strokeWidth={3} className="text-red-400" /> : <span className="text-sm font-bold italic opacity-80">{row.trad}</span>}
                      </div>
                    </td>
                    <td className="py-6 text-center text-brand-primary/60">
                      <div className="flex justify-center">
                        {row.map === true ? <Check size={24} strokeWidth={3} className="text-green-600" /> : row.map === false ? <X size={24} strokeWidth={3} className="text-red-400" /> : <span className="text-sm font-bold italic opacity-80">{row.map}</span>}
                      </div>
                    </td>
                    <td className="py-6 text-center font-bold text-brand-primary bg-brand-primary/5 border-x border-brand-primary/5">
                      <div className="flex justify-center">
                        {row.si === true ? <Check size={24} strokeWidth={3} className="text-brand-accent" /> : <span className="text-sm font-bold italic text-brand-accent">{row.si}</span>}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>
      </section>

      {/* Human Safety Leap */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-brand-surface border border-brand-accent/20 rounded-[3rem] p-12 lg:p-16 relative overflow-hidden">
          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-brand-primary mb-4">Human Verified. Every Time.</h2>
              <p className="text-brand-primary/60 leading-relaxed">
                Every report passes through our multi-stage QA pipeline. AI generates the intelligence. Qualified engineers verify it. You get submission-ready documents built to withstand scrutiny.
              </p>
              <Link to="/ai-compliance" className="inline-flex items-center gap-2 text-brand-accent font-bold mt-6 hover:gap-4 transition-all">
                See our AI Standards <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200"
                alt="Professional reviewing technical documents at desk"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-primary rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4 text-white">Ready to Screen Your Site?</h2>
            <p className="text-white/60 text-lg mb-8 max-w-2xl mx-auto">
              24 report types. 60 data sources. 48-hour turnaround. From £245.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/order-report"
                className="inline-flex items-center gap-2 px-8 py-4 bg-brand-accent text-brand-primary rounded-xl font-bold hover:scale-105 transition-all"
              >
                Order Reports <ArrowRight size={20} />
              </Link>
              <Link
                to="/subscriptions"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl font-bold hover:bg-white/20 transition-all"
              >
                Subscribe from £399/mo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteIntelligenceHub;
