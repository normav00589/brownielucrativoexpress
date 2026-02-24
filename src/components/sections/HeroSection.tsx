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
    <section className="relative overflow-hidden" style={{ background: 'hsl(20,20%,6%)' }}>
      <div className="container mx-auto max-w-3xl px-4 pt-6 pb-10">
        <div className="space-y-5 text-center">
          
          {/* Live Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[hsl(20,20%,12%)] border border-white/20 px-4 py-2 rounded-full">
              <span className="text-gold">👑</span>
              <span className="text-white/90 font-medium text-sm">+500 Alunas</span>
            </div>
          </div>

          {/* Chef image section - large, covering with smoky bottom fade */}
          <div className="relative w-full max-w-[380px] sm:max-w-[440px] mx-auto">
            {/* Chef image with smoky fade only at bottom */}
            <div 
              className="relative mx-auto"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.5) 80%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 0%, black 55%, rgba(0,0,0,0.5) 80%, transparent 100%)',
              }}
            >
              <img
                alt="Chef Gabriella Castro segurando bandeja de brownies gourmet"
                width={440}
                height={550}
                fetchPriority="high"
                decoding="sync"
                loading="eager"
                className="w-full h-auto object-cover"
                src={chefGabriella}
              />
            </div>

            {/* Floating brownie - top left */}
            <div
              className="absolute -top-1 -left-3 sm:-left-6 w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-2xl overflow-hidden border-[2.5px] border-white/30 transform -rotate-6 z-10"
              style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.5)' }}
            >
              <img src={brownie1} alt="Brownie gourmet" width={88} height={88} loading="eager" decoding="async" className="w-full h-full object-cover" />
            </div>

            {/* Floating brownie - top right */}
            <div
              className="absolute top-8 -right-3 sm:-right-6 w-[72px] h-[72px] sm:w-[88px] sm:h-[88px] rounded-2xl overflow-hidden border-[2.5px] border-white/30 transform rotate-6 z-10"
              style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.5)' }}
            >
              <img src={brownie2} alt="Brownie recheado" width={88} height={88} loading="eager" decoding="async" className="w-full h-full object-cover" />
            </div>

            {/* Floating brownie - bottom left */}
            <div
              className="absolute bottom-12 -left-5 sm:-left-8 w-[64px] h-[64px] sm:w-[76px] sm:h-[76px] rounded-2xl overflow-hidden border-[2.5px] border-white/30 transform rotate-3 z-10"
              style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.5)' }}
            >
              <img src={brownie3} alt="Brownie premium" width={76} height={76} loading="eager" decoding="async" className="w-full h-full object-cover" />
            </div>

            {/* Earnings badge */}
            <div className="absolute bottom-16 -right-4 sm:-right-8 bg-[hsl(20,20%,10%)]/90 border-2 border-gold/50 rounded-2xl px-3 py-2.5 transform rotate-3 z-10 backdrop-blur-sm" style={{ boxShadow: '0 6px 20px rgba(0,0,0,0.4)' }}>
              <div className="flex items-center gap-2">
                <span className="text-xl">💰</span>
                <div className="text-left">
                  <p className="text-gold font-display font-bold text-xs sm:text-sm leading-tight">R$280 em 1 dia</p>
                  <p className="text-white/60 text-[9px] sm:text-[10px] font-body">— Aluna do grupo VIP</p>
                </div>
              </div>
            </div>

            {/* Chef badge - overlapping bottom */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 z-10">
              <div className="bg-[hsl(20,20%,8%)]/95 border border-gold/50 rounded-full px-5 py-2 backdrop-blur-md" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,200,100,0.12)' }}>
                <div className="flex items-center gap-2">
                  <span className="text-[hsl(25,95%,55%)] text-sm">👩‍🍳</span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-gold font-display font-bold text-xs sm:text-sm tracking-wide">Gabriella Castro</span>
                    <span className="text-white/50 text-[9px] font-body tracking-widest uppercase">Chef Confeiteira</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <div className="pt-3">
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
