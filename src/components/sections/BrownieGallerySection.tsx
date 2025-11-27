import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import brownie1 from "@/assets/brownie-1.jpg";
import brownie2 from "@/assets/brownie-2.jpg";
import brownie3 from "@/assets/brownie-3.jpg";
import brownie4 from "@/assets/brownie-4.jpg";
import brownie5 from "@/assets/brownie-5.jpg";
import brownie6 from "@/assets/brownie-6.jpg";
import brownie7 from "@/assets/brownie-7.jpg";
import brownie8 from "@/assets/brownie-8.webp";
import brownie9 from "@/assets/brownie-9.webp";
import brownie10 from "@/assets/brownie-10.jpg";
import type { CarouselApi } from "@/components/ui/carousel";

export const BrownieGallerySection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const { ref, isVisible } = useIntersectionObserver();

  useEffect(() => {
    if (!api) return;

    // Auto-play com 4 segundos de intervalo
    const autoplay = setInterval(() => {
      api.scrollNext();
    }, 4000);

    return () => clearInterval(autoplay);
  }, [api]);

  const brownies = [
    { src: brownie1, alt: "Brownie caseiro irresistível com textura úmida" },
    { src: brownie2, alt: "Brownies gourmet empilhados com cobertura de chocolate" },
    { src: brownie3, alt: "Brownie artesanal com gotas de chocolate" },
    { src: brownie4, alt: "Brownies premium empilhados mostrando textura interna" },
    { src: brownie5, alt: "Brownie feito com receita profissional" },
    { src: brownie6, alt: "Variedade de brownies artesanais" },
    { src: brownie7, alt: "Brownie de chocolate intenso cortado ao meio" },
    { src: brownie8, alt: "Brownie embalado profissionalmente para venda" },
    { src: brownie9, alt: "Brownies gourmet em embalagens individuais" },
    { src: brownie10, alt: "Brownie caseiro mostrando textura perfeita" }
  ];

  return (
    <section ref={ref} className={`py-16 px-4 bg-background fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Brownies Que <span className="text-accent">Vendem Sozinhos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Veja os resultados incríveis que você vai conseguir fazer com nossas receitas testadas e aprovadas
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-6xl mx-auto"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brownies.map((brownie, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="relative group overflow-hidden rounded-2xl border-2 border-primary/20 hover:border-primary/50 shadow-medium hover:shadow-neon transition-all duration-500">
                    <div className="aspect-square overflow-hidden bg-muted">
                      <img
                        src={brownie.src}
                        alt={brownie.alt}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                      <p className="text-foreground text-sm font-medium px-4 text-center">
                        {brownie.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12 bg-primary hover:bg-primary/90 text-white border-primary" />
          <CarouselNext className="hidden md:flex -right-12 bg-primary hover:bg-primary/90 text-white border-primary" />
        </Carousel>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground">
            ✨ Deslize para ver mais • Auto-play ativado
          </p>
        </div>
      </div>
    </section>
  );
};
