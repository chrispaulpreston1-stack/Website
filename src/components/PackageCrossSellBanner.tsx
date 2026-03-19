import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

const PackageCrossSellBanner = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 mb-24">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-[2rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between text-white shadow-xl"
      >
        <div className="mb-6 md:mb-0 md:mr-8 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-3">Save up to 48% with Report Bundles</h3>
          <p className="text-white/90 text-lg max-w-2xl">
            Need multiple reports? Combine Feasibility, Geotechnical, and Flood Risk into one order. Delivered together for a single discounted price.
          </p>
        </div>
        <Link 
          to="/report-packages" 
          className="px-8 py-4 bg-white text-amber-600 rounded-xl font-bold hover:scale-105 transition-transform whitespace-nowrap shadow-lg flex items-center gap-2 mx-auto md:mx-0"
        >
          View Packages <ArrowRight size={20} />
        </Link>
      </motion.div>
    </section>
  );
};

export default PackageCrossSellBanner;
