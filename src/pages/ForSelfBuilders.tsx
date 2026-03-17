import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Hammer, CheckCircle2, AlertTriangle, ShieldCheck, HardHat } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import { DocumentMockup } from '../components/DocumentMockup';

const ForSelfBuilders = () => {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-primary">
      <PageSEO
        title="For Homeowners & Self-Builders | PF & Co Engineering"
        description="Understand your site before you hire an architect. Avoid expensive mistakes with our easy-to-understand Site Intelligence reports."
        path="/for-self-builders"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-orange-500/5 rounded-full blur-[100px]" />
          <div className="absolute inset-0 opacity-[0.02]" style={{
            backgroundImage: 'linear-gradient(rgba(15,23,42,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:w-[55%] xl:w-[60%]"
            >
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-100/80 border-2 border-amber-300 text-amber-800 text-sm font-black uppercase tracking-[0.2em] mb-8 shadow-sm backdrop-blur-sm">
                <Hammer size={18} className="text-amber-600" />
                <span>For Homeowners & Self-Builders</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                Understand your site <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500 italic font-accent font-light">before you build.</span>
              </h1>
              <p className="text-xl text-brand-secondary leading-relaxed mb-10 font-light max-w-lg">
                Avoid paying thousands in architectural fees for a design that will never get planning permission. Find out exactly what is permitted on your land first.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/order-report?report=self-build-starter"
                  className="inline-flex justify-center items-center gap-2 bg-amber-500 text-brand-primary px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(245,158,11,0.3)]"
                >
                  View Self-Build Starter <ArrowRight size={18} />
                </Link>
                <Link
                  to="/plans-and-pricing"
                  className="inline-flex justify-center items-center gap-2 bg-white text-brand-primary border border-gray-200 shadow-sm px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all"
                >
                  View The Roadmap
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block lg:w-[45%] xl:w-[40%]"
            >
               <div className="relative w-full max-w-[400px] xl:max-w-[500px] h-[450px] xl:h-[600px] mx-auto opacity-90">
                 <div className="absolute top-0 right-0 scale-[0.65] xl:scale-[0.85] rotate-6 hover:rotate-0 hover:scale-[0.7] xl:hover:scale-90 transition-transform duration-500 z-10 drop-shadow-2xl origin-top-right">
                   <DocumentMockup 
                      title="Site Feasibility Report" 
                      subtitle="Pre-Planning Assessment"
                      documentRef="014-HOMES-SFR-R00"
                   />
                 </div>
                 <div className="absolute bottom-0 left-0 scale-[0.65] xl:scale-[0.85] -rotate-3 hover:rotate-0 hover:scale-[0.7] xl:hover:scale-90 transition-transform duration-500 z-20 drop-shadow-2xl origin-bottom-left">
                   <DocumentMockup 
                      title="Design Readiness Review" 
                      subtitle="Pre-Construction Setup"
                      documentRef="014-HOMES-DRR-R00"
                   />
                 </div>
               </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem / Solution */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">Build with confidence.</h2>
            <p className="text-xl text-brand-secondary font-light">Embarking on a self-build or major extension is daunting. We provide plain-English reports to ensure you don't face sudden surprises during planning or construction.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: AlertTriangle,
                title: 'Avoid Planning Refusals',
                desc: 'Our Site Feasibility Report tells you exactly what planning constraints exist on your property—like Conservation Areas, Green Belts, or Article 4 Directions—before you spend money on design.'
              },
              {
                icon: ShieldCheck,
                title: 'Know Your Ground',
                desc: 'Poor ground conditions can add tens of thousands to your foundation costs. Our Geotechnical reports highlight potential issues so your builders can quote accurately.'
              },
              {
                icon: HardHat,
                title: 'Construction Readiness',
                desc: 'Once you secure planning permission, our Construction Management Plans help you safely navigate the site logistics and satisfy your council\'s pre-commencement conditions.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-brand-surface border border-brand-primary/5 hover:border-amber-200 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-brand-secondary leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription/Membership Callout */}
      <section className="py-24 bg-brand-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-600/20 rounded-full blur-[120px]" />
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-widest mb-6 border border-amber-500/30">
                Membership Options
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Screen sites fast.</h2>
              <p className="text-xl text-white/70 mb-8 font-light leading-relaxed">
                Hunting for the perfect plot or refurbishing multiple properties per year? Our Scout tier gives you affordable intelligence whenever you need it.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  '2 report credits per month (any type)',
                  '72-hour turnaround',
                  'Email support',
                  'Perfect for screening 2+ properties a month'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-amber-400 shrink-0" />
                    <span className="text-white/90 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                   <div className="flex items-baseline gap-2">
                     <span className="text-4xl font-bold text-white">£399</span>
                     <span className="text-white/50">/mo</span>
                   </div>
                   <Link
                      to="/subscriptions"
                      className="inline-flex justify-center items-center gap-2 bg-amber-500 text-brand-primary px-8 py-4 rounded-full font-bold hover:bg-amber-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] w-full sm:w-auto"
                    >
                      View Scout Plan
                   </Link>
                </div>
                
                <Link to="/subscriptions" className="mt-8 block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-amber-400/50 transition-all group w-full">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-white font-bold text-xl mb-1 group-hover:text-amber-300 transition-colors">
                        Looking for something else?
                      </div>
                      <div className="text-white/75 text-sm md:text-base leading-relaxed">
                        There are more membership subscriptions and options available. <span className="text-amber-300 font-semibold underline underline-offset-4 decoration-amber-500/50">Click here to compare all plans.</span>
                      </div>
                    </div>
                    <ArrowRight size={24} className="text-amber-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="relative">
               <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">Need reports for a single build?</h3>
                  <p className="text-center text-white/60 mb-8">You don't need a subscription. Browse our pre-configured bundles designed specifically for single home projects.</p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between border border-white/5 hover:bg-white/15 transition-colors cursor-pointer" onClick={() => window.location.href='/order-report?report=self-build-starter'}>
                       <div>
                         <div className="font-bold text-white mb-1">Self-Build Starter</div>
                         <div className="text-sm text-white/60">Essential site intelligence and logistics.</div>
                       </div>
                       <div className="text-right">
                         <div className="font-bold text-amber-300">£3,050</div>
                         <ArrowRight size={16} className="text-white/40 ml-auto mt-1" />
                       </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between border border-white/5 hover:bg-white/15 transition-colors cursor-pointer" onClick={() => window.location.href='/order-report?report=site-feasibility-report'}>
                       <div>
                         <div className="font-bold text-white mb-1">Feasibility Report</div>
                         <div className="text-sm text-white/60">The definitive assessment of constraints.</div>
                       </div>
                       <div className="text-right">
                         <div className="font-bold text-amber-300">£1,500</div>
                         <ArrowRight size={16} className="text-white/40 ml-auto mt-1" />
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Bundles */}
      <section className="py-24 bg-brand-surface relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-2xl">
              <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-amber-600 mb-4 block">Buy One-Off</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">The Self-Build Packs</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-[2.5rem] bg-white border border-gray-200 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/5 blur-[80px] group-hover:bg-amber-500/10 transition-colors" />
              <div className="relative z-10 flex flex-col items-start h-full pb-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 font-bold text-xs uppercase tracking-widest mb-6">Start to Finish</div>
                <h3 className="text-3xl font-bold mb-4">The Self-Build Starter</h3>
                <p className="text-brand-secondary mb-8 text-lg">Essential site intelligence plus the logistical planning you need to actually start building.</p>
                
                <ul className="space-y-4 mb-20">
                  {['Site Feasibility Report', 'Geotechnical Desk Study', 'Flood Risk Assessment', 'Construction Management Plan'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-amber-500 shrink-0 mt-0.5" />
                      <span className="text-brand-primary/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto w-full">
                  <div className="flex items-end gap-4 mb-8">
                    <span className="text-4xl font-bold text-brand-primary">£3,050</span>
                    <span className="text-brand-primary/40 line-through text-lg mb-1">RRP £5,590</span>
                  </div>

                  <Link
                    to="/order-report?report=self-build-starter"
                    className="block w-full text-center bg-amber-500 text-brand-primary py-4 rounded-xl font-bold text-lg hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20"
                  >
                    Order Self-Build Starter
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-[2.5rem] bg-white border border-gray-200 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/5 blur-[80px] group-hover:bg-teal-500/10 transition-colors" />
              <div className="relative z-10 flex flex-col items-start h-full pb-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-bold text-xs uppercase tracking-widest mb-6">Just Land</div>
                <h3 className="text-3xl font-bold mb-4">Site Feasibility Report</h3>
                <p className="text-brand-secondary mb-8 text-lg">The starting point for every project. A definitive breakdown of all your site's physical and regulatory constraints.</p>
                
                <ul className="space-y-4 mb-20">
                  {['22+ Constraint Categories Checked', 'Planning Friction Score (0-100)', 'Buildability Rating'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-brand-primary/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto w-full">
                  <div className="flex items-end gap-4 mb-8 mt-auto pt-6">
                    <span className="text-4xl font-bold text-brand-primary">£1,500</span>
                    <span className="text-brand-primary/40 line-through text-lg mb-1">RRP £2,500</span>
                  </div>

                  <Link
                    to="/order-report?report=site-feasibility-report"
                    className="block w-full text-center bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-colors"
                  >
                    Order Feasibility Report
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ForSelfBuilders;
