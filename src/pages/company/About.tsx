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
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Founded in 2023, Intelliwave emerged from a vision to help UK
              businesses establish a strong online presence through custom web
              development. We specialize in creating fast, affordable websites
              and web applications that help small and medium businesses compete
              in the digital marketplace.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Our mission is to make professional web development accessible to
              UK businesses with transparent pricing, fixed timelines, and
              ongoing support that ensures your success.
            </p>
            <div className="bg-accent/50 rounded-lg p-6 border-l-4 border-primary">
              <h3 className="font-semibold text-lg mb-2">
                Founded by Experienced Developers
              </h3>
              <p className="text-muted-foreground">
                Our team brings years of experience from leading technology
                companies, with expertise in modern web technologies, user
                experience design, and business growth strategies. We understand
                both the technical and business sides of web development.
              </p>
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
