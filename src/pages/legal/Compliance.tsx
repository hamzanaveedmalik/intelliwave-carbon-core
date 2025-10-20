import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import {
  FileCheck,
  Globe,
  Shield,
  Building,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function Compliance() {
  const complianceFrameworks = [
    {
      icon: Globe,
      title: 'GDPR',
      description: 'General Data Protection Regulation',
      status: 'Compliant',
      details: [
        'Data protection by design and by default',
        'Right to be forgotten implementation',
        'Data breach notification procedures',
        'Privacy impact assessments',
      ],
    },
    {
      icon: Building,
      title: 'SOC 2',
      description: 'Service Organization Control 2',
      status: 'Type II Certified',
      details: [
        'Security controls implementation',
        'Availability monitoring',
        'Confidentiality protection',
        'Processing integrity',
      ],
    },
    {
      icon: Shield,
      title: 'ISO 27001',
      description: 'Information Security Management',
      status: 'Certified',
      details: [
        'Information security policies',
        'Risk management procedures',
        'Security incident management',
        'Continuous improvement processes',
      ],
    },
    {
      icon: FileCheck,
      title: 'Cyber Essentials Plus',
      description: 'UK Government Cybersecurity Standard',
      status: 'Certified',
      details: [
        'Secure configuration',
        'Boundary firewalls',
        'Access control management',
        'Malware protection',
      ],
    },
  ];

  const industryStandards = [
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      applicable: 'For payment processing services',
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      applicable: 'For healthcare data handling',
    },
    {
      name: 'SOX',
      description: 'Sarbanes-Oxley Act',
      applicable: 'For financial reporting compliance',
    },
    {
      name: 'FISMA',
      description: 'Federal Information Security Management Act',
      applicable: 'For US government contracts',
    },
  ];

  return (
    <PageLayout title="Compliance">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <FileCheck className="h-10 w-10 text-primary" />
                Compliance
              </h1>
              <p className="text-xl text-muted-foreground">
                Our commitment to meeting regulatory requirements and industry
                standards
              </p>
            </div>

            <div className="space-y-12">
              {/* Introduction */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Compliance Commitment
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Intelliwave is committed to maintaining the highest standards
                  of compliance across all regulatory frameworks and industry
                  requirements. We understand that compliance is not just about
                  meeting requirements—it's about building trust and ensuring
                  the security of our clients' data.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our compliance program is designed to be proactive,
                  comprehensive, and continuously evolving to meet new
                  regulatory challenges and industry best practices.
                </p>
              </Card>

              {/* Compliance Frameworks */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Certified Compliance Frameworks
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {complianceFrameworks.map((framework, index) => {
                    const Icon = framework.icon;
                    return (
                      <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h3 className="text-lg font-semibold">
                                {framework.title}
                              </h3>
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {framework.status}
                              </span>
                            </div>
                            <p className="text-sm text-muted-foreground mb-3">
                              {framework.description}
                            </p>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {framework.details.map((detail, detailIndex) => (
                                <li
                                  key={detailIndex}
                                  className="flex items-center gap-2"
                                >
                                  <CheckCircle className="h-3 w-3 text-green-600" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Industry Standards */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Industry Standards
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {industryStandards.map((standard, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                          <AlertCircle className="h-5 w-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">
                            {standard.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-2">
                            {standard.description}
                          </p>
                          <p className="text-xs text-blue-600">
                            {standard.applicable}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Compliance Process */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Our Compliance Process
                </h2>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">1</span>
                    </div>
                    <h3 className="font-semibold mb-2">Assessment</h3>
                    <p className="text-sm text-muted-foreground">
                      Regular compliance assessments and gap analysis
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">2</span>
                    </div>
                    <h3 className="font-semibold mb-2">Implementation</h3>
                    <p className="text-sm text-muted-foreground">
                      Implementing required controls and procedures
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">3</span>
                    </div>
                    <h3 className="font-semibold mb-2">Monitoring</h3>
                    <p className="text-sm text-muted-foreground">
                      Continuous monitoring and regular audits
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 text-blue-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <span className="font-bold">4</span>
                    </div>
                    <h3 className="font-semibold mb-2">Improvement</h3>
                    <p className="text-sm text-muted-foreground">
                      Continuous improvement and updates
                    </p>
                  </div>
                </div>
              </Card>

              {/* Audit Information */}
              <Card className="p-8 bg-accent">
                <h2 className="text-2xl font-semibold mb-4">
                  Audit Information
                </h2>
                <p className="text-muted-foreground mb-4">
                  We undergo regular third-party audits to ensure our compliance
                  programs meet the highest standards. Our audit reports are
                  available to clients upon request and under appropriate
                  confidentiality agreements.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Last SOC 2 Audit:
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Q4 2024
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      Next ISO 27001 Review:
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Q1 2025
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">
                      GDPR Compliance Review:
                    </span>
                    <span className="text-sm text-muted-foreground">
                      Annual
                    </span>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Compliance Contact
                </h2>
                <p className="text-muted-foreground mb-4">
                  For compliance-related questions, audit requests, or to
                  request copies of our compliance documentation, please contact
                  our compliance team.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Compliance Email:</strong>{' '}
                    compliance@intelliwave.com
                  </p>
                  <p className="text-sm">
                    <strong>Data Protection Officer:</strong>{' '}
                    dpo@intelliwave.com
                  </p>
                  <p className="text-sm">
                    <strong>Response Time:</strong> Within 5 business days
                  </p>
                </div>
              </Card>

              {/* Last Updated */}
              <div className="text-center text-sm text-muted-foreground">
                <p>
                  Last updated:{' '}
                  {new Date().toLocaleDateString('en-GB', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
