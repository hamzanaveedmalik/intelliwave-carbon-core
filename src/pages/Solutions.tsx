import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Cpu, Shield, Network, Zap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Solutions() {
  const navigate = useNavigate();

  const solutions = [
    {
      icon: Cpu,
      title: 'Cloud Infrastructure',
      description:
        'Scalable, secure cloud solutions built for enterprise performance and reliability. Migrate, deploy, and optimize your infrastructure with confidence.',
      features: [
        'Cloud Migration & Strategy',
        'Multi-Cloud Architecture',
        'Kubernetes & Containers',
        'Serverless Solutions',
        'Infrastructure as Code',
      ],
      link: '/services/cloud-infrastructure',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description:
        'Advanced security frameworks protecting your digital assets and infrastructure. Comprehensive threat detection, prevention, and compliance management.',
      features: [
        'Threat Detection & Prevention',
        'Security Monitoring 24/7',
        'Compliance Management',
        'Penetration Testing',
        'Security Training',
      ],
      link: '/services/cybersecurity',
    },
    {
      icon: Network,
      title: 'Digital Transformation',
      description:
        'Strategic technology integration to modernize operations and drive innovation. Transform your business for the digital age with proven methodologies.',
      features: [
        'Digital Strategy & Roadmap',
        'Process Optimization',
        'Technology Integration',
        'Change Management',
        'Innovation Labs',
      ],
      link: '/services/digital-transformation',
    },
    {
      icon: Zap,
      title: 'AI & Automation',
      description:
        'Intelligent systems that optimize processes and unlock new business capabilities. Harness the power of AI to drive efficiency and innovation.',
      features: [
        'Machine Learning Models',
        'Process Automation (RPA)',
        'Intelligent Chatbots',
        'Predictive Analytics',
        'Natural Language Processing',
      ],
      link: '/services/ai-automation',
    },
  ];

  return (
    <PageLayout title="Our Solutions">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed">
              Comprehensive technology solutions designed to transform your
              business. From cloud infrastructure to AI-powered automation, we
              provide the expertise and tools you need to succeed in the digital
              age.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="space-y-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              const isEven = index % 2 === 0;

              return (
                <Card
                  key={index}
                  className="overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div
                    className={`grid lg:grid-cols-2 gap-8 p-8 lg:p-12 ${
                      isEven ? '' : 'lg:grid-flow-dense'
                    }`}
                  >
                    {/* Content */}
                    <div className={isEven ? '' : 'lg:col-start-2'}>
                      <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-sm bg-accent">
                        <Icon className="h-8 w-8 text-accent-foreground" />
                      </div>
                      <h2 className="text-3xl font-bold mb-4">
                        {solution.title}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {solution.description}
                      </p>

                      <h3 className="font-semibold mb-3">Key Features:</h3>
                      <ul className="space-y-2 mb-8">
                        {solution.features.map((feature, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-muted-foreground"
                          >
                            <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        size="lg"
                        onClick={() => navigate(solution.link)}
                        className="bg-primary text-primary-foreground hover:bg-primary-hover"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>

                    {/* Visual/Stats */}
                    <div
                      className={`flex items-center justify-center bg-accent rounded-sm p-8 ${
                        isEven ? '' : 'lg:col-start-1 lg:row-start-1'
                      }`}
                    >
                      <div className="text-center">
                        <Icon className="h-32 w-32 text-primary/20 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold text-primary mb-2">
                          Enterprise-Grade
                        </h3>
                        <p className="text-muted-foreground">
                          Trusted by organizations worldwide
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 bg-gradient-hero rounded-sm p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can help you achieve your
              technology goals and drive business growth.
            </p>
            <Button
              size="lg"
              onClick={() => navigate('/#contact')}
              className="bg-background text-primary hover:bg-background/90 shadow-lg"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
