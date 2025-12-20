import { Button } from "@/components/ui/button";
import { Check, Star, Sparkles, Crown } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/fbTracking";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const PricingSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section 
      ref={ref} 
      id="pricing" 
      data-section="pricing" 
      className={`py-16 md:py-24 px-4 relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}
      style={{ background: 'linear-gradient(180deg, hsl(var(--chocolate-dark)) 0%, hsl(var(--background)) 50%, hsl(var(--chocolate-dark)) 100%)' }}
    >
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title with decorations */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-caramel animate-pulse" />
            <span className="text-caramel font-heading text-sm uppercase tracking-widest">Oferta Especial</span>
            <Sparkles className="w-6 h-6 text-caramel animate-pulse" />
          </div>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-caramel via-gold to-caramel bg-clip-text text-transparent drop-shadow-lg">
            ESCOLHA SEU PLANO!
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto items-stretch">
          {/* Master Plan - Featured */}
          <div 
            id="master-plan" 
            className="relative group"
          >
            {/* Glow effect behind card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-caramel rounded-3xl blur-lg opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative h-full bg-gradient-to-br from-chocolate-dark via-chocolate to-chocolate-dark border-2 border-caramel/50 rounded-3xl p-8 md:p-10 shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-primary via-accent to-primary px-6 py-2 rounded-full shadow-lg">
                <Crown className="w-4 h-4 text-white" />
                <span className="font-heading font-bold text-sm text-white whitespace-nowrap">MAIS POPULAR</span>
                <Crown className="w-4 h-4 text-white" />
              </div>
              
              {/* Stars decoration */}
              <div className="flex justify-center gap-1 mt-4 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-gold fill-gold" />
                ))}
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2 text-cream">
                  App Completo + Bônus
                </h3>
                <p className="text-sm font-medium text-caramel/90 mb-4">(Plano Master)</p>
                <div className="relative inline-block">
                  <span className="text-5xl md:text-6xl font-heading font-bold text-transparent bg-gradient-to-r from-gold via-caramel to-gold bg-clip-text">
                    R$14,90
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {[
                  '+80 Receitas Profissionais',
                  'Acesso total ao Método 3C',
                  'Aulas em Vídeo "Brownies que Vendem"',
                  'Calculadora de Lucro no App',
                  'Guia dos Melhores Ingredientes',
                  'Aulas Extras de Confeitaria',
                  'Suporte + Acesso Vitalício + Certificado'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 group/item">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-caramel to-gold flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-chocolate-dark" />
                    </div>
                    <span className="font-body font-medium text-sm md:text-base text-cream/90 group-hover/item:text-cream transition-colors">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              
              {/* CTA Button - Master */}
              <a 
                href="https://danielle-dias.mycartpanda.com/checkout/202036345:1" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={() => trackInitiateCheckout(14.90, 'App Completo + Bônus Exclusivos - Master Plan')}
                className="block w-full py-4 px-8 bg-gradient-to-r from-caramel via-gold to-caramel text-chocolate-dark font-heading font-bold text-lg rounded-xl shadow-lg hover:shadow-[0_0_30px_hsl(var(--gold)/0.5)] hover:-translate-y-1 transition-all duration-300 text-center relative overflow-hidden group/btn"
              >
                <span className="relative z-10">🍫 Quero o Acesso Completo!</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold via-caramel to-gold opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
              </a>
            </div>
          </div>
          
          {/* Basic Plan */}
          <div className="relative h-full bg-gradient-to-br from-card via-card/95 to-card border-2 border-border/50 rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:border-caramel/30 transition-all duration-500 group">
            <div className="text-center mb-8 pt-4">
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2 text-foreground">
                Receita Brownies Lucrativos
              </h3>
              <div className="text-5xl md:text-6xl font-heading font-bold text-primary mt-4">
                R$1,99
              </div>
            </div>
            
            <ul className="space-y-4 mb-10">
              {[
                '10 Receitas base testadas',
                'Método 3C introdutório',
                'PDF "Casquinha Perfeita"'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-accent" />
                  </div>
                  <span className="font-body text-sm md:text-base text-foreground/80">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* CTA Button - Basic */}
            <a 
              href="https://danielle-dias.mycartpanda.com/checkout/202036361:1" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => trackInitiateCheckout(1.99, 'App Brownies Lucrativos - Basic Plan')}
              className="block w-full py-4 px-8 bg-secondary text-secondary-foreground font-heading font-bold text-lg rounded-xl shadow-md hover:shadow-lg hover:bg-secondary/90 hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              Começar Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};