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
            <span className="text-foreground drop-shadow-sm">Brownies </span>
            <span className="text-primary font-black drop-shadow-[0_2px_10px_rgba(232,140,150,0.4)]">Lucrativos</span>
            <br />
            <span className="text-foreground drop-shadow-sm">em </span>
            <span className="relative inline-block">
              <span className="text-accent font-black drop-shadow-[0_2px_10px_rgba(210,160,100,0.5)]">40 Minutos</span>
              <span className="absolute -bottom-1 left-0 w-full h-1.5 bg-gradient-to-r from-accent to-accent/60 rounded-full shadow-md"></span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <div className="space-y-3">
            <p className="font-body text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
              <span className="text-foreground">Como lucrar </span>
              <span className="text-accent font-black text-xl sm:text-2xl md:text-3xl drop-shadow-[0_2px_8px_rgba(210,160,100,0.4)]">
                R$150–R$350
              </span>
              <span className="text-accent font-black text-xl sm:text-2xl md:text-3xl"> por dia</span>
            </p>
            <p className="font-body text-base sm:text-lg md:text-xl text-foreground/90">
              com brownies que <span className="text-primary font-bold">vendem sozinhos</span> ✨
            </p>
          </div>
          
          {/* Price Block */}
          <div className="space-y-3 py-5 bg-card/50 rounded-2xl border border-border/50 px-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3">
              <span className="text-base sm:text-lg line-through font-body text-muted-foreground">De R$97</span>
              <span className="bg-gradient-to-r from-primary to-rose-dark text-primary-foreground text-xs sm:text-sm font-bold px-4 py-1.5 rounded-full animate-pulse shadow-md">
                -98% OFF
              </span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <span className="text-base sm:text-lg font-body text-foreground/80">por apenas</span>
              <span className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-accent drop-shadow-[0_4px_15px_rgba(210,160,100,0.5)]">
                R$1,90
              </span>
            </div>
            <p className="text-sm sm:text-base flex items-center justify-center gap-2 font-body text-foreground/90">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span className="font-medium">Acesso vitalício + Garantia de 14 dias</span>
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
          <div className="flex items-center justify-center gap-5 text-sm sm:text-base font-body">
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 text-gold fill-gold drop-shadow-sm" />
              <Star className="w-4 h-4 text-gold fill-gold drop-shadow-sm" />
              <Star className="w-4 h-4 text-gold fill-gold drop-shadow-sm" />
              <Star className="w-4 h-4 text-gold fill-gold drop-shadow-sm" />
              <Star className="w-4 h-4 text-gold fill-gold drop-shadow-sm" />
              <span className="ml-1.5 font-bold text-foreground">4.9/5</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-foreground/90 font-medium">Acesso Imediato</span>
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
          <p className="font-body text-base sm:text-lg max-w-lg mx-auto leading-relaxed text-foreground/90">
            Mesmo que você já tenha tentado{" "}
            <span className="text-primary font-bold">mil vezes e errado</span>
            {" "}— aprenda o método <span className="font-black text-foreground">BROWNIE 3C</span> para fazer brownies{" "}
            <span className="text-primary font-semibold">lindos</span>,{" "}
            <span className="text-primary font-semibold">estáveis</span>,{" "}
            <span className="text-primary font-semibold">cremosos</span> e{" "}
            <span className="text-accent font-bold">vendáveis</span>.
          </p>
          
          {/* Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mt-6">
            <div className="bg-card/60 px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-primary/40 hover:border-primary/70 hover:bg-card/80 transition-all duration-300">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-1.5 drop-shadow-sm" />
              <span className="text-foreground font-semibold text-xs sm:text-sm block font-body">Acesso Vitalício</span>
            </div>
            <div className="bg-card/60 px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-accent/40 hover:border-accent/70 hover:bg-card/80 transition-all duration-300">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto mb-1.5 drop-shadow-sm" />
              <span className="text-foreground font-semibold text-xs sm:text-sm block font-body">App Exclusivo</span>
            </div>
            <div className="bg-card/60 px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-primary/40 hover:border-primary/70 hover:bg-card/80 transition-all duration-300">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-primary mx-auto mb-1.5 drop-shadow-sm" />
              <span className="text-foreground font-semibold text-xs sm:text-sm block font-body">+2400 Alunas</span>
            </div>
            <div className="bg-card/60 px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-accent/40 hover:border-accent/70 hover:bg-card/80 transition-all duration-300">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-accent mx-auto mb-1.5 drop-shadow-sm" />
              <span className="text-foreground font-semibold text-xs sm:text-sm block font-body">14 Dias Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};