import { useEffect, useState, useCallback, useMemo } from "react";
import { Clock, AlertCircle, Zap } from "lucide-react";

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
  
  // Detect mobile for reduced particles
  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(max-width: 768px)').matches;
  }, []);
  
  const particleCount = isMobile ? 3 : 6;

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
        // Timer expired
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
    <div className="relative py-3 md:py-4 px-4 sticky top-0 z-50 overflow-hidden border-b-2 border-accent/50">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-secondary to-background" />
      
      {/* Energy wave effect - hidden on mobile */}
      <div className="energy-wave hidden md:block" />
      <div className="energy-wave hidden md:block" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating particles - reduced count */}
      {[...Array(particleCount)].map((_, i) => (
        <div
          key={i}
          className="particle hidden md:block"
          style={{
            left: `${(i * 15) + 10}%`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + (i % 2)}s`
          }}
        />
      ))}
      
      {/* Glitter effect overlay */}
      <div className="absolute inset-0 shimmer-effect opacity-20" />
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-2 md:gap-8 text-foreground relative z-10">
        <div className="flex items-center gap-2 group">
          <Zap className="w-5 h-5 md:w-6 md:h-6 text-accent animate-pulse" />
          <span className="font-heading font-bold text-sm md:text-lg bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent">
            ⚡ OFERTA RELÂMPAGO:
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent" />
          <div className="flex gap-2 md:gap-3 font-heading font-bold text-lg md:text-2xl">
            <span className="bg-gradient-to-br from-accent to-accent/70 text-background px-3 py-2 rounded-lg shadow-neon-strong border-2 border-accent/50">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-accent animate-pulse">:</span>
            <span className="bg-gradient-to-br from-accent to-accent/70 text-background px-3 py-2 rounded-lg shadow-neon-strong border-2 border-accent/50">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
        
        <div className="font-heading font-bold text-sm md:text-lg animate-bounce">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            🔥 Restam apenas {spotsLeft} vagas!
          </span>
        </div>
      </div>
    </div>
  );
};
