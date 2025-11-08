import { Button } from "@/components/Button";
import { Calendar, Clock } from "lucide-react";
export const UrgencySection = () => {
  return <section className="py-12 md:py-20 px-4 bg-gradient-warm text-primary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,193,123,0.3),transparent_70%)]" />
      
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-4 md:px-6 py-2 md:py-3 rounded-full font-heading font-bold text-sm md:text-lg shadow-neon animate-neon-pulse">
            <Calendar className="w-4 h-4 md:w-5 md:h-5" />
            🎅 Oferta de Natal Especial
          </div>
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-glow">Apenas R$14,90!</h2>
          
          <div className="space-y-3 md:space-y-4 text-base md:text-xl">
            <div className="flex items-center justify-center gap-2 bg-primary-foreground/10 p-4 rounded-xl">
              <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
              <p>Aproveite a chance de faturar muito nesse Natal!<span className="font-bold text-accent text-lg md:text-2xl">10/12</span> ou enquanto durar o estoque de bônus.</p>
            </div>
            
            <p className="text-xl md:text-2xl font-bold bg-destructive/20 p-4 rounded-xl shadow-neon">
              ⚠️ A partir de 11/12, o valor volta para R$49,90.
            </p>
          </div>
          
          <Button size="lg" className="mt-6 md:mt-8 shadow-neon-strong text-base md:text-lg">
            Quero Aproveitar Agora!
          </Button>
        </div>
      </div>
    </section>;
};