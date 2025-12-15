import { Shield, Users, Sparkles, CheckCircle, Star, Zap } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-12 md:py-16 px-4 bg-background overflow-hidden">
      {/* Gradient background with rose/caramel glow */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 blur-[120px] rounded-full -z-10" />
      <div className="absolute top-1/3 right-0 w-[300px] h-[300px] bg-accent/10 blur-[100px] rounded-full -z-10" />
      
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-5 text-center">
          
          {/* Main Headline */}
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
          
          {/* Subheadline */}
          <div className="space-y-2">
            <p className="font-body text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
              <span className="text-white/90">Como lucrar </span>
              <span className="text-accent font-black text-xl sm:text-2xl md:text-3xl">
                R$150–R$350
              </span>
              <span className="text-accent font-black text-xl sm:text-2xl md:text-3xl"> por dia</span>
            </p>
            <p className="font-body text-base sm:text-lg md:text-xl text-white/80">
              com brownies que <span className="text-primary font-bold">vendem sozinhos</span> ✨
            </p>
          </div>
          
          {/* Price Block */}
          <div className="space-y-2 py-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-base sm:text-lg line-through font-body text-white/50">De R$97</span>
              <span className="bg-primary text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full animate-pulse">
                -98% OFF
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-base sm:text-lg font-body text-white/70">por apenas</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-accent">
                R$1,90
              </span>
            </div>
            <p className="text-xs sm:text-sm flex items-center justify-center gap-2 font-body text-white/70">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Acesso vitalício + Garantia de 14 dias
            </p>
          </div>
          
          {/* CTA Button */}
          <button 
            className="group relative w-full md:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-background rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 shadow-caramel font-body" 
            onClick={() => {
              trackViewContent('Hero CTA - Brownies Lucrativos', 1.90);
              document.getElementById('master-plan')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-cta"></div>
            
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            {/* Button content */}
            <span className="relative flex items-center justify-center gap-2 text-background font-bold">
              🍫 Ver Oferta Exclusiva Agora
            </span>
          </button>
          
          {/* Minimalist Social Proof */}
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-white/70 font-body">
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
              <span className="text-white/80">Acesso Imediato</span>
            </span>
          </div>
          
          {/* Brownie Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto my-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-full"></div>
              <img 
                alt="Brownie gourmet delicioso" 
                width="600" 
                height="600" 
                fetchPriority="high" 
                decoding="async" 
                className="relative w-full h-auto rounded-2xl shadow-2xl border-2 border-accent/30 transition-all duration-500 group-hover:scale-[1.02]" 
                src="/lovable-uploads/7fcb8994-e661-40a5-9820-75fc8dda8741.webp" 
              />
            </div>
            
            {/* Social Proof Badge */}
            <div className="absolute -bottom-3 right-2 sm:right-4 bg-accent text-background font-bold px-4 py-2 rounded-full shadow-lg text-xs sm:text-sm border-2 border-background font-display">
              +2.400 Alunas
            </div>
          </div>
          
          {/* Empathy Copy */}
          <p className="font-body text-sm sm:text-base max-w-lg mx-auto leading-relaxed text-white/80">
            Mesmo que você já tenha tentado{" "}
            <span className="text-primary font-semibold">mil vezes e errado</span>
            {" "}— aprenda o método <span className="font-bold text-white">BROWNIE 3C</span> para fazer brownies{" "}
            <span className="text-primary">lindos</span>,{" "}
            <span className="text-primary">estáveis</span>,{" "}
            <span className="text-primary">cremosos</span> e{" "}
            <span className="text-accent font-semibold">vendáveis</span>.
          </p>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6">
            <div className="bg-white/5 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-primary/30 hover:border-primary/50 transition-colors duration-300">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1" />
              <span className="text-white/90 font-medium text-[10px] sm:text-xs block font-body">Acesso Vitalício</span>
            </div>
            <div className="bg-white/5 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-accent/30 hover:border-accent/50 transition-colors duration-300">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1" />
              <span className="text-white/90 font-medium text-[10px] sm:text-xs block font-body">App Exclusivo</span>
            </div>
            <div className="bg-white/5 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-primary/30 hover:border-primary/50 transition-colors duration-300">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1" />
              <span className="text-white/90 font-medium text-[10px] sm:text-xs block font-body">+2400 Alunas</span>
            </div>
            <div className="bg-white/5 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-accent/30 hover:border-accent/50 transition-colors duration-300">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1" />
              <span className="text-white/90 font-medium text-[10px] sm:text-xs block font-body">14 Dias Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};