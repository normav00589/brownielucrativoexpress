import { UrgencyBanner } from "@/components/UrgencyBanner";
import { SaleNotification } from "@/components/SaleNotification";
import { HeroSection } from "@/components/sections/HeroSection";
import { DreamSection } from "@/components/sections/DreamSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { RecipesSection } from "@/components/sections/RecipesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { useEffect, lazy, Suspense } from "react";
import { trackPageView } from "@/lib/fbTracking";

// Lazy load below-the-fold sections
const BonusSection = lazy(() => import("@/components/sections/BonusSection").then(m => ({ default: m.BonusSection })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection").then(m => ({ default: m.GuaranteeSection })));
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })));
const BrownieGallerySection = lazy(() => import("@/components/sections/BrownieGallerySection").then(m => ({ default: m.BrownieGallerySection })));

const Index = () => {
  useEffect(() => {
    trackPageView();
    
    // Lazy load Wistia script after user interaction or 3s delay
    let loaded = false;
    const loadWistia = () => {
      if (loaded) return;
      loaded = true;
      
      const script1 = document.createElement('script');
      script1.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = 'https://fast.wistia.com/embed/medias/m38gxr4r4u.jsonp';
      script2.async = true;
      document.body.appendChild(script2);
    };

    const timer = setTimeout(loadWistia, 3000);
    
    const events = ['scroll', 'mousemove', 'touchstart'];
    events.forEach(event => window.addEventListener(event, loadWistia, { once: true, passive: true }));

    return () => {
      clearTimeout(timer);
      events.forEach(event => window.removeEventListener(event, loadWistia));
    };
  }, []);
  return <div className="min-h-screen">
      <UrgencyBanner />
      <SaleNotification />
      
      <main>
        <HeroSection />
        <OfferSection />
        
        <DreamSection />
        
        <RecipesSection />
        
        <Suspense fallback={<div className="min-h-[400px]" />}>
          <BrownieGallerySection />
          <BonusSection />
        </Suspense>
        
        <PricingSection />
        
        <Suspense fallback={<div className="min-h-[400px]" />}>
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