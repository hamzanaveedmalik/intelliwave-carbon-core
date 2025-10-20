import { Mail, Phone, MapPin } from 'lucide-react';
import logo from '@/assets/intelliwave-logo.svg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Services',
      links: [
        {
          label: 'Cloud Infrastructure',
          href: '/services/cloud-infrastructure',
        },
        { label: 'Cybersecurity', href: '/services/cybersecurity' },
        {
          label: 'Digital Transformation',
          href: '/services/digital-transformation',
        },
        { label: 'AI & Automation', href: '/services/ai-automation' },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/company/about' },
        { label: 'Careers', href: '/company/careers' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/legal/privacy' },
        { label: 'Terms of Service', href: '/legal/terms' },
        { label: 'Security', href: '/legal/privacy' },
        { label: 'Compliance', href: '/legal/privacy' },
        { label: 'Cookie Policy', href: '/legal/privacy' },
      ],
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: 'contact@intelliwave.com',
      href: 'mailto:contact@intelliwave.com',
    },
    { icon: Phone, text: '+44 7771 081430', href: 'tel:+447771081430' },
    { icon: MapPin, text: '🇬🇧 London, UK', href: '#' },
  ];

  return (
    <footer className="border-t border-border bg-background">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Company Info - Takes 2 columns on large screens */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4 group">
              <img
                src={logo}
                alt="Intelliwave"
                className="h-8 w-auto group-hover:opacity-80 transition-opacity"
              />
              <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Intelliwave
              </span>
            </a>
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed max-w-sm">
              Empowering enterprises with cutting-edge technology solutions for
              digital transformation and innovation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                  >
                    <Icon className="h-4 w-4 text-primary group-hover:text-primary-hover" />
                    <span>{item.text}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Footer Links - Each takes 1 column */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Intelliwave. All rights reserved. Enterprise
              Technology Solutions.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Sitemap
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Accessibility
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
