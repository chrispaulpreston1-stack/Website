const REPORT_PRICES = {
  'site-feasibility-report': { name: 'Site Feasibility Report', price: 297 },
  'geotechnical-desk-study': { name: 'Geotechnical Desk Study', price: 297 },
  'flood-risk-assessment': { name: 'Flood Risk Assessment', price: 297 },
  // Bundle prices (Stripe checkout prices for bundles)
  'complete-intelligence': { name: 'The Complete Intelligence', price: 6995 },
  'full-planning-suite': { name: 'The Full Planning Suite', price: 3495 },
  'developer-due-diligence': { name: 'The Developer Due Diligence', price: 3095 },
  'construction-readiness': { name: 'The Construction Readiness Pack', price: 1195 },
  'triple-threat': { name: 'The Triple Threat', price: 2375 },
  'appeal-ready-pack': { name: 'The Appeal-Ready Pack', price: 2735 },
  'self-build-starter': { name: 'The Self-Build Starter', price: 3050 },
  'architect-support-pack': { name: 'The Architect Support Pack', price: 2625 },
  'biodiversity-net-gain': { name: 'Biodiversity Net Gain', price: 495 },
  'construction-management-plan': { name: 'Construction Management Plan', price: 595 },
  'design-and-access-statement': { name: 'Design & Access Statement', price: 395 },
  'energy-statement': { name: 'Energy Statement', price: 445 },
  'feasibility-study': { name: 'Feasibility Study', price: 795 },
  'heritage-impact-assessment': { name: 'Heritage Impact Assessment', price: 545 },
  'parking-survey': { name: 'Parking Survey', price: 345 },
  'planning-statement': { name: 'Planning Statement', price: 495 },
  'pre-application-advice': { name: 'Pre-Application Advice', price: 245 },
  'pre-construction-design-review': { name: 'Design Readiness Review', price: 895 },
  'transport-statement': { name: 'Transport Statement', price: 495 },
  'tree-survey': { name: 'Arboricultural Desk Study', price: 575 },
  'cil-liability-assessment': { name: 'CIL Liability Assessment', price: 295 },
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

    const origin = req.headers.origin || 'https://www.pfcoconstruction.co.uk';

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
