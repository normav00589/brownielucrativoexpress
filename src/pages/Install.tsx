import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Download, Check, Smartphone } from "lucide-react";

export default function Install() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Verifica se já está instalado
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    // Captura o evento de instalação
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    
    setDeferredPrompt(null);
    setIsInstallable(false);
  };

  return (
    <div className="min-h-screen bg-gradient-hero flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-card rounded-3xl shadow-premium p-8 md:p-12 text-center space-y-8">
        <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-neon rounded-full mb-4">
          <Smartphone className="w-12 h-12 text-secondary" />
        </div>

        <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground">
          Instale o App Brownies Lucrativos
        </h1>

        <p className="text-lg text-muted-foreground">
          Tenha acesso rápido às suas receitas, trabalhe offline e aproveite uma experiência mais fluida!
        </p>

        <div className="space-y-4">
          {isInstalled ? (
            <div className="bg-green-50 border-2 border-green-500 rounded-xl p-6">
              <div className="flex items-center justify-center gap-3 text-green-700">
                <Check className="w-6 h-6" />
                <span className="font-semibold text-lg">App já instalado!</span>
              </div>
              <p className="text-green-600 mt-2">
                Você pode acessar o app pela tela inicial do seu celular.
              </p>
            </div>
          ) : isInstallable ? (
            <Button
              size="lg"
              className="w-full text-xl py-6"
              onClick={handleInstallClick}
            >
              <Download className="w-6 h-6 mr-2" />
              Instalar App
            </Button>
          ) : (
            <div className="bg-muted rounded-xl p-6 space-y-4">
              <h3 className="font-heading font-bold text-xl text-foreground">
                Como instalar:
              </h3>
              
              <div className="text-left space-y-3">
                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    1
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">iPhone (Safari):</p>
                    <p className="text-sm text-muted-foreground">
                      Toque no botão de compartilhar (quadrado com seta) → "Adicionar à Tela Inicial"
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    2
                  </span>
                  <div>
                    <p className="font-semibold text-foreground">Android (Chrome):</p>
                    <p className="text-sm text-muted-foreground">
                      Toque no menu (três pontos) → "Adicionar à tela inicial" ou "Instalar app"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-4 pt-6">
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl p-4">
            <div className="text-3xl mb-2">⚡</div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-1">
              Acesso Rápido
            </h4>
            <p className="text-xs text-muted-foreground">
              Abra direto da tela inicial
            </p>
          </div>

          <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-xl p-4">
            <div className="text-3xl mb-2">📱</div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-1">
              Funciona Offline
            </h4>
            <p className="text-xs text-muted-foreground">
              Use sem internet
            </p>
          </div>

          <div className="bg-gradient-to-br from-gold/5 to-gold/10 rounded-xl p-4">
            <div className="text-3xl mb-2">🚀</div>
            <h4 className="font-heading font-bold text-sm text-foreground mb-1">
              Mais Rápido
            </h4>
            <p className="text-xs text-muted-foreground">
              Carregamento instantâneo
            </p>
          </div>
        </div>

        <Button
          variant="outline"
          onClick={() => window.location.href = '/'}
          className="mt-6"
        >
          Voltar para o site
        </Button>
      </div>
    </div>
  );
}
