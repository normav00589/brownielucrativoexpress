import { UrgencyBanner } from "@/components/UrgencyBanner";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionDivider } from "@/components/SectionDivider";
import { lazy, Suspense, memo, useState, useCallback, useRef } from "react";
import { useOfferExitIntent } from "@/hooks/useOfferExitIntent";

const FooterSection = lazy(() => import("@/components/sections/FooterSection").then(m => ({ default: m.FooterSection })));
const DownsellModal = lazy(() => import("@/components/DownsellModal").then(m => ({ default: m.DownsellModal })));

// Lazy load all sections below hero - ultra aggressive chunking
const OfferSection = lazy(() => import("@/components/sections/OfferSection").then(m => ({
  default: m.OfferSection
})));
const SecretSection = lazy(() => import("@/components/sections/SecretSection").then(m => ({
  default: m.SecretSection
})));
const RecipesSection = lazy(() => import("@/components/sections/RecipesSection").then(m => ({
  default: m.RecipesSection
})));
const PricingSection = lazy(() => import("@/components/sections/PricingSection").then(m => ({
  default: m.PricingSection
})));
const BonusSection = lazy(() => import("@/components/sections/BonusSection").then(m => ({
  default: m.BonusSection
})));
const TestimonialsSection = lazy(() => import("@/components/sections/TestimonialsSection").then(m => ({
  default: m.TestimonialsSection
})));
const GuaranteeSection = lazy(() => import("@/components/sections/GuaranteeSection").then(m => ({
  default: m.GuaranteeSection
})));
const FAQSection = lazy(() => import("@/components/sections/FAQSection").then(m => ({
  default: m.FAQSection
})));
const FinalCTASection = lazy(() => import("@/components/sections/FinalCTASection").then(m => ({
  default: m.FinalCTASection
})));
const BrownieGallerySection = lazy(() => import("@/components/sections/BrownieGallerySection").then(m => ({
  default: m.BrownieGallerySection
})));

// Deferred - only after user engagement
const SaleNotification = lazy(() => import("@/components/SaleNotification").then(m => ({
  default: m.SaleNotification
})));

// Ultra-minimal placeholder - no animation, just height reservation
const SectionPlaceholder = memo(({
  height = 400
}: {
  height?: number;
}) => <div style={{
  minHeight: height
}} aria-hidden="true" />);

// Wrapper for PricingSection with exit intent
const PricingSectionWithExitIntent = memo(({
  onExitIntent
}: {
  onExitIntent: () => void;
}) => {
  const {
    sectionRef
  } = useOfferExitIntent({
    minTimeInSection: 3000,
    onExitIntent
  });
  return <div ref={sectionRef as React.RefObject<HTMLDivElement>}>
      <PricingSection />
    </div>;
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
    (window as any).__resetUrgencyTimer?.();
    setTimeout(() => {
      modalShownThisSession.current = false;
    }, 300000);
  }, []);
  return <div className="min-h-screen">
      <UrgencyBanner onTimerExpire={handleShowDownsell} />
      <Suspense fallback={null}>
        <DownsellModal isOpen={showDownsell} onClose={handleCloseDownsell} />
      </Suspense>
      
      <main>
        {/* Hero loads immediately - critical for LCP */}
        <HeroSection />
        
        <SectionDivider variant="glow" />
        
        <Suspense fallback={<SectionPlaceholder height={500} />}>
          <OfferSection />
        </Suspense>
        
        <SectionDivider variant="diamond" />
        
        <Suspense fallback={<SectionPlaceholder height={450} />}>
          <RecipesSection />
        </Suspense>
        
        <SectionDivider variant="fade" />
        
        <Suspense fallback={<SectionPlaceholder height={350} />}>
          <BrownieGallerySection />
        </Suspense>
        
        <SectionDivider variant="dots" />
        
        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <BonusSection />
        </Suspense>
        
        <SectionDivider variant="diamond" />
        
        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <TestimonialsSection />
        </Suspense>
        
        <SectionDivider variant="glow" />
        
        <Suspense fallback={<SectionPlaceholder height={600} />}>
          <PricingSectionWithExitIntent onExitIntent={handleShowDownsell} />
        </Suspense>
        
        <SectionDivider variant="fade" />
        
        <Suspense fallback={<SectionPlaceholder height={350} />}>
          <GuaranteeSection />
        </Suspense>
        
        <SectionDivider variant="dots" />
        
        <Suspense fallback={<SectionPlaceholder height={500} />}>
          <FAQSection />
        </Suspense>
        
        <SectionDivider variant="diamond" />
        
        <Suspense fallback={<SectionPlaceholder height={400} />}>
          <FinalCTASection />
        </Suspense>
      </main>
      
      {/* SaleNotification - deferred until after main content */}
      <Suspense fallback={null}>
        <SaleNotification />
      </Suspense>
      
      <Suspense fallback={null}>
        <FooterSection />
      </Suspense>
    </div>;
};
export default Index;