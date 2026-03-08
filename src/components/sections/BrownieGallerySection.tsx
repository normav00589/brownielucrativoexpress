import { useEffect, useState, memo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Cookie, Sparkles, Scissors, DollarSign, Clock, BookOpen } from "lucide-react";
import type { CarouselApi } from "@/components/ui/carousel";

// Lazy import brownie images only when section is visible (all WebP for max performance)
const brownieImages = [{
  src: () => import("@/assets/brownie-1.webp"),
  alt: "Brownie caseiro irresistível com textura úmida"
}, {
  src: () => import("@/assets/brownie-2.webp"),
  alt: "Brownies gourmet empilhados com cobertura de chocolate"
}, {
  src: () => import("@/assets/brownie-3.webp"),
  alt: "Brownie artesanal com gotas de chocolate"
}, {
  src: () => import("@/assets/brownie-4.webp"),
  alt: "Brownies premium empilhados mostrando textura interna"
}, {
  src: () => import("@/assets/brownie-5.webp"),
  alt: "Brownie feito com receita profissional"
}, {
  src: () => import("@/assets/brownie-6.webp"),
  alt: "Variedade de brownies artesanais"
}, {
  src: () => import("@/assets/brownie-7.webp"),
  alt: "Brownie de chocolate intenso cortado ao meio"
}, {
  src: () => import("@/assets/brownie-8.webp"),
  alt: "Brownie embalado profissionalmente para venda"
}, {
  src: () => import("@/assets/brownie-9.webp"),
  alt: "Brownies gourmet em embalagens individuais"
}, {
  src: () => import("@/assets/brownie-10.webp"),
  alt: "Brownie caseiro mostrando textura perfeita"
}];
export const BrownieGallerySection = memo(() => {
  const [api, setApi] = useState<CarouselApi>();
  const [loadedImages, setLoadedImages] = useState<string[]>([]);
  const {
    ref,
    isVisible
  } = useIntersectionObserver();

  // Load images only when section becomes visible
  useEffect(() => {
    if (isVisible && loadedImages.length === 0) {
      Promise.all(brownieImages.map(async img => {
        const module = await img.src();
        return module.default;
      })).then(setLoadedImages);
    }
  }, [isVisible, loadedImages.length]);
  useEffect(() => {
    if (!api) return;
    const autoplay = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(autoplay);
  }, [api]);
  if (!isVisible && loadedImages.length === 0) {
    return <section ref={ref} className="py-16 px-4 bg-gradient-section-2 min-h-[400px]">
        <div className="container mx-auto text-center">
          <div className="h-8 w-64 mx-auto bg-muted animate-pulse rounded mb-4" />
          <div className="h-4 w-96 mx-auto bg-muted animate-pulse rounded" />
        </div>
      </section>;
  }
  return <section ref={ref} className="py-16 px-4 bg-gradient-section-2 relative overflow-hidden">
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-caramel bg-clip-text text-transparent">
            Brownies Que <span className="text-accent">Vendem Sozinhos</span>
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-white">
            Veja os resultados incríveis que você vai conseguir fazer com nossas receitas testadas e aprovadas
          </p>
        </div>

        {loadedImages.length > 0 && <Carousel setApi={setApi} opts={{
        align: "center",
        loop: true
      }} className="w-full max-w-6xl mx-auto">
            <CarouselContent className="-ml-2 md:-ml-4">
              {loadedImages.map((src, index) => <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="relative overflow-hidden rounded-2xl border-2 border-primary/20">
                      <div className="aspect-square overflow-hidden bg-muted">
                        <img src={src} alt={brownieImages[index].alt} loading="lazy" decoding="async" width="400" height="400" className="w-full h-full object-cover" style={{
                    aspectRatio: '1/1'
                  }} />
                      </div>
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 bg-primary hover:bg-primary/90 text-white border-primary" />
            <CarouselNext className="hidden md:flex -right-12 bg-primary hover:bg-primary/90 text-white border-primary" />
          </Carousel>}

        <div className="text-center mt-8">
          <p className="text-sm text-secondary-foreground">✨ Deslize para ver mais</p>
        </div>
      </div>
    </section>;
});
BrownieGallerySection.displayName = 'BrownieGallerySection';