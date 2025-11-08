import { Award, TrendingUp, Users } from "lucide-react";
import gabriellaCastro from "@/assets/gabriella-castro.webp";

export const AuthoritySection = () => {
  return <section className="py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-8">
          <h2 className="font-heading font-bold md:text-4xl text-foreground text-2xl">
            Criado por Especialistas em Produtos Caseiros Lucrativos
          </h2>
          
          <div className="flex justify-center my-8">
            <img 
              src={gabriellaCastro} 
              alt="Gabriella Castro - Confeiteira, Gastrônoma e Nutricionista especialista em produtos caseiros lucrativos" 
              className="w-64 h-64 rounded-2xl object-contain shadow-lg"
            />
          </div>
          
          <p className="font-body text-muted-foreground max-w-3xl mx-auto text-lg font-bold">Desenvolvido pela confeiteira, gastrônoma e Nutri Gabriella Castro especialista em produtos caseiros lucrativos, o Método 3C já transformou milhares de cozinhas em microempresas rentáveis.</p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <Award className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                Baseado em Testes Reais
              </h3>
              <p className="font-body text-muted-foreground">
                Todas as receitas foram testadas e aprovadas por centenas de alunos
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                Foco em Lucro
              </h3>
              <p className="font-body text-muted-foreground">
                Método desenvolvido especificamente para gerar renda real
              </p>
            </div>
            
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <Users className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="font-heading font-bold text-xl mb-2 text-foreground">
                +3000 Alunos
              </h3>
              <p className="font-body text-muted-foreground">
                Milhares de pessoas já mudaram de vida com o método
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};