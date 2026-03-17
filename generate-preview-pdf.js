// One-off script to test the contract PDF generator
import generateContractPdf from './api/lib/generate-contract-pdf.js';
import { writeFileSync } from 'fs';

const previewDetails = {
  clientName: '[Client Name]',
  clientCompany: '[Company Name]',
  clientEmail: '[client@email.com]',
  clientPhone: '[Phone]',
  tierKey: 'professional-monthly',
  tierName: 'Professional',
  billingCycle: 'monthly',
  monthlyFee: 995,
  annualFee: 10149,
  creditsPerMonth: 6,
  maxCreditBank: 18,
  turnaround: '48 hours',
  rollover: '3 months',
  minTerm: '6 months',
  overageRate: 240,
  whiteLabel: true,
  commencementDate: '[Date]',
};

try {
  const pdfBuffer = await generateContractPdf(previewDetails);
  writeFileSync('public/legal/PFCO-Subscription-Agreement.pdf', pdfBuffer);
  writeFileSync('C:\\Users\\chris\\Documents\\PF Co Holdings\\Legal\\PFCO-Subscription-Agreement-Preview.pdf', pdfBuffer);
  console.log(`PDF generated: ${(pdfBuffer.length / 1024).toFixed(0)} KB`);
  console.log('Saved to:');
  console.log('  - public/legal/PFCO-Subscription-Agreement.pdf');
  console.log('  - C:\\Users\\chris\\Documents\\PF Co Holdings\\Legal\\PFCO-Subscription-Agreement-Preview.pdf');
} catch (err) {
  console.error('Error:', err.message);
  console.error(err.stack);
}
