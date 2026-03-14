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
  ShieldAlert,
  Droplets,
  FileText,
  Landmark,
  Scale,
  Leaf,
  Flame,
  TreePine,
  Truck,
  Car,
  HardHat,
  Ruler,
  Crown,
  Wind,
  Volume2,
  Sun,
  FlaskConical,
} from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { reports as allReports, bundles, getBundleReports, type Report, type ReportBundle } from '../data/reports';

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

// Icon mapping for reports (UI concern — kept here, not in data layer)
const reportIcons: Record<string, React.ReactNode> = {
  'site-acquisition-intelligence': <Building2 className="text-violet-500" />,
  'site-feasibility-report': <Search className="text-teal-500" />,
  'geotechnical-desk-study': <Database className="text-amber-600" />,
  'flood-risk-assessment': <Droplets className="text-blue-500" />,
  'planning-statement': <FileText className="text-emerald-500" />,
  'pre-application-advice': <Landmark className="text-cyan-500" />,
  'design-and-access-statement': <Ruler className="text-brand-accent" />,
  'feasibility-study': <Scale className="text-brand-primary" />,
  'cil-liability-assessment': <ShieldAlert className="text-emerald-600" />,
  'biodiversity-net-gain': <Leaf className="text-emerald-500" />,
  'energy-statement': <Flame className="text-cyan-500" />,
  'heritage-impact-assessment': <Landmark className="text-amber-500" />,
  'transport-statement': <Truck className="text-blue-500" />,
  'parking-survey': <Car className="text-rose-500" />,
  'tree-survey': <TreePine className="text-green-600" />,
  'construction-management-plan': <HardHat className="text-brand-primary" />,
  'pre-construction-design-review': <Ruler className="text-brand-primary" />,
  'building-control': <ShieldCheck className="text-emerald-600" />,
  'party-wall-assessment': <Building2 className="text-indigo-500" />,
  'air-quality-screening': <Wind className="text-emerald-500" />,
  'noise-impact-assessment': <Volume2 className="text-amber-500" />,
  'daylight-sunlight-assessment': <Sun className="text-yellow-500" />,
  'phase-1-contamination': <FlaskConical className="text-red-500" />,
};

const reportColors: Record<string, string> = {
  'site-acquisition-intelligence': 'border-violet-500 bg-violet-50/30',
  'site-feasibility-report': 'border-teal-500 bg-teal-50/30',
  'geotechnical-desk-study': 'border-amber-600 bg-amber-50/30',
  'flood-risk-assessment': 'border-blue-500 bg-blue-50/30',
  'planning-statement': 'border-emerald-500 bg-emerald-50/30',
  'pre-application-advice': 'border-cyan-500 bg-cyan-50/30',
  'design-and-access-statement': 'border-brand-accent bg-brand-accent/5',
  'feasibility-study': 'border-brand-primary bg-brand-primary/5',
  'cil-liability-assessment': 'border-emerald-600 bg-emerald-50/30',
  'biodiversity-net-gain': 'border-emerald-500 bg-emerald-50/30',
  'energy-statement': 'border-cyan-500 bg-cyan-50/30',
  'heritage-impact-assessment': 'border-amber-500 bg-amber-50/30',
  'transport-statement': 'border-blue-500 bg-blue-50/30',
  'parking-survey': 'border-rose-500 bg-rose-50/30',
  'tree-survey': 'border-green-600 bg-green-50/30',
  'construction-management-plan': 'border-brand-primary bg-brand-primary/5',
  'pre-construction-design-review': 'border-brand-primary bg-brand-primary/5',
  'building-control': 'border-emerald-600 bg-emerald-50/30',
  'party-wall-assessment': 'border-indigo-500 bg-indigo-50/30',
  'air-quality-screening': 'border-emerald-500 bg-emerald-50/30',
  'noise-impact-assessment': 'border-amber-500 bg-amber-50/30',
  'daylight-sunlight-assessment': 'border-yellow-500 bg-yellow-50/30',
  'phase-1-contamination': 'border-red-500 bg-red-50/30',
};

// Purchasable reports only (exclude project-dependent)
const purchasableReports = allReports.filter(r => r.stripePrice > 0);

// Build order items: individual reports + bundles
interface OrderItem {
  id: string;
  name: string;
  price: number;
  rrp: number;
  icon: React.ReactNode;
  color: string;
  isBundle?: boolean;
  turnaround: string;
  reportCount?: number;
}

const orderItems: OrderItem[] = [
  // Bundles first
  ...bundles.map(b => ({
    id: b.slug,
    name: b.name,
    price: b.earlyAccessPrice,
    rrp: b.rrp,
    icon: b.isPremium ? <Crown className="text-amber-400" /> : <Zap className="text-brand-accent" />,
    color: b.isPremium ? 'border-amber-400 bg-amber-50/30' : 'border-brand-accent bg-brand-accent/10',
    isBundle: true,
    turnaround: '48-72hr',
    reportCount: b.includedReports.length,
  })),
  // Individual reports
  ...purchasableReports.map(r => ({
    id: r.slug,
    name: r.name,
    price: r.earlyAccessPrice,
    rrp: r.rrp,
    icon: reportIcons[r.slug] || <Zap className="text-brand-primary" />,
    color: reportColors[r.slug] || 'border-brand-primary/10 bg-white',
    isBundle: false,
    turnaround: r.turnaround,
  })),
];

const OrderReport = () => {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [appliedDiscount, setAppliedDiscount] = useState<{ code: string; type: string; value: number } | null>(null);
  const [discountError, setDiscountError] = useState<string | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [selectionError, setSelectionError] = useState<string | null>(null);
  const [showBundles, setShowBundles] = useState(true);

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

  const selectedItems = orderItems.filter(r => selectedReports.includes(r.id));
  const basePrice = selectedItems.reduce((sum, r) => sum + r.price, 0);

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
        setSelectionError('Please select at least one report or bundle');
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
      setSelectionError('Please select at least one report or bundle');
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
          _subject: `New Report Order: ${selectedItems.map(r => r.name).join(', ')}`,
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          company: data.company || 'N/A',
          reports: selectedItems.map(r => r.name).join(', '),
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

  const bundleItems = orderItems.filter(i => i.isBundle);
  const reportItems = orderItems.filter(i => !i.isBundle);

  return (
    <div className="pt-32 pb-24 bg-brand-surface min-h-screen">
      <PageSEO
        title="Order Report | Site Intelligence | PF & Co"
        description="Order planning-ready site intelligence reports from PF & Co. Choose from 20 professional reports, 8 bundles, or The Complete Intelligence package."
        path="/order-report"
        jsonLd={{
          '@type': 'Product',
          name: 'Site Intelligence Reports',
          description: 'Planning-ready site intelligence reports — from flood risk and geotechnical studies to planning statements and feasibility reports.',
          brand: { '@type': 'Organization', name: 'PF & Co Construction' },
          offers: {
            '@type': 'AggregateOffer',
            lowPrice: '245',
            highPrice: '6995',
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
              {/* AI-Assisted Reports Disclosure */}
              <div className="flex items-start gap-4 p-6 rounded-2xl bg-emerald-50 border border-emerald-200">
                <ShieldCheck className="text-emerald-600 mt-0.5 shrink-0" size={22} />
                <div>
                  <h3 className="font-bold text-brand-primary text-sm mb-1">AI-Assisted Reports</h3>
                  <p className="text-xs text-brand-primary/60 leading-relaxed">
                    Our reports are produced using a multi-agent AI system that interrogates 60+ authoritative data sources,
                    with every output reviewed through a 24-category QA pipeline and engineering oversight.{' '}
                    <a href="/ai-compliance" className="text-brand-accent font-medium hover:underline">Learn more about our AI methodology.</a>
                  </p>
                </div>
              </div>

              <section>
                <h2 className="text-2xl font-bold mb-2">Select Your Reports</h2>
                <p className="text-sm text-brand-primary/50 mb-6">Choose a bundle for best value, or pick individual reports.</p>
                {selectionError && <p className="text-red-500 text-xs mb-4 font-bold">{selectionError}</p>}

                {/* Toggle */}
                <div className="flex gap-2 mb-6">
                  <button
                    type="button"
                    onClick={() => setShowBundles(true)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${showBundles ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary/50 border border-brand-primary/10'}`}
                  >
                    Bundles ({bundleItems.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowBundles(false)}
                    className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${!showBundles ? 'bg-brand-primary text-white' : 'bg-white text-brand-primary/50 border border-brand-primary/10'}`}
                  >
                    Individual Reports ({reportItems.length})
                  </button>
                </div>

                <div className="grid gap-4">
                  {(showBundles ? bundleItems : reportItems).map((r) => {
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
                            {r.id === 'complete-intelligence' ? 'Premium' : r.id === 'triple-threat' ? 'Most Popular' : 'Bundle'}
                          </div>
                        )}
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm">
                            {r.icon}
                          </div>
                          <div>
                            <div className="font-bold text-brand-primary">{r.name}</div>
                            <div className="text-xs text-brand-primary/40">
                              {r.isBundle ? `${r.reportCount} Reports Included` : r.turnaround + ' Turnaround'}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="text-right">
                            {r.rrp > r.price && (
                              <div className="text-[10px] text-brand-primary/40 line-through">RRP £{r.rrp.toLocaleString()}</div>
                            )}
                            <div className="font-mono font-bold text-brand-primary">£{r.price.toLocaleString()}</div>
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

                  <p className="text-white/60 text-sm mb-4 font-light">
                    Payment is processed securely via Stripe. You will be redirected to complete your purchase.
                  </p>
                  <p className="text-white/40 text-xs mb-8 font-light leading-relaxed">
                    Reports are AI-assisted desk studies reviewed by our engineering team. For non-AI alternatives,
                    contact us at <a href="mailto:info@pfcoconstruction.co.uk" className="text-brand-accent hover:underline">info@pfcoconstruction.co.uk</a>.
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
                  {selectedItems.length === 0 ? (
                    <p className="text-sm text-brand-primary/40 italic">No reports selected</p>
                  ) : (
                    selectedItems.map(r => (
                      <div key={r.id} className="flex justify-between items-start gap-4">
                        <div>
                          <div className="text-sm font-medium text-brand-primary/80">{r.name}</div>
                          {r.isBundle && <div className="text-[10px] text-brand-primary/40">{r.reportCount} reports</div>}
                        </div>
                        <div className="text-sm font-bold shrink-0">£{r.price.toLocaleString()}</div>
                      </div>
                    ))
                  )}
                  <div className="flex justify-between items-center gap-4 pt-2 border-t border-brand-primary/5">
                    <div className="text-sm font-medium text-brand-primary/60">Turnaround</div>
                    <div className="text-sm font-bold">48-72 Hours</div>
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
                    <div className="flex items-start gap-3">
                      <ShieldCheck size={16} className="text-brand-accent mt-1 shrink-0" />
                      <p className="text-xs text-white/60 leading-relaxed">AI-assisted analysis with human QA review.</p>
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
