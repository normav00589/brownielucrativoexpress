import { UrgencyBanner } from "@/components/UrgencyBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { DownsellModal } from "@/components/DownsellModal";
import { lazy, Suspense, memo, useState, useCallback, useRef, useEffect } from "react";
import { useOfferExitIntent } from "@/hooks/useOfferExitIntent";
import { useLazySection } from "@/hooks/useLazySection";

// Lazy load all sections below hero for faster initial load
const OfferSection = lazy(() => import("@/components/sections/OfferSection").then(m => ({ default: m.OfferSection })));
const SecretSection = lazy(() => import("@/components/sections/SecretSection").then(m => ({ default: m.SecretSection })));
const RecipesSection = lazy(() => import("@/components/sections/RecipesSection").then(m => ({ default: m.RecipesSection })));
const PricingSection = lazy(() => import("@/components/sections/PricingSection").then(m => ({ default: m.PricingSection })));
const BonusSection = lazy(() => import("@/components/sections/BonusSection").then(m => ({ default: m.BonusSection })));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({ default: m.TestimonialsSection })));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection").then(m => ({ default: m.GuaranteeSection })));
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(m => ({ default: m.FAQSection })));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection").then(m => ({ default: m.FinalCTASection })));
const BrownieGallerySection = lazy(() => import("@/components/sections/BrownieGallerySection").then(m => ({ default: m.BrownieGallerySection })));

// Lazy load SaleNotification for better initial performance
const SaleNotification = lazy(() => import("@/components/SaleNotification").then(m => ({ default: m.SaleNotification })));

// Minimal placeholder - no height jump
const SectionPlaceholder = memo(() => (
  <div className="min-h-[100px]" aria-hidden="true" />
));

// Smart lazy wrapper that only renders when near viewport
const LazyWrapper = memo(({ children, rootMargin = "300px" }: { children: React.ReactNode; rootMargin?: string }) => {
  const { ref, shouldRender } = useLazySection({ rootMargin });
  
  return (
    <div ref={ref}>
      {shouldRender ? children : <SectionPlaceholder />}
    </div>
  );
});

LazyWrapper.displayName = 'LazyWrapper';

// Wrapper component for PricingSection with exit intent
const PricingSectionWithExitIntent = memo(({ onExitIntent }: { onExitIntent: () => void }) => {
  const { sectionRef } = useOfferExitIntent({
    minTimeInSection: 3000,
    onExitIntent,
  });

  return (
    <div ref={sectionRef as React.RefObject<HTMLDivElement>}>
      <PricingSection />
    </div>
  );
});

PricingSectionWithExitIntent.displayName = 'PricingSectionWithExitIntent';

const Index = () => {
  const [showDownsell, setShowDownsell] = useState(false);
  const modalShownThisSession = useRef(false);

  // Preload critical chunks after initial render
  useEffect(() => {
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(() => {
        // Preload first few sections
        import("@/components/sections/OfferSection");
        import("@/components/sections/SecretSection");
      }, { timeout: 2000 });
    } else {
      setTimeout(() => {
        import("@/components/sections/OfferSection");
        import("@/components/sections/SecretSection");
      }, 1000);
    }
  }, []);

  const handleShowDownsell = useCallback(() => {
    if (modalShownThisSession.current) return;
    modalShownThisSession.current = true;
    setShowDownsell(true);
  }, []);

  const handleCloseDownsell = useCallback(() => {
    setShowDownsell(false);
    (window as any).__resetUrgencyTimer?.();
    setTimeout(() => {
      modalShownThisSession.current = false;
    }, 300000);
  }, []);

  return (
    <div className="min-h-screen">
      <UrgencyBanner onTimerExpire={handleShowDownsell} />
      
      {/* Lazy load SaleNotification - non-critical */}
      <Suspense fallback={null}>
        <SaleNotification />
      </Suspense>
      
      <DownsellModal isOpen={showDownsell} onClose={handleCloseDownsell} />
      
      <main>
        {/* Hero loads immediately - critical */}
        <HeroSection />
        
        {/* First sections - load early with smaller margin */}
        <LazyWrapper rootMargin="400px">
          <Suspense fallback={<SectionPlaceholder />}>
            <OfferSection />
          </Suspense>
        </LazyWrapper>
        
        <LazyWrapper rootMargin="350px">
          <Suspense fallback={<SectionPlaceholder />}>
            <SecretSection />
          </Suspense>
        </LazyWrapper>
        
        <LazyWrapper rootMargin="300px">
          <Suspense fallback={<SectionPlaceholder />}>
            <RecipesSection />
          </Suspense>
        </LazyWrapper>
        
        <LazyWrapper rootMargin="250px">
          <Suspense fallback={<SectionPlaceholder />}>
            <BrownieGallerySection />
          </Suspense>
        </LazyWrapper>
        
        <LazyWrapper rootMargin="250px">
          <Suspense fallback={<SectionPlaceholder />}>
            <BonusSection />
          </Suspense>
        </LazyWrapper>
        
        <LazyWrapper rootMargin="300px">
          <Suspense fallback={<SectionPlaceholder />}>
            <PricingSectionWithExitIntent onExitIntent={handleShowDownsell} />
          </Suspense>
        </LazyWrapper>
        
        <LazyWrapper rootMargin="200px">
          <Suspense fallback={<SectionPlaceholder />}>
            <TestimonialsSection />
          </Suspense>
        </LazyWrapper>
        
        <LazyWrapper rootMargin="200px">
          <Suspense fallback={<SectionPlaceholder />}>
            <GuaranteeSection />
          </Suspense>
        </LazyWrapper>
        
        <LazyWrapper rootMargin="200px">
          <Suspense fallback={<SectionPlaceholder />}>
            <FAQSection />
          </Suspense>
        </LazyWrapper>
        
        <LazyWrapper rootMargin="200px">
          <Suspense fallback={<SectionPlaceholder />}>
            <FinalCTASection />
          </Suspense>
        </LazyWrapper>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
