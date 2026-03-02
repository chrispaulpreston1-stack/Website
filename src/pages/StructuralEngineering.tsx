import React from 'react';
import { motion } from 'motion/react';
import { Ruler, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

const StructuralEngineering = () => {
  const services = [
    { title: "Residential Design", desc: "Bespoke structural solutions for new builds, extensions, and loft conversions." },
    { title: "Commercial Engineering", desc: "Large-scale structural frameworks for office buildings and retail spaces." },
    { title: "Beam Calculations", desc: "Precise RSJ and steel beam specifications for structural openings." },
    { title: "Basement Impact Assessments", desc: "Specialist reports for subterranean developments in urban areas." }
  ];

  return (
    <div className="pt-32 pb-24">
      <PageSEO
        title="Structural Engineering & Calculations | PF & Co Surrey & London"
        description="Professional structural engineering services including beam calculations, residential design, and basement impact assessments. 24h turnaround available."
        path="/structural-engineering"
        jsonLd={{
          '@type': 'Service',
          name: 'Structural Engineering Services',
          description: 'Professional structural engineering services including beam calculations, residential design, and basement impact assessments.',
          provider: { '@type': 'Organization', name: 'PF & Co Construction' },
          areaServed: ['Surrey', 'London', 'South East England'],
          serviceType: 'Structural Engineering',
        }}
      />
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-brand-accent font-bold mb-4 block">Definitive Engineering</span>
            <h1 className="text-6xl font-bold mb-8">Structural Design & Calculations</h1>
            <p className="text-xl text-brand-primary/70 leading-relaxed mb-8">
              Our engineering team provides the technical backbone for every project. We combine traditional physics with modern computational tools to ensure safety, efficiency, and architectural integrity.
            </p>
            <div className="flex gap-4">
              <Link to="/contact" className="bg-brand-primary text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform">Request Calculations</Link>
            </div>
          </motion.div>
          <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=1000" 
              alt="London Engineering Project" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <div key={s.title} className="p-8 rounded-3xl bg-white border border-gray-100 shadow-sm">
              <div className="w-12 h-12 bg-brand-surface rounded-xl flex items-center justify-center mb-6">
                <Ruler className="text-brand-accent" size={20} />
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-brand-primary/60 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <h2 className="text-4xl font-bold">Our Engineering Process</h2>
            {[
              { step: "01", title: "Site Survey", desc: "Detailed measurement and assessment of existing structural conditions." },
              { step: "02", title: "Computational Analysis", desc: "Using advanced software to model loads and stresses." },
              { step: "03", title: "Design Documentation", desc: "Production of clear, actionable drawings and calculation packs." }
            ].map(item => (
              <div key={item.step} className="flex gap-8">
                <span className="text-5xl font-display font-bold text-brand-accent opacity-20">{item.step}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-brand-primary/60">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-brand-surface p-10 rounded-[2.5rem] border border-gray-100 h-fit">
            <h3 className="text-2xl font-bold mb-6">Why Engineering First?</h3>
            <p className="text-brand-primary/60 mb-8 leading-relaxed">
              Starting with engineering ensures that the construction phase is predictable. We eliminate guesswork, reducing on-site delays and unexpected costs.
            </p>
            <ul className="space-y-4">
              {["Fixed Price Quotes", "24h Turnaround", "Professional Indemnity", "Building Regs Approved"].map(check => (
                <li key={check} className="flex items-center gap-3 text-sm font-bold">
                  <div className="w-5 h-5 bg-brand-accent rounded-full flex items-center justify-center text-brand-primary">
                    <ChevronRight size={12} />
                  </div>
                  {check}
                </li>
              ))}
            </ul>
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

export default StructuralEngineering;
