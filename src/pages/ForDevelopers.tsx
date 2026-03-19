import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, CheckCircle2, ShieldCheck, Zap, LineChart } from 'lucide-react';
import PageSEO from '../components/PageSEO';
import { DocumentMockup } from '../components/DocumentMockup';

const ForDevelopers = () => {
  return (
    <div className="min-h-screen bg-brand-surface text-brand-primary">
      <PageSEO
        title="For Developers & Land Buyers | PF & Co Engineering"
        description="Everything you need to know before you sign. AI-powered site intelligence covering planning, environmental, and financial constraints."
        path="/for-developers"
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-10 w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[100px]" />
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
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-100/80 border-2 border-blue-300 text-blue-800 text-sm font-black uppercase tracking-[0.2em] mb-8 shadow-sm backdrop-blur-sm">
                <TrendingUp size={18} className="text-blue-600" />
                <span>For Developers & Investors</span>
              </div>
              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 tracking-tight leading-[1.1]">
                Everything you need to know <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 italic font-accent font-light">before you sign.</span>
              </h1>
              <p className="text-xl text-brand-secondary leading-relaxed mb-10 font-light max-w-lg">
                Identify constraints, quantify development viability, and de-risk your acquisitions with our comprehensive intelligence reports—delivered in 48 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/order-report?report=developer-due-diligence"
                  className="inline-flex justify-center items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform shadow-[0_0_30px_rgba(37,99,235,0.3)]"
                >
                  View Due Diligence Pack <ArrowRight size={18} />
                </Link>
                <Link
                  to="/site-intelligence"
                  className="inline-flex justify-center items-center gap-2 bg-white text-brand-primary border border-gray-200 shadow-sm px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all"
                >
                  Browse Reports
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
                      subtitle="Pre-Acquisition Intelligence"
                      documentRef="014-DEV-SFR-R00"
                   />
                 </div>
                 <div className="absolute bottom-0 left-0 scale-[0.65] xl:scale-[0.85] -rotate-3 hover:rotate-0 hover:scale-[0.7] xl:hover:scale-90 transition-transform duration-500 z-20 drop-shadow-2xl origin-bottom-left">
                   <DocumentMockup 
                      title="Geotechnical Desk Study" 
                      subtitle="Ground & Contamination Risk"
                      documentRef="014-DEV-GDS-R00"
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
            <h2 className="text-3xl md:text-5xl font-bold text-brand-primary mb-6">Quantify your risk. Protect your margins.</h2>
            <p className="text-xl text-brand-secondary font-light">Whether you are signing an option agreement or buying unconditionally, you need the full picture of constraints before committing capital.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheck,
                title: 'Constraint Mapping',
                desc: 'Our AI agents automatically screen your site against 27+ constraint categories, identifying hidden issues like Article 4 Directions, TPOs, and complex flood zones before you buy.'
              },
              {
                icon: LineChart,
                title: 'Commercial Viability',
                desc: 'Instantly appraise the gross development value (GDV) and calculate potential CIL liabilities so you can factor them into your residual land valuations.'
              },
              {
                icon: Zap,
                title: 'Deal Speed',
                desc: 'In a competitive land market, waiting weeks for a consultant can cost you the deal. We deliver comprehensive due diligence in 48 hours, keeping you ahead of the competition.'
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-brand-surface border border-brand-primary/5 hover:border-blue-200 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-blue-500/20 text-blue-300 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-500/30">
                Membership Options
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Full project packs on demand.</h2>
              <p className="text-xl text-white/70 mb-8 font-light leading-relaxed">
                Appraising multiple sites per month? Our Developer subscription tier gives your acquisition team rapid intelligence across all prospect sites at wholesale pricing.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  '12 report credits per month (any type)',
                  'Priority 48-hour turnaround',
                  'Dedicated account manager',
                  'Quarterly pipeline review calls'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 size={24} className="text-blue-400 shrink-0" />
                    <span className="text-white/90 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row items-center gap-6">
                   <div className="flex items-baseline gap-2">
                     <span className="text-4xl font-bold text-white">£1,995</span>
                     <span className="text-white/50">/mo</span>
                   </div>
                   <Link
                      to="/subscriptions"
                      className="inline-flex justify-center items-center gap-2 bg-blue-500 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-400 hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.4)] w-full sm:w-auto"
                    >
                      View Developer Plan
                   </Link>
                </div>
                
                <Link to="/subscriptions" className="mt-8 block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-400/50 transition-all group w-full">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <div className="text-white font-bold text-xl mb-1 group-hover:text-blue-300 transition-colors">
                        Looking for something else?
                      </div>
                      <div className="text-white/75 text-sm md:text-base leading-relaxed">
                        There are more membership subscriptions and options available. <span className="text-blue-300 font-semibold underline underline-offset-4 decoration-blue-500/50">Click here to compare all plans.</span>
                      </div>
                    </div>
                    <ArrowRight size={24} className="text-blue-400 group-hover:translate-x-1 transition-transform shrink-0" />
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="relative">
               <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
                  <h3 className="text-2xl font-bold mb-6 text-white text-center">Need reports for a single site?</h3>
                  <p className="text-center text-white/60 mb-8">You don't need a subscription. Browse our pre-configured bundles designed specifically for land acquisition due diligence.</p>
                  
                  <div className="space-y-4">
                    <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between border border-white/5 hover:bg-white/15 transition-colors cursor-pointer" onClick={() => window.location.href='/order-report?report=developer-due-diligence'}>
                       <div>
                         <div className="font-bold text-white mb-1">Developer Due Diligence</div>
                         <div className="text-sm text-white/60">Full constraint and financial viability.</div>
                       </div>
                       <div className="text-right">
                         <div className="font-bold text-blue-300">£3,095</div>
                         <ArrowRight size={16} className="text-white/40 ml-auto mt-1" />
                       </div>
                    </div>
                    
                    <div className="bg-white/10 p-4 rounded-xl flex items-center justify-between border border-white/5 hover:bg-white/15 transition-colors cursor-pointer" onClick={() => window.location.href='/order-report?report=triple-threat'}>
                       <div>
                         <div className="font-bold text-white mb-1">The Triple Threat</div>
                         <div className="text-sm text-white/60">Fast screening for fatal flaws.</div>
                       </div>
                       <div className="text-right">
                         <div className="font-bold text-blue-300">£2,375</div>
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
              <span className="font-mono text-sm uppercase tracking-[0.3em] font-bold text-blue-600 mb-4 block">Buy One-Off</span>
              <h2 className="text-3xl md:text-5xl font-bold text-brand-primary">The Due Diligence Packs</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 lg:p-12 rounded-[2.5rem] bg-white border border-gray-200 shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] group-hover:bg-blue-500/10 transition-colors" />
              <div className="relative z-10 flex flex-col items-start h-full pb-8">
                <div className="inline-block px-4 py-1.5 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6">Complete Review</div>
                <h3 className="text-3xl font-bold mb-4">Developer Due Diligence</h3>
                <p className="text-brand-secondary mb-8 text-lg">Full constraint screening, ground risk, flood risk, and financial viability.</p>
                
                <ul className="space-y-4 mb-20">
                  {['Site Feasibility Report', 'Geotechnical Desk Study', 'Flood Risk Assessment', 'Concept Feasibility Study', 'CIL Liability Assessment'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-brand-primary/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto w-full">
                  <div className="flex items-end gap-4 mb-8">
                    <span className="text-4xl font-bold text-brand-primary">£3,095</span>
                    <span className="text-brand-primary/40 line-through text-lg mb-1">RRP £6,415</span>
                  </div>

                  <Link
                    to="/order-report?report=developer-due-diligence"
                    className="block w-full text-center bg-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                  >
                    Order Due Diligence Pack
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
                <div className="inline-block px-4 py-1.5 rounded-full bg-teal-100 text-teal-700 font-bold text-xs uppercase tracking-widest mb-6">Fast Screening</div>
                <h3 className="text-3xl font-bold mb-4">The Triple Threat</h3>
                <p className="text-brand-secondary mb-8 text-lg">Quickly identify the three biggest killers of a development site: planning constraints, poor ground conditions, and flood risk.</p>
                
                <ul className="space-y-4 mb-20">
                  {['Site Feasibility Report', 'Geotechnical Desk Study', 'Flood Risk Assessment'].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="text-teal-500 shrink-0 mt-0.5" />
                      <span className="text-brand-primary/80 font-medium">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-auto w-full">
                  <div className="flex items-end gap-4 mb-8">
                    <span className="text-4xl font-bold text-brand-primary">£2,375</span>
                    <span className="text-brand-primary/40 line-through text-lg mb-1">RRP £4,600</span>
                  </div>

                  <Link
                    to="/order-report?report=triple-threat"
                    className="block w-full text-center bg-brand-primary text-white py-4 rounded-xl font-bold text-lg hover:bg-brand-primary/90 transition-colors"
                  >
                    Order Triple Threat
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

export default ForDevelopers;
