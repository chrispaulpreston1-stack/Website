import { motion } from 'motion/react';
import { ShieldCheck, Check, ArrowRight, FileText, Layers, ClipboardCheck, HardHat, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import VideoExplainer from '../components/VideoExplainer';

const BuildingControl = () => {
    const features = [
        { title: "Structural Calculations (Part A)", desc: "Comprehensive structural engineering design and calculations fully compliant with UK Building Regulations Part A." },
        { title: "Pre-Application Advice", desc: "Early intervention to identify regulatory hurdles before you finalise your architectural proposals." },
        { title: "Building Regulations Drawings", desc: "Detailed technical drawings and specifications required by Local Authority Building Control or Approved Inspectors." },
        { title: "Site Inspections Liaison", desc: "We answer technical queries raised by the Building Inspector during the construction phase to keep the build moving." },
        { title: "Thermal & Acoustics (Part L & E)", desc: "Integration with specialists to ensure your project meets energy efficiency and sound insulation standards." },
        { title: "Drainage Design (Part H)", desc: "Compliant foul and surface water drainage layouts, ensuring smooth approval for Build Over Agreements." },
        { title: "Fire Safety (Part B)", desc: "Structural fire protection specifications and guidance seamlessly integrated into the structural design." },
        { title: "Completion Certificate Support", desc: "We provide all necessary structural sign-offs and documentation to help you secure the final Completion Certificate." }
    ];

    return (
        <div className="pt-20">
            <PageSEO
                title="BC Readiness Check | £150 | PF & Co"
                jsonLd={{
                    '@type': 'Product',
                    name: 'BC Readiness Check',
                    description: 'Ensure your proposals comply with building regulations before submission.',
                    brand: { '@type': 'Organization', name: 'PF & Co Construction' },
                    offers: { '@type': 'Offer', price: '150', priceCurrency: 'GBP' }
                }}
                description="Dedicated BC Readiness Check — ensure your proposals comply with building regs before submission for £150."
                path="/building-control"
            />

            {/* Editorial Hero */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
                    <div aria-hidden="true" className="text-[25vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10 whitespace-nowrap">
                        COMPLIANCE
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full pt-10 pb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.4em] text-emerald-400 font-bold mb-6 block">Structural Engineering / Compliance</span>
                        <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter text-white">
                            BC Readiness <br />
                            <span className="text-emerald-400 italic font-accent font-light">Check</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-6 max-w-lg font-light">
                            Done Right. Done Once.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
                            Securing Building Regulations approval shouldn't be a gamble. We provide the comprehensive structural calculations, detailed drawings, and expert liaison needed to satisfy inspectors and secure your Completion Certificate, stress-free.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <Link to="/contact" className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2">
                                Get a Quote <Zap size={20} className="text-emerald-200" />
                            </Link>
                            <div className="flex flex-col">
                                <div className="inline-block px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-[10px] uppercase tracking-widest font-bold mb-3 self-start">
                                    Early Access Pricing - Up to 40% off.
                                </div>
                                <div className="flex items-baseline gap-3 mb-1">
                                    <span className="text-3xl font-mono font-bold text-white">Early Access: £150</span>
                                    <span className="text-base text-white/50 line-through font-medium">Was £250</span>
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
                                        <ShieldCheck size={32} className="text-white" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Success Rate</div>
                                        <div className="text-sm font-bold text-emerald-400 flex items-center gap-2 justify-end">
                                            <Check size={16} /> 100% Approval
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 font-accent italic">The Human Safety Leap</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-8">
                                    While we utilize advanced AI for speed and optimisation, every calculation and drawing submitted to Building Control is rigorously reviewed, stamped, and verified by our qualified human engineers.
                                </p>

                                <div className="space-y-4 pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <Layers size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Part A Compliant</div>
                                            <div className="text-xs text-white/50">Structural Safety</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                                            <ClipboardCheck size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Full Documentation</div>
                                            <div className="text-xs text-white/50">Ready for Submission</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Overview Section */}
            <section className="py-24 bg-brand-surface">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <h2 className="text-4xl font-display font-bold text-brand-primary mb-6">Securing Your Completion Certificate</h2>
                        <p className="text-xl text-brand-primary/60 leading-relaxed">
                            Failing a building inspection delays the project and drains your budget. Our comprehensive Building Control package ensures your design is technically robust, fully compliant, and clearly communicated to the Local Authority or Approved Inspector.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-primary/5">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                <FileText size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-3">Structural Calculations</h3>
                            <p className="text-sm text-brand-primary/60">Detailed Part A calculations proving the integrity of beams, columns, foundations, and roofs.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-primary/5">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                <Layers size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-3">Regulatory Drawings</h3>
                            <p className="text-sm text-brand-primary/60">Clear, precise technical drawings detailing connections, materials, and structural layouts.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-primary/5">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                <HardHat size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-3">Site Inspections Liaison</h3>
                            <p className="text-sm text-brand-primary/60">We handle the technical queries from inspectors on-site, providing rapid solutions to keep you moving.</p>
                        </motion.div>
                        <motion.div whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-primary/5">
                            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6">
                                <ShieldCheck size={24} />
                            </div>
                            <h3 className="font-bold text-lg mb-3">Compliance Assured</h3>
                            <p className="text-sm text-brand-primary/60">Peace of mind that your build meets all UK regulations, safeguarding your investment and safety.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Video Explainer Placeholder */}
            {/* First Video */}
            <VideoExplainer
                title="Building Control Explained"
                accentColor="slate-500"
                description="A clear walkthrough of what Building Control is, when it's required, and the steps to get your project signed off legally."
                thumbnailUrl="https://images.unsplash.com/photo-1547683905-f686c993aae5?auto=format&fit=crop&q=80&w=800"
                videoUrl="/videos/building-control.mp4"
                duration="1:55"
            />

            {/* Second Video */}
            <VideoExplainer
                title="Building Control — What You Actually Need"
                accentColor="slate-400"
                description="A practical guide detailing the exact documentation, inspections, and requirements you need to successfully navigate Building Control."
                thumbnailUrl="https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800"
                videoUrl="/videos/building-control-need.mp4"
                duration="2:10"
            />

            {/* Features List */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-4xl font-display font-bold text-brand-primary mb-6">What We Deliver</h2>
                        <p className="text-xl text-brand-primary/60 mb-12">
                            Everything required to satisfy Building Control, from the initial calculations to the final on-site query resolution.
                        </p>

                        <div className="space-y-6">
                            {features.map((feature, i) => (
                                <div key={i} className="flex gap-4 items-start">
                                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-1">
                                        <Check size={14} />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-brand-primary">{feature.title}</h4>
                                        <p className="text-sm text-brand-primary/60">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-colors">
                                Start Your Project <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
                                alt="Building Control Inspection"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-brand-primary/10" />
                        </div>

                        {/* Process Card Overlay */}
                        <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-3xl shadow-xl border border-brand-primary/5 max-w-xs hidden md:block">
                            <h4 className="font-bold text-lg mb-4 text-brand-primary">Our Process</h4>
                            <ol className="space-y-4">
                                <li className="flex gap-3 text-sm text-brand-primary/80">
                                    <span className="font-bold text-emerald-600">1.</span>
                                    Structural Design & Calcs
                                </li>
                                <li className="flex gap-3 text-sm text-brand-primary/80">
                                    <span className="font-bold text-emerald-600">2.</span>
                                    Submission & Checking
                                </li>
                                <li className="flex gap-3 text-sm text-brand-primary/80">
                                    <span className="font-bold text-emerald-600">3.</span>
                                    Council/Inspector Approval
                                </li>
                                <li className="flex gap-3 text-sm text-brand-primary/80">
                                    <span className="font-bold text-emerald-600">4.</span>
                                    Site Execution & Support
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pre-Construction Design Review Cross-Link */}
            <section className="bg-emerald-900 text-white py-16 my-12 rounded-[3rem] mx-6 lg:mx-auto max-w-7xl relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888086425-d81bb19240f5?auto=format&fit=crop&q=80&w=1200')] bg-cover bg-center opacity-20 mix-blend-overlay" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Looking for a full design audit before going to tender?</h2>
                    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                        Ensure every detail is technically sound, cost-effective, and clash-free before construction begins.
                    </p>
                    <Link to="/site-intelligence/pre-construction-design-review" className="px-8 py-4 bg-white text-emerald-900 font-bold rounded-xl hover:bg-emerald-50 transition-colors inline-block shadow-lg shadow-black/10">
                        Explore Pre-Construction Design Review &rarr;
                    </Link>
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

      {/* Final CTA */}
            <section className="bg-brand-primary text-white py-24 my-24 rounded-[3rem] mx-6 relative overflow-hidden">
                <div className="absolute inset-0 engineering-grid opacity-10" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Don't fail your building inspection.</h2>
                    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                        Get the expert structural calculations and regulatory drawings you need to achieve compliance and keep your project on track.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors inline-block">
                            Request a Quote
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BuildingControl;
