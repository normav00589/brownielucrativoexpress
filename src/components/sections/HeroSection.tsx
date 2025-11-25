import { Button } from "@/components/Button";
import heroBrownie from "@/assets/hero-brownie.jpg";
import browniePricing from "@/assets/brownie-pricing.webp";
import { Shield, Users, Sparkles, CheckCircle } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";
export const HeroSection = () => {
  return <section className="relative py-12 md:py-20 px-4 bg-background">
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      <div className="absolute inset-0 bg-gradient-fire opacity-40 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="font-heading sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-chocolate text-center font-extrabold text-2xl">
              Aprenda a fazer brownies irresistíveis, conquiste clientes e{" "}
              <span className="text-primary">lucre de R$ 150 até R$300 por fornada</span>,
              mesmo começando do zero.
            </h1>
            
            <p className="sm:text-xl md:text-2xl font-body text-foreground text-xl leading-relaxed font-semibold">
              🍫 <span className="text-primary font-bold">Transforme R$60 em R$300</span> a cada fornada com brownies que <span className="text-primary font-bold">seus clientes vão IMPLORAR</span> por mais – usando o revolucionário <span className="text-accent font-bold">Método 3C</span>!
            </p>
            
            {/* Brownie Image with Animation - Optimized for LCP */}
            <div className="relative w-full max-w-md mx-auto my-8 animate-fade-in">
              <div className="relative group">
                <img 
                  src={browniePricing} 
                  alt="Brownie cremoso e delicioso" 
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  width="600"
                  height="600"
                  className="w-full h-auto rounded-2xl shadow-premium border-4 border-primary/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-strong"
                />
                {/* Subtle glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center md:text-left bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-strong border-2 border-primary/30">
                <p className="text-base md:text-lg text-muted-foreground line-through mb-2">
                  de R$ 97,00 por apenas
                </p>
                <p className="sm:text-5xl md:text-6xl font-heading font-bold text-primary text-5xl drop-shadow-lg">
                  R$ 1,90
                </p>
              </div>
              
              <Button size="lg" className="w-full md:w-auto text-sm md:text-lg shadow-strong hover:shadow-premium" onClick={() => {
              trackViewContent('Hero CTA - Brownies Lucrativos', 14.90);
              document.getElementById('master-plan')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}>
                🔘 Quero Começar Meu Negócio de Brownies!
              </Button>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm max-w-md mx-auto md:mx-0">
                <div className="flex items-center gap-2 bg-gradient-card px-4 py-3 rounded-xl shadow-medium border border-primary/20 hover:shadow-strong transition-all duration-300">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-chocolate font-semibold">Acesso Vitalício</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-card px-4 py-3 rounded-xl shadow-medium border border-primary/20 hover:shadow-strong transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-chocolate font-semibold">App Exclusivo</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-card px-4 py-3 rounded-xl shadow-medium border border-primary/20 hover:shadow-strong transition-all duration-300">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-chocolate font-semibold">+5000 Membros</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-card px-4 py-3 rounded-xl shadow-medium border border-primary/20 hover:shadow-strong transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-chocolate font-semibold">14 Dias de Garantia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};