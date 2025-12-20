import { useEffect, useState, memo } from "react";
import { CheckCircle } from "lucide-react";

const cities = [
  "São Paulo", "Rio de Janeiro", "Belo Horizonte", "Curitiba", "Porto Alegre",
  "Salvador", "Brasília", "Fortaleza", "Recife", "Manaus"
];

const names = [
  "Maria S.", "Ana P.", "Carla M.", "Juliana R.", "Patricia L.",
  "Fernanda C.", "Roberta A.", "Luciana B.", "Camila F.", "Daniela V."
];

export const SaleNotification = memo(() => {
  const [show, setShow] = useState(false);
  const [notification, setNotification] = useState({ name: "", city: "" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Delay initial mount by 5 seconds for better LCP
    const mountTimer = setTimeout(() => {
      setMounted(true);
    }, 5000);

    return () => clearTimeout(mountTimer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const showNotification = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const randomCity = cities[Math.floor(Math.random() * cities.length)];
      setNotification({ name: randomName, city: randomCity });
      setShow(true);
      
      setTimeout(() => {
        setShow(false);
      }, 5000);
    };

    const interval = setInterval(showNotification, 20000);
    // First notification after 8 seconds of component mount
    const firstTimer = setTimeout(showNotification, 3000);

    return () => {
      clearInterval(interval);
      clearTimeout(firstTimer);
    };
  }, [mounted]);

  if (!mounted || !show) return null;

  return (
    <div className="fixed bottom-8 left-8 z-50 animate-fade-in">
      <div className="bg-card border border-accent/50 shadow-lg rounded-lg p-4 max-w-xs">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="text-sm">
            <p className="font-heading font-semibold text-card-foreground">
              {notification.name} de {notification.city}
            </p>
            <p className="text-muted-foreground">
              acabou de comprar o <span className="text-accent font-semibold">Plano Master</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

SaleNotification.displayName = 'SaleNotification';
