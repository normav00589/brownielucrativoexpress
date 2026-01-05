import { memo } from "react";
import { Shield, Users, Sparkles, CheckCircle, Star, Zap, Circle, Clock } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";

export const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen py-12 md:py-16 px-4 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-5 text-center">
          
          {/* Live Badge - Dark with golden icon */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[hsl(20,20%,12%)] border border-white/20 px-4 py-2 rounded-full">
              <span className="text-gold">👑</span>
              <span className="text-white/90 font-medium text-sm">+500 Alunas</span>
            </div>
          </div>
          
          {/* Main Headline - Vulcão Style */}
          <div className="relative pt-2">
            <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] font-black tracking-tight">
              <span className="text-white">O </span>
              <span className="text-gold">Brownie Perfeito</span>
              <span className="text-white"> que</span>
              <br />
              <span className="text-white">até quem </span>
              <span className="italic">
                <span className="text-gold underline decoration-gold/60 underline-offset-4 decoration-2">nunca vendeu</span>
              </span>
              <br />
              <span className="italic text-gold underline decoration-gold/60 underline-offset-4 decoration-2">consegue acertar.</span>
            </h1>
          </div>
          
          {/* Subheadline - Vulcão Style */}
          <div className="max-w-2xl mx-auto space-y-2 pt-4">
            <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-white/80">
              Faça Brownie{" "}
              <span className="text-gold font-semibold">do jeito certo</span>, mesmo começando do zero.
            </p>
            <p className="font-body text-base sm:text-lg text-white/70">
              Sem errar{" "}
              <span className="text-gold font-semibold">forma</span>,{" "}
              <span className="text-gold font-semibold">recheio</span>,{" "}
              <span className="text-gold font-semibold">ponto</span>,{" "}
              <span className="text-gold font-semibold">preço</span> ou{" "}
              <span className="text-gold font-semibold">armazenamento</span>.
            </p>
          </div>
          
          {/* Price Block - Vulcão Style */}
          <div className="relative mx-auto max-w-md pt-4">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-base line-through text-white/50 font-body">De R$29</span>
              <span className="bg-[hsl(10,70%,55%)] text-white text-xs font-bold px-3 py-1 rounded-md">
                -93% OFF
              </span>
            </div>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-base font-body text-white/70">por apenas</span>
              <span className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-gold">
                R$ 1,99
              </span>
            </div>
            <div className="flex items-center justify-center gap-2 mt-3 text-sm text-white/70">
              <CheckCircle className="w-4 h-4 text-neon-green" />
              <span>Acesso vitalício + Garantia de 14 dias</span>
            </div>
          </div>
          
          {/* CTA Button - Vulcão Amber/Gold style */}
          <button 
            className="group relative w-full md:w-auto px-10 sm:px-16 py-4 sm:py-5 text-base sm:text-lg font-bold text-[hsl(20,30%,15%)] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 font-body bg-gradient-to-r from-[hsl(38,90%,55%)] via-[hsl(42,95%,60%)] to-[hsl(38,90%,55%)]" 
            style={{
              boxShadow: '0 4px 25px rgba(255, 200, 100, 0.35)'
            }} 
            onClick={() => {
              trackViewContent('Hero CTA - Brownies Lucrativos', 1.99);
              document.getElementById('master-plan')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            <span className="relative flex items-center justify-center gap-2">
              🔥 EU MEREÇO APRENDER ISSO!
            </span>
          </button>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70 font-body">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="ml-1 font-medium text-white/80">4.9/5</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-white/60" />
              <span className="text-white/70">Acesso Imediato</span>
            </span>
          </div>
          
          {/* Hero Image - Warm glow */}
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto my-6">
            <div className="relative rounded-2xl overflow-hidden" style={{
              boxShadow: '0 0 60px rgba(255, 150, 50, 0.25), 0 0 100px rgba(200, 100, 30, 0.15)'
            }}>
              <img 
                alt="Brownie gourmet delicioso" 
                width="400" 
                height="400" 
                fetchPriority="high" 
                decoding="async" 
                loading="eager" 
                className="w-full h-auto rounded-2xl" 
                style={{ aspectRatio: '1/1' }} 
                src="/lovable-uploads/7fcb8994-e661-40a5-9820-75fc8dda8741.webp" 
              />
            </div>
          </div>
          
          {/* Empathy Copy */}
          <p className="font-body text-sm sm:text-base max-w-lg mx-auto leading-relaxed text-white/70">
            Mesmo que você já tenha tentado{" "}
            <span className="text-gold font-semibold">mil vezes e errado</span>
            {" "}— aprenda o método <span className="font-bold text-white">BROWNIE 3C</span> para fazer brownies{" "}
            <span className="text-gold font-semibold">lindos</span>,{" "}
            <span className="text-gold font-semibold">estáveis</span>,{" "}
            <span className="text-gold font-semibold">cremosos</span> e{" "}
            <span className="text-gold font-bold">vendáveis</span>.
          </p>
          
          {/* Feature Grid - Subtle borders */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mt-6">
            <div className="bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-white/10 hover:border-gold/40 transition-colors">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-gold mx-auto mb-1.5" />
              <span className="text-white/80 font-medium text-xs sm:text-sm block font-body">Acesso Vitalício</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-white/10 hover:border-gold/40 transition-colors">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-gold mx-auto mb-1.5" />
              <span className="text-white/80 font-medium text-xs sm:text-sm block font-body">App Exclusivo</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-white/10 hover:border-gold/40 transition-colors">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-gold mx-auto mb-1.5" />
              <span className="text-white/80 font-medium text-xs sm:text-sm block font-body">+500 Alunas</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-white/10 hover:border-neon-green/40 transition-colors">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-neon-green mx-auto mb-1.5" />
              <span className="text-white/80 font-medium text-xs sm:text-sm block font-body">14 Dias Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';
