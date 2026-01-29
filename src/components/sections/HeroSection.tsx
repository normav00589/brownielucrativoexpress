import { memo } from "react";
import { CheckCircle, Star, Clock } from "lucide-react";
import heroBrownie from "@/assets/hero-brownie.webp";

// Track view content only on CTA click - no tracking lib import overhead
const trackViewContent = (name: string, value: number) => {
  if (typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', 'ViewContent', { content_name: name, value });
  }
};

export const HeroSection = memo(() => {
  return <section className="relative min-h-screen py-12 md:py-16 px-4 overflow-hidden bg-gradient-hero">
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-5 text-center">
          
          {/* Live Badge - Dark with golden icon */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[hsl(20,20%,12%)] border border-white/20 px-4 py-2 rounded-full">
              <span className="text-gold">👑</span>
              <span className="text-white/90 font-medium text-sm">+500 Alunas</span>
            </div>
          </div>
          
          {/* Main Headline - Reference Style */}
          <div className="relative pt-2">
            <h1 className="font-display text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-black tracking-tight">
              <span className="text-white">Brownies que </span>
              <span className="text-[hsl(25,95%,55%)]">dão certo</span>
              <span className="text-white">,</span>
              <br />
              <span className="text-white">mesmo pra quem </span>
              <br className="sm:hidden" />
              <span className="text-white">está </span>
              <span className="text-[hsl(25,95%,55%)]">começando.</span>
            </h1>
          </div>
          
          {/* Subheadline - Reference Style with underline */}
          <div className="max-w-xl mx-auto pt-4">
            <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-white">
              Receitas de brownie que{" "}
              <span className="font-bold">não dão errado</span>, prontas em até{" "}
              <span className="text-[hsl(25,95%,55%)] underline underline-offset-4 decoration-2">30 minutos</span>{" "}
              e que podem gerar{" "}
              <span className="text-[hsl(25,95%,55%)] font-semibold">R$150 a R$300 por dia</span>.
            </p>
          </div>
          
          {/* Price Block - Clean Reference Style */}
          <div className="relative mx-auto max-w-xs pt-6">
            {/* Original Price with OFF badge */}
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-base line-through text-white/50 font-body">De R$29</span>
              <span className="bg-[hsl(25,95%,55%)] text-white text-xs font-bold px-3 py-1 rounded-md">
                -93% OFF
              </span>
            </div>
            
            {/* Current Price */}
            <div className="text-center mb-4">
              <span className="text-base font-body text-white/70">por apenas </span>
              <span className="text-5xl sm:text-6xl font-display font-black text-white tracking-tight">R$ 2,90</span>
            </div>
            
            {/* Guarantee */}
            <div className="flex items-center justify-center gap-2 text-sm text-white/80">
              <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
              <span>Acesso vitalício + Garantia de 14 dias</span>
            </div>
          </div>
          
          {/* CTA Button - Reference Amber style */}
          <button className="group relative w-full md:w-auto px-10 sm:px-16 py-4 sm:py-5 text-base sm:text-lg font-bold text-[hsl(20,30%,12%)] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 font-body bg-gradient-to-r from-[hsl(38,90%,50%)] via-[hsl(42,95%,55%)] to-[hsl(38,90%,50%)]" style={{
          boxShadow: '0 4px 25px rgba(255, 180, 50, 0.4)'
        }} onClick={() => {
          trackViewContent('Hero CTA - Brownies Lucrativos', 1.99);
          document.getElementById('master-plan')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }}>
            <span className="relative flex items-center justify-center gap-2">
              🔥 QUERO COMEÇAR AGORA!
            </span>
          </button>
          
          {/* WhatsApp Trust Badge - Reference Style */}
          <div className="max-w-xs mx-auto">
            <div className="bg-[hsl(145,60%,35%)] border border-[hsl(145,70%,45%)]/50 rounded-xl px-5 py-3 flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4 text-white" />
              <span className="text-white font-medium text-sm">Acesso enviado pelo WhatsApp</span>
            </div>
            <p className="text-center text-white/50 text-xs mt-2">
              Material liberado após confirmação do pagamento
            </p>
          </div>
          
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
          
          {/* Hero Image - LCP OPTIMIZED with fixed dimensions */}
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto my-6" style={{
          aspectRatio: '1/1',
          contain: 'layout'
        }}>
            <div className="relative rounded-2xl overflow-hidden" style={{
            boxShadow: '0 0 40px rgba(255, 150, 50, 0.2)'
          }}>
              <img alt="Brownie gourmet delicioso" width={400} height={400} fetchPriority="high" decoding="sync" loading="eager" className="w-full h-full rounded-2xl object-cover" style={{
              aspectRatio: '1/1'
            }} src={heroBrownie} />
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="flex items-center justify-center gap-8 py-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gold">30</div>
              <div className="text-sm text-white/60">minutos</div>
            </div>
            <div className="w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-display font-bold text-gold">+500</div>
              <div className="text-sm text-white/60">Alunas</div>
            </div>
          </div>
          
          {/* Empathy Copy */}
          <p className="font-body text-sm sm:text-base max-w-lg mx-auto leading-relaxed italic text-secondary-foreground">
            Você já tem{" "}
            <span className="text-gold font-semibold">tudo o que precisa dentro de você</span>
            {" "}— só faltava{" "}
            <span className="text-gold font-semibold italic">a técnica certa.</span>
          </p>
        </div>
      </div>
    </section>;
});
HeroSection.displayName = 'HeroSection';