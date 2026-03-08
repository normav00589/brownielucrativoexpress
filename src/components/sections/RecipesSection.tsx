import { memo } from "react";
import { ChefHat, Star, Sparkles, Cookie, Scissors, DollarSign, Clock, BookOpen } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import brownieBg from "@/assets/testimonial-brownie-first.webp";

const microBenefits = [
  { icon: Cookie, title: "Receita Universal", desc: "Funciona em qualquer forno" },
  { icon: Sparkles, title: "Técnica da Casquinha", desc: "Crocante por fora, macia por dentro" },
  { icon: Scissors, title: "Corte Fotogênico", desc: "Perfeito pra vender nas redes" },
  { icon: DollarSign, title: "Precificação Correta", desc: "Saiba exatamente quanto cobrar" },
  { icon: Clock, title: "Validade Estendida", desc: "Dure mais sem conservantes" },
  { icon: BookOpen, title: "Cardápio Campeão", desc: "Os sabores que mais vendem" },
];

const recipeCategories = [{
  title: "BROWNIES TRADICIONAIS",
  emoji: "🍫",
  recipes: ["Brownie Clássico - A base perfeita", "Brownie de Nutella - Cremoso e viciante", "Brownie Red Velvet - Elegante e irresistível", "Brownie Molhadinho - Úmido e aveludado"],
  totalRecipes: 30
}, {
  title: "BROWNIES GOURMET",
  emoji: "🎂",
  recipes: ["Brownie Floresta Negra - Cerejas e chantilly", "Brownie Trufado - Recheio surpresa", "Brownie Oreo - Crocante e cremoso", "Brownie com Caramelo Salgado - Doce e salgado"],
  totalRecipes: 25
}, {
  title: "BROWNIES ESPECIAIS",
  emoji: "🥄",
  recipes: ["Brownie Zero Açúcar - Para todos os públicos", "Brownie Vegano - Para todos", "Brownie Low Carb - Opção fitness", "Brownie de Caneca - Prático e rápido"],
  totalRecipes: 25
}];

export const RecipesSection = memo(() => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section ref={ref} className={`py-12 md:py-20 px-4 bg-gradient-section-3 text-foreground relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background brownie image with overlay - hidden on mobile */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img src={brownieBg} alt="" aria-hidden="true" loading="lazy" className="w-full h-full object-cover opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(20,15%,5%)] via-transparent to-[hsl(20,15%,5%)]" />
      </div>

      {/* Decorative glow orbs - hidden on mobile */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-[100px] pointer-events-none hidden md:block" />
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none hidden md:block" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-gold via-[hsl(42,95%,60%)] to-gold px-6 py-3 rounded-full mb-6 shadow-[0_0_20px_rgba(234,193,123,0.3)]">
            <ChefHat className="w-6 h-6 text-[hsl(20,30%,15%)]" />
            <span className="font-heading font-bold text-lg text-[hsl(20,30%,15%)]">+80 Receitas Incríveis</span>
            <Sparkles className="w-5 h-5 text-[hsl(20,30%,15%)]" />
          </div>
          
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl mb-6">
            <span className="text-white">VEJA ALGUMAS RECEITAS </span>
            <span className="text-gold animate-glow-text">QUE TE ESPERA</span>
          </h2>
          
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-secondary-foreground">
            Com o Método 3C, você aprende do zero, mesmo sem experiência E COM BAIXO INVESTIMENTO!
          </p>
        </div>

        {/* Micro-benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-12 md:mb-16 max-w-4xl mx-auto">
          {microBenefits.map((benefit, idx) => (
            <div key={idx} className="flex items-center gap-3 bg-section-dark/80 border border-white/10 rounded-xl px-4 py-3 md:hover:border-gold/30 md:transition-colors">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center">
                <benefit.icon className="w-5 h-5 text-gold" />
              </div>
              <div>
                <span className="block text-sm font-bold text-white leading-tight">{benefit.title}</span>
                <span className="block text-xs text-white/50">{benefit.desc}</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {recipeCategories.map((category, idx) => (
            <div key={idx} className="bg-section-dark rounded-2xl p-6 md:p-8 border border-white/10 md:transition-all md:duration-500 md:hover:border-gold/40 md:hover:shadow-[0_0_30px_rgba(234,193,123,0.15)] md:hover:-translate-y-1 group md:bg-section-dark/80 md:backdrop-blur-sm">
              <div className="text-5xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">{category.emoji}</div>
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-6 text-center text-gold">
                {category.title}
              </h3>
              <ul className="space-y-3 mb-4">
                {category.recipes.map((recipe, recipeIdx) => (
                  <li key={recipeIdx} className="flex items-start gap-3">
                    <Star className="w-4 h-4 flex-shrink-0 mt-1 text-gold" />
                    <span className="text-sm md:text-base text-secondary-foreground">{recipe}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-lg px-4 py-2 text-center bg-gold/10 group-hover:bg-gold/20 transition-colors duration-300">
                <span className="font-semibold text-sm text-gold">🔥 + mais {category.totalRecipes - category.recipes.length} receitas incríveis!</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-gold via-[hsl(42,95%,60%)] to-gold rounded-xl p-4 sm:p-6 max-w-2xl mx-auto shadow-[0_0_40px_rgba(234,193,123,0.25)] hover:shadow-[0_0_50px_rgba(234,193,123,0.4)] transition-shadow duration-500">
            <p className="font-heading font-bold text-sm sm:text-base md:text-2xl text-[hsl(20,30%,15%)]">
              💰 Transforme R$60 em R$200 por fornada com técnicas comprovadas!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
RecipesSection.displayName = 'RecipesSection';
