import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import {
  Shield,
  Lock,
  Eye,
  AlertTriangle,
  CheckCircle,
  Server,
} from 'lucide-react';

export default function Security() {
  const securityMeasures = [
    {
      icon: Lock,
      title: 'Data Encryption',
      description:
        'All data is encrypted in transit and at rest using industry-standard encryption protocols.',
      details: [
        'TLS 1.3 for data transmission',
        'AES-256 encryption for data storage',
        'End-to-end encryption for sensitive communications',
      ],
    },
    {
      icon: Shield,
      title: 'Access Controls',
      description:
        'Multi-layered access controls ensure only authorized personnel can access sensitive information.',
      details: [
        'Role-based access control (RBAC)',
        'Multi-factor authentication (MFA)',
        'Regular access reviews and audits',
      ],
    },
    {
      icon: Eye,
      title: 'Monitoring & Detection',
      description:
        'Continuous monitoring and threat detection to identify and respond to security incidents.',
      details: [
        '24/7 security monitoring',
        'Automated threat detection',
        'Incident response procedures',
      ],
    },
    {
      icon: Server,
      title: 'Infrastructure Security',
      description:
        'Secure infrastructure with regular updates and security patches.',
      details: [
        'Regular security updates',
        'Vulnerability assessments',
        'Penetration testing',
      ],
    },
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management System certification',
      status: 'Certified',
    },
    {
      name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls',
      status: 'Certified',
    },
    {
      name: 'GDPR Compliance',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
    },
    {
      name: 'Cyber Essentials Plus',
      description: 'UK government-backed cybersecurity certification',
      status: 'Certified',
    },
  ];

  return (
    <PageLayout title="Security">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Shield className="h-10 w-10 text-primary" />
                Security
              </h1>
              <p className="text-xl text-muted-foreground">
                Our commitment to protecting your data and maintaining the
                highest security standards
              </p>
            </div>

            <div className="space-y-12">
              {/* Introduction */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Security First Approach
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Intelliwave, security is not just a feature—it's the
                  foundation of everything we do. We implement comprehensive
                  security measures to protect your data, maintain system
                  integrity, and ensure business continuity.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our security framework is designed to meet and exceed industry
                  standards, providing you with confidence that your sensitive
                  information is protected at all times.
                </p>
              </Card>

              {/* Security Measures */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Security Measures
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {securityMeasures.map((measure, index) => {
                    const Icon = measure.icon;
                    return (
                      <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">
                              {measure.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {measure.description}
                            </p>
                            <ul className="text-xs text-muted-foreground space-y-1">
                              {measure.details.map((detail, detailIndex) => (
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

              {/* Certifications */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Certifications & Compliance
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {certifications.map((cert, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">
                            {cert.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            {cert.description}
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {cert.status}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Incident Response */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Incident Response
                </h2>
                <p className="text-muted-foreground mb-4">
                  In the unlikely event of a security incident, we have
                  established procedures to ensure rapid detection, containment,
                  and resolution.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="bg-red-100 text-red-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Detection</h3>
                    <p className="text-sm text-muted-foreground">
                      Automated monitoring detects threats within minutes
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-yellow-100 text-yellow-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Containment</h3>
                    <p className="text-sm text-muted-foreground">
                      Immediate isolation prevents further damage
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 text-green-800 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="font-semibold mb-2">Resolution</h3>
                    <p className="text-sm text-muted-foreground">
                      Rapid remediation and system restoration
                    </p>
                  </div>
                </div>
              </Card>

              {/* Contact Information */}
              <Card className="p-8 bg-accent">
                <h2 className="text-2xl font-semibold mb-4">
                  Security Contact
                </h2>
                <p className="text-muted-foreground mb-4">
                  If you discover a security vulnerability or have security
                  concerns, please contact our security team immediately. We
                  take all security reports seriously and respond promptly.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Security Email:</strong> security@intelliwave.com
                  </p>
                  <p className="text-sm">
                    <strong>Response Time:</strong> Within 24 hours for critical
                    issues
                  </p>
                  <p className="text-sm">
                    <strong>Bug Bounty:</strong> We offer rewards for
                    responsibly disclosed vulnerabilities
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
