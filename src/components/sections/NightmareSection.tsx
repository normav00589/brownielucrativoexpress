import problemBrownies from "@/assets/problem-brownies.jpg";

export const NightmareSection = () => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-background via-cream to-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(178,34,34,0.08),transparent_70%)] -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={problemBrownies} 
              alt="Brownies com problemas" 
              className="rounded-2xl shadow-strong w-full h-auto border-2 border-primary/30"
            />
          </div>
          
          <div className="space-y-4 md:space-y-6 order-1 md:order-2">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-chocolate leading-tight">
              Você já tentou fazer brownies e o resultado foi <span className="text-primary">seco, sem graça</span> ou impossível de vender?
            </h2>
            
            <div className="space-y-3 md:space-y-4 font-body text-base md:text-lg">
              <p className="text-chocolate-light bg-card/70 p-4 rounded-lg border border-accent/10">
                Ou já pensou em ter uma renda extra com doces, mas não sabia por onde começar?
              </p>
              
              <p className="text-chocolate-light bg-card/70 p-4 rounded-lg border border-accent/10">
                É frustrante ver os outros ganhando dinheiro com sobremesas simples enquanto você ainda tenta achar o ponto certo.
              </p>
              
              <p className="text-chocolate font-bold text-lg md:text-xl bg-gradient-to-r from-accent/20 to-accent/10 p-6 rounded-xl border-l-4 border-accent shadow-medium">
                Mas e se eu te dissesse que o segredo não está em sorte ou talento, e sim em um <span className="text-primary">método simples</span> que qualquer pessoa pode dominar?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
