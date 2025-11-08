import { Gift, Star, Calendar, BookOpen, Sparkles, Award } from "lucide-react";
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
  title: "14 BOLOS NO POTE GOURMET",
  description: "Versões sofisticadas com maior margem de lucro",
  highlight: "Alto Valor",
  recipes: "14 receitas exclusivas"
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
}];
export const BonusSection = () => {
  return <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-cream via-cream-dark to-cream relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 right-20 w-64 h-64 bg-gold rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-64 h-64 bg-primary rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 bg-gradient-neon px-6 py-3 rounded-full mb-6 shadow-neon-strong">
            <Gift className="w-6 h-6 text-secondary" />
            <span className="font-heading font-bold text-lg text-secondary">6 Bônus Exclusivos</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-secondary mb-6">E AINDA LEVA 6 BÔNUS 🎁</h2>
          
          <p className="text-lg md:text-xl text-chocolate max-w-3xl mx-auto">
            Com <span className="font-bold text-primary">+70 receitas extras</span> para você diversificar e lucrar ainda mais!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {bonuses.map((bonus, idx) => <div key={idx} className="group relative bg-card rounded-2xl p-6 md:p-8 shadow-medium hover:shadow-premium transition-all duration-500 border-2 border-gold/20 hover:border-gold hover:scale-105">
              <div className="absolute top-0 right-0 bg-gradient-neon px-4 py-1 rounded-bl-2xl rounded-tr-xl">
                <span className="text-xs font-heading font-bold text-secondary">{bonus.highlight}</span>
              </div>
              
              <div className="bg-gradient-neon w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-neon group-hover:shadow-neon-strong transition-all duration-300">
                <bonus.icon className="w-8 h-8 text-secondary" />
              </div>
              
              <h3 className="font-heading font-bold text-xl md:text-2xl text-secondary mb-3">
                {bonus.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">
                {bonus.description}
              </p>
              
              <div className="flex items-center gap-2 text-primary font-semibold">
                <Star className="w-4 h-4" />
                <span className="text-sm">{bonus.recipes}</span>
              </div>
            </div>)}
        </div>
        
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-premium text-primary-foreground px-8 py-6 rounded-2xl shadow-premium">
            <p className="font-heading font-bold text-2xl md:text-3xl">Tudo isso por apenas R$14,90!<span className="text-gold text-glow">R$14,90</span>!
            </p>
            <p className="text-primary-foreground/80 mt-2">
              Mais de 150 receitas + suporte + planilhas + acesso vitalício
            </p>
          </div>
        </div>
      </div>
    </section>;
};