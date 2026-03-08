import { memo } from "react";
import heroBrownie from "@/assets/hero-brownie-aluna.webp";

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
      <div className="container mx-auto max-w-3xl px-4 pt-2 pb-8">
        <div className="space-y-4 text-center">
          
          {/* Live Badge - Social Proof */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[hsl(var(--neon-green))]/30 bg-[hsl(var(--neon-green))]/10">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--neon-green))] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[hsl(var(--neon-green))]"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-[hsl(var(--neon-green))]">+2.400 alunas já lucrando com brownies</span>
            </div>
          </div>


          {/* Main Headline */}
          <div>
            <h1 className="text-[1.55rem] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.25] font-bold tracking-tight" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <span className="text-white">Você sempre teve </span>
              <span className="bg-gradient-to-r from-[hsl(30,100%,58%)] via-[hsl(15,92%,50%)] to-[hsl(0,85%,48%)] bg-clip-text text-transparent">mão boa para a cozinha</span>
              <span className="text-white">, só te faltava a </span>
              <span className="bg-gradient-to-r from-[hsl(25,95%,55%)] via-[hsl(12,90%,52%)] to-[hsl(0,85%,50%)] bg-clip-text text-transparent">técnica exata</span>
              <span className="text-white"> para transformar os elogios da família em </span>
              <span className="bg-gradient-to-r from-[hsl(30,100%,58%)] via-[hsl(15,92%,50%)] to-[hsl(0,85%,48%)] bg-clip-text text-transparent">dinheiro no bolso.</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="max-w-xl mx-auto">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-white/85" style={{ fontFamily: "'Montserrat', sans-serif" }}>
              Descubra o passo a passo à prova de falhas para tirar do seu forno o brownie da{" "}
              <span className="font-semibold text-white">casquinha perfeita logo na primeira tentativa</span>{" "}
              e faturar de{" "}
              <span className="text-[hsl(25,95%,55%)] font-bold">R$150 a R$300 por dia</span>, mesmo que sua cozinha seja pequena e você nunca tenha vendido um doce.
            </p>
          </div>
          
          {/* Price Block */}
          <div className="relative mx-auto max-w-xs pt-1">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-base line-through text-white/80 font-body">De R$29</span>
              <span className="bg-[hsl(25,95%,55%)] text-white text-xs font-bold px-3 py-1 rounded-md">
                -93% OFF
              </span>
            </div>
            <div className="text-center mb-3">
              <span className="text-base font-body text-white/70">por apenas </span>
              <span className="text-5xl sm:text-6xl font-display font-black tracking-tight bg-gradient-to-r from-[hsl(38,95%,60%)] via-[hsl(25,100%,55%)] to-[hsl(38,95%,60%)] bg-clip-text text-transparent">R$ 2,90</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-sm text-white/80">
              <svg className="w-4 h-4 text-neon-green flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
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
            }}>
            <span className="relative flex items-center justify-center gap-2">
              🔥 QUERO COMEÇAR AGORA!
            </span>
          </button>
          
          {/* WhatsApp Trust Badge */}
          <div className="max-w-xs mx-auto">
            <div className="bg-[hsl(145,60%,35%)] border border-[hsl(145,70%,45%)]/50 rounded-xl px-5 py-3 flex items-center justify-center gap-2">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
              <span className="text-white font-medium text-sm">Acesso enviado pelo WhatsApp</span>
            </div>
            <p className="text-center text-white text-xs mt-2">
              Material liberado após confirmação do pagamento
            </p>
          </div>
          
          {/* Social Proof */}
          <div className="flex items-center justify-center gap-6 text-sm text-white font-body">
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) =>
              <svg key={i} className="w-4 h-4 text-gold fill-gold" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
              )}
              <span className="ml-1 font-medium text-white">4.9/5</span>
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              <span className="text-white">Acesso Imediato</span>
            </span>
          </div>

          {/* Hero brownie image - after social proof like reference */}
          <div className="relative w-full max-w-sm mx-auto pt-2">
            <div className="rounded-2xl overflow-hidden border-2 border-[hsl(25,95%,50%)]">
              <img
                alt="Brownie gourmet feito por aluna do Grupo VIP"
                width={400}
                height={300}
                fetchPriority="high"
                decoding="sync"
                loading="eager"
                className="w-full h-auto object-cover"
                src={heroBrownie} />
            </div>
            {/* Floating badge */}
            <div className="absolute bottom-4 left-4 right-4 z-10">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: 'hsla(20, 20%, 8%, 0.9)',
                  border: '1px solid hsla(25, 95%, 55%, 0.4)',
                  backdropFilter: 'blur(8px)',
                }}>
                <div className="w-9 h-9 rounded-full bg-[hsl(25,95%,55%)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                </div>
                <div className="text-left">
                  <p className="text-sm font-semibold text-white leading-tight">Feita por aluna da nossa comunidade</p>
                  <p className="text-xs text-white/60">Já está faturando com palhas italianas 🔥</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
HeroSection.displayName = 'HeroSection';