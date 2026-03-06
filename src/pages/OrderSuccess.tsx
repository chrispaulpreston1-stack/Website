import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import { 
  CheckCircle2,
  ArrowRight,
  Mail,
  Clock,
  FileText,
  Zap
} from 'lucide-react';

const OrderSuccess = () => {
  return (
    <div className="pt-32 pb-24 bg-brand-surface min-h-screen flex items-center justify-center">
      <PageSEO
        title="Order Successful | PF & Co"
        description="Your site intelligence report order has been confirmed. You will receive your report via email."
        path="/order-success"
        jsonLd={{
          '@type': 'WebPage',
          name: 'Order Confirmation',
          description: 'Your site intelligence report order has been confirmed.'
        }}
      />

      <div className="max-w-2xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-500/20"
        >
          <CheckCircle2 size={48} className="text-white" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl font-bold mb-6 tracking-tight"
        >
          Order <span className="text-brand-accent italic font-serif font-light">Confirmed.</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-brand-primary/60 text-lg mb-12 max-w-md mx-auto font-light"
        >
          Thank you for your order. Our engineers have been notified and are beginning work on your report immediately.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid sm:grid-cols-2 gap-6 mb-12"
        >
          <div className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 text-left shadow-sm">
            <Mail className="text-brand-accent mb-4" size={24} />
            <h3 className="font-bold mb-2">Confirmation Sent</h3>
            <p className="text-xs text-brand-primary/60 leading-relaxed">We've sent a receipt and order details to your email address.</p>
          </div>
          <div className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 text-left shadow-sm">
            <Clock className="text-brand-accent mb-4" size={24} />
            <h3 className="font-bold mb-2">48hr Turnaround</h3>
            <p className="text-xs text-brand-primary/60 leading-relaxed">Your report will be delivered digitally within 2 working days.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/site-intelligence" className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2">
            Return to Hub <ArrowRight size={20} />
          </Link>
          <Link to="/contact" className="px-8 py-4 bg-white text-brand-primary border-2 border-brand-primary/5 rounded-xl font-bold hover:bg-brand-surface transition-all flex items-center justify-center gap-2">
            Contact Us <Mail size={20} />
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-12 border-t border-brand-primary/5"
        >
          <div className="flex items-center justify-center gap-8 opacity-40 grayscale">
            <div className="flex items-center gap-2 font-bold text-sm"><Zap size={16} /> Instant Processing</div>
            <div className="flex items-center gap-2 font-bold text-sm"><FileText size={16} /> Digital Delivery</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderSuccess;
