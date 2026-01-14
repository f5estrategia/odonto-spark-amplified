import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

const metrics = [
  {
    icon: Building2,
    value: "+3.000",
    label: "Clínicas atendidas",
    description: "Em todo o Brasil",
  },
  {
    icon: TrendingUp,
    value: "R$ 3.8M",
    label: "Em vendas geradas",
    description: "Case Viva Odontologia",
  },
  {
    icon: Award,
    value: "27x",
    label: "ROAS médio",
    description: "Retorno sobre investimento",
  },
  {
    icon: Users,
    value: "+500",
    label: "CRCs treinadas",
    description: "Alta conversão",
  },
];

const cases = [
  {
    name: "VIVA ODONTOLOGIA",
    image: "https://crcqueconverte.f5educacao.com/assets/images/vivia-odonto.webp",
    badge: "🏆",
    stats: [
      { label: "Investimento", value: "R$ 124.294" },
      { label: "Faturamento", value: "R$ 3,8 MI" },
      { label: "ROAS", value: "27,11x" },
      { label: "Período", value: "10 meses" },
    ],
    description: "De R$124 mil investidos para R$3,8 MILHÕES em vendas. Sistema completo multiplicou resultado em 27x.",
  },
  {
    name: "ORAL UNIC VILA MARIANA",
    image: "https://crcqueconverte.f5educacao.com/assets/images/oral-unic-vila-mariana.webp",
    badge: "🏆",
    stats: [
      { label: "Vendas", value: "R$ 2 MI+" },
      { label: "Período", value: "14 meses" },
    ],
    description: "Mais de R$2 milhões em vendas em 14 meses. Ticket médio: R$12.500 | Comparecimento: 80%",
  },
  {
    name: "ORAL UNIC JOÃO PESSOA",
    image: "https://crcqueconverte.f5educacao.com/assets/images/oral-unic-joao-pessoa.webp",
    badge: "🏆",
    stats: [
      { label: "Vendas", value: "R$ 820 mil" },
      { label: "ROAS", value: "27x" },
    ],
    description: "R$820 mil efetivados com ROAS de 27x. Taxa de conversão de 43% com CPL de apenas R$18,34.",
  },
];

// VTurb video testimonials - Depoimentos reais de donos de clínicas, dentistas, franqueados e profissionais
const videoTestimonials = [
  {
    id: "vid-68f7e3478ea58bfe7173c5b5",
    scriptSrc: "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7e3478ea58bfe7173c5b5/v4/player.js",
  },
  {
    id: "vid-68f7df118ea58bfe7173c0b0",
    scriptSrc: "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7df118ea58bfe7173c0b0/v4/player.js",
  },
  {
    id: "vid-68f7dee38ea58bfe7173c072",
    scriptSrc: "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7dee38ea58bfe7173c072/v4/player.js",
  },
  {
    id: "vid-693e3e0af415b42f2b12603b",
    scriptSrc: "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/693e3e0af415b42f2b12603b/v4/player.js",
  },
  {
    id: "vid-693e3e0ece33aa061d9cb93d",
    scriptSrc: "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/693e3e0ece33aa061d9cb93d/v4/player.js",
  },
  {
    id: "vid-68f7d9ef21b0a6afaf4cc36c",
    scriptSrc: "https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/68f7d9ef21b0a6afaf4cc36c/v4/player.js",
  },
];

const SocialProofSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  // Embla Carousel for video testimonials
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    align: 'start',
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 }
    }
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    // Load VTurb scripts
    videoTestimonials.forEach((video) => {
      const existingScript = document.querySelector(`script[src="${video.scriptSrc}"]`);
      if (!existingScript) {
        const script = document.createElement('script');
        script.src = video.scriptSrc;
        script.async = true;
        document.head.appendChild(script);
      }
    });
  }, []);

  return (
    <section className="section-padding bg-gradient-to-b from-card/50 to-background relative overflow-hidden">
      <div className="container-lp">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Você quer promessas ou quer provas?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Números que comprovam
            <br className="hidden md:block" />
            <span className="text-gradient">resultados reais</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Veja os números reais de clínicas que escolheram{" "}
            <strong className="text-foreground">resultados ao invés de discursos</strong>.
          </p>
        </motion.div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 md:p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <metric.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-gradient mb-1">
                {metric.value}
              </div>
              <div className="text-xs md:text-sm font-medium text-foreground">{metric.label}</div>
              <div className="text-xs text-muted-foreground hidden md:block">{metric.description}</div>
            </motion.div>
          ))}
        </div>

        {/* Cases carousel */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Cases de Sucesso
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4 md:gap-6">
            {cases.map((caseItem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 transition-all"
              >
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={caseItem.image} 
                    alt={caseItem.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                
                {/* Content */}
                <div className="p-4 md:p-6">
                  <h4 className="font-bold text-base md:text-lg mb-4 flex items-center gap-2">
                    {caseItem.name} {caseItem.badge}
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4">
                    {caseItem.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-2 rounded-lg bg-secondary/50">
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                        <div className="font-bold text-sm md:text-base text-primary">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                    {caseItem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Video testimonials */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-3 md:mb-4">
            Transformações Reais
          </h3>
          <p className="text-center text-muted-foreground text-sm md:text-base mb-4 md:mb-6 max-w-2xl mx-auto px-4">
            Donos de clínicas, dentistas, franqueados e profissionais de diversas áreas 
            que já foram transformados com o conhecimento de Fernando Machado
          </p>
          <p className="text-center text-xs text-primary mb-6 md:mb-8">
            ▶️ Clique nos vídeos para assistir
          </p>
          
          {/* VTurb Video Testimonials Carousel */}
          <div className="relative max-w-5xl mx-auto mb-10">
            {/* Navigation Buttons */}
            <button
              onClick={scrollPrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </button>
            <button
              onClick={scrollNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-4 z-10 w-10 h-10 md:w-12 md:h-12 rounded-full bg-card border border-primary/30 flex items-center justify-center hover:bg-primary/10 transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-primary" />
            </button>

            {/* Carousel Container */}
            <div className="overflow-hidden px-6 md:px-8" ref={emblaRef}>
              <div className="flex gap-3 md:gap-4">
                {videoTestimonials.map((video) => (
                  <div
                    key={video.id}
                    className="flex-none w-[85%] md:w-[calc(33.333%-11px)] aspect-[9/16] rounded-xl border border-primary/20 overflow-hidden bg-card"
                    dangerouslySetInnerHTML={{
                      __html: `<vturb-smartplayer id="${video.id}" style="display: block; width: 100%; height: 100%;"></vturb-smartplayer>`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Print testimonials from Discurso do Líder */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-xl overflow-hidden border border-border"
            >
              <img 
                src="https://discursodolider.f5educacao.com/assets/images/depoimento_print1.jpg" 
                alt="Depoimento de aluno - Print 1"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="rounded-xl overflow-hidden border border-border"
            >
              <img 
                src="https://discursodolider.f5educacao.com/assets/images/depoimento_print2.jpg" 
                alt="Depoimento de aluno - Print 2"
                className="w-full h-auto"
                loading="lazy"
              />
            </motion.div>
          </div>
        </motion.div>


        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button 
            onClick={scrollToOffer}
            className="btn-primary text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto"
          >
            QUERO RESULTADOS COMO ESTES →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
