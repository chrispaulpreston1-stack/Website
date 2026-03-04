import { motion } from 'motion/react';
import { Scale, Check, ArrowRight, Home, Gavel, Camera, PenTool, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import VideoExplainer from '../components/VideoExplainer';

const PartyWallAssessment = () => {
    const steps = [
        {
            title: "Serve Notice",
            desc: "Formal notification to adjoining owners about the intended works, whether it's an extension, loft conversion, or basement.",
            icon: <PenTool size={24} />
        },
        {
            title: "Dispute or Assent",
            desc: "Neighbours have 14 days to respond. Assent means work proceeds; 'dispute' (silence or dissent) triggers the formal Award process.",
            icon: <Users size={24} />
        },
        {
            title: "Schedule of Condition",
            desc: "A meticulous photographic and written record of the neighbour's property before your works commence, protecting both parties.",
            icon: <Camera size={24} />
        },
        {
            title: "The Party Wall Award",
            desc: "A legally binding document setting out the rights and responsibilities of both sides, detailing how the work will be executed.",
            icon: <Gavel size={24} />
        }
    ];

    return (
        <div className="pt-20">
            <PageSEO
                title="Party Wall Surveying & Awards | PF & Co"
                description="Premium Party Wall Surveyor services for complex structural engineering projects. We handle the legal boundary so you can focus on the build."
                path="/party-wall"
            />

            {/* Editorial Hero */}
            <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-primary text-white">
                <div className="absolute inset-0 z-0 opacity-20">
                    <div className="absolute inset-0 bg-gradient-to-b from-brand-primary via-transparent to-brand-primary" />
                    <div aria-hidden="true" className="text-[25vw] font-display uppercase leading-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none opacity-10 whitespace-nowrap">
                        LEGAL
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10 w-full pt-10 pb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="font-mono text-xs uppercase tracking-[0.4em] text-indigo-400 font-bold mb-6 block">Structural Engineering / Legal Boundary</span>
                        <h1 className="text-6xl md:text-8xl font-bold leading-[0.85] mb-8 tracking-tighter text-white">
                            Party <br />
                            <span className="text-indigo-400 italic font-accent font-light">Wall</span>
                        </h1>
                        <p className="text-xl text-white/60 leading-relaxed mb-6 max-w-lg font-light">
                            A Surveyor for When You Actually Need One.
                        </p>
                        <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg">
                            Let's be clear: we are a high-end structural engineering practice, not a volume party wall surveying factory. We step in when the engineering complexity demands a surveyor who truly understands the structural mechanics behind the legal notices.
                        </p>
                        <div className="flex flex-wrap gap-6 items-center">
                            <Link to="/contact" className="px-8 py-4 bg-indigo-600 text-white rounded-full font-bold hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-500/20 flex items-center gap-2">
                                Consult a Surveyor <Zap size={20} className="text-indigo-200" />
                            </Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] bg-white/5 backdrop-blur-xl rounded-[4rem] border border-white/10 p-12 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-12">
                                    <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/40">
                                        <Scale size={32} className="text-white" />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-[10px] font-mono uppercase tracking-widest text-white/60">Legal Framework</div>
                                        <div className="text-sm font-bold text-indigo-400 flex items-center gap-2 justify-end">
                                            <Check size={16} /> 1996 Act Compliant
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 font-accent italic">Engineering-Led Dispute Resolution</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-8">
                                    Most Party Wall disputes escalate because the surveyor doesn't understand the engineering drawings. When we act as your surveyor, we preempt neighbour concerns by clearly explaining the structural methodology, preventing minor technically-driven disputes from becoming legal nightmares.
                                </p>

                                <div className="space-y-4 pt-8 border-t border-white/10">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                            <Home size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Neighbour Protection</div>
                                            <div className="text-xs text-white/50">Meticulous Schedules of Condition</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                            <Gavel size={20} />
                                        </div>
                                        <div>
                                            <div className="text-sm font-bold text-white">Agreed Surveyor Option</div>
                                            <div className="text-xs text-white/50">Impartial & Efficient Process</div>
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
                        <h2 className="text-4xl font-display font-bold text-brand-primary mb-6">The Process Explained</h2>
                        <p className="text-xl text-brand-primary/60 leading-relaxed">
                            If your structural works involve building on the boundary line, excavating near adjoining buildings, or modifying a shared wall, the Party Wall etc. Act 1996 applies. Here is how we manage the legal boundary.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, i) => (
                            <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl shadow-sm border border-brand-primary/5 relative">
                                <div className="absolute top-6 right-6 text-indigo-100 font-bold text-5xl opacity-40">0{i + 1}</div>
                                <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6 relative z-10">
                                    {step.icon}
                                </div>
                                <h3 className="font-bold text-lg mb-3 relative z-10">{step.title}</h3>
                                <p className="text-sm text-brand-primary/60 relative z-10">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Neighbour Guide Video Explainer */}
            <VideoExplainer
                title="Party Wall Notice — Adjoining Neighbour Guide"
                accentColor="indigo-500"
                description="A friendly, reassuring guide for adjoining neighbours on what to expect when a Party Wall Notice is served. There's no need to worry—we explain the protections in place for your home."
                thumbnailUrl="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800"
                videoUrl="/videos/party-wall-neighbor.mp4"
            />

            {/* Building Owner Guide Video Explainer */}
            <VideoExplainer
                title="Party Wall — Building Owner Guide"
                accentColor="slate-500"
                description="A supportive guide for building owners planning works near a boundary. Learn how the Party Wall process works and how our engineering-led approach helps smooth the way with your neighbours."
                thumbnailUrl="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=800"
                videoUrl="/videos/party-wall-owner.mp4"
            />

            {/* Information Section */}
            <section className="py-24 max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-last lg:order-first">
                        <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=1200"
                                alt="Architectural details"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-brand-primary/10" />
                        </div>
                    </div>

                    <div>
                        <h2 className="text-4xl font-display font-bold text-brand-primary mb-6">Why an Engineer makes the best Surveyor</h2>
                        <p className="text-xl text-brand-primary/60 mb-8">
                            The vast majority of Party Wall disputes arise from a misunderstanding of the proposed works, not out of neighbourly malice.
                        </p>
                        <div className="space-y-6 text-brand-primary/70 leading-relaxed">
                            <p>
                                When a neighbour (the adjoining owner) receives a Party Wall Notice detailing complex excavations, temporary propping, or steel beam installations, they are naturally concerned about the integrity of their own home.
                            </p>
                            <p>
                                If your appointed surveyor cannot confidently explain the structural mechanics of the temporary works to the neighbour's surveyor, an impasse is reached, dragging out the Award process and costing you time and money.
                            </p>
                            <p>
                                As Structural Engineers, we speak the language of the building. We can rapidly demystify complex engineering proposals, reassuring adjoining owners and their surveyors that the methodology is sound, safe, and robust.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-colors">
                                Discuss Your Party Wall <ArrowRight size={20} />
                            </Link>
                        </div>
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
            <a href="/blog/what-reports-do-you-need-for-planning-permission/" className="text-brand-accent font-bold hover:underline decoration-2 underline-offset-4 mt-2 inline-block">
              What Reports Do You Need for Planning Permission? &rarr;
            </a>
          </p>
        </div>
      </section>

      {/* Final CTA */}
            <section className="bg-brand-primary text-white py-24 my-24 rounded-[3rem] mx-6 relative overflow-hidden">
                <div className="absolute inset-0 engineering-grid opacity-10" />
                <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Don't let the legal boundary halt your build.</h2>
                    <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                        Appoint a Party Wall Surveyor who understands the engineering behind the notices.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/contact" className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-colors inline-block">
                            Appoint a Surveyor
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PartyWallAssessment;
