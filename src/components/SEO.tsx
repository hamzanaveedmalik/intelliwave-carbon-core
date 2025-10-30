import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  structuredData?: object;
  noindex?: boolean;
}

export const SEO = ({
  title = 'Intelliwave - Custom Web Applications & Technology Solutions for UK Businesses',
  description = 'Professional web development services for UK businesses. Custom websites, web applications, e-commerce solutions. Fixed pricing from £1,799. 6-week delivery guarantee.',
  keywords = 'web development UK, custom web applications, business websites, e-commerce development, web design services, UK web developers, professional websites, digital transformation',
  image = 'https://intelliwave.co.uk/og-image.jpg',
  url = 'https://intelliwave.co.uk',
  type = 'website',
  structuredData,
  noindex = false,
}: SEOProps) => {
  const fullTitle = title.includes('Intelliwave')
    ? title
    : `${title} | Intelliwave`;
  const fullUrl = url.startsWith('http')
    ? url
    : `https://intelliwave.co.uk${url}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta
        name="robots"
        content={
          noindex
            ? 'noindex, nofollow'
            : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
        }
      />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Intelliwave" />
      <meta property="og:locale" content="en_GB" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@intelliwave" />
      <meta name="twitter:creator" content="@intelliwave" />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#2563eb" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="Intelliwave" />

      {/* Geo Tags for UK */}
      <meta name="geo.region" content="GB" />
      <meta name="geo.country" content="United Kingdom" />
      <meta name="geo.placename" content="United Kingdom" />

      {/* Business Information */}
      <meta
        name="business:contact_data:country_name"
        content="United Kingdom"
      />
      <meta name="business:contact_data:locality" content="United Kingdom" />

      {/* Security Headers */}
      <meta
        httpEquiv="Content-Security-Policy"
        content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cal.com https://formspree.io; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; connect-src 'self' https://cal.com https://formspree.io https://api.formspree.io; frame-src 'self' https://cal.com; object-src 'none'; base-uri 'self';"
      />
      <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
      <meta httpEquiv="X-Frame-Options" content="DENY" />
      <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
      <meta
        httpEquiv="Referrer-Policy"
        content="strict-origin-when-cross-origin"
      />
      <meta
        httpEquiv="Permissions-Policy"
        content="camera=(), microphone=(), geolocation=(), interest-cohort=()"
      />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
};

// Predefined SEO configurations for common pages
export const seoConfigs = {
  home: {
    title:
      'Intelliwave - Professional Web Development Services That Drive Results',
    description:
      'Professional web development services that drive results. Custom websites and applications for businesses worldwide. Fixed pricing from £1,799. 6-week delivery guarantee. Book free consultation.',
    keywords:
      'professional web development services, custom web applications, business websites, e-commerce development, web design services, drive results, professional websites, digital transformation, web development services, custom software development',
    url: '/',
  },
  pricing: {
    title: 'Web Development Pricing - Fixed Prices from £1,799 | Intelliwave',
    description:
      'Transparent web development pricing for UK businesses. Fixed prices from £1,799 for websites, £4,799 for web applications. No hidden costs, 6-week delivery guarantee.',
    keywords:
      'web development pricing, website cost UK, custom web application pricing, business website prices, web development quotes, fixed price web development',
    url: '/pricing',
  },
  about: {
    title: 'About Intelliwave - UK Web Development Company | Expert Developers',
    description:
      'Learn about Intelliwave, a UK-based web development company specializing in custom web applications, business websites, and digital transformation solutions.',
    keywords:
      'about intelliwave, UK web development company, web developers UK, custom software development team, digital transformation experts',
    url: '/company/about',
  },
  portfolio: {
    title: 'Our Work - Web Development Portfolio | Intelliwave Projects',
    description:
      'View our portfolio of web development projects including custom web applications, business websites, and e-commerce solutions built for UK businesses.',
    keywords:
      'web development portfolio, custom web applications examples, business website projects, e-commerce development portfolio, UK web development projects',
    url: '/#portfolio',
  },
  tenantos: {
    title: 'TenantOS - AI-Powered Property Management Platform | Intelliwave',
    description:
      'TenantOS is an AI-powered property management platform with intelligent tenant portal, automated maintenance tracking, and real-time financial analytics.',
    keywords:
      'property management software, tenant management system, property management platform, AI property management, real estate software, property management dashboard',
    url: '/portfolio/tenantos',
  },
  snagwise: {
    title: 'SnagWise - AI-Powered Property Inspection Service | Intelliwave',
    description:
      'SnagWise provides AI-powered property inspection services with qualified surveyors, comprehensive reporting, and instant customer support for UK property buyers.',
    keywords:
      'property inspection service, snagging survey, property survey UK, new build inspection, property defects, building survey, property inspection report',
    url: '/demo/snagwise',
  },
};
