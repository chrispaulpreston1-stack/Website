import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { motion } from 'motion/react';

interface ComparisonRow {
  feature: string;
  pfco: boolean | string;
  competitor1: boolean | string;
  competitor2: boolean | string;
}

interface ComparisonCategory {
  title: string;
  rows: ComparisonRow[];
}

interface ComparisonTableProps {
  title: string;
  subtitle: string;
  columns: [string, string, string, string];
  categories: ComparisonCategory[];
  footerNote: string;
  accentColor?: string;
}

const ComparisonTable: React.FC<ComparisonTableProps> = ({
  title,
  subtitle,
  columns,
  categories,
  footerNote,
  accentColor = "text-brand-accent"
}) => {
  const renderValue = (val: boolean | string, isPFCo: boolean) => {
    if (val === true) return <Check className={isPFCo ? accentColor : "text-green-500"} size={20} />;
    if (val === false) return <X className="text-red-400" size={20} />;
    return <span className="text-xs font-medium opacity-60 italic">{val}</span>;
  };

  return (
    <div className="w-full">
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 tracking-tight">{title}</h2>
        <p className="text-brand-primary/60 font-light">{subtitle}</p>
      </div>

      <div className="overflow-x-auto -mx-6 px-6">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr>
              <th className="py-6 px-4 text-left font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary/40 border-b border-brand-primary/10 w-[40%]">
                {columns[0]}
              </th>
              <th className={`py-6 px-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] border-b-2 border-brand-primary/10 bg-brand-primary text-white rounded-t-2xl w-[20%]`}>
                {columns[1]}
              </th>
              <th className="py-6 px-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary/40 border-b border-brand-primary/10 w-[20%]">
                {columns[2]}
              </th>
              <th className="py-6 px-4 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-brand-primary/40 border-b border-brand-primary/10 w-[20%]">
                {columns[3]}
              </th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cat, catIdx) => (
              <React.Fragment key={catIdx}>
                <tr className="bg-brand-surface">
                  <td colSpan={4} className="py-3 px-4 text-[10px] font-bold uppercase tracking-widest text-brand-primary/60 border-b border-brand-primary/5">
                    {cat.title}
                  </td>
                </tr>
                {cat.rows.map((row, rowIdx) => (
                  <motion.tr 
                    key={rowIdx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="group hover:bg-brand-surface/50 transition-colors border-b border-brand-primary/5"
                  >
                    <td className="py-4 px-4 text-sm font-medium text-brand-primary/80 group-hover:text-brand-primary transition-colors">
                      {row.feature}
                    </td>
                    <td className="py-4 px-4 text-center bg-brand-primary/5 border-x border-brand-primary/5">
                      <div className="flex justify-center">
                        {renderValue(row.pfco, true)}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        {renderValue(row.competitor1, false)}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center">
                      <div className="flex justify-center">
                        {renderValue(row.competitor2, false)}
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-8 text-[10px] text-brand-primary/60 leading-relaxed max-w-4xl italic">
        {footerNote}
      </p>
    </div>
  );
};

export default ComparisonTable;
