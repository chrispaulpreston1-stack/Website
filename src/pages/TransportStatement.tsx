import { motion } from 'motion/react';
import { Truck, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, Navigation, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';
import { getReportBySlug } from '../data/reports';
import ReportMethodology from '../components/ReportMethodology';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const TransportStatement = () => {
  const report = getReportBySlug('transport-statement')!;
  const features = [
    { title: "TRICS Trip Generation Analysis", desc: "Standardised trip generation calculations using the industry-leading TRICS database." },
    { title: "Sustainable Transport Audit", desc: "Walking, cycling, and public transport accessibility audit with distance mapping." },
    { title: "Highway Safety Review", desc: "Review of local accident data (CrashMap) to identify existing safety concerns." },
    { title: "NPPF Chapter 9 Compliance", desc: "Demonstration of compliance with national policy on promoting sustainable transport." },
    { title: "Site Access Assessment", desc: "Review of proposed access arrangements against visibility and safety standards." },
    { title: "Parking Provision Analysis", desc: "Justification of parking levels against local standards and Census ownership data." },
    { title: "Local Policy Review", desc: "Assessment against the transport and highways policies of your specific local plan." },
    { title: "Mitigation Strategy", desc: "Proposed measures to manage transport impact, such as Travel Plans or cycle improvements." }
  ];

  const comparisonCategories = [
    {
      title: "Analysis Depth",
      rows: [
        { feature: "TRICS trip generation analysis", pfco: true, competitor1: true, competitor2: false },
        { feature: "Sustainable transport accessibility mapping", pfco: true, competitor1: true, competitor2: "Basic" },
        { feature: "CrashMap accident data review", pfco: true, competitor1: "Sometimes", competitor2: false },
      ]
    },
    {
      title: "Policy & Compliance",
      rows: [
        { feature: "NPPF Chapter 9 compliance demonstrated", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Local plan transport policy review", pfco: true, competitor1: true, competitor2: true },
        { feature: "Parking standard justification (Census data)", pfco: true, competitor1: "Rarely included", competitor2: false },
      ]
    },
    {
      title: "Delivery & Format",
      rows: [
        { feature: "Branded, submission-ready Word document", pfco: true, competitor1: "PDF only", competitor2: "Email only" },
        { feature: "Fixed price with no hidden extras", pfco: true, competitor1: "Hourly typical", competitor2: "Variable" },
        { feature: "Typical turnaround under 7 working days", pfco: true, competitor1: "3–6 weeks", competitor2: "Variable" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Transport Statement | Highways & Accessibility | PF & Co"
        description="A professional transport statement for planning applications — covering trip generation, accessibility, and highways safety."
        path="/site-intelligence/transport-statement"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Transport Statement',
            description: 'Professional transport statement covering trip generation, accessibility, and highways safety.',
            brand: { '@type': 'Organization', name: 'PF & Co Construction' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
            subjectOf: {
              '@type': 'VideoObject',
              name: 'Transport Statement Explainer',
              description: 'Learn how our Transport Statements analyse trip generation, accessibility, and highways safety for planning applications.',
              thumbnailUrl: 'https://www.pfcoconstruction.co.uk/videos/transport-statement-thumb.jpg',
              contentUrl: 'https://www.pfcoconstruction.co.uk/videos/transport-statement-demo.mp4',
              uploadDate: new Date().toISOString().split('T')[0],
              duration: 'PT1M36S',
              publisher: {
                '@type': 'Organization',
                name: 'PF & Co Construction',
                logo: {
                  '@type': 'ImageObject',
                  url: 'https://www.pfcoconstruction.co.uk/logo.png'
                }
              }
            }
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What is the difference between a Transport Statement and Assessment?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A Transport Statement is for smaller developments with lower impacts. A Transport Assessment is for larger schemes that require more detailed junction modeling and impact analysis.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is TRICS data?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'TRICS is the national standard database for trip generation. It allows us to predict how many vehicle movements your development will generate based on similar sites across the UK.'
                }
              },
              {
                '@type': 'Question',
                name: 'Do I need this for a small residential scheme?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Many councils require a Transport Statement for schemes of 5-10+ dwellings, or where there are specific local highways concerns or parking shortfalls.'
                }
              }
            ]
          }
        ]}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            TRANSPORT
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-blue-400 font-bold mb-6 block">Site Intelligence / Product 14</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter text-white">
              Transport <br />
              <span className="text-blue-400 italic font-accent font-light">Statement</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              A professional transport statement for planning applications — covering trip generation, accessibility, and highways safety.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=transport-statement" className="px-10 py-5 bg-blue-600 text-white rounded-full font-bold hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-blue-200" />
              </Link>
              <a href="/samples/transport-statement-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-blue-400" />
              </a>
              <div className="flex flex-col">
                <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent text-[10px] uppercase tracking-widest font-bold mb-3 self-start">
                  Early Access Pricing - Up to 40% off.
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-mono font-bold text-white">Early Access: £{formatPrice(report.earlyAccessPrice)}</span>
                  <span className="text-base text-white/50 line-through font-medium">Was £{formatPrice(report.rrp)}</span>
                </div>
                <span className="text-xs text-white/70 italic">First 50 reports at early access pricing</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/40">
                    <Truck size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Highways Status</div>
                    <div className="text-sm font-bold text-blue-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> TRICS Verified
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Accessibility Profile</h3>

                <div className="space-y-6">
                  {[
                    { label: "Trip Generation", score: 4, color: "bg-blue-400" },
                    { label: "Sustainable Access", score: 9, color: "bg-emerald-400" },
                    { label: "Highways Safety", score: 8, color: "bg-blue-400" },
                    { label: "Parking Compliance", score: 7, color: "bg-amber-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Transport Context</div>
                  <div className="text-lg font-bold">Sustainable Hub <span className="text-xs font-normal opacity-60">(Low Impact)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Navigation size={20} className="text-blue-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Video Explainer Section */}
      <VideoExplainer
        title="Transport Statements Explained"
        description="Watch how we analyse trip generation, sustainable accessibility, and local highways safety data to give your development the best chance of planning approval."
        videoUrl="/videos/transport-statement-demo.mp4"
        thumbnailUrl="/videos/transport-statement-thumb.jpg"
        duration="1:36"
        accentColor="bg-blue-500"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-blue-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why Transport Impact <br /><span className="font-accent italic font-light text-blue-600">Matters.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Highways impact is a major concern for councils and residents. A Transport Statement provides the data to show that your proposal is safe, sustainable, and manageable.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i + 1}</div>
                    <div>
                      <h4 className="font-bold mb-1 text-brand-primary">{f.title}</h4>
                      <p className="text-sm text-brand-primary/60 font-light">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="grid sm:grid-cols-2 gap-8">
                {features.slice(4).map((f, i) => (
                  <div key={i} className="group">
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-blue-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-blue-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-blue-400 hover:gap-4 transition-all relative z-10">
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
            title="Transport Statement"
            subtitle="What you get vs a typical transport consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Advice"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK transport consultancy practices. PF&Co Transport Statement pulls data from 60 authoritative sources and uses TRICS for standardised trip generation."
            accentColor="text-blue-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-blue-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Transport Statement is essential for planning.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Small-Medium Dev", r: "Core use case", c: "Residential or commercial schemes below assessment threshold" },
              { s: "Change of Use", r: "Intensified use", c: "Compare existing vs proposed trip generation" },
              { s: "Highways Safety", r: "CrashMap data", c: "Identify and address local accident patterns" },
              { s: "Sustainable Hubs", r: "Accessibility", c: "Demonstrate low car dependency via mapping" },
              { s: "Urban Infill", r: "Parking data", c: "Justify reduced parking via Census data" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold mb-4">Scenario 0{i + 1}</div>
                  <h4 className="text-xl font-bold mb-2 text-brand-primary">{row.s}</h4>
                  <p className="text-xs text-brand-primary/60 uppercase tracking-wider font-bold mb-6">{row.r}</p>
                </div>
                <p className="text-sm text-brand-primary/60 italic font-accent font-light">{row.c}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Methodology */}
      {(() => {
        const report = getReportBySlug('transport-statement');
        return report?.methodologySummary ? (
          <ReportMethodology methodologySummary={report.methodologySummary} dataCategories={report.dataCategories || []} />
        ) : null;
      })()}

      {/* FAQ - Minimal Editorial */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-blue-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "What is the difference between a Transport Statement and Assessment?", a: "A Transport Statement is for smaller developments with lower impacts. A Transport Assessment is for larger schemes that require more detailed junction modeling and impact analysis." },
              { q: "What is TRICS data?", a: "TRICS is the national standard database for trip generation. It allows us to predict how many vehicle movements your development will generate based on similar sites across the UK." },
              { q: "Do I need this for a small residential scheme?", a: "Many councils require a Transport Statement for schemes of 5-10+ dwellings, or where there are specific local highways concerns or parking shortfalls." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-blue-500 font-mono text-sm">Q.</span>
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

      
      {/* MEGA PILLAR CROSS-LINK */}
      <section className="max-w-4xl mx-auto px-6 pb-24 -mt-8">
        <div className="bg-brand-surface border-2 border-brand-accent/20 rounded-[2rem] p-8 md:p-10 text-center shadow-xl shadow-brand-primary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-[50px] rounded-full" />
          <p className="text-brand-primary/90 font-medium text-lg md:text-xl relative z-10 leading-relaxed">
            Not sure which reports you need? <br className="hidden sm:block" />
            See our complete engineering guide: <br className="hidden sm:block" />
            <a href="/insights/what-reports-do-you-need-for-planning-permission" className="text-brand-accent font-bold hover:underline decoration-2 underline-offset-4 mt-2 inline-block">
              What Reports Do You Need for Planning Permission? &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* Final CTA - High Impact */}
      <section className="max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-blue-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Highways Concerns <br />on Your Site?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get the data to address them. Send us the site address and proposal details — no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-white text-blue-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Order Transport Statement
              </Link>
              <a href="/samples/transport-statement-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-blue-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-blue-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
              <div className="flex items-center gap-3 px-8 py-6 bg-blue-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
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

export default TransportStatement;
