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
            <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-secondary-foreground">
              Faça Brownie{" "}
              <span className="text-gold font-semibold">do jeito certo</span>, mesmo começando do zero.
            </p>
            <p className="font-body text-base sm:text-lg text-secondary-foreground">
              Sem errar{" "}
              <span className="text-gold font-semibold">forma</span>,{" "}
              <span className="text-gold font-semibold">recheio</span>,{" "}
              <span className="text-gold font-semibold">ponto</span>,{" "}
              <span className="text-gold font-semibold">preço</span> ou{" "}
              <span className="text-gold font-semibold">armazenamento</span>.
            </p>
          </div>
          
          {/* Price Block - Premium Card Style */}
          <div className="relative mx-auto max-w-sm pt-6">
            <div className="relative bg-gradient-to-br from-[hsl(20,20%,12%)] to-[hsl(20,25%,8%)] border border-gold/20 rounded-2xl p-6 shadow-lg" style={{
            boxShadow: '0 0 40px rgba(218,165,32,0.1)'
          }}>
              {/* Discount Badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-gradient-to-r from-[hsl(10,70%,50%)] to-[hsl(10,80%,45%)] text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                  🔥 -93% OFF
                </span>
              </div>
              
              {/* Original Price */}
              <div className="flex items-center justify-center gap-2 mb-3 pt-2">
                <span className="text-sm font-body text-secondary-foreground">De</span>
                <span className="text-lg line-through font-body text-secondary-foreground">R$29,00</span>
              </div>
              
              {/* Current Price */}
              <div className="text-center mb-3">
                <span className="text-sm font-body block mb-1 text-secondary-foreground">por apenas</span>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-2xl font-bold text-gold">R$</span>
                  <span className="text-6xl sm:text-7xl font-display font-black text-gold leading-none">2,90</span>
                </div>
              </div>
              
              {/* Guarantee */}
              <div className="flex items-center justify-center gap-2 text-sm text-white/70 border-t border-white/10 pt-3">
                <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
                <span className="text-secondary-foreground">Acesso vitalício + Garantia 14 dias</span>
              </div>
            </div>
          </div>
          
          {/* CTA Button - Vulcão Amber/Gold style */}
          <button className="group relative w-full md:w-auto px-10 sm:px-16 py-4 sm:py-5 text-base sm:text-lg font-bold text-[hsl(20,30%,15%)] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 font-body bg-gradient-to-r from-[hsl(38,90%,55%)] via-[hsl(42,95%,60%)] to-[hsl(38,90%,55%)]" style={{
          boxShadow: '0 4px 25px rgba(255, 200, 100, 0.35)'
        }} onClick={() => {
          trackViewContent('Hero CTA - Brownies Lucrativos', 1.99);
          document.getElementById('master-plan')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }}>
            <span className="relative flex items-center justify-center gap-2">
              🔥 EU MEREÇO APRENDER ISSO!
            </span>
          </button>
          
          {/* WhatsApp Trust Badge */}
          <div className="flex flex-col items-center gap-2 text-sm text-white/80 font-body">
            <div className="flex items-center gap-2">
              <span className="text-neon-green">📲</span>
              <span>Acesso enviado automaticamente pelo <span className="text-neon-green font-semibold">WhatsApp</span></span>
            </div>
            <span className="text-white/60 text-xs">Sem e-mails perdidos. Sem links confusos.</span>
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