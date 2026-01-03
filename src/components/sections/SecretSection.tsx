import secretBrownies from "@/assets/secret-brownies.jpg";
import { Sparkles, Lock, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export const SecretSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section ref={ref} className={`py-12 md:py-20 px-4 bg-[hsl(20,20%,10%)] text-foreground relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating particles */}
        <div className="absolute top-20 left-10 w-3 h-3 bg-hot-pink/40 rounded-full animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute top-40 right-20 w-2 h-2 bg-vibrant-orange/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-32 left-1/4 w-4 h-4 bg-gold/30 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-hot-pink/60 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-20 right-10 w-3 h-3 bg-vibrant-orange/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Gradient orbs */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-hot-pink/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-vibrant-orange/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {/* Shimmer line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-hot-pink/50 to-transparent shimmer-effect" />
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Image - appears second on mobile, first on desktop */}
          <div className="order-2 md:order-1 flex justify-center w-full">
            <div className="relative w-full max-w-xs md:max-w-md mx-auto group">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-hot-pink/20 rounded-2xl md:rounded-3xl blur-lg scale-105 opacity-50" />
              
              {/* Image with optimization */}
              <img 
                alt="Brownies com casquinha perfeita criados pela Chef Gabriella" 
                className="relative rounded-2xl md:rounded-3xl shadow-lg w-full h-auto border-2 border-vibrant-orange/40 aspect-[4/3] object-cover" 
                src="/lovable-uploads/5e88750b-42e2-43d5-816e-6d9503a59595.webp"
                loading="lazy"
                decoding="async"
                width={400}
                height={300}
              />
              
              {/* Chef name badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-hot-pink via-vibrant-orange to-hot-pink px-4 py-1.5 md:px-5 md:py-2 rounded-full shadow-lg">
                <span className="font-heading font-bold text-white text-xs md:text-sm whitespace-nowrap flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                  Chef Gabriella Castro
                  <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
                </span>
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-3 -right-2 md:-bottom-4 md:-right-4 bg-[hsl(174,72%,56%)] text-white px-3 py-1.5 md:px-4 md:py-2 shadow-lg font-heading font-bold text-xs md:text-sm rounded-lg flex items-center gap-1.5">
                <Lock className="w-3 h-3 md:w-4 md:h-4" />
                Método Exclusivo
              </div>
            </div>
          </div>
          
          {/* Content - appears first on mobile, second on desktop */}
          <div className="space-y-5 md:space-y-6 order-1 md:order-2">
            {/* Header */}
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-hot-pink/20 text-hot-pink px-3 py-1.5 rounded-full text-xs md:text-sm font-bold mb-3 border border-hot-pink/30">
                <Sparkles className="w-4 h-4" />
                O que as confeiteiras de sucesso não contam
              </div>
              <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white leading-tight">
                O Método 3C que{" "}
                <span className="bg-gradient-to-r from-hot-pink to-vibrant-orange bg-clip-text text-transparent">Triplicou Minhas Vendas</span>
              </h2>
            </div>
            
            <div className="space-y-4 font-body text-sm md:text-base">
              {/* Main value prop with premium effects */}
              <div className="relative group perspective-1000">
                {/* Animated gradient border */}
                <div className="absolute -inset-[2px] bg-gradient-to-r from-hot-pink via-vibrant-orange to-gold rounded-xl md:rounded-2xl opacity-75 group-hover:opacity-100 blur-sm transition-all duration-500 animate-gradient-x" />
                <div className="absolute -inset-[1px] bg-gradient-to-r from-vibrant-orange via-hot-pink to-gold rounded-xl md:rounded-2xl opacity-60 animate-gradient-x" style={{ animationDelay: '-1s' }} />
                
                {/* Floating particles inside */}
                <div className="absolute inset-0 overflow-hidden rounded-xl md:rounded-2xl pointer-events-none">
                  <div className="absolute top-2 left-4 w-1.5 h-1.5 bg-gold rounded-full animate-float opacity-60" />
                  <div className="absolute top-4 right-6 w-1 h-1 bg-hot-pink rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
                  <div className="absolute bottom-3 left-1/3 w-1 h-1 bg-vibrant-orange rounded-full animate-float" style={{ animationDelay: '1s' }} />
                </div>
                
                <div className="relative bg-[hsl(20,20%,12%)] backdrop-blur-md p-5 md:p-6 rounded-xl md:rounded-2xl shadow-2xl text-center md:text-left transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-[0_20px_50px_-12px_rgba(255,107,107,0.4)]">
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent rounded-xl md:rounded-2xl shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <p className="relative text-xl md:text-2xl lg:text-3xl font-bold flex items-center justify-center md:justify-start gap-3">
                    <span className="relative">
                      <Sparkles className="w-6 h-6 md:w-7 md:h-7 text-gold animate-pulse drop-shadow-[0_0_8px_rgba(255,215,0,0.6)]" />
                      <Sparkles className="absolute inset-0 w-6 h-6 md:w-7 md:h-7 text-gold/50 animate-ping" />
                    </span>
                    <span className="bg-gradient-to-r from-hot-pink via-vibrant-orange to-gold bg-clip-text text-transparent animate-gradient-x bg-[length:200%_auto]">
                      Casquinha + Cremoso + Caixinha
                    </span>
                  </p>
                  <p className="relative text-white text-sm md:text-base lg:text-lg mt-2 md:mt-3">
                    A fórmula exata que transforma{" "}
                    <span className="relative inline-block">
                      <span className="text-red-400 font-bold line-through opacity-70">R$60</span>
                    </span>
                    {" "}em{" "}
                    <span className="relative inline-block">
                      <span className="text-vibrant-orange font-black text-lg md:text-xl animate-pulse">R$200</span>
                      <span className="absolute -inset-1 bg-vibrant-orange/20 rounded blur-sm animate-pulse" />
                    </span>
                  </p>
                </div>
              </div>
              
              {/* Benefits */}
              <div className="bg-[hsl(20,20%,12%)] backdrop-blur-sm p-4 rounded-xl border border-hot-pink/20 shadow-medium">
                <p className="leading-relaxed text-white text-center md:text-left">
                  <span className="font-bold text-hot-pink">Chega de brownies que ninguém compra.</span>{" "}
                  Esse método cria um produto que <span className="underline decoration-vibrant-orange decoration-2">vende sozinho</span> — 
                  seus clientes vão implorar por mais.
                </p>
              </div>
              
              {/* Social proof mini */}
              <div className="flex items-center justify-center md:justify-start gap-2 text-white text-xs md:text-sm">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-hot-pink/20 border-2 border-background flex items-center justify-center text-xs">👩</div>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-vibrant-orange/20 border-2 border-background flex items-center justify-center text-xs">👩</div>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gold/20 border-2 border-background flex items-center justify-center text-xs">👩</div>
                </div>
                <span className="text-white/80">+2.847 alunas já dominam esse método</span>
              </div>
              
              {/* Urgency with pulse animation */}
              <div className="relative">
                <div className="absolute inset-0 bg-hot-pink/20 rounded-xl blur-md animate-pulse" />
                <div className="relative bg-hot-pink/10 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-hot-pink/30 flex items-center gap-3">
                  <div className="relative">
                    <Clock className="w-5 h-5 md:w-6 md:h-6 text-hot-pink flex-shrink-0 animate-pulse" />
                    <div className="absolute inset-0 bg-hot-pink rounded-full blur-sm opacity-50 animate-ping" />
                  </div>
                  <p className="text-sm md:text-base text-white">
                    <span className="font-bold text-hot-pink">Acesso limitado:</span>{" "}
                    Essa técnica não vai ficar disponível para sempre.
                  </p>
                </div>
              </div>
              
              {/* Premium CTA Button */}
              <div className="relative group">
                {/* Pulsing rings */}
                <div className="absolute inset-0 rounded-xl bg-hot-pink/30 animate-ping opacity-20" />
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-hot-pink via-vibrant-orange to-gold opacity-60 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500 animate-pulse" />
                <div className="absolute -inset-[2px] rounded-xl bg-gradient-to-r from-gold via-hot-pink to-vibrant-orange animate-gradient-x opacity-80" />
                
                <Button 
                  size="lg" 
                  className="relative w-full text-base md:text-xl font-bold py-5 md:py-7 bg-gradient-to-r from-vibrant-orange via-hot-pink to-vibrant-orange hover:from-hot-pink hover:via-vibrant-orange hover:to-hot-pink shadow-[0_10px_40px_-10px_rgba(255,107,107,0.5)] hover:shadow-[0_20px_60px_-10px_rgba(255,107,107,0.7)] transform hover:scale-[1.03] transition-all duration-500 overflow-hidden group/btn text-white" 
                  onClick={() => {
                    document.getElementById('master-plan')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'center'
                    });
                  }}
                >
                  {/* Shimmer effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent shimmer-effect" />
                  
                  {/* Button content */}
                  <span className="relative flex items-center justify-center gap-2 md:gap-3">
                    <span className="text-xl md:text-2xl animate-bounce">🔥</span>
                    <span>Quero Lucrar Com Brownie!</span>
                    <span className="text-lg md:text-xl transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
