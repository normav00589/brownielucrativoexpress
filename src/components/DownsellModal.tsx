import { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle } from
"@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Clock, Sparkles, Gift, Flame, Trophy, Zap, Star } from "lucide-react";
import { trackViewContent, trackInitiateCheckout } from "@/lib/fbTracking";

interface DownsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownsellModal = ({ isOpen, onClose }: DownsellModalProps) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 3, seconds: 0 });
  const [pulsePrice, setPulsePrice] = useState(false);

  const totalSeconds = timeLeft.minutes * 60 + timeLeft.seconds;
  const progressPercent = totalSeconds / 180 * 100; // 3 min = 180s

  useEffect(() => {
    if (isOpen) {
      setTimeLeft({ minutes: 3, seconds: 0 });
      trackViewContent('Downsell Modal Aberto', 9.70);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        onClose();
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onClose]);

  // Pulse effect for price every 5 seconds
  useEffect(() => {
    if (!isOpen) return;
    const pulseInterval = setInterval(() => {
      setPulsePrice(true);
      setTimeout(() => setPulsePrice(false), 500);
    }, 5000);
    return () => clearInterval(pulseInterval);
  }, [isOpen]);

  const handleProPlanClick = useCallback(() => {
    trackInitiateCheckout(9.70, 'Downsell - Plano PRO');
  }, []);

  const handleBasicPlanClick = useCallback(() => {
    trackInitiateCheckout(1.99, 'Downsell - Plano Básico');
  }, []);

  const benefits = [
  { text: "+80 Receitas Profissionais", value: "R$197", icon: "📚" },
  { text: "Método 3C Completo", value: "R$297", icon: "🎯" },
  { text: "Calculadora de Lucro", value: "R$97", icon: "💰" },
  { text: "Aulas de Brownies Natalinos", value: "R$147", icon: "🎄" },
  { text: "Suporte + Certificado", value: "R$97", icon: "🏆" }];


  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="w-[92vw] max-w-[420px] p-0 border-0 bg-transparent overflow-visible will-change-transform">
        <DialogTitle className="sr-only">Oferta Especial - Plano PRO</DialogTitle>
        
        {/* Scrollable container - optimized for mobile */}
        <div className="max-h-[80vh] overflow-y-auto overflow-x-hidden rounded-2xl overscroll-contain touch-pan-y">
          {/* Main Card - simplified shadows for mobile performance */}
          <div className="relative bg-gradient-to-b from-background via-background to-primary/20 border-2 border-accent/60 rounded-2xl shadow-lg md:shadow-[0_0_60px_rgba(255,107,0,0.3)]">
            
            {/* Top flame decoration */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
              <Flame className="w-6 h-6 text-accent animate-bounce" style={{ animationDelay: '0s' }} />
              <Flame className="w-8 h-8 text-primary animate-bounce" style={{ animationDelay: '0.1s' }} />
              <Flame className="w-6 h-6 text-accent animate-bounce" style={{ animationDelay: '0.2s' }} />
            </div>

            <div className="p-4 pt-6">
              {/* Urgency Badge */}
              <div className="text-center mb-3">
                <div className="inline-flex items-center gap-1.5 bg-destructive/90 rounded-full px-3 py-1.5 animate-pulse">
                  <Zap className="w-4 h-4 text-white" />
                  <span className="font-heading font-black text-white text-xs uppercase tracking-wide">
                    🚨 Última Chance! 🚨
                  </span>
                  <Zap className="w-4 h-4 text-white" />
                </div>
              </div>
              
              {/* Main headline */}
              <div className="text-center mb-3">
                <p className="text-white/80 text-xs mb-1">Você estava prestes a perder...</p>
                <h2 className="font-heading font-black text-xl text-white leading-tight">
                  <span className="text-accent">R$10.000+</span> por mês
                </h2>
                <p className="text-white/80 text-sm">vendendo brownies! 🍫</p>
              </div>

              {/* Timer with progress bar */}
              <div className="bg-background/90 rounded-xl p-3 mb-3 border border-accent/40">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Clock className="w-4 h-4 text-accent animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="font-heading font-bold text-white text-xs">
                    OFERTA EXPIRA EM:
                  </span>
                </div>
                
                {/* Timer display */}
                <div className="flex justify-center gap-1 font-heading font-black text-3xl mb-2">
                  <div className="bg-primary px-3 py-1 rounded-lg shadow-[0_0_20px_rgba(139,69,19,0.5)] border border-accent/50">
                    <span className="text-white">{String(timeLeft.minutes).padStart(2, "0")}</span>
                  </div>
                  <span className="text-accent self-center animate-pulse">:</span>
                  <div className="bg-primary px-3 py-1 rounded-lg shadow-[0_0_20px_rgba(139,69,19,0.5)] border border-accent/50">
                    <span className="text-white">{String(timeLeft.seconds).padStart(2, "0")}</span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="h-2 bg-background/50 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-accent via-primary to-accent transition-all duration-1000 rounded-full"
                    style={{ width: `${progressPercent}%` }} />

                </div>
              </div>

              {/* Price showcase */}
              <div className="text-center mb-3 relative">
                <div className="inline-block">
                  <p className="text-muted-foreground text-xs line-through">De R$835,00</p>
                  <div className={`transition-transform duration-300 ${pulsePrice ? 'scale-110' : 'scale-100'}`}>
                    <span className="font-heading font-black text-4xl text-accent drop-shadow-[0_0_10px_rgba(255,107,0,0.5)]">
                      R$ 8,90
                    </span>
                  </div>
                  <p className="text-white text-[10px]">Economia de 98%! 🔥</p>
                </div>
                
                {/* Floating stars */}
                <Star className="absolute -left-2 top-0 w-4 h-4 text-accent animate-pulse" />
                <Star className="absolute -right-2 top-2 w-3 h-3 text-primary animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>

              {/* Benefits Grid - compact */}
              <div className="grid grid-cols-1 gap-1.5 mb-3">
                {benefits.map((benefit, index) =>
                <div
                  key={index}
                  className="flex items-center justify-between bg-white/5 rounded-lg px-2 py-1.5 border border-white/10">

                    <div className="flex items-center gap-2">
                      <span className="text-base">{benefit.icon}</span>
                      <span className="text-white text-xs font-medium">{benefit.text}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-muted-foreground text-[10px] line-through">{benefit.value}</span>
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                )}
              </div>

              {/* Bonus badge */}
              <div className="bg-gradient-to-r from-accent/20 to-primary/20 border border-accent/40 rounded-lg p-2 mb-3 flex items-center gap-2">
                <div className="bg-accent/30 rounded-full p-1.5">
                  <Gift className="w-5 h-5 text-accent" />
                </div>
                <div className="flex-1">
                  <p className="text-accent text-xs font-bold">🎁 BÔNUS SECRETO</p>
                  <p className="text-white/80 text-[10px]">Grupo VIP exclusivo de alunas!</p>
                </div>
                <Trophy className="w-5 h-5 text-accent animate-bounce" />
              </div>

              {/* CTA Button */}
              <Button
                className="w-full bg-gradient-to-r from-accent via-primary to-accent hover:brightness-110 text-white font-heading font-black text-sm py-5 rounded-xl shadow-[0_0_30px_rgba(255,107,0,0.4)] border-2 border-white/20 relative overflow-hidden group"
                asChild>

                <a
                  href="https://www.ggcheckout.com/checkout/v5/7OPzDqPI0Ma6G0I1oISl"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleProPlanClick}>

                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  
                  <Sparkles className="w-5 h-5 mr-2 animate-pulse" />
                  <span className="relative z-10">QUERO POR R$ 8,90!</span>
                  <Sparkles className="w-5 h-5 ml-2 animate-pulse" />
                </a>
              </Button>

              {/* Guarantee text */}
              <p className="text-center text-white text-[10px] mt-2 flex items-center justify-center gap-1">
                🔒 Compra 100% segura • Garantia de 7 dias
              </p>

              {/* Secondary link */}
              <button
                onClick={() => {
                  handleBasicPlanClick();
                  window.open("https://www.ggcheckout.com/checkout/v5/bi4rE4iOdJz77kLNWHrb", "_blank");
                }}
                className="w-full text-center text-white/60 text-xs py-2 mt-2 hover:text-white/80 transition-colors underline underline-offset-2">

                Não, prefiro o plano básico por R$1,99
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>);

};