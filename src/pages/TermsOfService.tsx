import PageSEO from '../components/PageSEO';

export default function TermsOfService() {
  return (
    <>
      <PageSEO
        title="Terms of Service | PFCO Site Intelligence"
        description="Terms and conditions governing the use of PFCO Site Intelligence website and services, including report orders, bundles, and subscriptions."
        path="/terms-of-service"
      />

      <section className="pt-32 pb-24 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4">Terms of Service</h1>
          <p className="text-brand-primary/60 font-mono text-sm">Last updated: 16 March 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-brand-primary">
          <h2>1. Introduction</h2>
          <p>
            These terms of service ("Terms") govern your use of the website operated by PF & Co Holdings
            Ltd (company number 16649319) ("we", "us", "our") at pfandco.co.uk and any services provided
            through it, including the purchase of individual reports and report bundles. By using our
            website or ordering services, you agree to these Terms.
          </p>
          <p>
            Subscription services are governed by a separate Subscription Agreement, available
            at <a href="/legal/PFCO-Subscription-Agreement.pdf">/legal/PFCO-Subscription-Agreement.pdf</a>.
            In the event of any conflict between these Terms and the Subscription Agreement, the
            Subscription Agreement shall prevail for subscription clients.
          </p>

          <h2>2. Services</h2>
          <p>
            We provide site intelligence and planning advisory services through our PFCO Site Intelligence
            platform. Reports ordered through our platform are preliminary desktop intelligence products
            designed for early-stage site screening, development strategy, and informed decision-making.
            They are produced using publicly available data, proprietary data sources, and AI-assisted
            analysis with professional oversight.
          </p>
          <p>
            Reports are not a substitute for, and do not replace:
          </p>
          <ul>
            <li>formal statutory submissions to local planning authorities or other regulatory bodies;</li>
            <li>site-specific intrusive surveys, investigations, or inspections;</li>
            <li>formal pre-application discussions with local planning authorities;</li>
            <li>legal advice from a qualified solicitor;</li>
            <li>structural or geotechnical engineering design or advice based on site-specific testing; or</li>
            <li>environmental impact assessments or surveys based on site-specific sampling or monitoring.</li>
          </ul>
          <p>
            You remain responsible for commissioning further site-specific professional investigations
            and advice where appropriate before making decisions, incurring expenditure, or entering into
            commitments in connection with any site or development.
          </p>

          <h2>3. Report Orders</h2>
          <ul>
            <li>All prices shown are exclusive of VAT where applicable.</li>
            <li>Reports are delivered electronically to the email address provided.</li>
            <li>Typical turnaround times are stated on the relevant service pages but are targets, not guarantees.</li>
            <li>You are responsible for providing accurate and complete site and project information. We may rely on information you supply without independent verification unless expressly agreed otherwise in writing.</li>
            <li>We shall not be liable for any errors, omissions, or deficiencies in a report to the extent that they arise from inaccurate, incomplete, or misleading information supplied by you.</li>
          </ul>

          <h2>4. Payment</h2>
          <p>
            Payments are processed securely via Stripe. By submitting payment, you authorise us to charge
            the amount shown at checkout. All prices are in pounds sterling (GBP). Discount codes are
            subject to availability and may be withdrawn at any time.
          </p>

          <h2>5. Intellectual Property</h2>
          <p>
            All content on this website — including text, graphics, logos, images, software, report
            templates, methodologies, and AI systems — is the property of PF & Co Holdings Ltd or its
            licensors and is protected by copyright and intellectual property laws. You may not reproduce,
            distribute, or create derivative works from our content without written permission.
          </p>
          <p>
            Reports delivered to you are licensed for your use in connection with the specified project.
            You may share reports with your professional advisers, lenders, investors, and planning
            authorities in connection with the site to which the report relates. Reports may not be resold,
            sublicensed, commercially exploited as standalone products, or used for unrelated projects
            without our consent.
          </p>
          <p>
            You may not reverse-engineer, decompile, or attempt to extract our methodologies, algorithms,
            or AI processes from any report. You may not use reports to train, develop, or improve any
            competing AI system or automated report generation service.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            We use reasonable endeavours to ensure the quality and reliability of our reports, but we do
            not warrant that any report is complete, error-free, or current as at the date of delivery.
            Data sources are subject to change and we are not liable for errors in underlying third-party data.
          </p>
          <p>
            Our total liability for any claim arising from or in connection with a report is limited to the
            fee paid for that report. For subscription clients, liability is governed by the Subscription Agreement.
          </p>
          <p>
            We shall not be liable for any:
          </p>
          <ul>
            <li>loss of profits, revenue, business, or anticipated savings;</li>
            <li>loss of or damage to goodwill or reputation;</li>
            <li>loss of opportunity, including loss of a development opportunity, planning permission, or site acquisition;</li>
            <li>indirect, consequential, special, or punitive damages,</li>
          </ul>
          <p>
            in each case whether or not such loss was foreseeable, to the fullest extent permitted by law.
            Nothing in these Terms excludes or limits liability for death or personal injury caused by
            negligence, fraud, or any liability that cannot be excluded by applicable law.
          </p>

          <h2>7. Third-Party Reliance</h2>
          <p>
            Reports are produced solely for the benefit of the client who ordered them. No duty of care is
            owed by us to any third party in connection with any report. No third party may rely on a report
            unless we have given our prior written consent and agreed the terms on which such reliance is
            permitted. You must not remove, alter, or obscure any disclaimers, limitations, or contextual
            qualifications contained within a report when sharing it with third parties.
          </p>

          <h2>8. AI-Assisted Services & Professional Advice</h2>

          <h3>8.1 AI-Assisted Methodology</h3>
          <p>
            Our site intelligence reports are produced using a multi-agent artificial intelligence system
            that interrogates authoritative public data sources. "AI-assisted" means that AI is used for
            data acquisition, analysis, scoring, and initial report drafting. The AI system does not make
            autonomous decisions about report conclusions — all outputs are subject to human review before delivery.
          </p>

          <h3>8.2 Human Oversight</h3>
          <p>
            Every report passes through our multi-stage quality assurance pipeline, which includes accuracy
            auditing, regulatory cross-checks, consistency verification, and engineering review before
            delivery. Our QA process covers 24 quality categories across accuracy, regulatory compliance,
            consistency, formatting, and citation integrity.
          </p>

          <h3>8.3 Client Information Rights</h3>
          <p>
            Clients may request additional information about our AI methodology in writing. Information
            will be provided at a categorical level describing the types of data sources, analysis methods,
            and quality assurance processes used. This information excludes proprietary algorithms,
            agent-to-report mappings, data source wiring, scoring formulas, and other trade secrets.
            For RICS-regulated professionals requiring supplier due diligence documentation, please
            contact us at <a href="mailto:info@pfandco.co.uk">info@pfandco.co.uk</a>.
          </p>

          <h3>8.4 Alternative Services</h3>
          <p>
            If you require a report produced without AI assistance, please contact us to discuss a
            bespoke non-AI quotation. Availability and pricing for non-AI reports are assessed on a
            case-by-case basis.
          </p>

          <h2>9. Cancellations and Refunds</h2>

          <h3>9.1 Individual Report Orders</h3>
          <p>
            You may cancel an order before work has commenced for a full refund. Once production of a report
            has begun, cancellations are not accepted. If you believe a report contains material errors,
            please contact us within 14 days and we will review and correct at no additional charge.
          </p>

          <h3>9.2 Subscription 30-Day Money-Back Guarantee</h3>
          <p>
            All new subscriptions are covered by a 30-day money-back guarantee. If you have not used any
            report credits during the first 30 days of your subscription (measured from the date of your
            first payment), you may request a full refund of your first monthly or annual payment by
            emailing <a href="mailto:info@pfandco.co.uk">info@pfandco.co.uk</a> within that 30-day period.
            The refund will be processed to your original payment method within 10 business days.
          </p>
          <p>
            This guarantee applies to new subscriptions only and is limited to one claim per client. If you
            have used one or more report credits during the 30-day period, the guarantee does not apply and
            standard cancellation terms (Section 9.3) apply instead.
          </p>

          <h3>9.3 Subscription Cancellation</h3>
          <p>
            All subscriptions are subject to a minimum term of 3 months. After the minimum term, you may
            cancel your subscription at any time by emailing <a href="mailto:info@pfandco.co.uk">info@pfandco.co.uk</a> at
            least 7 days before your next billing date. Cancellation takes effect at the end of the current
            billing period. Unused credits do not carry over beyond cancellation and are not refundable.
            No partial-month refunds are provided.
          </p>

          <h2>10. Client Warranty</h2>
          <p>
            By ordering a report, you warrant that you will not use any report for any unlawful purpose.
            You shall indemnify us against any regulatory fines, penalties, claims, losses, damages, or
            expenses arising from or in connection with your use of reports in a manner that is unlawful,
            misleading, or in breach of these Terms.
          </p>

          <h2>11. Website Use</h2>
          <ul>
            <li>You must not use our website for unlawful purposes or in a way that could damage or impair its availability.</li>
            <li>We reserve the right to modify or discontinue any part of the website without notice.</li>
            <li>We are not responsible for the content of external websites linked from our site.</li>
          </ul>

          <h2>12. Governing Law</h2>
          <p>
            These Terms are governed by the laws of England and Wales. Any disputes shall be subject to
            the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2>13. Changes to These Terms</h2>
          <p>
            We may update these Terms from time to time. Continued use of our website after changes
            constitutes acceptance of the updated Terms.
          </p>

          <h2>14. Contact</h2>
          <p>
            For questions about these Terms, please contact us
            at <a href="mailto:info@pfandco.co.uk">info@pfandco.co.uk</a> or
            call 01483 363210.
          </p>
          <p>
            PF & Co Holdings Ltd, 2 Queens Drive, Guildford, England, GU2 9PP. Company number 16649319.
          </p>
        </div>
      </section>
    </>
  );
}
