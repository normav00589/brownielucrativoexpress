import { useEffect, useRef, useState, useCallback } from 'react';

interface UseLazySectionProps {
  rootMargin?: string;
  threshold?: number;
  skipIfMobile?: boolean;
}

/**
 * Smart lazy loading hook that preloads sections before they enter viewport
 * Optimized for mobile performance
 */
export const useLazySection = ({
  rootMargin = '200px',
  threshold = 0,
  skipIfMobile = false,
}: UseLazySectionProps = {}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [shouldRender, setShouldRender] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Skip lazy loading on very fast connections
    const connection = (navigator as any).connection;
    if (connection && connection.effectiveType === '4g' && connection.saveData !== true) {
      setShouldRender(true);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          // Small delay for animation trigger
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  return { ref, shouldRender, isVisible };
};

/**
 * Prefetch critical resources when user is likely to scroll
 */
export const usePrefetchOnIdle = (resources: string[]) => {
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      const id = (window as any).requestIdleCallback(() => {
        resources.forEach(url => {
          const link = document.createElement('link');
          link.rel = 'prefetch';
          link.href = url;
          link.as = url.endsWith('.js') ? 'script' : 'image';
          document.head.appendChild(link);
        });
      });
      return () => (window as any).cancelIdleCallback(id);
    }
  }, [resources]);
};
