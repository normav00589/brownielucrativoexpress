import { useEffect, useState, useCallback } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Check, Clock, AlertTriangle, Sparkles, Gift } from "lucide-react";
import { trackViewContent, trackInitiateCheckout } from "@/lib/fbTracking";

interface DownsellModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownsellModal = ({ isOpen, onClose }: DownsellModalProps) => {
  const [timeLeft, setTimeLeft] = useState({ minutes: 3, seconds: 0 });

  useEffect(() => {
    if (isOpen) {
      // Reset timer when modal opens
      setTimeLeft({ minutes: 3, seconds: 0 });
      trackViewContent('Downsell Modal Aberto', 14.90);
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
        // Timer expired - close modal
        onClose();
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, onClose]);

  const handleProPlanClick = useCallback(() => {
    trackInitiateCheckout(14.90, 'Downsell - Plano PRO');
  }, []);

  const handleBasicPlanClick = useCallback(() => {
    trackInitiateCheckout(1.99, 'Downsell - Plano Básico');
  }, []);

  const benefits = [
    { text: "+80 Receitas Profissionais", value: "R$197" },
    { text: "Método 3C Completo", value: "R$297" },
    { text: "Calculadora de Lucro no App", value: "R$97" },
    { text: "Aulas de Brownies Natalinos", value: "R$147" },
    { text: "Suporte + Certificado", value: "R$97" },
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-lg p-0 border-0 bg-transparent overflow-hidden max-h-[90vh] overflow-y-auto">
        <DialogTitle className="sr-only">Oferta Especial - Plano PRO</DialogTitle>
        
        {/* Main Card */}
        <div className="relative bg-gradient-premium border-2 border-primary/50 rounded-2xl p-6 md:p-8 shadow-neon-strong">
          {/* Animated border glow */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-20 blur-xl animate-gradient-x" />
          
          {/* Floating particles - reduced for performance */}
          <div className="hidden md:block">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="particle"
                style={{
                  left: `${20 + i * 20}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + i}s`
                }}
              />
            ))}
          </div>
          
          <div className="relative z-10">
            {/* Urgency Header */}
            <div className="text-center mb-4">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-accent animate-pulse" />
                <span className="font-heading font-bold text-accent text-sm">
                  ESPERE! ÚLTIMA CHANCE!
                </span>
              </div>
              
              <h2 className="font-heading font-bold text-xl md:text-2xl text-white mb-2">
                Você estava prestes a <span className="text-accent">PERDER</span> a oportunidade de ganhar
              </h2>
              <p className="text-2xl md:text-3xl font-bold text-gradient-neon">
                R$10.000+ por mês com brownies...
              </p>
            </div>
            
            {/* Timer */}
            <div className="bg-background/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-accent/30">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-accent" />
                <span className="font-heading font-bold text-white text-sm">
                  ⚠️ ESSA OFERTA EXPIRA EM:
                </span>
              </div>
              <div className="flex justify-center gap-2 font-heading font-bold text-3xl">
                <span className="bg-primary text-white px-4 py-2 rounded-lg shadow-neon">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </span>
                <span className="text-accent self-center">:</span>
                <span className="bg-primary text-white px-4 py-2 rounded-lg shadow-neon">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </span>
              </div>
            </div>
            
            {/* Benefits List */}
            <div className="mb-6">
              <p className="text-center font-heading font-bold text-white mb-4">
                📦 POR APENAS <span className="text-accent text-2xl">R$14,90</span> você leva:
              </p>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center justify-between gap-2 bg-background/30 rounded-lg px-3 py-2">
                    <div className="flex items-center gap-2">
                      <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-body text-sm text-white">{benefit.text}</span>
                    </div>
                    <span className="text-muted-foreground text-xs line-through">{benefit.value}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-4 text-center">
                <p className="text-muted-foreground text-sm">
                  💰 TOTAL: <span className="line-through">R$835</span>
                </p>
                <p className="font-heading font-bold text-2xl text-accent">
                  APENAS R$14,90
                </p>
              </div>
            </div>
            
            {/* Bonus */}
            <div className="bg-accent/10 border border-accent/30 rounded-xl p-3 mb-6 flex items-center gap-3">
              <Gift className="w-8 h-8 text-accent flex-shrink-0" />
              <p className="text-sm text-white">
                <span className="font-bold text-accent">🎁 BÔNUS EXCLUSIVO:</span> Se você clicar agora, ganha acesso ao grupo VIP de alunas!
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="space-y-3">
              <Button 
                className="w-full bg-gradient-to-r from-primary via-accent to-primary hover:opacity-90 text-background font-heading font-bold text-lg py-6 shadow-neon-strong shimmer-effect relative overflow-hidden"
                asChild
              >
                <a 
                  href="https://danielle-dias.mycartpanda.com/checkout/202036345:1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={handleProPlanClick}
                >
                  <Sparkles className="w-5 h-5 mr-2" />
                  SIM! QUERO O PLANO PRO POR R$14,90!
                  <Sparkles className="w-5 h-5 ml-2" />
                </a>
              </Button>
              
              <a
                href="https://danielle-dias.mycartpanda.com/checkout/202036361:1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBasicPlanClick}
                className="block text-center text-muted-foreground text-sm hover:text-white transition-colors underline"
              >
                Não, prefiro o plano básico por R$1,99
              </a>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
