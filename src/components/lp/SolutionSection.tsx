import { motion } from "framer-motion";
import { Lightbulb, Target, Mic, TrendingUp, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    icon: Lightbulb,
    title: "Confiança Inabalável",
    description: "Apresente-se para qualquer câmera sem medo ou insegurança.",
  },
  {
    icon: Target,
    title: "Vendas Multiplicadas",
    description: "Convença pacientes com discurso estruturado e autêntico.",
  },
  {
    icon: Mic,
    title: "Autoridade Percebida",
    description: "Conquiste respeito e credibilidade ao comunicar seu trabalho.",
  },
  {
    icon: TrendingUp,
    title: "Improviso Dominado",
    description: "Responda perguntas e grave vídeos com naturalidade.",
  },
];

const rootCauses = [
  {
    icon: "✕",
    title: "Treinado para ATENDER, não para COMUNICAR",
    description: "Você aprendeu técnica clínica impecável, mas nunca te ensinaram a mostrar isso para o mundo.",
  },
  {
    icon: "✕",
    title: "Não sabe criar conteúdo que conecta",
    description: "Seus posts são técnicos demais ou genéricos demais. Ninguém para pra assistir.",
  },
  {
    icon: "✕",
    title: "Medo de parecer 'vendedor'",
    description: "Você evita aparecer porque não quer parecer mercenário ou arrogante.",
  },
  {
    icon: "✕",
    title: "Não conhece técnicas de comunicação",
    description: "Sem técnica, cada vídeo vira improviso e o resultado é imprevisível.",
  },
];

const CHECKOUT_URL = "https://pay.hotmart.com/V103862397O?checkoutMode=10&bid=1769124989760";

const SolutionSection = () => {

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container-lp relative z-10">
        {/* Root cause section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-destructive/10 border border-destructive/30 mb-4 md:mb-6">
            <span className="text-destructive text-xs md:text-sm font-medium">⚠️ A CAUSA RAIZ</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 px-2">
            Por Que Você Ainda Não é Uma
            <br className="hidden sm:block" />
            <span className="text-gradient">Autoridade Digital?</span>
          </h2>
          
          <p className="text-sm md:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            O erro não está na sua técnica clínica. 
            <strong className="text-foreground"> Está na falta de técnica de comunicação.</strong>
          </p>
        </motion.div>

        {/* Root causes grid */}
        <div className="grid sm:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto mb-14 md:mb-20">
          {rootCauses.map((cause, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-3 md:gap-4 p-4 md:p-5 rounded-lg md:rounded-xl bg-destructive/5 border border-destructive/20"
            >
              <span className="text-destructive font-bold text-lg md:text-xl">{cause.icon}</span>
              <div>
                <h4 className="font-semibold text-sm md:text-base mb-1">{cause.title}</h4>
                <p className="text-muted-foreground text-xs md:text-sm">{cause.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 md:mb-20"
        >
          <div className="inline-block p-5 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary to-card border border-primary/20 mx-4">
            <p className="text-lg sm:text-xl md:text-2xl text-foreground italic mb-3 md:mb-4">
              "Comunicação é a{" "}
              <span className="text-primary font-semibold">única arma</span>{" "}
              que você tem para jogar esse jogo."
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">— Fernando Machado, CEO F5 Estratégia</p>
          </div>
        </motion.div>

        {/* Solution intro */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/30 mb-4 md:mb-6">
            <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
            <span className="text-primary text-xs md:text-sm font-medium">A SOLUÇÃO</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 px-2">
            Transformar Técnica em
          </h2>
          <div className="inline-block mb-4 md:mb-6">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gradient">
              Comunicação: Dentista que Vende
            </h3>
            <p className="text-base md:text-xl text-muted-foreground mt-2">
              O método para se comunicar de forma estratégica
            </p>
          </div>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
            Não é teoria acadêmica. É o que funcionou em{" "}
            <strong className="text-foreground">13 anos de TV ao vivo</strong> e{" "}
            <strong className="text-primary">+3.000 clínicas odontológicas</strong> atendidas.
          </p>
        </motion.div>

        {/* Solution benefits */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-5xl mx-auto mb-10 md:mb-12">
          {solutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-4 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-primary/30 transition-all"
            >
              <div className="w-10 h-10 md:w-14 md:h-14 mx-auto mb-3 md:mb-4 rounded-lg md:rounded-xl bg-primary/10 flex items-center justify-center">
                <solution.icon className="w-5 h-5 md:w-7 md:h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-sm md:text-lg mb-1 md:mb-2">{solution.title}</h4>
              <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                {solution.description}
              </p>
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
            asChild
            className="btn-primary text-[13px] sm:text-sm md:text-lg px-4 sm:px-8 md:px-10 py-5 md:py-6 h-auto leading-tight"
          >
            <a href={CHECKOUT_URL}>DOMINAR ESSA HABILIDADE →</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionSection;
