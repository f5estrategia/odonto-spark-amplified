import { motion } from "framer-motion";
import { Star, TrendingUp, Users, Award, Building2, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

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

const testimonials = [
  {
    name: "Dra. Mariana Santos",
    role: "Ortodontista • SP",
    content: "Em 3 meses, minha agenda de avaliações triplicou. O método do Fernando mudou minha forma de me posicionar nas redes.",
    rating: 5,
  },
  {
    name: "Dr. Ricardo Oliveira",
    role: "Implantodontista • RJ",
    content: "Sempre tive medo de aparecer em vídeo. Depois do treinamento, gravo stories todo dia com naturalidade. Os pacientes comentam que me 'conhecem' antes mesmo da consulta.",
    rating: 5,
  },
  {
    name: "Dra. Fernanda Lima",
    role: "Clínica Geral • MG",
    content: "Parei de competir por preço. Hoje cobro o dobro do que cobrava e meus pacientes indicam amigos porque confiam na minha autoridade.",
    rating: 5,
  },
  {
    name: "Dr. Henrique Martins",
    role: "Periodontista • PR",
    content: "A F5 entende de odontologia como ninguém. Não é marketing genérico, é estratégia feita pra nossa realidade.",
    rating: 5,
  },
];

const SocialProofSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

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
              className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-foreground">{metric.label}</div>
              <div className="text-xs text-muted-foreground">{metric.description}</div>
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
          
          <div className="grid md:grid-cols-3 gap-6">
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
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    {caseItem.name} {caseItem.badge}
                  </h4>
                  
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {caseItem.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center p-2 rounded-lg bg-secondary/50">
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                        <div className="font-bold text-primary">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-4">
            O que nossos alunos estão dizendo
          </h3>
          <p className="text-center text-muted-foreground mb-10">
            Histórias reais de transformação de quem já domina a arte de comunicar
          </p>
          
          {/* VTurb Video Testimonial Player */}
          <div className="max-w-2xl mx-auto mb-10">
            <div className="aspect-[9/16] md:aspect-video rounded-2xl border-2 border-primary/30 overflow-hidden bg-card">
              <div 
                id="vid_693e3e0ece33aa061d9cb93d" 
                style={{ position: 'relative', width: '100%', padding: '133.33% 0 0' }}
              >
                <img 
                  id="thumb_693e3e0ece33aa061d9cb93d" 
                  src="https://cdn.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/693e3e0ece33aa061d9cb93d/thumbnail.jpg" 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                  alt="Depoimento de aluno"
                />
                <div 
                  id="backdrop_693e3e0ece33aa061d9cb93d" 
                  style={{ 
                    WebkitBackdropFilter: 'blur(5px)', 
                    backdropFilter: 'blur(5px)', 
                    position: 'absolute', 
                    top: 0, 
                    height: '100%', 
                    width: '100%' 
                  }}
                />
              </div>
              <script 
                dangerouslySetInnerHTML={{
                  __html: `
                    (function() {
                      var s = document.createElement('script');
                      s.src = 'https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/693e3e0ece33aa061d9cb93d/player.js';
                      s.async = true;
                      document.head.appendChild(s);
                    })();
                  `
                }}
              />
            </div>
          </div>
        </motion.div>

        {/* Text testimonials */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-secondary/50 border border-border hover:border-primary/20 transition-all"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-primary fill-primary" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-semibold text-sm">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

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
            className="btn-primary text-lg px-10 py-6 h-auto"
          >
            QUERO RESULTADOS COMO ESTES →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProofSection;
