import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { SEO, seoConfigs } from '@/components/SEO';
import {
  ArrowLeft,
  Building2,
  Users,
  Wrench,
  DollarSign,
  BarChart3,
  Bell,
  Search,
  MessageSquare,
  Calendar,
  FileText,
  Settings,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  ExternalLink,
  Play,
} from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function TenantOS() {
  const navigate = useNavigate();
  const features = [
    {
      icon: Building2,
      title: 'Property Management',
      description:
        'Comprehensive property portfolio management with real-time occupancy tracking and automated rent collection.',
    },
    {
      icon: Users,
      title: 'Tenant Portal',
      description:
        'Self-service tenant portal with maintenance requests, payment history, and communication tools.',
    },
    {
      icon: Wrench,
      title: 'Maintenance Tracking',
      description:
        'Automated work order management with contractor assignment and progress monitoring.',
    },
    {
      icon: DollarSign,
      title: 'Financial Analytics',
      description:
        'Real-time financial reporting with income tracking, expense management, and profit analysis.',
    },
    {
      icon: BarChart3,
      title: 'AI Insights',
      description:
        'Machine learning-powered insights for predictive maintenance and occupancy optimization.',
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description:
        'Intelligent alert system for rent due dates, maintenance issues, and important updates.',
    },
  ];

  const stats = [
    { label: 'Properties Managed', value: '42', change: '+3 this month' },
    { label: 'Occupancy Rate', value: '95%', change: '+2.5% from last month' },
    { label: 'Open Requests', value: '12', change: '4 pending review' },
    {
      label: 'Monthly Revenue',
      value: '£87.5K',
      change: '+8.3% vs last month',
    },
  ];

  const techStack = [
    'React 18',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'Redis',
    'AWS',
    'Docker',
    'AI/ML',
    'WebSocket',
    'REST API',
  ];

  // Structured data for TenantOS
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'TenantOS',
    description:
      'AI-powered property management platform with intelligent tenant portal, automated maintenance tracking, and real-time financial analytics.',
    url: 'https://intelliwave.co.uk/portfolio/tenantos',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'GBP',
      availability: 'https://schema.org/InStock',
    },
    creator: {
      '@type': 'Organization',
      name: 'Intelliwave',
      url: 'https://intelliwave.co.uk',
    },
    featureList: [
      'Property Management',
      'Tenant Portal',
      'Maintenance Tracking',
      'Financial Analytics',
      'AI Insights',
      'Smart Notifications',
    ],
    screenshot: 'https://intelliwave.co.uk/tenantos.png',
  };

  return (
    <>
      <SEO {...seoConfigs.tenantos} structuredData={structuredData} />
      <div className="min-h-screen bg-white">
        {/* Back to Intelliwave Banner */}
        <div className="bg-gray-100 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
            <button
              onClick={() => navigate('/')}
              className="flex items-center text-sm text-gray-600 hover:text-[#636436] transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Back to Intelliwave
            </button>
          </div>
        </div>

        {/* Header */}
        <header className="bg-white shadow-sm border-b sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: '#636436' }}
                >
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span
                  className="text-2xl font-bold"
                  style={{ color: '#636436' }}
                >
                  TenantOS
                </span>
              </div>
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#features"
                  className="text-gray-700 hover:text-[#636436] transition-colors"
                >
                  Features
                </a>
                <a
                  href="#dashboard"
                  className="text-gray-700 hover:text-[#636436] transition-colors"
                >
                  Dashboard
                </a>
                <a
                  href="#ai-assistant"
                  className="text-gray-700 hover:text-[#636436] transition-colors"
                >
                  AI Assistant
                </a>
                <a
                  href="#tech-stack"
                  className="text-gray-700 hover:text-[#636436] transition-colors"
                >
                  Tech Stack
                </a>
              </nav>
              <div className="flex gap-4">
                <Button
                  className="text-white"
                  style={{ backgroundColor: '#636436' }}
                >
                  <Play className="w-4 h-4 mr-2" />
                  View Live Demo
                </Button>
                <Button
                  variant="outline"
                  style={{ borderColor: '#636436', color: '#636436' }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Source Code
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          className="relative overflow-hidden py-24 lg:py-32"
          style={{
            background: 'linear-gradient(135deg, #636436 0%, #ADA187 100%)',
          }}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
                <Building2 className="h-4 w-4 text-white" />
                <span className="text-sm font-medium text-white">
                  Property Management Platform
                </span>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6">
                TenantOS
              </h1>

              <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed max-w-3xl mx-auto">
                AI-powered property management platform that transforms how you
                manage properties, tenants, and maintenance with intelligent
                automation and real-time insights.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Button
                  size="lg"
                  className="bg-white text-[#636436] hover:bg-white/90 shadow-lg"
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Live Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-[#636436] transition-colors"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Source Code
                </Button>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-lg p-4"
                  >
                    <div className="text-2xl font-bold text-white mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-white/80 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-white/60">{stat.change}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Powerful Features for Modern Property Management
              </h2>
              <p className="text-lg text-muted-foreground">
                Everything you need to manage properties efficiently with
                AI-powered insights and automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 group"
                >
                  <div
                    className="inline-flex h-12 w-12 items-center justify-center rounded-lg mb-4"
                    style={{ backgroundColor: '#636436' }}
                  >
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Preview Section */}
        <section id="dashboard" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                  Intuitive Dashboard Interface
                </h2>
                <p className="text-lg text-muted-foreground">
                  Clean, modern interface designed for efficiency and ease of
                  use.
                </p>
              </div>

              <Card className="overflow-hidden">
                <div className="aspect-video relative bg-gradient-to-br from-slate-50 to-slate-100">
                  <div className="absolute inset-0 p-8">
                    {/* Mock Dashboard Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="h-8 w-8 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: '#636436' }}
                        >
                          <Building2 className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xl font-bold text-slate-800">
                          TenantOS
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Search className="h-4 w-4 text-slate-500" />
                          <input
                            type="text"
                            placeholder="Search properties, tenants..."
                            className="px-3 py-1 border border-slate-300 rounded-md text-sm"
                          />
                        </div>
                        <div className="relative">
                          <Bell className="h-5 w-5 text-slate-500" />
                          <div className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></div>
                        </div>
                        <div className="h-8 w-8 bg-gradient-to-br from-[#636436] to-[#ADA187] rounded-full flex items-center justify-center text-white text-sm font-semibold">
                          JD
                        </div>
                      </div>
                    </div>

                    {/* Mock Stats Cards */}
                    <div className="grid grid-cols-4 gap-4 mb-6">
                      {stats.map((stat, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg p-4 shadow-sm border"
                        >
                          <div className="text-2xl font-bold text-slate-800 mb-1">
                            {stat.value}
                          </div>
                          <div className="text-sm text-slate-600 mb-1">
                            {stat.label}
                          </div>
                          <div className="text-xs text-green-600">
                            {stat.change}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Mock Content Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <h3 className="font-semibold text-slate-800 mb-3">
                          Recent Properties
                        </h3>
                        <div className="space-y-2">
                          {[
                            'Riverside Apartment 301',
                            'Oakwood House 12B',
                            'Garden Villa 5',
                          ].map((property, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 text-sm"
                            >
                              <div className="h-8 w-8 bg-slate-100 rounded flex items-center justify-center">
                                <Building2 className="h-4 w-4 text-slate-500" />
                              </div>
                              <div className="flex-1">
                                <div className="font-medium text-slate-800">
                                  {property}
                                </div>
                                <div className="text-slate-500">
                                  £1,850/mo • Occupied
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-white rounded-lg p-4 shadow-sm border">
                        <h3 className="font-semibold text-slate-800 mb-3">
                          Maintenance Tasks
                        </h3>
                        <div className="space-y-2">
                          {[
                            'Fix leaking faucet - Unit 301',
                            'HVAC inspection - Building B',
                            'Repaint common area',
                          ].map((task, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 text-sm"
                            >
                              <div className="h-4 w-4 border border-slate-300 rounded"></div>
                              <div className="flex-1">
                                <div className="font-medium text-slate-800">
                                  {task}
                                </div>
                                <div className="text-slate-500">Due: Today</div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* AI Chat Widget Section */}
        <section id="ai-assistant" className="py-24 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                AI-Powered Assistant
              </h2>
              <p className="text-lg text-muted-foreground">
                Intelligent chatbot that helps with property management tasks
                and provides instant insights.
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <Card className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="h-12 w-12 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: '#636436' }}
                  >
                    <MessageSquare className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">PropManager AI</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      <span>Always here to help</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-4 max-w-xs">
                      <p className="text-sm">
                        Hi John! I can help you with property information,
                        maintenance requests, financial reports, and more. What
                        would you like assistance with today?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div
                      className="rounded-lg p-4 max-w-xs text-white text-sm"
                      style={{ backgroundColor: '#636436' }}
                    >
                      Show me vacant properties
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg p-4 max-w-xs">
                      <p className="text-sm">
                        I found 2 vacant properties in your portfolio. Would you
                        like me to create listing ads or schedule viewings?
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Ask me anything..."
                    className="flex-1 px-4 py-2 border border-border rounded-lg text-sm"
                  />
                  <Button size="sm" style={{ backgroundColor: '#636436' }}>
                    Send
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section id="tech-stack" className="py-24 bg-muted/30">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Built with Modern Technology
              </h2>
              <p className="text-lg text-muted-foreground">
                Leveraging cutting-edge technologies for performance,
                scalability, and security.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {techStack.map((tech, index) => (
                <Badge
                  key={index}
                  variant="secondary"
                  className="px-4 py-2 text-sm"
                >
                  {tech}
                </Badge>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-6 text-center">
                <Zap
                  className="h-8 w-8 mx-auto mb-4"
                  style={{ color: '#636436' }}
                />
                <h3 className="text-lg font-semibold mb-2">Performance</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized for speed with React 18, TypeScript, and modern
                  build tools.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <Shield
                  className="h-8 w-8 mx-auto mb-4"
                  style={{ color: '#636436' }}
                />
                <h3 className="text-lg font-semibold mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">
                  Enterprise-grade security with encrypted data and secure
                  authentication.
                </p>
              </Card>

              <Card className="p-6 text-center">
                <BarChart3
                  className="h-8 w-8 mx-auto mb-4"
                  style={{ color: '#636436' }}
                />
                <h3 className="text-lg font-semibold mb-2">Scalability</h3>
                <p className="text-sm text-muted-foreground">
                  Built to scale with microservices architecture and cloud
                  infrastructure.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-24"
          style={{
            background: 'linear-gradient(135deg, #636436 0%, #ADA187 100%)',
          }}
        >
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Ready to Transform Your Property Management?
              </h2>
              <p className="text-lg text-white/90 mb-10">
                Experience the future of property management with AI-powered
                insights and automation.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-white text-[#636436] hover:bg-white/90 shadow-lg"
                >
                  <Play className="mr-2 h-4 w-4" />
                  Try Live Demo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-[#636436] transition-colors"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Source Code
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
