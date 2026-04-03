import { useState, useCallback, memo } from "react";

export const OfferSection = memo(() => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const handlePlayClick = useCallback(() => {
    if (!document.querySelector('script[src*="fast.wistia.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://fast.wistia.com/player.js';
      script.async = true;
      document.body.appendChild(script);
    }
    setVideoLoaded(true);
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 bg-[hsl(15,30%,5%)] relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-8 md:space-y-12">
          <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 text-gold text-sm font-medium">
              📱
              <span>CONHEÇA O APLICATIVO</span>
            </div>
            
            <h2 className="font-['Poppins',sans-serif] font-bold sm:text-4xl md:text-5xl leading-tight text-2xl">
              <span className="text-gold drop-shadow-[0_0_20px_rgba(218,165,32,0.3)]">O Segredo Que</span>
              <br />
              <span className="text-gold drop-shadow-[0_0_20px_rgba(218,165,32,0.3)]">Você Sempre Procurou</span>
              <br />
              <span className="text-gold drop-shadow-[0_0_20px_rgba(218,165,32,0.3)]">Agora </span>
              <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]">no Seu Bolso</span>
            </h2>
            
            <p className="text-base md:text-lg text-white max-w-2xl mx-auto font-['Poppins',sans-serif]">
              Você merece ter acesso a receitas exclusivas, passo a passo em vídeo e suporte direto.{" "}
              <span className="text-gold">Tudo para você finalmente lucrar.</span>
            </p>
          </div>
          
          {/* iPhone Mockup with Click-to-Play Video */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-radial from-gold/20 via-gold/5 to-transparent blur-3xl scale-150 opacity-60" />
              <div className="relative w-[280px] md:w-[320px] mx-auto">
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5),0_0_40px_rgba(218,165,32,0.15)] border border-white/10">
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '0.549618320610687' }}>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rounded-full border border-slate-700" />
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-chocolate to-secondary">
                      <div className="w-full h-full flex items-center justify-center p-2 pt-8">
                        {videoLoaded ?
                        <div
                          className="w-full h-full rounded-[2rem] overflow-hidden"
                          dangerouslySetInnerHTML={{
                            __html: '<wistia-player media-id="pt22c9q3y0" seo="false" style="width: 100%; height: 100%; object-fit: cover;"></wistia-player>'
                          }} /> :
                        <button
                          onClick={handlePlayClick}
                          className="w-full h-full rounded-[2rem] overflow-hidden relative group cursor-pointer bg-gradient-to-br from-chocolate/80 to-secondary flex items-center justify-center"
                          aria-label="Assistir vídeo">
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                            <div className="relative z-10 flex flex-col items-center gap-3">
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-gold via-[hsl(42,95%,60%)] to-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 md:w-10 md:h-10 text-[hsl(20,30%,15%)] ml-1" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
                              </div>
                              <span className="text-white font-heading font-bold text-sm md:text-base drop-shadow-lg">
                                CLIQUE PARA ASSISTIR
                              </span>
                            </div>
                          </button>
                        }
                      </div>
                    </div>
                    
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none z-20" />
                  </div>
                  
                  <div className="absolute right-0 top-24 w-1 h-12 bg-slate-900 rounded-l" />
                  <div className="absolute right-0 top-40 w-1 h-16 bg-slate-900 rounded-l" />
                  <div className="absolute right-0 top-60 w-1 h-16 bg-slate-900 rounded-l" />
                  <div className="absolute left-0 top-32 w-1 h-8 bg-slate-900 rounded-r" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
            <div className="bg-gradient-to-b from-[hsl(20,25%,12%)] to-[hsl(20,30%,8%)] p-5 rounded-xl border border-gold/20 text-center shadow-[0_0_20px_rgba(218,165,32,0.08)]">
              <p className="font-['Poppins',sans-serif] font-bold text-gold text-lg">⏱️ Fornada pronta</p>
              <p className="text-white text-sm font-['Poppins',sans-serif]">em menos de 40 minutos</p>
            </div>
            <div className="bg-gradient-to-b from-[hsl(20,25%,12%)] to-[hsl(20,30%,8%)] p-5 rounded-xl border border-gold/20 text-center shadow-[0_0_20px_rgba(218,165,32,0.08)]">
              <p className="font-['Poppins',sans-serif] font-bold text-gold text-lg">💰 Transforme</p>
              <p className="text-white text-sm font-['Poppins',sans-serif]">R$60 em R$200 por fornada!</p>
            </div>
            <div className="bg-gradient-to-b from-[hsl(20,25%,12%)] to-[hsl(20,30%,8%)] p-5 rounded-xl border border-gold/20 text-center shadow-[0_0_20px_rgba(218,165,32,0.08)]">
              <p className="font-['Poppins',sans-serif] font-bold text-gold text-lg">📆 Validade</p>
              <p className="text-white text-sm font-['Poppins',sans-serif]">de 10 dias – venda sem perdas!</p>
            </div>
            <div className="bg-gradient-to-b from-[hsl(20,25%,12%)] to-[hsl(20,30%,8%)] p-5 rounded-xl border border-gold/20 text-center shadow-[0_0_20px_rgba(218,165,32,0.08)]">
              <p className="font-['Poppins',sans-serif] font-bold text-gold text-lg">✅ Acesso</p>
              <p className="text-white text-sm font-['Poppins',sans-serif]">Vitalício ao conteúdo!</p>
            </div>
            <div className="bg-gradient-to-b from-[hsl(145,40%,12%)] to-[hsl(145,50%,8%)] p-5 rounded-xl border-2 border-neon-green/50 text-center shadow-[0_0_25px_rgba(0,255,128,0.15)] ring-1 ring-neon-green/20">
              <p className="font-['Poppins',sans-serif] font-bold text-neon-green text-lg">📲 Grupo VIP</p>
              <p className="text-white text-sm font-['Poppins',sans-serif]">no WhatsApp com alunas!</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <a
              href="#pricing"
              className="relative inline-block w-full sm:max-w-md px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-[hsl(38,90%,55%)] via-[hsl(42,95%,60%)] to-[hsl(38,90%,55%)] text-[hsl(20,30%,15%)] font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-center overflow-hidden group"
              style={{ boxShadow: '0 4px 30px rgba(255, 200, 100, 0.3)' }}>
              <span className="relative z-10 flex items-center justify-center gap-2">
                🔥 BAIXE SUAS RECEITAS E APROVEITE!
              </span>
            </a>
            
            <div className="flex items-center justify-center gap-2">
              📱
              <p className="font-heading font-bold text-neon-green text-sm sm:text-base md:text-lg">
                Disponível para Android e iOS
              </p>
            </div>
            
            <div className="mt-2 bg-gradient-to-r from-[hsl(20,25%,10%)] to-[hsl(20,30%,8%)] border border-neon-green/30 rounded-xl px-6 py-4 max-w-md">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="flex items-center gap-2">
                  <span className="text-neon-green text-lg">📲</span>
                  <span className="text-white font-medium">Acesso enviado automaticamente pelo <span className="text-neon-green font-bold">WhatsApp</span></span>
                </div>
                <p className="text-white text-sm">Material liberado após a confirmação do pagamento</p>
                <p className="text-white text-xs">Sem e-mails perdidos. Sem links confusos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);
});

OfferSection.displayName = 'OfferSection';
