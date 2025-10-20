import { PageLayout } from '@/components/PageLayout';

export default function Privacy() {
  return (
    <PageLayout title="Privacy Policy">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <p className="text-muted-foreground mb-6">
              Last Updated: October 20, 2025
            </p>

            <h2 className="text-2xl font-bold mb-4">
              1. Information We Collect
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We collect information that you provide directly to us, including
              name, email address, phone number, company information, and any
              other information you choose to provide through our contact forms
              or when using our services.
            </p>

            <h2 className="text-2xl font-bold mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We use the information we collect to provide, maintain, and
              improve our services, to communicate with you, to respond to your
              inquiries, and to send you technical notices and support messages.
            </p>

            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information with service providers who
              assist us in operating our website and conducting our business,
              subject to confidentiality agreements.
            </p>

            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              You have the right to access, update, or delete your personal
              information at any time. You may also opt-out of receiving
              promotional communications from us by following the unsubscribe
              instructions in those communications.
            </p>

            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to track activity
              on our website and hold certain information. You can instruct your
              browser to refuse all cookies or to indicate when a cookie is
              being sent.
            </p>

            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please
              contact us at privacy@intelliwave.com or +1 (555) 123-4567.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
