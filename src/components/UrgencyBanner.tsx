import { useEffect, useState, useCallback, memo } from "react";

interface UrgencyBannerProps {
  onTimerExpire?: () => void;
}

export const UrgencyBanner = memo(({ onTimerExpire }: UrgencyBannerProps) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 14, seconds: 59 });
  const [hasExpired, setHasExpired] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(23);

  const resetTimer = useCallback(() => {
    setTimeLeft({ hours: 0, minutes: 14, seconds: 59 });
    setHasExpired(false);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (!hasExpired) {
          setHasExpired(true);
          onTimerExpire?.();
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [hasExpired, onTimerExpire]);

  // Spots decrement
  useEffect(() => {
    const decrement = () => {
      setSpotsLeft((prev) => Math.max(3, prev - (Math.random() > 0.5 ? 2 : 1)));
    };
    const interval = setInterval(decrement, 30000 + Math.random() * 60000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    (window as any).__resetUrgencyTimer = resetTimer;
    return () => { delete (window as any).__resetUrgencyTimer; };
  }, [resetTimer]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="sticky top-0 z-50 border-b border-gold/20"
      style={{ background: 'hsl(15,30%,6%)', contain: 'layout style' }}
    >
      <div className="py-2.5 md:py-3 px-3">
        <div className="container mx-auto flex flex-col items-center gap-1.5 md:gap-2">
          {/* Top row: social proof + spots */}
          <div className="flex items-center gap-3 flex-wrap justify-center">
            <span className="flex items-center gap-1.5 text-xs text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--neon-green))] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--neon-green))]"></span>
              </span>
              <span className="font-semibold">+2.400 Alunas</span>
            </span>
            <span className="text-white/30 hidden sm:inline">|</span>
            <span className="bg-[hsl(0,70%,50%)] text-white text-xs font-bold px-2.5 py-0.5 rounded-md animate-pulse">
              🔥 APENAS {spotsLeft} VAGAS
            </span>
          </div>

          {/* Price row */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <span className="text-[hsl(25,95%,55%)] flex-shrink-0">🔥</span>
            <span className="font-heading font-bold text-xs md:text-sm text-white/90 text-center leading-tight">
              O preço de <span className="text-gold font-black">R$2,90</span> vai expirar — depois volta pra <span className="line-through text-white/80">R$29,90</span>
            </span>
          </div>

          {/* Timer */}
          <div className="flex items-center gap-1.5">
            <div className="bg-[hsl(20,20%,10%)] rounded-md px-2.5 py-1 min-w-[40px] text-center border border-gold/20">
              <span className="font-heading font-black text-lg md:text-xl text-gold tabular-nums">{pad(timeLeft.hours)}</span>
            </div>
            <span className="font-heading font-black text-gold/60 text-lg">:</span>
            <div className="bg-[hsl(20,20%,10%)] rounded-md px-2.5 py-1 min-w-[40px] text-center border border-gold/20">
              <span className="font-heading font-black text-lg md:text-xl text-gold tabular-nums">{pad(timeLeft.minutes)}</span>
            </div>
            <span className="font-heading font-black text-gold/60 text-lg">:</span>
            <div className="bg-[hsl(20,20%,10%)] rounded-md px-2.5 py-1 min-w-[40px] text-center border border-gold/20">
              <span className="font-heading font-black text-lg md:text-xl text-[hsl(10,70%,55%)] tabular-nums">{pad(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

UrgencyBanner.displayName = 'UrgencyBanner';
