import { Mail } from "lucide-react";

export const FooterSection = () => {
  return (
    <footer className="bg-gradient-to-b from-section-dark via-[hsl(15,30%,5%)] to-[hsl(10,25%,3%)] text-foreground py-12 px-4 border-t border-gold/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-body text-sm text-white">
              Transformando cozinhas em negócios lucrativos desde 2020
            </p>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4 text-gold">Links Úteis</h4>
            <ul className="space-y-2 font-body text-sm">
              <li><a href="#" className="text-white hover:text-gold transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-white hover:text-gold transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-white hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold mb-4 text-gold">Contato</h4>
            <div className="flex items-center gap-2 font-body text-sm text-white/50">
              <Mail className="w-4 h-4 text-gold" />
              <span>suporte@brownieslucrativos.com</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="font-body text-sm text-white/60 mb-4">
            📜 <span className="font-semibold text-white">Missão:</span> Tornar o brownie uma fonte de liberdade financeira para milhares de pessoas.
          </p>
          <p className="font-body text-xs text-white/40">
            © {new Date().getFullYear()} Brownies Lucrativos. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
