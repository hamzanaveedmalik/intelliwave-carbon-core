import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  FileCheck,
  Users,
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

export default function Cybersecurity() {
  const features = [
    {
      icon: Shield,
      title: 'Threat Protection',
      description: 'Advanced threat detection and prevention systems.',
    },
    {
      icon: Lock,
      title: 'Data Encryption',
      description: 'End-to-end encryption for data at rest and in transit.',
    },
    {
      icon: Eye,
      title: 'Security Monitoring',
      description: '24/7 monitoring and incident response services.',
    },
    {
      icon: AlertTriangle,
      title: 'Vulnerability Assessment',
      description: 'Regular security audits and penetration testing.',
    },
    {
      icon: FileCheck,
      title: 'Compliance Management',
      description: 'GDPR, HIPAA, SOC 2, and ISO 27001 compliance.',
    },
    {
      icon: Users,
      title: 'Security Training',
      description: 'Employee awareness and security best practices.',
    },
  ];

  return (
    <PageLayout title="Cybersecurity">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Protect your digital assets with comprehensive cybersecurity
              solutions. Our expert team helps organizations defend against
              evolving threats while maintaining compliance and business
              continuity.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-accent">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="bg-accent rounded-sm p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Secure Your Business Today
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Don't wait for a security breach. Get a free security assessment
              and learn how we can protect your organization.
            </p>
            <ContactForm
              formspreeId="mjkazjpv"
              trigger={
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground"
                >
                  Request Security Assessment
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
