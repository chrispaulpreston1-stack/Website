import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Crosshair, Zap } from 'lucide-react';

const ValuePropositionCards: React.FC = () => {
  const cards = [
    {
      icon: <ShieldAlert size={32} className="text-brand-accent mb-6" />,
      title: "Kill Bad Sites Early, Kill Them Cheaply",
      desc: "If desktop analysis reveals a fatal constraint — Flood Zone 3b, scheduled monument, contamination liability, no viable access — the developer avoids spending thousands on specialist investigations for a site they would never develop. A £295 desktop report can save £20,000+ in aborted fees."
    },
    {
      icon: <Crosshair size={32} className="text-brand-accent mb-6" />,
      title: "Scope Downstream Investigations Properly",
      desc: "LCRM mandates Tier 1 desktop assessment before intrusive investigation. A comprehensive desktop assessment means that when specialists ARE commissioned, they are properly targeted. Phase 2 ground investigation is more efficient when Phase 1 has identified specific areas of concern."
    },
    {
      icon: <Zap size={32} className="text-brand-accent mb-6" />,
      title: "Accelerate Decision-Making",
      desc: "In competitive land markets, the developer who can assess a site's potential fastest has a significant advantage. 48 hours from one provider vs 2-6 months coordinating 8-15 separate consultants. Speed kills bad deals before they absorb capital."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {cards.map((card, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="bg-white border-t-4 border-t-brand-accent border border-brand-primary/10 rounded-xl rounded-t-sm p-8 shadow-sm hover:shadow-lg transition-shadow"
        >
          {card.icon}
          <h4 className="text-xl font-display font-bold text-brand-primary mb-4 leading-tight">
            {card.title}
          </h4>
          <p className="text-brand-primary/70 leading-relaxed text-sm md:text-base">
            {card.desc}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ValuePropositionCards;
