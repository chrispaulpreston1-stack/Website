import { motion } from 'motion/react';
import { Landmark, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, History, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';

const HeritageImpactAssessment = () => {
  const features = [
    { title: "HEAN 12 Significance Assessment", desc: "Assessment against the four interests: archaeological, architectural, historic, and artistic." },
    { title: "Setting Assessment per GPA 3", desc: "Stepped approach to assess how development affects an asset's significance through its setting." },
    { title: "NPPF Heritage Balance Test", desc: "Application of the correct heritage balance test with precise paragraph references (Dec 2024)." },
    { title: "NHLE Data Integration", desc: "Integration of listing descriptions and designation details from Historic England's NHLE." },
    { title: "Conservation Area Analysis", desc: "Review of council CA Appraisals to identify special character and respond to it." },
    { title: "Archaeological Records Review", desc: "Consultation of county Historic Environment Records (HER) for recorded activity." },
    { title: "Site History Timeline", desc: "Narrative of site development over time using historic mapping and documentary sources." },
    { title: "Mitigation Recommendations", desc: "Proportionate mitigation measures and heritage enhancement opportunities." }
  ];

  const comparisonCategories = [
    {
      title: "Methodology",
      rows: [
        { feature: "HEAN 12 four-interest framework", pfco: true, competitor1: true, competitor2: "Variable" },
        { feature: "Setting assessment per GPA 3", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "Correct NPPF paragraph references (Dec 2024)", pfco: true, competitor1: "Often outdated", competitor2: false },
      ]
    },
    {
      title: "Data Sources",
      rows: [
        { feature: "NHLE data pulled and cited", pfco: true, competitor1: true, competitor2: "Basic" },
        { feature: "Conservation area appraisal reviewed", pfco: true, competitor1: "Sometimes", competitor2: false },
        { feature: "County HER records consulted", pfco: true, competitor1: "Varies", competitor2: false },
      ]
    },
    {
      title: "Delivery & Format",
      rows: [
        { feature: "Branded, submission-ready Word document", pfco: true, competitor1: "PDF only", competitor2: "Email only" },
        { feature: "Proportionate scope (no padding)", pfco: true, competitor1: "Often over-scoped", competitor2: "Variable" },
        { feature: "Typical turnaround under 5 working days", pfco: true, competitor1: "2–4 weeks", competitor2: "Variable" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Heritage Impact Assessment (HIA) | Heritage Statements | PF & Co"
        description="A proportionate, evidence-based heritage statement for planning applications affecting listed buildings, conservation areas, and scheduled monuments."
        path="/site-intelligence/heritage-impact-assessment"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Heritage Impact Assessment',
            description: 'Evidence-based heritage statement for planning applications affecting listed buildings, conservation areas, and scheduled monuments.',
            brand: { '@type': 'Organization', name: 'PF & Co Construction' },
            offers: { '@type': 'Offer', price: '725', priceCurrency: 'GBP' },
          },
          {
            '@type': 'VideoObject',
            name: 'Heritage Impact Assessment — What\'s Inside Your Report',
            description: 'A walkthrough of the PF & Co Heritage Impact Assessment, covering HEAN 12 significance analysis, GPA 3 setting assessment, NPPF heritage balance tests, and how the report supports your planning application for sites near listed buildings, conservation areas, and scheduled monuments.',
            thumbnailUrl: 'https://www.pfcoconstruction.co.uk/videos/heritage-demo-thumb.jpg',
            contentUrl: 'https://www.pfcoconstruction.co.uk/videos/heritage-demo.mp4',
            uploadDate: '2026-03-02',
            duration: 'PT1M26S',
            publisher: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfcoconstruction.co.uk' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'How do I know if my site is near a heritage asset?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'You can search the National Heritage List for England (NHLE). Alternatively, provide us with your address and we will confirm the heritage context for you at no charge.'
                }
              },
              {
                '@type': 'Question',
                name: 'What is the NPPF heritage balance test?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: "The NPPF requires different tests depending on harm. 'Less than substantial harm' requires the harm to be weighed against public benefits. Our report identifies the right test and presents your case accordingly."
                }
              },
              {
                '@type': 'Question',
                name: 'Do I need this for a conservation area extension?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'In most cases, yes. Even for householder extensions, the validation checklist usually includes heritage evidence when within a CA.'
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
            HERITAGE
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-amber-400 font-bold mb-6 block">Site Intelligence / Product 09</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Heritage <br />
              <span className="text-amber-400 italic font-accent font-light">Impact Assessment</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              A proportionate, evidence-based heritage statement for planning applications affecting listed buildings, conservation areas, and scheduled monuments.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=heritage-impact-assessment" className="px-10 py-5 bg-amber-600 text-white rounded-full font-bold hover:bg-amber-700 transition-all shadow-xl shadow-amber-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-amber-200" />
              </Link>
              <a href="/samples/heritage-impact-assessment-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-amber-400" />
              </a>
              <div className="flex flex-col">
                <div className="inline-block px-3 py-1 bg-brand-accent/20 border border-brand-accent/30 rounded-full text-brand-accent text-[10px] uppercase tracking-widest font-bold mb-3 self-start">
                  Early Access Pricing - 40% off all reports.
                </div>
                <div className="flex items-baseline gap-3 mb-1">
                  <span className="text-3xl font-mono font-bold text-white">Early Access: £725</span>
                  <span className="text-base text-white/50 line-through font-medium">Was £1,200</span>
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
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/40">
                    <Landmark size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Heritage Status</div>
                    <div className="text-sm font-bold text-amber-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> HEAN 12 Compliant
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Significance Profile</h3>
                
                <div className="space-y-6">
                  {[
                    { label: "Architectural Interest", score: 9, color: "bg-amber-400" },
                    { label: "Historic Interest", score: 8, color: "bg-blue-400" },
                    { label: "Archaeological Risk", score: 4, color: "bg-emerald-400" },
                    { label: "Setting Impact", score: 6, color: "bg-amber-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Designation Context</div>
                  <div className="text-lg font-bold">Grade II Listed <span className="text-xs font-normal opacity-60">(Medium Sensitivity)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <History size={20} className="text-amber-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer
        title="Heritage Impact Assessment"
        accentColor="amber-500"
        description="See how we assess significance against the four HEAN 12 interests — architectural, historic, archaeological, and artistic — and apply the correct NPPF heritage balance test for your planning application."
        thumbnailUrl="/videos/heritage-demo-thumb.jpg"
        videoUrl="/videos/heritage-demo.mp4"
        duration="1:26"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why You Cannot <br /><span className="font-accent italic font-light text-amber-600">Ignore Heritage.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                If your site is within the setting of a listed building or conservation area, you need a Heritage Statement. Without one, your application will be invalidated.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-amber-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-amber-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-amber-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-amber-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-amber-400 hover:gap-4 transition-all relative z-10">
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
            title="Heritage Impact Assessment"
            subtitle="What you get vs a typical heritage consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Statement"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK heritage consultancy practices. PF&Co HIA follows HEAN 12 and references the latest NPPF (Dec 2024) Chapter 16 requirements."
            accentColor="text-amber-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-amber-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Heritage Impact Assessment is mandatory for planning.</p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Listed Buildings", r: "Direct or setting", c: "Proportionate to grade and proximity" },
              { s: "Conservation Areas", r: "Development within", c: "References council CA Appraisals" },
              { s: "Scheduled Monuments", r: "Nearby sites", c: "Setting assessment per GPA 3" },
              { s: "Non-Designated", r: "Local assets", c: "NPPF para 216 balanced judgement" },
              { s: "Locally Listed", r: "Character assets", c: "Moderate significance assessment" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-amber-500 font-bold mb-4">Scenario 0{i+1}</div>
                  <h4 className="text-xl font-bold mb-2 text-brand-primary">{row.s}</h4>
                  <p className="text-xs text-brand-primary/60 uppercase tracking-wider font-bold mb-6">{row.r}</p>
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
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-amber-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "How do I know if my site is near a heritage asset?", a: "You can search the National Heritage List for England (NHLE). Alternatively, provide us with your address and we will confirm the heritage context for you at no charge." },
              { q: "What is the NPPF heritage balance test?", a: "The NPPF requires different tests depending on harm. 'Less than substantial harm' requires the harm to be weighed against public benefits. Our report identifies the right test and presents your case accordingly." },
              { q: "Do I need this for a conservation area extension?", a: "In most cases, yes. Even for householder extensions, the validation checklist usually includes heritage evidence when within a CA." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-amber-500 font-mono text-sm">Q.</span>
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
        <div className="bg-amber-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-amber-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Heritage Assets <br />Nearby?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get the evidence your application needs. Send us the site address and we'll confirm the heritage context — no obligation.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link 
                to="/contact"
                className="px-12 py-6 bg-white text-amber-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Order Heritage Assessment
              </Link>
              <a href="/samples/heritage-impact-assessment-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-amber-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-amber-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
              <div className="flex items-center gap-3 px-8 py-6 bg-amber-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
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

export default HeritageImpactAssessment;
