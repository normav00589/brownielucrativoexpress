import { Shield, Users, Sparkles, CheckCircle, Star, Zap, ArrowRight } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";
import gabriellaImage from "@/assets/gabriella-castro.webp";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-12 md:py-16 px-4 bg-background overflow-hidden">
      {/* Warm chocolate gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60 -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-chocolate/30 blur-[120px] rounded-full -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-accent/20 blur-[100px] rounded-full -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            {/* Authority Badge */}
            <div className="inline-flex items-center gap-2 bg-card/60 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-2">
              <span className="text-accent text-sm font-medium font-body">Por Gabriella Castro</span>
              <span className="text-foreground/60 text-sm font-body">• Confeiteira Profissional</span>
            </div>
            
            {/* Main Headline - Serif elegante */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] font-bold tracking-tight">
              <span className="text-foreground">Transforme Sua Cozinha em Uma </span>
              <span className="text-accent">Fábrica de Brownies Lucrativos</span>
            </h1>
            
            {/* Subheadline */}
            <div className="space-y-2">
              <p className="font-body text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
                <span className="text-foreground/90">Aprenda o </span>
                <span className="text-chocolate-light font-bold">Método 3C</span>
                <span className="text-foreground/90"> e lucre </span>
                <span className="text-accent font-bold text-2xl sm:text-3xl">R$150-350/dia</span>
              </p>
              <p className="font-body text-base sm:text-lg text-foreground/70">
                vendendo brownies <span className="text-accent font-semibold">irresistíveis</span> que se vendem sozinhos
              </p>
            </div>
            
            {/* Price Block - Elegante */}
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-5 space-y-3">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-base sm:text-lg line-through font-body text-foreground/40">De R$97</span>
                <span className="bg-accent text-accent-foreground text-xs sm:text-sm font-bold px-3 py-1 rounded-full">
                  Oferta Especial
                </span>
              </div>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <span className="text-base sm:text-lg font-body text-foreground/80">por apenas</span>
                <span className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-accent">
                  R$1,90
                </span>
              </div>
              <p className="text-sm flex items-center justify-center lg:justify-start gap-2 font-body text-foreground/70">
                <CheckCircle className="w-4 h-4 text-accent" />
                Acesso vitalício + Garantia de 14 dias
              </p>
            </div>
            
            {/* CTA Button - Cherry Red */}
            <button 
              className="group relative w-full lg:w-auto px-10 py-5 text-lg font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-cherry font-body" 
              onClick={() => {
                trackViewContent('Hero CTA - Brownies Lucrativos', 1.90);
                document.getElementById('master-plan')?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'center'
                });
              }}
            >
              {/* Cherry gradient background */}
              <div className="absolute inset-0 bg-gradient-cta"></div>
              
              {/* Shimmer overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Button content */}
              <span className="relative flex items-center justify-center gap-3">
                Quero Minhas Receitas Agora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            
            {/* Social Proof */}
            <div className="flex items-center justify-center lg:justify-start gap-6 text-sm text-foreground/70 font-body">
              <span className="flex items-center gap-1">
                <Star className="w-4 h-4 text-accent fill-accent" />
                <Star className="w-4 h-4 text-accent fill-accent" />
                <Star className="w-4 h-4 text-accent fill-accent" />
                <Star className="w-4 h-4 text-accent fill-accent" />
                <Star className="w-4 h-4 text-accent fill-accent" />
                <span className="ml-1.5 font-semibold text-foreground">4.9/5</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-accent" />
                <span className="text-foreground/80">+2.400 alunas</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-accent" />
                <span className="text-foreground/80">Acesso Imediato</span>
              </span>
            </div>
          </div>
          
          {/* Right Column - Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Gabriella Image */}
              <div className="relative group">
                {/* Warm glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-br from-chocolate/40 to-accent/30 blur-3xl opacity-60 rounded-full scale-90"></div>
                
                <img 
                  src={gabriellaImage}
                  alt="Gabriella Castro - Confeiteira especialista em brownies lucrativos" 
                  width="500" 
                  height="600" 
                  fetchPriority="high" 
                  decoding="async" 
                  className="relative w-full h-auto rounded-3xl shadow-premium border-2 border-accent/20 transition-all duration-500 group-hover:scale-[1.01]" 
                />
                
                {/* Floating brownie badge */}
                <div className="absolute -bottom-4 -left-4 bg-card/90 backdrop-blur-sm border border-accent/30 rounded-2xl p-4 shadow-lg">
                  <img 
                    src="/lovable-uploads/7fcb8994-e661-40a5-9820-75fc8dda8741.webp"
                    alt="Brownie gourmet"
                    className="w-20 h-20 rounded-xl object-cover"
                  />
                </div>
                
                {/* Stats badge */}
                <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground font-bold px-5 py-3 rounded-2xl shadow-gold text-sm font-body">
                  <span className="block text-lg font-display">+2.400</span>
                  <span className="text-xs opacity-90">Alunas Satisfeitas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Empathy Copy */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="font-body text-base sm:text-lg leading-relaxed text-foreground/80">
            Mesmo que você já tenha tentado{" "}
            <span className="text-chocolate-light font-semibold">mil vezes e errado</span>
            {" "}— aprenda o método <span className="font-bold text-foreground">BROWNIE 3C</span> para fazer brownies{" "}
            <span className="text-accent">lindos</span>,{" "}
            <span className="text-accent">estáveis</span>,{" "}
            <span className="text-accent">cremosos</span> e{" "}
            <span className="text-chocolate-light font-semibold">altamente vendáveis</span>.
          </p>
        </div>
        
        {/* Feature Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-8">
          <div className="bg-card/50 backdrop-blur-sm px-4 py-4 rounded-xl border border-border hover:border-accent/40 transition-colors duration-300 text-center">
            <Shield className="w-6 h-6 text-accent mx-auto mb-2" />
            <span className="text-foreground/90 font-medium text-sm block font-body">Acesso Vitalício</span>
          </div>
          <div className="bg-card/50 backdrop-blur-sm px-4 py-4 rounded-xl border border-border hover:border-accent/40 transition-colors duration-300 text-center">
            <Sparkles className="w-6 h-6 text-accent mx-auto mb-2" />
            <span className="text-foreground/90 font-medium text-sm block font-body">App Exclusivo</span>
          </div>
          <div className="bg-card/50 backdrop-blur-sm px-4 py-4 rounded-xl border border-border hover:border-accent/40 transition-colors duration-300 text-center">
            <Users className="w-6 h-6 text-accent mx-auto mb-2" />
            <span className="text-foreground/90 font-medium text-sm block font-body">+2400 Alunas</span>
          </div>
          <div className="bg-card/50 backdrop-blur-sm px-4 py-4 rounded-xl border border-border hover:border-accent/40 transition-colors duration-300 text-center">
            <CheckCircle className="w-6 h-6 text-accent mx-auto mb-2" />
            <span className="text-foreground/90 font-medium text-sm block font-body">14 Dias Garantia</span>
          </div>
        </div>
      </div>
    </section>
  );
};
