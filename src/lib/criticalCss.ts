// Extract and inline critical CSS for above-the-fold content
export const inlineCriticalCSS = (): void => {
  // Critical CSS for hero section (above the fold)
  const criticalStyles = `
    .hero-gradient {
      background: linear-gradient(135deg, #FFF8E7 0%, #EAC17B 50%, #8B4513 100%);
    }
    
    .text-glow {
      text-shadow: 0 0 20px rgba(234, 193, 123, 0.5);
    }
    
    .shadow-premium {
      box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.3);
    }
    
    .animate-fade-in {
      animation: fadeIn 0.6s ease-out;
    }
    
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalStyles;
  style.id = 'critical-css';
  
  // Insert at the beginning of head for highest priority
  document.head.insertBefore(style, document.head.firstChild);
};
