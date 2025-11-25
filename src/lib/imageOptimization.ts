// Image optimization utilities

// Generate blur data URL for smooth loading
export const generateBlurDataURL = (width: number = 10, height: number = 10): string => {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  if (ctx) {
    // Create a subtle gradient blur effect
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, 'rgba(234, 193, 123, 0.1)');
    gradient.addColorStop(1, 'rgba(139, 69, 19, 0.1)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  }
  
  return canvas.toDataURL();
};

// Preload critical images
export const preloadCriticalImages = (images: string[]): void => {
  images.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    link.fetchPriority = 'high';
    document.head.appendChild(link);
  });
};

// Convert image to WebP format (if supported)
export const supportsWebP = (): boolean => {
  const canvas = document.createElement('canvas');
  canvas.width = 1;
  canvas.height = 1;
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};

// Get optimized image source based on device pixel ratio
export const getOptimizedImageSrc = (src: string, dpr: number = window.devicePixelRatio): string => {
  // For high DPR displays, we might want to load higher quality images
  if (dpr > 2) {
    return src.replace(/\.(jpg|jpeg|png)$/, '@2x.$1');
  }
  return src;
};
