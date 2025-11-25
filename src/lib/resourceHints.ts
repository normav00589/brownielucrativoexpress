// Resource hints for optimizing external resources

export const addResourceHints = (): void => {
  const hints = [
    // Preconnect to critical third-party origins (only most critical)
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: true },
    { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com', crossOrigin: false },
    { rel: 'dns-prefetch', href: 'https://fast.wistia.com', crossOrigin: false },
  ];

  hints.forEach(({ rel, href, crossOrigin }) => {
    const existing = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
    if (!existing) {
      const link = document.createElement('link');
      link.rel = rel;
      link.href = href;
      if (crossOrigin) {
        link.crossOrigin = 'anonymous';
      }
      document.head.appendChild(link);
    }
  });
};

// Prefetch resources for next navigation
export const prefetchNextPage = (urls: string[]): void => {
  urls.forEach((url) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = url;
    document.head.appendChild(link);
  });
};

// Preload critical fonts
export const preloadFonts = (): void => {
  const fonts = [
    'https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2',
    'https://fonts.gstatic.com/s/nunito/v25/XRXI3I6Li01BKofiOc5wtlZ2di8HDLshRTM.woff2',
  ];

  fonts.forEach((font) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'font';
    link.type = 'font/woff2';
    link.crossOrigin = 'anonymous';
    link.href = font;
    document.head.appendChild(link);
  });
};
