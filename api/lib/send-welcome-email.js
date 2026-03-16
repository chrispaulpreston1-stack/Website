// Send welcome email with personalised contract PDF attached via Resend.

import { Resend } from 'resend';

export async function sendWelcomeEmail(clientDetails, pdfBuffer, apiKey) {
  const resend = new Resend(apiKey);

  const {
    clientName,
    clientCompany,
    clientEmail,
    tierName,
    billingCycle,
    monthlyFee,
    annualFee,
    creditsPerMonth,
    turnaround,
    rollover,
    minTerm,
    overageRate,
    whiteLabel,
    commencementDate,
    maxCreditBank,
  } = clientDetails;

  const displayPrice = billingCycle === 'monthly'
    ? `£${monthlyFee.toLocaleString()}/month`
    : `£${annualFee.toLocaleString()}/year (15% saving)`;

  const firstName = clientName.split(' ')[0];

  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif; color: #1a1a2e; line-height: 1.6; margin: 0; padding: 0; background: #f8f8fa; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; }
    .header { background: #1a1a2e; padding: 40px 32px; text-align: center; }
    .header h1 { color: #ffffff; font-size: 22px; margin: 0 0 4px 0; font-weight: 700; }
    .header p { color: #d4a843; font-size: 13px; margin: 0; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; }
    .body { padding: 32px; }
    .body p { margin: 0 0 16px 0; font-size: 15px; }
    .details-table { width: 100%; border-collapse: collapse; margin: 24px 0; }
    .details-table td { padding: 10px 14px; font-size: 14px; border-bottom: 1px solid #f0f0f0; }
    .details-table td:first-child { font-weight: 600; color: #1a1a2e; width: 40%; }
    .details-table td:last-child { color: #555; }
    .highlight-row td { background: #fdf8ed; }
    .cta-box { background: #f8f8fa; border-radius: 12px; padding: 24px; margin: 24px 0; text-align: center; }
    .cta-box p { margin: 0 0 8px 0; font-size: 14px; color: #666; }
    .cta-box a { display: inline-block; background: #d4a843; color: #1a1a2e; padding: 12px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 14px; }
    .footer { padding: 24px 32px; background: #f8f8fa; border-top: 1px solid #eee; text-align: center; }
    .footer p { font-size: 12px; color: #999; margin: 0 0 4px 0; }
    .footer a { color: #d4a843; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>Welcome to PFCO Site Intelligence</h1>
      <p>${tierName} Subscription</p>
    </div>

    <div class="body">
      <p>Dear ${firstName},</p>

      <p>Thank you for subscribing to PFCO Site Intelligence. Your <strong>${tierName}</strong> subscription is now active.</p>

      <p>Please find your personalised Subscription Agreement attached to this email as a PDF. This confirms the terms under which your subscription operates.</p>

      <table class="details-table">
        <tr class="highlight-row">
          <td>Subscription Tier</td>
          <td><strong>${tierName}</strong></td>
        </tr>
        <tr>
          <td>Billing</td>
          <td>${displayPrice}</td>
        </tr>
        <tr>
          <td>Report Credits</td>
          <td>${creditsPerMonth} per month (max bank: ${maxCreditBank})</td>
        </tr>
        <tr>
          <td>Target Turnaround</td>
          <td>${turnaround}</td>
        </tr>
        <tr>
          <td>Credit Rollover</td>
          <td>${rollover}</td>
        </tr>
        <tr>
          <td>Minimum Term</td>
          <td>${minTerm}</td>
        </tr>
        <tr>
          <td>Overage Rate</td>
          <td>£${overageRate} per extra report</td>
        </tr>
        ${whiteLabel ? `<tr><td>White-Label</td><td>Included</td></tr>` : ''}
        <tr>
          <td>Commencement Date</td>
          <td>${commencementDate}</td>
        </tr>
      </table>

      <p>To request your first report, simply email us with the site address and the report type you need. We'll confirm receipt within one business day and get to work.</p>

      <div class="cta-box">
        <p>Ready to submit your first report request?</p>
        <a href="mailto:info@pfandco.co.uk?subject=Report%20Request%20—%20${encodeURIComponent(clientCompany || clientName)}">Request a Report</a>
      </div>

      <p>If you have any questions about your subscription or need help choosing the right report for a site, just reply to this email or call us on <strong>01483 363210</strong>.</p>

      <p>We look forward to working with you.</p>

      <p>Best regards,<br><strong>PFCO Site Intelligence</strong><br>PF & Co Holdings Ltd</p>
    </div>

    <div class="footer">
      <p>PF & Co Holdings Ltd — Company No. 16649319</p>
      <p>2 Queens Drive, Guildford, England, GU2 9PP</p>
      <p><a href="https://www.pfandco.co.uk">www.pfandco.co.uk</a> | <a href="mailto:info@pfandco.co.uk">info@pfandco.co.uk</a> | 01483 363210</p>
    </div>
  </div>
</body>
</html>`;

  // Generate a filename for the contract PDF
  const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const clientRef = (clientCompany || clientName).replace(/[^a-zA-Z0-9]/g, '-').slice(0, 30);
  const filename = `PFCO-Subscription-Agreement-${clientRef}-${dateStr}.pdf`;

  const { data, error } = await resend.emails.send({
    from: 'PFCO Site Intelligence <subscriptions@pfandco.co.uk>',
    to: [clientEmail],
    bcc: ['info@pfandco.co.uk'],
    subject: `Your PFCO Site Intelligence Subscription Agreement — ${tierName}`,
    html: htmlBody,
    attachments: [
      {
        filename,
        content: pdfBuffer.toString('base64'),
        contentType: 'application/pdf',
      },
    ],
  });

  if (error) {
    throw new Error(`Resend email error: ${JSON.stringify(error)}`);
  }

  return data;
}
