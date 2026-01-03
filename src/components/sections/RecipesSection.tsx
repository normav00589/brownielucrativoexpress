import { memo } from "react";
import { ChefHat, Star } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const recipeCategories = [
  {
    title: "BROWNIES TRADICIONAIS",
    emoji: "🍫",
    recipes: ["Brownie Clássico - A base perfeita", "Brownie de Nutella - Cremoso e viciante", "Brownie Red Velvet - Elegante e irresistível", "Brownie Molhadinho - Úmido e aveludado"],
    totalRecipes: 30,
    color: "hot-pink"
  },
  {
    title: "BROWNIES GOURMET",
    emoji: "🎂",
    recipes: ["Brownie Floresta Negra - Cerejas e chantilly", "Brownie Trufado - Recheio surpresa", "Brownie Oreo - Crocante e cremoso", "Brownie com Caramelo Salgado - Doce e salgado"],
    totalRecipes: 25,
    color: "vibrant-orange"
  },
  {
    title: "BROWNIES ESPECIAIS",
    emoji: "🥄",
    recipes: ["Brownie Zero Açúcar - Para todos os públicos", "Brownie Vegano - Para todos", "Brownie Low Carb - Opção fitness", "Brownie de Caneca - Prático e rápido"],
    totalRecipes: 25,
    color: "teal"
  }
];

export const RecipesSection = memo(() => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section ref={ref} className={`py-12 md:py-20 px-4 bg-[hsl(20,20%,10%)] text-foreground relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-hot-pink via-vibrant-orange to-gold px-6 py-3 rounded-full mb-6">
            <ChefHat className="w-6 h-6 text-white" />
            <span className="font-heading font-bold text-lg text-white">+80 Receitas Incríveis</span>
          </div>
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
            <span className="text-white">VEJA ALGUMAS RECEITAS </span>
            <span className="bg-gradient-to-r from-hot-pink via-vibrant-orange to-gold bg-clip-text text-transparent">QUE TE ESPERA</span>
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white">
            Com o Método 3C, você aprende do zero, mesmo sem experiência E COM BAIXO INVESTIMENTO!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {recipeCategories.map((category, idx) => (
            <div 
              key={idx} 
              className={`bg-[hsl(20,20%,12%)] rounded-2xl p-6 md:p-8 border-2 transition-all duration-300 hover:scale-105 ${
                category.color === 'hot-pink' ? 'border-hot-pink/30 hover:border-hot-pink/60' :
                category.color === 'vibrant-orange' ? 'border-vibrant-orange/30 hover:border-vibrant-orange/60' :
                'border-[hsl(174,72%,56%)]/30 hover:border-[hsl(174,72%,56%)]/60'
              }`}
            >
              <div className="text-5xl mb-4 text-center">{category.emoji}</div>
              <h3 className={`font-heading font-bold text-xl md:text-2xl mb-6 text-center ${
                category.color === 'hot-pink' ? 'text-hot-pink' :
                category.color === 'vibrant-orange' ? 'text-vibrant-orange' :
                'text-[hsl(174,72%,56%)]'
              }`}>
                {category.title}
              </h3>
              <ul className="space-y-3 mb-4">
                {category.recipes.map((recipe, recipeIdx) => (
                  <li key={recipeIdx} className="flex items-start gap-3">
                    <Star className={`w-4 h-4 flex-shrink-0 mt-1 ${
                      category.color === 'hot-pink' ? 'text-hot-pink' :
                      category.color === 'vibrant-orange' ? 'text-vibrant-orange' :
                      'text-[hsl(174,72%,56%)]'
                    }`} />
                    <span className="text-sm md:text-base text-white">{recipe}</span>
                  </li>
                ))}
              </ul>
              <div className={`rounded-lg px-4 py-2 text-center ${
                category.color === 'hot-pink' ? 'bg-hot-pink/20' :
                category.color === 'vibrant-orange' ? 'bg-vibrant-orange/20' :
                'bg-[hsl(174,72%,56%)]/20'
              }`}>
                <span className={`font-semibold text-sm ${
                  category.color === 'hot-pink' ? 'text-hot-pink' :
                  category.color === 'vibrant-orange' ? 'text-vibrant-orange' :
                  'text-[hsl(174,72%,56%)]'
                }`}>🔥 + mais {category.totalRecipes - category.recipes.length} receitas incríveis!</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-hot-pink via-vibrant-orange to-gold border-2 border-hot-pink/30 rounded-xl p-6 max-w-2xl mx-auto">
            <p className="font-heading font-bold md:text-2xl text-white text-base">
              💰 Transforme R$60 em R$200 por fornada com técnicas comprovadas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

RecipesSection.displayName = 'RecipesSection';
