import { Gift, Star, Calendar, BookOpen, Sparkles, Award, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
const bonuses = [{
  icon: Calendar,
  title: "BROWNIES NATALINOS",
  description: "Receitas especiais para a época mais lucrativa do ano",
  highlight: "Edição Limitada",
  recipes: "15+ receitas exclusivas"
}, {
  icon: BookOpen,
  title: "32 RECEITAS DE BOLOS NO POTE",
  description: "Expanda seu negócio com outro produto campeão de vendas",
  highlight: "Bônus Premium",
  recipes: "32 receitas completas"
}, {
  icon: Sparkles,
  title: "24 BROWNIES ESPECIAIS",
  description: "Receitas diferenciadas para clientes exigentes",
  highlight: "Receitas Gourmet",
  recipes: "24 variações premium"
}, {
  icon: Star,
  title: "RECEITAS EM VÍDEO DE CONFEITARIA",
  description: "Cocada, biscoitinhos, manjar, brigadeirão, mousse e muito mais!",
  highlight: "Alto Valor",
  recipes: "6+ receitas em vídeo"
}, {
  icon: Gift,
  title: "RECEITAS PROFISSIONAIS",
  description: "Recheios, coberturas e ganaches de confeitaria",
  highlight: "Segredos Profissionais",
  recipes: "Técnicas avançadas"
}, {
  icon: Award,
  title: "CERTIFICADO DE CONCLUSÃO",
  description: "Certificado digital para comprovar sua especialização",
  highlight: "Profissionalização",
  recipes: "Documento oficial"
}, {
  icon: Calculator,
  title: "CALCULADORA DE LUCRO E PRECIFICAÇÃO",
  description: "Ferramenta exclusiva para calcular seus custos e definir preços lucrativos",
  highlight: "Ferramenta Premium",
  recipes: "Lucro garantido"
}];
export const BonusSection = () => {
  const {
    ref,
    isVisible
  } = useIntersectionObserver();
  return <section ref={ref} className={`py-12 md:py-20 px-4 bg-gradient-card relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-neon px-6 py-3 rounded-full mb-6 shadow-neon-strong">
            <Gift className="w-6 h-6 text-white" />
            <span className="font-heading font-bold text-lg text-white">6 Bônus Exclusivos</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-foreground mb-6">E AINDA LEVA 6 BÔNUS 🎁</h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Com <span className="font-bold text-primary">+70 receitas extras</span> para você diversificar e lucrar ainda mais!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bonuses.map((bonus, idx) => <div key={idx} className="group relative bg-background/60 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-medium hover:shadow-neon transition-all duration-500 border-2 border-primary/20 hover:border-primary/50 hover:scale-105">
              <div className="absolute top-0 right-0 bg-gradient-neon px-4 py-1 rounded-bl-2xl rounded-tr-xl">
                <span className="text-xs font-heading font-bold text-white">{bonus.highlight}</span>
              </div>
              
              <div className="bg-gradient-neon w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-neon group-hover:shadow-neon-strong transition-all duration-300">
                <bonus.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground mb-3">
                {bonus.title}
              </h3>
              
              <p className="mb-4 text-primary-foreground">
                {bonus.description}
              </p>
              
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Star className="w-4 h-4" />
                <span className="text-sm">{bonus.recipes}</span>
              </div>
            </div>)}
        </div>
        
        <div className="mt-12 text-center space-y-6">
          <div className="inline-block bg-gradient-neon text-white px-8 py-6 rounded-2xl shadow-neon-strong">
            
            <p className="text-white/90 mt-2">
              Mais de 150 receitas + suporte + planilhas + acesso vitalício
            </p>
          </div>
          
          
        </div>
      </div>
    </section>;
};