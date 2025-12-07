import secretBrownies from "@/assets/secret-brownies.jpg";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const SecretSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      ref={ref} 
      className={`py-12 md:py-20 px-4 bg-gradient-card text-foreground relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Image - appears second on mobile, first on desktop */}
          <div className="order-2 md:order-1 flex justify-center w-full">
            <div className="relative w-full max-w-sm mx-auto">
              <img 
                src={secretBrownies} 
                alt="Brownies com casquinha perfeita" 
                className="rounded-2xl md:rounded-3xl shadow-premium w-full h-auto border-2 md:border-4 border-gold/30" 
              />
              <div className="absolute -bottom-3 -right-2 md:-bottom-6 md:-right-6 bg-gold text-secondary px-4 py-2 md:px-6 md:py-3 shadow-neon-strong font-heading font-bold text-sm md:text-lg rounded-lg md:rounded-xl">
                ⭐ Técnica Exclusiva
              </div>
            </div>
          </div>
          
          {/* Content - appears first on mobile, second on desktop */}
          <div className="space-y-5 md:space-y-8 order-1 md:order-2 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3 md:gap-4">
              <Sparkles className="w-8 h-8 md:w-12 md:h-12 text-accent animate-neon-pulse flex-shrink-0" />
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-5xl text-foreground leading-tight">
                O Segredo do Método 3C
              </h2>
            </div>
            
            <div className="space-y-4 font-body text-sm md:text-lg">
              <div className="bg-gradient-neon backdrop-blur-sm border-2 border-primary p-4 md:p-6 rounded-xl md:rounded-2xl shadow-neon-strong">
                <p className="text-xl md:text-3xl font-bold text-white flex items-center justify-center md:justify-start gap-2 md:gap-3 flex-wrap">
                  <span>✨</span>
                  <span>Casquinha + Cremoso + Caixinha</span>
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-primary/20 shadow-medium">
                <p className="leading-relaxed text-foreground">
                  Um sistema simples que transforma um doce comum em um produto{" "}
                  <span className="font-bold text-accent">irresistível e vendável</span>.
                </p>
              </div>
              
              <div className="bg-background/60 backdrop-blur-sm p-4 md:p-5 rounded-xl border border-primary/20 shadow-medium">
                <p className="leading-relaxed text-foreground">
                  Nada de receitas aleatórias — aqui você aprende a{" "}
                  <span className="font-bold text-accent">ciência do brownie perfeito</span>{" "}
                  que vende sozinho.
                </p>
              </div>
              
              <div className="bg-gradient-card backdrop-blur-sm p-4 md:p-5 rounded-xl border border-accent/30 shadow-medium">
                <p className="font-bold leading-relaxed text-foreground">
                  📽️ Curso em Vídeo Aulas – Passo a passo fácil de seguir
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full text-sm md:text-lg shadow-strong hover:shadow-premium mt-4"
                onClick={() => {
                  document.getElementById('master-plan')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                🔘 Quero Começar Meu Negócio de Brownies!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
