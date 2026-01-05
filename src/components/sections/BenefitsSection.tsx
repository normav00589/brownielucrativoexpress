import varietyBrownies from "@/assets/variety-brownies.jpg";
import { Check } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const benefits = [{
  icon: "📃",
  title: "50 Receitas Incríveis",
  description: "De Nutella a Red Velvet e muito mais",
  color: "gold"
}, {
  icon: "📃",
  title: "Mapa dos Brownies",
  description: "Utensílios essenciais e técnicas profissionais",
  color: "vibrant-orange"
}, {
  icon: "💰",
  title: "Planilha de Precificação",
  description: "Calcule seu lucro automaticamente",
  color: "neon-green"
}, {
  icon: "📽️",
  title: "Curso em Vídeo Aulas",
  description: "Passo a passo fácil de seguir",
  color: "gold"
}, {
  icon: "✅",
  title: "Suporte direto comigo",
  description: "Tire suas dúvidas diretamente com o criador",
  color: "vibrant-orange"
}, {
  icon: "✅",
  title: "Acesso Vitalício",
  description: "Acesse quando quiser, para sempre",
  color: "neon-green"
}];

export const BenefitsSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section ref={ref} className={`py-12 md:py-20 px-4 bg-background relative overflow-hidden fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-gold/3 via-transparent to-vibrant-orange/3 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">O Que Você </span>
            <span className="bg-gradient-to-r from-gold via-vibrant-orange to-gold bg-clip-text text-transparent">Vai Receber</span>
          </h2>
          <p className="text-white/70 text-lg">
            Tudo que você precisa para começar a faturar com brownies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-[hsl(20,22%,10%)] border rounded-xl p-6 transition-all duration-300 hover:scale-105 cursor-pointer group ${
                benefit.color === 'gold' ? 'border-gold/20 hover:border-gold/50' :
                benefit.color === 'vibrant-orange' ? 'border-vibrant-orange/20 hover:border-vibrant-orange/50' :
                'border-neon-green/20 hover:border-neon-green/50'
              }`}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
                benefit.color === 'gold' ? 'text-white group-hover:text-gold' :
                benefit.color === 'vibrant-orange' ? 'text-white group-hover:text-vibrant-orange' :
                'text-white group-hover:text-neon-green'
              }`}>
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
            className="rounded-2xl shadow-lg border border-gold/20 mx-auto max-w-2xl w-full hover:scale-105 transition-transform duration-500"
            style={{ boxShadow: '0 0 40px rgba(255, 180, 80, 0.15)' }}
          />
        </div>
      </div>
    </section>
  );
};
