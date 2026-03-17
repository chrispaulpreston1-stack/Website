import { motion } from 'motion/react';
import { Volume2, ArrowRight, Info, Clock, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import ComparisonTable from '../components/ComparisonTable';
import { getReportBySlug } from '../data/reports';
import ReportMethodology from '../components/ReportMethodology';

const formatPrice = (n: number) => n.toLocaleString('en-GB');

const NoiseImpactAssessment = () => {
  const report = getReportBySlug('noise-impact-assessment')!;
  const features = [
    { title: "BS 4142 Commercial/Industrial Assessment", desc: "Rating level vs background sound analysis for nearby commercial or industrial uses." },
    { title: "BS 8233 Internal Ambient Assessment", desc: "Target internal noise levels for habitable rooms (bedrooms, living rooms, kitchens)." },
    { title: "ProPG Planning Assessment", desc: "Professional Practice Guidance for planning and noise — initial and detailed assessment stages." },
    { title: "Noise Source Identification", desc: "Desktop identification of all significant noise sources within 500m (roads, rail, commercial, industrial)." },
    { title: "Glazing Specification Guidance", desc: "Weighted sound reduction indices for windows and ventilators to achieve target internal levels." },
    { title: "Ventilation Strategy Impact", desc: "Assessment of overheating risk from closed-window noise mitigation strategies." },
    { title: "Construction Noise Screening", desc: "BS 5228 screening for construction phase noise and vibration impacts on sensitive receptors." },
    { title: "Noise Contour Mapping", desc: "Strategic noise map analysis using Defra Round 4 Lden and Lnight contours." }
  ];

  const comparisonCategories = [
    {
      title: "Technical Analysis",
      rows: [
        { feature: "BS 4142 assessment", pfco: true, competitor1: "Often outsourced", competitor2: false },
        { feature: "ProPG staged assessment", pfco: true, competitor1: "Rarely included", competitor2: false },
        { feature: "Glazing specification guidance", pfco: true, competitor1: "Generic advice", competitor2: false },
      ]
    },
    {
      title: "Regulatory Compliance",
      rows: [
        { feature: "BS 8233 internal levels", pfco: true, competitor1: "Often omitted", competitor2: false },
        { feature: "Ventilation overheating assessment", pfco: true, competitor1: "Not addressed", competitor2: false },
        { feature: "Defra noise contour mapping", pfco: true, competitor1: "Basic only", competitor2: false },
      ]
    },
    {
      title: "Value & Format",
      rows: [
        { feature: "Construction noise screening", pfco: true, competitor1: "Separate report", competitor2: false },
        { feature: "Proportional to noise risk (3-25 pages)", pfco: true, competitor1: "One-size-fits-all", competitor2: "Variable" },
        { feature: "Branded submission-ready Word document", pfco: true, competitor1: "Email summary", competitor2: "Generic template" },
      ]
    }
  ];

  return (
    <div className="pt-20">
      <PageSEO
        title="Noise Screening Report | Acoustic Screening | PF & Co"
        description="BS 4142/BS 8233/ProPG noise screening for residential schemes near roads, railways, or commercial uses."
        path="/site-intelligence/noise-impact-assessment"
        jsonLd={[
          {
            '@type': 'Product',
            name: 'Noise Screening Report',
            description: 'BS 4142/BS 8233/ProPG noise screening for residential schemes near roads, railways, or commercial uses.',
            brand: { '@type': 'Organization', name: 'PF & Co Site Intelligence' },
            offers: { '@type': 'Offer', price: String(report.earlyAccessPrice), priceCurrency: 'GBP' },
          },
          {
            '@type': 'VideoObject',
            name: 'Noise Screening Report — What\'s Inside Your Report',
            description: 'A walkthrough of the PF & Co Noise Screening Report, showing how we analyse Defra noise contours, assess against BS 4142 and BS 8233, and provide glazing specifications to help you satisfy council acoustic requirements.',
            thumbnailUrl: 'https://www.pfandco.co.uk/videos/noise-demo-thumb.jpg',
            contentUrl: 'https://www.pfandco.co.uk/videos/noise-demo.mp4',
            uploadDate: '2026-03-07',
            duration: 'PT1M28S',
            publisher: { '@type': 'Organization', name: 'PF & Co Site Intelligence', url: 'https://www.pfandco.co.uk' },
          },
          {
            '@type': 'FAQPage',
            mainEntity: [
              { '@type': 'Question', name: 'Do I always need a noise assessment?', acceptedAnswer: { '@type': 'Answer', text: 'Not always. Your council will request one if your site is near a significant noise source — typically major roads, railways, airports, or commercial/industrial uses. We can check your site-specific requirements.' } },
              { '@type': 'Question', name: 'Is this a full acoustic survey?', acceptedAnswer: { '@type': 'Answer', text: 'No — this is a desktop screening assessment using published noise data and strategic noise mapping. If your site has complex noise issues, we will recommend a full acoustic survey with on-site monitoring as a next step.' } },
              { '@type': 'Question', name: 'What standards do you follow?', acceptedAnswer: { '@type': 'Answer', text: 'We assess against BS 4142:2014+A1:2019 for commercial noise, BS 8233:2014 for internal ambient levels, and ProPG: Planning & Noise (2017) for residential development. All are referenced by the National Planning Practice Guidance.' } },
            ]
          }
        ]}
      />

      {/* Editorial Hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
          <div aria-hidden="true" className="text-[30vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10">
            NOISE
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs uppercase tracking-[0.4em] text-violet-400 font-bold mb-6 block">Site Intelligence / Product 18</span>
            <h1 className="text-7xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter">
              Noise Screening <br />
              <span className="text-violet-400 italic font-accent font-light">Report</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed mb-10 max-w-lg font-light">
              BS 4142/BS 8233/ProPG noise screening for residential schemes near roads, railways, or commercial uses.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
              <Link to="/order-report?report=noise-impact-assessment" className="px-10 py-5 bg-violet-500 text-white rounded-full font-bold hover:bg-violet-600 transition-all shadow-xl shadow-violet-500/20 flex items-center gap-2">
                Buy Now <Volume2 size={20} className="text-violet-200" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-16 h-16 bg-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-violet-500/40">
                    <Volume2 size={32} className="text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Acoustic Status</div>
                    <div className="text-sm font-bold text-violet-400 flex items-center gap-2 justify-end">
                      <ShieldCheck size={16} /> BS 8233 Assessed
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-8 font-accent italic">Noise Strategy</h3>

                <div className="space-y-6">
                  {[
                    { label: "Road Traffic Noise", score: 7, color: "bg-violet-400" },
                    { label: "Commercial Sources", score: 4, color: "bg-purple-400" },
                    { label: "Internal Ambient Level", score: 9, color: "bg-emerald-400" },
                    { label: "Mitigation Effectiveness", score: 8, color: "bg-violet-400" }
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
                  <div className="text-[10px] font-mono uppercase tracking-widest text-white/60 mb-1">Noise Context</div>
                  <div className="text-lg font-bold">Defra Round 4 <span className="text-xs font-normal opacity-60">(Strategic Mapping)</span></div>
                </div>
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center animate-float">
                  <Info size={20} className="text-violet-400" />
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
              <span className="text-violet-500 font-bold text-sm uppercase tracking-widest mb-4 block">The Core Analysis</span>
              <h2 className="text-5xl font-bold mb-8 leading-tight text-brand-primary">Why Acoustic Evidence is a <br /><span className="font-accent italic font-light text-violet-600">Planning Requirement.</span></h2>
              <p className="text-brand-primary/60 text-lg leading-relaxed mb-12 font-light">
                Councils routinely condition noise assessments for sites near roads, railways, or commercial uses. Without proportionate acoustic evidence, your application risks refusal or costly delays.
              </p>
              <div className="space-y-4">
                {features.slice(0, 4).map((f, i) => (
                  <div key={i} className="flex gap-4 p-6 rounded-2xl bg-brand-surface border border-brand-primary/5">
                    <div className="w-6 h-6 rounded-full bg-violet-500 flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">{i+1}</div>
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
                    <div className="h-px bg-brand-primary/10 w-full mb-6 group-hover:bg-violet-500 transition-colors" />
                    <h4 className="font-bold text-xl mb-3 text-brand-primary">{f.title}</h4>
                    <p className="text-brand-primary/60 text-sm leading-relaxed font-light">{f.desc}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-12 bg-brand-primary rounded-[3rem] text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/20 blur-[80px]" />
                <h3 className="text-3xl font-bold mb-6 relative z-10">48-72hr Turnaround <br /><span className="text-violet-400 italic font-accent font-light">Typical.</span></h3>
                <p className="text-white/60 mb-8 relative z-10 font-light">
                  Time is the biggest risk in any development. We deliver our Noise Screening Reports within 48-72 hours of instruction, so you can make decisions at the speed of the market.
                </p>
                <Link to="/contact" className="inline-flex items-center gap-2 font-bold text-violet-400 hover:gap-4 transition-all relative z-10">
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
            title="Noise Screening Report"
            subtitle="What you get vs a typical consultant"
            columns={["Feature", "PF&Co Site Intelligence", "Typical Consultant", "Basic Mention"]}
            categories={comparisonCategories}
            footerNote="Comparison based on typical UK acoustic consultancy practices. PF&Co Noise Screening Report references Defra Round 4 strategic noise maps and all relevant British Standards."
            accentColor="text-violet-500"
          />
        </div>
      </section>

      {/* Scenarios Section - Editorial Grid */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-4 tracking-tight text-brand-primary">When You Need <span className="font-accent italic font-light text-violet-600">Certainty.</span></h2>
            <p className="text-brand-primary/60 max-w-2xl mx-auto font-light">Critical scenarios where a Noise Screening Report is essential for planning.</p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-px bg-brand-primary/10 border border-brand-primary/10 rounded-[2rem] overflow-hidden">
            {[
              { s: "Road Traffic", r: "Major road nearby", c: "Glazing spec + ventilation strategy" },
              { s: "Railway", r: "Rail corridor within 200m", c: "Vibration screening + sound insulation" },
              { s: "Commercial", r: "Adjacent business uses", c: "BS 4142 rating level assessment" },
              { s: "Mixed-Use", r: "Ground floor commercial", c: "Internal separation requirements" },
              { s: "Construction", r: "Sensitive receptors", c: "BS 5228 construction noise limits" },
            ].map((row, i) => (
              <div key={i} className="bg-white p-8 hover:bg-brand-surface transition-colors flex flex-col justify-between min-h-[250px]">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-violet-500 font-bold mb-4">Scenario 0{i+1}</div>
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
        const report = getReportBySlug('noise-impact-assessment');
        return report?.methodologySummary ? (
          <ReportMethodology methodologySummary={report.methodologySummary} dataCategories={report.dataCategories || []} />
        ) : null;
      })()}

      {/* FAQ - Minimal Editorial */}
      <section className="py-32 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center font-accent italic text-violet-600">Common Inquiries</h2>
          <div className="space-y-12">
            {[
              { q: "Do I always need a noise assessment?", a: "Not always. Your council will request one if your site is near a significant noise source — typically major roads, railways, airports, or commercial/industrial uses. We can check your site-specific requirements." },
              { q: "Is this a full acoustic survey?", a: "No — this is a desktop screening assessment using published noise data and strategic noise mapping. If your site has complex noise issues, we will recommend a full acoustic survey with on-site monitoring as a next step." },
              { q: "What standards do you follow?", a: "We assess against BS 4142:2014+A1:2019 for commercial noise, BS 8233:2014 for internal ambient levels, and ProPG: Planning & Noise (2017) for residential development. All are referenced by the National Planning Practice Guidance." }
            ].map((item, i) => (
              <div key={i} className="group">
                <h4 className="text-xl font-bold mb-4 flex items-center gap-4 text-brand-primary">
                  <span className="text-violet-500 font-mono text-sm">Q.</span>
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
        <div className="bg-violet-600 rounded-[4rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-violet-600/20">
          <div className="absolute inset-0 opacity-10 engineering-grid" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent animate-scan" />

          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tighter">Ready to Satisfy Your <br />Acoustic Requirements?</h2>
            <p className="text-white/80 text-xl mb-12 max-w-2xl mx-auto font-light">
              Get submission-ready noise screening evidence for your planning application. Proportionate to your site's noise risk, specific to your council's expectations.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link
                to="/contact"
                className="px-12 py-6 bg-white text-violet-600 rounded-full font-bold hover:scale-105 transition-all shadow-xl"
              >
                Get Your Noise Assessment
              </Link>
              <div className="flex items-center gap-3 px-8 py-6 bg-violet-700/50 backdrop-blur-md rounded-full border border-white/10 text-sm font-bold">
                <Clock size={18} />
                48-72hr Delivery
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NoiseImpactAssessment;
