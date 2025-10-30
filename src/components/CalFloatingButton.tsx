import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export const CalFloatingButton = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('floatingButton', {
        calLink: 'intelliwave/30min',
        config: {
          layout: 'month_view',
        },
        buttonColor: '#2563eb',
        buttonTextColor: '#ffffff',
        buttonText: 'Book Free Consultation',
      });
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

  return null; // This component doesn't render anything visible - Cal.com handles the floating button
};
