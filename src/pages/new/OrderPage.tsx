import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  MapPin,
  Search,
  FileText,
  MessageSquare,
  Package,
  ArrowRight,
  Check,
  Phone,
  Loader2,
} from 'lucide-react';

/* ------------------------------------------------------------------ */
/*  Pricing table                                                      */
/* ------------------------------------------------------------------ */
const PRICING: Record<string, Record<string, number>> = {
  screening: { '1': 199, '2-9': 199, '10-50': 199, '51-100': 199 },
  feasibility: { '1': 695, '2-9': 1295, '10-50': 2495, '51-100': 3495 },
  preapp: { '1': 995, '2-9': 1795, '10-50': 3495, '51-100': 4995 },
  fullpack: { '1': 0, '2-9': 0, '10-50': 0, '51-100': 0 },
};

function getBand(dwellings: number): string | null {
  if (dwellings <= 0) return null;
  if (dwellings === 1) return '1';
  if (dwellings <= 9) return '2-9';
  if (dwellings <= 50) return '10-50';
  if (dwellings <= 100) return '51-100';
  return null; // over 100 = call us
}

function getStripeKey(product: string, band: string): string {
  if (product === 'screening') return 'screening';
  return `${product}-${band}`;
}

const PRODUCTS = [
  {
    id: 'screening',
    name: 'Site Screening',
    tag: 'Product 1',
    color: '#27ae60',
    icon: <Search size={20} />,
    turnaround: 'Same day',
    includes: [
      'Traffic-light go/no-go verdict',
      'Constraint summary and overlay map',
      'Fatal flaw sense check',
      'List of reports needed if you proceed',
    ],
  },
  {
    id: 'feasibility',
    name: 'Feasibility Intelligence',
    tag: 'Product 2',
    color: '#0f3460',
    icon: <FileText size={20} />,
    turnaround: '48 hours',
    includes: [
      'Everything in Screening',
      'Full site feasibility report',
      'All constraint-triggered technical reports',
      '35+ maps and overlays',
      'Indicative site layout',
      'Executive summaries (Developer, Architect, Technical, Finance, Risk)',
    ],
  },
  {
    id: 'preapp',
    name: 'Pre-Application Pack',
    tag: 'Product 3',
    color: '#7c3aed',
    icon: <MessageSquare size={20} />,
    turnaround: '1 week',
    includes: [
      'Everything in Feasibility',
      'Pre-application advice report',
      'Draft planning statement',
      'Development strategy',
      'Validation checklist',
    ],
  },
  {
    id: 'fullpack',
    name: 'Planning Intelligence Pack',
    tag: 'Product 4',
    color: '#e67e22',
    icon: <Package size={20} />,
    turnaround: '1-2 weeks',
    includes: [
      'Everything in Pre-Application',
      'Submission-ready planning statement',
      'Design and access statement',
      'Submission pack index',
      'CIL forms auto-filled',
      'Application covering letter',
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */
export default function OrderPage() {
  const [searchParams] = useSearchParams();
  useEffect(() => { window.scrollTo(0, 0); }, []);

  /* Ideal Postcodes API key — test key for development, swap for real key in .env */
  const IDEAL_API_KEY = import.meta.env.VITE_IDEAL_POSTCODES_KEY || 'iddqd';

  const [step, setStep] = useState(1);
  const [postcode, setPostcode] = useState(searchParams.get('address') || '');
  const [postcodeVerified, setPostcodeVerified] = useState(!!searchParams.get('lat'));
  const [postcodeInfo, setPostcodeInfo] = useState(searchParams.get('lpa') || '');
  const [lat, setLat] = useState(searchParams.get('lat') || '');
  const [lon, setLon] = useState(searchParams.get('lon') || '');
  const [uprn, setUprn] = useState('');
  const [siteDescription, setSiteDescription] = useState('');
  const [addresses, setAddresses] = useState<any[]>([]);
  const [showAddressList, setShowAddressList] = useState(false);
  const [dwellings, setDwellings] = useState(1);
  const [dwellingBand, setDwellingBand] = useState('');
  const [selectedProduct, setSelectedProduct] = useState('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [postcodeError, setPostcodeError] = useState('');
  const [postcodeLoading, setPostcodeLoading] = useState(false);

  const band = getBand(dwellings);
  const overLimit = dwellings > 100;

  const handleCheckout = async () => {
    if (!selectedProduct || !band) return;
    setLoading(true);
    setError('');

    const stripeKey = getStripeKey(selectedProduct, band);

    try {
      const res = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          reportType: stripeKey,
          email,
          fullName,
          metadata: {
            postcode,
            siteDescription,
            dwellings: String(dwellings),
            product: selectedProduct,
            company,
            phone,
            latitude: lat,
            longitude: lon,
            lpa: postcodeInfo,
            uprn,
          },
        }),
      });

      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
        setLoading(false);
      }
    } catch {
      setError('Connection error. Please try again.');
      setLoading(false);
    }
  };

  const price = selectedProduct && band ? PRICING[selectedProduct]?.[band] : null;

  return (
    <>
      <Helmet>
        <title>Order Your Pack | Site Intelligence — From £199</title>
        <meta name="description" content="Order your planning intelligence pack. Enter your site address, choose your product, pay securely. Reports delivered in 48 hours." />
        <meta property="og:title" content="Order Your Pack — Site Intelligence" />
        <meta property="og:description" content="Planning intelligence from £199. Choose your product, pay online, receive in 48 hours." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.pfandco.co.uk/og-image.png" />
        <link rel="canonical" href="https://www.pfandco.co.uk/order" />
      </Helmet>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center overflow-hidden text-center py-16 pt-24 md:py-[120px] md:pt-[120px]"
        style={{ background: 'linear-gradient(135deg, #0d0d1a, #1a1a2e, #0f3460)' }}
      >
        <div className="absolute top-[10%] right-[15%] w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(39,174,96,0.08) 0%, transparent 70%)' }} />
        <div className="relative z-10 max-w-[700px] px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight mb-4" style={{ textShadow: '0 2px 40px rgba(0,0,0,0.3)' }}>
            Order Your <span className="text-[#27ae60]">Pack</span>
          </h1>
          <p className="text-lg text-[#b0b8cc]/80">
            Tell us about your site. We'll show you exactly what you'll get and the price.
          </p>
        </div>
      </section>

      {/* Step indicator */}
      <div className="bg-white border-b border-[#e2e5ed] sticky top-[67px] z-40">
        <div className="max-w-[900px] mx-auto px-6 py-4">
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {['Your Site', 'See Prices', 'Your Details', 'Pay'].map((label, i) => (
              <React.Fragment key={label}>
                {i > 0 && <div className="w-6 sm:w-10 h-px bg-[#e2e5ed]" />}
                <button
                  onClick={() => { if (i + 1 < step) setStep(i + 1); }}
                  className={`flex items-center gap-2 text-xs sm:text-sm font-medium transition-colors min-h-[44px] min-w-[44px] ${
                    step === i + 1
                      ? 'text-[#27ae60]'
                      : step > i + 1
                        ? 'text-[#2c2c3a] cursor-pointer hover:text-[#27ae60]'
                        : 'text-[#9ca3af]'
                  }`}
                >
                  <span className={`w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                    step > i + 1
                      ? 'bg-[#27ae60] text-white'
                      : step === i + 1
                        ? 'bg-[#27ae60] text-white'
                        : 'bg-[#e2e5ed] text-[#9ca3af]'
                  }`}>
                    {step > i + 1 ? <Check size={12} /> : i + 1}
                  </span>
                  <span className="hidden sm:inline">{label}</span>
                </button>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Form content */}
      <section className="py-16 bg-gradient-to-b from-white to-[#f7f8fc]">
        <div className="max-w-[900px] mx-auto px-6">

          {/* STEP 1: Your Site */}
          {step === 1 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="text-2xl font-bold mb-2">Tell us about your site</h2>
              <p className="text-[#6b7280] mb-8">Three quick fields and we'll show you prices.</p>

              <div className="space-y-6">
                {/* Postcode + Address Lookup via Ideal Postcodes */}
                <div>
                  <label className="block text-sm font-semibold text-[#2c2c3a] mb-2">Site postcode</label>
                  {postcodeVerified && siteDescription ? (
                    /* Confirmed state — show green pill with address */
                    <div className="flex flex-col gap-2">
                      <div className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#f0fdf4] border border-[#bbf7d0] text-[#166534] text-base flex-wrap">
                        <Check size={16} className="text-[#27ae60] shrink-0" />
                        <span className="font-semibold">{siteDescription}</span>
                        <span className="text-sm font-normal text-[#6b7280]">{postcode} &middot; {postcodeInfo}</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => { setPostcodeVerified(false); setSiteDescription(''); setAddresses([]); setShowAddressList(false); setPostcodeError(''); setUprn(''); }}
                        className="text-sm text-[#6b7280] hover:text-[#2c2c3a] transition-colors self-start"
                      >
                        Change address
                      </button>
                    </div>
                  ) : (
                    <div>
                      {/* Postcode input + Find Address button */}
                      <div className="flex flex-col sm:flex-row gap-3">
                        <div className="relative flex-grow max-w-full sm:max-w-[240px]">
                          <MapPin size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af]" />
                          <input
                            type="text"
                            value={postcode}
                            onChange={(e) => { setPostcode(e.target.value.toUpperCase()); setPostcodeError(''); setAddresses([]); setShowAddressList(false); }}
                            placeholder="e.g. EX10 8EQ"
                            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-[#e2e5ed] text-base focus:outline-none focus:ring-2 focus:ring-[#27ae60]/30 focus:border-[#27ae60] transition-all"
                            maxLength={10}
                            onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); document.getElementById('findAddressBtn')?.click(); } }}
                          />
                        </div>
                        <button
                          id="findAddressBtn"
                          type="button"
                          disabled={postcodeLoading || postcode.trim().length < 3}
                          onClick={async () => {
                            setPostcodeLoading(true);
                            setPostcodeError('');
                            setAddresses([]);
                            setShowAddressList(false);
                            try {
                              /* First validate with Postcodes.io (free, England-only check) */
                              const pioRes = await fetch(`https://api.postcodes.io/postcodes/${encodeURIComponent(postcode.trim())}`);
                              const pioData = await pioRes.json();
                              if (pioData.status !== 200 || !pioData.result) {
                                setPostcodeError('Postcode not found. Please check and try again.');
                                setPostcodeLoading(false);
                                return;
                              }
                              if (pioData.result.country !== 'England') {
                                setPostcodeError('Site Intelligence currently covers England only.');
                                setPostcodeLoading(false);
                                return;
                              }
                              setPostcode(pioData.result.postcode);
                              setPostcodeInfo(pioData.result.admin_district || '');
                              setLat(String(pioData.result.latitude));
                              setLon(String(pioData.result.longitude));

                              /* Then fetch addresses from Ideal Postcodes */
                              const idRes = await fetch(`https://api.ideal-postcodes.co.uk/v1/postcodes/${encodeURIComponent(pioData.result.postcode)}?api_key=${IDEAL_API_KEY}`);
                              const idData = await idRes.json();
                              if (idData.result && idData.result.length > 0) {
                                setAddresses(idData.result);
                                setShowAddressList(true);
                              } else {
                                /* No addresses found — let them type manually */
                                setPostcodeVerified(true);
                                setShowAddressList(false);
                              }
                            } catch {
                              setPostcodeError('Could not look up postcode. Please try again.');
                            }
                            setPostcodeLoading(false);
                          }}
                          className="px-5 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52] hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(39,174,96,0.3)] disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none whitespace-nowrap"
                        >
                          {postcodeLoading ? <Loader2 size={16} className="animate-spin" /> : <><Search size={16} /> Find Address</>}
                        </button>
                      </div>
                      {postcodeError && (
                        <p className="mt-2 text-sm text-red-600">{postcodeError}</p>
                      )}

                      {/* Address dropdown from Ideal Postcodes */}
                      {showAddressList && addresses.length > 0 && (
                        <div className="mt-3">
                          <label className="block text-sm font-semibold text-[#2c2c3a] mb-2">
                            Select your address <span className="font-normal text-[#9ca3af]">({addresses.length} found)</span>
                          </label>
                          <select
                            className="w-full px-4 py-3.5 rounded-xl border border-[#e2e5ed] text-base focus:outline-none focus:ring-2 focus:ring-[#27ae60]/30 focus:border-[#27ae60] transition-all bg-white"
                            defaultValue=""
                            onChange={(e) => {
                              const idx = parseInt(e.target.value, 10);
                              if (isNaN(idx)) return;
                              const addr = addresses[idx];
                              const line = [addr.line_1, addr.line_2, addr.line_3].filter(Boolean).join(', ');
                              setSiteDescription(line + ', ' + addr.post_town);
                              setUprn(String(addr.uprn || ''));
                              if (addr.latitude && addr.longitude) {
                                setLat(String(addr.latitude));
                                setLon(String(addr.longitude));
                              }
                              setPostcodeVerified(true);
                              setShowAddressList(false);
                            }}
                          >
                            <option value="" disabled>Choose an address...</option>
                            {addresses.map((addr: any, i: number) => {
                              const line = [addr.line_1, addr.line_2, addr.line_3].filter(Boolean).join(', ');
                              return <option key={i} value={i}>{line}, {addr.post_town}</option>;
                            })}
                          </select>
                          <button
                            type="button"
                            onClick={() => { setPostcodeVerified(true); setShowAddressList(false); }}
                            className="mt-2 text-sm text-[#27ae60] hover:text-[#219a52] transition-colors font-medium"
                          >
                            My address isn't listed &mdash; I'll type it manually
                          </button>
                        </div>
                      )}

                      {/* Manual site description — shown after postcode verified but no address selected */}
                      {postcodeVerified && !siteDescription && (
                        <div className="mt-3">
                          <label className="block text-sm font-semibold text-[#2c2c3a] mb-2">Describe the site location</label>
                          <textarea
                            value={siteDescription}
                            onChange={(e) => setSiteDescription(e.target.value)}
                            placeholder="e.g. Land north of High Street, Sidford  /  42 Oak Lane, Sidmouth"
                            rows={2}
                            className="w-full px-4 py-3.5 rounded-xl border border-[#e2e5ed] text-base focus:outline-none focus:ring-2 focus:ring-[#27ae60]/30 focus:border-[#27ae60] transition-all resize-none"
                            autoFocus
                          />
                          <p className="mt-1.5 text-xs text-[#9ca3af]">The site address, field name, or a description of where it is.</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Dwelling count — band buttons */}
                <div>
                  <label className="block text-sm font-semibold text-[#2c2c3a] mb-3">How many dwellings?</label>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { label: '1', value: 1, band: '1' },
                      { label: '2\u20139', value: 5, band: '2-9' },
                      { label: '10\u201350', value: 25, band: '10-50' },
                      { label: '51\u2013100', value: 75, band: '51-100' },
                      { label: '100+', value: 101, band: '100+' },
                    ].map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => { setDwellings(opt.value); setDwellingBand(opt.band); }}
                        className={`px-5 py-3 rounded-xl text-sm font-semibold border-2 transition-all ${
                          dwellingBand === opt.band
                            ? 'border-[#27ae60] bg-[#f0fdf4] text-[#166534]'
                            : 'border-[#e2e5ed] bg-white text-[#6b7280] hover:border-[#27ae60]/40'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                  {dwellingBand === '100+' && (
                    <div className="mt-3 p-4 rounded-xl bg-[#fffbeb] border border-[#fde68a] text-sm text-[#92400e]">
                      For 100+ dwellings, we'll prepare a tailored quote. <a href="mailto:info@pfandco.co.uk" className="font-semibold underline">Email us</a> or call <a href="tel:+441483363210" className="font-semibold underline">01483 363210</a>.
                    </div>
                  )}
                  {dwellingBand && dwellingBand !== '100+' && (
                    <p className="mt-2 text-xs text-[#27ae60] font-medium">
                      Screening from {'\u00A3'}199 &middot; Feasibility from {'\u00A3'}{dwellingBand === '1' ? '695' : dwellingBand === '2-9' ? '1,295' : dwellingBand === '10-50' ? '2,495' : '3,495'}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-10 flex justify-end">
                <button
                  onClick={() => { if (postcodeVerified && siteDescription.length >= 5 && dwellingBand && dwellingBand !== '100+') setStep(2); }}
                  disabled={!postcodeVerified || siteDescription.length < 5 || !dwellingBand || dwellingBand === '100+'}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52] hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(39,174,96,0.3)] disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Next: See Prices <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 2: Choose Product */}
          {step === 2 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="text-2xl font-bold mb-2">Choose your product</h2>
              <p className="text-[#6b7280] mb-2">Each product includes everything from the products above it.</p>
              <p className="text-sm text-[#27ae60] font-semibold mb-8">
                {dwellings} dwelling{dwellings !== 1 ? 's' : ''} {band ? `(${band} band)` : ''}
              </p>

              <div className="space-y-4">
                {PRODUCTS.map((p) => {
                  const productPrice = band ? PRICING[p.id]?.[band] : null;
                  const isSelected = selectedProduct === p.id;

                  return (
                    <motion.div
                      key={p.id}
                      whileHover={{ y: -2 }}
                      onClick={() => !overLimit && p.id !== 'fullpack' && setSelectedProduct(p.id)}
                      className={`relative rounded-2xl p-6 sm:p-8 pl-8 sm:pl-10 border-2 cursor-pointer transition-all overflow-hidden ${
                        isSelected
                          ? 'shadow-lg'
                          : 'border-[#e2e5ed] bg-white hover:shadow-md'
                      }`}
                      style={{
                        borderColor: isSelected ? p.color : undefined,
                        boxShadow: isSelected ? `0 8px 30px ${p.color}20` : undefined,
                      }}
                    >
                      {/* Left accent */}
                      <div className="absolute top-0 left-0 bottom-0 w-[5px]" style={{ background: p.color }} />

                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-grow">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.7rem] font-bold uppercase tracking-wide" style={{ background: `${p.color}12`, color: p.color }}>
                              {p.icon} {p.tag}
                            </span>
                            <span className="text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-lg" style={{ background: `${p.color}12`, color: p.color }}>
                              {p.turnaround}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-3">{p.name}</h3>
                          <ul className="space-y-1.5">
                            {p.includes.map((item) => (
                              <li key={item} className="flex items-start gap-2 text-sm text-[#6b7280]">
                                <Check size={14} className="shrink-0 mt-0.5" style={{ color: p.color }} />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="sm:text-right shrink-0">
                          {overLimit ? (
                            <div className="text-center sm:text-right">
                              <a href="tel:+441483363210" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52]">
                                <Phone size={16} /> Call Us
                              </a>
                              <div className="text-xs text-[#9ca3af] mt-2">100+ dwellings</div>
                            </div>
                          ) : p.id === 'fullpack' ? (
                            <div className="text-center sm:text-right">
                              <a href="mailto:info@pfandco.co.uk?subject=Planning Intelligence Pack enquiry" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-br from-[#e67e22] to-[#cf6d17]">
                                Get a Quote
                              </a>
                              <div className="text-xs text-[#9ca3af] mt-2">Tailored to your site</div>
                            </div>
                          ) : (
                            <>
                              <div className="text-[2rem] font-extrabold tracking-tight" style={{ color: p.color }}>
                                &pound;{productPrice?.toLocaleString()}
                              </div>
                              <div className="text-xs text-[#9ca3af]">inc. all reports</div>
                              {isSelected && (
                                <motion.div
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-bold text-white"
                                  style={{ background: p.color }}
                                >
                                  <Check size={14} /> Selected
                                </motion.div>
                              )}
                            </>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <div className="mt-10 flex justify-between">
                <button onClick={() => setStep(1)} className="text-sm text-[#6b7280] hover:text-[#2c2c3a] transition-colors">
                  Back
                </button>
                <button
                  onClick={() => { if (selectedProduct) setStep(3); }}
                  disabled={!selectedProduct || overLimit}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52] hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(39,174,96,0.3)] disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Next: Your Details <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 3: Your Details */}
          {step === 3 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="text-2xl font-bold mb-2">Your details</h2>
              <p className="text-[#6b7280] mb-8">So we know where to send your report pack.</p>

              <div className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2c2c3a] mb-2">Full name *</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Chris Preston"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#e2e5ed] text-base focus:outline-none focus:ring-2 focus:ring-[#27ae60]/30 focus:border-[#27ae60] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2c2c3a] mb-2">Company (optional)</label>
                    <input
                      type="text"
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      placeholder="Your company name"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#e2e5ed] text-base focus:outline-none focus:ring-2 focus:ring-[#27ae60]/30 focus:border-[#27ae60] transition-all"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-[#2c2c3a] mb-2">Email *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#e2e5ed] text-base focus:outline-none focus:ring-2 focus:ring-[#27ae60]/30 focus:border-[#27ae60] transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-[#2c2c3a] mb-2">Phone *</label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="07700 900000"
                      className="w-full px-4 py-3.5 rounded-xl border border-[#e2e5ed] text-base focus:outline-none focus:ring-2 focus:ring-[#27ae60]/30 focus:border-[#27ae60] transition-all"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-10 flex justify-between">
                <button onClick={() => setStep(2)} className="text-sm text-[#6b7280] hover:text-[#2c2c3a] transition-colors">
                  Back
                </button>
                <button
                  onClick={() => { if (fullName && email && phone) setStep(4); }}
                  disabled={!fullName || !email || !phone}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52] hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_2px_8px_rgba(39,174,96,0.3)] disabled:opacity-40 disabled:cursor-not-allowed disabled:transform-none"
                >
                  Next: Review and Pay <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          )}

          {/* STEP 4: Review and Pay */}
          {step === 4 && (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
              <h2 className="text-2xl font-bold mb-2">Review your order</h2>
              <p className="text-[#6b7280] mb-8">Check the details below, then proceed to secure payment.</p>

              <div className="bg-white rounded-2xl border border-[#e2e5ed] p-8 mb-8">
                <div className="grid sm:grid-cols-2 gap-6 mb-8 pb-8 border-b border-[#e2e5ed]">
                  <div>
                    <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wide mb-1">Site</div>
                    <div className="text-base font-medium">{siteDescription}</div>
                    <div className="text-sm text-[#6b7280]">{postcode} &middot; {postcodeInfo}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wide mb-1">Development</div>
                    <div className="text-base font-medium">{dwellingBand === '1' ? '1 dwelling' : `${dwellingBand} dwellings`}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wide mb-1">Name</div>
                    <div className="text-base font-medium">{fullName}</div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-[#9ca3af] uppercase tracking-wide mb-1">Email</div>
                    <div className="text-base font-medium">{email}</div>
                  </div>
                </div>

                {/* Product summary */}
                {(() => {
                  const product = PRODUCTS.find((p) => p.id === selectedProduct);
                  if (!product) return null;
                  return (
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold uppercase tracking-wide px-2.5 py-0.5 rounded-full" style={{ background: `${product.color}12`, color: product.color }}>
                            {product.tag}
                          </span>
                        </div>
                        <div className="text-xl font-bold">{product.name}</div>
                        <div className="text-sm text-[#6b7280] mt-1">Turnaround: {product.turnaround}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-[2.5rem] font-extrabold tracking-tight" style={{ color: product.color }}>
                          &pound;{price?.toLocaleString()}
                        </div>
                        <div className="text-xs text-[#9ca3af]">All reports included. No hidden fees.</div>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {error && (
                <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div className="flex justify-between items-center">
                <button onClick={() => setStep(3)} className="text-sm text-[#6b7280] hover:text-[#2c2c3a] transition-colors">
                  Back
                </button>
                <button
                  onClick={handleCheckout}
                  disabled={loading}
                  className="inline-flex items-center gap-2 px-6 sm:px-10 py-4 rounded-xl text-base sm:text-lg font-bold text-white bg-gradient-to-br from-[#27ae60] to-[#219a52] hover:-translate-y-px hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_4px_20px_rgba(39,174,96,0.3)] disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {loading ? (
                    <><Loader2 size={20} className="animate-spin" /> Processing...</>
                  ) : (
                    <>Pay &pound;{price?.toLocaleString()} Securely <ArrowRight size={20} /></>
                  )}
                </button>
              </div>

              <p className="text-center text-xs text-[#9ca3af] mt-6">
                Secure payment processed by Stripe. Your card details never touch our servers.
              </p>
            </motion.div>
          )}

        </div>
      </section>
    </>
  );
}
