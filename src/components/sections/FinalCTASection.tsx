import { useState, useEffect } from "react";
import { Sparkles, Shield } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";
import { trackInitiateCheckout } from "@/lib/fbTracking";

export const FinalCTASection = () => {
  const [spotsLeft, setSpotsLeft] = useState(11);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft((prev) => Math.max(2, prev - 1));
    }, 45000 + Math.random() * 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-section-2 text-white relative overflow-hidden">
      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-6 md:space-y-8">
          <div className="inline-flex items-center gap-2 text-4xl md:text-6xl float-animation">
            <Sparkles className="text-gold" />
            🍫
            <Sparkles className="text-gold" />
          </div>

          {/* Spots badge */}
          <div className="inline-flex items-center gap-2 bg-[hsl(0,70%,50%)] px-5 py-2 rounded-full animate-pulse">
            <span className="text-white font-heading font-bold text-sm md:text-base">
              🔥 ÚLTIMAS {spotsLeft} VAGAS COM DESCONTO
            </span>
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight">
            <span className="text-white">O preço de </span>
            <span className="text-gold">R$2,90 é por tempo limitado!</span>
          </h2>
          
          <p className="text-lg md:text-2xl font-body max-w-2xl mx-auto text-secondary-foreground">
            Depois dessa promoção, o valor volta para <span className="line-through text-white/80">R$29,90</span>. Garanta agora e comece a lucrar hoje mesmo.
          </p>
          
          <a
            href="https://www.ggcheckout.com/checkout/v5/bi4rE4iOdJz77kLNWHrb"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              trackViewContent('Final CTA - Brownies Lucrativos', 2.90);
              trackInitiateCheckout(2.90, 'Final CTA Direct Checkout');
            }}
            className="inline-block mt-8 text-lg md:text-2xl px-8 md:px-12 py-4 md:py-6 bg-gradient-to-r from-[hsl(38,90%,55%)] via-[hsl(42,95%,60%)] to-[hsl(38,90%,55%)] text-[hsl(20,30%,15%)] font-heading font-bold rounded-xl hover:scale-105 transition-transform duration-300 shadow-lg"
            style={{ boxShadow: '0 4px 35px rgba(255, 200, 100, 0.3)' }}
          >
            🔥 Quero Garantir Minha Vaga!
          </a>
          
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-2 text-[hsl(var(--neon-green))]">
              <Shield className="w-4 h-4" />
              <span className="text-xs font-semibold">Garantia de 14 dias • Pagamento Seguro</span>
            </div>
            <p className="text-xs md:text-sm text-white">
              Acesso instantâneo • Receba pelo WhatsApp • Suporte incluso
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
