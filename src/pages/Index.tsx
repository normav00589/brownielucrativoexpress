import { UrgencyBanner } from "@/components/UrgencyBanner";
import { SaleNotification } from "@/components/SaleNotification";
import { HeroSection } from "@/components/sections/HeroSection";
import { NightmareSection } from "@/components/sections/NightmareSection";
import { DreamSection } from "@/components/sections/DreamSection";
import { OfferSection } from "@/components/sections/OfferSection";
import { SecretSection } from "@/components/sections/SecretSection";
import { RecipesSection } from "@/components/sections/RecipesSection";
import { BonusSection } from "@/components/sections/BonusSection";
import { BenefitsSection } from "@/components/sections/BenefitsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { GuaranteeSection } from "@/components/sections/GuaranteeSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { UrgencySection } from "@/components/sections/UrgencySection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { FooterSection } from "@/components/sections/FooterSection";
import { useEffect } from "react";
const Index = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://fast.wistia.com/player.js";
    script.async = true;
    document.body.appendChild(script);
    const embedScript = document.createElement("script");
    embedScript.src = "https://fast.wistia.com/embed/fazo7r4dgs.js";
    embedScript.async = true;
    embedScript.type = "module";
    document.body.appendChild(embedScript);
    return () => {
      document.body.removeChild(script);
      document.body.removeChild(embedScript);
    };
  }, []);
  return <div className="min-h-screen">
      <UrgencyBanner />
      <SaleNotification />
      
      <main>
        <HeroSection />
        
        <DreamSection />
        <OfferSection />
        
        <RecipesSection />
        <BonusSection />
        
        <PricingSection />
        <TestimonialsSection />
        <GuaranteeSection />
        <FAQSection />
        <UrgencySection />
        
        <FinalCTASection />
      </main>
      
      <FooterSection />
    </div>;
};
export default Index;