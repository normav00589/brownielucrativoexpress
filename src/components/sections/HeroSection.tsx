import { memo } from "react";
import { Shield, Users, Sparkles, CheckCircle, Star, Zap, Circle } from "lucide-react";
import { trackViewContent } from "@/lib/fbTracking";
export const HeroSection = memo(() => {
  return <section className="relative min-h-screen py-12 md:py-16 px-4 overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-hero -z-10" />
      
      <div className="container mx-auto max-w-3xl">
        <div className="space-y-5 text-center">
          
          {/* Live Badge - Vibrant Orange */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 bg-vibrant-orange px-4 py-2 rounded-full shadow-lg animate-pulse">
              <Circle className="w-2.5 h-2.5 fill-white text-white animate-ping" />
              <span className="text-white font-bold text-sm tracking-wide">+2.400 ALUNAS ATIVAS</span>
            </div>
          </div>
          
          {/* Main Headline - More Vibrant */}
          <div className="relative pt-2">
            <h1 className="font-display text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] font-black tracking-tight">
              <span className="block text-white mb-1">
                BROWNIE QUE
              </span>
              <span className="block">
                <span className="relative inline-block bg-gradient-to-r from-hot-pink via-hot-pink-light to-hot-pink bg-clip-text text-transparent drop-shadow-lg">
                  DÁ CERTO
                </span>
              </span>
              <span className="block text-white mt-1">
                DESDE A
              </span>
              <span className="block mt-1">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-vibrant-orange via-gold to-vibrant-orange-light bg-clip-text text-transparent">
                    PRIMEIRA FORNADA.
                  </span>
                  <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[80%] h-1.5 bg-gradient-to-r from-transparent via-vibrant-orange to-transparent rounded-full"></span>
                </span>
              </span>
            </h1>
          </div>
          
          {/* Subheadline - Vibrant highlights */}
          <div className="max-w-2xl mx-auto space-y-5 pt-4">
            <p className="font-body text-lg sm:text-xl md:text-2xl leading-relaxed text-white font-medium tracking-wide">
              Receitas de brownies{" "}
              <span className="text-hot-pink font-bold">fáceis</span>, prontas em até{" "}
              <span className="text-vibrant-orange font-extrabold">40 minutos</span>, pensadas pra quem quer{" "}
              <span className="text-hot-pink font-bold">vender sem medo</span>.
            </p>
            <p className="font-body text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
              <span className="text-white">E pode faturar de </span>
              <span className="bg-gradient-to-r from-vibrant-orange via-gold to-vibrant-orange bg-clip-text text-transparent font-black">
                R$150 a R$350
              </span>
              <span className="text-white font-black"> por dia.</span>
            </p>
          </div>
          
          {/* Price Block - Dark Card (Sanduíche Sem Medo style) */}
          <div className="relative mx-auto max-w-md">
            <div className="bg-[hsl(20,15%,10%)] rounded-2xl px-8 py-6 shadow-2xl border border-white/5">
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-base font-body text-primary-foreground">Por apenas</span>
              </div>
              <div className="flex items-center justify-center gap-4 mb-2">
                <span className="text-xl line-through font-body text-secondary-foreground">R$ 47</span>
                <span className="text-5xl sm:text-6xl md:text-7xl font-display font-black text-vibrant-orange">
                  R$ 1,90
                </span>
                <div className="bg-teal-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                  -98% OFF
                </div>
              </div>
              <p className="text-sm font-body text-vibrant-orange">
                Acesso vitalício completo
              </p>
            </div>
          </div>
          
          {/* CTA Button - Vibrant Orange Glow */}
          <button className="group relative w-full md:w-auto px-10 sm:px-14 py-5 sm:py-6 text-lg sm:text-xl font-bold text-white rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,120,50,0.6)] font-body bg-gradient-to-r from-vibrant-orange via-[hsl(30,100%,55%)] to-gold" style={{
          boxShadow: '0 8px 30px rgba(255, 120, 50, 0.5), 0 0 20px rgba(255, 140, 60, 0.3)'
        }} onClick={() => {
          trackViewContent('Hero CTA - Brownies Lucrativos', 1.90);
          document.getElementById('master-plan')?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
        }}>
            <span className="relative flex items-center justify-center gap-2">
              🍫 QUERO FAZER BROWNIES QUE VENDEM!
            </span>
          </button>
          
          {/* Social Proof - Enhanced */}
          <div className="flex items-center justify-center gap-6 text-sm text-white font-body">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="ml-1 font-bold text-white">4.9/5</span>
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-vibrant-orange fill-vibrant-orange" />
              <span className="text-white font-medium">Acesso Imediato</span>
            </span>
          </div>
          
          {/* Hero Image - Enhanced border */}
          <div className="relative w-full max-w-xs sm:max-w-sm mx-auto my-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-hot-pink via-vibrant-orange to-gold rounded-2xl blur-sm opacity-60"></div>
              <img alt="Brownie gourmet delicioso" width="400" height="400" fetchPriority="high" decoding="async" loading="eager" className="relative w-full h-auto rounded-2xl border-2 border-white/20" style={{
              aspectRatio: '1/1'
            }} src="/lovable-uploads/7fcb8994-e661-40a5-9820-75fc8dda8741.webp" />
            </div>
          </div>
          
          {/* Empathy Copy */}
          <p className="font-body text-sm sm:text-base max-w-lg mx-auto leading-relaxed text-white/90">
            Mesmo que você já tenha tentado{" "}
            <span className="text-hot-pink font-semibold">mil vezes e errado</span>
            {" "}— aprenda o método <span className="font-bold text-white">BROWNIE 3C</span> para fazer brownies{" "}
            <span className="text-vibrant-orange font-semibold">lindos</span>,{" "}
            <span className="text-vibrant-orange font-semibold">estáveis</span>,{" "}
            <span className="text-vibrant-orange font-semibold">cremosos</span> e{" "}
            <span className="text-hot-pink font-bold">vendáveis</span>.
          </p>
          
          {/* Feature Grid - Vibrant borders */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto mt-6">
            <div className="bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-hot-pink/50 hover:border-hot-pink transition-colors">
              <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-hot-pink mx-auto mb-1.5" />
              <span className="text-white font-semibold text-xs sm:text-sm block font-body">Acesso Vitalício</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-vibrant-orange/50 hover:border-vibrant-orange transition-colors">
              <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-vibrant-orange mx-auto mb-1.5" />
              <span className="text-white font-semibold text-xs sm:text-sm block font-body">App Exclusivo</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-hot-pink/50 hover:border-hot-pink transition-colors">
              <Users className="w-5 h-5 sm:w-6 sm:h-6 text-hot-pink mx-auto mb-1.5" />
              <span className="text-white font-semibold text-xs sm:text-sm block font-body">+2400 Alunas</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm px-3 sm:px-4 py-3 sm:py-4 rounded-xl border border-neon-green/50 hover:border-neon-green transition-colors">
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-neon-green mx-auto mb-1.5" />
              <span className="text-white font-semibold text-xs sm:text-sm block font-body">14 Dias Garantia</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
});
HeroSection.displayName = 'HeroSection';