import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const faqs = [
  {
    question: "Preciso saber cozinhar?",
    answer: "Não! O método é feito para iniciantes. Você aprenderá passo a passo desde o básico até técnicas profissionais.",
  },
  {
    question: "Posso vender brownies com esse método?",
    answer: "Sim! Você aprenderá desde o preparo até o empacotamento e estratégias de venda comprovadas.",
  },
  {
    question: "O App funciona no celular?",
    answer: "Sim, 100% compatível com Android e iOS. Acesse de qualquer lugar, a qualquer momento.",
  },
  {
    question: "Quanto tempo até ver resultados?",
    answer: "Em até 7 dias você já pode ter suas primeiras vendas seguindo o método corretamente.",
  },
  {
    question: "Funciona fora do Natal?",
    answer: "Sim! O App inclui estratégias para todas as épocas do ano, não apenas o período natalino.",
  },
];

export const FAQSection = () => {
  const { ref, isVisible } = useIntersectionObserver();
  
  return (
    <section ref={ref} className={`py-20 px-4 bg-background fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
          <span className="text-white">Perguntas </span>
          <span className="bg-gradient-to-r from-gold to-vibrant-orange bg-clip-text text-transparent">Frequentes</span>
        </h2>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="bg-[hsl(20,22%,10%)] border border-gold/20 rounded-xl px-6 data-[state=open]:border-gold/50"
            >
              <AccordionTrigger className="font-heading font-semibold text-lg text-left text-white hover:text-gold transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-body text-white/70">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
