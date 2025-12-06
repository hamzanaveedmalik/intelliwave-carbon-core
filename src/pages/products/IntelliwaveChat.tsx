import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  CheckCircle,
  Sparkles,
  Zap,
  Shield,
  Clock,
  ArrowRight,
  Star,
  MessageSquare,
  Settings,
  TrendingUp,
  ChevronDown,
} from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import { WaitlistForm } from '@/components/WaitlistForm';
import { TrustBadges } from '@/components/TrustBadges';
import { SEO } from '@/components/SEO';
import { CalFloatingButton } from '@/components/CalFloatingButton';

export default function IntelliwaveChat() {
  const features = [
    {
      icon: Settings,
      title: 'Automatic Setup',
      description:
        'Knowledge base created automatically from your store content. Zero configuration required.',
    },
    {
      icon: MessageSquare,
      title: 'AI-Powered Support',
      description:
        'Answers customer questions 24/7 using your actual product descriptions and policies.',
    },
    {
      icon: Zap,
      title: 'Shopify-Native',
      description:
        'Built specifically for Shopify stores. One-click install from the App Store.',
    },
    {
      icon: Shield,
      title: 'Edge-Native',
      description:
        'Fast response times with edge computing. Instant customer support.',
    },
    {
      icon: TrendingUp,
      title: 'Affordable Pricing',
      description:
        'Starting at $49/month. Most affordable AI support solution for Shopify stores.',
    },
    {
      icon: Clock,
      title: 'Save Time',
      description:
        'Reduce support time by 70-80%. Focus on growing your business.',
    },
  ];

  const pricingTiers = [
    {
      name: 'STARTER',
      price: '$49',
      period: '/month',
      description: 'Perfect for small stores',
      features: [
        'Up to 1,000 products',
        'Basic AI support',
        'Email support',
        'Automatic setup',
        'Shopify integration',
      ],
      cta: 'Join Waitlist',
      popular: false,
    },
    {
      name: 'GROWTH',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing stores',
      features: [
        'Up to 5,000 products',
        'Advanced AI support',
        'Priority support',
        'Analytics dashboard',
        'Automatic setup',
        'Shopify integration',
      ],
      cta: 'Join Waitlist',
      popular: true,
    },
    {
      name: 'SCALE',
      price: '$199',
      period: '/month',
      description: 'For established stores',
      features: [
        'Up to 10,000 products',
        'Enterprise AI features',
        'Dedicated support',
        'Advanced analytics',
        'Custom integrations',
        'Automatic setup',
        'Shopify integration',
      ],
      cta: 'Join Waitlist',
      popular: false,
    },
  ];

  const faqData = [
    {
      question: 'When will Intelliwave Chat launch?',
      answer:
        'We\'re currently building Intelliwave Chat and plan to launch in Q2 2025. Join the waitlist to be notified when we launch and get 50% off your first 3 months.',
    },
    {
      question: 'How does automatic setup work?',
      answer:
        'After installing from the Shopify App Store, Intelliwave Chat automatically scans your store\'s content (product descriptions, policies, FAQs) and creates a knowledge base. No manual configuration required - it works immediately.',
    },
    {
      question: 'What\'s included in each plan?',
      answer:
        'All plans include automatic setup, Shopify integration, and AI-powered support. Higher tiers include more products, advanced features, priority support, and analytics. See pricing section for details.',
    },
    {
      question: 'Do I need technical skills?',
      answer:
        'No technical skills required! Intelliwave Chat sets up automatically. Just install from the Shopify App Store and it starts working immediately.',
    },
    {
      question: 'How accurate is the AI?',
      answer:
        'The AI is trained on your store\'s actual content, so it understands your products, policies, and brand voice. It uses your product descriptions, FAQs, and policies to answer questions accurately.',
    },
    {
      question: 'What if I need help?',
      answer:
        'We offer email support for STARTER plans, priority support for GROWTH plans, and dedicated support for SCALE plans. All plans include setup assistance.',
    },
  ];

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  return (
    <>
      <SEO
        title="Intelliwave Chat - AI Customer Support for Shopify Stores"
        description="AI-powered customer support that sets up automatically for your Shopify store. Zero configuration, affordable pricing ($49-199/month), Shopify-native integration. Join the waitlist and get 50% off."
        keywords="Shopify AI support, Shopify chatbot, AI customer support, Shopify customer service, automatic knowledge base, Shopify app"
        url="/products/intelliwave-chat"
      />
      <PageLayout title="Intelliwave Chat">
        <CalFloatingButton />

        {/* Hero Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-500/10 to-primary/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge className="mb-6 bg-purple-500 text-white border-purple-600">
                <Sparkles className="h-3 w-3 mr-2" />
                Coming Soon to Shopify App Store
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">
                AI Customer Support That Sets Up Automatically
              </h1>
              <p className="text-xl text-muted-foreground mb-4 leading-relaxed">
                For Shopify stores. Zero setup. Affordable pricing.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Intelliwave Chat automatically creates a knowledge base from your
                store content and answers customer questions 24/7. No manual work
                required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <WaitlistForm
                  formspreeId="mjkazjpv"
                  trigger={
                    <Button
                      size="lg"
                      className="bg-purple-600 text-white hover:bg-purple-700"
                    >
                      Join Waitlist - Get 50% Off
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  }
                />
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() =>
                    document
                      .getElementById('how-it-works')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  See How It Works
                </Button>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span>Join 500+ Shopify stores on the waitlist</span>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                How It Works
              </h2>
              <p className="text-lg text-muted-foreground">
                Three simple steps to 24/7 AI customer support
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
              <Card className="p-8 border-border bg-card text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Install from Shopify App Store
                </h3>
                <p className="text-muted-foreground">
                  One-click install. No technical setup required. Works with any
                  Shopify store.
                </p>
              </Card>

              <Card className="p-8 border-border bg-card text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  AI Automatically Creates Knowledge Base
                </h3>
                <p className="text-muted-foreground">
                  Intelliwave Chat scans your store content and creates a knowledge
                  base automatically. No manual work needed.
                </p>
              </Card>

              <Card className="p-8 border-border bg-card text-center">
                <div className="w-16 h-16 rounded-full bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-purple-600">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">
                  Start Answering Questions Immediately
                </h3>
                <p className="text-muted-foreground">
                  Your AI support is live and answering customer questions 24/7
                  using your store's actual content.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Why Intelliwave Chat?
              </h2>
              <p className="text-lg text-muted-foreground">
                The only Shopify support tool that sets up automatically
              </p>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card
                    key={index}
                    className="p-6 border-border bg-card hover:shadow-lg transition-all"
                  >
                    <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center mb-4">
                      <Icon className="h-6 w-6 text-purple-600" />
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

        {/* Pricing Preview Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Choose the plan that fits your store size
              </p>
              <Badge className="bg-red-100 text-red-800 border-red-200">
                Early Access: 50% off first 3 months for waitlist members
              </Badge>
            </div>

            <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <Card
                  key={index}
                  className={`p-8 border-border bg-card relative ${
                    tier.popular
                      ? 'border-purple-500 border-2 shadow-lg'
                      : ''
                  }`}
                >
                  {tier.popular && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white">
                      Most Popular
                    </Badge>
                  )}
                  <h3 className="text-xl font-semibold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">
                      {tier.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {tier.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <WaitlistForm
                    formspreeId="mjkazjpv"
                    trigger={
                      <Button
                        className={`w-full ${
                          tier.popular
                            ? 'bg-purple-600 text-white hover:bg-purple-700'
                            : ''
                        }`}
                      >
                        {tier.cta}
                      </Button>
                    }
                  />
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-primary-foreground mb-6">
                Join Shopify Store Owners on the Waitlist
              </h2>
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-primary-foreground/10 rounded-lg p-6">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">
                    500+
                  </div>
                  <div className="text-primary-foreground/80">
                    Shopify stores on the waitlist
                  </div>
                </div>
                <div className="bg-primary-foreground/10 rounded-lg p-6">
                  <div className="text-4xl font-bold text-primary-foreground mb-2">
                    50% Off
                  </div>
                  <div className="text-primary-foreground/80">
                    First 3 months for early access members
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 text-primary-foreground/80">
                <Star className="h-5 w-5" />
                <span>Built by Shopify store owners, for Shopify store owners</span>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to know about Intelliwave Chat
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqData.map((faq, index) => (
                <Card
                  key={index}
                  className="border-border bg-card overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setOpenFaqIndex(openFaqIndex === index ? null : index)
                    }
                    className="w-full p-6 text-left flex items-start justify-between hover:bg-muted/50 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-card-foreground pr-4">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform duration-200 ${
                        openFaqIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {openFaqIndex === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-purple-500/10 to-primary/5">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Transform Your Customer Support?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join the waitlist and get 50% off your first 3 months when we
                launch.
              </p>
              <WaitlistForm
                formspreeId="mjkazjpv"
                trigger={
                  <Button
                    size="lg"
                    className="bg-purple-600 text-white hover:bg-purple-700"
                  >
                    Join Waitlist - Get 50% Off
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                }
              />
              <TrustBadges />
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}

