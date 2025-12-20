import { useEffect, useState, useCallback, useMemo } from "react";
import { Clock, Zap } from "lucide-react";

interface UrgencyBannerProps {
  onTimerExpire?: () => void;
}

export const UrgencyBanner = ({ onTimerExpire }: UrgencyBannerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    minutes: 5,
    seconds: 0,
  });
  const [spotsLeft, setSpotsLeft] = useState(23);
  const [hasExpired, setHasExpired] = useState(false);
  
  // Detect mobile for reduced effects
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches;
  }, []);

  const resetTimer = useCallback(() => {
    setTimeLeft({ minutes: 5, seconds: 0 });
    setHasExpired(false);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { minutes: prev.minutes - 1, seconds: 59 };
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
      setSpotsLeft((prev) => {
        if (prev > 5) {
          return Math.max(5, prev - 1);
        }
        return prev;
      });
    }, 180000);

    return () => clearInterval(spotsTimer);
  }, []);

  // Expose reset function via window for external control
  useEffect(() => {
    (window as any).__resetUrgencyTimer = resetTimer;
    return () => {
      delete (window as any).__resetUrgencyTimer;
    };
  }, [resetTimer]);

  return (
    <div className="relative py-3 md:py-4 px-4 sticky top-0 z-50 overflow-hidden border-b border-accent/30 bg-background/95 backdrop-blur-sm">
      {/* Simple gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-secondary/50 to-background" />
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-foreground relative z-10">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <span className="font-heading font-bold text-sm md:text-lg text-accent">
            ⚡ OFERTA RELÂMPAGO:
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <div className="flex gap-2 md:gap-3 font-heading font-bold text-lg md:text-2xl">
            <span className="bg-accent text-background px-3 py-2 rounded-lg shadow-lg">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-accent">:</span>
            <span className="bg-accent text-background px-3 py-2 rounded-lg shadow-lg">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
        
        <div className="font-heading font-bold text-sm md:text-lg">
          <span className="text-primary">
            🔥 Restam apenas {spotsLeft} vagas!
          </span>
        </div>
      </div>
    </div>
  );
};
