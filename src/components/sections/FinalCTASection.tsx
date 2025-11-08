import { Button } from "@/components/Button";
import { Sparkles } from "lucide-react";

export const FinalCTASection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-warm text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.3),transparent_70%)]" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 text-accent text-4xl md:text-6xl animate-float">
            <Sparkles className="animate-neon-pulse" />
            🍫
            <Sparkles className="animate-neon-pulse" />
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            Está a um clique de mudar sua renda com o doce mais vendido do Brasil!
          </h2>
          
          <p className="text-lg md:text-2xl font-body max-w-2xl mx-auto">
            Aprenda o segredo do <span className="text-accent font-bold">Método 3C</span> e comece hoje mesmo a lucrar com brownies irresistíveis.
          </p>
          
          <Button size="lg" className="mt-8 text-lg md:text-2xl px-8 md:px-12 py-4 md:py-6 shadow-neon-strong">
            🔘 Quero Lucrar com Brownies Agora!
          </Button>
          
          <p className="text-xs md:text-sm opacity-80">
            Acesso instantâneo • Garantia de 7 dias • Suporte incluso
          </p>
        </div>
      </div>
    </section>
  );
};
