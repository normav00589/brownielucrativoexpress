import { Button } from "@/components/Button";
import { Sparkles } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";
export const FinalCTASection = () => {
  return <section className="py-16 md:py-24 px-4 bg-gradient-section-2 text-white relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 text-4xl md:text-6xl float-animation">
            <Sparkles className="text-gold" />
            🍫
            <Sparkles className="text-gold" />
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            <span className="text-white">Está a um clique de mudar sua renda com o </span>
            <span className="text-gold">doce mais vendido do Brasil!</span>
          </h2>
          
          <p className="text-lg md:text-2xl font-body max-w-2xl mx-auto text-secondary-foreground">
            Aprenda o segredo do <span className="text-gold font-bold">Método 3C</span> e comece hoje mesmo a lucrar com brownies irresistíveis.
          </p>
          
          <Button size="lg" className="mt-8 text-lg md:text-2xl px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-[hsl(38,90%,55%)] via-[hsl(42,95%,60%)] to-[hsl(38,90%,55%)] text-[hsl(20,30%,15%)] hover:scale-105 transition-transform duration-300 shadow-lg relative overflow-hidden" style={{
          boxShadow: '0 4px 35px rgba(255, 200, 100, 0.3)'
        }} onClick={() => {
          trackViewContent('Final CTA - Brownies Lucrativos', 14.90);
          document.getElementById('master-plan')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }}>
            🔘 Quero Lucrar com Brownies Agora!
          </Button>
          
          <p className="text-xs md:text-sm text-white/50">
            Acesso instantâneo • Garantia de 7 dias • Suporte incluso
          </p>
        </div>
      </div>
    </section>;
};