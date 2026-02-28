import { memo } from "react";
import heroBrownie from "@/assets/hero-brownie.webp";

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
      <div className="container mx-auto max-w-3xl px-4 pt-2 pb-10">
        <div className="space-y-5 text-center">
          
          {/* Live Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-[hsl(20,20%,12%)] border border-white/20 px-4 py-2 rounded-full">
              <span className="text-gold">👑</span>
              <span className="text-white/90 font-medium text-sm">+500 Alunas</span>
            </div>
          </div>

          {/* Hero brownie image with smoky bottom fade */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] mx-auto">
            <div 
              className="relative mx-auto rounded-2xl overflow-hidden"
              style={{
                WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.4) 85%, transparent 100%)',
                maskImage: 'linear-gradient(to bottom, black 0%, black 60%, rgba(0,0,0,0.4) 85%, transparent 100%)',
              }}
            >
              <img
                alt="Brownie gourmet irresistível"
                width={400}
                height={400}
                fetchPriority="high"
                decoding="sync"
                loading="eager"
                className="w-full h-auto object-cover"
                src={heroBrownie}
              />
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
              <svg className="w-4 h-4 text-neon-green flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
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
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              <span className="text-white font-medium text-sm">Acesso enviado pelo WhatsApp</span>
            </div>
            <p className="text-center text-white/50 text-xs mt-2">
              Material liberado após confirmação do pagamento
            </p>
          </div>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 text-sm text-white/70 font-body">
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              ))}
              <span className="ml-1 font-medium text-white/80">4.9/5</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
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
