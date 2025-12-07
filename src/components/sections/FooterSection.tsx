import { Mail } from "lucide-react";
import logoBrownie from "@/assets/logo-brownie.png";

export const FooterSection = () => {
  return (
    <footer className="bg-gradient-card text-foreground py-12 px-4 border-t border-primary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <img src={logoBrownie} alt="Brownies Lucrativos" className="h-10 md:h-12 mb-4" />
            <p className="font-body text-sm opacity-80">
              Transformando cozinhas em negócios lucrativos desde 2020
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <div className="flex items-center gap-2 font-body text-sm">
              <Mail className="w-4 h-4" />
              <span>suporte@brownieslucrativos.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary/20 pt-8 text-center">
          <p className="font-body text-sm text-muted-foreground mb-4">
            📜 <span className="font-semibold text-foreground">Missão:</span> Tornar o brownie uma fonte de liberdade financeira para milhares de pessoas.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            © {new Date().getFullYear()} Brownies Lucrativos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
