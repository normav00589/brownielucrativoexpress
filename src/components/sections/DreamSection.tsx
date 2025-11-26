import dreamPackaging from "@/assets/dream-packaging.webp";
export const DreamSection = () => {
  return <section className="py-12 md:py-20 px-4 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(234,193,123,0.2),transparent_70%)] -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-4 md:space-y-6">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-chocolate leading-tight text-center">
              Imagine ver seus brownies saindo do forno com{" "}
              <span className="text-primary">casquinha crocante</span> e{" "}
              <span className="text-primary">interior cremoso</span>
            </h2>
            
            <div className="space-y-3 md:space-y-4 font-body text-base md:text-lg">
              <p className="text-chocolate-light bg-card p-4 rounded-xl border border-accent/20 shadow-soft">
                Embalando em caixinhas lindas e recebendo pedidos pelo WhatsApp no mesmo dia.
              </p>
              
              <p className="text-chocolate-light bg-card p-4 rounded-xl border border-accent/20 shadow-soft">
                O aroma de chocolate, a textura perfeita e a sensação de ver suas fornadas virando dinheiro em poucas horas.
              </p>
              
              <p className="font-bold text-lg md:text-xl bg-gradient-neon p-6 rounded-2xl shadow-neon-strong border-2 border-accent text-chocolate">
                ✨ Essa é a realidade de quem domina o Método 3C: Casquinha, Cremoso e Caixinha.
              </p>
            </div>
          </div>
          
          <div className="float-animation">
            <img src={dreamPackaging} alt="Embalando brownies com app" width="1024" height="1024" className="rounded-3xl shadow-premium w-full h-auto border-4 border-gold/40" />
          </div>
        </div>
      </div>
    </section>;
};