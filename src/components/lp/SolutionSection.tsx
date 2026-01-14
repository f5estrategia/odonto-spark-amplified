import { Lightbulb, Target, Mic, TrendingUp } from "lucide-react";

const solutions = [
  {
    icon: Lightbulb,
    title: "Confiança para aparecer",
    description: "Técnicas práticas para gravar vídeos sem travar, com naturalidade e autenticidade.",
  },
  {
    icon: Target,
    title: "Conteúdo que atrai",
    description: "O que falar, como falar e quando postar para atrair pacientes qualificados.",
  },
  {
    icon: Mic,
    title: "Comunicação de autoridade",
    description: "Posicione-se como referência e justifique preços premium sem parecer arrogante.",
  },
  {
    icon: TrendingUp,
    title: "Resultados mensuráveis",
    description: "Transforme seguidores em pacientes reais que agendam e comparecem.",
  },
];

const SolutionSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-lp relative z-10">
        {/* The root of the problem */}
        <div className="text-center mb-20">
          <div className="inline-block p-6 rounded-2xl bg-secondary border border-border mb-8">
            <p className="text-lg md:text-xl text-muted-foreground italic">
              "Comunicação é a{" "}
              <span className="text-primary font-semibold">única arma</span>{" "}
              que você tem para jogar esse jogo."
            </p>
            <p className="text-sm text-muted-foreground mt-2">— Fernando Machado</p>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            A raiz do problema não é sua
            <br className="hidden md:block" />
            <span className="text-gradient">técnica odontológica</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Você aprendeu a <strong className="text-foreground">tratar</strong> pacientes durante anos de faculdade.
            <br />
            Mas nunca te ensinaram a <strong className="text-primary">atrair</strong> esses pacientes.
          </p>
        </div>

        {/* Introducing the solution */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            A solução
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-4">
            Apresentamos o
          </h2>
          <div className="inline-block">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient mb-2">
              Autoridade Clínica
            </h3>
            <p className="text-xl text-muted-foreground">
              Dominando a comunicação digital
            </p>
          </div>
        </div>

        {/* Solution benefits */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <solution.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-1">{solution.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual separator */}
        <div className="flex items-center justify-center gap-4 mt-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-border" />
          <div className="w-2 h-2 rounded-full bg-primary" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;