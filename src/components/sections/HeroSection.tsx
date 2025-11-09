import { Button } from "@/components/Button";
import heroBrownie from "@/assets/hero-brownie.jpg";
import { Shield, Users, Sparkles, CheckCircle } from "lucide-react";
export const HeroSection = () => {
  return <section className="relative py-12 md:py-20 px-4 bg-background">
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      <div className="absolute inset-0 bg-gradient-fire opacity-40 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <h1 className="font-heading sm:text-4xl md:text-5xl lg:text-6xl leading-tight text-chocolate text-center font-extrabold text-2xl">
              Aprenda a fazer brownies irresistíveis, conquiste clientes e{" "}
              <span className="text-primary">lucre de R$ 150 até R$300 por fornada</span>,
              mesmo começando do zero.
            </h1>
            
            <p className="sm:text-xl md:text-2xl font-body text-chocolate-light text-xl">
              🍫 Transforme sua cozinha em uma <span className="text-primary font-bold">máquina de lucros</span> com o Método 3C!
            </p>
            
            <div className="relative float-animation my-6 overflow-visible">
              <div className="rounded-2xl overflow-hidden shadow-premium border-4 border-primary/30 bg-gradient-card">
                <img src={heroBrownie} alt="Brownies deliciosos com casquinha crocante" width="1920" height="1080" className="w-full h-auto" />
              </div>
              <div className="absolute top-2 right-2 bg-gradient-neon text-secondary px-5 py-3 rounded-full font-heading font-bold text-sm shadow-neon-strong animate-neon-pulse">
                🔥 Oferta Limitada!
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="text-center md:text-left bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-strong border-2 border-primary/30">
                <p className="text-base md:text-lg text-muted-foreground line-through mb-2">
                  de R$ 97,00 por apenas
                </p>
                <p className="sm:text-5xl md:text-6xl font-heading font-bold text-primary text-5xl drop-shadow-lg">
                  R$ 1,90
                </p>
              </div>
              
              <Button 
                size="lg" 
                className="w-full md:w-auto text-sm md:text-lg shadow-strong hover:shadow-premium"
                onClick={() => {
                  document.getElementById('master-plan')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
              >
                🔘 Quero Começar Meu Negócio de Brownies!
              </Button>
              
              <div className="grid grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm max-w-md mx-auto md:mx-0">
                <div className="flex items-center gap-2 bg-gradient-card px-4 py-3 rounded-xl shadow-medium border border-primary/20 hover:shadow-strong transition-all duration-300">
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-chocolate font-semibold">Acesso Vitalício</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-card px-4 py-3 rounded-xl shadow-medium border border-primary/20 hover:shadow-strong transition-all duration-300">
                  <Sparkles className="w-5 h-5 text-accent" />
                  <span className="text-chocolate font-semibold">App Exclusivo</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-card px-4 py-3 rounded-xl shadow-medium border border-primary/20 hover:shadow-strong transition-all duration-300">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="text-chocolate font-semibold">+5000 Membros</span>
                </div>
                <div className="flex items-center gap-2 bg-gradient-card px-4 py-3 rounded-xl shadow-medium border border-primary/20 hover:shadow-strong transition-all duration-300">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="text-chocolate font-semibold">14 Dias de Garantia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};