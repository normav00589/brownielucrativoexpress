import { Smartphone, Play } from "lucide-react";
export const OfferSection = () => {
  return <section className="py-12 md:py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-fire opacity-20 -z-10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="space-y-8 md:space-y-12">
          {/* Content Section */}
          <div className="text-center space-y-6 md:space-y-8 max-w-4xl mx-auto">
            <h2 className="font-heading font-bold sm:text-4xl md:text-5xl text-3xl drop-shadow-lg text-gradient-neon">
              MÉTODO DO BROWNIE PERFEITO & LUCRATIVO!
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-muted-foreground">
                ✨ Vou te ensinar o meu método que faz sucesso:
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="bg-gradient-card p-5 rounded-xl shadow-medium border-2 border-primary/20 hover:shadow-strong transition-all duration-300">
                  <p className="font-heading font-bold text-primary text-lg">⏱️ Fornada pronta</p>
                  <p className="text-muted-foreground">em menos de 40 minutos</p>
                </div>
                <div className="bg-gradient-card p-5 rounded-xl shadow-medium border-2 border-primary/20 hover:shadow-strong transition-all duration-300">
                  <p className="font-heading font-bold text-primary text-lg">💰 Transforme</p>
                  <p className="text-muted-foreground">R$60 em R$200 por fornada!</p>
                </div>
                <div className="bg-gradient-card p-5 rounded-xl shadow-medium border-2 border-primary/20 hover:shadow-strong transition-all duration-300">
                  <p className="font-heading font-bold text-primary text-lg">📆 Validade</p>
                  <p className="text-muted-foreground">de 10 dias – venda sem perdas!</p>
                </div>
                <div className="bg-gradient-card p-5 rounded-xl shadow-medium border-2 border-primary/20 hover:shadow-strong transition-all duration-300">
                  <p className="font-heading font-bold text-primary text-lg">✅ Acesso</p>
                  <p className="text-muted-foreground">Vitalício ao conteúdo!</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-4 mt-8">
              <a 
                href="#pricing" 
                className="relative inline-block w-full sm:max-w-md px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 bg-gradient-to-r from-accent to-accent/80 text-background font-heading font-bold text-base sm:text-lg md:text-xl lg:text-2xl rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 text-center border-2 border-accent/50 shimmer-effect overflow-hidden group"
              >
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
          
          {/* iPhone Mockup Below Button */}
          <div className="flex justify-center">
            <div className="relative">
              {/* iPhone Mockup */}
              <div className="relative w-[280px] md:w-[320px] mx-auto">
                {/* Glow effect behind phone */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-accent/20 to-primary/30 blur-3xl animate-pulse" />
                
                {/* iPhone Frame */}
                <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-[3rem] p-3 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-slate-700/50">
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: '0.549618320610687' }}>
                    {/* Notch - more realistic */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10 shadow-lg">
                      {/* Camera */}
                      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-slate-900 rounded-full border border-slate-700" />
                    </div>
                    
                    {/* Video Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-chocolate to-secondary">
                      <div className="w-full h-full flex items-center justify-center p-2 pt-8">
                        <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-inner" dangerouslySetInnerHTML={{
                        __html: '<wistia-player media-id="pt22c9q3y0" seo="false" style="width: 100%; height: 100%; object-fit: cover;"></wistia-player>'
                      }} />
                      </div>
                    </div>
                    
                    {/* Glass reflection overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent opacity-40 pointer-events-none z-20" />
                    <div className="absolute top-0 left-0 w-1/3 h-1/2 bg-gradient-to-br from-white/30 to-transparent opacity-50 blur-2xl pointer-events-none z-20" />
                  </div>
                  
                  {/* iPhone Buttons - more realistic */}
                  <div className="absolute right-0 top-24 w-1 h-12 bg-slate-900 rounded-l shadow-inner" />
                  <div className="absolute right-0 top-40 w-1 h-16 bg-slate-900 rounded-l shadow-inner" />
                  <div className="absolute right-0 top-60 w-1 h-16 bg-slate-900 rounded-l shadow-inner" />
                  <div className="absolute left-0 top-32 w-1 h-8 bg-slate-900 rounded-r shadow-inner" />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-neon px-4 py-2 rounded-full shadow-neon-strong animate-neon-pulse z-20">
                  <p className="font-heading font-bold text-secondary flex items-center gap-2">
                    <Play className="w-4 h-4" />
                    Assista Agora
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};