import { ReactNode } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/Navigation';

interface PageLayoutProps {
  children: ReactNode;
  title?: string;
}

export const PageLayout = ({ children, title }: PageLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

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
