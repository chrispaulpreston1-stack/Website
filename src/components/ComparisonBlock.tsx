import React from 'react';
import { motion } from 'framer-motion';

const ComparisonBlock: React.FC = () => {
  const rows = [
    { label: "Providers", traditional: "8–15 separate consultants", si: "Single provider" },
    { label: "Timeline", traditional: "2–6 months + seasonal delays", si: "48 hours" },
    { label: "Cost", traditional: "£10,000–£50,000+", si: "From £295" },
    { label: "Data sources", traditional: "Each consultant's own", si: "60+ integrated" },
    { label: "Coordination", traditional: "Developer manages all", si: "Single point of contact" },
    { label: "Consistency", traditional: "Independent reports, different formats", si: "Cross-referenced across all topics" }
  ];

  return (
    <div className="w-full overflow-x-auto py-8">
      <table className="w-full min-w-[700px] border-collapse bg-white rounded-2xl overflow-hidden shadow-sm border border-brand-primary/10">
        <thead>
          <tr>
            <th className="py-6 px-6 text-left font-mono text-sm tracking-wider text-brand-primary/60 border-b-2 border-brand-primary/10 w-1/3">
              Dimension
            </th>
            <th className="py-6 px-6 text-left font-display font-bold text-lg text-red-600 bg-red-50/50 border-b-2 border-red-200 w-1/3">
              Traditional Approach
            </th>
            <th className="py-6 px-6 text-left font-display font-bold text-lg text-brand-accent bg-amber-50/50 border-b-2 border-amber-200 w-1/3 shadow-[inset_0_4px_20px_rgba(245,158,11,0.05)] relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-accent"></div>
              Site Intelligence
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-brand-primary/5">
          {rows.map((row, idx) => (
            <motion.tr 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group"
            >
              <td className="py-5 px-6 text-brand-primary font-medium border-r border-brand-primary/5 group-hover:bg-brand-primary/5 transition-colors">
                {row.label}
              </td>
              <td className="py-5 px-6 text-red-700/80 bg-red-50/30 group-hover:bg-red-50/60 transition-colors">
                {row.traditional}
              </td>
              <td className="py-5 px-6 font-semibold text-brand-primary bg-amber-50/30 group-hover:bg-amber-50/60 transition-colors shadow-[inset_0_0_10px_rgba(245,158,11,0.02)]">
                {row.si}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComparisonBlock;
