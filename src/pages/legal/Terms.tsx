import { PageLayout } from '@/components/PageLayout';

export default function Terms() {
  return (
    <PageLayout title="Terms of Service">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-6">
              Last Updated: October 20, 2025
            </p>

            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              By accessing and using Intelliwave's services, you accept and
              agree to be bound by these Terms of Service. If you do not agree
              to these terms, please do not use our services.
            </p>

            <h2 className="text-2xl font-bold mb-4">2. Services</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Intelliwave provides enterprise technology solutions including
              cloud infrastructure, cybersecurity, digital transformation, and
              AI automation services. The specific terms of service delivery
              will be outlined in individual service agreements.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You agree to use our services only for lawful purposes and in
              accordance with these Terms. You are responsible for maintaining
              the confidentiality of your account credentials and for all
              activities that occur under your account.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              4. Intellectual Property
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              All content, features, and functionality of our services are owned
              by Intelliwave and are protected by intellectual property laws.
              You may not reproduce, distribute, or create derivative works
              without our express written permission.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              5. Limitation of Liability
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Intelliwave shall not be liable for any indirect, incidental,
              special, consequential, or punitive damages resulting from your
              use of our services.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Termination</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We reserve the right to terminate or suspend access to our
              services immediately, without prior notice, for any reason
              including breach of these Terms.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We reserve the right to modify these Terms at any time. We will
              notify users of any material changes via email or through our
              website.
            </p>

            <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              For questions about these Terms, contact us at
              legal@intelliwave.com or +1 (555) 123-4567.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
