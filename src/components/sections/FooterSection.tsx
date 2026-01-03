import { Mail } from "lucide-react";
import logoBrownie from "@/assets/logo-brownie.png";

export const FooterSection = () => {
  return (
    <footer className="bg-[hsl(20,20%,8%)] text-foreground py-12 px-4 border-t border-hot-pink/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-body text-sm text-white/80">
              Transformando cozinhas em negócios lucrativos desde 2020
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4 text-hot-pink">Links Úteis</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="text-white/70 hover:text-hot-pink transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-white/70 hover:text-hot-pink transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-white/70 hover:text-hot-pink transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4 text-vibrant-orange">Contato</h4>
            <div className="flex items-center gap-2 font-body text-sm text-white/70">
              <Mail className="w-4 h-4 text-vibrant-orange" />
              <span>suporte@brownieslucrativos.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-hot-pink/20 pt-8 text-center">
          <p className="font-body text-sm text-white/80 mb-4">
            📜 <span className="font-semibold text-white">Missão:</span> Tornar o brownie uma fonte de liberdade financeira para milhares de pessoas.
          </p>
          <p className="font-body text-xs text-white/50">
            © {new Date().getFullYear()} Brownies Lucrativos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
