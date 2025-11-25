// Interaction optimization utilities to improve INP and FID

// Debounce for input handlers to reduce INP
export const debounceInteraction = <T extends (...args: any[]) => any>(
  func: T,
  wait: number = 150
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null;
  
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Use scheduler API for better task prioritization
export const scheduleUserInteraction = (callback: () => void) => {
  if ('scheduler' in window && 'postTask' in (window as any).scheduler) {
    (window as any).scheduler.postTask(callback, { priority: 'user-blocking' });
  } else if ('requestIdleCallback' in window) {
    requestIdleCallback(callback, { timeout: 50 });
  } else {
    requestAnimationFrame(callback);
  }
};

// Break up long tasks using yield
export const yieldToMain = () => {
  return new Promise(resolve => {
    if ('scheduler' in window && 'yield' in (window as any).scheduler) {
      (window as any).scheduler.yield().then(resolve);
    } else {
      setTimeout(resolve, 0);
    }
  });
};

// Optimize scroll performance
export const optimizeScrollHandler = (handler: () => void) => {
  let ticking = false;
  
  return () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        handler();
        ticking = false;
      });
      ticking = true;
    }
  };
};

// Passive event listener helper
export const addPassiveEventListener = (
  element: HTMLElement | Window,
  event: string,
  handler: EventListener
) => {
  element.addEventListener(event, handler, { passive: true });
};
