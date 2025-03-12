'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export function ClientAnalytics() {
  const [isAnalyticsEnabled, setIsAnalyticsEnabled] = useState<boolean | null>(null);

  useEffect(() => {
    const updateConsentState = () => {
      try {
        const consent = localStorage.getItem('analytics-consent');
        setIsAnalyticsEnabled(consent === 'true');
      } catch (error) {
        console.error('Error reading analytics consent:', error);
        setIsAnalyticsEnabled(false);
      }
    };

    updateConsentState();

    const consentChangeEvent = new Event('consentChange');
    window.addEventListener('consentChange', updateConsentState);

    window.addEventListener('storage', (e) => {
      if (e.key === 'analytics-consent') {
        updateConsentState();
      }
    });

    return () => {
      window.removeEventListener('consentChange', updateConsentState);
      window.removeEventListener('storage', updateConsentState);
    };
  }, []);

  return (
    <>
      {isAnalyticsEnabled === true && <Analytics />}
      {isAnalyticsEnabled === true && <SpeedInsights />}
    </>
  );
}
