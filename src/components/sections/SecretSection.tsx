import { Sparkles, Lock, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const SecretSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section ref={ref} className={`py-12 md:py-20 px-4 bg-gradient-to-b from-[hsl(20,30%,12%)] via-[hsl(20,25%,10%)] to-[hsl(0,0%,5%)] text-foreground relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Image - appears second on mobile, first on desktop */}
          <div className="order-2 md:order-1 flex justify-center w-full">
            <div className="relative w-full max-w-xs md:max-w-md mx-auto group">
              {/* Image with optimization */}
              <img 
                alt="Brownies com casquinha perfeita criados pela Chef Gabriella" 
                className="relative rounded-2xl md:rounded-3xl shadow-lg w-full h-auto border border-white/10 aspect-[4/3] object-cover" 
                src="/lovable-uploads/5e88750b-42e2-43d5-816e-6d9503a59595.webp"
                loading="lazy"
                decoding="async"
                width={400}
                height={300}
                style={{
                  boxShadow: '0 0 50px rgba(255, 150, 50, 0.2)'
                }}
              />
              
              {/* Chef name badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold via-[hsl(42,95%,60%)] to-gold px-4 py-1.5 md:px-5 md:py-2 rounded-full shadow-lg">
                <span className="font-heading font-bold text-[hsl(20,30%,15%)] text-xs md:text-sm whitespace-nowrap flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                  Chef Gabriella Castro
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                </span>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-2 md:-bottom-4 md:-right-4 bg-neon-green text-white px-3 py-1.5 md:px-4 md:py-2 shadow-lg font-heading font-bold text-xs md:text-sm rounded-lg flex items-center gap-1.5">
                <Lock className="w-3 h-3 md:w-4 md:h-4" />
                Método Exclusivo
              </div>
            </div>
          </div>
          
          {/* Content - appears first on mobile, second on desktop */}
          <div className="space-y-5 md:space-y-6 order-1 md:order-2">
            {/* Header */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-gold/15 text-gold px-3 py-1.5 rounded-full text-xs md:text-sm font-bold mb-3 border border-gold/30">
                <Sparkles className="w-4 h-4" />
                O que as confeiteiras de sucesso não contam
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                O Método 3C que{" "}
                <span className="text-gold">Triplicou Minhas Vendas</span>
              </h2>
            </div>
            
            <div className="space-y-4 font-body text-sm md:text-base">
              {/* Main value prop */}
              <div className="bg-section-light backdrop-blur-md p-5 md:p-6 rounded-xl md:rounded-2xl border border-gold/20">
                <p className="text-xl md:text-2xl lg:text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
                  <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                  <span className="text-gold">
                    Casquinha + Cremoso + Caixinha
                  </span>
                </p>
                <p className="text-white/80 text-sm md:text-base lg:text-lg mt-2 md:mt-3">
                  A fórmula exata que transforma{" "}
                  <span className="text-red-400 font-bold line-through opacity-70">R$60</span>
                  {" "}em{" "}
                  <span className="text-gold font-black text-lg md:text-xl">R$200</span>
                </p>
              </div>
              
              {/* Benefits */}
              <div className="bg-section-light backdrop-blur-sm p-4 rounded-xl border border-white/10">
                <p className="leading-relaxed text-white/80 text-center md:text-left">
                  <span className="font-bold text-gold">Chega de brownies que ninguém compra.</span>{" "}
                  Esse método cria um produto que vende sozinho — 
                  seus clientes vão implorar por mais.
                </p>
              </div>
              
              {/* Social proof mini */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-white text-xs md:text-sm">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gold/20 border-2 border-background flex items-center justify-center text-xs">👩</div>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gold/20 border-2 border-background flex items-center justify-center text-xs">👩</div>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gold/20 border-2 border-background flex items-center justify-center text-xs">👩</div>
                </div>
                <span className="text-white/70">+2.847 alunas já dominam esse método</span>
              </div>
              
              {/* Urgency */}
              <div className="bg-[hsl(10,70%,55%)]/10 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-[hsl(10,70%,55%)]/30 flex items-center gap-3">
                <Clock className="w-5 h-5 md:w-6 md:h-6 text-[hsl(10,70%,55%)] flex-shrink-0" />
                <p className="text-sm md:text-base text-white/90">
                  <span className="font-bold text-[hsl(10,70%,55%)]">Acesso limitado:</span>{" "}
                  Essa técnica não vai ficar disponível para sempre.
                </p>
              </div>
              
              {/* CTA Button */}
              <Button 
                size="lg" 
                className="w-full text-base md:text-xl font-bold py-5 md:py-7 bg-gradient-to-r from-[hsl(38,90%,55%)] via-[hsl(42,95%,60%)] to-[hsl(38,90%,55%)] text-[hsl(20,30%,15%)] hover:scale-[1.03] transition-all duration-500" 
                style={{ boxShadow: '0 4px 30px rgba(255, 200, 100, 0.3)' }}
                onClick={() => {
                  document.getElementById('master-plan')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
              >
                <span className="flex items-center justify-center gap-2 md:gap-3">
                  <span className="text-xl md:text-2xl">🔥</span>
                  <span>Quero Lucrar Com Brownie!</span>
                  <span className="text-lg md:text-xl">→</span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
