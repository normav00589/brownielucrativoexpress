import { Button } from "@/components/Button";
import browniePricing from "@/assets/brownie-pricing.webp";
import brownie1 from "@/assets/brownie-1.jpg";
import brownie2 from "@/assets/brownie-2.jpg";
import brownie3 from "@/assets/brownie-3.jpg";
import { Shield, Users, Sparkles, CheckCircle, Clock, Flame } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";
export const HeroSection = () => {
  return <section className="relative min-h-screen py-12 md:py-20 px-4 bg-background overflow-hidden">
      {/* Neon gradient background */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      <div className="absolute inset-0 bg-gradient-fire opacity-30 -z-10" />
      
      {/* Floating brownies decoration */}
      <div className="absolute top-20 left-10 w-24 h-24 opacity-20 brownie-float hidden md:block">
        <img src={brownie1} alt="" className="w-full h-full object-cover rounded-xl blur-sm" />
      </div>
      <div className="absolute top-40 right-20 w-32 h-32 opacity-20 brownie-float hidden md:block" style={{
      animationDelay: '2s'
    }}>
        <img src={brownie2} alt="" className="w-full h-full object-cover rounded-xl blur-sm" />
      </div>
      <div className="absolute bottom-40 left-20 w-28 h-28 opacity-20 brownie-float hidden md:block" style={{
      animationDelay: '4s'
    }}>
        <img src={brownie3} alt="" className="w-full h-full object-cover rounded-xl blur-sm" />
      </div>
      
      {/* Urgency Banner */}
      <div className="container mx-auto max-w-6xl mb-8">
        
      </div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8 text-center">
            
            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight font-extrabold">
              <span className="text-gradient-neon mx-0 my-0">
                FATURE DE R$150,00 a R$350,00 por DIA e ATÉ MAIS!
              </span>
              <br />
              <span className="text-white mt-4 block">Vendendo BROWNIES LUCRATIVOS!</span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl font-body text-foreground/90 leading-relaxed font-medium">
              <span className="text-white">(mesmo sem experiência e morando em cidade pequena)</span>
            </p>
            
            {/* Price Highlight */}
            <div className="inline-block bg-secondary rounded-lg px-8 py-4">
              <p className="text-accent font-bold text-2xl md:text-3xl mb-1">
                Por apenas R$ 1,90
              </p>
              <p className="text-white text-base md:text-lg">Acesso vitalício completo</p>
            </div>
            
            {/* CTA Button */}
            <Button size="lg" className="w-full md:w-auto text-lg md:text-xl px-8 py-6 bg-gradient-neon shadow-neon-strong hover:shadow-neon border-2 border-primary/50 font-bold neon-glow-strong" onClick={() => {
            trackViewContent('Hero CTA - Brownies Lucrativos', 1.90);
            document.getElementById('master-plan')?.scrollIntoView({
              behavior: 'smooth',
              block: 'center'
            });
          }}>
              ESCOLHA SEU PLANO ABAIXO
            </Button>
            
            {/* Brownie Image with Neon Effect */}
            <div className="relative w-full max-w-lg mx-auto my-12">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-neon blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-full"></div>
                <img src={browniePricing} alt="Cookie recheado gourmet delicioso" loading="lazy" width="600" height="600" className="relative w-full h-auto rounded-2xl shadow-neon-strong border-4 border-primary/40 transition-all duration-500 group-hover:scale-105 group-hover:border-accent/60 neon-glow-strong" />
              </div>
              
              {/* Social Proof Badge */}
              <div className="absolute -bottom-6 right-4 bg-accent text-background font-bold px-6 py-3 rounded-full shadow-strong text-sm md:text-base border-2 border-background">
                +2.400 Alunos
              </div>
            </div>
            
            {/* Pain Point Copy */}
            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-strong border-2 border-muted/30 max-w-3xl mx-auto">
              <p className="text-foreground/90 text-base md:text-lg leading-relaxed">
                <span className="text-white font-semibold">O método testado por <span className="text-accent font-bold">+2.400 alunas</span> que transforma uma simples massa em cookies </span>
                <span className="text-primary font-bold">lucrativos</span>
                <span className="text-white font-semibold"> (o título não é clickbait) e vendas explodindo no WhatsApp em menos de 15 dias.</span>
              </p>
            </div>
            
            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
              <div className="bg-gradient-card backdrop-blur-sm px-4 py-4 rounded-xl shadow-medium border border-primary/20 hover:border-primary/50 hover:shadow-neon transition-all duration-300">
                <Shield className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-foreground font-semibold text-sm block">Acesso Vitalício</span>
              </div>
              <div className="bg-gradient-card backdrop-blur-sm px-4 py-4 rounded-xl shadow-medium border border-accent/20 hover:border-accent/50 hover:shadow-neon transition-all duration-300">
                <Sparkles className="w-6 h-6 text-accent mx-auto mb-2" />
                <span className="text-foreground font-semibold text-sm block">App Exclusivo</span>
              </div>
              <div className="bg-gradient-card backdrop-blur-sm px-4 py-4 rounded-xl shadow-medium border border-primary/20 hover:border-primary/50 hover:shadow-neon transition-all duration-300">
                <Users className="w-6 h-6 text-primary mx-auto mb-2" />
                <span className="text-foreground font-semibold text-sm block">+2400 Alunas</span>
              </div>
              <div className="bg-gradient-card backdrop-blur-sm px-4 py-4 rounded-xl shadow-medium border border-accent/20 hover:border-accent/50 hover:shadow-neon transition-all duration-300">
                <CheckCircle className="w-6 h-6 text-accent mx-auto mb-2" />
                <span className="text-foreground font-semibold text-sm block">14 Dias de Garantia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};