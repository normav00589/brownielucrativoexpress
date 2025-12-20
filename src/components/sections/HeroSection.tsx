import { Shield, Users, Sparkles, CheckCircle, Star, Zap } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-12 md:py-16 px-4 overflow-hidden">
      {/* Warm chocolate gradient background */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      {/* Subtle warm glow at top */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] -z-10 opacity-40"
        style={{
          background: 'radial-gradient(ellipse, hsl(30 70% 45% / 0.4) 0%, transparent 70%)'
        }}
      />
      
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-5 text-center">
          
          {/* Main Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] font-black tracking-tight">
            <span 
              className="block text-white drop-shadow-lg"
              style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5), 0 0 40px rgba(255,255,255,0.1)' }}
            >
              Brownies
            </span>
            <span 
              className="block bg-gradient-to-r from-gold via-caramel to-gold bg-clip-text text-transparent"
              style={{ 
                filter: 'drop-shadow(0 4px 8px rgba(200,150,50,0.4))',
                WebkitTextStroke: '1px rgba(255,215,0,0.3)'
              }}
            >
              Lucrativos
            </span>
            <span className="block mt-2">
              <span 
                className="text-white drop-shadow-lg"
                style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
              >
                em{' '}
              </span>
              <span className="relative inline-block">
                <span 
                  className="bg-gradient-to-r from-accent via-gold to-accent bg-clip-text text-transparent"
                  style={{ filter: 'drop-shadow(0 4px 8px rgba(255,180,50,0.5))' }}
                >
                  40 Minutos
                </span>
                <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-primary via-accent to-gold rounded-full shadow-lg"></span>
              </span>
            </span>
          </h1>
          
          {/* Subheadline */}
          <div className="space-y-2">
            <p className="font-body text-lg sm:text-xl md:text-2xl font-bold leading-relaxed">
              <span className="text-cream/90">Como lucrar </span>
              <span className="text-accent font-black text-xl sm:text-2xl md:text-3xl" style={{ textShadow: '0 0 20px hsl(38 95% 58% / 0.5)' }}>
                R$150–R$350
              </span>
              <span className="text-accent font-black text-xl sm:text-2xl md:text-3xl"> por dia</span>
            </p>
            <p className="font-body text-base sm:text-lg md:text-xl text-cream/80">
              com brownies que <span className="text-primary font-bold">vendem sozinhos</span> 🍫
            </p>
          </div>
          
          {/* Price Block - Warm tones */}
          <div className="space-y-2 py-4">
            <div className="flex items-center justify-center gap-3">
              <span className="text-base sm:text-lg line-through font-body text-cream/60">De R$97</span>
              <span className="bg-gradient-to-r from-primary to-caramel text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                -98% OFF
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-base sm:text-lg font-body text-cream/80">por apenas</span>
              <span 
                className="text-4xl sm:text-5xl md:text-6xl font-display font-black text-accent"
                style={{ textShadow: '0 0 30px hsl(38 95% 58% / 0.6), 0 0 60px hsl(38 95% 58% / 0.3)' }}
              >
                R$1,90
              </span>
            </div>
            <p className="text-xs sm:text-sm flex items-center justify-center gap-2 font-body text-cream/70">
              <CheckCircle className="w-4 h-4 text-accent" />
              Acesso vitalício + Garantia de 14 dias
            </p>
          </div>
          
          {/* CTA Button - Rich chocolate/caramel */}
          <button 
            className="group relative w-full md:w-auto px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-bold text-white rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105 font-body" 
            style={{
              boxShadow: '0 8px 30px rgba(200, 140, 60, 0.4), 0 4px 15px rgba(180, 100, 40, 0.3)'
            }}
            onClick={() => {
              trackViewContent('Hero CTA - Brownies Lucrativos', 1.90);
              document.getElementById('master-plan')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[hsl(20,80%,35%)] via-[hsl(28,90%,50%)] to-[hsl(35,85%,52%)]"></div>
            
            {/* Shimmer overlay - only on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            {/* Button content */}
            <span className="relative flex items-center justify-center gap-2">
              🍫 Ver Oferta Exclusiva Agora
            </span>
          </button>
          
          {/* Minimalist Social Proof */}
          <div className="flex items-center justify-center gap-4 text-xs sm:text-sm text-cream/70 font-body">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <Star className="w-3.5 h-3.5 text-accent fill-accent" />
              <span className="ml-1 font-semibold text-cream">4.9/5</span>
            </span>
            <span className="flex items-center gap-1">
              <Zap className="w-3.5 h-3.5 text-accent" />
              <span className="text-cream/80">Acesso Imediato</span>
            </span>
          </div>
          
          {/* Brownie Image */}
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto my-6">
            <div className="relative group">
              {/* Warm glow behind image */}
              <div 
                className="absolute inset-0 -z-10 rounded-2xl opacity-60"
                style={{
                  background: 'radial-gradient(circle, hsl(30 70% 40% / 0.5) 0%, transparent 70%)',
                  transform: 'scale(1.1)'
                }}
              />
              <img 
                alt="Brownie gourmet delicioso" 
                width="600" 
                height="600" 
                fetchPriority="high" 
                decoding="async" 
                loading="eager"
                className="relative w-full h-auto rounded-2xl border-2 border-primary/50" 
                style={{
                  boxShadow: '0 15px 40px rgba(120, 70, 30, 0.5), 0 8px 20px rgba(160, 100, 40, 0.3)'
                }}
                src="/lovable-uploads/7fcb8994-e661-40a5-9820-75fc8dda8741.webp" 
              />
            </div>
            
            {/* Social Proof Badge */}
            <div 
              className="absolute -bottom-3 right-2 sm:right-4 bg-gradient-to-r from-accent to-gold-light text-chocolate-dark font-bold px-4 py-2 rounded-full text-xs sm:text-sm border-2 border-cream/30 font-display"
              style={{
                boxShadow: '0 4px 15px rgba(200, 150, 60, 0.5)'
              }}
            >
              +2.400 Alunas
            </div>
          </div>
          
          {/* Empathy Copy */}
          <p className="font-body text-sm sm:text-base max-w-lg mx-auto leading-relaxed text-cream/80">
            Mesmo que você já tenha tentado{" "}
            <span className="text-primary font-semibold">mil vezes e errado</span>
            {" "}— aprenda o método <span className="font-bold text-cream">BROWNIE 3C</span> para fazer brownies{" "}
            <span className="text-caramel-light">lindos</span>,{" "}
            <span className="text-caramel-light">estáveis</span>,{" "}
            <span className="text-caramel-light">cremosos</span> e{" "}
            <span className="text-accent font-semibold">vendáveis</span>.
          </p>
          
          {/* Feature Grid - Warm chocolate theme */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 max-w-2xl mx-auto mt-6">
            <div className="bg-chocolate/40 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-primary/40">
              <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1" />
              <span className="text-cream/90 font-medium text-[10px] sm:text-xs block font-body">Acesso Vitalício</span>
            </div>
            <div className="bg-chocolate/40 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-accent/40">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1" />
              <span className="text-cream/90 font-medium text-[10px] sm:text-xs block font-body">App Exclusivo</span>
            </div>
            <div className="bg-chocolate/40 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-primary/40">
              <Users className="w-4 h-4 sm:w-5 sm:h-5 text-primary mx-auto mb-1" />
              <span className="text-cream/90 font-medium text-[10px] sm:text-xs block font-body">+2400 Alunas</span>
            </div>
            <div className="bg-chocolate/40 px-2 sm:px-3 py-2.5 sm:py-3 rounded-lg border border-accent/40">
              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-accent mx-auto mb-1" />
              <span className="text-cream/90 font-medium text-[10px] sm:text-xs block font-body">14 Dias Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
