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
    <div className="bg-gradient-warm py-3 px-4 sticky top-0 z-50 shadow-neon-strong">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-3 md:gap-8 text-primary-foreground">
        <div className="flex items-center gap-2">
          <AlertCircle className="w-4 h-4 md:w-5 md:h-5 animate-neon-pulse" />
          <span className="font-heading font-bold text-xs md:text-base">
            🎄 OFERTA EXPIRA EM:
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 md:w-5 md:h-5" />
          <div className="flex gap-1.5 md:gap-2 font-heading font-bold text-base md:text-xl">
            <span className="bg-primary-foreground text-primary px-2 py-1 rounded shadow-neon text-sm md:text-lg">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="text-sm md:text-base">:</span>
            <span className="bg-primary-foreground text-primary px-2 py-1 rounded shadow-neon text-sm md:text-lg">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="text-sm md:text-base">:</span>
            <span className="bg-primary-foreground text-primary px-2 py-1 rounded shadow-neon text-sm md:text-lg">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
          </div>
        </div>
        <div className="font-heading font-bold text-xs md:text-base animate-neon-pulse">
          🔥 Restam apenas {spotsLeft} vagas!
        </div>
      </div>
    </div>
  );
};
