// Rendering optimization utilities

// Batch DOM updates
export const batchDOMUpdates = (updates: (() => void)[]) => {
  requestAnimationFrame(() => {
    updates.forEach(update => update());
  });
};

// Reduce layout thrashing
export const measureAndUpdate = (
  measure: () => any,
  update: (measurement: any) => void
) => {
  const measurement = measure();
  requestAnimationFrame(() => {
    update(measurement);
  });
};

// Virtual scrolling helper
export const getVisibleRange = (
  scrollTop: number,
  containerHeight: number,
  itemHeight: number,
  buffer: number = 3
) => {
  const start = Math.max(0, Math.floor(scrollTop / itemHeight) - buffer);
  const end = Math.ceil((scrollTop + containerHeight) / itemHeight) + buffer;
  return { start, end };
};

// Prevent unnecessary re-renders
export const shallowCompare = (obj1: any, obj2: any): boolean => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  return keys1.every(key => obj1[key] === obj2[key]);
};

// Content visibility optimization
export const addContentVisibility = (elements: NodeListOf<Element>) => {
  elements.forEach(el => {
    if ('contentVisibility' in document.documentElement.style) {
      (el as HTMLElement).style.contentVisibility = 'auto';
    }
  });
};
