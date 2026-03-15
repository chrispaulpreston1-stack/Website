import { motion } from 'motion/react';
import { SunDim, ArrowRight, Info, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import { getReportBySlug } from '../data/reports';
import ReportMethodology from '../components/ReportMethodology';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const DaylightSunlightAssessment = () => {
  const report = getReportBySlug('daylight-sunlight-assessment')!;
  const features = [
    { title: "Vertical Sky Component (VSC)", desc: "BRE 209 assessment of daylight reaching windows of neighbouring properties." },
    { title: "Annual Probable Sunlight Hours (APSH)", desc: "Sun availability assessment for south-facing windows (winter and annual)." },
    { title: "No-Sky Line (NSL)", desc: "Assessment of the area within a room that can see the sky from the working plane." },
    { title: "Sun-on-Ground Assessment", desc: "Sunlight to amenity spaces including gardens, parks, and communal areas." },
    { title: "Transient Overshadowing Analysis", desc: "Shadow path analysis showing hourly shadow movement on key dates (21 March, 21 June)." },
    { title: "Massing Impact Screening", desc: "Desktop assessment of the proposed development's impact on neighbouring daylight access." },
    { title: "Mirror Image Test", desc: "Assessment of whether the development provides adequate daylight to its own proposed rooms." },
    { title: "Right to Light Screening", desc: "Preliminary screening of potential rights to light issues for adjacent properties." }
  ];

  const comparisonCategories = [
    {
      title: "Technical Analysis",
      rows: [
        { feature: "BRE 209 VSC assessment", pfco: true, competitor1: "Often outsourced", competitor2: false },
        { feature: "Sun-on-ground analysis", pfco: true, competitor1: "Rarely included", competitor2: false },
        { feature: "Transient overshadowing", pfco: true, competitor1: "Basic shadow study", competitor2: false },
      ]
    },
    {
      title: "Regulatory Compliance",
      rows: [
        { feature: "APSH winter/annual assessment", pfco: true, competitor1: "Annual only", competitor2: false },
        { feature: "No-Sky Line analysis", pfco: true, competitor1: "Often omitted", competitor2: false },
        { feature: "Right to Light screening", pfco: true, competitor1: "Not assessed", competitor2: false },
      ]
    },
    {
      title: "Value & Format",
      rows: [
        { feature: "Mirror image test (own rooms)", pfco: true, competitor1: "Not provided", competitor2: false },
        { feature: "Proportional to impact risk (5-25 pages)", pfco: true, competitor1: "One-size-fits-all", competitor2: "Variable" },
        { feature: "Branded submission-ready Word document", pfco: true, competitor1: "Email summary", competitor2: "Generic template" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Daylight & Sunlight Screening | BRE 209 Analysis | PF & Co"
        description="BRE 209 daylight/sunlight impact assessment including VSC, APSH, NSL, and sun-on-ground analysis."
        path="/site-intelligence/daylight-sunlight-assessment"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Daylight & Sunlight Screening',
            description: 'BRE 209 daylight/sunlight screening including VSC, APSH, NSL, and sun-on-ground risk indicators.',
            brand: { '@type': 'Organization', name: 'PF & Co Construction' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
          },
          {
            '@type': 'VideoObject',
            name: 'Daylight & Sunlight Assessment — What\'s Inside Your Report',
            description: 'A walkthrough of the PF & Co Daylight & Sunlight Assessment, showing how we apply BRE 209 methodology to assess VSC, APSH, and overshadowing impacts on neighbouring properties.',
            thumbnailUrl: 'https://www.pfandco.co.uk/videos/daylight-demo-thumb.jpg',
            contentUrl: 'https://www.pfandco.co.uk/videos/daylight-demo.mp4',
            uploadDate: '2026-03-07',
            duration: 'PT1M38S',
            publisher: { '@type': 'Organization', name: 'PF & Co Construction', url: 'https://www.pfandco.co.uk' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'When do I need a daylight/sunlight assessment?', acceptedAnswer: { '@type': 'Answer', text: 'Your council will typically request one when a new development could affect the daylight or sunlight received by neighbouring properties — particularly for extensions near boundaries, upper-floor additions, and multi-storey developments in urban areas. If a neighbour objects about loss of light, this report provides the evidence to respond.' } },
              { '@type': 'Question', name: 'Is this a full BRE 209 study with 3D modelling?', acceptedAnswer: { '@type': 'Answer', text: 'This is a desktop screening assessment using the BRE 209 methodology. It identifies whether your development is likely to cause a noticeable impact on neighbouring daylight and sunlight. If the screening identifies potential issues, we will recommend a full 3D modelling study as a next step.' } },
              { '@type': 'Question', name: 'What is VSC and why does it matter?', acceptedAnswer: { '@type': 'Answer', text: 'Vertical Sky Component measures the amount of sky visible from the centre of a window. BRE 209 recommends that VSC should not be reduced below 27%, or below 0.8 times its former value. If your development causes a reduction beyond these thresholds, the impact is considered noticeable and may need mitigation through design changes.' } },
            ]
          }
        ]}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            DAYLIGHT
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-yellow-400 font-bold mb-6 block">Site Intelligence / Product 21</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Daylight & <br />
              <span className="text-yellow-400 italic font-accent font-light">Sunlight</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              BRE 209 daylight/sunlight impact assessment including VSC, APSH, NSL, and sun-on-ground analysis.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=daylight-sunlight-assessment" className="px-10 py-5 bg-yellow-500 text-white rounded-full font-bold hover:bg-yellow-600 transition-all shadow-xl shadow-yellow-500/20 flex items-center gap-2">
                Buy Now <SunDim size={20} className="text-yellow-200" />
              </Link>
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
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/40">
                    <SunDim size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Impact Status</div>
                    <div className="text-sm font-bold text-yellow-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> BRE 209 Compliant
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Light Assessment</h3>

                <div className="space-y-6">
                  {[
                    { label: "VSC Compliance", score: 8, color: "bg-yellow-400" },
                    { label: "APSH Assessment", score: 7, color: "bg-yellow-500" },
                    { label: "Overshadowing Risk", score: 3, color: "bg-emerald-400" },
                    { label: "Right to Light", score: 6, color: "bg-yellow-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Assessment Standard</div>
                  <div className="text-lg font-bold">BRE 209 <span className="text-xs font-normal opacity-60">(2022 Edition)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Info size={20} className="text-yellow-400" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Editorial Content Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why Daylight Evidence is a <br /><span className="font-accent italic font-light text-yellow-600">Planning Essential.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                When your development could reduce daylight or sunlight to neighbouring properties, councils expect evidence that the impact is acceptable. A BRE 209 assessment quantifies the change and demonstrates compliance.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-yellow-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-yellow-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">72hr Turnaround <br /><span className="text-yellow-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our daylight and sunlight assessments within 72 hours of instruction, so you can respond to council requests and neighbour objections without delay.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-yellow-400 hover:gap-4 transition-all relative z-10">
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
            title="Daylight & Sunlight Assessment"
            subtitle="What you get vs a typical consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Mention"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK daylight/sunlight consultancy practices. PF&Co Assessment follows BRE 209 (2022) and the NPPF requirements for maintaining adequate amenity."
            accentColor="text-yellow-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-yellow-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Daylight & Sunlight Assessment protects your application.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Urban Infill", r: "Tight site with neighbours", c: "Full VSC + APSH + NSL assessment" },
              { s: "Extensions", r: "Side or rear addition", c: "Impact on neighbouring windows" },
              { s: "Upper Floors", r: "Loft or additional storey", c: "Shadow analysis + overshadowing" },
              { s: "Flatted", r: "Multi-unit development", c: "Mirror image test + amenity sun" },
              { s: "Objection", r: "Neighbour concern raised", c: "Evidence-based impact quantification" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-yellow-500 font-bold mb-4">Scenario 0{i+1}</div>
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
        const report = getReportBySlug('daylight-sunlight-assessment');
        return report?.methodologySummary ? (
          <ReportMethodology methodologySummary={report.methodologySummary} dataCategories={report.dataCategories || []} />
        ) : null;
      })()}

      {/* FAQ - Minimal Editorial */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-yellow-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "When do I need a daylight/sunlight assessment?", a: "Your council will typically request one when a new development could affect the daylight or sunlight received by neighbouring properties — particularly for extensions near boundaries, upper-floor additions, and multi-storey developments in urban areas. If a neighbour objects about loss of light, this report provides the evidence to respond." },
              { q: "Is this a full BRE 209 study with 3D modelling?", a: "This is a desktop screening assessment using the BRE 209 methodology. It identifies whether your development is likely to cause a noticeable impact on neighbouring daylight and sunlight. If the screening identifies potential issues, we will recommend a full 3D modelling study as a next step." },
              { q: "What is VSC and why does it matter?", a: "Vertical Sky Component measures the amount of sky visible from the centre of a window. BRE 209 recommends that VSC should not be reduced below 27%, or below 0.8 times its former value. If your development causes a reduction beyond these thresholds, the impact is considered noticeable and may need mitigation through design changes." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-yellow-500 font-mono text-sm">Q.</span>
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
        <div className="bg-yellow-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-yellow-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to Prove Your <br />Daylight Compliance?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get submission-ready BRE 209 evidence for your planning application. Quantified impact analysis, specific to your site and its neighbours.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-white text-yellow-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Get Your Assessment
              </Link>
              <div className="flex items-center gap-3 px-8 py-6 bg-yellow-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
                <Clock size={18} />
                72hr Delivery
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DaylightSunlightAssessment;
