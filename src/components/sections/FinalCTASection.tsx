import { Button } from "@/components/Button";
import { Sparkles } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";

export const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-neon text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-fire opacity-30" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 text-white text-4xl md:text-6xl animate-float">
            <Sparkles className="animate-neon-pulse text-accent" />
            🍫
            <Sparkles className="animate-neon-pulse text-accent" />
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight text-white">
            Está a um clique de mudar sua renda com o doce mais vendido do Brasil!
          </h2>
          
          <p className="text-lg md:text-2xl font-body max-w-2xl mx-auto text-white">
            Aprenda o segredo do <span className="text-accent font-bold">Método 3C</span> e comece hoje mesmo a lucrar com brownies irresistíveis.
          </p>
          
          <Button 
            size="lg" 
            className="mt-8 text-lg md:text-2xl px-8 md:px-12 py-4 md:py-6 bg-white text-primary hover:bg-white/90 shadow-neon-strong border-2 border-white"
            onClick={() => {
              trackViewContent('Final CTA - Brownies Lucrativos', 14.90);
              document.getElementById('master-plan')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            🔘 Quero Lucrar com Brownies Agora!
          </Button>
          
          <p className="text-xs md:text-sm text-white/80">
            Acesso instantâneo • Garantia de 7 dias • Suporte incluso
          </p>
        </div>
      </div>
    </section>
  );
};
