import { useEffect, useState, useCallback, memo } from "react";
import { Clock, Flame } from "lucide-react";

interface UrgencyBannerProps {
  onTimerExpire?: () => void;
}

export const UrgencyBanner = memo(({ onTimerExpire }: UrgencyBannerProps) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 4, minutes: 57, seconds: 55 });
  const [spotsLeft, setSpotsLeft] = useState(23);
  const [hasExpired, setHasExpired] = useState(false);

  const resetTimer = useCallback(() => {
    setTimeLeft({ hours: 4, minutes: 57, seconds: 55 });
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
    const spotsTimer = setInterval(() => {
      setSpotsLeft((prev) => Math.max(5, prev > 5 ? prev - 1 : prev));
    }, 180000);
    return () => clearInterval(spotsTimer);
  }, []);

  useEffect(() => {
    (window as any).__resetUrgencyTimer = resetTimer;
    return () => { delete (window as any).__resetUrgencyTimer; };
  }, [resetTimer]);

  const formatTime = `${String(timeLeft.hours).padStart(2, "0")}:${String(timeLeft.minutes).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`;

  return (
    <div className="py-3 md:py-4 px-4 sticky top-0 z-50 bg-[hsl(20,22%,6%)] border-b border-white/10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-foreground">
        <div className="flex items-center gap-2">
          <span className="text-[hsl(10,70%,55%)]">⚠️</span>
          <span className="font-heading font-semibold text-sm md:text-base text-white/90">
            OFERTA EXPIRA EM:
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 md:w-5 md:h-5 text-[hsl(10,70%,55%)]" />
          <span className="font-heading font-bold text-base md:text-xl text-[hsl(10,70%,55%)] border border-[hsl(10,70%,55%)]/40 rounded-lg px-3 py-1.5">
            {formatTime}
          </span>
        </div>
        
        <div className="flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5">
          <Flame className="w-4 h-4 text-gold" />
          <span className="font-heading font-semibold text-sm md:text-base text-white/90">
            RESTAM APENAS <span className="text-gold">{spotsLeft}</span> VAGAS!
          </span>
        </div>
      </div>
    </div>
  );
});

UrgencyBanner.displayName = 'UrgencyBanner';
