import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '@/assets/intelliwave-logo.svg';
import { Footer } from '@/components/Footer';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <a
              href="/"
              className="flex items-center gap-3 cursor-pointer group"
            >
              <img
                src={logo}
                alt="Intelliwave"
                className="h-8 w-auto group-hover:opacity-80 transition-opacity"
              />
              <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Intelliwave
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-8">
              <a
                href="/#services"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
              </a>
              <a
                href="/#about"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </a>
              <a
                href="/#contact"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </nav>
            <Button
              onClick={() => navigate('/')}
              className="bg-primary text-primary-foreground hover:bg-primary-hover"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {title && (
          <div className="bg-gradient-hero py-12 lg:py-16">
            <div className="container mx-auto px-6 lg:px-8">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-4 text-primary-foreground hover:text-primary-foreground/80 hover:bg-primary-foreground/10"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
              <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                {title}
              </h1>
            </div>
          </div>
        )}
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
