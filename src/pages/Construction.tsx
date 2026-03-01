import React from 'react';
import { motion } from 'motion/react';
import { Construction as ConstructionIcon, HardHat, Hammer, ShieldCheck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Construction = () => {
  const capabilities = [
    { title: "Design & Build Extensions", desc: "Seamless integration of design and construction for high-end residential extensions." },
    { title: "Structural Alterations", desc: "Expert steel installation and load-bearing wall removals." },
    { title: "Underpinning & Foundations", desc: "Specialist groundworks to stabilize and secure your property's future." },
    { title: "Bespoke Timber Frame", desc: "Traditional craftsmanship meets modern engineering in our timber structures." }
  ];

  return (
    <div className="pt-32 pb-24">
      <Helmet>
        <title>Precision Construction | PF & Co Surrey & London</title>
        <meta name="description" content="Expert construction services led by engineers. We specialize in structural alterations, extensions, and basement builds in the UK." />
      </Helmet>
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1 aspect-video rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1200" 
              alt="London Construction Site" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="order-1 lg:order-2"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">Master Builders</span>
            <h1 className="text-6xl font-bold mb-8">Precision Construction</h1>
            <p className="text-xl text-brand-primary/70 leading-relaxed mb-8">
              We bring engineering plans to life with surgical precision. Our construction teams are led by engineers, ensuring that every detail is executed exactly as designed.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:scale-105 transition-transform">
                Start Your Build <ArrowRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {capabilities.map((c, i) => (
            <div key={c.title} className="p-10 rounded-[2.5rem] bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all flex gap-8">
              <div className="w-16 h-16 bg-brand-surface rounded-2xl flex-shrink-0 flex items-center justify-center">
                <HardHat className="text-brand-accent" size={28} />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-brand-primary/60 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 bg-brand-surface rounded-[3rem] p-12 lg:p-20 border border-gray-100">
          <div className="max-w-3xl">
            <h2 className="text-4xl font-bold mb-8">The Build Quality Guarantee</h2>
            <p className="text-brand-primary/60 text-lg mb-12">
              Every PF & Co build is subject to rigorous internal engineering audits. We don't just wait for building control; we set our own higher standards for structural integrity and finish quality.
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Fully Insured</h4>
                  <p className="text-sm text-brand-primary/60">Comprehensive public liability and professional indemnity insurance.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-brand-primary text-white rounded-lg flex items-center justify-center flex-shrink-0">
                  <Hammer size={20} />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Master Trades</h4>
                  <p className="text-sm text-brand-primary/60">Vetted, highly skilled tradespeople with years of specialist experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Project Pulse / Live Status */}
      <section className="py-24 bg-brand-surface">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-3 h-3 bg-brand-accent rounded-full animate-pulse" />
            <h2 className="text-4xl font-bold tracking-tight">Project Pulse</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Woking Extension", stage: "Superstructure", progress: 65, img: "https://images.unsplash.com/photo-1590069230002-70cc884606e2?auto=format&fit=crop&q=80&w=800" },
              { title: "Chelsea Basement", stage: "Excavation", progress: 30, img: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=800" },
              { title: "Richmond Loft", stage: "Steel Install", progress: 90, img: "https://images.unsplash.com/photo-1529307474719-3d0a417abb91?auto=format&fit=crop&q=80&w=800" }
            ].map((project, i) => (
              <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 group">
                <div className="h-48 overflow-hidden">
                  <img src={project.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="font-bold text-xl">{project.title}</h4>
                    <span className="text-[10px] font-mono uppercase tracking-widest bg-brand-surface px-2 py-1 rounded">{project.stage}</span>
                  </div>
                  <div className="w-full h-1 bg-gray-100 rounded-full mb-2">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${project.progress}%` }}
                      className="h-full bg-brand-accent" 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-brand-primary/40">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Site Intelligence */}
      <section className="max-w-7xl mx-auto px-6 mt-24">
        <div className="bg-brand-primary text-white rounded-[3rem] p-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Eliminate Site Risk Early</h2>
              <p className="text-white/60">Our Site Intelligence reports screen for 22+ planning and ground constraints before you commit to a design.</p>
            </div>
            <Link 
              to="/site-intelligence"
              className="px-8 py-4 bg-brand-accent text-brand-primary rounded-xl font-bold hover:bg-brand-accent/90 transition-all flex items-center gap-2 whitespace-nowrap"
            >
              Explore Site Intelligence <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Construction;
