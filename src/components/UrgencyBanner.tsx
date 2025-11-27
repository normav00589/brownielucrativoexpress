import { useEffect, useState } from "react";
import { Clock, AlertCircle } from "lucide-react";

export const UrgencyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });
  const [spotsLeft, setSpotsLeft] = useState(23);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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

  return (
    <div className="relative py-4 px-4 sticky top-0 z-50 overflow-hidden border-b-2 border-accent/50">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-secondary to-background animate-pulse" />
      
      {/* Energy wave effect */}
      <div className="energy-wave" />
      <div className="energy-wave" style={{ animationDelay: '1.5s' }} />
      
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${(i * 8) + 5}%`,
            animationDelay: `${i * 0.3}s`,
            animationDuration: `${3 + (i % 3)}s`
          }}
        />
      ))}
      
      {/* Glitter effect overlay */}
      <div className="absolute inset-0 shimmer-effect opacity-30" />
      
      {/* Neon glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent blur-xl" />
      
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-foreground relative z-10">
        <div className="flex items-center gap-2 group">
          <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-accent animate-pulse group-hover:scale-110 transition-transform" />
          <span className="font-heading font-bold text-sm md:text-lg bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent animate-pulse">
            🎄 OFERTA EXPIRA EM:
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 md:w-6 md:h-6 text-accent animate-spin" style={{ animationDuration: '3s' }} />
          <div className="flex gap-2 md:gap-3 font-heading font-bold text-lg md:text-2xl">
            <span className="bg-gradient-to-br from-accent to-accent/70 text-background px-3 py-2 rounded-lg shadow-neon-strong border-2 border-accent/50 hover:scale-110 transition-transform">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-accent animate-pulse">:</span>
            <span className="bg-gradient-to-br from-accent to-accent/70 text-background px-3 py-2 rounded-lg shadow-neon-strong border-2 border-accent/50 hover:scale-110 transition-transform">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-accent animate-pulse">:</span>
            <span className="bg-gradient-to-br from-accent to-accent/70 text-background px-3 py-2 rounded-lg shadow-neon-strong border-2 border-accent/50 hover:scale-110 transition-transform">
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
