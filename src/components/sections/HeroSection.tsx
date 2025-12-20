import { memo } from "react";
import { Shield, Users, Sparkles, CheckCircle, Star, Zap } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";

export const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen py-12 md:py-16 px-4 overflow-hidden">
      {/* Simplified gradient background */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-5 text-center">
          
          {/* Main Headline - Simplified for mobile */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-black tracking-tight">
            <span className="block text-white">
              Brownies
            </span>
            <span className="block bg-gradient-to-r from-gold via-white to-caramel bg-clip-text text-transparent md:animate-text-shine">
              Lucrativos
            </span>
            <span className="block mt-2">
              <span className="text-white">em </span>
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-accent via-gold to-caramel bg-clip-text text-transparent md:animate-text-gradient">
                  40 Minutos
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-gold rounded-full"></span>
              </span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <div className="space-y-2">
            <p className="font-body text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
              <span className="text-white">Como lucrar </span>
              <span className="bg-gradient-to-r from-gold via-accent to-gold bg-clip-text text-transparent font-black text-xl sm:text-2xl md:text-3xl">
                R$150–R$350
              </span>
              <span className="text-white font-black text-xl sm:text-2xl md:text-3xl"> por dia</span>
            </p>
            <p className="font-body text-base sm:text-lg md:text-xl text-white">
              com brownies que <span className="text-accent font-bold">vendem sozinhos</span> 🍫
            </p>
          </div>
          
          {/* Price Block */}
          <div className="space-y-2 py-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-base sm:text-lg line-through font-body text-white/70">De R$97</span>
              <span className="bg-gradient-to-r from-primary to-caramel text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                -98% OFF
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-base sm:text-lg font-body text-white">por apenas</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-display font-black bg-gradient-to-r from-gold via-white to-gold bg-clip-text text-transparent md:animate-text-shine">
                R$1,90
              </span>
            </div>
            <p className="text-xs sm:text-sm flex items-center justify-center gap-2 font-body text-white">
              <CheckCircle className="w-4 h-4 text-accent" />
              Acesso vitalício + Garantia de 14 dias
            </p>
          </div>
          
          {/* CTA Button - Simplified */}
          <button 
            className="group relative w-full md:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-white rounded-xl overflow-hidden transition-transform duration-200 hover:scale-105 font-body bg-gradient-to-r from-[hsl(20,80%,35%)] via-[hsl(28,90%,50%)] to-[hsl(35,85%,52%)]" 
            style={{ boxShadow: '0 6px 20px rgba(200, 140, 60, 0.35)' }}
            onClick={() => {
              trackViewContent('Hero CTA - Brownies Lucrativos', 1.90);
              document.getElementById('master-plan')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            <span className="relative flex items-center justify-center gap-2">
              🍫 Ver Oferta Exclusiva Agora
            </span>
          </button>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-white font-body">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <span className="ml-1 font-semibold text-white">4.9/5</span>
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-accent" />
              <span className="text-white">Acesso Imediato</span>
            </span>
          </div>
          
          {/* Hero Image - Optimized with explicit dimensions */}
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto my-6">
            <div className="relative">
              <img 
                alt="Brownie gourmet delicioso" 
                width="400" 
                height="400" 
                fetchPriority="high" 
                decoding="async" 
                loading="eager"
                className="relative w-full h-auto rounded-2xl border-2 border-primary/50" 
                style={{ aspectRatio: '1/1' }}
                src="/lovable-uploads/7fcb8994-e661-40a5-9820-75fc8dda8741.webp" 
              />
            </div>
            
            {/* Badge */}
            <div className="absolute -bottom-3 right-2 sm:right-4 bg-gradient-to-r from-accent to-gold-light text-chocolate-dark font-bold px-4 py-2 rounded-full text-xs sm:text-sm border-2 border-cream/30 font-display">
              +2.400 Alunas
            </div>
          </div>
          
          {/* Empathy Copy */}
          <p className="font-body text-sm sm:text-base max-w-lg mx-auto leading-relaxed text-white">
            Mesmo que você já tenha tentado{" "}
            <span className="text-accent font-semibold">mil vezes e errado</span>
            {" "}— aprenda o método <span className="font-bold text-white">BROWNIE 3C</span> para fazer brownies{" "}
            <span className="text-caramel">lindos</span>,{" "}
            <span className="text-caramel">estáveis</span>,{" "}
            <span className="text-caramel">cremosos</span> e{" "}
            <span className="text-accent font-semibold">vendáveis</span>.
          </p>
          
          {/* Feature Grid - Simplified */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6">
            <div className="bg-chocolate/60 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-primary/40">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1" />
              <span className="text-white font-medium text-[10px] sm:text-xs block font-body">Acesso Vitalício</span>
            </div>
            <div className="bg-chocolate/60 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-accent/40">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1" />
              <span className="text-white font-medium text-[10px] sm:text-xs block font-body">App Exclusivo</span>
            </div>
            <div className="bg-chocolate/60 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-primary/40">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1" />
              <span className="text-white font-medium text-[10px] sm:text-xs block font-body">+2400 Alunas</span>
            </div>
            <div className="bg-chocolate/60 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-accent/40">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1" />
              <span className="text-white font-medium text-[10px] sm:text-xs block font-body">14 Dias Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
