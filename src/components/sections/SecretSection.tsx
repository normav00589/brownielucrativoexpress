import secretBrownies from "@/assets/secret-brownies.jpg";
import { Sparkles, Lock, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const SecretSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section ref={ref} className={`py-12 md:py-20 px-4 bg-gradient-card text-foreground relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-accent/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-2 h-2 bg-primary/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-gold/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-accent/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-primary/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Gradient orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Shimmer line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent shimmer-effect" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Image - appears second on mobile, first on desktop */}
          <div className="order-2 md:order-1 flex justify-center w-full">
            <div className="relative w-full max-w-sm mx-auto group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/30 via-primary/20 to-gold/30 rounded-2xl md:rounded-3xl blur-xl scale-105 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              
              {/* Image with hover effect */}
              <img 
                alt="Brownies com casquinha perfeita" 
                className="relative rounded-2xl md:rounded-3xl shadow-premium w-full h-auto border-2 md:border-4 border-gold/30 transition-transform duration-500 group-hover:scale-[1.02]" 
                src="/lovable-uploads/e3c77834-b773-424e-9ba9-2f7d215f21a1.jpg" 
              />
              
              {/* Floating badge with animation */}
              <div className="absolute -bottom-3 -right-2 md:-bottom-6 md:-right-6 bg-gold text-secondary px-4 py-2 md:px-6 md:py-3 shadow-neon-strong font-heading font-bold text-sm md:text-lg rounded-lg md:rounded-xl flex items-center gap-2 animate-pulse hover:animate-none hover:scale-105 transition-transform">
                <Lock className="w-4 h-4 md:w-5 md:h-5" />
                Método Exclusivo
              </div>
              
              {/* Floating stars */}
              <Star className="absolute -top-3 -left-3 w-6 h-6 text-gold fill-gold animate-pulse" style={{ animationDelay: '0.3s' }} />
              <Star className="absolute top-1/4 -right-4 w-4 h-4 text-accent fill-accent animate-pulse" style={{ animationDelay: '0.7s' }} />
            </div>
          </div>
          
          {/* Content - appears first on mobile, second on desktop */}
          <div className="space-y-5 md:space-y-6 order-1 md:order-2">
            {/* Header */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-3 py-1.5 rounded-full text-xs md:text-sm font-bold mb-3 border border-accent/30">
                <Sparkles className="w-4 h-4" />
                O que as confeiteiras de sucesso não contam
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-foreground leading-tight">
                O Método 3C que{" "}
                <span className="text-accent">Triplicou Minhas Vendas</span>
              </h2>
            </div>
            
            <div className="space-y-4 font-body text-sm md:text-base">
            {/* Main value prop with glow effect */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary rounded-xl md:rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
              <div className="relative bg-gradient-neon backdrop-blur-sm border-2 border-primary p-4 md:p-5 rounded-xl md:rounded-2xl shadow-neon-strong text-center md:text-left">
                <p className="text-lg md:text-2xl font-bold text-white flex items-center justify-center md:justify-start gap-2">
                  <Sparkles className="w-5 h-5 md:w-6 md:h-6 animate-pulse text-gold" />
                  Casquinha + Cremoso + Caixinha
                </p>
                <p className="text-white/80 text-sm md:text-base mt-1">
                  A fórmula exata que transforma <span className="text-gold font-bold">R$60</span> em <span className="text-accent font-bold">R$200</span>
                </p>
              </div>
            </div>
              
              {/* Benefits */}
              <div className="bg-background/60 backdrop-blur-sm p-4 rounded-xl border border-primary/20 shadow-medium">
                <p className="leading-relaxed text-foreground text-center md:text-left">
                  <span className="font-bold text-accent">Chega de brownies que ninguém compra.</span>{" "}
                  Esse método cria um produto que <span className="underline decoration-accent decoration-2">vende sozinho</span> — 
                  seus clientes vão implorar por mais.
                </p>
              </div>
              
              {/* Social proof mini */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-xs md:text-sm">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs">👩</div>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-xs">👩</div>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gold/20 border-2 border-background flex items-center justify-center text-xs">👩</div>
                </div>
                <span className="text-secondary-foreground">+2.847 alunas já dominam esse método</span>
              </div>
              
            {/* Urgency with pulse animation */}
            <div className="relative">
              <div className="absolute inset-0 bg-destructive/20 rounded-xl blur-md animate-pulse" />
              <div className="relative bg-destructive/10 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-destructive/30 flex items-center gap-3">
                <div className="relative">
                  <Clock className="w-5 h-5 md:w-6 md:h-6 text-destructive flex-shrink-0 animate-pulse" />
                  <div className="absolute inset-0 bg-destructive rounded-full blur-sm opacity-50 animate-ping" />
                </div>
                <p className="text-sm md:text-base text-foreground">
                  <span className="font-bold text-destructive">Acesso limitado:</span>{" "}
                  Essa técnica não vai ficar disponível para sempre.
                </p>
              </div>
            </div>
            
            {/* CTA Button with glow */}
            <div className="relative group">
              <div className="absolute inset-0 bg-primary rounded-lg blur-lg opacity-50 group-hover:opacity-75 transition-opacity animate-pulse" />
              <Button 
                size="lg" 
                className="relative w-full text-sm md:text-lg shadow-strong hover:shadow-premium hover:scale-[1.02] transition-all duration-300" 
                onClick={() => {
                  document.getElementById('master-plan')?.scrollIntoView({
                    behavior: 'smooth',
                    block: 'center'
                  });
                }}
              >
                🔥 Quero Aprender o Método 3C Agora!
              </Button>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};