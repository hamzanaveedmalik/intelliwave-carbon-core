import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Cpu,
  Network,
  Shield,
  Zap,
  CheckCircle,
  Clock,
  MapPin,
  Users,
  Star,
} from 'lucide-react';
import logo from '@/assets/intelliwave-logo.svg';
import { ContactForm } from '@/components/ContactForm';
import { Footer } from '@/components/Footer';
import { PortfolioCard } from '@/components/PortfolioCard';
import { TrustBadges } from '@/components/TrustBadges';
import { BookingButton } from '@/components/BookingButton';
import { ChatWidget } from '@/components/ChatWidget';
import { CalFloatingButton } from '@/components/CalFloatingButton';
import { SEO, seoConfigs } from '@/components/SEO';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  const primaryServices = [
    {
      icon: Cpu,
      title: 'Website Development',
      price: 'From £1,799',
      originalPrice: '£2,999',
      description:
        'Mobile-responsive websites with SEO optimization, CMS integration, and 5-10 pages.',
      features: [
        'Mobile-responsive design',
        'SEO optimized',
        'CMS integration',
        '5-10 pages',
      ],
      perfectFor: 'Startups, small businesses, consultants',
    },
    {
      icon: Network,
      title: 'Custom Web Applications',
      price: 'From £4,799',
      originalPrice: '£7,999',
      description:
        'Customer portals, booking systems, and internal tools tailored to your business needs.',
      features: [
        'Customer portals',
        'Booking systems',
        'Internal tools',
        'Database-driven apps',
      ],
      perfectFor: 'Service businesses, B2B companies',
    },
    {
      icon: Zap,
      title: 'E-commerce Solutions',
      price: 'From £3,599',
      originalPrice: '£5,999',
      description:
        'Online stores with payment integration and inventory management systems.',
      features: [
        'Online stores',
        'Payment integration',
        'Inventory management',
        'Order tracking',
      ],
      perfectFor: 'Retail, wholesale businesses',
    },
  ];

  const enterpriseServices = [
    {
      icon: Shield,
      title: 'Cloud Infrastructure',
      description:
        'Scalable, secure cloud solutions built for enterprise performance and reliability.',
    },
    {
      icon: Cpu,
      title: 'Cybersecurity',
      description:
        'Advanced security frameworks protecting your digital assets and infrastructure.',
    },
  ];

  const portfolioProjects = [
    {
      title: 'Property Inspection Service',
      description:
        'AI-powered property inspection platform with qualified surveyors, comprehensive reporting, and instant customer support.',
      techStack: ['React', 'TypeScript', 'Tailwind CSS', 'AI Integration'],
      imageUrl: '/snag-demo.png',
      status: 'demo' as const,
      demoUrl: '/demo/snagwise',
    },
    {
      title: 'TenantOS',
      description:
        'AI-powered property management platform with intelligent tenant portal, automated maintenance tracking, and real-time financial analytics.',
      techStack: ['TypeScript', 'Node.js', 'PostgreSQL', 'AI/ML'],
      imageUrl: '/tenantos.png',
      status: 'demo' as const,
      demoUrl: '/portfolio/tenantos',
    },
    {
      title: 'E-commerce Storefront',
      description:
        'Comprehensive online retail platform with advanced inventory management, secure multi-payment processing, and real-time analytics dashboard.',
      techStack: ['Next.js', 'Shopify', 'Tailwind CSS', 'Stripe'],
      imageUrl: '/placeholder.svg',
      status: 'sample' as const,
      demoUrl: '#',
    },
  ];

  // Structured data for SEO
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Intelliwave',
    url: 'https://intelliwave.co.uk',
    logo: 'https://intelliwave.co.uk/intelliwave-logo.svg',
    description:
      'Professional web development services for UK businesses. Custom websites, web applications, e-commerce solutions.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB',
      addressRegion: 'United Kingdom',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      availableLanguage: 'English',
    },
    sameAs: ['https://twitter.com/intelliwave'],
    offers: [
      {
        '@type': 'Offer',
        name: 'Website Development',
        description:
          'Mobile-responsive websites with SEO optimization, CMS integration, and 5-10 pages.',
        price: '1799',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        name: 'Custom Web Applications',
        description:
          'Customer portals, booking systems, and internal tools tailored to your business needs.',
        price: '4799',
        priceCurrency: 'GBP',
      },
      {
        '@type': 'Offer',
        name: 'E-commerce Solutions',
        description:
          'Online stores with payment integration and inventory management systems.',
        price: '3599',
        priceCurrency: 'GBP',
      },
    ],
  };

  return (
    <>
      <SEO {...seoConfigs.home} structuredData={structuredData} />
      <div className="min-h-screen bg-background">
        <ChatWidget />
        <CalFloatingButton />
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
                  alt="Intelliwave - Professional Web Development Services That Drive Results"
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
                  href="#portfolio"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="/pricing"
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing
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
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                Professional Web Development Services That Drive Results
              </h1>
              <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
                Custom websites and applications for businesses worldwide
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={() =>
                    document
                      .getElementById('portfolio')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="bg-white text-primary hover:bg-white/90 shadow-lg"
                >
                  See Our Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <BookingButton
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-primary transition-colors"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Intelliwave Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">Why Intelliwave?</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">UK-based team</div>
                    <div className="text-sm text-muted-foreground">
                      GMT timezone
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                  <CheckCircle className="h-6 w-6 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">Fixed-price projects</div>
                    <div className="text-sm text-muted-foreground">
                      From £2,999
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                  <Clock className="h-6 w-6 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">6-week delivery</div>
                    <div className="text-sm text-muted-foreground">
                      Guarantee
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-background rounded-lg border">
                  <Users className="h-6 w-6 text-primary" />
                  <div className="text-left">
                    <div className="font-semibold">Free 2-month</div>
                    <div className="text-sm text-muted-foreground">
                      Support included
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Professional Web Development Services That Drive Results
              </h2>
              <p className="text-lg text-muted-foreground">
                Custom websites and applications for businesses worldwide
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {primaryServices.map((service, index) => (
                <Card
                  key={index}
                  className="p-8 border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50 relative"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-accent">
                    <service.icon className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                    {service.title}
                  </h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    {service.originalPrice && (
                      <span className="text-lg text-muted-foreground line-through">
                        {service.originalPrice}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-primary">
                      {service.price}
                    </span>
                  </div>
                  {service.originalPrice && (
                    <div className="mb-4">
                      <Badge variant="destructive" className="text-sm">
                        40% OFF - Limited Time
                      </Badge>
                    </div>
                  )}
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="text-sm text-muted-foreground italic">
                    Perfect for: {service.perfectFor}
                  </div>
                </Card>
              ))}
            </div>

            {/* Enterprise Services */}
            <div className="border-t border-border pt-16">
              <h3 className="text-2xl font-bold text-center mb-8">
                Enterprise Solutions
              </h3>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {enterpriseServices.map((service, index) => (
                  <Card
                    key={index}
                    className="p-6 border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50"
                  >
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-sm bg-accent">
                      <service.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2 text-card-foreground">
                      {service.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Web Development Portfolio & Case Studies
              </h2>
              <p className="text-lg text-muted-foreground">
                See examples of websites and web applications we've built for UK
                businesses
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioProjects.map((project, index) => (
                <PortfolioCard
                  key={index}
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  imageUrl={project.imageUrl}
                  status={project.status}
                  demoUrl={project.demoUrl}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Trusted by UK Businesses
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-primary-foreground/10 rounded-lg p-6">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">
                    Currently accepting founding clients at 40% discount
                  </div>
                  <div className="text-primary-foreground/80">
                    Limited to 15 spots available
                  </div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-6">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">
                    Founded by experienced developers
                  </div>
                  <div className="text-primary-foreground/80">
                    With backgrounds in leading technology companies
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <Star className="h-5 w-5" />
                <span>100% money-back guarantee if not satisfied</span>
              </div>
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
                  Intelliwave delivers enterprise-grade technology solutions
                  that transform how organizations operate, compete, and grow in
                  the digital age.
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
                    alt="Intelliwave Digital Transformation Services - Professional Web Development That Drives Results"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          id="contact"
          className="py-24 bg-gradient-to-br from-primary/5 to-accent/5"
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Start Your Project Today
              </h2>
              <p className="text-lg text-muted-foreground mb-10">
                Choose the option that works best for you
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4">
                    Book a Free Call
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    15-minute consultation, no commitment
                  </p>
                  <BookingButton className="w-full" />
                </div>

                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4">Get a Quote</h3>
                  <p className="text-muted-foreground mb-4">
                    Tell us about your project and get a detailed proposal
                  </p>
                  <ContactForm
                    formspreeId="mjkazjpv"
                    trigger={
                      <Button className="w-full">Get Your Free Quote</Button>
                    }
                  />
                </div>

                <div className="bg-background p-6 rounded-lg border">
                  <h3 className="text-xl font-semibold mb-4">See Examples</h3>
                  <p className="text-muted-foreground mb-4">
                    View our portfolio of completed projects
                  </p>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() =>
                      document
                        .getElementById('portfolio')
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
                <div className="flex items-center justify-center gap-2 text-red-800 font-semibold">
                  <Clock className="h-5 w-5" />
                  Limited spots available - 40% off for limited clients
                </div>
              </div>

              <TrustBadges />
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default Index;
