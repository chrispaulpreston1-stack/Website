import { Link } from 'react-router-dom';
import { ShieldCheck, Cpu } from 'lucide-react';
import type { DataCategoryLabel } from '../data/reports';

interface ReportMethodologyProps {
  methodologySummary: string;
  dataCategories: DataCategoryLabel[];
}

export default function ReportMethodology({
  methodologySummary,
  dataCategories,
}: ReportMethodologyProps) {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="p-8 rounded-[2rem] bg-emerald-50/50 border border-emerald-200/50">
          <h2 className="text-lg font-bold text-brand-primary flex items-center gap-3 mb-4">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            How This Report Is Produced
          </h2>

          <p className="text-sm text-brand-primary/70 leading-relaxed mb-6">
            {methodologySummary}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {dataCategories.map((category) => (
              <span
                key={category}
                className="px-3 py-1 rounded-full text-xs font-medium bg-white border border-emerald-200/50 text-brand-primary/70"
              >
                {category}
              </span>
            ))}
          </div>

          <Link
            to="/ai-compliance"
            className="text-sm font-medium text-brand-accent hover:underline flex items-center gap-1"
          >
            Learn more about our AI standards and methodology
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
