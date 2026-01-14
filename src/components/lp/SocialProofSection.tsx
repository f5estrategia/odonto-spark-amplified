import { Star, TrendingUp, Users, Award, Building2 } from "lucide-react";

const metrics = [
  {
    icon: Building2,
    value: "+3.000",
    label: "Clínicas atendidas",
  },
  {
    icon: TrendingUp,
    value: "R$ 3.8M",
    label: "Em vendas geradas",
  },
  {
    icon: Award,
    value: "27x",
    label: "ROAS médio",
  },
  {
    icon: Users,
    value: "+50.000",
    label: "Leads qualificados",
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
  return (
    <section className="section-padding bg-gradient-to-b from-card/50 to-background">
      <div className="container-lp">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Resultados reais
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Números que comprovam
            <br className="hidden md:block" />
            <span className="text-gradient">o método</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A F5 Estratégia é referência em marketing digital para odontologia.
            Esses são os resultados de quem aplica nosso método.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                <metric.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-muted-foreground">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-bold">
            O que dizem nossos alunos
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>

        {/* Video testimonials placeholder */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            Veja depoimentos em vídeo de dentistas que transformaram sua comunicação:
          </p>
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="aspect-video bg-card rounded-xl border border-border flex items-center justify-center cursor-pointer hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                  <span className="text-primary text-2xl">▶</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;