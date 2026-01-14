import { motion } from "framer-motion";
import { BookOpen, Mic, Camera, MessageSquare, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import module thumbnails
import capaMod1 from "@/assets/modules/capa-mod1.jpg";
import capaMod2 from "@/assets/modules/capa-mod2.jpg";
import capaMod3 from "@/assets/modules/capa-mod3.jpg";
import capaMod4 from "@/assets/modules/capa-mod4.jpg";
import capaMod5 from "@/assets/modules/capa-mod5.jpg";

const modules = [
  {
    id: "01",
    icon: BookOpen,
    title: "FUNDAÇÃO",
    subtitle: "CONTEÚDO É PODER",
    description: "Técnicas de oratória são inúteis sem conteúdo relevante.",
    image: capaMod1,
    lessons: [
      "Boas-vindas e apresentação",
      "Conteúdo - A Base de Tudo",
      "Nivelar por Baixo",
      "Não Seja Intelectual",
    ],
    duration: "13 min",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "02",
    icon: Mic,
    title: "PREPARAÇÃO",
    subtitle: "ROTEIRO VENCEDOR",
    description: "Framework jornalístico de 20 anos para estruturar apresentações.",
    image: capaMod2,
    lessons: [
      "5W1H e Pirâmide Invertida",
      "Monte Seu Roteiro",
      "Priorize Informação",
      "Storytelling na Prática",
    ],
    duration: "17 min",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "03",
    icon: Camera,
    title: "APRESENTAÇÃO",
    subtitle: "CONFIANÇA NA PRÁTICA",
    description: "Técnicas de TV ao vivo para dominar a ansiedade.",
    image: capaMod3,
    lessons: [
      "O Medo de Falar",
      "Preparação da Voz",
      "Linguagem Corporal",
      "Palavras Difíceis",
      "Abertura e Fechamento",
    ],
    duration: "20 min",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "04",
    icon: MessageSquare,
    title: "DOMINANDO",
    subtitle: "CONTROLE E ADAPTAÇÃO",
    description: "O que fazer quando dá tudo errado ao vivo.",
    image: capaMod4,
    lessons: [
      "O Famoso Branco",
      "Técnicas de Respiração",
      "Pare de Pedir Desculpas",
      "A Arte do Improviso",
      "Lidando com Interrupções",
    ],
    duration: "16 min",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "05",
    icon: Crown,
    title: "AUTORIDADE",
    subtitle: "PACIENTES CONFIAM EM VOCÊ",
    description: "Como conquistar uma sala (ou uma câmera) em 30 segundos.",
    image: capaMod5,
    lessons: [
      "Criando Rapport",
      "Lidando com Objeções",
      "Posicionamento de Líder",
      "Comunicação Digital",
      "Câmera e Gravação",
    ],
    duration: "31 min",
    color: "from-red-500 to-orange-600",
  },
];

const ModulesSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container-lp relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            O programa
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            O Programa que Transforma
            <br className="hidden md:block" />
            <span className="text-gradient">Sua Comunicação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            5 módulos práticos | 125 minutos de conteúdo direto ao ponto
          </p>
        </motion.div>

        {/* Total time badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-primary font-bold">⏱️ 125 minutos</span>
            <span className="text-muted-foreground text-sm">de conteúdo objetivo e aplicável</span>
          </div>
        </motion.div>

        {/* Modules grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Image */}
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={module.image} 
                  alt={`Módulo ${module.id} - ${module.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                
                {/* Duration badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border">
                    {module.duration}
                  </span>
                </div>

                {/* Icon */}
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                    <module.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-lg text-foreground mb-1">{module.title}</h3>
                <p className="text-primary text-sm font-medium mb-3">{module.subtitle}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {module.description}
                </p>
                
                <div className="space-y-2">
                  {module.lessons.slice(0, 3).map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="flex items-center gap-2">
                      <span className="text-primary text-xs">→</span>
                      <span className="text-xs text-muted-foreground">{lesson}</span>
                    </div>
                  ))}
                  {module.lessons.length > 3 && (
                    <p className="text-xs text-primary font-medium">+ {module.lessons.length - 3} aulas</p>
                  )}
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
            className="btn-primary text-base md:text-lg px-8 md:px-10 py-5 md:py-6 h-auto"
          >
            ACESSAR O PROGRAMA COMPLETO →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
