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
    return () => {delete (window as any).__resetUrgencyTimer;};
  }, [resetTimer]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div
      className="sticky top-0 z-50"
      style={{ background: 'linear-gradient(135deg, hsl(15,30%,5%) 0%, hsl(20,40%,8%) 50%, hsl(15,30%,5%) 100%)', contain: 'layout style' }}>
      
      {/* Top accent line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />
      
      <div className="py-2 md:py-2.5 px-3">
        <div className="container mx-auto flex items-center justify-center gap-3 md:gap-5 flex-wrap">
          
          {/* Spots badge */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(0,70%,50%)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[hsl(0,70%,50%)]"></span>
            </span>
            <span className="bg-[hsl(0,70%,45%)]/90 text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
              🔥 Apenas {spotsLeft} vagas
            </span>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-5 bg-white/15" />

          {/* Price text */}
          <span className="font-heading font-bold text-xs md:text-sm text-white text-center leading-tight">
            Preço de <span className="text-accent font-black">R$2,90</span> expira em:
          </span>

          {/* Timer - inline compact */}
          <div className="flex items-center gap-1">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[36px] text-center border border-white/10">
              <span className="font-heading font-black text-base md:text-lg text-white tabular-nums">{pad(timeLeft.hours)}</span>
            </div>
            <span className="font-heading font-black text-white/40 text-sm">:</span>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[36px] text-center border border-white/10">
              <span className="font-heading font-black text-base md:text-lg text-white tabular-nums">{pad(timeLeft.minutes)}</span>
            </div>
            <span className="font-heading font-black text-white/40 text-sm">:</span>
            <div className="bg-accent/20 rounded-lg px-2 py-1 min-w-[36px] text-center border border-accent/30">
              <span className="font-heading font-black text-base md:text-lg text-accent tabular-nums">{pad(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom subtle border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </div>);

});

UrgencyBanner.displayName = 'UrgencyBanner';