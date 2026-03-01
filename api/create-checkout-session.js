import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const REPORT_PRICES = {
  'site-feasibility-report': { name: 'Site Feasibility Report', price: 297 },
  'geotechnical-desk-study': { name: 'Geotechnical Desk Study', price: 297 },
  'flood-risk-assessment': { name: 'Flood Risk Assessment', price: 297 },
  'full-bundle': { name: 'Full Site Intelligence Bundle', price: 830 },
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
  'tree-survey': { name: 'Tree Survey (BS 5837)', price: 575 },
};

const DISCOUNT_CODES = {
  'SITE10': { type: 'percent', value: 10 },
  'WELCOME': { type: 'fixed', value: 50 },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { reportType, email, fullName, discountCode, metadata } = req.body;

    const report = REPORT_PRICES[reportType];
    if (!report) {
      return res.status(400).json({ error: 'Invalid report type' });
    }

    let finalPrice = report.price;

    if (discountCode) {
      const discount = DISCOUNT_CODES[discountCode.toUpperCase()];
      if (discount) {
        if (discount.type === 'percent') {
          finalPrice = Math.round(finalPrice * (1 - discount.value / 100));
        } else {
          finalPrice = Math.max(0, finalPrice - discount.value);
        }
      }
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: 'gbp',
            product_data: {
              name: report.name,
              description: `PF & Co Site Intelligence Report — ${report.name}`,
            },
            unit_amount: finalPrice * 100,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${req.headers.origin}/order-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/order-report?report=${reportType}`,
      metadata: {
        reportType,
        customerName: fullName,
        ...metadata,
      },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Stripe error:', err);
    res.status(500).json({ error: err.message || 'Failed to create checkout session' });
  }
}
