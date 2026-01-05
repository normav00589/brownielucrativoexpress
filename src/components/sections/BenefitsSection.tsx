import varietyBrownies from "@/assets/variety-brownies.jpg";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const benefits = [{
  icon: "📃",
  title: "50 Receitas Incríveis",
  description: "De Nutella a Red Velvet e muito mais"
}, {
  icon: "📃",
  title: "Mapa dos Brownies",
  description: "Utensílios essenciais e técnicas profissionais"
}, {
  icon: "💰",
  title: "Planilha de Precificação",
  description: "Calcule seu lucro automaticamente"
}, {
  icon: "📽️",
  title: "Curso em Vídeo Aulas",
  description: "Passo a passo fácil de seguir"
}, {
  icon: "✅",
  title: "Suporte direto comigo",
  description: "Tire suas dúvidas diretamente com o criador"
}, {
  icon: "✅",
  title: "Acesso Vitalício",
  description: "Acesse quando quiser, para sempre"
}];

export const BenefitsSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section ref={ref} className={`py-12 md:py-20 px-4 bg-section-dark relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">O Que Você </span>
            <span className="text-gold">Vai Receber</span>
          </h2>
          <p className="text-white/60 text-lg">
            Tudo que você precisa para começar a faturar com brownies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-section-light border border-white/10 rounded-xl p-6 transition-all duration-300 hover:border-gold/30 cursor-pointer group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-white group-hover:text-gold transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-white/60 group-hover:text-white/80 transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <img 
            src={varietyBrownies} 
            alt="Variedade de brownies gourmet deliciosos" 
            className="rounded-2xl shadow-lg border border-white/10 mx-auto max-w-2xl w-full hover:scale-105 transition-transform duration-500"
            style={{ boxShadow: '0 0 50px rgba(255, 150, 50, 0.15)' }}
          />
        </div>
      </div>
    </section>
  );
};
