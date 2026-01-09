import testimonialReal1 from "@/assets/testimonial-real-1.jpg";
import testimonialReal2 from "@/assets/testimonial-real-2.jpg";
import testimonialReal3 from "@/assets/testimonial-real-3.jpg";
import testimonialReal4 from "@/assets/testimonial-real-4.jpg";
import testimonialReal5 from "@/assets/testimonial-real-5.jpg";
import testimonialReal6 from "@/assets/testimonial-real-6.jpg";
import testimonialReal7 from "@/assets/testimonial-real-7.jpg";
import testimonialReal8 from "@/assets/testimonial-real-8.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
const realTestimonials = [testimonialReal1, testimonialReal2, testimonialReal3, testimonialReal4, testimonialReal5, testimonialReal6, testimonialReal7, testimonialReal8];
export const TestimonialsSection = () => {
  const {
    ref,
    isVisible
  } = useIntersectionObserver();
  return <section ref={ref} className={`py-12 md:py-20 px-4 bg-gradient-section-1 fade-in-up ${isVisible ? 'visible' : ''}`}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-white mb-4">
            Mais de <span className="text-gold">3.000 alunos</span> já estão lucrando com o Método 3C!
          </h2>
          <p className="text-lg text-secondary-foreground">
            Veja o que nossas alunas reais estão compartilhando nas redes sociais
          </p>
        </div>
        
        <div className="relative px-4 md:px-20">
          <Carousel opts={{
          align: "center",
          loop: true
        }} className="w-full max-w-5xl mx-auto">
            <CarouselContent>
              {realTestimonials.map((image, index) => <CarouselItem key={index}>
                  <div className="p-2">
                    <div className="bg-section-dark rounded-2xl shadow-lg border border-white/10 overflow-hidden">
                      <img src={image} alt={`Depoimento real ${index + 1}`} className="w-full h-auto object-contain" />
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>
            <CarouselPrevious className="left-2 md:left-4 h-12 w-12 bg-gold/20 border-gold/50 text-gold hover:bg-gold hover:text-[hsl(20,30%,15%)]" />
            <CarouselNext className="right-2 md:right-4 h-12 w-12 bg-gold/20 border-gold/50 text-gold hover:bg-gold hover:text-[hsl(20,30%,15%)]" />
          </Carousel>
        </div>
      </div>
    </section>;
};