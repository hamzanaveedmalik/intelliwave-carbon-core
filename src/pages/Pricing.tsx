import { PageLayout } from '@/components/PageLayout';
import { PricingCard } from '@/components/PricingCard';
import { TrustBadges } from '@/components/TrustBadges';
import { FAQ } from '@/components/FAQ';
import { ContactForm } from '@/components/ContactForm';
import { CalFloatingButton } from '@/components/CalFloatingButton';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Pricing() {
  const pricingTiers = [
    {
      title: 'Starter Package',
      price: '£1,799',
      originalPrice: '£2,999',
      description: 'Perfect for startups and small businesses',
      features: [
        '5-page responsive website',
        'Mobile-optimized design',
        'Contact form integration',
        'Basic SEO setup',
        '4-week delivery',
        '1 month free support',
        'Free hosting for 3 months',
        'SSL certificate included',
        'Performance optimization',
        'Training session included',
      ],
      ctaText: 'Get Started',
      isPopular: false,
    },
    {
      title: 'Business Package',
      price: '£3,599',
      originalPrice: '£5,999',
      description: 'Ideal for growing businesses',
      features: [
        '10-page responsive website',
        'Custom design & branding',
        'CRM integration',
        'Blog/News section',
        'Advanced SEO setup',
        '6-week delivery',
        '2 months free support',
        'Free hosting for 3 months',
        'SSL certificate included',
        'Performance optimization',
        'Training session included',
        'Google Analytics setup',
      ],
      ctaText: 'Choose Business',
      isPopular: true,
    },
    {
      title: 'Custom Package',
      price: 'From £5,999',
      originalPrice: 'From £9,999',
      description: 'Tailored solutions for specific needs',
      features: [
        'Custom web applications',
        'Database design & integration',
        'API development',
        'Advanced features',
        '8-12 week delivery',
        '3 months free support',
        'Free hosting for 3 months',
        'SSL certificate included',
        'Performance optimization',
        'Training session included',
        'Priority support',
        'Custom integrations',
      ],
      ctaText: 'Discuss Project',
      isPopular: false,
    },
  ];

  const handlePricingCta = (tier: string) => {
    // Scroll to contact form or open contact modal
    const contactSection = document.getElementById('contact-form');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <PageLayout title="Pricing - Intelliwave">
      <CalFloatingButton />
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-red-100 text-red-800 border-red-200">
              🔥 Limited Time: 40% OFF for First 15 Clients
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Transparent Pricing for
              <span className="text-primary"> UK Businesses</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Fixed pricing, no surprises. Choose the package that fits your
              business needs. All packages include free hosting, SSL, and
              support.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <CheckCircle className="h-4 w-4 text-green-500" />
              <span>
                UK-based team • GMT timezone • 6-week delivery guarantee
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <PricingCard
                key={index}
                title={tier.title}
                price={tier.price}
                originalPrice={tier.originalPrice}
                description={tier.description}
                features={tier.features}
                ctaText={tier.ctaText}
                isPopular={tier.isPopular}
                onCtaClick={() => handlePricingCta(tier.title)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              What's Included in Every Package
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 bg-background rounded-lg border">
                <div className="text-2xl mb-2">🏠</div>
                <h3 className="font-semibold mb-2">Free Hosting</h3>
                <p className="text-sm text-muted-foreground">
                  3 months free hosting included
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <div className="text-2xl mb-2">🔒</div>
                <h3 className="font-semibold mb-2">SSL Certificate</h3>
                <p className="text-sm text-muted-foreground">
                  Secure your site with SSL
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <div className="text-2xl mb-2">⚡</div>
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized for speed & SEO
                </p>
              </div>
              <div className="p-6 bg-background rounded-lg border">
                <div className="text-2xl mb-2">🎓</div>
                <h3 className="font-semibold mb-2">Training</h3>
                <p className="text-sm text-muted-foreground">
                  Learn to manage your site
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <TrustBadges />

      {/* FAQ Section */}
      <FAQ />

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 lg:py-24 bg-primary">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-primary-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-primary-foreground/90 mb-8">
              Book a free consultation to discuss your project and get a custom
              quote.
            </p>
            <ContactForm
              formspreeId="mjkazjpv"
              trigger={
                <button className="bg-background text-primary hover:bg-background/90 px-8 py-4 rounded-lg font-semibold text-lg shadow-lg transition-colors inline-flex items-center gap-2">
                  Get Your Free Quote
                  <ArrowRight className="h-5 w-5" />
                </button>
              }
            />
            <p className="text-sm text-primary-foreground/80 mt-4">
              We'll respond within 24 hours with a detailed proposal
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
