import React from 'react';
import { motion } from 'framer-motion';

interface RealisticReportMockupProps {
  title: string;
  subtitle: string;
  category?: string;
  address?: string;
  preparedFor?: string;
  date?: string;
  documentRef?: string;
  preparedBy?: string;
  classification?: string;
  delay?: number;
  className?: string;
}

export function DocumentMockup({
  title,
  subtitle,
  category = "SITE INTELLIGENCE",
  address = "Example Site, London, SW1A 1AA",
  preparedFor = "Private Client",
  date = "October 2026",
  documentRef = "014-PFCO-REP-R00",
  preparedBy = "Site Intelligence",
  classification = "Client Confidential",
  delay = 0,
  className = '',
}: RealisticReportMockupProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`relative w-[600px] aspect-[1/1.414] bg-white shadow-2xl overflow-hidden rounded-md flex flex-col font-sans border border-gray-200 ${className}`}
      style={{
        // We use a fixed base width of 600px and scale it down using CSS transforms 
        // in the parent container so the text rendering remains razor sharp.
        transformOrigin: "center center"
      }}
    >
      {/* TOP HALF - DARK NAVY */}
      <div className="bg-[#1a1f2e] text-white pt-24 px-12 pb-16 flex flex-col items-center text-center relative z-10">
        
        {/* Category */}
        <div className="text-[#f97316] text-xs font-bold tracking-[0.3em] uppercase mb-4">
          {category}
        </div>
        
        {/* Title */}
        <h2 className="text-4xl font-bold mb-4 leading-tight">
          {title}
        </h2>
        
        {/* Subtitle */}
        <div className="text-gray-400 text-sm mb-12">
          {subtitle}
        </div>
        
        {/* Address Badge */}
        <div className="bg-[#242938] border border-[#374151] rounded-lg py-3 px-6 text-sm text-gray-200 max-w-md w-full truncate shadow-inner">
          {address}
        </div>
      </div>

      {/* ORANGE SEPARATOR LINE */}
      <div className="h-1.5 w-full bg-gradient-to-r from-[#f97316] to-[#ea580c] z-20" />

      {/* BOTTOM HALF - WHITE */}
      <div className="bg-[#fafafa] flex-grow pt-10 px-12 pb-12 flex flex-col relative z-10">
        
        {/* 5 Orange Dots */}
        <div className="flex gap-1.5 mb-8">
          {[1,2,3,4,5].map(i => (
            <div key={i} className={`w-2 h-2 rounded-full ${i <= 3 ? 'bg-[#f97316]' : 'bg-[#fcd34d]'}`} />
          ))}
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-x-12 gap-y-8 mb-auto">
          {/* Row 1 */}
          <div>
            <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Prepared For</div>
            <div className="text-sm font-medium text-gray-800 pb-2 border-b border-gray-200">{preparedFor}</div>
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Document Reference</div>
            <div className="text-sm font-medium text-gray-800 pb-2 border-b border-gray-200">{documentRef}</div>
          </div>
          
          {/* Row 2 */}
          <div>
            <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Date</div>
            <div className="text-sm font-medium text-gray-800 pb-2 border-b border-gray-200">{date}</div>
          </div>
          <div>
            <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Prepared By</div>
            <div className="text-sm font-medium text-gray-800 pb-2 border-b border-gray-200">{preparedBy}</div>
          </div>

          {/* Row 3 */}
          <div>
            <div className="text-[10px] font-bold tracking-widest text-gray-400 uppercase mb-1">Classification</div>
            <div className="text-sm font-medium text-gray-800 pb-2 border-b border-gray-200">{classification}</div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-6 border-t border-gray-200 flex justify-between items-end relative z-10">
          <div>
            <div className="text-xs font-bold text-gray-800">PF & Co Construction Ltd</div>
            <div className="text-[10px] text-gray-400">Registered in England & Wales</div>
          </div>
          <div className="text-right flex flex-col items-end">
            <div className="text-[10px] text-gray-400">info@pfcoconstruction.co.uk</div>
            <div className="text-[10px] text-gray-400">+44 (0)1483 363210</div>
            <div className="text-[10px] text-gray-400">www.pfcoconstruction.co.uk</div>
          </div>
        </div>

        {/* Abstract Corner graphic */}
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#fdf8f4] transform rotate-45 translate-x-1/2 translate-y-1/2 -z-10 rounded-3xl" />
      </div>
    </motion.div>
  );
}
