import { Gift, Star, Calendar, BookOpen, Sparkles, Award, Calculator, ChefHat } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface Bonus {
  icon: typeof Calendar;
  title: string;
  description: string;
  highlight: string;
  recipes: string;
  color: string;
  featured?: boolean;
}

const bonuses: Bonus[] = [
  {
    icon: Calendar,
    title: "BROWNIES NATALINOS",
    description: "Receitas especiais para a época mais lucrativa do ano",
    highlight: "Edição Limitada",
    recipes: "15+ receitas exclusivas",
    color: "from-red-500 to-red-700"
  },
  {
    icon: BookOpen,
    title: "32 RECEITAS DE BOLOS NO POTE",
    description: "Expanda seu negócio com outro produto campeão de vendas",
    highlight: "Bônus Premium",
    recipes: "32 receitas completas",
    color: "from-primary to-accent"
  },
  {
    icon: Sparkles,
    title: "24 BROWNIES ESPECIAIS",
    description: "Receitas diferenciadas para clientes exigentes",
    highlight: "Receitas Gourmet",
    recipes: "24 variações premium",
    color: "from-caramel to-gold"
  },
  {
    icon: Star,
    title: "RECEITAS EM VÍDEO",
    description: "Cocada, biscoitinhos, manjar, brigadeirão, mousse e mais!",
    highlight: "Alto Valor",
    recipes: "6+ receitas em vídeo",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: Gift,
    title: "RECEITAS PROFISSIONAIS",
    description: "Recheios, coberturas e ganaches de confeitaria",
    highlight: "Segredos Pro",
    recipes: "Técnicas avançadas",
    color: "from-accent to-primary"
  },
  {
    icon: Award,
    title: "CERTIFICADO",
    description: "Certificado digital para comprovar sua especialização",
    highlight: "Profissional",
    recipes: "Documento oficial",
    color: "from-gold to-caramel"
  },
  {
    icon: Calculator,
    title: "CALCULADORA DE LUCRO",
    description: "Ferramenta para calcular custos e definir preços lucrativos",
    highlight: "Ferramenta Premium",
    recipes: "Lucro garantido",
    color: "from-emerald-500 to-emerald-700"
  },
  {
    icon: Sparkles,
    title: "AULA DE LOGOTIPO NO CANVA",
    description: "Você sempre quis ter uma marca profissional que transmite confiança? Crie seu logotipo único sem pagar designer!",
    highlight: "🔥 Exclusivo",
    recipes: "Marca profissional grátis",
    color: "from-violet-500 to-purple-700"
  },
  {
    icon: BookOpen,
    title: "AULA DE CATÁLOGO DE VENDAS",
    description: "Aquele catálogo lindo que você vê nas redes e pensa 'queria fazer igual'? Agora você vai criar o seu!",
    highlight: "🚀 Novidade",
    recipes: "Venda pelo WhatsApp",
    color: "from-pink-500 to-rose-600"
  },
  {
    icon: Star,
    title: "GRUPO VIP NO WHATSAPP",
    description: "Comunidade exclusiva com alunas para trocar experiências, tirar dúvidas e crescer juntas!",
    highlight: "⭐ EXCLUSIVO",
    recipes: "Suporte direto",
    color: "from-neon-green to-emerald-500",
    featured: true
  }
];

export const BonusSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      ref={ref} 
      className={`py-16 md:py-24 px-4 relative overflow-hidden fade-in-up bg-gradient-section-1 ${isVisible ? 'visible' : ''}`}
    >
      {/* Decorative blurs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-caramel/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="flex items-center gap-2 bg-gradient-to-r from-primary via-accent to-caramel px-6 py-3 rounded-full shadow-lg">
              <Gift className="w-6 h-6 text-white" />
              <span className="font-heading font-bold text-lg text-white">10 Bônus Exclusivos</span>
              <Gift className="w-6 h-6 text-white" />
            </div>
          </div>
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6">
            <span className="bg-gradient-to-r from-caramel via-gold to-caramel bg-clip-text text-transparent">
              E AINDA LEVA 9 BÔNUS
            </span>
            <span className="ml-3">🎁</span>
          </h2>
          
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            Com <span className="font-bold text-caramel">+70 receitas extras</span> para você diversificar e lucrar ainda mais!
          </p>
        </div>
        
        {/* Bonus Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {bonuses.map((bonus, idx) => (
            <div 
              key={idx} 
              className={`group relative bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border hover:-translate-y-2 ${
                bonus.featured 
                  ? 'border-neon-green/50 hover:border-neon-green ring-2 ring-neon-green/30 shadow-[0_0_20px_rgba(0,255,128,0.15)]' 
                  : 'border-border/50 hover:border-caramel/50'
              }`}
            >
              {/* Highlight badge */}
              <div className={`absolute -top-3 right-4 bg-gradient-to-r ${bonus.color} px-4 py-1.5 rounded-full shadow-md ${bonus.featured ? 'animate-pulse' : ''}`}>
                <span className="text-xs font-heading font-bold text-white whitespace-nowrap">{bonus.highlight}</span>
              </div>
              
              {/* Icon */}
              <div className={`bg-gradient-to-br ${bonus.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <bonus.icon className="w-7 h-7 text-white" />
              </div>
              
              {/* Content */}
              <h3 className={`font-heading font-bold text-lg md:text-xl mb-2 leading-tight ${bonus.featured ? 'text-neon-green' : 'text-foreground'}`}>
                {bonus.title}
              </h3>
              
              <p className="text-sm text-white mb-4 leading-relaxed">
                {bonus.description}
              </p>
              
              {/* Recipe count */}
              <div className="flex items-center gap-2">
                <Star className={`w-4 h-4 ${bonus.featured ? 'text-neon-green fill-neon-green' : 'text-gold fill-gold'}`} />
                <span className={`text-sm font-semibold ${bonus.featured ? 'text-neon-green' : 'text-caramel'}`}>{bonus.recipes}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom summary */}
        <div className="mt-14 md:mt-20 text-center">
          <div className="relative inline-block">
            {/* Glow effect */}
            <div className="absolute -inset-2 bg-gradient-to-r from-primary via-caramel to-accent rounded-2xl blur-lg opacity-40" />
            
            <div className="relative bg-gradient-to-r from-chocolate-dark via-chocolate to-chocolate-dark border border-caramel/30 px-8 md:px-12 py-6 md:py-8 rounded-2xl shadow-xl">
              <div className="flex items-center justify-center gap-3 mb-3">
                <ChefHat className="w-8 h-8 text-gold" />
                <span className="font-heading font-bold text-2xl md:text-3xl text-cream">+150 Receitas</span>
                <ChefHat className="w-8 h-8 text-gold" />
              </div>
              <p className="text-white text-sm md:text-base mb-3">
                Suporte completo + Planilhas + Acesso Vitalício
              </p>
              
              {/* WhatsApp Trust Badge */}
              <div className="flex flex-col items-center gap-1 pt-3 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-neon-green">📲</span>
                  <span className="text-white/90">Receba no <span className="text-neon-green font-semibold">WhatsApp</span></span>
                </div>
                <span className="text-white/60 text-xs">Sem e-mails perdidos. Sem links confusos.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};