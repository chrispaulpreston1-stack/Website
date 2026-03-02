import PageSEO from '../components/PageSEO';

export default function TermsOfService() {
  return (
    <>
      <PageSEO
        title="Terms of Service | PF & Co Construction"
        description="Terms and conditions governing the use of PF & Co Construction's website and services, including report orders and subscriptions."
        path="/terms-of-service"
      />

      <section className="pt-32 pb-24 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4">Terms of Service</h1>
          <p className="text-brand-primary/60 font-mono text-sm">Last updated: 2 March 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-brand-primary">
          <h2>1. Introduction</h2>
          <p>
            These terms of service ("Terms") govern your use of the website operated by PF & Co Construction
            Ltd ("we", "us", "our") at pfcoconstruction.co.uk and any services provided through it. By using
            our website or ordering services, you agree to these Terms.
          </p>

          <h2>2. Services</h2>
          <p>
            We provide structural engineering, construction, and site intelligence services. Reports ordered
            through our platform are desktop-based assessments produced using publicly available data sources
            and professional expertise. They are intended to inform decision-making and do not replace
            site-specific surveys, intrusive investigations, or formal professional advice where required.
          </p>

          <h2>3. Report Orders</h2>
          <ul>
            <li>All prices shown are the total price payable.</li>
            <li>Reports are delivered electronically to the email address provided.</li>
            <li>Typical turnaround times are stated on the relevant service pages but are not guaranteed.</li>
            <li>You are responsible for providing accurate site and project information. Inaccurate information may affect the validity of the report.</li>
          </ul>

          <h2>4. Payment</h2>
          <p>
            Payments are processed securely via Stripe. By submitting payment, you authorise us to charge
            the amount shown at checkout. Discount codes are subject to availability and may be withdrawn at
            any time.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, and software — is the
            property of PF & Co Construction Ltd or its licensors and is protected by copyright and
            intellectual property laws. You may not reproduce, distribute, or create derivative works from
            our content without written permission.
          </p>
          <p>
            Reports delivered to you are licensed for your use in connection with the specified project. They
            may not be resold, redistributed, or used for unrelated projects without our consent.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Our desktop reports are based on publicly available data and are provided "as is". While we take
            reasonable care to ensure accuracy, we do not warrant that reports are free from errors or
            omissions. Our liability for any claim arising from a report is limited to the fee paid for that
            report.
          </p>
          <p>
            We shall not be liable for indirect, consequential, or incidental damages arising from the use
            of our services or website, to the fullest extent permitted by law.
          </p>

          <h2>7. Professional Advice</h2>
          <p>
            Our reports and website content are for informational purposes and do not constitute formal
            professional advice. For structural design work, we hold Professional Indemnity insurance and
            our engineers are registered with the Institution of Civil Engineers (ICE). Specific terms
            for structural engineering commissions are agreed separately.
          </p>

          <h2>8. Cancellations and Refunds</h2>
          <p>
            You may cancel an order before work has commenced for a full refund. Once production of a report
            has begun, cancellations are not accepted. If you believe a report contains material errors,
            please contact us within 14 days and we will review and correct at no additional charge.
          </p>

          <h2>9. Website Use</h2>
          <ul>
            <li>You must not use our website for unlawful purposes or in a way that could damage or impair its availability.</li>
            <li>We reserve the right to modify or discontinue any part of the website without notice.</li>
            <li>We are not responsible for the content of external websites linked from our site.</li>
          </ul>

          <h2>10. Governing Law</h2>
          <p>
            These Terms are governed by the laws of England and Wales. Any disputes shall be subject to
            the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>11. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of our website after changes
            constitutes acceptance of the updated Terms.
          </p>

          <h2>12. Contact</h2>
          <p>
            For questions about these Terms, please contact us
            at <a href="mailto:info@pfcoconstruction.co.uk">info@pfcoconstruction.co.uk</a> or
            call 01483 363210.
          </p>
        </div>
      </section>
    </>
  );
}
