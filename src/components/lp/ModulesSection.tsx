import { motion } from "framer-motion";
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
  },
  {
    id: "02",
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
  },
  {
    id: "03",
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
  },
  {
    id: "04",
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
  },
  {
    id: "05",
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
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            O programa
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6 px-2">
            O Programa que Transforma
            <br className="hidden sm:block" />
            <span className="text-gradient">Sua Comunicação</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm md:text-base px-4">
            5 módulos práticos | 125 minutos de conteúdo direto ao ponto
          </p>
        </motion.div>

        {/* Total time badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-8 md:mb-12"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-1 sm:gap-3 px-4 md:px-6 py-2 md:py-3 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-primary font-bold text-sm md:text-base">⏱️ 125 minutos</span>
            <span className="text-muted-foreground text-xs md:text-sm">de conteúdo objetivo e aplicável</span>
          </div>
        </motion.div>

        {/* Modules grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto mb-10 md:mb-12">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-card border border-border rounded-xl md:rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-xl hover:shadow-primary/10"
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
              </div>
              
              {/* Content */}
              <div className="p-4 md:p-5">
                <h3 className="font-bold text-base md:text-lg text-foreground mb-0.5 md:mb-1">{module.title}</h3>
                <p className="text-primary text-xs md:text-sm font-medium mb-2 md:mb-3">{module.subtitle}</p>
                <p className="text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                  {module.description}
                </p>
                
                <div className="space-y-1.5 md:space-y-2">
                  {module.lessons.slice(0, 3).map((lesson, lessonIndex) => (
                    <div key={lessonIndex} className="flex items-center gap-2">
                      <span className="text-primary text-xs">→</span>
                      <span className="text-[11px] md:text-xs text-muted-foreground">{lesson}</span>
                    </div>
                  ))}
                  {module.lessons.length > 3 && (
                    <p className="text-[11px] md:text-xs text-primary font-medium">+ {module.lessons.length - 3} aulas</p>
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
          className="text-center px-4"
        >
          <Button 
            onClick={scrollToOffer}
            className="btn-primary text-[13px] sm:text-sm md:text-lg px-4 sm:px-6 md:px-10 py-5 md:py-6 h-auto leading-tight"
          >
            ACESSAR PROGRAMA COMPLETO →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
