import { motion } from "framer-motion";
import { Mic, Eye, Users, Clock, DollarSign, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";

const painPoints = [
  {
    icon: Mic,
    title: "O Travado",
    description: "Você tem conhecimento profundo mas trava na hora de gravar vídeos ou aparecer nas redes.",
    emoji: "🎤",
  },
  {
    icon: Eye,
    title: "O Invisível",
    description: "Dentistas menos qualificados conseguem mais pacientes porque sabem se vender melhor.",
    emoji: "👻",
  },
  {
    icon: Users,
    title: "O Técnico",
    description: "Seus pacientes não entendem seu valor e você precisa sempre explicar por que cobra mais.",
    emoji: "📈",
  },
  {
    icon: Brain,
    title: "O Inseguro",
    description: "Antes de cada vídeo, você repensa mil vezes e acaba não postando nada.",
    emoji: "👁️",
  },
  {
    icon: Clock,
    title: "O Sem Tempo",
    description: "Entre atendimentos, você mal consegue pensar em criar conteúdo para as redes.",
    emoji: "⏰",
  },
  {
    icon: DollarSign,
    title: "O Competidor por Preço",
    description: "Sem autoridade digital, você compete por preço com qualquer dentista da região.",
    emoji: "💰",
  },
];

const PainPointsSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-card/50 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-lp relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            O problema
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6 px-2">
            Você reconhece algum 
            <br className="hidden sm:block" />
            <span className="text-gradient">desses cenários?</span>
          </h2>
        </motion.div>

        {/* Pain points grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-4 md:p-6 rounded-xl md:rounded-2xl bg-secondary/50 border border-border hover:border-destructive/50 transition-all duration-300"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <span className="text-2xl md:text-3xl">{point.emoji}</span>
                <div>
                  <h3 className="text-base md:text-lg font-semibold mb-1 md:mb-2">{point.title}</h3>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quote section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 md:mt-16 max-w-3xl mx-auto text-center"
        >
          <blockquote className="relative p-5 md:p-8 rounded-xl md:rounded-2xl bg-gradient-to-br from-secondary to-card border border-border">
            <span className="absolute top-2 left-2 md:top-4 md:left-4 text-3xl md:text-5xl text-primary/20">"</span>
            <p className="text-lg sm:text-xl md:text-2xl text-foreground italic leading-relaxed px-4 md:px-6">
              O medo de falar em público é o maior medo da humanidade.
              <br />
              <span className="text-primary font-semibold">Maior que o medo da morte.</span>
            </p>
            <span className="absolute bottom-2 right-2 md:bottom-4 md:right-4 text-3xl md:text-5xl text-primary/20">"</span>
          </blockquote>
          
          <p className="text-muted-foreground mt-6 md:mt-8 text-sm md:text-lg px-4">
            Não adianta ficar reclamando e nem mesmo ficar assistindo outras pessoas 
            que sabem menos que você ter mais sucesso. O que elas têm?{" "}
            <span className="text-primary font-bold">Coragem.</span>
          </p>

          <Button 
            onClick={scrollToOffer}
            variant="outline"
            className="mt-6 md:mt-8 border-primary text-primary hover:bg-primary hover:text-primary-foreground text-[13px] sm:text-sm px-4 sm:px-6"
          >
            QUERO TER CORAGEM →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
