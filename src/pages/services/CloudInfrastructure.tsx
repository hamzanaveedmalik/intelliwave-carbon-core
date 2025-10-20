import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Server, Shield, Zap, Globe, Database, Settings } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

export default function CloudInfrastructure() {
  const features = [
    {
      icon: Server,
      title: 'Scalable Architecture',
      description: 'Build infrastructure that grows with your business needs.',
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Multi-layered security with compliance built-in.',
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Optimized for speed and reliability at scale.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Deploy across multiple regions for low latency.',
    },
    {
      icon: Database,
      title: 'Data Management',
      description: 'Robust storage and backup solutions.',
    },
    {
      icon: Settings,
      title: 'Automation',
      description: 'Infrastructure as code and automated deployments.',
    },
  ];

  return (
    <PageLayout title="Cloud Infrastructure">
      {/* Overview Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Build, deploy, and scale your applications with confidence using
              our enterprise-grade cloud infrastructure solutions. We help
              organizations leverage the power of cloud computing while
              maintaining security, compliance, and cost efficiency.
            </p>
          </div>

          {/* Features Grid */}
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

          {/* Services Details */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold mb-6">Our Cloud Services</h2>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-1">Cloud Migration</h3>
                  <p className="text-sm text-muted-foreground">
                    Seamlessly migrate your existing infrastructure to the cloud
                    with minimal downtime and maximum efficiency.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-1">Multi-Cloud Strategy</h3>
                  <p className="text-sm text-muted-foreground">
                    Leverage multiple cloud providers (AWS, Azure, GCP) for
                    optimal performance and cost savings.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-1">
                    Kubernetes & Containers
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Deploy containerized applications with orchestration,
                    scaling, and management.
                  </p>
                </div>
                <div className="border-l-4 border-primary pl-4">
                  <h3 className="font-semibold mb-1">Serverless Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Build and deploy applications without managing
                    infrastructure, reducing operational overhead.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Why Choose Us</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">🎯 Expertise</h3>
                  <p className="text-sm text-muted-foreground">
                    Our certified cloud architects have deployed solutions for
                    Fortune 500 companies.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">💰 Cost Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    We help you reduce cloud costs by up to 40% through
                    optimization and right-sizing.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">🔒 Security First</h3>
                  <p className="text-sm text-muted-foreground">
                    Enterprise-grade security with SOC 2, ISO 27001, and HIPAA
                    compliance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">⚡ 24/7 Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Round-the-clock monitoring and support to ensure maximum
                    uptime.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-accent rounded-sm p-8 lg:p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Ready to Move to the Cloud?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss how our cloud infrastructure solutions can transform
              your business operations and reduce costs.
            </p>
            <ContactForm
              formspreeId="mjkazjpv"
              trigger={
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground"
                >
                  Schedule a Consultation
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
