import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Accessibility, Eye, MousePointer, Volume2, Keyboard } from 'lucide-react';

export default function Accessibility() {
  const accessibilityFeatures = [
    {
      icon: Keyboard,
      title: 'Keyboard Navigation',
      description: 'Navigate our website using only your keyboard. Use Tab to move between elements, Enter to activate links and buttons, and arrow keys for menu navigation.',
    },
    {
      icon: Eye,
      title: 'Screen Reader Support',
      description: 'Our website is compatible with screen readers and assistive technologies. All images have descriptive alt text and content is properly structured.',
    },
    {
      icon: MousePointer,
      title: 'High Contrast Mode',
      description: 'We maintain sufficient color contrast ratios to ensure text is readable for users with visual impairments. Our design follows WCAG 2.1 AA standards.',
    },
    {
      icon: Volume2,
      title: 'Audio Descriptions',
      description: 'Video content includes captions and audio descriptions where appropriate to ensure accessibility for users with hearing impairments.',
    },
  ];

  const standards = [
    {
      name: 'WCAG 2.1 AA',
      description: 'We strive to meet Web Content Accessibility Guidelines 2.1 Level AA standards.',
      status: 'Compliant',
    },
    {
      name: 'Section 508',
      description: 'Our website complies with Section 508 of the Rehabilitation Act.',
      status: 'Compliant',
    },
    {
      name: 'ADA Compliance',
      description: 'We follow Americans with Disabilities Act guidelines for web accessibility.',
      status: 'Compliant',
    },
  ];

  return (
    <PageLayout title="Accessibility Statement">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Accessibility className="h-10 w-10 text-primary" />
                Accessibility Statement
              </h1>
              <p className="text-xl text-muted-foreground">
                Our commitment to making our website accessible to everyone
              </p>
            </div>

            <div className="space-y-12">
              {/* Introduction */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  At Intelliwave, we are committed to ensuring that our website is accessible to all users, 
                  including those with disabilities. We believe that technology should be inclusive and 
                  accessible to everyone, regardless of their abilities or the technologies they use.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This accessibility statement outlines our ongoing efforts to make our website compliant 
                  with accessibility standards and provides information about how we can assist you 
                  in accessing our content.
                </p>
              </Card>

              {/* Accessibility Features */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Accessibility Features</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {accessibilityFeatures.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Standards Compliance */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">Standards Compliance</h2>
                <div className="space-y-4">
                  {standards.map((standard, index) => (
                    <Card key={index} className="p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-lg font-semibold mb-1">{standard.name}</h3>
                          <p className="text-sm text-muted-foreground">{standard.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {standard.status}
                          </span>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <Card className="p-8 bg-accent">
                <h2 className="text-2xl font-semibold mb-4">Need Help?</h2>
                <p className="text-muted-foreground mb-4">
                  If you encounter any accessibility barriers or have difficulty accessing any part of our website, 
                  please don't hesitate to contact us. We are committed to providing assistance and making 
                  our content accessible to you.
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Email:</strong> accessibility@intelliwave.com
                  </p>
                  <p className="text-sm">
                    <strong>Phone:</strong> +44 7771 081430
                  </p>
                  <p className="text-sm">
                    <strong>Response Time:</strong> We aim to respond to accessibility inquiries within 48 hours.
                  </p>
                </div>
              </Card>

              {/* Ongoing Efforts */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Ongoing Efforts</h2>
                <p className="text-muted-foreground mb-4">
                  Accessibility is an ongoing process. We regularly review and update our website to ensure 
                  it remains accessible and compliant with current standards. This includes:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Regular accessibility audits and testing</li>
                  <li>User feedback integration</li>
                  <li>Staff training on accessibility best practices</li>
                  <li>Continuous improvement of our development processes</li>
                  <li>Regular updates to meet evolving accessibility standards</li>
                </ul>
              </Card>

              {/* Last Updated */}
              <div className="text-center text-sm text-muted-foreground">
                <p>Last updated: {new Date().toLocaleDateString('en-GB', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
