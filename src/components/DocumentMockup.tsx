import React from 'react';
import { motion } from 'framer-motion';
import { FileText, LucideIcon } from 'lucide-react';

interface DocumentMockupProps {
  title: string;
  icon?: LucideIcon;
  color?: string;
  delay?: number;
  className?: string;
}

export function DocumentMockup({
  title,
  icon: Icon = FileText,
  color = 'from-brand-accent to-emerald-500',
  delay = 0,
  className = '',
}: DocumentMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, rotate: -2 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -5, rotate: 1, scale: 1.02 }}
      className={`relative w-48 h-64 sm:w-56 sm:h-72 bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-gray-100 p-4 sm:p-5 flex flex-col overflow-hidden ${className}`}
    >
      {/* Decorative top gradient indicating brand/report type */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 sm:h-2 bg-gradient-to-r ${color}`} />

      {/* Header mockup */}
      <div className="flex items-center justify-between mb-4 sm:mb-6 mt-2">
        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-brand-surface border border-gray-100 flex items-center justify-center">
          <span className="font-bold text-brand-primary text-[10px] sm:text-xs">
            PF
          </span>
        </div>
        <Icon size={16} className="text-gray-300" />
      </div>

      {/* Title */}
      <div className="mb-4 sm:mb-6">
        <h4 className="font-bold text-brand-primary text-sm sm:text-base leading-tight">
          {title}
        </h4>
      </div>

      {/* Abstract Content Lines */}
      <div className="space-y-2 sm:space-y-3 flex-grow">
        <div className="h-1.5 sm:h-2 w-full bg-gray-100 rounded-full" />
        <div className="h-1.5 sm:h-2 w-5/6 bg-gray-100 rounded-full" />
        <div className="h-1.5 sm:h-2 w-4/6 bg-gray-100 rounded-full" />
        <div className="h-1.5 sm:h-2 w-full bg-gray-100 rounded-full mt-4 sm:mt-6" />
        <div className="h-1.5 sm:h-2 w-3/4 bg-gray-100 rounded-full" />
      </div>

      {/* Abstract Footer */}
      <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
        <div className="h-1 sm:h-1.5 w-12 bg-gray-200 rounded-full" />
        <div className="h-1 sm:h-1.5 w-8 bg-gray-200 rounded-full" />
      </div>
    </motion.div>
  );
}
