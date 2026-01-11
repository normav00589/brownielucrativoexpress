import { useState, useEffect, useRef, memo, CSSProperties } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
  quality?: 'low' | 'medium' | 'high';
}

// Blur placeholder for loading state
const blurDataURL = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJoc2woMjAsMTUlLDEwJSkiLz48L3N2Zz4=';

export const OptimizedImage = memo(({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  sizes = '100vw',
  width,
  height,
  style,
  quality = 'high',
}: OptimizedImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const [currentSrc, setCurrentSrc] = useState<string | undefined>(undefined);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      setCurrentSrc(src);
      return;
    }

    // Use native lazy loading for non-priority images
    if ('loading' in HTMLImageElement.prototype) {
      setIsInView(true);
      setCurrentSrc(src);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            setCurrentSrc(src);
            observer.disconnect();
          }
        });
      },
      { rootMargin: '300px' } // Increased margin for earlier loading
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, src]);

  // Update src when it changes
  useEffect(() => {
    if (isInView) {
      setCurrentSrc(src);
    }
  }, [src, isInView]);

  const aspectRatioStyle = width && height ? { aspectRatio: `${width}/${height}` } : undefined;

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={{ ...aspectRatioStyle, ...style }}
    >
      {/* Blur placeholder */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-[hsl(20,15%,10%)] animate-pulse"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: 'cover',
            filter: 'blur(10px)',
            transform: 'scale(1.1)',
          }}
        />
      )}
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
        sizes={sizes}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        onLoad={() => setIsLoaded(true)}
        // Native browser optimization hints
        style={{
          contentVisibility: priority ? 'visible' : 'auto',
          containIntrinsicSize: width && height ? `${width}px ${height}px` : undefined,
        }}
      />
    </div>
  );
});

OptimizedImage.displayName = 'OptimizedImage';

// Preload helper for critical images
export const preloadImage = (src: string) => {
  const link = document.createElement('link');
  link.rel = 'preload';
  link.as = 'image';
  link.href = src;
  link.fetchPriority = 'high';
  document.head.appendChild(link);
};
