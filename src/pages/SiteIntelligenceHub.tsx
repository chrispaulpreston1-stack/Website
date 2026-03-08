import React from 'react';
import { motion } from 'motion/react';
import { Search, ShieldAlert, BarChart3, ArrowRight, Check, X, Database, Clock, Users, Zap, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import VideoExplainer from '../components/VideoExplainer';

const SiteIntelligenceHub = () => {
  const products = [
    {
      title: "Site Feasibility Report",
      desc: "The broadest screen. Checks 22+ planning, environmental, and ground risk constraints for any UK property address.",
      icon: <Search className="text-teal-500" size={32} />,
      link: "/site-intelligence/site-feasibility-report",
      accent: "border-teal-500",
      price: "1,500",
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
      price: "900",
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
    { num: "58", label: "Authoritative Data Sources" },
    { num: "48hr", label: "Typical Turnaround" }
  ];

  return (
    <div className="pt-32 pb-24">
      <PageSEO
        title="PF & Co Site Intelligence | Data-Driven Pre-Construction Screening | PF & Co"
        description="Interrogate 58 authoritative data sources to identify planning, flood, and ground risks before you commit to a site."
        path="/site-intelligence"
        jsonLd={[
          {
            '@type': 'Service',
            name: 'Site Intelligence',
            description: 'Data-driven pre-construction screening interrogating 58 authoritative data sources to identify planning, flood, and ground risks.',
            provider: { '@type': 'Organization', name: 'PF & Co Site Intelligence' },
            areaServed: ['England', 'Wales', 'UK'],
            serviceType: 'Site Intelligence',
          },
          {
            '@type': 'VideoObject',
            name: 'PF & Co Site Intelligence — The Complete Process',
            description: 'See the complete Site Intelligence process from order to delivery. Learn how we interrogate 58 authoritative data sources and translate raw data into engineering decisions for planning, flood, and ground risk screening.',
            thumbnailUrl: 'https://www.pfcoconstruction.co.uk/videos/site-intelligence-demo-thumb.jpg',
            contentUrl: 'https://www.pfcoconstruction.co.uk/videos/site-intelligence-demo.mp4',
            uploadDate: '2026-03-02',
            duration: 'PT2M32S',
            publisher: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfcoconstruction.co.uk' },
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
              Early Access Now Open.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-brand-primary/60 leading-relaxed mb-8"
            >
              Welcome to Early Access. You're among the first to use PF & Co Site Intelligence — data-driven pre-construction screening that interrogates 58 authoritative data sources. Lock in discounted pricing today and help shape the product before V1 launch.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/contact" className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all flex items-center gap-2">
                Unlock Early Access <ArrowRight size={20} />
              </Link>
              <div className="flex items-center gap-2 px-6 py-4 bg-brand-surface border border-brand-primary/5 rounded-xl text-sm font-bold">
                <Clock size={18} className="text-brand-accent" />
                48hr Turnaround
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xs text-brand-primary/40 mt-4 italic"
            >
              Early Access pricing is temporary. Price increases upon the final V1 release.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-6 p-4 bg-brand-surface border border-brand-primary/5 rounded-xl max-w-lg"
            >
              <p className="text-sm text-brand-primary/70">
                <span className="inline-block bg-brand-primary/10 text-brand-primary text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mr-2">Coming Soon</span>
                White-label, non-branded reports delivered under your practice's identity.{' '}
                <Link to="/contact" className="text-brand-accent font-bold hover:underline">Register your interest</Link>
              </p>
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

      <VideoExplainer
        title="PF & Co Site Intelligence"
        accentColor="brand-accent"
        description="See the complete process — from order to delivery. Learn how we interrogate 58 authoritative data sources and translate raw data into engineering decisions, typically within 48 hours."
        thumbnailUrl="/videos/site-intelligence-demo-thumb.jpg"
        videoUrl="/videos/site-intelligence-demo.mp4"
        duration="2:32"
      />

      {/* Appeal-Readiness Regulatory Alert */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-8 md:p-10 bg-gradient-to-br from-red-950 to-brand-primary rounded-[2rem] text-white overflow-hidden shadow-2xl border border-red-500/20"
        >
          <div className="absolute inset-0 opacity-5 engineering-grid" />
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-500 via-amber-400 to-red-500" />
          <div className="relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center shrink-0">
                <ShieldAlert size={24} className="text-red-400" />
              </div>
              <div>
                <span className="inline-block bg-red-500/20 text-red-300 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mb-2">Regulatory Change — 1 April 2026</span>
                <h3 className="text-2xl md:text-3xl font-bold leading-tight">Submit Once, Submit Right.</h3>
              </div>
            </div>
            <p className="text-white/70 text-base leading-relaxed mb-6 max-w-3xl">
              From 1 April 2026, planning appeals in England no longer accept new evidence. Under SI 2026/122, approximately 95% of appeals will follow the expedited procedure where your original application <strong className="text-white">is</strong> the appeal case. Missing a report, citing outdated data, or leaving a gap in your evidence cannot be fixed later.
            </p>
            <p className="text-white/70 text-base leading-relaxed mb-8 max-w-3xl">
              Our reports are built to be <strong className="text-white">appeal-ready from day one</strong> — every data source cited, every policy referenced, every constraint evidenced. When the planning officer reads your application, they see a case that is already complete.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/insights/planning-appeal-changes-2026" className="px-6 py-3 bg-white text-brand-primary rounded-xl font-bold hover:scale-105 transition-all shadow-lg text-sm">
                Read: What Changed on 1 April
              </Link>
              <Link to="/order-report" className="px-6 py-3 bg-red-500/20 text-white border border-red-500/30 rounded-xl font-bold hover:bg-red-500/30 transition-all text-sm">
                Order Appeal-Ready Reports
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* White Label & Professional Partners */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-brand-primary rounded-[2rem] text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="relative z-10 flex items-center gap-6">
            <div className="w-16 h-16 bg-brand-accent rounded-2xl flex items-center justify-center shadow-xl shadow-brand-accent/20 shrink-0">
              <Users size={32} className="text-brand-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">White Label & Professional Partners</h3>
              <p className="text-white/60 text-sm font-light">White label solutions for architectural practices and developers. Bespoke and tiered rates available for multiple report orders.</p>
              <p className="text-white/60 text-sm font-light mt-2">
                <span className="inline-block bg-white/10 text-white/80 text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded mr-2">Coming Soon</span>
                Non-branded reports delivered under your practice's identity. Register your interest.
              </p>
            </div>
          </div>
          <Link to="/contact" className="relative z-10 px-8 py-4 bg-white text-brand-primary rounded-xl font-bold hover:scale-105 transition-all shadow-xl shrink-0">
            Discuss Professional Rates
          </Link>
        </motion.div>
      </section>

      {/* Human Safety Leap */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <div className="bg-brand-surface border border-brand-accent/20 rounded-[3rem] p-12 lg:p-20 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/5 blur-[100px] rounded-full" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-brand-accent/10 flex items-center justify-center text-brand-accent rounded-2xl mb-8">
                <ShieldAlert size={32} />
              </div>
              <h2 className="text-4xl font-display font-bold text-brand-primary mb-6">The Human Safety Leap.</h2>
              <p className="text-xl font-bold text-brand-primary/80 leading-relaxed mb-6">
                Data accelerates our intelligence, but human expertise secures it.
              </p>
              <p className="text-brand-primary/60 leading-relaxed max-w-lg">
                Every API call, geospatial analysis, and data-driven insight gathered in our Site Intelligence reports is rigorously reviewed, interpreted, and verified by our qualified human engineers. We don't just hand you raw, unchecked outputs; we deliver actionable, deeply verified engineering intelligence built to withstand scrutiny.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200"
                alt="Engineer reviewing data"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-primary/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-brand-primary text-white py-24 mb-24 rounded-[3rem] mx-6">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">The Problem We Solve</h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                Every construction project sits on a web of constraints — planning restrictions, flood zones, heritage listings, contaminated land, ecological designations, ground risk. Most people discover these <span className="text-brand-accent italic">after</span> they've committed. Site Intelligence finds them <span className="text-brand-accent italic">before</span>.
              </p>
              <div className="grid sm:grid-cols-3 gap-8">
                {stats.map((stat, i) => (
                  <div key={i}>
                    <div className="text-3xl font-bold text-brand-accent">{stat.num}</div>
                    <div className="text-xs uppercase tracking-wider text-white/40 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-6">
              {[
                { title: "Architects", desc: "Screen the site before you pick up a pencil. Avoid wasted fees and frustrated clients." },
                { title: "Homeowners", desc: "Know what you're buying before you exchange. Identify flood risk and TPOs early." },
                { title: "Developers", desc: "Screen multiple sites quickly. Identify deal-breakers in 48 hours before tying up capital." }
              ].map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Cards */}
      <section className="max-w-7xl mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold mb-12 text-center">Three Core Reports. Early Access Pricing.</h2>
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {products.map((product, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className={`bg-white border-2 ${product.accent} p-8 rounded-[2.5rem] flex flex-col shadow-sm relative overflow-hidden`}
            >
              <div className="absolute top-4 right-4 bg-brand-accent/10 text-brand-accent text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                Early Access
              </div>
              <div className="mb-6">{product.icon}</div>
              <h3 className="text-2xl font-bold mb-4">{product.title}</h3>
              <p className="text-brand-primary/60 text-sm mb-8 flex-grow">{product.desc}</p>

              <div className="mb-8">
                <div className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/40 mb-1">Early Access Price</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-brand-primary">£{product.price}</span>
                  <span className="text-sm text-brand-primary/40 line-through">RRP £{product.rrp}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {product.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm">
                    <Check size={16} className="text-brand-accent mt-0.5 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <Link
                  to={`${product.link}`}
                  className="w-full py-4 bg-brand-surface text-brand-primary border border-brand-primary/5 rounded-xl font-bold text-center hover:bg-brand-primary/5 transition-colors flex items-center justify-center gap-2"
                >
                  Learn More <ArrowRight size={18} />
                </Link>
                <div className="grid grid-cols-2 gap-3">
                  <a href={`/samples/${product.link.split('/').pop()}-sample.pdf`} target="_blank" rel="noopener noreferrer" className="py-4 bg-white text-brand-primary border border-brand-primary/10 rounded-xl font-bold text-center hover:bg-brand-surface transition-colors flex items-center justify-center gap-2 text-sm">
                    Sample <FileText size={16} className="text-brand-accent" />
                  </a>
                  <Link
                    to={`/order-report?report=${product.link.split('/').pop()}`}
                    className="py-4 bg-brand-primary text-white rounded-xl font-bold text-center hover:bg-brand-primary/90 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/10 text-sm"
                  >
                    Claim Early Bird Price <Zap size={16} className="text-brand-accent" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full Product Suite Section */}
        <div className="mt-32">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6 tracking-tighter">The Full Site Intelligence <span className="text-brand-accent italic font-serif font-light">Suite.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto text-lg font-light">Specialist reports for every stage of the planning and pre-construction process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                cat: "Planning & Strategy",
                items: [
                  { name: "CIL Liability Assessment", link: "/site-intelligence/cil-liability-assessment", desc: "Exemption checks & liability calculation." },
                  { name: "Planning Statement", link: "/site-intelligence/planning-statement", desc: "Submission-ready policy evidence." },
                  { name: "Pre-Application Advice", link: "/site-intelligence/pre-application-advice", desc: "Targeted enquiry packs." },
                  { name: "Design & Access Statement", link: "/site-intelligence/design-and-access-statement", desc: "Design rationale & accessibility." },
                  { name: "Concept Feasibility Study", link: "/site-intelligence/feasibility-study", desc: "In-depth development appraisal." }
                ]
              },
              {
                cat: "Environmental & Ecology",
                items: [
                  { name: "Biodiversity Net Gain", link: "/site-intelligence/biodiversity-net-gain", desc: "BNG assessment & strategy." },
                  { name: "Energy Statement", link: "/site-intelligence/energy-statement", desc: "Sustainability & carbon analysis." },
                  { name: "Flood Risk Assessment", link: "/site-intelligence/flood-risk-assessment", desc: "Planning-ready FRA." },
                  { name: "Geotechnical Desk Study", link: "/site-intelligence/geotechnical-desk-study", desc: "Ground condition analysis." }
                ]
              },
              {
                cat: "Specialist Surveys",
                items: [
                  { name: "Heritage Impact Assessment", link: "/site-intelligence/heritage-impact-assessment", desc: "Listed building & CA analysis." },

                  { name: "Transport Statement", link: "/site-intelligence/transport-statement", desc: "Highways & accessibility." },
                  { name: "Parking Survey", link: "/site-intelligence/parking-survey", desc: "Evidence-based provision." }
                ]
              },
              {
                cat: "Construction Readiness",
                items: [
                  { name: "Construction Management Plan", link: "/site-intelligence/construction-management-plan", desc: "Logistics & safety strategy." },
                  { name: "Design Readiness Review", link: "/site-intelligence/pre-construction-design-review", desc: "95-check coordination review." }
                ]
              },
              {
                cat: "Compliance & Legal",
                items: [
                  { name: "Building Control", link: "/building-control", desc: "Part A calculations & drawings." },
                  { name: "Party Wall Assessment", link: "/party-wall", desc: "Engineering-led legal resolution." }
                ]
              }
            ].map((category, i) => (
              <div key={i} className="bg-white rounded-3xl p-8 border-2 border-brand-primary/5 hover:border-brand-accent/20 shadow-xl shadow-brand-primary/5 hover:shadow-2xl transition-all duration-500 premium-card group/card">
                <div className="flex items-center gap-3 mb-8 border-b border-brand-primary/10 pb-4">
                  <div className="w-2 h-2 rounded-full bg-brand-accent shadow-lg shadow-brand-accent/50 group-hover/card:scale-150 transition-transform duration-500" />
                  <h3 className="text-xs font-mono uppercase tracking-widest text-brand-accent font-bold">
                    {category.cat}
                  </h3>
                </div>
                <div className="space-y-6">
                  {category.items.map((item, j) => (
                    <Link key={j} to={item.link} className="group block p-3 -mx-3 rounded-xl hover:bg-brand-surface transition-colors">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{item.name}</h4>
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-brand-accent" />
                      </div>
                      <p className="text-xs text-brand-primary/60 font-medium">{item.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
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
                <span className="text-5xl md:text-6xl font-bold text-white">£2,375</span>
                <span className="text-lg md:text-xl text-white/40 line-through">RRP £4,600</span>
              </div>
              <div className="text-brand-accent text-xs md:text-sm font-bold mb-8 italic">Save £2,225 (Early Access)</div>

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
            <table className="w-full text-left border-collapse min-w-[800px]">
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

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-accent rounded-[3rem] p-12 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-4">Request Early Access — PF & Co Site Intelligence</h2>
            <p className="text-brand-primary/80 text-lg mb-8 max-w-2xl mx-auto">
              Send us a property address and we'll tell you what's underneath it, around it, and restricting it — typically within 48 hours.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all"
            >
              Unlock Early Access <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SiteIntelligenceHub;
