import { Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
export const GuaranteeSection = () => {
  return <section className="py-12 md:py-20 px-4" style={{
    backgroundColor: 'hsl(0 75% 35%)'
  }}>
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-12 shadow-strong text-center border-2 border-white/20">
          <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-white/20 rounded-full mb-4 md:mb-6 subtle-pulse">
            <Shield className="w-10 h-10 md:w-12 md:h-12 text-white" />
          </div>
          
          <h2 className="font-heading font-bold sm:text-3xl md:text-4xl mb-4 md:mb-6 text-white text-xl">Garantia de 14 Dias – Satisfação Total</h2>
          
          <div className="space-y-3 md:space-y-4 font-body text-base md:text-lg text-white/90 max-w-2xl mx-auto">
            <p>
              Você tem <span className="text-white font-bold text-xl">14 dias de garantia total</span>.
            </p>
            
            <p>
              Se não amar o conteúdo ou achar que não vale o investimento,{" "}
              <span className="font-bold text-white">devolvemos 100% do valor</span>.
            </p>
            
            <p className="text-white font-semibold text-lg">
              ✅ Sem burocracia, sem perguntas.
            </p>
          </div>
          
          <Button 
            size="lg" 
            className="mt-8 text-base md:text-xl px-8 md:px-12 py-4 md:py-6 shadow-neon-strong bg-white text-primary hover:bg-white/90"
            onClick={() => {
              document.getElementById('master-plan')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }}
          >
            🔘 Quero Começar Meu Negócio de Brownies!
          </Button>
        </div>
      </div>
    </section>;
};