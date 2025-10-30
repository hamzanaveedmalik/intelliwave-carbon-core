import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Check, Star } from 'lucide-react';

interface PricingCardProps {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: string[];
  ctaText: string;
  isPopular?: boolean;
  onCtaClick: () => void;
}

export const PricingCard = ({
  title,
  price,
  originalPrice,
  description,
  features,
  ctaText,
  isPopular = false,
  onCtaClick,
}: PricingCardProps) => {
  return (
    <Card
      className={`relative p-8 ${
        isPopular ? 'border-primary shadow-lg scale-105' : ''
      }`}
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-primary text-primary-foreground px-4 py-1">
            <Star className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}

      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        <div className="flex items-baseline justify-center gap-2">
          {originalPrice && (
            <span className="text-lg text-muted-foreground line-through">
              {originalPrice}
            </span>
          )}
          <span className="text-4xl font-bold text-primary">{price}</span>
        </div>

        {originalPrice && (
          <div className="mt-2">
            <Badge variant="destructive" className="text-sm">
              40% OFF - Limited Time
            </Badge>
          </div>
        )}
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        className={`w-full ${
          isPopular ? 'bg-primary hover:bg-primary-hover' : ''
        }`}
        onClick={onCtaClick}
      >
        {ctaText}
      </Button>
    </Card>
  );
};
