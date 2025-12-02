import { useState, useCallback } from "react";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/Button";
import { TrendingUp, DollarSign, Package, Calendar, Sparkles } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import confetti from "canvas-confetti";
const COST_PER_BATCH = 60;
const REVENUE_PER_BATCH = 200;
const PROFIT_PER_BATCH = 140;
const BROWNIES_PER_BATCH = 24;
export const DreamCalculatorSection = () => {
  const [monthlyGoal, setMonthlyGoal] = useState(5000);
  const {
    ref,
    isVisible
  } = useIntersectionObserver({
    threshold: 0.2
  });
  const triggerConfetti = useCallback(() => {
    const count = 50;
    const defaults = {
      origin: {
        y: 0.7
      },
      zIndex: 9999
    };
    function fire(particleRatio: number, opts: any) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }
    fire(0.25, {
      spread: 26,
      startVelocity: 55,
      colors: ['#10b981', '#fbbf24', '#f59e0b']
    });
    fire(0.2, {
      spread: 60,
      colors: ['#10b981', '#fbbf24', '#f59e0b']
    });
    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
      colors: ['#10b981', '#fbbf24', '#f59e0b']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
      colors: ['#10b981', '#fbbf24', '#f59e0b']
    });
    fire(0.1, {
      spread: 120,
      startVelocity: 45,
      colors: ['#10b981', '#fbbf24', '#f59e0b']
    });
  }, []);
  const handleSliderChange = useCallback((value: number[]) => {
    setMonthlyGoal(value[0]);

    // Trigger confetti on significant milestones
    if (value[0] % 1000 === 0 && value[0] > 0) {
      triggerConfetti();
    }
  }, [triggerConfetti]);
  const batchesPerMonth = monthlyGoal / PROFIT_PER_BATCH;
  const batchesPerWeek = batchesPerMonth / 4;
  const browniesPerDay = batchesPerMonth * BROWNIES_PER_BATCH / 30;
  const monthlyCost = batchesPerMonth * COST_PER_BATCH;
  const getMessage = () => {
    if (monthlyGoal < 3000) return "💚 Perfeito para começar uma renda extra!";
    if (monthlyGoal < 7000) return "🚀 Você pode substituir seu salário atual!";
    return "👑 Seja sua própria chefe e domine o mercado!";
  };
  const scrollToPricing = () => {
    const pricingSection = document.querySelector('[data-section="pricing"]');
    if (pricingSection) {
      pricingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  return <section ref={ref} className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-background via-background/95 to-background">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '1s'
      }} />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient-neon">
              🎯 Qual é Sua Meta dos Sonhos?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Descubra quanto você precisa produzir para alcançar seus objetivos
            </p>
          </div>

          {/* Calculator Card */}
          <div className="bg-card/50 backdrop-blur-sm border-2 border-primary/30 rounded-2xl p-8 md:p-10 shadow-2xl">
            {/* Slider */}
            <div className="mb-10">
              <div className="flex justify-between items-center mb-4">
                <label className="text-lg font-semibold text-foreground">
                  Meta de Lucro Mensal
                </label>
                <div className="text-3xl font-bold text-primary">
                  R$ {monthlyGoal.toLocaleString('pt-BR')}
                </div>
              </div>
              <Slider value={[monthlyGoal]} onValueChange={handleSliderChange} min={0} max={15000} step={500} className="w-full" />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>R$ 0</span>
                <span>R$ 15.000</span>
              </div>
            </div>

            {/* Motivational Message */}
            <div className="bg-primary/10 border border-primary/30 rounded-lg p-4 mb-8 text-center">
              <p className="text-xl font-semibold text-primary">
                {getMessage()}
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Fornadas por Semana */}
              <div className="bg-background/50 rounded-lg p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-foreground">Fornadas por Semana</h3>
                </div>
                <p className="text-3xl font-bold text-primary">
                  {batchesPerWeek.toFixed(1)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  ~{batchesPerMonth.toFixed(0)} por mês
                </p>
              </div>

              {/* Brownies por Dia */}
              <div className="bg-background/50 rounded-lg p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <Package className="w-6 h-6 text-gold" />
                  <h3 className="font-semibold text-foreground">Brownies por Dia</h3>
                </div>
                <p className="text-3xl font-bold text-gold">
                  {browniesPerDay.toFixed(0)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  {(browniesPerDay * 30).toFixed(0)} por mês
                </p>
              </div>

              {/* Investimento Mensal */}
              <div className="bg-background/50 rounded-lg p-6 border border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <DollarSign className="w-6 h-6 text-destructive" />
                  <h3 className="font-semibold text-foreground">Investimento em Ingredientes</h3>
                </div>
                <p className="text-3xl font-bold text-destructive">
                  R$ {monthlyCost.toFixed(0)}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Custo mensal total
                </p>
              </div>

              {/* Lucro Líquido */}
              <div className="bg-background/50 rounded-lg p-6 border border-primary/50 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
                <div className="relative">
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="w-6 h-6 text-primary" />
                    <h3 className="font-semibold text-foreground">Lucro Líquido Mensal</h3>
                  </div>
                  <p className="text-4xl font-bold text-primary">
                    R$ {monthlyGoal.toLocaleString('pt-BR')}
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    💰 Seu objetivo de ganhos
                  </p>
                </div>
              </div>
            </div>

            {/* Value Proposition */}
            <div className="bg-gradient-to-r from-primary/10 via-gold/10 to-primary/10 rounded-lg p-6 border border-primary/30 mb-6">
              <p className="text-center text-lg">
                <span className="font-semibold text-foreground">
                  Para alcançar R$ {monthlyGoal.toLocaleString('pt-BR')}/mês,
                </span>
                <br />
                <span className="text-muted-foreground">
                  você investiria apenas{" "}
                  <span className="text-destructive font-bold">
                    R$ {monthlyCost.toFixed(0)}
                  </span>{" "}
                  em ingredientes...
                </span>
                <br />
                <span className="text-primary font-bold text-xl">
                  O curso custa menos de 5% do seu lucro do primeiro mês! 🚀
                </span>
              </p>
            </div>

            {/* CTA */}
            <Button onClick={scrollToPricing} className="w-full h-16 text-xl font-bold relative overflow-hidden group animate-pulse hover:animate-none shadow-2xl hover:shadow-primary/50 transition-all duration-300">
              <span className="relative z-10 flex items-center justify-center gap-2 text-base">
                <Sparkles className="w-6 h-6 animate-spin" style={{
                animationDuration: '3s'
              }} />
                Quero Começar Agora!
                <Sparkles className="w-6 h-6 animate-spin" style={{
                animationDuration: '3s',
                animationDelay: '1s'
              }} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-primary to-gold opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>;
};