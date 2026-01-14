import { XCircle, TrendingDown, Eye, Users, Clock, DollarSign } from "lucide-react";

const painPoints = [
  {
    icon: Users,
    title: "Clínica vazia",
    description: "Enquanto o concorrente posta stories e lota a agenda, você espera o telefone tocar.",
  },
  {
    icon: Eye,
    title: "Invisível no digital",
    description: "Sua técnica é impecável, mas nas redes sociais você simplesmente não existe.",
  },
  {
    icon: TrendingDown,
    title: "Medo de aparecer",
    description: "Travar na frente da câmera, não saber o que falar, parecer 'vendedor demais'.",
  },
  {
    icon: Clock,
    title: "Sem tempo para conteúdo",
    description: "Entre atendimentos, você mal consegue pensar em criar posts ou vídeos.",
  },
  {
    icon: DollarSign,
    title: "Paciente escolhe pelo preço",
    description: "Sem autoridade percebida, você compete por preço com qualquer outro dentista.",
  },
  {
    icon: XCircle,
    title: "Conhecimento desperdiçado",
    description: "Anos de estudo e experiência que ninguém vê porque você não sabe comunicar.",
  },
];

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-card/50">
      <div className="container-lp">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            O problema
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Você se reconhece em alguma 
            <br className="hidden md:block" />
            dessas situações?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Se você é um dentista excelente mas sente que está "escondido" do mercado, 
            você não está sozinho.
          </p>
        </div>

        {/* Pain points grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {painPoints.map((point, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 hover:bg-secondary"
            >
              <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <point.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Transition text */}
        <div className="text-center mt-16 max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-muted-foreground">
            A boa notícia? <span className="text-foreground font-semibold">O problema não é você.</span>
            <br />
            É que ninguém te ensinou a <span className="text-primary font-semibold">comunicar</span> seu valor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;