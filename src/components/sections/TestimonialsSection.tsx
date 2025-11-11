import testimonialReal1 from "@/assets/testimonial-real-1.jpg";
import testimonialReal2 from "@/assets/testimonial-real-2.jpg";
import testimonialReal3 from "@/assets/testimonial-real-3.jpg";
import testimonialReal4 from "@/assets/testimonial-real-4.jpg";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const realTestimonials = [
  testimonialReal1,
  testimonialReal2,
  testimonialReal3,
  testimonialReal4
];
export const TestimonialsSection = () => {
  return <section className="py-12 md:py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 text-glow">
            Mais de <span className="text-primary">3.000 alunos</span> já estão lucrando com o Método 3C!
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossas alunas reais estão compartilhando nas redes sociais
          </p>
        </div>
        
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {realTestimonials.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <div className="bg-card rounded-2xl shadow-soft hover:shadow-neon transition-all duration-300 border border-accent/20 overflow-hidden">
                      <img 
                        src={image} 
                        alt={`Depoimento real ${index + 1}`}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </div>
    </section>;
};