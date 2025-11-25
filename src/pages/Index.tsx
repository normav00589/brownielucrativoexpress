import { UrgencyBanner } from "@/components/UrgencyBanner";
import { SaleNotification } from "@/components/SaleNotification";
import { HeroSection } from "@/components/sections/HeroSection";
import { NightmareSection } from "@/components/sections/NightmareSection";
import { DreamSection } from "@/components/sections/DreamSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { SecretSection } from "@/components/sections/SecretSection";
import { RecipesSection } from "@/components/sections/RecipesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { BrownieGallerySection } from "@/components/sections/BrownieGallerySection";
import { useEffect, lazy, Suspense } from "react";
import { trackPageView } from "@/lib/fbTracking";
import { useWebVitals } from "@/hooks/useWebVitals";
import { inlineCriticalCSS } from "@/lib/criticalCss";
import { preloadCriticalImages } from "@/lib/imageOptimization";
import { addResourceHints, preloadFonts } from "@/lib/resourceHints";

// Lazy load sections below the fold
const BonusSection = lazy(() => import("@/components/sections/BonusSection").then(m => ({ default: m.BonusSection })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection").then(m => ({ default: m.GuaranteeSection })));
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })));

const Index = () => {
  // Track web vitals
  useWebVitals();
  
  useEffect(() => {
    // Inline critical CSS immediately
    inlineCriticalCSS();
    
    // Preload hero image immediately for better LCP
    const heroImg = new Image();
    heroImg.fetchPriority = 'high';
    heroImg.src = new URL('../assets/brownie-pricing.webp', import.meta.url).href;
    
    // Track PageView via Conversion API
    trackPageView();
    
    // Defer all non-critical scripts significantly
    const loadNonCriticalScripts = () => {
      const script = document.createElement("script");
      script.src = "https://fast.wistia.com/player.js";
      script.async = true;
      script.defer = true;
      document.body.appendChild(script);
      
      const embedScript = document.createElement("script");
      embedScript.src = "https://fast.wistia.com/embed/pt22c9q3y0.js";
      embedScript.async = true;
      embedScript.defer = true;
      embedScript.type = "module";
      document.body.appendChild(embedScript);
    };

    // Delay scripts until page is fully loaded
    if (document.readyState === 'complete') {
      setTimeout(loadNonCriticalScripts, 3000);
    } else {
      window.addEventListener('load', () => {
        setTimeout(loadNonCriticalScripts, 3000);
      });
    }
  }, []);
  return <div className="min-h-screen">
      <UrgencyBanner />
      <SaleNotification />
      
      <main>
        <HeroSection />
        <OfferSection />
        
        <DreamSection />
        
        <RecipesSection />
        <BrownieGallerySection />
        
        <Suspense fallback={<div className="min-h-[400px] bg-background animate-pulse" />}>
          <BonusSection />
          
          <PricingSection />
          <TestimonialsSection />
          <GuaranteeSection />
          <FAQSection />
          
          <FinalCTASection />
        </Suspense>
      </main>
      
      <FooterSection />
    </div>;
};
export default Index;