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
    // Load Wistia scripts if not already loaded (fallback)
    preloadWistia();
  }, []);

  return (
    <section className="py-12 md:py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-fire opacity-20 -z-10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-8 md:space-y-12">
          {/* Content Section */}
          <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <h2 className="font-heading font-bold sm:text-4xl md:text-5xl text-3xl bg-gradient-to-r from-primary via-accent to-caramel bg-clip-text text-transparent">
              MÉTODO DO BROWNIE PERFEITO & LUCRATIVO!
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-primary-foreground">
                ✨ Vou te ensinar o meu método que faz sucesso:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-card p-5 rounded-xl shadow-medium border-2 border-primary/20 transition-colors duration-300">
                  <p className="font-heading font-bold text-primary text-lg">⏱️ Fornada pronta</p>
                  <p className="text-primary-foreground">em menos de 40 minutos</p>
                </div>
                <div className="bg-gradient-card p-5 rounded-xl shadow-medium border-2 border-primary/20 transition-colors duration-300">
                  <p className="font-heading font-bold text-primary text-lg">💰 Transforme</p>
                  <p className="text-primary-foreground">R$60 em R$200 por fornada!</p>
                </div>
                <div className="bg-gradient-card p-5 rounded-xl shadow-medium border-2 border-primary/20 transition-colors duration-300">
                  <p className="font-heading font-bold text-primary text-lg">📆 Validade</p>
                  <p className="text-primary-foreground">de 10 dias – venda sem perdas!</p>
                </div>
                <div className="bg-gradient-card p-5 rounded-xl shadow-medium border-2 border-primary/20 transition-colors duration-300">
                  <p className="font-heading font-bold text-primary text-lg">✅ Acesso</p>
                  <p className="text-primary-foreground">Vitalício ao conteúdo!</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 mt-8">
              <a href="#pricing" className="relative inline-block w-full sm:max-w-md px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-[hsl(var(--cta-orange-dark))] via-[hsl(var(--cta-orange))] to-[hsl(var(--cta-orange-dark))] text-white font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-center border-2 border-accent/30 overflow-hidden group">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  🔥 BAIXE SUAS RECEITAS E APROVEITE!
                </span>
              </a>
              
              <div className="flex items-center justify-center gap-2">
                <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                <p className="font-heading font-bold text-accent text-sm sm:text-base md:text-lg">
                  Disponível para Android e iOS
                </p>
              </div>
            </div>
          </div>
          
          {/* iPhone Mockup with Click-to-Play Video */}
          <div className="flex justify-center">
            <div className="relative">
              {/* iPhone Mockup */}
              <div className="relative w-[280px] md:w-[320px] mx-auto">
                {/* iPhone Frame */}
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-slate-700/50">
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
                              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-[hsl(var(--cta-orange-dark))] via-[hsl(var(--cta-orange))] to-[hsl(var(--cta-orange-dark))] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-white ml-1" />
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
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-[hsl(var(--cta-orange-dark))] to-[hsl(var(--cta-orange))] px-4 py-2 rounded-full shadow-lg z-20">
                  <p className="font-heading font-bold text-white flex items-center gap-2 text-sm">
                    <Play className="w-4 h-4" />
                    Veja Como Funciona
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
