import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { trackInitiateCheckout } from "@/lib/fbTracking";
export const PricingSection = () => {
  return <section id="pricing" className="py-12 md:py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,193,123,0.1),transparent_70%)] -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-5xl text-center mb-8 md:mb-12 text-foreground text-glow">
          Escolha Seu Plano
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {/* Master Plan */}
          <div id="master-plan" className="bg-gradient-premium border-4 border-primary rounded-2xl p-6 md:p-8 shadow-strong relative transform hover:scale-105 transition-all duration-300">
            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 md:px-6 py-1.5 md:py-2 font-heading font-bold text-xs md:text-sm shadow-red subtle-pulse my-0 mx-0 rounded-full">🔥 MAIS POPULAR</div>
            
            <div className="text-center mb-6">
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 text-white">
                App Completo + Bônus Exclusivos
              </h3>
              <p className="text-xs md:text-sm font-semibold text-white/90 mb-2">(Plano Master)</p>
              <div className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                R$14,90
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="font-body font-semibold text-sm md:text-base text-white">+80 Receitas Profissionais</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="font-body font-semibold text-sm md:text-base text-white">Acesso total ao Método 3C</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="font-body font-semibold text-sm md:text-base text-white">Aulas em Vídeo d "Brownies Natalinos que Vendem"</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="font-body font-semibold text-sm md:text-base text-white">Planilha de Lucros Automática</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                <span className="font-body font-semibold text-sm md:text-base text-white">Suporte + Acesso Vitalício + Certificado de Conclusão</span>
              </li>
            </ul>
            
            <Button className="w-full bg-white text-primary hover:bg-white/90 shadow-red" asChild>
              <a href="https://www.ggcheckout.com/checkout/v2/FB2BQbKx59cYBFvUhFWN" target="_blank" rel="noopener noreferrer" onClick={() => {
              trackInitiateCheckout(14.90, 'App Completo + Bônus Exclusivos - Master Plan');
            }}>
                Quero o Acesso Completo!
              </a>
            </Button>
          </div>
          
          {/* Basic Plan */}
          <div className="bg-card border-2 border-border rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-neon transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="font-heading font-bold text-xl md:text-2xl mb-2 text-foreground">Receita Brownies Lucrativos</h3>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
                R$1,99
              </div>
            </div>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm md:text-base text-foreground">10 Receitas base testadas</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm md:text-base text-foreground">Método 3C introdutório</span>
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="font-body text-sm md:text-base text-foreground">PDF "Casquinha Perfeita"</span>
              </li>
            </ul>
            
            <Button variant="secondary" className="w-full" asChild>
              <a href="https://www.ggcheckout.com/checkout/v2/9jwm1AUaZKjbNSzRYO1w" target="_blank" rel="noopener noreferrer" onClick={() => {
              trackInitiateCheckout(1.99, 'App Brownies Lucrativos - Basic Plan');
            }}>
                Começar Agora
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>;
};