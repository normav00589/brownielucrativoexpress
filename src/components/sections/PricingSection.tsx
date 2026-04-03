import { memo } from "react";
import { Check, Star, Crown, X, CreditCard, Shield } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/fbTracking";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const excludedFromBasic = [
'Acesso ao App completo',
'Aulas em Vídeo "Brownies que Vendem"',
'Calculadora de Lucro no App',
'Aulas Extras de Confeitaria',
'Aula Canva: Logotipo Profissional',
'Aula Canva: Catálogo de Vendas',
'Grupo VIP no WhatsApp'];


export const PricingSection = memo(() => {
  const { ref, isVisible } = useIntersectionObserver();

  return (
    <section ref={ref} id="pricing" data-section="pricing" className={`py-16 md:py-24 px-4 bg-gradient-section-2 relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Title */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-gold font-heading text-sm uppercase tracking-widest mb-4 block">Oferta Especial</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gold">
            ESCOLHA SEU PLANO!
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 max-w-5xl mx-auto items-stretch">
          {/* Master Plan - Featured */}
          <div id="master-plan" className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gold via-[hsl(42,95%,60%)] to-gold rounded-3xl blur-lg opacity-40" />
            
            <div className="relative h-full bg-section-light border border-gold/30 rounded-3xl p-8 md:p-10">
              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-gradient-to-r from-gold via-[hsl(42,95%,60%)] to-gold px-6 py-2 rounded-full">
                <Crown className="w-4 h-4 text-[hsl(20,30%,15%)]" />
                <span className="font-heading font-bold text-sm text-[hsl(20,30%,15%)] whitespace-nowrap">MAIS POPULAR</span>
              </div>
              
              {/* Stars */}
              <div className="flex justify-center gap-1 mt-4 mb-6">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 text-gold fill-gold" />)}
              </div>
              
              <div className="text-center mb-8">
                <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2 text-white">App Completo + Bônus</h3>
                <p className="text-sm font-medium text-gold/80 mb-4">(Plano Master)</p>
                
                {/* Price block */}
                <div className="bg-section-dark rounded-2xl p-6 border border-white/10 relative">
                  <div className="absolute -top-3 right-4 bg-[hsl(10,70%,55%)] text-white text-xs font-bold px-3 py-1 rounded-md">
                    -98% OFF
                  </div>
                  <span className="text-5xl md:text-6xl font-heading font-bold text-gold">R$13,90</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-10">
                {['Aplicativo exclusivo com + 80 Receitas Profissionais e ferramentas para alta lucratividade!', 'Acesso total ao Método 3C', 'Aulas em Vídeo "Brownies que Vendem"', 'Calculadora de Lucro no App', 'Guia dos Melhores Ingredientes', 'Aulas Extras de Confeitaria', '🎨 Aula Canva: Crie seu Logotipo Profissional', '📱 Aula Canva: Monte seu Catálogo de Vendas', 'Suporte + Acesso Vitalício + Certificado'].map((item, i) =>
                <li key={i} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-gold to-[hsl(42,95%,60%)] flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-[hsl(20,30%,15%)]" />
                    </div>
                    <span className="font-body font-medium text-sm md:text-base text-white/90">{item}</span>
                  </li>
                )}
              </ul>
              
              <a href="https://www.ggcheckout.com/checkout/v5/dGUJ8Ztwl0ct036P2mcl" target="_blank" rel="noopener noreferrer" onClick={() => trackInitiateCheckout(13.90, 'App Completo + Bônus Exclusivos - Master Plan')} className="block w-full py-4 px-8 bg-gradient-to-r from-[hsl(38,90%,55%)] via-[hsl(42,95%,60%)] to-[hsl(38,90%,55%)] text-[hsl(20,30%,15%)] font-heading font-bold text-lg rounded-xl text-center hover:scale-105 transition-transform duration-300" style={{ boxShadow: '0 4px 30px rgba(255, 200, 100, 0.3)' }}>
                🍫 Quero o Acesso Completo!
              </a>
            </div>
          </div>
          
          {/* Basic Plan */}
          <div className="relative h-full bg-section-light border border-white/15 rounded-3xl p-8 md:p-10">
            <div className="text-center mb-8 pt-4">
              <h3 className="font-heading font-bold text-2xl md:text-3xl mb-2 text-white">Receita Brownies Lucrativos</h3>
              <div className="text-5xl md:text-6xl font-heading font-bold text-neon-green mt-4">R$2,90</div>
            </div>
            
            {/* Included items */}
            <ul className="space-y-4 mb-6">
              {['10 Receitas base testadas', 'Método 3C introdutório', 'PDF "Casquinha Perfeita"'].map((item, i) =>
              <li key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-neon-green/20 flex items-center justify-center mt-0.5">
                    <Check className="w-4 h-4 text-neon-green" />
                  </div>
                  <span className="font-body text-sm md:text-base text-white">{item}</span>
                </li>
              )}
            </ul>

            {/* Excluded items - FOMO */}
            <ul className="space-y-3 mb-10 pt-4 border-t border-white/10">
              {excludedFromBasic.map((item, i) =>
              <li key={i} className="flex items-start gap-3 opacity-50">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-white/5 flex items-center justify-center mt-0.5">
                    <X className="w-4 h-4 text-white/40" />
                  </div>
                  <span className="font-body text-sm md:text-base text-white/40 line-through">{item}</span>
                </li>
              )}
            </ul>
            
            <a href="https://www.ggcheckout.com/checkout/v5/bi4rE4iOdJz77kLNWHrb" target="_blank" rel="noopener noreferrer" onClick={() => trackInitiateCheckout(1.99, 'App Brownies Lucrativos - Basic Plan')} className="block w-full py-4 px-8 bg-white/10 border border-white/25 text-white font-heading font-bold text-lg rounded-xl text-center hover:bg-white/15 transition-colors duration-300">
              Começar Agora
            </a>
          </div>
        </div>

        {/* Payment Icons + Secure Badge */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="flex items-center gap-6 text-white">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5" />
              <span className="text-sm font-medium">Cartão</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2">
              <span className="text-lg">◉</span>
              <span className="text-sm font-medium">Pix</span>
            </div>
            <span className="text-white/20">|</span>
            <div className="flex items-center gap-2">
              <span className="text-lg">☰</span>
              <span className="text-sm font-medium">Boleto</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[hsl(var(--neon-green))]">
            <Shield className="w-4 h-4" />
            <span className="text-xs font-semibold">Pagamento 100% Seguro • Dados Protegidos</span>
          </div>
        </div>
      </div>
    </section>);

});
PricingSection.displayName = 'PricingSection';

export default PricingSection;