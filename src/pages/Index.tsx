import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Cpu, Network, Shield, Zap } from 'lucide-react';
import logo from '@/assets/intelliwave-logo.svg';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Cpu,
      title: 'Cloud Infrastructure',
      description:
        'Scalable, secure cloud solutions built for enterprise performance and reliability.',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description:
        'Advanced security frameworks protecting your digital assets and infrastructure.',
    },
    {
      icon: Network,
      title: 'Digital Transformation',
      description:
        'Strategic technology integration to modernize operations and drive innovation.',
    },
    {
      icon: Zap,
      title: 'AI & Automation',
      description:
        'Intelligent systems that optimize processes and unlock new business capabilities.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img
                src={logo}
                alt="Intelliwave"
                className="h-8 w-auto group-hover:opacity-80 transition-opacity"
              />
              <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Intelliwave
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="/company/about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
            <ContactForm
              formspreeId="mjkazjpv"
              trigger={
                <Button className="bg-primary text-primary-foreground hover:bg-primary-hover">
                  Get Started
                </Button>
              }
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24 lg:py-32">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/HeroVid.mov" type="video/mp4" />
        </video>

        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="container relative mx-auto px-6 lg:px-8 z-10">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
              Intelligence that flows through your business
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
              Empowering organizations with cutting-edge technology
              infrastructure, intelligent automation, and strategic digital
              transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate('/solutions')}
                className="bg-white text-primary hover:bg-white/90 shadow-lg"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <ContactForm
                formspreeId="mjkazjpv"
                trigger={
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors"
                  >
                    Get in Touch
                  </Button>
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Comprehensive Technology Services
            </h2>
            <p className="text-lg text-muted-foreground">
              Industry-leading expertise across the technology spectrum
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-accent">
                  <service.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gradient-subtle">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Driving Innovation Through Technology
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Intelliwave delivers enterprise-grade technology solutions that
                transform how organizations operate, compete, and grow in the
                digital age.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Our team of experts combines deep technical knowledge with
                strategic insight to architect solutions that scale with your
                ambitions.
              </p>
              <div className="grid grid-cols-3 gap-8 pt-6 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    2023
                  </div>
                  <div className="text-sm text-muted-foreground">Founded</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    100%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Client Satisfaction
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Support Available
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-sm overflow-hidden">
                <img
                  src="/holographic.png"
                  alt="Intelliwave Digital Transformation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl mb-6">
              Ready to Transform Your Enterprise?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-10">
              Let's discuss how Intelliwave can accelerate your digital
              transformation journey.
            </p>
            <ContactForm
              formspreeId="mjkazjpv"
              trigger={
                <Button
                  size="lg"
                  className="bg-background text-primary hover:bg-background/90 shadow-lg"
                >
                  Contact Our Team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              }
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
