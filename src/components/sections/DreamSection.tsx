import dreamPackaging from "@/assets/dream-packaging.jpg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const DreamSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return <section ref={ref} className={`py-12 md:py-20 px-4 bg-background relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="absolute inset-0 bg-gradient-fire opacity-20 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground leading-tight text-center">
              Imagine ver seus brownies saindo do forno com{" "}
              <span className="text-primary">casquinha crocante</span> e{" "}
              <span className="text-primary">interior cremoso</span>
            </h2>
            
            <div className="space-y-3 md:space-y-4 font-body text-base md:text-lg">
              <p className="text-foreground bg-gradient-card backdrop-blur-sm p-4 rounded-xl border border-primary/20 shadow-medium">
                Embalando em caixinhas lindas e recebendo pedidos pelo WhatsApp no mesmo dia.
              </p>
              
              <p className="text-foreground bg-gradient-card backdrop-blur-sm p-4 rounded-xl border border-primary/20 shadow-medium">
                O aroma de chocolate, a textura perfeita e a sensação de ver suas fornadas virando dinheiro em poucas horas.
              </p>
              
              <p className="font-bold text-lg md:text-xl bg-gradient-neon p-6 rounded-2xl shadow-neon-strong border-2 border-accent text-white">
                ✨ Essa é a realidade de quem domina o Método 3C: Casquinha, Cremoso e Caixinha.
              </p>
            </div>
          </div>
          
          <div className="float-animation">
            <img src={dreamPackaging} alt="Embalando brownies com app" width="1024" height="1024" className="rounded-3xl shadow-premium w-full h-auto border-4 border-gold/40" />
          </div>
        </div>
      </div>
    </section>;
};