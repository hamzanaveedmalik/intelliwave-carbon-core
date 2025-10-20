import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import {
  Lightbulb,
  TrendingUp,
  Workflow,
  BarChart,
  Rocket,
  Target,
} from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

export default function DigitalTransformation() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Strategy & Planning',
      description:
        'Develop comprehensive digital roadmaps aligned with business goals.',
    },
    {
      icon: TrendingUp,
      title: 'Process Optimization',
      description: 'Streamline operations with modern digital workflows.',
    },
    {
      icon: Workflow,
      title: 'Technology Integration',
      description:
        'Seamlessly integrate new technologies with existing systems.',
    },
    {
      icon: BarChart,
      title: 'Data Analytics',
      description: 'Transform data into actionable business insights.',
    },
    {
      icon: Rocket,
      title: 'Innovation Labs',
      description: 'Experiment with emerging technologies and methodologies.',
    },
    {
      icon: Target,
      title: 'Change Management',
      description:
        'Guide organizations through digital transformation journeys.',
    },
  ];

  return (
    <PageLayout title="Digital Transformation">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transform your business for the digital age. We help organizations
              modernize operations, embrace innovation, and create competitive
              advantages through strategic technology adoption.
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
              Start Your Digital Journey
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's map out your digital transformation strategy and unlock new
              opportunities for growth and innovation.
            </p>
            <ContactForm
              formspreeId="mjkazjpv"
              trigger={
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground"
                >
                  Book Strategy Session
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
