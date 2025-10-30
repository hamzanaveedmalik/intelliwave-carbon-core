import { PageLayout } from '@/components/PageLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'lucide-react';

export default function Sitemap() {
  const siteStructure = [
    {
      category: 'Main Pages',
      pages: [
        {
          title: 'Home',
          url: '/',
          description:
            'Main landing page with hero section and services overview',
        },
        {
          title: 'Solutions',
          url: '/solutions',
          description: 'Overview of all our technology solutions',
        },
      ],
    },
    {
      category: 'Services',
      pages: [
        {
          title: 'Cloud Infrastructure',
          url: '/services/cloud-infrastructure',
          description: 'Scalable cloud solutions and infrastructure management',
        },
        {
          title: 'Cybersecurity',
          url: '/services/cybersecurity',
          description: 'Comprehensive security solutions and threat protection',
        },
        {
          title: 'Digital Transformation',
          url: '/services/digital-transformation',
          description: 'Modernizing business processes and technology adoption',
        },
        {
          title: 'AI & Automation',
          url: '/services/ai-automation',
          description:
            'Artificial intelligence and process automation solutions',
        },
      ],
    },
    {
      category: 'Company',
      pages: [
        {
          title: 'About Us',
          url: '/company/about',
          description: 'Learn about Intelliwave and our mission',
        },
        {
          title: 'Careers',
          url: '/company/careers',
          description: 'Join our team - view open positions and apply',
        },
      ],
    },
    {
      category: 'Legal & Policies',
      pages: [
        {
          title: 'Privacy Policy',
          url: '/legal/privacy',
          description: 'How we collect, use, and protect your data',
        },
        {
          title: 'Terms of Service',
          url: '/legal/terms',
          description: 'Terms and conditions for using our services',
        },
        {
          title: 'Accessibility Statement',
          url: '/accessibility',
          description: 'Our commitment to web accessibility',
        },
        {
          title: 'Cookie Settings',
          url: '/cookie-settings',
          description: 'Manage your cookie preferences',
        },
      ],
    },
  ];

  return (
    <PageLayout title="Sitemap">
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold mb-4">Site Map</h1>
              <p className="text-xl text-muted-foreground">
                Navigate through all pages and sections of our website
              </p>
            </div>

            <div className="space-y-8">
              {siteStructure.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h2 className="text-2xl font-semibold mb-6 text-primary">
                    {section.category}
                  </h2>
                  <div className="grid gap-4">
                    {section.pages.map((page, pageIndex) => (
                      <Card
                        key={pageIndex}
                        className="p-6 hover:shadow-lg transition-shadow"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">
                              <a
                                href={page.url}
                                className="text-foreground hover:text-primary transition-colors"
                              >
                                {page.title}
                              </a>
                            </h3>
                            <p className="text-sm text-muted-foreground mb-3">
                              {page.description}
                            </p>
                            <a
                              href={page.url}
                              className="text-sm text-primary hover:text-primary-hover font-medium inline-flex items-center gap-1"
                            >
                              <Link className="h-3 w-3" />
                              Visit Page
                            </a>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6 bg-accent rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Quick Navigation</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <a
                  href="/#services"
                  className="text-sm text-primary hover:text-primary-hover"
                >
                  Our Services
                </a>
                <a
                  href="/#about"
                  className="text-sm text-primary hover:text-primary-hover"
                >
                  About Us
                </a>
                <a
                  href="/#contact"
                  className="text-sm text-primary hover:text-primary-hover"
                >
                  Contact
                </a>
                <a
                  href="/company/careers"
                  className="text-sm text-primary hover:text-primary-hover"
                >
                  Careers
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
