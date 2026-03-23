import React from 'react';
import { motion } from 'framer-motion';

type Variant = 'general' | 'developer';

interface Stat {
  number: string;
  label: string;
  source: string;
}

const generalStats: Stat[] = [
  { number: '60+', label: 'Government Data Sources', source: 'Internal' },
  { number: '48hrs', label: 'Typical Delivery', source: 'Internal' },
  { number: '97%+', label: 'Cost Reduction vs Traditional', source: '£295 vs £10k–£50k' },
  { number: '3', label: 'Frameworks Mandate Desktop First', source: 'RICS · LCRM · NPPF' }
];

const developerStats: Stat[] = [
  { number: '56%', label: 'SME Builders Saw 30%+ Cost Rise', source: 'HBF, 2025' },
  { number: '70%', label: 'Spent £5k–£50k+ Before Abandoning', source: 'CLA Survey' },
  { number: '1%', label: 'Got Permission Within 3 Months', source: 'HBF' },
  { number: '£3bn', label: 'Annual Cost of Planning Delays', source: 'HBF, 2023' }
];

interface TrustStatsProps {
  variant?: Variant;
  className?: string;
}

const TrustStats: React.FC<TrustStatsProps> = ({ variant = 'general', className = '' }) => {
  const stats = variant === 'general' ? generalStats : developerStats;

  return (
    <div className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 ${className}`}>
      {stats.map((stat, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="flex flex-col items-center md:items-start text-center md:text-left bg-white p-6 rounded-2xl shadow-sm border border-brand-primary/5 hover:border-brand-accent/30 transition-colors"
        >
          <div className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-2">
            {stat.number}
          </div>
          <div className="text-sm md:text-base font-semibold text-brand-primary/80 mb-3 leading-tight">
            {stat.label}
          </div>
          <div className="text-xs font-mono text-brand-primary/50 uppercase tracking-wider mt-auto">
            {stat.source}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TrustStats;
