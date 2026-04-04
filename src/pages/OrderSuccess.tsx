import React from 'react';
import { motion } from 'motion/react';
import { Link, useSearchParams } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import {
  CheckCircle2,
  ArrowRight,
  Mail,
  Clock,
  FileText,
  Zap,
  ShieldCheck,
  CreditCard,
  Repeat,
  PartyPopper,
} from 'lucide-react';

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const isSubscription = searchParams.get('subscription') === 'true';
  const tier = searchParams.get('tier')?.replace(/-monthly|-annual/, '');

  const tierName = tier
    ? tier.charAt(0).toUpperCase() + tier.slice(1)
    : '';

  return (
    <div className="pt-32 pb-24 bg-brand-surface min-h-screen flex items-center justify-center">
      <PageSEO
        title="Order Confirmed | PF & Co"
        description="Your order has been confirmed."
        path="/order-success"
        jsonLd={{
          '@type': 'WebPage',
          name: 'Order Confirmation',
          description: 'Your order has been confirmed.'
        }}
      />

      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", damping: 20, stiffness: 100 }}
          className="w-28 h-28 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-green-500/20"
        >
          <CheckCircle2 size={56} className="text-white" />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl md:text-7xl font-bold mb-6 tracking-tight text-brand-primary"
        >
          {isSubscription ? (
            <>Welcome <span className="text-brand-accent italic font-serif font-light">Aboard.</span></>
          ) : (
            <>Order <span className="text-brand-accent italic font-serif font-light">Confirmed.</span></>
          )}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-brand-primary/60 text-xl mb-16 max-w-xl mx-auto font-light leading-relaxed"
        >
          {isSubscription ? (
            <>Your <strong className="text-brand-primary font-bold">{tierName}</strong> subscription is now active. We'll be in touch within 24 hours to onboard you and get your first reports underway.</>
          ) : (
            <>Thank you for your order. Our team has been notified and work on your report begins immediately.</>
          )}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {isSubscription ? (
            <>
              <div className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 text-left shadow-sm">
                <Mail className="text-brand-accent mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Check Your Inbox</h3>
                <p className="text-sm text-brand-primary/60 leading-relaxed">Stripe receipt and subscription confirmation sent to your email.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 text-left shadow-sm">
                <Repeat className="text-brand-accent mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Credits Active</h3>
                <p className="text-sm text-brand-primary/60 leading-relaxed">Your monthly report credits are ready to use. Send us your first site address to get started.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 text-left shadow-sm">
                <ShieldCheck className="text-brand-accent mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">30-Day Guarantee</h3>
                <p className="text-sm text-brand-primary/60 leading-relaxed">If you don't use your subscription in the first 30 days, we'll refund your first payment. No questions.</p>
              </div>
            </>
          ) : (
            <>
              <div className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 text-left shadow-sm">
                <Mail className="text-brand-accent mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Confirmation Sent</h3>
                <p className="text-sm text-brand-primary/60 leading-relaxed">Receipt and order details sent to your email address.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 text-left shadow-sm">
                <Clock className="text-brand-accent mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">48-Hour Delivery</h3>
                <p className="text-sm text-brand-primary/60 leading-relaxed">Your report will be delivered digitally — PDF and Word — within 2 working days.</p>
              </div>
              <div className="p-8 rounded-[2rem] bg-white border border-brand-primary/5 text-left shadow-sm">
                <ShieldCheck className="text-brand-accent mb-4" size={28} />
                <h3 className="font-bold text-lg mb-2">Human Verified</h3>
                <p className="text-sm text-brand-primary/60 leading-relaxed">Every report passes through our multi-stage QA pipeline with engineering sign-off before delivery.</p>
              </div>
            </>
          )}
        </motion.div>

        {/* What Happens Next */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-white rounded-[2rem] p-10 border border-brand-primary/5 shadow-sm mb-16 text-left max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-bold text-brand-primary mb-6">What Happens Next</h2>
          <div className="space-y-4">
            {(isSubscription ? [
              { step: "1", text: "We'll email you within 24 hours to confirm your account and discuss your first reports." },
              { step: "2", text: "Send us a UK site address and tell us which report you'd like — 1 credit = 1 report, any type." },
              { step: "3", text: "We deliver your report within 48-72 hours, ready for planning submission." },
              { step: "4", text: "Your credits refresh each month. Unused credits roll over per your tier's rollover policy." },
            ] : [
              { step: "1", text: "Our team reviews your order and site details within the hour." },
              { step: "2", text: "We query 80+ authoritative data sources and run your site through our analysis pipeline." },
              { step: "3", text: "A qualified engineer reviews and verifies every output before sign-off." },
              { step: "4", text: "Your completed report is delivered to your email — typically within 48 hours." },
            ]).map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-brand-accent/10 rounded-lg flex items-center justify-center shrink-0">
                  <span className="text-sm font-bold text-brand-accent">{item.step}</span>
                </div>
                <p className="text-brand-primary/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          {isSubscription ? (
            <>
              <a href="mailto:info@pfandco.co.uk?subject=New Subscription — Ready to Start" className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg shadow-lg">
                Send Us Your First Site <ArrowRight size={20} />
              </a>
              <Link to="/site-intelligence" className="px-10 py-5 bg-white text-brand-primary border-2 border-brand-primary/5 rounded-2xl font-bold hover:bg-brand-surface transition-all flex items-center justify-center gap-2">
                Browse Reports
              </Link>
            </>
          ) : (
            <>
              <Link to="/whats-included" className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-bold hover:scale-105 transition-all flex items-center justify-center gap-2 text-lg shadow-lg">
                See What's Included <ArrowRight size={20} />
              </Link>
              <Link to="/for-professionals" className="px-10 py-5 bg-white text-brand-primary border-2 border-brand-primary/5 rounded-2xl font-bold hover:bg-brand-surface transition-all flex items-center justify-center gap-2">
                Volume Pricing for Practices
              </Link>
            </>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-16 pt-10 border-t border-brand-primary/5"
        >
          <p className="text-sm text-brand-primary/40">
            Questions? Email{' '}
            <a href="mailto:info@pfandco.co.uk" className="text-brand-accent hover:underline font-medium">info@pfandco.co.uk</a>
            {' '}or call{' '}
            <a href="tel:01483363210" className="text-brand-accent hover:underline font-medium">01483 363210</a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderSuccess;
