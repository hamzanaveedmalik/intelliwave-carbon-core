import { Toaster } from '@/components/ui/toaster';
import { Toaster as Sonner } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Index from './pages/Index';
import NotFound from './pages/NotFound';
import Solutions from './pages/Solutions';
import Pricing from './pages/Pricing';

// Service Pages
import CloudInfrastructure from './pages/services/CloudInfrastructure';
import Cybersecurity from './pages/services/Cybersecurity';
import DigitalTransformation from './pages/services/DigitalTransformation';
import AIAutomation from './pages/services/AIAutomation';

// Company Pages
import About from './pages/company/About';
import Careers from './pages/company/Careers';

// Legal Pages
import Privacy from './pages/legal/Privacy';
import Terms from './pages/legal/Terms';
import Security from './pages/legal/Security';
import Compliance from './pages/legal/Compliance';
import CookiePolicy from './pages/legal/CookiePolicy';

// Additional Pages
import Sitemap from './pages/Sitemap';
import Accessibility from './pages/Accessibility';
import CookieSettings from './pages/CookieSettings';
import PropertyInspectionService from './pages/PropertyInspectionService';
import TenantOS from './pages/portfolio/TenantOS';
import TenantOSCaseStudy from './pages/demo/TenantOSCaseStudy';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/pricing" element={<Pricing />} />

            {/* Service Routes */}
            <Route
              path="/services/cloud-infrastructure"
              element={<CloudInfrastructure />}
            />
            <Route path="/services/cybersecurity" element={<Cybersecurity />} />
            <Route
              path="/services/digital-transformation"
              element={<DigitalTransformation />}
            />
            <Route path="/services/ai-automation" element={<AIAutomation />} />

            {/* Company Routes */}
            <Route path="/company/about" element={<About />} />
            <Route path="/company/careers" element={<Careers />} />

            {/* Legal Routes */}
            <Route path="/legal/privacy" element={<Privacy />} />
            <Route path="/legal/terms" element={<Terms />} />
            <Route path="/legal/security" element={<Security />} />
            <Route path="/legal/compliance" element={<Compliance />} />
            <Route path="/legal/cookie-policy" element={<CookiePolicy />} />

            {/* Additional Routes */}
            <Route path="/sitemap" element={<Sitemap />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/cookie-settings" element={<CookieSettings />} />

            {/* Demo Routes */}
            <Route
              path="/demo/snagwise"
              element={<PropertyInspectionService />}
            />
            <Route
              path="/demo/tenantos-case-study"
              element={<TenantOSCaseStudy />}
            />

            {/* Portfolio Routes */}
            <Route path="/portfolio/tenantos" element={<TenantOS />} />

            {/* 404 - Keep this last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
