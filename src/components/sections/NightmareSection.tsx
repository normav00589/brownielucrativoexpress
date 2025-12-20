import problemBrownies from "@/assets/problem-brownies.jpg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const NightmareSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section ref={ref} className={`py-12 md:py-20 px-4 bg-background relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="absolute inset-0 bg-gradient-fire opacity-20 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={problemBrownies} 
              alt="Brownies com problemas" 
              className="rounded-2xl shadow-strong w-full h-auto border-2 border-primary/30"
            />
          </div>
          
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight">
              Você já tentou fazer brownies e o resultado foi <span className="text-primary">seco, sem graça</span> ou impossível de vender?
            </h2>
            
            <div className="space-y-3 md:space-y-4 font-body text-base md:text-lg">
              <p className="text-foreground/90 bg-gradient-card backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-medium">
                Ou já pensou em ter uma renda extra com doces, mas não sabia por onde começar?
              </p>
              
              <p className="text-foreground/90 bg-gradient-card backdrop-blur-sm p-4 rounded-lg border border-primary/20 shadow-medium">
                É frustrante ver os outros ganhando dinheiro com sobremesas simples enquanto você ainda tenta achar o ponto certo.
              </p>
              
              <p className="text-foreground font-bold text-lg md:text-xl bg-gradient-to-r from-primary via-caramel to-accent p-6 rounded-xl border-2 border-accent shadow-premium">
                Mas e se eu te dissesse que o segredo não está em sorte ou talento, e sim em um <span className="text-cream">método simples</span> que qualquer pessoa pode dominar?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
