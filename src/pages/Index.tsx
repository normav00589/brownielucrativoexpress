import { UrgencyBanner } from "@/components/UrgencyBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { DownsellModal } from "@/components/DownsellModal";
import { useEffect, lazy, Suspense, memo, useState, useCallback, useRef } from "react";
import { trackPageView } from "@/lib/fbTracking";
import { useOfferExitIntent } from "@/hooks/useOfferExitIntent";

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

// Minimal loading skeleton
const SectionLoader = memo(() => <div className="min-h-[200px]" />);

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

  const handleShowDownsell = useCallback(() => {
    if (modalShownThisSession.current) return;
    modalShownThisSession.current = true;
    setShowDownsell(true);
  }, []);

  const handleCloseDownsell = useCallback(() => {
    setShowDownsell(false);
    // Reset the urgency timer when modal closes
    (window as any).__resetUrgencyTimer?.();
    // Allow modal to show again after some time
    setTimeout(() => {
      modalShownThisSession.current = false;
    }, 300000); // 5 minutes cooldown
  }, []);

  useEffect(() => {
    trackPageView();
  }, []);

  return (
    <div className="min-h-screen">
      <UrgencyBanner onTimerExpire={handleShowDownsell} />
      
      {/* Lazy load SaleNotification */}
      <Suspense fallback={null}>
        <SaleNotification />
      </Suspense>
      
      <DownsellModal isOpen={showDownsell} onClose={handleCloseDownsell} />
      
      <main>
        <HeroSection />
        
        <Suspense fallback={<SectionLoader />}>
          <OfferSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <SecretSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <RecipesSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <BrownieGallerySection />
          <BonusSection />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <PricingSectionWithExitIntent onExitIntent={handleShowDownsell} />
        </Suspense>
        
        <Suspense fallback={<SectionLoader />}>
          <TestimonialsSection />
          <GuaranteeSection />
          <FAQSection />
          <FinalCTASection />
        </Suspense>
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
