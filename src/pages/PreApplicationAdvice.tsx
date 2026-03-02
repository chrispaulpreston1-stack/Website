import { motion } from 'motion/react';
import { MessageSquare, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';

const PreApplicationAdvice = () => {
  const features = [
    { title: "Professional Covering Letter", desc: "Formal introduction describing the site and proposal clearly in planning terms." },
    { title: "Site & Constraint Summary", desc: "Concise summary of planning constraints drawn from our 22-category desktop research." },
    { title: "Proposal Description", desc: "Structured description of use, scale, and layout, formatted for officer engagement." },
    { title: "Planning Policy Context", desc: "Identification of key local plan and NPPF policies to frame the enquiry." },
    { title: "5–10 Targeted Questions", desc: "Actionable questions designed to elicit specific answers on principle and showstoppers." },
    { title: "Supporting Constraint Data", desc: "Inclusion of relevant maps or planning history to provide the officer with evidence." },
    { title: "Branded Word Document", desc: "Professional pack ready for direct submission to the council's planning portal." },
    { title: "Ready for Submission", desc: "Finished document pack formatted for direct upload with your pre-app fee." }
  ];

  const comparisonCategories = [
    {
      title: "Enquiry Quality",
      rows: [
        { feature: "Targeted site-specific questions (5–10)", pfco: true, competitor1: "Often 1–2 vague", competitor2: false },
        { feature: "Full planning policy context provided", pfco: true, competitor1: "Usually none", competitor2: false },
        { feature: "Site constraint research (22+ categories)", pfco: true, competitor1: "Basic address only", competitor2: false },
      ]
    },
    {
      title: "Professionalism",
      rows: [
        { feature: "Formal covering letter included", pfco: true, competitor1: "Informal email", competitor2: false },
        { feature: "Proposal described in planning terms", pfco: true, competitor1: "Often unclear", competitor2: true },
        { feature: "Supporting constraint data included", pfco: true, competitor1: "Not provided", competitor2: false },
      ]
    },
    {
      title: "Delivery & Value",
      rows: [
        { feature: "Branded, submission-ready document", pfco: true, competitor1: "Unformatted email", competitor2: "Variable" },
        { feature: "Designed to extract actionable responses", pfco: true, competitor1: "Generic answers", competitor2: false },
        { feature: "Typical turnaround under 5 working days", pfco: true, competitor1: "Variable", competitor2: "Variable" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Pre-Application Advice | Planning Enquiry Packs | PF & Co"
        description="Ask the right questions before you commit to a full planning application — and get answers that actually shape your scheme."
        path="/site-intelligence/pre-application-advice"
        jsonLd={{
          '@type': 'Product',
          name: 'Pre-Application Advice Pack',
          description: 'Ask the right questions before committing to a full planning application.',
          brand: { '@type': 'Organization', name: 'PF & Co Construction' },
          offers: { '@type': 'Offer', price: '345', priceCurrency: 'GBP' },
        }}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <h1 className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            PRE-APP
          </h1>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-cyan-400 font-bold mb-6 block">Site Intelligence / Product 12</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Pre-Application <br />
              <span className="text-cyan-400 italic font-accent font-light">Advice Pack</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              Ask the right questions before you commit to a full planning application — and get answers that actually shape your scheme.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=pre-application-advice" className="px-10 py-5 bg-cyan-600 text-white rounded-full font-bold hover:bg-cyan-700 transition-all shadow-xl shadow-cyan-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-cyan-200" />
              </Link>
              <button className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-cyan-400" />
              </button>
              <div className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold mb-1">Introductory Offer</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-mono font-bold text-white">£375</span>
                  <span className="text-sm text-white/40 line-through">RRP £750</span>
                </div>
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
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/40">
                    <MessageSquare size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">Enquiry Status</div>
                    <div className="text-sm font-bold text-cyan-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> Targeted Pack
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Strategic Questions</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Policy Framing", score: 9, color: "bg-cyan-400" },
                    { label: "Constraint Evidence", score: 8, color: "bg-blue-400" },
                    { label: "Actionable Feedback", score: 9, color: "bg-cyan-400" },
                    { label: "Risk Identification", score: 7, color: "bg-amber-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/40 mb-1">Enquiry Context</div>
                  <div className="text-lg font-bold">Pre-Submission <span className="text-xs font-normal opacity-40">(Risk Mitigation)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <HelpCircle size={20} className="text-cyan-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer 
        title="Pre-Application Advice"
        accentColor="cyan-500"
        description="Watch our walkthrough to see how we draft targeted questions that force specific answers from planning officers, helping you avoid generic policy waffle and identify showstoppers early."
        thumbnailUrl="https://picsum.photos/seed/preapp/1280/720"
        duration="3:15"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-cyan-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Don't Guess — <br /><span className="font-accent italic font-light text-cyan-600">Ask the Right Questions.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Submit a vague enquiry and you'll get a vague response. Submit a well-researched, targeted enquiry and the officer will engage properly.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-cyan-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
                    <div>
                      <h4 className="font-bold mb-1 text-brand-primary">{f.title}</h4>
                      <p className="text-sm text-brand-primary/50 font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-8">
                {features.slice(4).map((f, i) => (
                  <div key={i} className="group">
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-cyan-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-emerald-400 italic font-accent font-light">Guaranteed.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-cyan-400 hover:gap-4 transition-all relative z-10">
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
            title="Pre-Application Advice Pack"
            subtitle="What you get vs a DIY submission"
            columns={["Feature", "PF&Co Site Intelligence", "DIY Submission", "Basic Email"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical DIY pre-application submissions. PF&Co Pre-App Pack pulls data from 15+ authoritative sources and frames questions within the relevant local policy context."
            accentColor="text-cyan-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-cyan-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Pre-Application enquiry is the smartest first step.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Risk Mitigation", r: "Pre-submission", c: "Test the principle before committing to full fees" },
              { s: "Change of Use", r: "HMO/Commercial", c: "Officer feedback on use class acceptability" },
              { s: "Conservation", r: "Character zones", c: "Heritage sensitivity check before design" },
              { s: "Listed Buildings", r: "Nearby assets", c: "Identify heritage concerns before design spend" },
              { s: "Complex Sites", r: "Multi-constraint", c: "Identify which constraints are showstoppers" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-cyan-500 font-bold mb-4">Scenario 0{i+1}</div>
                  <h4 className="text-xl font-bold mb-2 text-brand-primary">{row.s}</h4>
                  <p className="text-xs text-brand-primary/40 uppercase tracking-wider font-bold mb-6">{row.r}</p>
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
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-brand-primary text-cyan-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "What is a pre-application enquiry?", a: "It's an informal consultation with the council before a formal application. You describe your proposal, ask questions, and an officer provides feedback on policy issues and expectations." },
              { q: "Is the council's response binding?", a: "No. It's advisory and not binding. However, a positive response carries significant weight, and a negative response identifies showstoppers before you spend on a full application." },
              { q: "How does this save me money?", a: "A full application involves high fees, architect drawings, and consultant reports. A pre-app enquiry costs a fraction of that and tells you if the principle is acceptable first." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-cyan-500 font-mono text-sm">Q.</span>
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

      {/* Final CTA - High Impact */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-cyan-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-cyan-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Don't Guess — <br />Ask the Right Questions.</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Spend a fraction of the cost of a full application and find out where you stand. Targeted questions, professional presentation, actionable answers.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact"
                className="px-12 py-6 bg-white text-cyan-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Get Your Pre-App Pack
              </Link>
              <button className="px-12 py-6 bg-cyan-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-cyan-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </button>
              <div className="flex items-center gap-3 px-8 py-6 bg-cyan-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
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

export default PreApplicationAdvice;
