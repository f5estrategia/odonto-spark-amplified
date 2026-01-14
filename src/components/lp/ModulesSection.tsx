import { motion } from "framer-motion";
import { BookOpen, Mic, Camera, MessageSquare, Crown, CheckCircle2, Gift } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const modules = [
  {
    id: "01",
    icon: BookOpen,
    title: "FUNDAÇÃO: CONTEÚDO REINA",
    subtitle: "Técnicas de oratória são inúteis sem conteúdo relevante",
    image: "https://discursodolider.f5educacao.com/assets/images/modules/modulo1-fundacao.jpg",
    lessons: [
      "Boas-vindas e apresentação",
      "Conteúdo - A Base de Tudo",
      "Nivelar por Baixo",
      "Não Seja Intelectual",
    ],
    duration: "13 min",
    phase: "FASE 1",
  },
  {
    id: "02",
    icon: Mic,
    title: "PREPARAÇÃO: CHECKLIST ESTRATÉGICO",
    subtitle: "Framework jornalístico de 20 anos para estruturar apresentações",
    image: "https://discursodolider.f5educacao.com/assets/images/modules/modulo2-preparacao.jpg",
    lessons: [
      "5W1H e Pirâmide Invertida",
      "Monte Seu Roteiro",
      "Priorize Informação",
      "Storytelling na Prática",
    ],
    duration: "17 min",
    phase: "FASE 2",
  },
  {
    id: "03",
    icon: Camera,
    title: "APRESENTAÇÃO: DESAFIANDO O MEDO",
    subtitle: "Técnicas de TV ao vivo para dominar a ansiedade",
    image: "https://discursodolider.f5educacao.com/assets/images/modules/modulo3-apresentacao.jpg",
    lessons: [
      "O Medo de Falar",
      "Preparação da Voz",
      "Linguagem Corporal",
      "Palavras Difíceis",
      "Abertura e Fechamento",
    ],
    duration: "20 min",
    phase: "FASE 3",
  },
  {
    id: "04",
    icon: MessageSquare,
    title: "DOMINANDO O IMPROVISO",
    subtitle: "O que fazer quando dá tudo errado ao vivo",
    image: "https://discursodolider.f5educacao.com/assets/images/modules/modulo4-dominando.jpg",
    lessons: [
      "O Famoso Branco",
      "Técnicas de Respiração",
      "Pare de Pedir Desculpas",
      "A Arte do Improviso",
      "Lidando com Interrupções",
    ],
    duration: "16 min",
    phase: "FASE 4",
  },
  {
    id: "05",
    icon: Crown,
    title: "ENGAJAMENTO DE LIDERANÇA",
    subtitle: "Como conquistar uma sala (ou uma câmera) em 30 segundos",
    image: "https://discursodolider.f5educacao.com/assets/images/modules/modulo5-engajamento.jpg",
    lessons: [
      "Criando Rapport",
      "Lidando com Objeções",
      "Posicionamento de Líder",
      "Comunicação Digital",
      "Câmera e Gravação",
    ],
    duration: "31 min",
    phase: "FASE 5",
  },
];

const bonus = {
  id: "00",
  icon: Gift,
  title: "SÍNTESE FINAL",
  subtitle: "Resumo executivo de tudo que você aprendeu para revisar sempre que precisar",
  duration: "12 min",
};

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
            O Programa que Transforma Sua
            <br className="hidden md:block" />
            <span className="text-gradient">Comunicação Digital</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            5 módulos práticos + bônus | 125 minutos de conteúdo direto ao ponto
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
            <span className="text-primary font-bold">⏱️ 2h 05min</span>
            <span className="text-muted-foreground text-sm">de conteúdo objetivo e aplicável</span>
          </div>
        </motion.div>

        {/* Modules grid */}
        <div className="grid gap-6 max-w-5xl mx-auto mb-8">
          {modules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all"
            >
              <div className="grid md:grid-cols-[200px_1fr] gap-0">
                {/* Image */}
                <div className="aspect-video md:aspect-auto relative overflow-hidden">
                  <img 
                    src={module.image} 
                    alt={module.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {module.phase}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1 rounded-full">
                      ~{module.duration}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-primary">
                          MÓDULO {module.id}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{module.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        {module.subtitle}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <div key={lessonIndex} className="flex items-center gap-2">
                            <span className="text-primary">→</span>
                            <span className="text-sm text-muted-foreground">{lesson}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Bonus module */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                <bonus.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-bold text-primary bg-primary/20 px-2 py-0.5 rounded">
                    🎁 BÔNUS
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {bonus.duration}
                  </span>
                </div>
                <h3 className="font-bold text-lg mb-1">{bonus.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {bonus.subtitle}
                </p>
              </div>
            </div>
          </motion.div>
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
            ACESSAR O PROGRAMA COMPLETO →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ModulesSection;
