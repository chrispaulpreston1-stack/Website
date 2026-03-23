import React from 'react';
import { motion } from 'framer-motion';

const WorkflowTimeline: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Initial Screening",
      desc: "Planning policy, constraint mapping, title check, market assessment",
      active: true,
      badge: "SI Full Coverage"
    },
    {
      number: 2,
      title: "Detailed Desktop DD",
      desc: "Environmental, heritage, transport, ground, CIL/S106, viability",
      active: true,
      badge: "SI Full Coverage"
    },
    {
      number: 3,
      title: "Site Visit & Walkover",
      desc: "Physical inspection, confirm desktop findings",
      active: false,
      badge: "Not Covered (By Design)"
    },
    {
      number: 4,
      title: "Specialist Investigations",
      desc: "Phase 2 ground, protected species surveys, flood modelling",
      active: false,
      badge: "Not Covered (By Design)"
    },
    {
      number: 5,
      title: "Planning Application",
      desc: "Full report suite, design work, pre-app engagement",
      active: false,
      badge: "Not Covered (By Design)"
    }
  ];

  return (
    <div className="w-full py-12">
      <div className="flex flex-col md:flex-row items-stretch justify-between relative">
        {/* Connecting Line (Desktop) */}
        <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-1 bg-brand-primary/10 z-0">
          <div className="h-full bg-brand-accent w-[30%]"></div>
        </div>

        {/* Connecting Line (Mobile) */}
        <div className="md:hidden absolute left-[28px] top-[5%] bottom-[5%] w-1 bg-brand-primary/10 z-0">
          <div className="w-full bg-brand-accent h-[30%]"></div>
        </div>

        {steps.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="flex flex-row md:flex-col items-start md:items-center w-full md:w-1/5 relative z-10 mb-8 md:mb-0"
          >
            {/* Circle */}
            <div className={`
              flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold font-display z-10 border-4 bg-white
              ${step.active ? 'border-brand-accent text-brand-accent shadow-[0_0_20px_rgba(245,158,11,0.3)]' : 'border-brand-primary/20 text-brand-primary/40'}
            `}>
              {step.number}
            </div>

            {/* Content box */}
            <div className="ml-6 md:ml-0 md:mt-6 text-left md:text-center w-full pr-4 md:pr-0">
              <h4 className={`text-lg font-bold font-display mb-2 ${step.active ? 'text-brand-primary' : 'text-brand-primary/60'}`}>
                {step.title}
              </h4>
              <p className="text-sm text-brand-primary/70 mb-4 md:px-2 leading-relaxed h-[60px] md:h-[80px]">
                {step.desc}
              </p>
              
              <div className="mt-2">
                <span className={`inline-block px-3 py-1 text-xs font-mono font-bold tracking-wider rounded-sm ${
                  step.active 
                    ? 'bg-brand-accent/10 text-brand-accent border border-brand-accent/20' 
                    : 'bg-brand-primary/5 text-brand-primary/50'
                }`}>
                  {step.badge}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-12 md:mt-16 bg-brand-primary/5 border border-brand-primary/10 rounded-2xl p-6 md:p-8 text-center max-w-4xl mx-auto">
        <p className="text-lg md:text-xl font-medium text-brand-primary leading-relaxed">
          SI is the intelligent Tier 1 layer. It tells you whether to proceed and scopes exactly what further investigation is needed. This is exactly how <strong className="text-brand-accent">RICS, LCRM, and the NPPF</strong> say site assessment should work.
        </p>
      </div>
    </div>
  );
};

export default WorkflowTimeline;
