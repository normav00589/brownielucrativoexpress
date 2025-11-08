import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
const reviews = [{
  name: "Patrícia M.",
  location: "São Paulo, SP",
  text: "Comecei a vender brownies há 3 meses depois de perder meu emprego. Estava desesperada e precisava de uma renda urgente. Comprei o curso sem muita expectativa, mas as receitas são tão fáceis de seguir que já na primeira semana eu fiz minha primeira venda! Hoje o brownie é o produto que mais sai, tenho clientes fixos que pedem toda semana. Estou conseguindo pagar minhas contas e ainda sobra um dinheirinho. Muito obrigada por mudarem minha vida!",
  rating: 5,
  image: testimonial1
}, {
  name: "Letícia S.",
  location: "Rio de Janeiro, RJ",
  text: "Nunca tinha feito nada pra vender antes, sempre tive medo de empreender. Mas o método é tão simples que até eu consegui! Meu primeiro lucro foi incrível: R$180 com apenas uma fornada! Levei pro trabalho e todo mundo amou, já saí de lá com encomendas pra semana seguinte. Agora faço todo fim de semana e já estou pensando em largar meu emprego pra me dedicar só aos brownies. O segredo do chocolate derretido por cima faz toda diferença, pessoal pira!",
  rating: 5,
  image: testimonial2
}, {
  name: "Jéssica R.",
  location: "Belo Horizonte, MG",
  text: "Eu tinha muito medo de não conseguir vender, sabe? Pensava 'quem vai querer comprar brownie de mim?'. Mas seguindo as dicas do curso sobre como fotografar e divulgar, consegui vender tudo no primeiro dia que postei no Facebook! Não acreditei! As pessoas ficaram pirando com a casquinha crocante e o centro molhadinho. Agora faço 3 fornadas por semana e sempre esgota. Minha autoestima tá lá em cima, me sinto realizada fazendo algo que eu amo e ainda ganhando dinheiro com isso!",
  rating: 5,
  image: testimonial3
}];
export const TestimonialsSection = () => {
  return <section className="py-12 md:py-20 px-4 bg-muted">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-foreground mb-4 text-glow">
            Mais de <span className="text-primary">3.000 alunos</span> já estão lucrando com o Método 3C!
          </h2>
          <p className="text-lg text-muted-foreground">
            Veja o que nossas alunas estão dizendo sobre suas transformações
          </p>
        </div>
        
        <div className="space-y-6 md:space-y-8">
          {reviews.map((review, index) => <div key={index} className="bg-card p-6 md:p-8 rounded-2xl shadow-soft hover:shadow-neon transition-all duration-300 border border-accent/20">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  <img src={review.image} alt={review.name} className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-accent/30" />
                </div>
                
                <div className="flex-1">
                  <div className="flex gap-1 mb-3">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-accent text-accent" />)}
                  </div>
                  
                  <p className="font-body text-base md:text-lg text-foreground mb-4 leading-relaxed">
                    "{review.text}"
                  </p>
                  
                  <div>
                    <p className="font-heading font-bold text-base md:text-lg text-foreground">
                      {review.name}
                    </p>
                    <p className="font-body text-sm text-muted-foreground">
                      {review.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>)}
        </div>
        
        <div className="text-center mt-10 md:mt-12">
          
        </div>
      </div>
    </section>;
};