import { ChefHat, Sparkles, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const recipeCategories = [{
  title: "BROWNIES TRADICIONAIS",
  emoji: "🍫",
  recipes: ["Brownie Clássico - A base perfeita", "Brownie de Nutella - Cremoso e viciante", "Brownie com Nozes - O clássico atemporal", "Brownie Molhadinho - Úmido e aveludado", "Brownie de Chocolate Branco - Doce e sofisticado", "Brownie de Paçoca - Sabor brasileiro", "Brownie Red Velvet - Elegante e irresistível", "Brownie de Café - Aromático e intenso", "Brownie de Coco - Tropical e delicioso", "Brownie de Limão - Refrescante e diferente"]
}, {
  title: "BROWNIES GOURMET",
  emoji: "🎂",
  recipes: ["Brownie Floresta Negra - Cerejas e chantilly", "Brownie 3 Camadas - Puro prazer visual", "Brownie com Whisky - Toque adulto refinado", "Brownie Sensação - Morango e chocolate", "Brownie Oreo - Crocante e cremoso", "Brownie Diamante Negro - Sofisticado", "Brownie Capuccino - Cremoso e aromático", "Brownie Sonho de Valsa - Nostálgico", "Brownie Trufado - Recheio surpresa", "Brownie com Caramelo Salgado - Doce e salgado"]
}, {
  title: "BROWNIES ESPECIAIS",
  emoji: "🥄",
  recipes: ["Brownie Zero Açúcar - Para todos os públicos", "Brownie Zero Lactose - Inclusivo e saboroso", "Brownie Low Carb - Opção fitness", "Brownie Vegano - Para todos", "Brownie de Caneca - Prático e rápido", "Brownie de Abobrinha - Saudável e fofinho", "Brownie de Banana - Naturalmente doce", "Brownie de Aveia - Nutritivo e saboroso", "Brownie de Micro-ondas - Emergência doce", "Brownie de Frutas Vermelhas - Antioxidante"]
}];

export const RecipesSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return <section ref={ref} className={`py-12 md:py-20 px-4 bg-gradient-card text-foreground relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-neon backdrop-blur-sm px-6 py-3 rounded-full mb-6 shadow-neon-strong">
            <ChefHat className="w-6 h-6 text-white" />
            <span className="font-heading font-bold text-lg text-white">+80 Receitas Incríveis</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6 text-foreground">
            Veja algumas das receitas que te esperam 🎯
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Com o Método 3C, você aprende do zero, mesmo sem experiência!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {recipeCategories.map((category, idx) => <div key={idx} className="bg-background/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-neon">
              <div className="text-5xl mb-4 text-center">{category.emoji}</div>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-6 text-center text-accent">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.recipes.map((recipe, recipeIdx) => <li key={recipeIdx} className="flex items-start gap-3">
                    <Star className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                    <span className="text-sm md:text-base text-foreground">{recipe}</span>
                  </li>)}
              </ul>
            </div>)}
        </div>
        
        <div className="text-center space-y-6">
          
          
          <div className="bg-gradient-neon backdrop-blur-sm border-2 border-primary rounded-xl p-6 max-w-2xl mx-auto shadow-neon-strong">
            <p className="font-heading font-bold text-xl md:text-2xl text-white">
              💰 Transforme R$60 em R$200 por fornada com técnicas comprovadas!
            </p>
          </div>
          
          
        </div>
      </div>
    </section>;
};
