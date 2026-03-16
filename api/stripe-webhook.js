// Stripe webhook handler for subscription events.
// Generates personalised contract PDF and emails it to the client on checkout completion.

import generateContractPdf from './lib/generate-contract-pdf.js';
import { sendWelcomeEmail } from './lib/send-welcome-email.js';

// Tier metadata for contract generation
const TIER_DETAILS = {
  scout: {
    tierName: 'Scout',
    monthlyFee: 399,
    annualFee: 4069.80,
    creditsPerMonth: 2,
    maxCreditBank: 4,
    turnaround: '72 hours',
    rollover: '2 months',
    minTerm: '3 months',
    overageRate: 275,
    whiteLabel: false,
  },
  professional: {
    tierName: 'Professional',
    monthlyFee: 995,
    annualFee: 10149,
    creditsPerMonth: 6,
    maxCreditBank: 18,
    turnaround: '48 hours',
    rollover: '3 months',
    minTerm: '6 months',
    overageRate: 240,
    whiteLabel: true,
  },
  developer: {
    tierName: 'Developer',
    monthlyFee: 1995,
    annualFee: 20349,
    creditsPerMonth: 12,
    maxCreditBank: 48,
    turnaround: '48 hours',
    rollover: '4 months',
    minTerm: '12 months',
    overageRate: 225,
    whiteLabel: true,
  },
  enterprise: {
    tierName: 'Enterprise',
    monthlyFee: 3995,
    annualFee: 40749,
    creditsPerMonth: 30,
    maxCreditBank: 180,
    turnaround: '48 hours',
    rollover: '6 months',
    minTerm: '12 months',
    overageRate: 195,
    whiteLabel: true,
  },
};

// Read raw body from request stream (needed for Stripe signature verification)
async function getRawBody(req) {
  const chunks = [];
  for await (const chunk of req) {
    chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk);
  }
  return Buffer.concat(chunks);
}

// Format date as "16 March 2026"
function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

export const config = {
  api: { bodyParser: false },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  const resendKey = process.env.RESEND_API_KEY;

  if (!stripeKey || !webhookSecret) {
    console.error('Missing STRIPE_SECRET_KEY or STRIPE_WEBHOOK_SECRET');
    return res.status(500).json({ error: 'Webhook not configured' });
  }

  let event;

  try {
    const rawBody = await getRawBody(req);
    const sig = req.headers['stripe-signature'];

    if (!sig) {
      return res.status(400).json({ error: 'Missing stripe-signature header' });
    }

    // Verify webhook signature using Stripe's recommended approach
    const stripe = (await import('stripe')).default(stripeKey);
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).json({ error: `Webhook Error: ${err.message}` });
  }

  // Handle the event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;

    // Only process subscription checkouts
    if (session.mode !== 'subscription') {
      return res.status(200).json({ received: true, skipped: 'not a subscription' });
    }

    try {
      const metadata = session.metadata || {};
      const tierKey = metadata.tier || ''; // e.g. "scout-monthly"
      const tierBase = tierKey.split('-')[0]; // e.g. "scout"
      const billingCycle = tierKey.includes('annual') ? 'annual' : 'monthly';
      const tierInfo = TIER_DETAILS[tierBase];

      if (!tierInfo) {
        console.error('Unknown tier:', tierKey);
        return res.status(200).json({ received: true, error: 'unknown tier' });
      }

      const clientDetails = {
        clientName: metadata.customer_name || session.customer_details?.name || 'Valued Client',
        clientCompany: metadata.company || '',
        clientEmail: session.customer_email || session.customer_details?.email || '',
        clientPhone: metadata.phone || '',
        tierKey,
        billingCycle,
        commencementDate: formatDate(new Date()),
        ...tierInfo,
      };

      console.log('Generating contract for:', clientDetails.clientName, '—', clientDetails.tierName, billingCycle);

      // Generate the personalised contract PDF
      const pdfBuffer = await generateContractPdf(clientDetails);

      // Send the welcome email with contract attached
      if (resendKey && clientDetails.clientEmail) {
        await sendWelcomeEmail(clientDetails, pdfBuffer, resendKey);
        console.log('Welcome email sent to:', clientDetails.clientEmail);
      } else {
        console.warn('Skipping email — missing RESEND_API_KEY or client email');
      }

      // Also notify PF & Co via Formspree (non-blocking)
      fetch('https://formspree.io/f/xdalrdyj', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `Subscription Activated: ${clientDetails.tierName} (${billingCycle}) — ${clientDetails.clientName}`,
          name: clientDetails.clientName,
          email: clientDetails.clientEmail,
          company: clientDetails.clientCompany || 'Individual',
          phone: clientDetails.clientPhone || 'N/A',
          tier: `${clientDetails.tierName} — ${billingCycle}`,
          price: billingCycle === 'monthly'
            ? `£${clientDetails.monthlyFee}/mo`
            : `£${clientDetails.annualFee}/yr`,
          credits: `${clientDetails.creditsPerMonth}/month`,
          contract_sent: 'Yes',
        }),
      }).catch(err => console.warn('Formspree notification failed:', err.message));

      return res.status(200).json({ received: true, contract_sent: true });
    } catch (err) {
      console.error('Contract generation/email failed:', err);
      // Still return 200 to Stripe so it doesn't retry — but log the error
      return res.status(200).json({ received: true, error: err.message });
    }
  }

  // Acknowledge other event types
  return res.status(200).json({ received: true });
}
