import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

interface BookingButtonProps {
  variant?: 'default' | 'outline' | 'secondary';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

export const BookingButton = ({
  variant = 'default',
  size = 'default',
  className = '',
}: BookingButtonProps) => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#2563eb',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      data-cal-namespace="30min"
      data-cal-link="intelliwave/30min"
      data-cal-config='{"layout":"month_view"}'
    >
      <Calendar className="mr-2 h-4 w-4" />
      Book Free Consultation
    </Button>
  );
};
