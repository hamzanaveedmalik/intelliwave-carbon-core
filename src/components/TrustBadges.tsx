import { Shield, CreditCard, Lock, MapPin } from 'lucide-react';

export const TrustBadges = () => {
  const badges = [
    {
      icon: MapPin,
      text: 'UK Based',
      description: 'London, UK',
    },
    {
      icon: Shield,
      text: 'SSL Secured',
      description: '256-bit encryption',
    },
    {
      icon: CreditCard,
      text: 'Secure Payments',
      description: 'Stripe & PayPal',
    },
    {
      icon: Lock,
      text: 'GDPR Compliant',
      description: 'Data protection',
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 py-8">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <div
            key={index}
            className="flex items-center gap-2 text-sm text-muted-foreground"
          >
            <Icon className="h-5 w-5 text-primary" />
            <div>
              <div className="font-medium">{badge.text}</div>
              <div className="text-xs">{badge.description}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
