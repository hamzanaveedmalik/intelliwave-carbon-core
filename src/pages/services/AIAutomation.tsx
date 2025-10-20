import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Brain, Cpu, Zap, Bot, LineChart, Sparkles } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { Button } from '@/components/ui/button';

export default function AIAutomation() {
  const features = [
    {
      icon: Brain,
      title: 'Machine Learning',
      description: 'Build intelligent models that learn and improve over time.',
    },
    {
      icon: Cpu,
      title: 'AI Integration',
      description: 'Embed AI capabilities into your existing applications.',
    },
    {
      icon: Zap,
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with RPA.',
    },
    {
      icon: Bot,
      title: 'Intelligent Chatbots',
      description: 'Deploy AI-powered conversational interfaces.',
    },
    {
      icon: LineChart,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions.',
    },
    {
      icon: Sparkles,
      title: 'Natural Language Processing',
      description: 'Extract insights from unstructured text data.',
    },
  ];

  return (
    <PageLayout title="AI & Automation">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Harness the power of artificial intelligence and automation to
              optimize processes, reduce costs, and unlock new business
              capabilities. Our AI solutions drive efficiency and innovation
              across your organization.
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
            <h2 className="text-2xl font-bold mb-4">Automate Your Future</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Discover how AI and automation can transform your business
              operations and create competitive advantages.
            </p>
            <ContactForm
              formspreeId="mjkazjpv"
              trigger={
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground"
                >
                  Explore AI Solutions
                </Button>
              }
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
