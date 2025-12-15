import { Shield, Users, Sparkles, CheckCircle, Star, Zap } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen py-12 md:py-20 px-4 bg-background overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-30 -z-10" />
      
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-6 text-center">
          
          {/* Main Headline - Two Colors */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight font-extrabold">
            <span className="text-primary">Brownies </span>
            <span className="text-accent">Lucrativos</span>
            <br />
            <span className="text-white">Perfeitos em 40 Minutos</span>
          </h1>
          
          {/* Subheadline with Specific Value */}
          <p className="text-lg sm:text-xl md:text-2xl text-white font-semibold max-w-2xl mx-auto">
            Lucre de R$150 a R$350 por dia vendendo brownies que se vendem sozinhos
          </p>
          
          {/* Empathy Copy */}
          <p className="text-base md:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
            Mesmo que você nunca tenha feito um brownie na vida — aprenda o método que já transformou{" "}
            <span className="text-accent font-semibold">+2.400 alunas</span> em confeiteiras lucrativas.
          </p>
          
          {/* Price Block with Anchor */}
          <div className="space-y-3 py-6">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-white/60 text-lg line-through">De R$97</span>
              <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full">
                -98% OFF
              </span>
            </div>
            <p className="text-4xl md:text-5xl font-extrabold text-accent">
              por apenas R$1,90
            </p>
            <p className="text-white/90 text-sm md:text-base flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Acesso vitalício + Garantia de 14 dias
            </p>
          </div>
          
          {/* CTA Button */}
          <button
            className="group relative w-full md:w-auto px-10 py-5 text-lg md:text-xl font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg"
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
            
            {/* Shimmer overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            
            {/* Button content */}
            <span className="relative flex items-center justify-center gap-2">
              🍫 Ver Oferta Exclusiva Agora
            </span>
          </button>
          
          {/* Minimalist Social Proof */}
          <div className="flex items-center justify-center gap-4 text-sm text-white/80">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 font-medium">4.9/5</span>
            </span>
            <span className="text-white/40">•</span>
            <span className="flex items-center gap-1">
              <Zap className="w-4 h-4 text-accent" />
              Acesso Imediato
            </span>
          </div>
          
          {/* Brownie Image with Subtle Glow */}
          <div className="relative w-full max-w-sm mx-auto my-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 rounded-full"></div>
              <img 
                alt="Cookie recheado gourmet delicioso" 
                width="600" 
                height="600" 
                fetchPriority="high"
                decoding="async"
                className="relative w-full h-auto rounded-2xl shadow-xl border-2 border-primary/30 transition-all duration-500 group-hover:scale-102" 
                src="/lovable-uploads/7fcb8994-e661-40a5-9820-75fc8dda8741.webp" 
              />
            </div>
            
            {/* Social Proof Badge */}
            <div className="absolute -bottom-4 right-4 bg-accent text-background font-bold px-5 py-2 rounded-full shadow-lg text-sm border-2 border-background">
              +2.400 Alunos
            </div>
          </div>
          
          {/* Lighter Feature Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto mt-8">
            <div className="bg-white/5 px-3 py-3 rounded-lg border border-white/10 hover:border-primary/30 transition-colors duration-300">
              <Shield className="w-5 h-5 text-primary mx-auto mb-1.5" />
              <span className="text-white/90 font-medium text-xs block">Acesso Vitalício</span>
            </div>
            <div className="bg-white/5 px-3 py-3 rounded-lg border border-white/10 hover:border-accent/30 transition-colors duration-300">
              <Sparkles className="w-5 h-5 text-accent mx-auto mb-1.5" />
              <span className="text-white/90 font-medium text-xs block">App Exclusivo</span>
            </div>
            <div className="bg-white/5 px-3 py-3 rounded-lg border border-white/10 hover:border-primary/30 transition-colors duration-300">
              <Users className="w-5 h-5 text-primary mx-auto mb-1.5" />
              <span className="text-white/90 font-medium text-xs block">+2400 Alunas</span>
            </div>
            <div className="bg-white/5 px-3 py-3 rounded-lg border border-white/10 hover:border-accent/30 transition-colors duration-300">
              <CheckCircle className="w-5 h-5 text-accent mx-auto mb-1.5" />
              <span className="text-white/90 font-medium text-xs block">14 Dias Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
