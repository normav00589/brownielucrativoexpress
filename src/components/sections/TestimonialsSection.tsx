import { memo, useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { MessageCircle, Users, Sparkles } from "lucide-react";

// Lazy load testimonial images - now 10 images
const testimonialPaths = [
  () => import("@/assets/testimonial-real-1.webp"),
  () => import("@/assets/testimonial-real-2.webp"),
  () => import("@/assets/testimonial-real-3.webp"),
];

export const TestimonialsSection = memo(() => {
  const { ref, isVisible } = useIntersectionObserver();
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  // Load images only when section becomes visible
  useEffect(() => {
    if (isVisible && loadedImages.length === 0) {
      Promise.all(testimonialPaths.map(async (loader) => {
        const module = await loader();
        return module.default;
      })).then(setLoadedImages);
    }
  }, [isVisible, loadedImages.length]);

  // Show skeleton while loading
  if (!isVisible && loadedImages.length === 0) {
    return (
      <section ref={ref} className="py-12 md:py-20 px-4 bg-[hsl(15,30%,5%)] min-h-[400px]">
        <div className="container mx-auto text-center">
          <div className="h-8 w-64 mx-auto bg-muted rounded mb-4" />
          <div className="h-4 w-96 mx-auto bg-muted rounded" />
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="py-12 md:py-20 px-4 bg-[hsl(15,30%,5%)]">
      <div className="container mx-auto max-w-6xl">
        {/* Header with Barnum Effect Copy */}
        <div className="text-center mb-8 md:mb-12">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-neon-green/10 border border-neon-green/30 rounded-full px-4 py-2 mb-6">
            <MessageCircle className="w-4 h-4 text-neon-green" />
            <span className="text-neon-green text-sm font-medium">
              Direto do Grupo VIP de Alunas
            </span>
            <Users className="w-4 h-4 text-neon-green" />
          </div>
          
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
            <Sparkles className="inline w-6 h-6 text-gold mr-2" />
            Você também pode ser a{" "}
            <span className="text-gold">próxima história de sucesso</span>
          </h2>
          
          {/* Barnum Effect Subheadline - universal statements that feel personal */}
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-4">
            Assim como você, elas também tinham <span className="text-gold font-semibold">medo de não dar certo</span>, 
            achavam que precisavam de muito dinheiro pra começar, e duvidavam de si mesmas...
          </p>
          
          <p className="text-base text-white/60 max-w-xl mx-auto">
            Veja o que elas estão compartilhando no nosso{" "}
            <span className="text-neon-green font-semibold">Grupo VIP de Confeitaria</span>:
          </p>
        </div>
        
        {loadedImages.length > 0 && (
          <div className="relative px-4 md:px-20">
            <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {loadedImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-2">
                      <div className="bg-[hsl(18,28%,7%)] rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
                        <img 
                          src={image} 
                          alt={`Resultado real de aluna ${index + 1} no Grupo VIP`} 
                          className="w-full h-auto object-contain max-h-[70vh]"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 h-12 w-12 bg-gold/20 border-gold/50 text-gold hover:bg-gold hover:text-[hsl(20,30%,15%)]" />
              <CarouselNext className="right-2 md:right-4 h-12 w-12 bg-gold/20 border-gold/50 text-gold hover:bg-gold hover:text-[hsl(20,30%,15%)]" />
            </Carousel>
          </div>
        )}
        
        {/* Bottom Barnum CTA */}
        <div className="text-center mt-8 md:mt-12">
          <p className="text-white/70 text-sm md:text-base">
            💬 <span className="text-gold">Imagine você</span> compartilhando suas conquistas aqui daqui a alguns dias...
          </p>
        </div>
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';
