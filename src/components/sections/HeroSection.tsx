import { memo } from "react";
import { CheckCircle, Star, Clock } from "lucide-react";
import chefGabriella from "@/assets/chef-gabriella-hero.webp";
import brownie1 from "@/assets/brownie-1.webp";
import brownie2 from "@/assets/brownie-2.webp";
import brownie3 from "@/assets/brownie-3.webp";

const trackViewContent = (name: string, value: number) => {
  if (typeof (window as any).fbq === 'function') {
    (window as any).fbq('track', 'ViewContent', {
      content_name: name,
      value
    });
  }
};

export const HeroSection = memo(() => {
  return (
    <section className="relative min-h-screen px-4 overflow-hidden" style={{ background: 'linear-gradient(180deg, hsl(20,20%,8%) 0%, hsl(15,25%,5%) 40%, hsl(20,15%,4%) 100%)' }}>
      <div className="container mx-auto max-w-3xl pt-6 pb-12">
        <div className="space-y-5 text-center">
          
          {/* Live Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[hsl(20,20%,12%)] border border-white/20 px-4 py-2 rounded-full">
              <span className="text-gold">👑</span>
              <span className="text-white/90 font-medium text-sm">+500 Alunas</span>
            </div>
          </div>

          {/* Expert Photo - smoky/dissolve effect */}
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto" style={{ contain: 'layout' }}>
            {/* Radial glow behind the chef */}
            <div 
              className="absolute inset-0 z-0"
              style={{
                background: 'radial-gradient(ellipse 80% 60% at 50% 40%, hsl(25,60%,25%,0.3) 0%, transparent 70%)',
              }}
            />
            
            {/* Main chef image with smoky dissolve edges */}
            <div className="relative z-[1]">
              <div 
                className="relative mx-auto overflow-hidden"
                style={{
                  WebkitMaskImage: 'radial-gradient(ellipse 85% 80% at 50% 40%, black 50%, transparent 100%)',
                  maskImage: 'radial-gradient(ellipse 85% 80% at 50% 40%, black 50%, transparent 100%)',
                }}
              >
                <img
                  alt="Chef Gabriella Castro segurando bandeja de brownies gourmet"
                  width={400}
                  height={500}
                  fetchPriority="high"
                  decoding="sync"
                  loading="eager"
                  className="w-full h-auto object-cover"
                  src={chefGabriella}
                />
              </div>

              {/* Floating brownie - top left */}
              <div
                className="absolute -top-2 left-0 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/25 transform -rotate-6 z-10"
                style={{ boxShadow: '0 8px 25px rgba(0,0,0,0.5)' }}
              >
                <img src={brownie1} alt="Brownie gourmet" width={96} height={96} loading="eager" decoding="async" className="w-full h-full object-cover" />
              </div>

              {/* Floating brownie - top right */}
              <div
                className="absolute top-6 -right-1 w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-white/25 transform rotate-6 z-10"
                style={{ boxShadow: '0 8px 25px rgba(0,0,0,0.5)' }}
              >
                <img src={brownie2} alt="Brownie recheado" width={96} height={96} loading="eager" decoding="async" className="w-full h-full object-cover" />
              </div>

              {/* Floating brownie - bottom left */}
              <div
                className="absolute bottom-20 -left-3 w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-2xl overflow-hidden border-2 border-white/25 transform rotate-3 z-10"
                style={{ boxShadow: '0 8px 25px rgba(0,0,0,0.5)' }}
              >
                <img src={brownie3} alt="Brownie premium" width={88} height={88} loading="eager" decoding="async" className="w-full h-full object-cover" />
              </div>

              {/* Chef name badge */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-[hsl(20,20%,8%)]/95 via-[hsl(20,25%,12%)]/95 to-[hsl(20,20%,8%)]/95 border border-gold/50 rounded-full px-6 py-2.5 backdrop-blur-md shadow-lg" style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,200,100,0.15)' }}>
                  <div className="flex items-center gap-2">
                    <span className="text-[hsl(25,95%,55%)] text-base">👩‍🍳</span>
                    <div className="flex flex-col leading-tight">
                      <span className="text-gold font-display font-bold text-sm tracking-wide">Gabriella Castro</span>
                      <span className="text-white/50 text-[10px] font-body tracking-widest uppercase">Chef Confeiteira</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Earnings badge */}
              <div className="absolute bottom-24 -right-2 sm:right-0 bg-[hsl(20,20%,10%)] border-2 border-gold/60 rounded-2xl px-4 py-3 shadow-lg transform rotate-3 z-10" style={{ boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💰</span>
                  <div className="text-left">
                    <p className="text-gold font-display font-bold text-sm leading-tight">R$280 em 1 dia</p>
                    <p className="text-white/60 text-[10px] font-body">— Aluna do grupo VIP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="relative">
            <h1 className="font-display text-[1.75rem] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.2] font-black tracking-tight">
              <span className="text-[hsl(25,95%,55%)]">Brownies Lucrativos </span>
              <span className="text-white">Mesmo Para Quem </span>
              <br className="sm:hidden" />
              <span className="text-white">Está </span>
              <span className="text-[hsl(25,95%,55%)]">Começando</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="max-w-xl mx-auto">
            <p className="font-body text-base sm:text-lg md:text-xl leading-relaxed text-white">
              Receitas de brownie que{" "}
              <span className="font-bold">não fica seca, molenga ou até mesmo aquela massa crua</span>, e fica pronta em{" "}
              <span className="text-[hsl(25,95%,55%)] underline underline-offset-4 decoration-2">30 minutos</span>{" "}
              — podendo gerar{" "}
              <span className="text-[hsl(25,95%,55%)] font-semibold">R$150 a R$300 por dia</span>.
            </p>
          </div>
          
          {/* Price Block */}
          <div className="relative mx-auto max-w-xs pt-2">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-base line-through text-white/50 font-body">De R$29</span>
              <span className="bg-[hsl(25,95%,55%)] text-white text-xs font-bold px-3 py-1 rounded-md">
                -93% OFF
              </span>
            </div>
            <div className="text-center mb-4">
              <span className="text-base font-body text-white/70">por apenas </span>
              <span className="text-5xl sm:text-6xl font-display font-black tracking-tight bg-gradient-to-r from-[hsl(38,95%,60%)] via-[hsl(25,100%,55%)] to-[hsl(38,95%,60%)] bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient-flow">R$ 2,90</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-white/80">
              <CheckCircle className="w-4 h-4 text-neon-green flex-shrink-0" />
              <span>Acesso vitalício + Garantia de 14 dias</span>
            </div>
          </div>
          
          {/* CTA Button */}
          <button
            className="group relative w-full md:w-auto px-10 sm:px-16 py-4 sm:py-5 text-base sm:text-lg font-bold text-[hsl(20,30%,12%)] rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 font-body bg-gradient-to-r from-[hsl(38,90%,50%)] via-[hsl(42,95%,55%)] to-[hsl(38,90%,50%)]"
            style={{ boxShadow: '0 4px 25px rgba(255, 180, 50, 0.4)' }}
            onClick={() => {
              trackViewContent('Hero CTA - Brownies Lucrativos', 1.99);
              document.getElementById('master-plan')?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }}
          >
            <span className="relative flex items-center justify-center gap-2">
              🔥 QUERO COMEÇAR AGORA!
            </span>
          </button>
          
          {/* WhatsApp Trust Badge */}
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
          
          {/* Empathy Copy */}
          <p className="font-body text-sm sm:text-base max-w-lg mx-auto leading-relaxed italic text-secondary-foreground">
            Você já tem{" "}
            <span className="text-gold font-semibold">tudo o que precisa dentro de você</span>
            {" "}— só faltava{" "}
            <span className="text-gold font-semibold italic">a técnica certa.</span>
          </p>
        </div>
      </div>
    </section>
  );
});
HeroSection.displayName = 'HeroSection';
