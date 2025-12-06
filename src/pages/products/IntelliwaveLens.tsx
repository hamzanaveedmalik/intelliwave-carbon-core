import React from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  ArrowRight,
  Eye,
  Zap,
  Shield,
  TrendingUp,
} from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { WaitlistForm } from '@/components/WaitlistForm';
import { SEO } from '@/components/SEO';
import { CalFloatingButton } from '@/components/CalFloatingButton';

export default function IntelliwaveLens() {
  const features = [
    {
      icon: Eye,
      title: 'Visual Intelligence',
      description:
        'AI-powered visual analysis and insights for your business data.',
    },
    {
      icon: Zap,
      title: 'Real-Time Processing',
      description:
        'Instant analysis and recommendations powered by edge computing.',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description:
        'Your data stays secure with enterprise-grade encryption.',
    },
    {
      icon: TrendingUp,
      title: 'Actionable Insights',
      description:
        'Turn visual data into actionable business intelligence.',
    },
  ];

  return (
    <>
      <SEO
        title="Intelliwave Lens - Coming Soon"
        description="Intelliwave Lens - Visual intelligence and AI-powered insights. Coming soon. Join the waitlist to be notified when we launch."
        keywords="visual intelligence, AI insights, business intelligence, data analysis"
        url="/products/intelliwave-lens"
      />
      <PageLayout>
        <CalFloatingButton />

        {/* Hero Section */}
        <section className="py-24 lg:py-32 bg-gradient-to-br from-blue-500/10 to-primary/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-blue-500 text-white border-blue-600">
                <Sparkles className="h-3 w-3 mr-2" />
                Coming Soon
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                Intelliwave Lens
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                Visual Intelligence and AI-Powered Insights
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Transform your visual data into actionable business intelligence
                with AI-powered analysis and real-time insights.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <WaitlistForm
                  formspreeId="mjkazjpv"
                  trigger={
                    <Button
                      size="lg"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Join Waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    document
                      .getElementById('features')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Preview Section */}
        <section id="features" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                What to Expect
              </h2>
              <p className="text-lg text-muted-foreground">
                Powerful features coming soon
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border-border bg-card hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-blue-600" />
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
          </div>
        </section>

        {/* Coming Soon Message */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <Card className="p-8 border-border bg-card">
                <h2 className="text-2xl font-bold mb-4">
                  We're Building Something Amazing
                </h2>
                <p className="text-muted-foreground mb-6">
                  Intelliwave Lens is currently in development. Join our waitlist
                  to be the first to know when we launch and get exclusive early
                  access.
                </p>
                <WaitlistForm
                  formspreeId="mjkazjpv"
                  trigger={
                    <Button
                      size="lg"
                      className="bg-blue-600 text-white hover:bg-blue-700"
                    >
                      Join Waitlist
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  }
                />
              </Card>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}




