import PageSEO from '../components/PageSEO';

export default function AIGovernancePolicy() {
  return (
    <>
      <PageSEO
        title="AI Governance Policy | PF & Co Site Intelligence"
        description="Our policy for the responsible use of artificial intelligence in site intelligence and engineering services."
        path="/ai-governance-policy"
      />

      <section className="pt-32 pb-24 bg-brand-surface">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-brand-primary mb-4">AI Governance Policy</h1>
          <p className="text-brand-primary/60 font-mono text-sm">Last updated: 13 March 2026</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-lg prose-brand-primary">
          <h2>1. Purpose & Scope</h2>
          <p>
            This policy sets out how PF & Co Site Intelligence Ltd governs the use of artificial intelligence
            in the production of site intelligence reports, structural engineering analysis, and related
            professional services. It applies to all AI systems used in our report production pipeline,
            quality assurance processes, and client-facing outputs.
          </p>

          <h2>2. Governance Structure</h2>
          <p>Our AI governance is managed through three tiers of oversight:</p>
          <ul>
            <li><strong>Strategic Oversight:</strong> Senior leadership reviews AI strategy, risk appetite, and compliance on a quarterly basis.</li>
            <li><strong>Operational Management:</strong> The engineering team is responsible for AI system configuration, data source management, and quality assurance pipeline maintenance.</li>
            <li><strong>Quality Assurance:</strong> Every AI-generated output is subject to our multi-stage QA pipeline before delivery, with named human accountability for each report.</li>
          </ul>

          <h2>3. AI Systems Register</h2>
          <p>
            We maintain an internal register of all AI systems used in our operations, including their
            purpose, data inputs, risk classification, and oversight requirements. This register is
            reviewed quarterly and is not published externally. Summary information about our AI systems
            is available on our AI Standards & Compliance page.
          </p>

          <h2>4. Risk Management</h2>
          <p>AI-related risks are assessed and managed through:</p>
          <ul>
            <li>Pre-deployment testing of all AI agents against reference datasets</li>
            <li>Continuous monitoring of output quality through our 24-category QA pipeline</li>
            <li>Incident recording and root-cause analysis for any quality failures</li>
            <li>Regular backtesting against real-world planning decisions and appeal outcomes</li>
          </ul>
          <p>
            Risk assessments are reviewed quarterly, or immediately following any significant quality incident.
          </p>

          <h2>5. Data Governance</h2>
          <ul>
            <li>Client data (site addresses, project details) is processed solely for the purpose of producing the ordered report.</li>
            <li>Client data is not used to train, fine-tune, or improve any AI models.</li>
            <li>Data sources used by our AI system are authoritative public datasets (e.g. Environment Agency, British Geological Survey, Historic England, Natural England).</li>
            <li>All data processing complies with UK GDPR and the Data Protection Act 2018.</li>
            <li>See our Privacy Policy for full details on data handling.</li>
          </ul>

          <h2>6. Professional Oversight</h2>
          <ul>
            <li>No AI-generated report is delivered without human review.</li>
            <li>Our engineering team reviews all outputs for accuracy, regulatory compliance, and professional appropriateness.</li>
            <li>The named reviewer is accountable for the final report content.</li>
            <li>AI systems do not make autonomous decisions about report conclusions or recommendations.</li>
          </ul>

          <h2>7. Quality Assurance</h2>
          <p>
            Our QA pipeline covers 24 quality categories across five domains: accuracy, regulatory
            compliance, consistency, formatting, and citation integrity. This includes:
          </p>
          <ul>
            <li>Factual accuracy verification against source data</li>
            <li>Regulatory cross-referencing against current planning policy and building regulations</li>
            <li>Cross-report consistency checking</li>
            <li>Document formatting and visual asset validation</li>
            <li>Source attribution and data freshness verification</li>
          </ul>

          <h2>8. Client Communication</h2>
          <ul>
            <li>All reports include a statement that they are AI-assisted desk studies.</li>
            <li>Clients may request additional information about our AI methodology in writing.</li>
            <li>Information is provided at a categorical level and does not include proprietary algorithms, agent configurations, or data source wiring.</li>
            <li>For RICS-regulated professionals, a supplier due diligence pack is available on request.</li>
          </ul>

          <h2>9. Third-Party AI Procurement</h2>
          <p>Where we use third-party AI services or models, we assess them against:</p>
          <ul>
            <li>Data processing and retention policies</li>
            <li>Security certifications and compliance</li>
            <li>Model transparency and documentation</li>
            <li>Alignment with our own governance standards</li>
          </ul>

          <h2>10. Review & Updates</h2>
          <p>
            This policy is reviewed annually, or more frequently if required by regulatory changes,
            significant incidents, or material changes to our AI systems. The last review date is shown
            at the top of this document.
          </p>

          <p>
            For questions about this policy, contact us
            at <a href="mailto:info@pfandco.co.uk">info@pfandco.co.uk</a> or
            call 01483 363210.
          </p>
        </div>
      </section>
    </>
  );
}
