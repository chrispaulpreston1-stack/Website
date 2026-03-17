import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';

export default function PrivacyPolicy() {
  return (
    <>
      <PageSEO
        title="Privacy Policy | PF & Co Construction"
        description="How PF & Co Construction collects, uses, and protects your personal data. Covers contact forms, cookies, and third-party services."
        path="/privacy-policy"
      />

      <section className="pt-32 pb-24 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4">Privacy Policy</h1>
          <p className="text-brand-primary/60 font-mono text-sm">Last updated: 13 March 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-brand-primary">
          <h2>1. Who We Are</h2>
          <p>
            PF & Co Construction Ltd ("we", "us", "our") is a structural engineering and construction company
            registered in England. Our registered office is in Surrey. We are the data controller for the
            personal data described in this policy.
          </p>
          <p>Email: <a href="mailto:info@pfandco.co.uk">info@pfandco.co.uk</a></p>
          <p>Phone: <a href="tel:01483363210" className="text-brand-accent hover:underline">01483 363210</a></p>

          <h2>2. Information We Collect</h2>
          <p>We may collect the following personal data:</p>
          <ul>
            <li><strong>Contact form submissions:</strong> name, email address, project type, and message content when you use our website contact form.</li>
            <li><strong>Order information:</strong> name, email, phone number, company name, site address, and project details when you order a report through our platform.</li>
            <li><strong>Payment data:</strong> payment information is processed securely by Stripe. We do not store your card details on our servers.</li>
            <li><strong>Usage data:</strong> anonymous analytics data including pages visited, time on site, and browser type, collected via Vercel Analytics.</li>
          </ul>

          <h2>3. How We Use Your Information</h2>
          <p>We use your personal data to:</p>
          <ul>
            <li>Respond to your enquiries and provide quotes.</li>
            <li>Process and deliver report orders.</li>
            <li>Improve our website and services.</li>
            <li>Comply with legal obligations.</li>
          </ul>

          <h3>3A. AI Data Processing</h3>
          <p>
            When you order a report, the site address and project information you provide are processed by
            our AI systems to generate your report. Specifically:
          </p>
          <ul>
            <li>Site addresses are used to query authoritative public data sources (e.g. Environment Agency, British Geological Survey, Historic England) relevant to your report type.</li>
            <li>Project details (type, description) are used to tailor the analysis and ensure regulatory relevance.</li>
            <li>Your data is <strong>not</strong> used to train or fine-tune any AI models.</li>
            <li>All AI-generated outputs are reviewed by our engineering team before delivery.</li>
          </ul>
          <p>
            The legal basis for this processing is contractual necessity — we process this data to fulfil the report
            order you have placed. For more information about our AI methodology, see our{' '}
            <Link to="/ai-compliance" className="text-brand-accent hover:underline">AI Standards & Compliance</Link> page.
          </p>

          <h2>4. Legal Basis for Processing</h2>
          <p>We process your data on the following legal bases under UK GDPR:</p>
          <ul>
            <li><strong>Contractual necessity:</strong> to fulfil orders and deliver services you have requested.</li>
            <li><strong>Legitimate interests:</strong> to respond to enquiries and improve our services.</li>
            <li><strong>Consent:</strong> where you have opted in to receive communications from us.</li>
          </ul>

          <h2>5. Cookies</h2>
          <p>
            Our website uses essential cookies required for the site to function. We also use Vercel Analytics
            for anonymous performance monitoring. We do not use advertising or tracking cookies.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>We use the following third-party services that may process your data:</p>
          <ul>
            <li><strong>Formspree:</strong> processes contact form submissions.</li>
            <li><strong>Stripe:</strong> processes payments securely.</li>
            <li><strong>Vercel:</strong> hosts our website and provides analytics.</li>
            <li><strong>ElevenLabs:</strong> powers our AI chat assistant.</li>
            <li><strong>AI Processing Systems:</strong> our multi-agent AI system processes site addresses and project details to generate reports. Data is processed on secure infrastructure and is not used for model training. All AI outputs are reviewed by our engineering team before delivery.</li>
          </ul>
          <p>Each service has its own privacy policy and processes data in accordance with applicable data protection laws.</p>

          <h2>7. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfil the purposes for which it
            was collected. Contact form data is retained for up to 12 months. Order data is retained for
            6 years to comply with UK tax and accounting requirements.
          </p>

          <h2>8. Your Rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data.</li>
            <li>Object to processing of your data.</li>
            <li>Request restriction of processing.</li>
            <li>Data portability.</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at{' '}
            <a href="mailto:info@pfandco.co.uk">info@pfandco.co.uk</a>.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. Any changes will be posted on this page
            with an updated revision date.
          </p>

          <h2>10. Contact</h2>
          <p>
            If you have questions about this privacy policy or our data practices, please contact us
            at <a href="mailto:info@pfandco.co.uk">info@pfandco.co.uk</a> or
            call 01483 363210.
          </p>
        </div>
      </section>
    </>
  );
}
