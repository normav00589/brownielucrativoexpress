import { UrgencyBanner } from "@/components/UrgencyBanner";
import { SaleNotification } from "@/components/SaleNotification";
import { HeroSection } from "@/components/sections/HeroSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { useEffect, lazy, Suspense, memo } from "react";
import { trackPageView } from "@/lib/fbTracking";

// Lazy load all sections below hero for faster initial load
const OfferSection = lazy(() => import("@/components/sections/OfferSection").then(m => ({ default: m.OfferSection })));
const DreamCalculatorSection = lazy(() => import("@/components/sections/DreamCalculatorSection").then(m => ({ default: m.DreamCalculatorSection })));
const RecipesSection = lazy(() => import("@/components/sections/RecipesSection").then(m => ({ default: m.RecipesSection })));
const PricingSection = lazy(() => import("@/components/sections/PricingSection").then(m => ({ default: m.PricingSection })));
const BonusSection = lazy(() => import("@/components/sections/BonusSection").then(m => ({ default: m.BonusSection })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection").then(m => ({ default: m.GuaranteeSection })));
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })));
const BrownieGallerySection = lazy(() => import("@/components/sections/BrownieGallerySection").then(m => ({ default: m.BrownieGallerySection })));

// Minimal loading skeleton
const SectionLoader = memo(() => <div className="min-h-[200px]" />);

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
        
        <Suspense fallback={<SectionLoader />}>
          <OfferSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <DreamCalculatorSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <RecipesSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <BrownieGallerySection />
          <BonusSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <PricingSection data-section="pricing" />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
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