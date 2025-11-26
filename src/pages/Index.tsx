import { UrgencyBanner } from "@/components/UrgencyBanner";
import { SaleNotification } from "@/components/SaleNotification";
import { HeroSection } from "@/components/sections/HeroSection";
import { DreamSection } from "@/components/sections/DreamSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { RecipesSection } from "@/components/sections/RecipesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { BrownieGallerySection } from "@/components/sections/BrownieGallerySection";
import { BonusSection } from "@/components/sections/BonusSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { useEffect } from "react";
import { trackPageView } from "@/lib/fbTracking";

const Index = () => {
  useEffect(() => {
    // Track PageView
    trackPageView();
    
    // Load Wistia scripts
    const loadWistiaScripts = () => {
      const script = document.createElement("script");
      script.src = "https://fast.wistia.com/player.js";
      script.async = true;
      document.body.appendChild(script);
      
      const embedScript = document.createElement("script");
      embedScript.src = "https://fast.wistia.com/embed/pt22c9q3y0.js";
      embedScript.async = true;
      document.body.appendChild(embedScript);
    };

    setTimeout(loadWistiaScripts, 1000);
  }, []);

  return (
    <div className="min-h-screen">
      <UrgencyBanner />
      <SaleNotification />
      
      <main>
        <HeroSection />
        <OfferSection />
        <DreamSection />
        <RecipesSection />
        <BrownieGallerySection />
        <BonusSection />
        <PricingSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      
      <FooterSection />
    </div>
  );
};

export default Index;
