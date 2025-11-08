import secretBrownies from "@/assets/secret-brownies.jpg";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
export const SecretSection = () => {
  return <section className="py-12 md:py-20 px-4 bg-gradient-warm text-primary-foreground relative overflow-hidden">
      
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative max-w-md">
              <img src={secretBrownies} alt="Brownies com casquinha perfeita" className="rounded-3xl shadow-premium w-full h-auto border-4 border-gold/30 float-animation" />
              <div className="absolute -bottom-6 -right-6 bg-gold text-secondary px-6 py-3 shadow-neon-strong font-heading font-bold text-lg rounded-xl">
                ⭐ Técnica Exclusiva
              </div>
            </div>
          </div>
          
          <div className="space-y-6 md:space-y-8 order-1 md:order-2">
            <div className="flex items-start gap-4">
              <Sparkles className="w-10 h-10 md:w-12 md:h-12 text-gold animate-neon-pulse flex-shrink-0" />
              <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-glow leading-tight">
                O Segredo do Método 3C
              </h2>
            </div>
            
            <div className="space-y-4 md:space-y-5 font-body text-base md:text-lg">
              <div className="bg-gold/20 backdrop-blur-sm border-2 border-gold p-6 rounded-2xl shadow-neon">
                <p className="text-2xl md:text-3xl font-bold text-gold flex items-center gap-3">
                  <span>✨</span>
                  <span>Casquinha + Cremoso + Caixinha</span>
                </p>
              </div>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm p-5 rounded-xl border border-primary-foreground/20">
                <p className="leading-relaxed">
                  Um sistema simples que transforma um doce comum em um produto{" "}
                  <span className="font-bold text-gold">irresistível e vendável</span>.
                </p>
              </div>
              
              <div className="bg-primary-foreground/10 backdrop-blur-sm p-5 rounded-xl border border-primary-foreground/20">
                <p className="leading-relaxed">
                  Nada de receitas aleatórias — aqui você aprende a{" "}
                  <span className="font-bold text-gold">ciência do brownie perfeito</span>{" "}
                  que vende sozinho.
                </p>
              </div>
              
              <div className="bg-primary/20 backdrop-blur-sm p-5 rounded-xl border border-primary">
                <p className="font-bold leading-relaxed">
                  📽️ Curso em Vídeo Aulas – Passo a passo fácil de seguir
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full text-base md:text-lg shadow-strong hover:shadow-premium mt-4"
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
    </section>;
};