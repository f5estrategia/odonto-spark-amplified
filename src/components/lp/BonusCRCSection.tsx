import { motion } from "framer-motion";
import { CheckCircle2, Users, TrendingUp, Zap, Target, Phone, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const crcModules = [
  { 
    name: "Fundamentos", 
    description: "Fundamentos de Vendas para Clínicas",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo1.webp" 
  },
  { 
    name: "Canais de Conversão", 
    description: "Script de Primeiro Contato",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo2.webp" 
  },
  { 
    name: "Engajamento & Follow-up", 
    description: "Técnica BANT de Qualificação",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo3.webp" 
  },
  { 
    name: "Rapport & Conexão", 
    description: "Follow-up que Converte",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo4.webp" 
  },
  { 
    name: "Funil & Jornada", 
    description: "Objeções e Fechamento",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo5.webp" 
  },
  { 
    name: "Fechamento Infalível", 
    description: "Métricas e Acompanhamento",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo6.webp" 
  },
];

const CHECKOUT_URL = "https://pay.hotmart.com/A102890720L?checkoutMode=10&bid=1769123702608";
const LP_URL = "https://crcqueconverte.f5educacao.com";

const BonusCRCSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % crcModules.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + crcModules.length) % crcModules.length);
  };

  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-card/30 via-background to-background">
      {/* Glow effect */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container-lp relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 mb-6">
            <Phone className="w-5 h-5 text-primary" />
            <span className="text-primary font-bold">TREINAMENTO PARA SUA EQUIPE</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Você domina a comunicação.
            <br className="hidden md:block" />
            <span className="text-gradient">Mas quem atende o telefone?</span>
          </h2>
          
          <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
            De nada adianta você gerar leads se sua CRC não sabe converter.
            Treine sua equipe de vendas com o método que já gerou <strong className="text-foreground">mais de R$ 50 milhões</strong> em faturamento para clínicas odontológicas.
          </p>
        </motion.div>

        {/* Main bonus card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="rounded-3xl bg-gradient-to-br from-primary/20 via-card to-primary/10 border-2 border-primary/50 overflow-hidden glow-orange">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left side - Image carousel */}
              <div className="p-6 md:p-8 lg:p-10">
                {/* Image carousel */}
                <div className="relative mb-6">
                  <motion.img 
                    key={currentSlide}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    src={crcModules[currentSlide].image} 
                    alt={`CRC que Converte - ${crcModules[currentSlide].name}`}
                    className="w-full rounded-2xl border border-primary/30"
                    loading="lazy"
                  />
                  <div className="absolute -top-3 -right-3 bg-primary text-primary-foreground px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                    OFERTA ESPECIAL
                  </div>
                  
                  {/* Carousel controls */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-2">
                    <button 
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-background/80 border border-border flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                
                {/* Module indicators */}
                <div className="flex justify-center gap-2 mb-6">
                  {crcModules.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentSlide 
                          ? "w-6 bg-primary" 
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>

                {/* Module thumbnails */}
                <div className="grid grid-cols-6 gap-2">
                  {crcModules.map((module, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`rounded-lg overflow-hidden border-2 transition-all ${
                        index === currentSlide 
                          ? "border-primary scale-105" 
                          : "border-transparent opacity-60 hover:opacity-100"
                      }`}
                    >
                      <img 
                        src={module.image} 
                        alt={module.name}
                        className="w-full aspect-[3/4] object-cover"
                        loading="lazy"
                      />
                    </button>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 mt-6 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">CRC que Converte</h3>
                    <p className="text-primary font-medium">Treinamento Completo de Vendas</p>
                  </div>
                </div>
                
                <div className="p-4 rounded-xl bg-card/50 border border-border">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-muted-foreground">De:</span>
                    <span className="text-xl font-bold text-foreground line-through opacity-60">R$ 497</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-muted-foreground">Por:</span>
                    <span className="text-2xl font-bold text-primary">10x R$ 9,70</span>
                    <span className="text-muted-foreground">ou</span>
                    <span className="text-lg font-bold text-foreground">R$ 97 à vista</span>
                  </div>
                </div>
                
                {/* CTA Buttons */}
                <div className="flex flex-col gap-3 mt-4">
                  <Button 
                    asChild
                    className="btn-primary w-full text-base py-5 h-auto animate-pulse-glow"
                  >
                    <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                      QUERO TREINAR MINHA EQUIPE →
                    </a>
                  </Button>
                  <Button 
                    asChild
                    variant="outline"
                    className="w-full text-base py-4 h-auto border-primary/50 hover:bg-primary/10"
                  >
                    <a href={LP_URL} target="_blank" rel="noopener noreferrer">
                      Conhecer mais sobre o treinamento
                    </a>
                  </Button>
                </div>
              </div>
              
              {/* Right side - Content */}
              <div className="p-6 md:p-8 lg:p-10 bg-card/30">
                <h4 className="text-xl font-bold mb-2 text-foreground">
                  Por que treinar sua CRC é tão importante?
                </h4>
                <p className="text-muted-foreground mb-6">
                  Você pode ser a maior autoridade da odontologia. Mas se quem atende o lead não sabe vender, 
                  você está <strong className="text-foreground">jogando dinheiro fora</strong>.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-background/50 border border-border text-center">
                    <div className="text-2xl font-bold text-primary mb-1">+60%</div>
                    <div className="text-xs text-muted-foreground">Aumento na conversão</div>
                  </div>
                  <div className="p-4 rounded-xl bg-background/50 border border-border text-center">
                    <div className="text-2xl font-bold text-primary mb-1">30 dias</div>
                    <div className="text-xs text-muted-foreground">Para ver resultados</div>
                  </div>
                </div>
                
                {/* Modules list */}
                <h5 className="font-semibold mb-3 text-foreground">O que sua CRC vai aprender:</h5>
                <div className="space-y-2 mb-6">
                  {crcModules.map((module, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{module.description}</span>
                    </div>
                  ))}
                </div>
                
                {/* Quote */}
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/20">
                  <p className="text-sm text-foreground italic mb-2">
                    "Cada palavra mal colocada no WhatsApp gera prejuízo. 
                    Cada lead não qualificado é dinheiro jogado fora."
                  </p>
                  <p className="text-xs text-primary font-medium">
                    — Fernando Machado, CEO F5 Estratégia
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-10 mb-10"
        >
          {[
            { icon: Target, text: "Método validado em +3.000 clínicas" },
            { icon: TrendingUp, text: "Aumento de 60% na conversão" },
            { icon: Users, text: "Treine toda sua equipe" },
            { icon: Zap, text: "Resultados em 30 dias" },
          ].map((item, index) => (
            <div 
              key={index}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card/50 border border-border text-center"
            >
              <item.icon className="w-6 h-6 text-primary" />
              <span className="text-xs text-muted-foreground">{item.text}</span>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              asChild
              className="btn-primary text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto animate-pulse-glow"
            >
              <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
                COMPRAR AGORA POR 10x R$9,70 →
              </a>
            </Button>
            <Button 
              asChild
              variant="outline"
              className="text-base px-6 py-5 h-auto border-primary/50 hover:bg-primary/10"
            >
              <a href={LP_URL} target="_blank" rel="noopener noreferrer">
                Ver página completa
              </a>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Transforme sua CRC em uma máquina de conversão
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BonusCRCSection;