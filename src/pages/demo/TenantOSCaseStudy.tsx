import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  Clock,
  Target,
  TrendingUp,
  Code,
  Database,
  Cloud,
  Smartphone,
  Globe,
  Award,
} from 'lucide-react';
import { Footer } from '@/components/Footer';

export default function TenantOSCaseStudy() {
  const navigate = useNavigate();

  const challenges = [
    {
      icon: Building2,
      title: 'Property Management Complexity',
      description:
        'Managing 42+ properties with varying occupancy rates, maintenance schedules, and tenant communications.',
    },
    {
      icon: Users,
      title: 'Tenant Experience',
      description:
        'Providing self-service portal for maintenance requests, payment tracking, and communication.',
    },
    {
      icon: Wrench,
      title: 'Maintenance Coordination',
      description:
        'Streamlining work order management, contractor assignment, and progress tracking.',
    },
    {
      icon: DollarSign,
      title: 'Financial Tracking',
      description:
        'Real-time revenue monitoring, expense management, and profit analysis.',
    },
  ];

  const solutions = [
    {
      icon: BarChart3,
      title: 'AI-Powered Dashboard',
      description:
        'Intelligent property management dashboard with predictive analytics and automated insights.',
      features: [
        'Real-time occupancy tracking',
        'Predictive maintenance alerts',
        'Revenue forecasting',
        'Performance analytics',
      ],
    },
    {
      icon: MessageSquare,
      title: 'Smart Tenant Portal',
      description:
        'Self-service portal with AI chatbot for instant support and automated request handling.',
      features: [
        'Maintenance request submission',
        'Payment history tracking',
        'Document access',
        'AI-powered support',
      ],
    },
    {
      icon: Wrench,
      title: 'Automated Work Orders',
      description:
        'Intelligent work order management with contractor matching and progress monitoring.',
      features: [
        'Automated contractor assignment',
        'Real-time progress tracking',
        'Photo documentation',
        'Completion verification',
      ],
    },
    {
      icon: DollarSign,
      title: 'Financial Analytics',
      description:
        'Comprehensive financial reporting with real-time insights and automated calculations.',
      features: [
        'Revenue tracking',
        'Expense management',
        'Profit analysis',
        'Financial forecasting',
      ],
    },
  ];

  const results = [
    {
      metric: '95%',
      label: 'Occupancy Rate',
      description: 'Increased from 87% to 95% within 6 months',
      icon: TrendingUp,
    },
    {
      metric: '60%',
      label: 'Faster Maintenance',
      description: 'Reduced average maintenance completion time',
      icon: Clock,
    },
    {
      metric: '£87.5K',
      label: 'Monthly Revenue',
      description: '8.3% increase in monthly revenue',
      icon: DollarSign,
    },
    {
      metric: '42',
      label: 'Properties Managed',
      description: 'Successfully managing 42 properties',
      icon: Building2,
    },
  ];

  const techStack = [
    {
      name: 'React 18',
      category: 'Frontend',
      description: 'Modern UI framework',
    },
    {
      name: 'TypeScript',
      category: 'Language',
      description: 'Type-safe development',
    },
    {
      name: 'Node.js',
      category: 'Backend',
      description: 'Server-side runtime',
    },
    {
      name: 'PostgreSQL',
      category: 'Database',
      description: 'Relational database',
    },
    { name: 'Redis', category: 'Cache', description: 'In-memory data store' },
    { name: 'AWS', category: 'Cloud', description: 'Cloud infrastructure' },
    { name: 'Docker', category: 'DevOps', description: 'Containerization' },
    {
      name: 'AI/ML',
      category: 'Intelligence',
      description: 'Machine learning',
    },
  ];

  const timeline = [
    {
      phase: 'Discovery & Planning',
      duration: '2 weeks',
      description:
        'Requirements gathering, user research, and technical architecture design.',
      deliverables: [
        'User personas',
        'Technical specifications',
        'Project roadmap',
      ],
    },
    {
      phase: 'Design & Prototyping',
      duration: '3 weeks',
      description:
        'UI/UX design, user flow mapping, and interactive prototyping.',
      deliverables: [
        'Wireframes',
        'High-fidelity designs',
        'Interactive prototypes',
      ],
    },
    {
      phase: 'Development',
      duration: '8 weeks',
      description: 'Frontend and backend development with AI integration.',
      deliverables: ['Core features', 'AI integration', 'API development'],
    },
    {
      phase: 'Testing & Launch',
      duration: '2 weeks',
      description:
        'Quality assurance, user testing, and production deployment.',
      deliverables: [
        'Bug fixes',
        'Performance optimization',
        'Production deployment',
      ],
    },
  ];

  // Structured data for the case study
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'TenantOS Case Study - AI-Powered Property Management Platform',
    description:
      'How we built TenantOS, an AI-powered property management platform that increased occupancy rates to 95% and reduced maintenance time by 60%.',
    author: {
      '@type': 'Organization',
      name: 'Intelliwave',
      url: 'https://intelliwave.co.uk',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Intelliwave',
      logo: {
        '@type': 'ImageObject',
        url: 'https://intelliwave.co.uk/intelliwave-logo.svg',
      },
    },
    datePublished: '2024-01-15',
    dateModified: '2024-01-15',
    image: 'https://intelliwave.co.uk/tenantos.png',
    mainEntityOfPage: 'https://intelliwave.co.uk/demo/tenantos-case-study',
  };

  return (
    <>
      <SEO
        title="TenantOS Case Study - AI-Powered Property Management Platform | Intelliwave"
        description="How we built TenantOS, an AI-powered property management platform that increased occupancy rates to 95% and reduced maintenance time by 60%. Complete case study with results and technical details."
        keywords="property management software case study, AI property management, web development case study, custom software development, property management platform, real estate software"
        url="/demo/tenantos-case-study"
        structuredData={structuredData}
      />
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
                  TenantOS Case Study
                </span>
              </div>
              <div className="flex gap-4">
                <Button
                  className="text-white"
                  style={{ backgroundColor: '#636436' }}
                  onClick={() => navigate('/portfolio/tenantos')}
                >
                  <Play className="w-4 h-4 mr-2" />
                  View Live Demo
                </Button>
                <Button
                  variant="outline"
                  style={{ borderColor: '#636436', color: '#636436' }}
                  onClick={() => navigate('/#contact')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Start Your Project
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-slate-100">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <Badge
                className="mb-6 px-4 py-2 text-sm"
                style={{ backgroundColor: '#636436', color: 'white' }}
              >
                Case Study
              </Badge>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl mb-6">
                TenantOS: AI-Powered Property Management Platform
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
                How we built an intelligent property management platform that
                increased occupancy rates to 95% and reduced maintenance time by
                60% using AI and modern web technologies.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {results.map((result, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-4 shadow-sm border"
                  >
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {result.metric}
                    </div>
                    <div className="text-sm text-gray-600 mb-1">
                      {result.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {result.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
                  <p className="text-lg text-gray-600 mb-6">
                    TenantOS is a comprehensive property management platform
                    designed to streamline operations for property managers and
                    enhance the tenant experience. The platform combines
                    AI-powered insights with intuitive user interfaces to
                    deliver measurable business results.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Target className="h-5 w-5 text-[#636436] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Objective
                        </h3>
                        <p className="text-gray-600">
                          Create an all-in-one property management solution with
                          AI integration
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="h-5 w-5 text-[#636436] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          Timeline
                        </h3>
                        <p className="text-gray-600">
                          15 weeks from concept to launch
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Users className="h-5 w-5 text-[#636436] mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900">Team</h3>
                        <p className="text-gray-600">
                          5 developers, 2 designers, 1 project manager
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="/tenantos.png"
                    alt="TenantOS Dashboard - AI-Powered Property Management Platform"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">
                  Challenges We Solved
                </h2>
                <p className="text-lg text-gray-600">
                  Understanding the pain points was crucial to building the
                  right solution
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {challenges.map((challenge, index) => (
                  <Card key={index} className="p-6">
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: '#636436' }}
                      >
                        <challenge.icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">
                          {challenge.title}
                        </h3>
                        <p className="text-gray-600">{challenge.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Solutions */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Our Solutions</h2>
                <p className="text-lg text-gray-600">
                  How we addressed each challenge with innovative technology
                  solutions
                </p>
              </div>

              <div className="space-y-12">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className="grid lg:grid-cols-2 gap-8 items-center"
                  >
                    <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                      <div
                        className="p-3 rounded-lg inline-block mb-4"
                        style={{ backgroundColor: '#636436' }}
                      >
                        <solution.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-gray-900">
                        {solution.title}
                      </h3>
                      <p className="text-lg text-gray-600 mb-6">
                        {solution.description}
                      </p>
                      <ul className="space-y-2">
                        {solution.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                      <div className="bg-gray-100 rounded-lg p-8 h-64 flex items-center justify-center">
                        <div className="text-center">
                          <solution.icon className="h-16 w-16 mx-auto mb-4 text-gray-400" />
                          <p className="text-gray-500">Solution Preview</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-24 bg-gradient-to-br from-[#636436] to-[#ADA187] text-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Measurable Results</h2>
                <p className="text-lg text-white/90">
                  The impact of our solution on business operations and tenant
                  satisfaction
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {results.map((result, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                      <result.icon className="h-8 w-8 mx-auto mb-4 text-white" />
                      <div className="text-3xl font-bold mb-2">
                        {result.metric}
                      </div>
                      <div className="text-lg font-semibold mb-2">
                        {result.label}
                      </div>
                      <div className="text-sm text-white/80">
                        {result.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
                <p className="text-lg text-gray-600">
                  Modern technologies chosen for performance, scalability, and
                  maintainability
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {techStack.map((tech, index) => (
                  <Card key={index} className="p-6 text-center">
                    <div className="mb-4">
                      {tech.category === 'Frontend' && (
                        <Code className="h-8 w-8 mx-auto text-blue-500" />
                      )}
                      {tech.category === 'Language' && (
                        <FileText className="h-8 w-8 mx-auto text-green-500" />
                      )}
                      {tech.category === 'Backend' && (
                        <Server className="h-8 w-8 mx-auto text-purple-500" />
                      )}
                      {tech.category === 'Database' && (
                        <Database className="h-8 w-8 mx-auto text-orange-500" />
                      )}
                      {tech.category === 'Cache' && (
                        <Zap className="h-8 w-8 mx-auto text-yellow-500" />
                      )}
                      {tech.category === 'Cloud' && (
                        <Cloud className="h-8 w-8 mx-auto text-blue-600" />
                      )}
                      {tech.category === 'DevOps' && (
                        <Settings className="h-8 w-8 mx-auto text-gray-500" />
                      )}
                      {tech.category === 'Intelligence' && (
                        <BarChart3 className="h-8 w-8 mx-auto text-pink-500" />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {tech.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {tech.category}
                    </p>
                    <p className="text-xs text-gray-500">{tech.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Development Process */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold mb-4">Development Process</h2>
                <p className="text-lg text-gray-600">
                  Our structured approach to delivering high-quality software
                  solutions
                </p>
              </div>

              <div className="space-y-8">
                {timeline.map((phase, index) => (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                        style={{ backgroundColor: '#636436' }}
                      >
                        {index + 1}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="bg-white rounded-lg p-6 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                          <h3 className="text-xl font-semibold text-gray-900">
                            {phase.phase}
                          </h3>
                          <Badge variant="outline" className="text-sm">
                            {phase.duration}
                          </Badge>
                        </div>
                        <p className="text-gray-600 mb-4">
                          {phase.description}
                        </p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Deliverables:
                          </h4>
                          <ul className="flex flex-wrap gap-2">
                            {phase.deliverables.map(
                              (deliverable, deliverableIndex) => (
                                <li key={deliverableIndex}>
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {deliverable}
                                  </Badge>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                Ready to Build Your Solution?
              </h2>
              <p className="text-lg text-gray-600 mb-10">
                Let's discuss how we can help you achieve similar results with
                your project
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="text-white"
                  style={{ backgroundColor: '#636436' }}
                  onClick={() => navigate('/#contact')}
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  style={{ borderColor: '#636436', color: '#636436' }}
                  onClick={() => navigate('/portfolio/tenantos')}
                >
                  <Play className="mr-2 h-4 w-4" />
                  View Live Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
