import { memo, useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Lazy load testimonial images
const testimonialPaths = [
  () => import("@/assets/testimonial-real-1.webp"),
  () => import("@/assets/testimonial-real-2.webp"),
  () => import("@/assets/testimonial-real-3.webp"),
  () => import("@/assets/testimonial-real-4.webp"),
  () => import("@/assets/testimonial-real-5.webp"),
  () => import("@/assets/testimonial-real-6.webp"),
  () => import("@/assets/testimonial-real-7.webp"),
  () => import("@/assets/testimonial-real-8.webp"),
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
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
            Mais de <span className="text-gold">3.000 alunos</span> já estão lucrando com o Método 3C!
          </h2>
          <p className="text-lg text-white/80">
            Veja o que nossas alunas reais estão compartilhando nas redes sociais
          </p>
        </div>
        
        {loadedImages.length > 0 && (
          <div className="relative px-4 md:px-20">
            <Carousel opts={{ align: "center", loop: true }} className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {loadedImages.map((image, index) => (
                  <CarouselItem key={index}>
                    <div className="p-2">
                      <div className="bg-[hsl(18,28%,7%)] rounded-2xl border border-white/10 overflow-hidden">
                        <img 
                          src={image} 
                          alt={`Depoimento real ${index + 1}`} 
                          className="w-full h-auto object-contain"
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
      </div>
    </section>
  );
});

TestimonialsSection.displayName = 'TestimonialsSection';