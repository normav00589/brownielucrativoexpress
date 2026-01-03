import { Button } from "@/components/Button";
import { Sparkles } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";

export const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-[hsl(20,20%,10%)] text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-hot-pink/10 via-transparent to-vibrant-orange/10" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 text-4xl md:text-6xl float-animation">
            <Sparkles className="text-hot-pink" />
            🍫
            <Sparkles className="text-vibrant-orange" />
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            <span className="text-white">Está a um clique de mudar sua renda com o </span>
            <span className="bg-gradient-to-r from-hot-pink via-vibrant-orange to-gold bg-clip-text text-transparent">doce mais vendido do Brasil!</span>
          </h2>
          
          <p className="text-lg md:text-2xl font-body max-w-2xl mx-auto text-white">
            Aprenda o segredo do <span className="text-hot-pink font-bold">Método 3C</span> e comece hoje mesmo a lucrar com brownies irresistíveis.
          </p>
          
          <Button 
            size="lg" 
            className="mt-8 text-lg md:text-2xl px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-vibrant-orange via-hot-pink to-vibrant-orange text-white hover:scale-105 transition-transform duration-300 shadow-lg border-2 border-hot-pink/30 relative overflow-hidden"
            style={{ boxShadow: '0 0 40px rgba(255, 107, 107, 0.4)' }}
            onClick={() => {
              trackViewContent('Final CTA - Brownies Lucrativos', 14.90);
              document.getElementById('master-plan')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            🔘 Quero Lucrar com Brownies Agora!
          </Button>
          
          <p className="text-xs md:text-sm text-white/70">
            Acesso instantâneo • Garantia de 7 dias • Suporte incluso
          </p>
        </div>
      </div>
    </section>
  );
};
