import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Ruler, Construction, Zap, Search, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

const Home = () => {
  return (
    <div className="selection:bg-brand-accent/30">
      <PageSEO
        title="PF & Co | AI-Powered Structural Engineering & Construction"
        description="Surrey and London's leading AI-powered structural engineering and construction firm. Precision calculations, fixed quotes, and 24h turnaround."
        path="/"
      />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden">
        {/* Video Background Concept */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1606836576983-8b458e75221d?auto=format&fit=crop&q=80&w=2000"
            alt="London Skyline with Construction"
            className="w-full h-full object-cover grayscale opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-surface via-transparent to-brand-surface" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 text-brand-accent px-4 py-2 rounded-full mb-6">
              <Zap size={16} />
              <span className="text-xs font-bold uppercase tracking-wider">AI-Powered Structural Engineering</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold leading-[0.9] mb-8 tracking-tighter">
              Engineering the <br />
              <span className="text-brand-accent italic font-accent font-medium">Foundations</span> <br />
              of Tomorrow.
            </h1>
            <p className="text-xl text-brand-primary/70 max-w-lg mb-10 leading-relaxed">
              We combine advanced AI integration with decades of structural expertise to deliver precision-engineered solutions across Surrey and London.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                Start Your Project <ArrowRight size={18} />
              </Link>
              <Link to="/construction" className="border-2 border-brand-primary/10 px-8 py-4 rounded-full font-bold hover:bg-brand-primary/5 transition-colors">
                View Our Work
              </Link>
            </div>

            <div className="mt-12 flex items-center gap-8 opacity-60">
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl">300+</span>
                <span className="text-[10px] uppercase tracking-widest font-mono">Projects Delivered</span>
              </div>
              <div className="w-px h-8 bg-brand-primary/20" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl">24h</span>
                <span className="text-[10px] uppercase tracking-widest font-mono">Quote Turnaround</span>
              </div>
              <div className="w-px h-8 bg-brand-primary/20" />
              <div className="flex flex-col">
                <span className="font-display font-bold text-2xl">AI-First</span>
                <span className="text-[10px] uppercase tracking-widest font-mono">Workflow</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative group border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&q=80&w=1200"
                alt="London Skyline at Dusk"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="glass p-6 rounded-2xl">
                  <p className="text-sm font-mono uppercase tracking-widest mb-2 opacity-60">Featured Innovation</p>
                  <h3 className="text-xl font-bold">AI-Optimized Steel Framework</h3>
                  <Link to="/ai-innovation" className="flex items-center gap-2 mt-4 text-brand-accent">
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
          <p className="text-center text-[10px] uppercase tracking-[0.4em] font-bold text-brand-primary/40 mb-8">Fully Compliant & Regulated</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
            <div className="flex flex-col items-center gap-1">
              <span className="font-display font-bold text-lg lg:text-xl text-brand-primary">Part A Compliant</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary/60 font-mono text-center">UK Building Regs</span>
            </div>
            <div className="w-px h-8 bg-brand-primary/10 hidden md:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-display font-bold text-lg lg:text-xl text-brand-primary">Human Verified</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary/60 font-mono text-center">Engineer Approved</span>
            </div>
            <div className="w-px h-8 bg-brand-primary/10 hidden md:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-display font-bold text-lg lg:text-xl text-brand-primary">British Standards</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary/60 font-mono text-center">Eurocode Design</span>
            </div>
            <div className="w-px h-8 bg-brand-primary/10 hidden md:block" />
            <div className="flex flex-col items-center gap-1">
              <span className="font-display font-bold text-lg lg:text-xl text-brand-primary">PI Insured</span>
              <span className="text-[10px] uppercase tracking-widest text-brand-primary/60 font-mono text-center">Full Indemnity Cover</span>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links / Services Overview */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <Link to="/structural-engineering" className="group relative h-[450px] rounded-[3rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" alt="Structural engineering steel framework" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" loading="lazy" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-primary/60 group-hover:bg-brand-primary/40 transition-colors" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <Ruler className="text-brand-accent mb-4" size={32} />
                <h2 className="text-3xl font-bold mb-3">Structural Engineering</h2>
                <p className="text-white/70 text-sm mb-6">Definitive calculations and design for complex architectural visions.</p>
                <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                  Explore <ArrowRight size={18} />
                </div>
              </div>
            </Link>
            <Link to="/construction" className="group relative h-[450px] rounded-[3rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&q=80&w=1000" alt="Residential construction project" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" loading="lazy" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-primary/60 group-hover:bg-brand-primary/40 transition-colors" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <Construction className="text-brand-accent mb-4" size={32} />
                <h2 className="text-3xl font-bold mb-3">Construction</h2>
                <p className="text-white/70 text-sm mb-6">Precision build services led by engineering expertise.</p>
                <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                  Explore <ArrowRight size={18} />
                </div>
              </div>
            </Link>
            <Link to="/site-intelligence" className="group relative h-[450px] rounded-[3rem] overflow-hidden">
              <img src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000" alt="Aerial view of development site" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" loading="lazy" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-primary/60 group-hover:bg-brand-primary/40 transition-colors" />
              <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
                <Search className="text-brand-accent mb-4" size={32} />
                <h2 className="text-3xl font-bold mb-3">Site Intelligence</h2>
                <p className="text-white/70 text-sm mb-6">Data-driven pre-construction screening and risk assessment.</p>
                <div className="flex items-center gap-2 font-bold group-hover:gap-4 transition-all">
                  Explore <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Optimization Interactive Section */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">The AI Advantage</span>
              <h2 className="text-5xl font-bold mb-8">Material Optimization <br />in Real-Time.</h2>
              <p className="text-lg text-brand-primary/60 mb-6 leading-relaxed">
                Our proprietary AI algorithms analyze structural loads instantly to find the "Perfect Beam" — minimizing material waste while maximizing safety. See the difference in weight and cost.
              </p>
              <div className="bg-brand-surface/50 border border-brand-accent/20 p-5 rounded-2xl mb-10">
                <h4 className="font-bold text-brand-primary flex items-center gap-2 mb-2">
                  <ShieldAlert size={18} className="text-brand-accent" />
                  Human-in-the-Loop Safety
                </h4>
                <p className="text-sm text-brand-primary/70">
                  AI generates the optimized framework, but **we never trust it blindly**. Every single calculation is rigorously reviewed, stamped, and approved by our in-house, qualified Structural Engineers. You get the speed of AI with the cast-iron safety of experienced human oversight.
                </p>
              </div>

              <div className="space-y-6">
                <div className="p-6 rounded-2xl bg-brand-surface border border-gray-100">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">Standard Design</span>
                    <span className="text-sm font-mono text-red-500">1,240kg Steel</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="w-full h-full bg-red-400" />
                  </div>
                </div>
                <div className="p-6 rounded-2xl bg-brand-primary text-white shadow-xl shadow-brand-primary/20">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-bold">PF & Co AI Optimized</span>
                    <span className="text-sm font-mono text-brand-accent">980kg Steel (-21%)</span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '79%' }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-brand-accent"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden bg-brand-primary p-1 flex items-center justify-center">
                <div className="w-full h-full rounded-[2.8rem] overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1000"
                    alt="Structural Analysis"
                    className="w-full h-full object-cover opacity-50"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 border-2 border-brand-accent/30 rounded-full animate-ping" />
                    <div className="absolute w-48 h-48 border border-brand-accent/50 rounded-full animate-pulse" />
                    <div className="bg-brand-accent text-brand-primary p-6 rounded-2xl font-mono text-xs font-bold shadow-2xl">
                      RUNNING ANALYSIS...<br />
                      LOAD: 45.2kN/m<br />
                      OPTIMIZING MESH...
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-32 bg-brand-primary text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">Our Process</span>
            <h2 className="text-5xl font-bold">From Brief to Build.</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Consult & Quote", desc: "Share your plans and we'll provide a fixed-price quote within 24 hours. No hidden costs, no surprises." },
              { step: "02", title: "Design & Calculate", desc: "Our engineers produce full structural calculations and design packs, optimised by AI for material efficiency." },
              { step: "03", title: "Build & Deliver", desc: "From foundations to frame, we manage the build with engineering precision. Every beam placed with purpose." }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative group hover:border-brand-accent/30 transition-colors">
                <span className="text-6xl font-display font-bold text-brand-accent/10 absolute top-6 right-8">{item.step}</span>
                <div className="relative z-10">
                  <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-8">
                    <span className="text-brand-accent font-bold font-mono text-sm">{item.step}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-4">{item.title}</h4>
                  <p className="text-white/70 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscriptions Teaser */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-brand-primary rounded-[3rem] p-12 lg:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/20 blur-[120px]" />
            <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">New: Engineering as a Service</span>
                <h2 className="text-5xl font-bold mb-6">Structural Design Subscriptions</h2>
                <p className="text-white/70 text-lg mb-10">
                  Stop waiting for quotes. Get unlimited structural calculations and priority design support for a fixed monthly fee.
                </p>
                <Link to="/subscriptions" className="bg-brand-accent text-brand-primary px-8 py-4 rounded-full font-bold inline-flex items-center gap-2 hover:scale-105 transition-transform">
                  View Subscription Plans <ArrowRight size={18} />
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-brand-accent mb-2">24h</h4>
                  <p className="text-xs text-white/60 uppercase tracking-widest">Turnaround</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-brand-accent mb-2">Unlimited</h4>
                  <p className="text-xs text-white/60 uppercase tracking-widest">Calculations</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-brand-accent mb-2">Priority</h4>
                  <p className="text-xs text-white/60 uppercase tracking-widest">Support</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold text-brand-accent mb-2">Fixed</h4>
                  <p className="text-xs text-white/60 uppercase tracking-widest">Monthly Cost</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
