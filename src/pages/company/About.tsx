import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Users, Target, Award, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Client Success',
      description:
        'Your success is our success. We partner with you for the long term.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We deliver world-class solutions that exceed expectations.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description:
        'We stay ahead of technology trends to keep you competitive.',
    },
    {
      icon: Heart,
      title: 'Integrity',
      description:
        'We operate with transparency, honesty, and ethical practices.',
    },
  ];

  return (
    <PageLayout title="About Intelliwave">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">
              From Building Solutions to Building Intelligence
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Founded in 2023, Intelliwave started by delivering custom web
              applications for UK businesses. After building 50+ projects, we
              noticed a pattern:
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Every business was asking for the same intelligence layer—AI chat
              support, cross-platform analytics, lightweight CRM. So we built
              it.
            </p>
            <div className="bg-accent/50 rounded-lg p-6 border-l-4 border-primary">
              <h3 className="font-semibold text-lg mb-3">
                Today, we offer both:
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Custom Solutions</strong> (for unique needs)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span>
                    <strong>Intelligence Products</strong> (for common needs)
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="p-6 text-center">
                  <div className="mx-auto mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-accent">
                    <Icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </Card>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">2023</div>
              <div className="text-muted-foreground">Founded</div>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </Card>
            <Card className="p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </Card>
          </div>

          <div className="bg-accent rounded-sm p-8 lg:p-12">
            <h2 className="text-2xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our team consists of experienced web developers, UI/UX designers,
              and digital marketing specialists. We combine technical expertise
              with business acumen to create websites that not only look great
              but drive real results for your business.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Based in London, UK, we understand the unique needs of British
              businesses and work within GMT timezone to ensure seamless
              communication. We're committed to continuous learning and staying
              current with the latest web technologies and best practices.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
