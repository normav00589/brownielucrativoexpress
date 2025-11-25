import { useEffect } from 'react';

export const useWebVitals = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return;

    const reportWebVitals = async () => {
      const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');

      const sendToAnalytics = (metric: any) => {
        // Send to Vercel Analytics
        if (window.va) {
          window.va('event', 'Web Vitals', {
            name: metric.name,
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            rating: metric.rating,
            delta: metric.delta,
            id: metric.id,
          });
        }

        // Log for debugging (only in dev)
        if (process.env.NODE_ENV === 'development') {
          console.log(metric);
        }
      };

      onCLS(sendToAnalytics);
      onFCP(sendToAnalytics);
      onLCP(sendToAnalytics);
      onTTFB(sendToAnalytics);
      onINP(sendToAnalytics);
    };

    reportWebVitals();
  }, []);
};

// Extend window type
declare global {
  interface Window {
    va?: (event: string, name: string, properties: any) => void;
  }
}
