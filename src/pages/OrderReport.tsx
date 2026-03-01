import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  ArrowRight, 
  MapPin, 
  Building2, 
  Mail, 
  Phone, 
  User, 
  CreditCard, 
  ShieldCheck,
  Zap,
  Clock,
  ChevronLeft,
  Search,
  Database,
  ShieldAlert
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const orderSchema = z.object({
  reportType: z.enum([
    'site-feasibility-report', 
    'geotechnical-desk-study', 
    'flood-risk-assessment', 
    'full-bundle',
    'biodiversity-net-gain',
    'construction-management-plan',
    'design-and-access-statement',
    'energy-statement',
    'feasibility-study',
    'heritage-impact-assessment',
    'parking-survey',
    'planning-statement',
    'pre-application-advice',
    'pre-construction-design-review',
    'transport-statement',
    'tree-survey'
  ]),
  address: z.string().min(10, "Please provide a full address or What3Words location"),
  projectType: z.string().min(1, "Please select a project type"),
  description: z.string().min(20, "Please provide a brief description of your proposed works"),
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number is required"),
  company: z.string().optional(),
  discountCode: z.string().optional(),
});

type OrderFormData = z.infer<typeof orderSchema>;

const OrderReport = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; amount: number } | null>(null);
  const [discountError, setDiscountError] = useState<string | null>(null);

  const initialReport = searchParams.get('report') as OrderFormData['reportType'] || 'site-feasibility-report';

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
    defaultValues: {
      reportType: initialReport,
    }
  });

  const selectedReport = watch('reportType');
  const discountCode = watch('discountCode');

  const reports = [
    { 
      id: 'site-feasibility-report', 
      name: 'Site Feasibility Report', 
      price: 297, 
      icon: <Search className="text-teal-500" />,
      color: 'border-teal-500 bg-teal-50/30'
    },
    { 
      id: 'geotechnical-desk-study', 
      name: 'Geotechnical Desk Study', 
      price: 297, 
      icon: <Database className="text-amber-600" />,
      color: 'border-amber-600 bg-amber-50/30'
    },
    { 
      id: 'flood-risk-assessment', 
      name: 'Flood Risk Assessment', 
      price: 297, 
      icon: <ShieldAlert className="text-blue-500" />,
      color: 'border-blue-500 bg-blue-50/30'
    },
    { 
      id: 'full-bundle', 
      name: 'Full Site Intelligence Bundle', 
      price: 830, 
      icon: <Zap className="text-brand-accent" />,
      color: 'border-brand-accent bg-brand-accent/10',
      isBundle: true
    },
    { id: 'biodiversity-net-gain', name: 'Biodiversity Net Gain', price: 495, icon: <Zap className="text-emerald-500" />, color: 'border-emerald-500 bg-emerald-50/30' },
    { id: 'construction-management-plan', name: 'Construction Management Plan', price: 595, icon: <Zap className="text-brand-primary" />, color: 'border-brand-primary bg-brand-primary/5' },
    { id: 'design-and-access-statement', name: 'Design & Access Statement', price: 395, icon: <Zap className="text-brand-accent" />, color: 'border-brand-accent bg-brand-accent/5' },
    { id: 'energy-statement', name: 'Energy Statement', price: 445, icon: <Zap className="text-cyan-500" />, color: 'border-cyan-500 bg-cyan-50/30' },
    { id: 'feasibility-study', name: 'Feasibility Study', price: 795, icon: <Zap className="text-brand-primary" />, color: 'border-brand-primary bg-brand-primary/5' },
    { id: 'heritage-impact-assessment', name: 'Heritage Impact Assessment', price: 545, icon: <Zap className="text-amber-500" />, color: 'border-amber-500 bg-amber-50/30' },
    { id: 'parking-survey', name: 'Parking Survey', price: 345, icon: <Zap className="text-rose-500" />, color: 'border-rose-500 bg-rose-50/30' },
    { id: 'planning-statement', name: 'Planning Statement', price: 495, icon: <Zap className="text-emerald-500" />, color: 'border-emerald-500 bg-emerald-50/30' },
    { id: 'pre-application-advice', name: 'Pre-Application Advice', price: 245, icon: <Zap className="text-cyan-500" />, color: 'border-cyan-500 bg-cyan-50/30' },
    { id: 'pre-construction-design-review', name: 'Design Readiness Review', price: 895, icon: <Zap className="text-brand-primary" />, color: 'border-brand-primary bg-brand-primary/5' },
    { id: 'transport-statement', name: 'Transport Statement', price: 495, icon: <Zap className="text-blue-500" />, color: 'border-blue-500 bg-blue-50/30' },
    { id: 'tree-survey', name: 'Tree Survey (BS 5837)', price: 575, icon: <Zap className="text-emerald-500" />, color: 'border-emerald-500 bg-emerald-50/30' }
  ];

  const currentReport = reports.find(r => r.id === selectedReport);
  const basePrice = currentReport?.price || 297;
  const totalPrice = appliedDiscount ? Math.max(0, basePrice - appliedDiscount.amount) : basePrice;
  const subtotal = totalPrice / 1.2;
  const vat = totalPrice - subtotal;

  const handleApplyDiscount = () => {
    setDiscountError(null);
    if (!discountCode) return;
    
    // Demo discount codes
    if (discountCode.toUpperCase() === 'SITE10') {
      setAppliedDiscount({ code: 'SITE10', amount: basePrice * 0.1 });
    } else if (discountCode.toUpperCase() === 'WELCOME') {
      setAppliedDiscount({ code: 'WELCOME', amount: 50 });
    } else {
      setDiscountError('Invalid discount code');
      setAppliedDiscount(null);
    }
  };

  const [checkoutError, setCheckoutError] = useState<string | null>(null);

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);
    setCheckoutError(null);

    try {
      // Send project details to Formspree (non-blocking)
      fetch('https://formspree.io/f/xpwzgvkl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Report Order: ${reports.find(r => r.id === data.reportType)?.name}`,
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          company: data.company || 'N/A',
          report: reports.find(r => r.id === data.reportType)?.name,
          address: data.address,
          projectType: data.projectType,
          description: data.description,
          discountCode: appliedDiscount?.code || 'None',
        }),
      });

      // Create Stripe Checkout session
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reportType: data.reportType,
          email: data.email,
          fullName: data.fullName,
          discountCode: appliedDiscount?.code,
          metadata: {
            phone: data.phone,
            company: data.company || '',
            address: data.address,
            projectType: data.projectType,
            description: data.description,
          },
        }),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      window.location.href = result.url;
    } catch (err: any) {
      setCheckoutError(err.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  const nextStep = () => setStep(s => s + 1);
  const prevStep = () => setStep(s => s - 1);

  return (
    <div className="pt-32 pb-24 bg-brand-surface min-h-screen">
      <Helmet>
        <title>Order Report | Site Intelligence | PF & Co</title>
      </Helmet>

      <div className="max-w-4xl mx-auto px-6">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between mb-4">
            {['Service & Site', 'Project Context', 'Checkout'].map((label, i) => (
              <div key={i} className={`text-[10px] font-bold uppercase tracking-widest ${step > i ? 'text-brand-primary' : 'text-brand-primary/30'}`}>
                {label}
              </div>
            ))}
          </div>
          <div className="h-1 bg-brand-primary/5 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-brand-accent"
              initial={{ width: '33.33%' }}
              animate={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="grid lg:grid-cols-3 gap-12">
          {/* Main Form Area */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <section>
                    <h2 className="text-2xl font-bold mb-6">Select Your Report</h2>
                    <div className="grid gap-4">
                      {reports.map((r) => (
                        <button
                          key={r.id}
                          type="button"
                          onClick={() => setValue('reportType', r.id as any)}
                          className={`p-6 rounded-2xl border-2 text-left transition-all flex items-center justify-between group relative overflow-hidden ${selectedReport === r.id ? r.color : 'border-brand-primary/5 bg-white hover:border-brand-primary/20'}`}
                        >
                          {r.isBundle && (
                            <div className="absolute top-0 right-0 bg-brand-accent text-brand-primary text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                              Best Value
                            </div>
                          )}
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                              {r.icon}
                            </div>
                            <div>
                              <div className="font-bold text-brand-primary">{r.name}</div>
                              <div className="text-xs text-brand-primary/40">
                                {r.isBundle ? 'All 3 Reports Included' : '48hr Turnaround'}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              <div className="font-mono font-bold text-brand-primary">£{r.price}</div>
                              {r.isBundle && <div className="text-[10px] text-brand-primary/40 line-through">RRP £891</div>}
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${selectedReport === r.id ? 'bg-brand-primary border-brand-primary' : 'border-brand-primary/10'}`}>
                              {selectedReport === r.id && <Check size={14} className="text-white" />}
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h2 className="text-2xl font-bold mb-6">Site Location</h2>
                    <div className="space-y-4">
                      <div className="relative">
                        <MapPin className="absolute left-4 top-4 text-brand-primary/30" size={20} />
                        <textarea
                          {...register('address')}
                          rows={3}
                          className="w-full bg-white border-2 border-brand-primary/5 rounded-2xl p-4 pl-12 focus:border-brand-accent outline-none transition-colors"
                          placeholder="Project Address or What3Words location..."
                        />
                        {errors.address && <p className="text-red-500 text-xs mt-2 font-bold">{errors.address.message}</p>}
                      </div>
                      <p className="text-[10px] text-brand-primary/40 font-medium italic">
                        Tip: What3Words (e.g. ///filled.count.soap) is the most accurate way to identify a development site.
                      </p>
                    </div>
                  </section>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20"
                  >
                    Next: Project Context <ArrowRight size={20} />
                  </button>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <section>
                    <h2 className="text-2xl font-bold mb-6">Project Context</h2>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/40">Project Type</label>
                        <select
                          {...register('projectType')}
                          className="w-full bg-white border-2 border-brand-primary/5 rounded-2xl p-4 focus:border-brand-accent outline-none appearance-none font-medium"
                        >
                          <option value="">Select type...</option>
                          <option value="residential-extension">Residential Extension</option>
                          <option value="new-build-house">New Build House</option>
                          <option value="commercial-development">Commercial Development</option>
                          <option value="land-acquisition">Land Acquisition Screening</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.projectType && <p className="text-red-500 text-xs mt-1 font-bold">{errors.projectType.message}</p>}
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/40">Proposed Works</label>
                        <textarea
                          {...register('description')}
                          rows={5}
                          className="w-full bg-white border-2 border-brand-primary/5 rounded-2xl p-4 focus:border-brand-accent outline-none transition-colors"
                          placeholder="Briefly describe what you are planning to build..."
                        />
                        {errors.description && <p className="text-red-500 text-xs mt-1 font-bold">{errors.description.message}</p>}
                      </div>
                    </div>
                  </section>

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-5 bg-white text-brand-primary rounded-2xl font-bold border-2 border-brand-primary/5 hover:bg-brand-surface transition-all flex items-center gap-2"
                    >
                      <ChevronLeft size={20} /> Back
                    </button>
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-grow py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20"
                    >
                      Next: Checkout <ArrowRight size={20} />
                    </button>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  className="space-y-8"
                >
                  <section>
                    <h2 className="text-2xl font-bold mb-6">Contact Details</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/40">Full Name</label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary/30" size={18} />
                          <input {...register('fullName')} className="w-full bg-white border-2 border-brand-primary/5 rounded-2xl p-4 pl-12 focus:border-brand-accent outline-none" placeholder="John Smith" />
                        </div>
                        {errors.fullName && <p className="text-red-500 text-xs mt-1 font-bold">{errors.fullName.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/40">Email Address</label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary/30" size={18} />
                          <input {...register('email')} className="w-full bg-white border-2 border-brand-primary/5 rounded-2xl p-4 pl-12 focus:border-brand-accent outline-none" placeholder="john@example.com" />
                        </div>
                        {errors.email && <p className="text-red-500 text-xs mt-1 font-bold">{errors.email.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/40">Phone Number</label>
                        <div className="relative">
                          <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary/30" size={18} />
                          <input {...register('phone')} className="w-full bg-white border-2 border-brand-primary/5 rounded-2xl p-4 pl-12 focus:border-brand-accent outline-none" placeholder="07700 900000" />
                        </div>
                        {errors.phone && <p className="text-red-500 text-xs mt-1 font-bold">{errors.phone.message}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-brand-primary/40">Company (Optional)</label>
                        <div className="relative">
                          <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-primary/30" size={18} />
                          <input {...register('company')} className="w-full bg-white border-2 border-brand-primary/5 rounded-2xl p-4 pl-12 focus:border-brand-accent outline-none" placeholder="Architects Ltd" />
                        </div>
                      </div>
                    </div>
                  </section>

                  <section className="p-8 bg-brand-primary rounded-3xl text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10 engineering-grid" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-6">
                        <CreditCard className="text-brand-accent" />
                        <h3 className="text-xl font-bold">Secure Payment</h3>
                      </div>
                      
                      {/* Discount Code Field */}
                      <div className="mb-8">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-white/40 block mb-2">Discount Code</label>
                        <div className="flex gap-2">
                          <input 
                            {...register('discountCode')}
                            className="flex-grow bg-white/10 border border-white/20 rounded-xl p-3 text-sm outline-none focus:border-brand-accent transition-colors" 
                            placeholder="Enter code..."
                          />
                          <button 
                            type="button"
                            onClick={handleApplyDiscount}
                            className="px-6 py-3 bg-brand-accent text-brand-primary rounded-xl font-bold text-sm hover:scale-105 transition-all"
                          >
                            Apply
                          </button>
                        </div>
                        {discountError && <p className="text-red-400 text-[10px] mt-2 font-bold">{discountError}</p>}
                        {appliedDiscount && (
                          <div className="mt-2 flex items-center gap-2 text-brand-accent text-[10px] font-bold uppercase tracking-widest">
                            <Check size={12} /> Code {appliedDiscount.code} Applied (-£{appliedDiscount.amount.toFixed(2)})
                          </div>
                        )}
                      </div>

                      <p className="text-white/60 text-sm mb-8 font-light">
                        Payment is processed securely via Stripe. You will be redirected to complete your purchase.
                      </p>
                      <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/40">
                        <div className="flex items-center gap-1"><ShieldCheck size={14} className="text-brand-accent" /> SSL Encrypted</div>
                        <div className="flex items-center gap-1"><ShieldCheck size={14} className="text-brand-accent" /> PCI Compliant</div>
                      </div>
                    </div>
                  </section>

                  {checkoutError && (
                    <p className="text-red-500 text-sm font-medium bg-red-50 p-4 rounded-xl">{checkoutError}</p>
                  )}

                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={prevStep}
                      className="px-8 py-5 bg-white text-brand-primary rounded-2xl font-bold border-2 border-brand-primary/5 hover:bg-brand-surface transition-all flex items-center gap-2"
                    >
                      <ChevronLeft size={20} /> Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-grow py-5 bg-brand-accent text-brand-primary rounded-2xl font-bold text-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-accent/20 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-6 h-6 border-2 border-brand-primary/30 border-t-brand-primary rounded-full animate-spin" />
                      ) : (
                        <>Pay £{totalPrice} via Stripe <ArrowRight size={20} /></>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Sidebar / Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white rounded-[2rem] p-8 border border-brand-primary/5 shadow-sm">
                <h3 className="text-lg font-bold mb-6">Order Summary</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-start">
                    <div className="text-sm font-medium text-brand-primary/60">Report Type</div>
                    <div className="text-sm font-bold text-right max-w-[120px]">
                      {reports.find(r => r.id === selectedReport)?.name}
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm font-medium text-brand-primary/60">Turnaround</div>
                    <div className="text-sm font-bold">48 Hours</div>
                  </div>
                  <div className="flex justify-between">
                    <div className="text-sm font-medium text-brand-primary/60">Delivery</div>
                    <div className="text-sm font-bold">Digital (PDF/Word)</div>
                  </div>
                  {appliedDiscount && (
                    <div className="flex justify-between text-brand-accent">
                      <div className="text-sm font-medium">Discount ({appliedDiscount.code})</div>
                      <div className="text-sm font-bold">-£{appliedDiscount.amount.toFixed(2)}</div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-brand-primary/5 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-primary/60">Subtotal</span>
                    <span className="font-bold">£{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-brand-primary/60">VAT (20%)</span>
                    <span className="font-bold">£{vat.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-xl font-bold pt-4">
                    <span>Total</span>
                    <span className="text-brand-accent">£{totalPrice.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-brand-primary rounded-[2rem] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-3xl" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-brand-accent" size={20} />
                    <span className="text-sm font-bold">PF&Co Guarantee</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Zap size={16} className="text-brand-accent mt-1 shrink-0" />
                      <p className="text-xs text-white/60 leading-relaxed">Engineered interpretation of all data points.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="text-brand-accent mt-1 shrink-0" />
                      <p className="text-xs text-white/60 leading-relaxed">Guaranteed delivery within 2 working days.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderReport;
