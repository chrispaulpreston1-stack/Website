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

    // Handle one-off product purchases
    if (session.mode === 'payment') {
      try {
        const metadata = session.metadata || {};
        const customerEmail = session.customer_email || session.customer_details?.email || '';
        const customerName = metadata.customerName || session.customer_details?.name || 'Customer';
        const product = metadata.product || 'Unknown product';
        const address = metadata.address || 'Not provided';
        const dwellings = metadata.dwellings || 'N/A';
        const phone = metadata.phone || 'N/A';
        const company = metadata.company || '';
        const amount = session.amount_total ? `£${(session.amount_total / 100).toLocaleString()}` : 'N/A';

        console.log(`Product order: ${product} for ${address} by ${customerName} (${amount})`);

        // Notify Chris via Formspree
        fetch('https://formspree.io/f/xdalrdyj', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify({
            _subject: `New Order: ${product} — ${address} — ${amount}`,
            name: customerName,
            email: customerEmail,
            company: company || 'Individual',
            phone: phone,
            product: product,
            address: address,
            dwellings: dwellings,
            amount: amount,
            project_type: metadata.projectType || 'N/A',
          }),
        }).catch(err => console.warn('Formspree notification failed:', err.message));

        // Send confirmation email to customer via Resend
        if (resendKey && customerEmail) {
          const { Resend } = await import('resend');
          const resend = new Resend(resendKey);
          const firstName = customerName.split(' ')[0];

          await resend.emails.send({
            from: 'Site Intelligence <orders@pfandco.co.uk>',
            to: [customerEmail],
            bcc: ['info@pfandco.co.uk'],
            subject: `Order Confirmed — ${product} for ${address}`,
            html: `<!DOCTYPE html><html><head><meta charset="utf-8"><style>body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a1a2e;line-height:1.6;margin:0;padding:0;background:#f8f8fa}.container{max-width:600px;margin:0 auto;background:#fff}.header{background:linear-gradient(135deg,#1a1a2e,#0f3460);padding:40px 32px;text-align:center}.header h1{color:#fff;font-size:22px;margin:0 0 4px}.header p{color:#27ae60;font-size:13px;margin:0;font-weight:600;letter-spacing:1px;text-transform:uppercase}.body{padding:32px}.body p{margin:0 0 16px;font-size:15px}.details td{padding:10px 14px;font-size:14px;border-bottom:1px solid #f0f0f0}.details td:first-child{font-weight:600;width:40%}.cta{background:#f8f8fa;border-radius:12px;padding:24px;margin:24px 0;text-align:center}.cta a{display:inline-block;background:#27ae60;color:#fff;padding:12px 28px;border-radius:8px;text-decoration:none;font-weight:700;font-size:14px}.footer{padding:24px 32px;background:#f8f8fa;border-top:1px solid #eee;text-align:center}.footer p{font-size:12px;color:#999;margin:0 0 4px}.footer a{color:#27ae60;text-decoration:none}</style></head><body><div class="container"><div class="header"><h1>Order Confirmed</h1><p>${product}</p></div><div class="body"><p>Dear ${firstName},</p><p>Thank you for your order. We've received your request and work begins immediately.</p><table class="details" style="width:100%;border-collapse:collapse;margin:24px 0"><tr style="background:#f0fdf4"><td>Product</td><td><strong>${product}</strong></td></tr><tr><td>Site</td><td>${address}</td></tr><tr><td>Dwellings</td><td>${dwellings}</td></tr><tr><td>Amount Paid</td><td><strong>${amount}</strong></td></tr></table><p><strong>What happens next:</strong></p><ol style="padding-left:20px;margin:16px 0"><li style="margin-bottom:8px">Our team reviews your order and site details within the hour.</li><li style="margin-bottom:8px">We query 76+ authoritative data sources and run your site through our analysis pipeline.</li><li style="margin-bottom:8px">Every report passes a 24-layer QA pipeline before delivery.</li><li style="margin-bottom:8px">Your completed report pack is delivered to this email — typically within 48 hours.</li></ol><div class="cta"><p style="margin:0 0 8px;font-size:14px;color:#666">Questions about your order?</p><a href="mailto:info@pfandco.co.uk?subject=Order Query — ${encodeURIComponent(address)}">Email Us</a></div><p>Or call us on <strong>01483 363 210</strong></p><p>Best regards,<br><strong>Site Intelligence</strong><br>PF & Co Holdings Ltd</p></div><div class="footer"><p>PF & Co Holdings Ltd — Company No. 16649319</p><p><a href="https://www.pfandco.co.uk">www.pfandco.co.uk</a> | <a href="mailto:info@pfandco.co.uk">info@pfandco.co.uk</a> | 01483 363 210</p></div></div></body></html>`,
          });
          console.log('Order confirmation email sent to:', customerEmail);
        }

        return res.status(200).json({ received: true, product_order: true });
      } catch (err) {
        console.error('Product order handling failed:', err);
        return res.status(200).json({ received: true, error: err.message });
      }
    }

    // Only process subscription checkouts below
    if (session.mode !== 'subscription') {
      return res.status(200).json({ received: true, skipped: 'unknown mode' });
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
