import { Smartphone, Play } from "lucide-react";
export const OfferSection = () => {
  return <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-background via-cream/50 to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-fire opacity-20 -z-10" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center lg:text-left space-y-6 md:space-y-8">
            <h2 className="font-heading font-bold sm:text-4xl md:text-5xl text-foreground text-center text-3xl drop-shadow-lg">
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
            
            <div className="flex justify-center lg:justify-start mt-8">
              <a 
                href="#pricing" 
                className="inline-block w-full sm:w-auto px-8 py-4 bg-gradient-neon text-secondary font-heading font-bold text-lg md:text-xl rounded-full shadow-neon-strong hover:scale-105 transition-all duration-300 text-center"
              >
                🔥 Quero Aproveitar por R$ 14,90!
              </a>
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* iPhone Mockup */}
              <div className="relative w-[280px] md:w-[320px] mx-auto">
                {/* iPhone Frame */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-[3rem] p-3 shadow-premium border-2 border-primary/30">
                  {/* Screen */}
                  <div className="relative bg-black rounded-[2.5rem] overflow-hidden aspect-[9/19.5]">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-10" />
                    
                    {/* Video Content */}
                    <div className="absolute inset-0 bg-gradient-to-br from-chocolate to-secondary">
                      <div className="w-full h-full flex items-center justify-center p-4">
                        <div className="w-full h-full rounded-2xl overflow-hidden" dangerouslySetInnerHTML={{
                        __html: '<wistia-player media-id="fazo7r4dgs" seo="false" style="width: 100%; height: 100%;"></wistia-player>'
                      }} />
                      </div>
                    </div>
                  </div>
                  
                  {/* iPhone Button */}
                  <div className="absolute right-0 top-24 w-1 h-12 bg-gray-800 rounded-l" />
                  <div className="absolute right-0 top-40 w-1 h-16 bg-gray-800 rounded-l" />
                  <div className="absolute right-0 top-60 w-1 h-16 bg-gray-800 rounded-l" />
                  <div className="absolute left-0 top-32 w-1 h-8 bg-gray-800 rounded-r" />
                </div>
                
                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 bg-gradient-neon px-4 py-2 rounded-full shadow-neon-strong animate-neon-pulse">
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