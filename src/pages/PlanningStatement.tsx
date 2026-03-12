import { motion } from 'motion/react';
import { FileText, Check, ArrowRight, Info, HelpCircle, Clock, Zap, ShieldCheck, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import VideoExplainer from '../components/VideoExplainer';
import { getReportBySlug } from '../data/reports';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const PlanningStatement = () => {
  const report = getReportBySlug('planning-statement')!;
  const features = [
    { title: "13-Section Submission Document", desc: "Comprehensive document covering everything from site description to the planning balance." },
    { title: "Policy Compliance Matrix", desc: "Clear table mapping your proposal against every relevant local plan and NPPF policy." },
    { title: "Planning Balance Analysis", desc: "Formal weighing of material considerations, mirroring the structure used in officer reports." },
    { title: "Housing Supply Context", desc: "Assessment of the council's 5-year housing land supply and the 'tilted balance' where applicable." },
    { title: "Material Considerations", desc: "Structured assessment of design, amenity, highways, heritage, ecology, and flood risk." },
    { title: "Site Description & Constraints", desc: "Thorough description drawn from our constraint analysis to set the policy scene." },
    { title: "Design & Layout Justification", desc: "Explanation of design rationale in planning terms, responding to local character and amenity." },
    { title: "Planning Conditions Forecast", desc: "Anticipation of likely conditions based on council standards so you can prepare in advance." }
  ];

  const comparisonCategories = [
    {
      title: "Policy Analysis",
      rows: [
        { feature: "Council-specific policy references (named & numbered)", pfco: true, competitor1: "Generic NPPF only", competitor2: false },
        { feature: "Policy Compliance Matrix for every relevant policy", pfco: true, competitor1: "Summary paragraph", competitor2: false },
        { feature: "Planning balance analysis (officer format)", pfco: true, competitor1: "Brief conclusion", competitor2: false },
      ]
    },
    {
      title: "Intelligence & Context",
      rows: [
        { feature: "Housing land supply assessment", pfco: true, competitor1: "Rarely considered", competitor2: false },
        { feature: "Site constraint data integrated from SFR", pfco: true, competitor1: "Basic check", competitor2: false },
        { feature: "Planning conditions forecast", pfco: true, competitor1: "Not provided", competitor2: false },
      ]
    },
    {
      title: "Delivery & Format",
      rows: [
        { feature: "Branded Word document (not just PDF)", pfco: true, competitor1: "Letter or email", competitor2: "Variable" },
        { feature: "National coverage (any English council)", pfco: true, competitor1: "Often local only", competitor2: true },
        { feature: "Typical turnaround under 7 working days", pfco: true, competitor1: "2–4 weeks", competitor2: "Variable" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Planning Statement | Submission-Ready Policy Evidence | PF & Co"
        description="A submission-ready document that demonstrates exactly how your proposal complies with planning policy — so the officer doesn't have to guess."
        path="/site-intelligence/planning-statement"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Planning Statement',
            description: 'Submission-ready document demonstrating how your proposal complies with planning policy.',
            brand: { '@type': 'Organization', name: 'PF & Co Construction' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
          },
          {
            '@type': 'VideoObject',
            name: 'Planning Statement — What\'s Inside Your Report',
            description: 'A walkthrough of the PF & Co Planning Statement, showing how we demonstrate exactly how your proposal complies with local planning policy.',
            thumbnailUrl: 'https://www.pfcoconstruction.co.uk/videos/planning-statement-thumb.jpg',
            contentUrl: 'https://www.pfcoconstruction.co.uk/videos/planning-statement-demo.mp4',
            uploadDate: '2026-03-02',
            duration: 'PT1M27S',
            publisher: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfcoconstruction.co.uk' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'Is this different from a Design and Access Statement?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. A Planning Statement addresses policy compliance — why it should be approved. A DAS addresses the design process and accessibility — how it was designed.'
                }
              },
              {
                '@type': 'Question',
                name: 'Which planning policies will you reference?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'We reference all relevant policies from the council\'s adopted local plan, any SPDs, neighbourhood plans, and the NPPF. Every reference is specific to your council.'
                }
              },
              {
                '@type': 'Question',
                name: 'Can you cover any council in England?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Yes. We research the Local Planning Authority for your site from scratch. If your site is in England, we can produce a Planning Statement for it.'
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
            PLANNING
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-emerald-400 font-bold mb-6 block">Site Intelligence / Product 11</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Planning <br />
              <span className="text-emerald-400 italic font-accent font-light">Statement</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              A submission-ready document that demonstrates exactly how your proposal complies with planning policy — so the officer doesn't have to guess.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=planning-statement" className="px-10 py-5 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
                Buy Now <Zap size={20} className="text-emerald-200" />
              </Link>
              <a href="/samples/planning-statement-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-10 py-5 bg-white/10 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} className="text-emerald-400" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-emerald-600 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/40">
                    <FileText size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Policy Status</div>
                    <div className="text-sm font-bold text-emerald-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> Submission Ready
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Planning Balance</h3>

                <div className="space-y-6">
                  {[
                    { label: "Policy Alignment", score: 9, color: "bg-emerald-400" },
                    { label: "Material Benefits", score: 8, color: "bg-blue-400" },
                    { label: "Mitigation Strategy", score: 9, color: "bg-emerald-400" },
                    { label: "Approval Probability", score: 7, color: "bg-amber-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Regulatory Context</div>
                  <div className="text-lg font-bold">NPPF Dec 2024 <span className="text-xs font-normal opacity-60">(Latest Framework)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Scale size={20} className="text-emerald-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <VideoExplainer
        title="Planning Statement"
        accentColor="emerald-500"
        description="Watch our walkthrough to see how we build a submission-ready document that demonstrates exactly how your proposal complies with planning policy."
        thumbnailUrl="/videos/planning-statement-thumb.jpg"
        videoUrl="/videos/planning-statement-demo.mp4"
        duration="1:27"
      />

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-emerald-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why You Need a <br /><span className="font-accent italic font-light text-emerald-600">Planning Statement.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Planning officers assess applications against policy. Most applications arrive with little analysis, leaving the officer to do the work. A Planning Statement does the groundwork for them.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i + 1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-emerald-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48hr Turnaround <br /><span className="text-emerald-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Tier 1 assessments within 48 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-emerald-400 hover:gap-4 transition-all relative z-10">
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
            title="Planning Statement"
            subtitle="What you get vs a typical planning consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Cover Letter"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK planning consultancy practices. PF&Co Planning Statement pulls data from 60 authoritative sources and references the latest NPPF (Dec 2024) and local plan policies."
            accentColor="text-emerald-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-emerald-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Planning Statement is essential for a successful application.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Full Planning", r: "Core use case", c: "Policy evidence for the officer" },
              { s: "Change of Use", r: "HMO/Commercial", c: "Use class analysis and policy compliance" },
              { s: "Listed Buildings", r: "Consent apps", c: "Heritage policy analysis included" },
              { s: "Conservation Areas", r: "Character zones", c: "Character and heritage policy assessment" },
              { s: "Major Dev", r: "10+ dwellings", c: "Housing supply and S106 analysis" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-emerald-500 font-bold mb-4">Scenario 0{i + 1}</div>
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
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-emerald-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "Is this different from a Design and Access Statement?", a: "Yes. A Planning Statement addresses policy compliance — why it should be approved. A DAS addresses the design process and accessibility — how it was designed." },
              { q: "Which planning policies will you reference?", a: "We reference all relevant policies from the council's adopted local plan, any SPDs, neighbourhood plans, and the NPPF. Every reference is specific to your council." },
              { q: "Can you cover any council in England?", a: "Yes. We research the Local Planning Authority for your site from scratch. If your site is in England, we can produce a Planning Statement for it." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-emerald-500 font-mono text-sm">Q.</span>
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
        <div className="bg-emerald-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Submit With <br />Confidence.</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Don't leave the planning officer guessing. Give them a document that makes the case for approval — clearly, thoroughly, and in their own language.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-white text-emerald-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Get Your Planning Statement
              </Link>
              <a href="/samples/planning-statement-sample.pdf" target="_blank" rel="noopener noreferrer" className="px-12 py-6 bg-emerald-700/50 backdrop-blur-md text-white border border-white/20 rounded-full font-bold hover:bg-emerald-800/50 transition-all flex items-center gap-2">
                Sample Report <FileText size={20} />
              </a>
              <div className="flex items-center gap-3 px-8 py-6 bg-emerald-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
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

export default PlanningStatement;
