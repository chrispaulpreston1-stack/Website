import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import PageSEO from '../components/PageSEO';
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

const reports = [
  { id: 'site-feasibility-report', name: 'Site Feasibility Report', price: 1500, rrp: 2500, icon: <Search className="text-teal-500" />, color: 'border-teal-500 bg-teal-50/30' },
  { id: 'geotechnical-desk-study', name: 'Geotechnical Desk Study', price: 900, rrp: 1500, icon: <Database className="text-amber-600" />, color: 'border-amber-600 bg-amber-50/30' },
  { id: 'flood-risk-assessment', name: 'Flood Risk Assessment', price: 375, rrp: 600, icon: <ShieldAlert className="text-blue-500" />, color: 'border-blue-500 bg-blue-50/30' },
  { id: 'full-bundle', name: 'Full Site Intelligence Bundle', price: 2375, rrp: 4600, icon: <Zap className="text-brand-accent" />, color: 'border-brand-accent bg-brand-accent/10', isBundle: true },
  { id: 'biodiversity-net-gain', name: 'Biodiversity Net Gain', price: 300, rrp: 500, icon: <Zap className="text-emerald-500" />, color: 'border-emerald-500 bg-emerald-50/30' },
  { id: 'cil-liability-assessment', name: 'CIL Liability Assessment', price: 500, rrp: 800, icon: <Zap className="text-emerald-600" />, color: 'border-emerald-600 bg-emerald-50/30' },
  { id: 'construction-management-plan', name: 'Construction Management Plan', price: 425, rrp: 700, icon: <Zap className="text-brand-primary" />, color: 'border-brand-primary bg-brand-primary/5' },
  { id: 'design-and-access-statement', name: 'Design & Access Statement', price: 600, rrp: 1000, icon: <Zap className="text-brand-accent" />, color: 'border-brand-accent bg-brand-accent/5' },
  { id: 'energy-statement', name: 'Energy Statement', price: 550, rrp: 900, icon: <Zap className="text-cyan-500" />, color: 'border-cyan-500 bg-cyan-50/30' },
  { id: 'feasibility-study', name: 'Concept Feasibility Study', price: 1200, rrp: 2000, icon: <Zap className="text-brand-primary" />, color: 'border-brand-primary bg-brand-primary/5' },
  { id: 'heritage-impact-assessment', name: 'Heritage Impact Assessment', price: 725, rrp: 1200, icon: <Zap className="text-amber-500" />, color: 'border-amber-500 bg-amber-50/30' },
  { id: 'parking-survey', name: 'Parking Survey', price: 375, rrp: 600, icon: <Zap className="text-rose-500" />, color: 'border-rose-500 bg-rose-50/30' },
  { id: 'planning-statement', name: 'Planning Statement', price: 900, rrp: 1500, icon: <Zap className="text-emerald-500" />, color: 'border-emerald-500 bg-emerald-50/30' },
  { id: 'pre-application-advice', name: 'Pre-Application Advice', price: 1100, rrp: 1800, icon: <Zap className="text-cyan-500" />, color: 'border-cyan-500 bg-cyan-50/30' },
  { id: 'pre-construction-design-review', name: 'Design Readiness Review', price: 425, rrp: 850, icon: <Zap className="text-brand-primary" />, color: 'border-brand-primary bg-brand-primary/5' },
  { id: 'transport-statement', name: 'Transport Statement', price: 600, rrp: 1000, icon: <Zap className="text-blue-500" />, color: 'border-blue-500 bg-blue-50/30' },
  { id: 'party-wall-assessment', name: 'Party Wall Pre-Assessment', price: 425, rrp: 700, icon: <Zap className="text-indigo-500" />, color: 'border-indigo-500 bg-indigo-50/30' },
  { id: 'building-control', name: 'BC Readiness Check', price: 150, rrp: 250, icon: <Zap className="text-emerald-600" />, color: 'border-emerald-600 bg-emerald-50/30' }
];

const OrderReport = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; type: string; value: number } | null>(null);
  const [discountError, setDiscountError] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [selectionError, setSelectionError] = useState<string | null>(null);

  const initialReport = searchParams.get('report') || '';
  const [selectedReports, setSelectedReports] = useState<string[]>(initialReport ? [initialReport] : []);

  const { register, handleSubmit, watch, trigger, formState: { errors } } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const discountCode = watch('discountCode');

  const toggleReport = (id: string) => {
    setSelectionError(null);
    setSelectedReports(prev =>
      prev.includes(id) ? prev.filter(r => r !== id) : [...prev, id]
    );
  };

  const selectedReportObjects = reports.filter(r => selectedReports.includes(r.id));
  const basePrice = selectedReportObjects.reduce((sum, r) => sum + r.price, 0);

  let discountAmount = 0;
  if (appliedDiscount) {
    if (appliedDiscount.type === 'percent') {
      discountAmount = Math.round(basePrice * (appliedDiscount.value / 100));
    } else {
      discountAmount = appliedDiscount.value;
    }
  }
  const totalPrice = Math.max(0, basePrice - discountAmount);

  const validateAndNext = async () => {
    if (step === 1) {
      if (selectedReports.length === 0) {
        setSelectionError('Please select at least one report');
        return;
      }
      const valid = await trigger(['address']);
      if (valid) setStep(2);
    } else if (step === 2) {
      const valid = await trigger(['projectType', 'description']);
      if (valid) setStep(3);
    }
  };

  const prevStep = () => setStep(s => s - 1);

  const handleApplyDiscount = () => {
    setDiscountError(null);
    if (!discountCode) return;

    if (discountCode.toUpperCase() === 'SITE10') {
      setAppliedDiscount({ code: 'SITE10', type: 'percent', value: 10 });
    } else if (discountCode.toUpperCase() === 'WELCOME') {
      setAppliedDiscount({ code: 'WELCOME', type: 'fixed', value: 50 });
    } else {
      setDiscountError('Invalid discount code');
      setAppliedDiscount(null);
    }
  };

  const onSubmit = async (data: OrderFormData) => {
    if (selectedReports.length === 0) {
      setSelectionError('Please select at least one report');
      setStep(1);
      return;
    }

    setIsSubmitting(true);
    setCheckoutError(null);

    try {
      // Send project details to Formspree (non-blocking)
      fetch('https://formspree.io/f/xdalrdyj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Report Order: ${selectedReportObjects.map(r => r.name).join(', ')}`,
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          company: data.company || 'N/A',
          reports: selectedReportObjects.map(r => r.name).join(', '),
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
          reportTypes: selectedReports,
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

      window.location.href = result.url;
    } catch (err: any) {
      setCheckoutError(err.message || 'Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 bg-brand-surface min-h-screen">
      <PageSEO
        title="Order Report | Site Intelligence | PF & Co"
        description="Order planning-ready site intelligence reports from PF & Co. Choose from 16 professional reports or save with the Full Site Intelligence Bundle."
        path="/order-report"
        jsonLd={{
          '@type': 'Product',
          name: 'Site Intelligence Reports',
          description: 'Planning-ready site intelligence reports — from flood risk and geotechnical studies to planning statements and feasibility reports.',
          brand: { '@type': 'Organization', name: 'PF & Co Construction' },
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '150',
            highPrice: '2375',
            priceCurrency: 'GBP',
          },
        }}
      />

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
            {/* Step 1: Report Selection & Site */}
            <div className={step === 1 ? 'space-y-8' : 'hidden'}>
              <section>
                <h2 className="text-2xl font-bold mb-2">Select Your Reports</h2>
                <p className="text-sm text-brand-primary/50 mb-6">Choose one or more reports for your site.</p>
                {selectionError && <p className="text-red-500 text-xs mb-4 font-bold">{selectionError}</p>}
                <div className="grid gap-4">
                  {reports.map((r) => {
                    const isSelected = selectedReports.includes(r.id);
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => toggleReport(r.id)}
                        className={`p-6 rounded-2xl border-2 text-left transition-all flex items-center justify-between group relative overflow-hidden ${isSelected ? r.color : 'border-brand-primary/5 bg-white hover:border-brand-primary/20'}`}
                      >
                        {r.isBundle && (
                          <div className="absolute top-0 right-0 bg-brand-accent text-brand-primary text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase tracking-widest">
                            Most Popular
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
                            <div className="font-mono font-bold text-brand-primary text-sm">From</div>
                            <div className="font-mono font-bold text-brand-primary">£{r.price.toLocaleString()}</div>
                            {r.rrp && <div className="text-[10px] text-brand-primary/40 line-through">RRP £{r.rrp.toLocaleString()}</div>}
                          </div>
                          <div className={`w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors ${isSelected ? 'bg-brand-primary border-brand-primary' : 'border-brand-primary/10'}`}>
                            {isSelected && <Check size={14} className="text-white" />}
                          </div>
                        </div>
                      </button>
                    );
                  })}
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
                onClick={validateAndNext}
                className="w-full py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20"
              >
                Next: Project Context <ArrowRight size={20} />
              </button>
            </div>

            {/* Step 2: Project Context */}
            <div className={step === 2 ? 'space-y-8' : 'hidden'}>
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
                  onClick={validateAndNext}
                  className="flex-grow py-5 bg-brand-primary text-white rounded-2xl font-bold text-lg hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-primary/20"
                >
                  Next: Checkout <ArrowRight size={20} />
                </button>
              </div>
            </div>

            {/* Step 3: Contact & Payment */}
            <div className={step === 3 ? 'space-y-8' : 'hidden'}>
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
                        <Check size={12} /> Code {appliedDiscount.code} Applied (-£{discountAmount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })})
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
                    <>Pay £{totalPrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} via Stripe <ArrowRight size={20} /></>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Sidebar / Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6">
              <div className="bg-white rounded-[2rem] p-8 border border-brand-primary/5 shadow-sm">
                <h3 className="text-lg font-bold mb-6">Order Summary</h3>
                <div className="space-y-5 mb-8">
                  {selectedReportObjects.length === 0 ? (
                    <p className="text-sm text-brand-primary/40 italic">No reports selected</p>
                  ) : (
                    selectedReportObjects.map(r => (
                      <div key={r.id} className="flex justify-between items-start gap-4">
                        <div className="text-sm font-medium text-brand-primary/80">{r.name}</div>
                        <div className="text-sm font-bold shrink-0">£{r.price.toLocaleString()}</div>
                      </div>
                    ))
                  )}
                  <div className="flex justify-between items-center gap-4 pt-2 border-t border-brand-primary/5">
                    <div className="text-sm font-medium text-brand-primary/60">Turnaround</div>
                    <div className="text-sm font-bold">48 Hours</div>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <div className="text-sm font-medium text-brand-primary/60">Delivery</div>
                    <div className="text-sm font-bold">PDF / Word</div>
                  </div>
                  {appliedDiscount && (
                    <div className="flex justify-between text-brand-accent">
                      <div className="text-sm font-medium">Discount ({appliedDiscount.code})</div>
                      <div className="text-sm font-bold">-£{discountAmount.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
                    </div>
                  )}
                </div>

                <div className="pt-6 border-t border-brand-primary/5 space-y-2">
                  <div className="flex justify-between text-xl font-bold">
                    <span>Est. Total*</span>
                    <span className="text-brand-accent">£{totalPrice.toLocaleString('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                  </div>
                  <p className="text-[10px] text-brand-primary/50 leading-relaxed mt-4">
                    *Prices shown are our typical fixed fees for standard residential extensions and single dwellings. For complex, large-scale, or multi-unit commercial developments, we reserve the right to review the project scope and provide a revised fixed-fee quote before proceeding.
                  </p>
                </div>
              </div>

              <div className="bg-brand-primary rounded-[2rem] p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/10 blur-3xl" />
                <div className="relative z-10 space-y-6">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="text-brand-accent" size={20} />
                    <span className="text-sm font-bold">Our Commitment</span>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Zap size={16} className="text-brand-accent mt-1 shrink-0" />
                      <p className="text-xs text-white/60 leading-relaxed">Engineered interpretation of all data points.</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock size={16} className="text-brand-accent mt-1 shrink-0" />
                      <p className="text-xs text-white/60 leading-relaxed">We aim to deliver within 2 working days.</p>
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
