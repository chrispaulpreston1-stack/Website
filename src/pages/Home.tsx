import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Search, ShieldCheck, Database, Clock, FileText, CheckCircle2, Bot, Users, BarChart3, Ruler, Construction } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { TOTAL_AGENTS } from '../data/agents';
import { TOTAL_DATA_SOURCES } from '../data/dataSources';
import { PURCHASABLE_REPORTS } from '../data/reports';

const Home = () => {
  return (
    <div className="selection:bg-brand-accent/30">
      <PageSEO
        title="PF & Co | AI-Powered Site Intelligence & Planning Reports"
        description="Planning-ready site intelligence reports for any UK site. 60+ data sources, 127 AI agents, 48-hour turnaround. From £375. Subscribe from £399/mo."
        path="/"
        jsonLd={{
          '@type': 'WebSite',
          name: 'PF & Co Site Intelligence',
          url: 'https://www.pfandco.co.uk',
          description: 'AI-powered site intelligence reports and planning evidence for development projects across England and Wales.',
          publisher: { '@type': 'Organization', name: 'PF & Co Site Intelligence' }
        }}
      />

      {/* Hero Section — Site Intelligence First */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?auto=format&fit=crop&q=80&w=2000"
            alt="Aerial view of UK development site"
            className="w-full h-full object-cover grayscale opacity-20"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface via-transparent to-brand-surface" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full mb-6">
              <Zap size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">AI-Powered Site Intelligence</span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
              Site Intelligence <br />
              <span className="text-brand-accent italic font-accent font-medium">in 48 Hours.</span>
            </h1>
            <p className="text-xl text-brand-primary/70 max-w-lg mb-10 leading-relaxed">
              Planning-ready reports for any UK site. {TOTAL_DATA_SOURCES}+ Data Sources. {TOTAL_AGENTS} AI agents. Human-verified. Appeal-ready from day one.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/order-report" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                Order Reports <ArrowRight size={18} />
              </Link>
              <Link to="/subscriptions" className="border-2 border-brand-primary/10 px-8 py-4 rounded-full font-bold hover:bg-brand-primary/5 transition-colors">
                View Subscriptions
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-4 sm:gap-8 opacity-60 flex-wrap">
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl">{PURCHASABLE_REPORTS.length}</span>
                <span className="text-[10px] uppercase tracking-widest font-mono">Report Types</span>
              </div>
              <div className="w-px h-8 bg-brand-primary/20" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl">48hr</span>
                <span className="text-[10px] uppercase tracking-widest font-mono">Turnaround</span>
              </div>
              <div className="w-px h-8 bg-brand-primary/20" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl">From £375</span>
                <span className="text-[10px] uppercase tracking-widest font-mono">Per Report</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden md:block"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200"
                alt="Aerial view of development site"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-6 rounded-2xl">
                  <p className="text-sm font-mono uppercase tracking-widest mb-2 opacity-60">Featured</p>
                  <h3 className="text-xl font-bold">Site Acquisition Report</h3>
                  <p className="text-sm text-white/60 mt-1">Should you buy this site? GDV, RLV, go/no-go.</p>
                  <Link to="/site-intelligence/site-acquisition-intelligence" className="flex items-center gap-2 mt-4 text-brand-accent">
                    <span className="text-xs font-bold">Learn More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust & Compliance Bar */}
      <section className="py-16 bg-brand-surface border-y border-brand-primary/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col items-center gap-1">
              <span className="font-display font-bold text-lg lg:text-xl text-brand-primary">{TOTAL_DATA_SOURCES}+ Data Sources</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary/60 font-mono text-center">Cross-Referenced</span>
            </div>
            <div className="w-px h-8 bg-brand-primary/10 hidden md:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-display font-bold text-lg lg:text-xl text-brand-primary">{TOTAL_AGENTS} AI Agents</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary/60 font-mono text-center">Specialised</span>
            </div>
            <div className="w-px h-8 bg-brand-primary/10 hidden md:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-display font-bold text-lg lg:text-xl text-brand-primary">Human Verified</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary/60 font-mono text-center">Engineer Approved</span>
            </div>
            <div className="w-px h-8 bg-brand-primary/10 hidden md:block" />
            <Link to="/ai-compliance" className="flex flex-col items-center gap-1 hover:opacity-80 transition-opacity">
              <span className="font-display font-bold text-lg lg:text-xl text-brand-primary">RICS AI Aligned</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary/60 font-mono text-center">AI Standard</span>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works — 3 Steps */}
      <section className="py-32 bg-brand-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">Simple Process</span>
            <h2 className="text-5xl font-bold tracking-tighter">How It <span className="italic font-accent font-light text-brand-accent">Works.</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { step: "01", title: "Enter Your Address", desc: "Any UK site. Postcode or full address. We query 60+ authoritative data sources automatically.", icon: <Search size={28} />, color: 'from-teal-500 to-cyan-600' },
              { step: "02", title: "Select Your Reports", desc: "Pick individual reports, a bundle, or subscribe for monthly credits. 25+ report types available.", icon: <FileText size={28} />, color: 'from-violet-500 to-purple-600' },
              { step: "03", title: "Receive in 48 Hours", desc: "AI-generated, human-verified, submission-ready documents. PDF and Word. Planning-grade quality.", icon: <Clock size={28} />, color: 'from-brand-accent to-amber-500' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative"
              >
                <div className="p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 shadow-lg`}>
                    {item.icon}
                  </div>
                  <div className="text-sm font-mono font-bold text-brand-accent mb-2">Step {item.step}</div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/50 leading-relaxed">{item.desc}</p>
                </div>
                {i < 2 && (
                  <div className="hidden md:flex absolute top-1/2 -right-3 w-6 h-6 bg-brand-accent rounded-full items-center justify-center z-10 shadow-lg shadow-brand-accent/30">
                    <ArrowRight size={12} className="text-brand-primary" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/plans-and-pricing" className="inline-flex items-center gap-2 text-brand-accent font-bold hover:gap-4 transition-all">
              See the full process <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Reports */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">Most Popular</span>
            <h2 className="text-5xl font-bold tracking-tighter mb-4">Our <span className="italic font-accent font-light text-brand-accent">Reports.</span></h2>
            <p className="text-brand-primary/50 max-w-2xl mx-auto text-lg font-light">
              25+ report types across 6 categories. Every one submission-ready, data-driven, and human-verified.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Site Feasibility Report', desc: '27+ constraint screening, Planning Friction Score, Buildability Rating', price: '£595', path: '/site-intelligence/site-feasibility-report', badge: 'Most Popular' },
              { name: 'Site Acquisition Report', desc: 'GDV, RLV, planning risk, go/no-go recommendation for land buyers', price: '£995', path: '/site-intelligence/site-acquisition-intelligence', badge: 'Land Buyers' },
              { name: 'Flood Risk Assessment', desc: '7 flood sources, 4 Decision Risk Scores, SuDS viability', price: '£375', path: '/site-intelligence/flood-risk-assessment', badge: null },
              { name: 'Planning Statement', desc: 'Submission-ready policy evidence and planning justification', price: '£495', path: '/site-intelligence/planning-statement', badge: null },
              { name: 'Development Finance Summary', desc: 'GDV, build cost, profit on cost, sensitivity analysis for lenders', price: '£795', path: '/site-intelligence/development-finance-summary', badge: 'New' },
              { name: 'Geotechnical Desk Study', desc: 'BGS geology, contamination history, foundation risk analysis', price: '£495', path: '/site-intelligence/geotechnical-desk-study', badge: null },
            ].map((report, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <Link to={report.path} className="block p-8 rounded-[2rem] bg-white border border-brand-primary/5 shadow-sm hover:shadow-md hover:border-brand-accent/20 transition-all group h-full">
                  <div className="flex items-center justify-between mb-4">
                    {report.badge && (
                      <span className="px-3 py-1 rounded-full bg-brand-accent/10 text-brand-accent text-[10px] font-bold uppercase tracking-widest">{report.badge}</span>
                    )}
                    <span className="text-2xl font-bold text-brand-accent ml-auto">{report.price}</span>
                  </div>
                  <h3 className="text-lg font-bold text-brand-primary mb-2 group-hover:text-brand-accent transition-colors">{report.name}</h3>
                  <p className="text-sm text-brand-primary/50 leading-relaxed mb-4">{report.desc}</p>
                  <div className="flex items-center gap-2 text-brand-accent text-sm font-bold group-hover:gap-4 transition-all">
                    View Report <ArrowRight size={14} />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12 flex flex-wrap justify-center gap-4">
            <Link to="/site-intelligence" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:scale-105 transition-transform">
              View All {PURCHASABLE_REPORTS.length} Reports <ArrowRight size={18} />
            </Link>
            <Link to="/report-packages" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-brand-primary/10 rounded-full font-bold hover:bg-brand-primary/5 transition-colors">
              See Bundles & Save
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Value Prop */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
          <div className="bg-brand-primary rounded-[3rem] p-6 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />

            <div className="max-w-2xl relative z-10">
              <span className="text-slate-400 font-bold tracking-widest uppercase text-xs sm:text-sm mb-4 block">Subscribe & Save Up to 74%</span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">Reports On <br /><span className="text-slate-400 italic font-accent font-light">Tap.</span></h2>
              <p className="text-white/80 text-lg mb-8 leading-relaxed max-w-xl font-light">
                Fixed monthly cost. 48-hour turnaround. Use credits for any report type.
                From £399/mo for land buyers to £3,995/mo for volume housebuilders.
              </p>
              <Link to="/subscriptions" className="inline-flex items-center gap-2 font-bold text-white hover:text-slate-300 transition-colors group">
                View Subscription Plans <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-brand-accent mb-2">£133</h4>
                <p className="text-xs text-white/60 uppercase tracking-widest">Per Report From</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-brand-accent mb-2">48hr</h4>
                <p className="text-xs text-white/60 uppercase tracking-widest">Turnaround</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-brand-accent mb-2">White-Label</h4>
                <p className="text-xs text-white/60 uppercase tracking-widest">Your Branding</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                <h4 className="font-bold text-brand-accent mb-2">30-Day</h4>
                <p className="text-xs text-white/60 uppercase tracking-widest">Money-Back</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Also Offer — Structural Engineering & Construction */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-primary/40 font-bold mb-4 block">We Also Build What We Report On</span>
            <h2 className="text-4xl font-bold tracking-tighter text-brand-primary">Engineering & <span className="italic font-accent font-light">Construction.</span></h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link to="/structural-engineering" className="group relative h-[300px] rounded-[2rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Structural engineering" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-primary/60 group-hover:bg-brand-primary/40 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <Ruler className="text-brand-accent mb-3" size={28} />
                <h3 className="text-2xl font-bold mb-2">Structural Engineering</h3>
                <p className="text-white/70 text-sm">Calculations, design, and Building Regs submissions.</p>
              </div>
            </Link>
            <Link to="/construction" className="group relative h-[300px] rounded-[2rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&q=80&w=800" alt="Construction project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" loading="lazy" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-primary/60 group-hover:bg-brand-primary/40 transition-colors" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                <Construction className="text-brand-accent mb-3" size={28} />
                <h3 className="text-2xl font-bold mb-2">Construction</h3>
                <p className="text-white/70 text-sm">Engineering-led build services across England and Wales.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
