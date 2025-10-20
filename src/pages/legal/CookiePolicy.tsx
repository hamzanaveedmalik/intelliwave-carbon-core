import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import {
  Cookie,
  Shield,
  BarChart3,
  Users,
  Settings,
  Clock,
} from 'lucide-react';

export default function CookiePolicy() {
  const cookieTypes = [
    {
      icon: Shield,
      title: 'Necessary Cookies',
      description:
        'Essential cookies that enable basic website functionality and security features.',
      purpose:
        'These cookies are necessary for the website to function and cannot be switched off.',
      examples: [
        'Session management cookies',
        'Security tokens',
        'Form submission cookies',
        'Load balancing cookies',
      ],
      retention: 'Session or up to 1 year',
    },
    {
      icon: BarChart3,
      title: 'Analytics Cookies',
      description:
        'Help us understand how visitors interact with our website by collecting anonymous information.',
      purpose:
        'These cookies help us improve our website by understanding how it is used.',
      examples: [
        'Google Analytics cookies',
        'Page view tracking',
        'User behavior analysis',
        'Performance metrics',
      ],
      retention: 'Up to 2 years',
    },
    {
      icon: Users,
      title: 'Marketing Cookies',
      description:
        'Used to track visitors across websites to display relevant and engaging advertisements.',
      purpose:
        'These cookies are used to deliver advertisements more relevant to you and your interests.',
      examples: [
        'Advertising cookies',
        'Social media cookies',
        'Campaign tracking',
        'Remarketing cookies',
      ],
      retention: 'Up to 1 year',
    },
    {
      icon: Settings,
      title: 'Preference Cookies',
      description:
        'Remember your choices and preferences to provide a personalized experience.',
      purpose:
        'These cookies remember your choices to provide a more personalized experience.',
      examples: [
        'Language preferences',
        'Theme settings',
        'Customized content',
        'User interface preferences',
      ],
      retention: 'Up to 1 year',
    },
  ];

  const thirdPartyCookies = [
    {
      name: 'Google Analytics',
      purpose: 'Website analytics and performance monitoring',
      cookies: '_ga, _ga_*, _gid, _gat',
      retention: 'Up to 2 years',
    },
    {
      name: 'Google Tag Manager',
      purpose: 'Tag management and tracking',
      cookies: '_gtm, _gtag',
      retention: 'Up to 1 year',
    },
    {
      name: 'LinkedIn',
      purpose: 'Social media integration and advertising',
      cookies: 'li_*, lidc, bcookie',
      retention: 'Up to 1 year',
    },
    {
      name: 'Facebook Pixel',
      purpose: 'Advertising and conversion tracking',
      cookies: '_fbp, _fbc',
      retention: 'Up to 1 year',
    },
  ];

  return (
    <PageLayout title="Cookie Policy">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
                <Cookie className="h-10 w-10 text-primary" />
                Cookie Policy
              </h1>
              <p className="text-xl text-muted-foreground">
                Information about how we use cookies and similar technologies
              </p>
            </div>

            <div className="space-y-12">
              {/* Introduction */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  What Are Cookies?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Cookies are small text files that are stored on your device
                  when you visit our website. They help us provide you with a
                  better experience by remembering your preferences and
                  understanding how you use our site.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This Cookie Policy explains what cookies we use, why we use
                  them, and how you can control your cookie preferences. By
                  continuing to use our website, you consent to our use of
                  cookies as described in this policy.
                </p>
              </Card>

              {/* Cookie Types */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Types of Cookies We Use
                </h2>
                <div className="space-y-6">
                  {cookieTypes.map((cookieType, index) => {
                    const Icon = cookieType.icon;
                    return (
                      <Card key={index} className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <Icon className="h-8 w-8 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">
                              {cookieType.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {cookieType.description}
                            </p>
                            <p className="text-sm text-muted-foreground mb-3">
                              <strong>Purpose:</strong> {cookieType.purpose}
                            </p>
                            <div className="mb-3">
                              <p className="text-sm font-medium mb-1">
                                Examples:
                              </p>
                              <ul className="text-xs text-muted-foreground list-disc list-inside space-y-1">
                                {cookieType.examples.map(
                                  (example, exampleIndex) => (
                                    <li key={exampleIndex}>{example}</li>
                                  )
                                )}
                              </ul>
                            </div>
                            <p className="text-xs text-muted-foreground">
                              <strong>Retention:</strong> {cookieType.retention}
                            </p>
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>

              {/* Third Party Cookies */}
              <div>
                <h2 className="text-2xl font-semibold mb-6">
                  Third-Party Cookies
                </h2>
                <p className="text-muted-foreground mb-4">
                  We also use third-party services that may set cookies on your
                  device. These services help us provide better functionality
                  and understand how our website is used.
                </p>
                <div className="space-y-4">
                  {thirdPartyCookies.map((service, index) => (
                    <Card key={index} className="p-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <h3 className="font-semibold mb-1">{service.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            {service.purpose}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm mb-1">
                            <strong>Cookies:</strong> {service.cookies}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            <strong>Retention:</strong> {service.retention}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Managing Cookies */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-muted-foreground mb-4">
                  You have several options for managing cookies:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Cookie Settings</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Use our cookie settings page to customize which cookies
                      you accept:
                    </p>
                    <a
                      href="/cookie-settings"
                      className="text-primary hover:text-primary-hover font-medium"
                    >
                      Manage Cookie Settings →
                    </a>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Browser Settings</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      You can also control cookies directly through your browser
                      settings:
                    </p>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      <li>
                        <strong>Chrome:</strong> Settings → Privacy and security
                        → Cookies and other site data
                      </li>
                      <li>
                        <strong>Firefox:</strong> Options → Privacy & Security →
                        Cookies and Site Data
                      </li>
                      <li>
                        <strong>Safari:</strong> Preferences → Privacy → Manage
                        Website Data
                      </li>
                      <li>
                        <strong>Edge:</strong> Settings → Cookies and site
                        permissions
                      </li>
                    </ul>
                  </div>
                </div>
              </Card>

              {/* Impact of Disabling Cookies */}
              <Card className="p-8 bg-accent">
                <h2 className="text-2xl font-semibold mb-4">
                  Impact of Disabling Cookies
                </h2>
                <p className="text-muted-foreground mb-4">
                  Please note that disabling certain cookies may affect the
                  functionality of our website:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Some features may not work properly
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      You may need to re-enter information more frequently
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-yellow-600" />
                    <span className="text-sm">
                      Personalized content may not be available
                    </span>
                  </div>
                </div>
              </Card>

              {/* Updates to Policy */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">
                  Updates to This Policy
                </h2>
                <p className="text-muted-foreground mb-4">
                  We may update this Cookie Policy from time to time to reflect
                  changes in our practices or for other operational, legal, or
                  regulatory reasons. We will notify you of any material changes
                  by posting the updated policy on our website.
                </p>
                <p className="text-muted-foreground">
                  We encourage you to review this Cookie Policy periodically to
                  stay informed about how we use cookies and similar
                  technologies.
                </p>
              </Card>

              {/* Contact Information */}
              <Card className="p-8">
                <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have any questions about our use of cookies or this
                  Cookie Policy, please contact us:
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Email:</strong> privacy@intelliwave.com
                  </p>
                  <p className="text-sm">
                    <strong>Phone:</strong> +44 7771 081430
                  </p>
                  <p className="text-sm">
                    <strong>Address:</strong> London, UK
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
