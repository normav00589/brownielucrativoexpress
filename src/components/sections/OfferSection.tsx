import { Smartphone, Play } from "lucide-react";
import { useState, useCallback, useEffect, useRef } from "react";

// Preload Wistia scripts without showing the player
const preloadWistia = () => {
  if (document.querySelector('script[src*="fast.wistia.com"]')) return;
  
  const script1 = document.createElement('script');
  script1.src = 'https://fast.wistia.com/player.js';
  script1.async = true;
  document.body.appendChild(script1);
  
  // Preload the video metadata
  const link = document.createElement('link');
  link.rel = 'preconnect';
  link.href = 'https://fast.wistia.com';
  document.head.appendChild(link);
};

export const OfferSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [preloaded, setPreloaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Preload Wistia when user scrolls 50% of the page
  useEffect(() => {
    if (preloaded) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrollPosition / documentHeight) * 100;

      if (scrollPercentage >= 50) {
        preloadWistia();
        setPreloaded(true);
        window.removeEventListener('scroll', handleScroll);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [preloaded]);

  const handlePlayClick = useCallback(() => {
    setVideoLoaded(true);
    preloadWistia();
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 bg-section-light relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-8 md:space-y-12">
          {/* Content Section */}
          <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-gold text-sm font-medium">
              <Smartphone className="w-4 h-4" />
              <span>CONHEÇA O APLICATIVO</span>
            </div>
            
            <h2 className="font-heading font-bold sm:text-4xl md:text-5xl text-3xl leading-tight">
              <span className="text-gold">O Segredo Que</span>
              <br />
              <span className="text-gold">Você Sempre Procurou</span>
              <br />
              <span className="text-gold">Agora </span>
              <span className="text-white">no Seu Bolso</span>
            </h2>
            
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto">
              Você merece ter acesso a receitas exclusivas, passo a passo em vídeo e suporte direto.{" "}
              <span className="text-gold">Tudo para você finalmente lucrar.</span>
            </p>
          </div>
          
          {/* iPhone Mockup with Click-to-Play Video */}
          <div className="flex justify-center">
            <div className="relative">
              {/* iPhone Mockup */}
              <div className="relative w-[280px] md:w-[320px] mx-auto">
                {/* iPhone Frame */}
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-white/10">
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '0.549618320610687' }}>
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10">
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rounded-full border border-slate-700" />
                    </div>
                    
                    {/* Video Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-chocolate to-secondary">
                      <div className="w-full h-full flex items-center justify-center p-2 pt-8">
                        {videoLoaded ? (
                          <div 
                            className="w-full h-full rounded-[2rem] overflow-hidden"
                            dangerouslySetInnerHTML={{
                              __html: '<wistia-player media-id="pt22c9q3y0" seo="false" style="width: 100%; height: 100%; object-fit: cover;"></wistia-player>'
                            }}
                          />
                        ) : (
                          <button
                            onClick={handlePlayClick}
                            className="w-full h-full rounded-[2rem] overflow-hidden relative group cursor-pointer bg-gradient-to-br from-chocolate/80 to-secondary flex items-center justify-center"
                            aria-label="Assistir vídeo"
                          >
                            {/* Play button overlay */}
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300" />
                            
                            {/* Play icon */}
                            <div className="relative z-10 flex flex-col items-center gap-3">
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-gold via-[hsl(42,95%,60%)] to-gold flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 md:w-10 md:h-10 text-[hsl(20,30%,15%)] fill-[hsl(20,30%,15%)] ml-1" />
                              </div>
                              <span className="text-white font-heading font-bold text-sm md:text-base drop-shadow-lg">
                                CLIQUE PARA ASSISTIR
                              </span>
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                    
                    {/* Glass reflection */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-40 pointer-events-none z-20" />
                  </div>
                  
                  {/* iPhone Buttons */}
                  <div className="absolute right-0 top-24 w-1 h-12 bg-slate-900 rounded-l" />
                  <div className="absolute right-0 top-40 w-1 h-16 bg-slate-900 rounded-l" />
                  <div className="absolute right-0 top-60 w-1 h-16 bg-slate-900 rounded-l" />
                  <div className="absolute left-0 top-32 w-1 h-8 bg-slate-900 rounded-r" />
                </div>
              </div>
            </div>
          </div>
          
          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-section-dark p-5 rounded-xl border border-white/10 text-center">
              <p className="font-heading font-bold text-gold text-lg">⏱️ Fornada pronta</p>
              <p className="text-white/70 text-sm">em menos de 40 minutos</p>
            </div>
            <div className="bg-section-dark p-5 rounded-xl border border-white/10 text-center">
              <p className="font-heading font-bold text-gold text-lg">💰 Transforme</p>
              <p className="text-white/70 text-sm">R$60 em R$200 por fornada!</p>
            </div>
            <div className="bg-section-dark p-5 rounded-xl border border-white/10 text-center">
              <p className="font-heading font-bold text-gold text-lg">📆 Validade</p>
              <p className="text-white/70 text-sm">de 10 dias – venda sem perdas!</p>
            </div>
            <div className="bg-section-dark p-5 rounded-xl border border-white/10 text-center">
              <p className="font-heading font-bold text-gold text-lg">✅ Acesso</p>
              <p className="text-white/70 text-sm">Vitalício ao conteúdo!</p>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4">
            <a 
              href="#pricing" 
              className="relative inline-block w-full sm:max-w-md px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-[hsl(38,90%,55%)] via-[hsl(42,95%,60%)] to-[hsl(38,90%,55%)] text-[hsl(20,30%,15%)] font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl rounded-xl shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-center overflow-hidden group"
              style={{ boxShadow: '0 4px 30px rgba(255, 200, 100, 0.3)' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                🔥 BAIXE SUAS RECEITAS E APROVEITE!
              </span>
            </a>
            
            <div className="flex items-center justify-center gap-2">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-neon-green" />
              <p className="font-heading font-bold text-neon-green text-sm sm:text-base md:text-lg">
                Disponível para Android e iOS
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
