import { useEffect } from 'react';

export const useWebVitals = () => {
  useEffect(() => {
    // Only run in production
    if (typeof window === 'undefined' || process.env.NODE_ENV !== 'production') return;

    const reportWebVitals = async () => {
      try {
        const { onCLS, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');

        const sendToAnalytics = (metric: any) => {
          // Send to Vercel Analytics if available
          if (window.va) {
            window.va('event', 'Web Vitals', {
              name: metric.name,
              value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
              rating: metric.rating,
            });
          }
        };

        onCLS(sendToAnalytics);
        onFCP(sendToAnalytics);
        onLCP(sendToAnalytics);
        onTTFB(sendToAnalytics);
        onINP(sendToAnalytics);
      } catch (error) {
        // Silently fail if web-vitals fails to load
        console.error('Failed to load web-vitals:', error);
      }
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
