import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const GuaranteeSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section ref={ref} className={`py-12 md:py-20 px-4 bg-[hsl(20,20%,10%)] fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto max-w-4xl">
        <div className="bg-[hsl(20,20%,12%)] backdrop-blur-sm rounded-2xl p-6 md:p-12 shadow-lg text-center border-2 border-[hsl(174,72%,56%)]/30 relative overflow-hidden">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-[hsl(174,72%,56%)]/20 rounded-full mb-4 md:mb-6 float-animation">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-[hsl(174,72%,56%)]" />
          </div>
          
          <h2 className="font-heading font-bold sm:text-3xl md:text-4xl mb-4 md:mb-6 text-xl">
            <span className="text-white">Garantia de 14 Dias – </span>
            <span className="bg-gradient-to-r from-[hsl(174,72%,56%)] to-hot-pink bg-clip-text text-transparent">Satisfação Total</span>
          </h2>
          
          <div className="space-y-3 md:space-y-4 font-body text-base md:text-lg text-white max-w-2xl mx-auto">
            <p>
              Você tem <span className="text-[hsl(174,72%,56%)] font-bold text-xl">14 dias de garantia total</span>.
            </p>
            
            <p>
              Se não amar o conteúdo ou achar que não vale o investimento,{" "}
              <span className="font-bold text-hot-pink">devolvemos 100% do valor</span>.
            </p>
            
            <p className="text-[hsl(174,72%,56%)] font-semibold text-lg">
              ✅ Sem burocracia, sem perguntas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
