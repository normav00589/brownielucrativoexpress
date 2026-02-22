import { useEffect, useState, useCallback, memo } from "react";
import { Flame } from "lucide-react";

interface UrgencyBannerProps {
  onTimerExpire?: () => void;
}

export const UrgencyBanner = memo(({ onTimerExpire }: UrgencyBannerProps) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 14, seconds: 59 });
  const [hasExpired, setHasExpired] = useState(false);

  const resetTimer = useCallback(() => {
    setTimeLeft({ hours: 0, minutes: 14, seconds: 59 });
    setHasExpired(false);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        if (!hasExpired) {
          setHasExpired(true);
          onTimerExpire?.();
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [hasExpired, onTimerExpire]);

  useEffect(() => {
    (window as any).__resetUrgencyTimer = resetTimer;
    return () => { delete (window as any).__resetUrgencyTimer; };
  }, [resetTimer]);

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div 
      className="sticky top-0 z-50 bg-[hsl(0,75%,45%)] border-b border-white/10"
      style={{ contain: 'layout style' }}
    >
      <div className="py-2.5 md:py-3 px-3">
        <div className="container mx-auto flex flex-col items-center gap-1.5 md:gap-2">
          {/* Copy line */}
          <div className="flex items-center gap-1.5 flex-wrap justify-center">
            <Flame className="w-4 h-4 text-yellow-300 animate-pulse flex-shrink-0" />
            <span className="font-heading font-bold text-xs md:text-sm text-white text-center leading-tight">
              O preço de <span className="text-yellow-300 font-black">R$2,90</span> vai expirar — depois volta pra <span className="line-through text-white/70">R$29,90</span>
            </span>
            <Flame className="w-4 h-4 text-yellow-300 animate-pulse flex-shrink-0 hidden sm:block" />
          </div>
          
          {/* Timer blocks */}
          <div className="flex items-center gap-1.5">
            <div className="bg-[hsl(0,0%,8%)] rounded-md px-2.5 py-1 min-w-[40px] text-center border border-white/10">
              <span className="font-heading font-black text-lg md:text-xl text-white tabular-nums">{pad(timeLeft.hours)}</span>
            </div>
            <span className="font-heading font-black text-white text-lg">:</span>
            <div className="bg-[hsl(0,0%,8%)] rounded-md px-2.5 py-1 min-w-[40px] text-center border border-white/10">
              <span className="font-heading font-black text-lg md:text-xl text-white tabular-nums">{pad(timeLeft.minutes)}</span>
            </div>
            <span className="font-heading font-black text-white text-lg">:</span>
            <div className="bg-[hsl(0,0%,8%)] rounded-md px-2.5 py-1 min-w-[40px] text-center border border-white/10">
              <span className="font-heading font-black text-lg md:text-xl text-white tabular-nums">{pad(timeLeft.seconds)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

UrgencyBanner.displayName = 'UrgencyBanner';
