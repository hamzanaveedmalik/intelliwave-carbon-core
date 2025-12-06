import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import logo from '@/assets/intelliwave-logo.svg';
import { ContactForm } from '@/components/ContactForm';

export const Navigation = () => {
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-3 cursor-pointer group"
          >
            <img
              src={logo}
              alt="Intelliwave - The Intelligence Layer for Growing Businesses"
              className="h-8 w-auto group-hover:opacity-80 transition-opacity"
            />
            <span className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              Intelliwave
            </span>
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <DropdownMenu
                open={servicesDropdownOpen}
                onOpenChange={setServicesDropdownOpen}
              >
                <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 outline-none">
                  Services
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <DropdownMenuItem asChild>
                    <a href="/#services" className="cursor-pointer">
                      Custom Web Development
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/#services" className="cursor-pointer">
                      Custom Web Applications
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/#services" className="cursor-pointer">
                      E-commerce Solutions
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <DropdownMenu
                open={productsDropdownOpen}
                onOpenChange={setProductsDropdownOpen}
              >
                <DropdownMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 outline-none">
                  Products
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  <DropdownMenuItem asChild>
                    <a
                      href="/products/intelliwave-chat"
                      className="cursor-pointer flex items-center gap-2"
                    >
                      <span>Intelliwave Chat</span>
                      <Badge
                        variant="default"
                        className="bg-purple-500 text-white text-xs"
                      >
                        Featured
                      </Badge>
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/products/intelliwave-lens"
                      className="cursor-pointer"
                    >
                      Intelliwave Lens
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <a
              href="/company/about"
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
          <ContactForm
            formspreeId="mjkazjpv"
            trigger={
              <Button className="bg-primary text-primary-foreground hover:bg-primary-hover">
                Get Started
              </Button>
            }
          />
        </div>
      </div>
    </header>
  );
};

