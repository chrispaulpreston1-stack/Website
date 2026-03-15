// IMPORTANT: These prices must match stripePrice values in src/data/reports.ts.
// When updating prices, update BOTH files. See reports.ts as the source of truth.
const REPORT_PRICES = {
  // Individual reports — prices must match stripePrice in src/data/reports.ts
  'site-acquisition-intelligence': { name: 'Site Acquisition Report', price: 995 },
  'development-finance-summary': { name: 'Development Finance Summary', price: 795 },
  'site-feasibility-report': { name: 'Site Feasibility Report', price: 595 },
  'geotechnical-desk-study': { name: 'Geotechnical Desk Study', price: 495 },
  'flood-risk-assessment': { name: 'Flood Risk Assessment', price: 375 },
  'phase-1-contamination': { name: 'Phase 1 Desk Study', price: 595 },
  'planning-statement': { name: 'Planning Statement', price: 495 },
  'pre-application-advice': { name: 'Pre-Application Advice', price: 245 },
  'design-and-access-statement': { name: 'Design & Access Statement', price: 395 },
  'feasibility-study': { name: 'Feasibility Study', price: 795 },
  'cil-liability-assessment': { name: 'CIL Liability Assessment', price: 295 },
  'biodiversity-net-gain': { name: 'Biodiversity Net Gain Screening', price: 495 },
  'energy-statement': { name: 'Energy Statement', price: 445 },
  'heritage-impact-assessment': { name: 'Heritage Impact Assessment', price: 545 },
  'transport-statement': { name: 'Transport Statement', price: 495 },
  'parking-survey': { name: 'Parking Survey', price: 345 },
  'tree-survey': { name: 'Arboricultural Constraints Appraisal', price: 575 },
  'air-quality-screening': { name: 'Air Quality Screening Assessment', price: 395 },
  'noise-impact-assessment': { name: 'Noise Screening Report', price: 445 },
  'daylight-sunlight-assessment': { name: 'Daylight & Sunlight Screening', price: 595 },
  'construction-management-plan': { name: 'Construction Management Plan', price: 595 },
  'pre-construction-design-review': { name: 'Pre-Construction Design Review', price: 895 },
  // Bundles — prices must match earlyAccessPrice in src/data/reports.ts
  'complete-intelligence': { name: 'The Complete Intelligence', price: 6995 },
  'developer-due-diligence': { name: 'The Developer Due Diligence', price: 2995 },
  'full-planning-suite': { name: 'The Full Planning Suite', price: 2495 },
  'conversion-ready-pack': { name: 'The Conversion Ready Pack', price: 1495 },
  'self-build-starter': { name: 'The Self-Build Starter', price: 1495 },
  'architect-support-pack': { name: 'The Architect Support Pack', price: 1395 },
  'appeal-ready-pack': { name: 'The Appeal-Ready Pack', price: 1195 },
  'construction-readiness': { name: 'The Construction Readiness Pack', price: 1095 },
  'triple-threat': { name: 'The Triple Threat', price: 995 },
};

const DISCOUNT_CODES = {
  'SITE10': { type: 'percent', value: 10 },
  'WELCOME': { type: 'fixed', value: 50 },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeKey) {
    return res.status(500).json({ error: 'Stripe not configured' });
  }

  try {
    // Support both single reportType (legacy) and multiple reportTypes
    const { reportType, reportTypes, email, fullName, discountCode, metadata = {} } = req.body;

    const types = reportTypes || (reportType ? [reportType] : []);
    if (types.length === 0) {
      return res.status(400).json({ error: 'No reports selected' });
    }

    // Validate all report types and calculate total
    const lineItems = [];
    let totalPrice = 0;

    for (const rt of types) {
      const report = REPORT_PRICES[rt];
      if (!report) {
        return res.status(400).json({ error: `Invalid report type: ${rt}` });
      }
      totalPrice += report.price;
      lineItems.push({ name: report.name, price: report.price, id: rt });
    }

    // Apply discount to the total
    if (discountCode) {
      const discount = DISCOUNT_CODES[discountCode.toUpperCase()];
      if (discount) {
        if (discount.type === 'percent') {
          totalPrice = Math.round(totalPrice * (1 - discount.value / 100));
        } else {
          totalPrice = Math.max(0, totalPrice - discount.value);
        }
      }
    }

    const origin = req.headers.origin || 'https://www.pfandco.co.uk';

    // Build Stripe API params with multiple line items
    const params = new URLSearchParams();
    params.append('payment_method_types[]', 'card');
    params.append('customer_email', email);
    params.append('mode', 'payment');
    params.append('success_url', `${origin}/order-success?session_id={CHECKOUT_SESSION_ID}`);
    params.append('cancel_url', `${origin}/order-report`);
    params.append('metadata[reportTypes]', types.join(','));
    params.append('metadata[customerName]', fullName);
    for (const [k, v] of Object.entries(metadata)) {
      if (v) params.append(`metadata[${k}]`, String(v));
    }

    // If discount applied, send as single combined line item
    if (discountCode && DISCOUNT_CODES[discountCode.toUpperCase()]) {
      const names = lineItems.map(li => li.name).join(' + ');
      params.append('line_items[0][price_data][currency]', 'gbp');
      params.append('line_items[0][price_data][product_data][name]', names);
      params.append('line_items[0][price_data][product_data][description]', `PF & Co Site Intelligence Reports (discount applied)`);
      params.append('line_items[0][price_data][unit_amount]', String(totalPrice * 100));
      params.append('line_items[0][quantity]', '1');
    } else {
      // Individual line items
      lineItems.forEach((li, i) => {
        params.append(`line_items[${i}][price_data][currency]`, 'gbp');
        params.append(`line_items[${i}][price_data][product_data][name]`, li.name);
        params.append(`line_items[${i}][price_data][product_data][description]`, `PF & Co Site Intelligence Report`);
        params.append(`line_items[${i}][price_data][unit_amount]`, String(li.price * 100));
        params.append(`line_items[${i}][quantity]`, '1');
      });
    }

    const stripeRes = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${stripeKey}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    const session = await stripeRes.json();

    if (!stripeRes.ok) {
      console.error('Stripe API error:', session);
      return res.status(stripeRes.status).json({ error: session.error?.message || 'Stripe error' });
    }

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Checkout error:', err);
    res.status(500).json({ error: err.message || 'Failed to create checkout session' });
  }
}
