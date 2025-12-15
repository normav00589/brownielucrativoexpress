import { Shield, Users, Sparkles, CheckCircle, Star, Zap } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-12 md:py-16 px-4 bg-background overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30 -z-10" />
      
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-5 text-center">
          
          {/* Main Headline with Visual Highlights */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-black tracking-tight">
            <span className="text-white">Brownies </span>
            <span className="text-primary">Lucrativos</span>
            <br />
            <span className="text-white">em </span>
            <span className="relative inline-block">
              <span className="text-accent">40 Minutos</span>
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-accent rounded-full"></span>
            </span>
          </h1>
          
          {/* Subheadline with Highlighted Values */}
          <p className="font-body text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
            <span className="text-white">Como lucrar </span>
            <span className="text-accent font-bold">R$150–R$350 por dia</span>
            <br />
            <span className="text-white">com brownies que vendem sozinhos</span>
          </p>
          
          {/* Price Block with Strong Anchor */}
          <div className="space-y-2 py-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-white/50 text-base sm:text-lg line-through font-body">De R$97</span>
              <span className="bg-primary text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full animate-pulse">
                -98% OFF
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-white/70 text-base sm:text-lg font-body">por apenas</span>
              <span className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-accent drop-shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                R$1,90
              </span>
            </div>
            <p className="text-white/80 text-xs sm:text-sm flex items-center justify-center gap-2 font-body">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Acesso vitalício + Garantia de 14 dias
            </p>
          </div>
          
          {/* CTA Button */}
          <button
            className="group relative w-full md:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(236,72,153,0.5)] shadow-lg font-body"
            onClick={() => {
              trackViewContent('Hero CTA - Brownies Lucrativos', 1.90);
              document.getElementById('master-plan')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600"></div>
            
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            {/* Button content */}
            <span className="relative flex items-center justify-center gap-2">
              🍫 Ver Oferta Exclusiva Agora
            </span>
          </button>
          
          {/* Minimalist Social Proof */}
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-white/70 font-body">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-semibold text-white">4.9/5</span>
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-accent" />
              <span>Acesso Imediato</span>
            </span>
          </div>
          
          {/* Brownie Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto my-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/40 to-accent/40 blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-full"></div>
              <img 
                alt="Brownie gourmet delicioso" 
                width="600" 
                height="600" 
                fetchPriority="high"
                decoding="async"
                className="relative w-full h-auto rounded-2xl shadow-2xl border-2 border-primary/40 transition-all duration-500 group-hover:scale-[1.02]" 
                src="/lovable-uploads/7fcb8994-e661-40a5-9820-75fc8dda8741.webp" 
              />
            </div>
            
            {/* Social Proof Badge */}
            <div className="absolute -bottom-3 right-2 sm:right-4 bg-accent text-background font-bold px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm border-2 border-background font-display">
              +2.400 Alunas
            </div>
          </div>
          
          {/* Empathy Copy with Highlights - Below Image */}
          <p className="font-body text-sm sm:text-base text-white/80 max-w-lg mx-auto leading-relaxed">
            Mesmo que você já tenha tentado{" "}
            <span className="text-primary font-semibold">mil vezes e errado</span>
            {" "}— aprenda o método <span className="font-bold text-white">BROWNIE 3C</span> para fazer brownies{" "}
            <span className="text-primary">lindos</span>,{" "}
            <span className="text-primary">estáveis</span>,{" "}
            <span className="text-primary">cremosos</span> e{" "}
            <span className="text-accent font-semibold">vendáveis</span>.
          </p>
          
          {/* Lighter Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6">
            <div className="bg-white/5 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-white/10 hover:border-primary/40 transition-colors duration-300">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1" />
              <span className="text-white/90 font-medium text-[10px] sm:text-xs block font-body">Acesso Vitalício</span>
            </div>
            <div className="bg-white/5 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-white/10 hover:border-accent/40 transition-colors duration-300">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1" />
              <span className="text-white/90 font-medium text-[10px] sm:text-xs block font-body">App Exclusivo</span>
            </div>
            <div className="bg-white/5 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-white/10 hover:border-primary/40 transition-colors duration-300">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1" />
              <span className="text-white/90 font-medium text-[10px] sm:text-xs block font-body">+2400 Alunas</span>
            </div>
            <div className="bg-white/5 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-white/10 hover:border-accent/40 transition-colors duration-300">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1" />
              <span className="text-white/90 font-medium text-[10px] sm:text-xs block font-body">14 Dias Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
