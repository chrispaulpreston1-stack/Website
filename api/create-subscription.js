// Stripe subscription checkout for PF & Co Site Intelligence tiers.
// Prices must match Subscriptions.tsx and subscription-and-pricing-guide.md.

const SUBSCRIPTION_TIERS = {
  'scout-monthly': {
    name: 'Scout — Site Intelligence Subscription',
    description: '2 report credits/month. 72hr turnaround. 2-month rollover.',
    price: 399,
    interval: 'month',
    credits: 2,
  },
  'scout-annual': {
    name: 'Scout — Site Intelligence Subscription (Annual)',
    description: '2 report credits/month. 72hr turnaround. 2-month rollover. Save 15%.',
    price: 4069,
    interval: 'year',
    credits: 2,
  },
  'professional-monthly': {
    name: 'Professional — Site Intelligence Subscription',
    description: '6 report credits/month. 48hr priority turnaround. White-label. Dedicated account manager.',
    price: 995,
    interval: 'month',
    credits: 6,
  },
  'professional-annual': {
    name: 'Professional — Site Intelligence Subscription (Annual)',
    description: '6 report credits/month. 48hr priority turnaround. White-label. Save 15%.',
    price: 10149,
    interval: 'year',
    credits: 6,
  },
  'developer-monthly': {
    name: 'Developer — Site Intelligence Subscription',
    description: '12 report credits/month. 48hr priority turnaround. White-label. Quarterly pipeline review.',
    price: 1995,
    interval: 'month',
    credits: 12,
  },
  'developer-annual': {
    name: 'Developer — Site Intelligence Subscription (Annual)',
    description: '12 report credits/month. 48hr priority turnaround. White-label. Save 15%.',
    price: 20349,
    interval: 'year',
    credits: 12,
  },
  'enterprise-monthly': {
    name: 'Enterprise — Site Intelligence Subscription',
    description: '30 report credits/month. 48hr priority turnaround. White-label. Quarterly pipeline review.',
    price: 3995,
    interval: 'month',
    credits: 30,
  },
  'enterprise-annual': {
    name: 'Enterprise — Site Intelligence Subscription (Annual)',
    description: '30 report credits/month. 48hr priority turnaround. White-label. Save 15%.',
    price: 40749,
    interval: 'year',
    credits: 30,
  },
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
    const { tier, email, fullName, company, phone } = req.body;

    if (!tier || !SUBSCRIPTION_TIERS[tier]) {
      return res.status(400).json({ error: `Invalid subscription tier: ${tier}` });
    }

    if (!email || !fullName) {
      return res.status(400).json({ error: 'Email and full name are required' });
    }

    const plan = SUBSCRIPTION_TIERS[tier];
    const origin = req.headers.origin || 'https://www.pfcoconstruction.co.uk';

    const params = new URLSearchParams();
    params.append('payment_method_types[]', 'card');
    params.append('customer_email', email);
    params.append('mode', 'subscription');
    params.append('success_url', `${origin}/order-success?subscription=true&tier=${tier}&session_id={CHECKOUT_SESSION_ID}`);
    params.append('cancel_url', `${origin}/subscriptions`);

    // Subscription line item with recurring price
    params.append('line_items[0][price_data][currency]', 'gbp');
    params.append('line_items[0][price_data][product_data][name]', plan.name);
    params.append('line_items[0][price_data][product_data][description]', plan.description);
    params.append('line_items[0][price_data][unit_amount]', String(plan.price * 100));
    params.append('line_items[0][price_data][recurring][interval]', plan.interval);
    params.append('line_items[0][quantity]', '1');

    // Metadata for our records
    params.append('metadata[tier]', tier);
    params.append('metadata[credits_per_month]', String(plan.credits));
    params.append('metadata[customer_name]', fullName);
    if (company) params.append('metadata[company]', company);
    if (phone) params.append('metadata[phone]', phone);

    // Subscription-specific settings
    params.append('subscription_data[metadata][tier]', tier);
    params.append('subscription_data[metadata][credits_per_month]', String(plan.credits));
    params.append('subscription_data[metadata][customer_name]', fullName);
    if (company) params.append('subscription_data[metadata][company]', company);

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
      console.error('Stripe subscription error:', session);
      return res.status(stripeRes.status).json({ error: session.error?.message || 'Stripe error' });
    }

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Subscription checkout error:', err);
    res.status(500).json({ error: err.message || 'Failed to create subscription checkout' });
  }
}
