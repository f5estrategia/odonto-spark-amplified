import { BookOpen, Mic, Camera, MessageSquare, Crown, CheckCircle2 } from "lucide-react";
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
    title: "FUNDAÇÃO",
    subtitle: "Conteúdo que só você pode criar",
    description: "Descubra como transformar sua experiência clínica única em conteúdo autêntico que nenhum concorrente pode copiar.",
    lessons: [
      "O poder da sua história profissional",
      "Identificando seu diferencial único",
      "Transformando casos clínicos em conteúdo",
      "Definindo sua persona de comunicação",
    ],
    duration: "25 min",
  },
  {
    id: "02",
    icon: Mic,
    title: "PREPARAÇÃO",
    subtitle: "Estruturando seu discurso",
    description: "Aprenda a criar roteiros e estruturas para posts, vídeos e stories que conectam e convertem.",
    lessons: [
      "O roteiro perfeito para vídeos curtos",
      "Estrutura de posts que engajam",
      "Como contar histórias que vendem",
      "Preparação mental antes de gravar",
    ],
    duration: "30 min",
  },
  {
    id: "03",
    icon: Camera,
    title: "APRESENTAÇÃO",
    subtitle: "Dominando a câmera",
    description: "Técnicas práticas para se sentir confortável gravando e transmitir confiança em vídeo.",
    lessons: [
      "Superando o medo da câmera",
      "Linguagem corporal e postura",
      "Tom de voz e ritmo ideal",
      "Iluminação e enquadramento simples",
    ],
    duration: "35 min",
  },
  {
    id: "04",
    icon: MessageSquare,
    title: "IMPROVISO",
    subtitle: "Respondendo com maestria",
    description: "Como responder comentários, fazer lives e interagir com segurança e espontaneidade.",
    lessons: [
      "Técnicas de improviso estruturado",
      "Respondendo perguntas difíceis",
      "Lives que convertem em consultas",
      "Gerenciando comentários negativos",
    ],
    duration: "25 min",
  },
  {
    id: "05",
    icon: Crown,
    title: "AUTORIDADE",
    subtitle: "Posicionamento estratégico",
    description: "Construa uma presença digital que te posiciona como referência e justifica preços premium.",
    lessons: [
      "Construindo autoridade percebida",
      "Networking digital estratégico",
      "Posicionamento de preço premium",
      "Criando uma comunidade de pacientes fiéis",
    ],
    duration: "30 min",
  },
];

const ModulesSection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/30 to-background" />
      
      <div className="container-lp relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            O programa
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            5 módulos para transformar sua
            <br className="hidden md:block" />
            <span className="text-gradient">comunicação digital</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Um método estruturado e prático que você pode aplicar mesmo com
            pouco tempo disponível.
          </p>
        </div>

        {/* Total time badge */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/30">
            <span className="text-primary font-bold">⏱️ 2h 25min</span>
            <span className="text-muted-foreground text-sm">de conteúdo objetivo e aplicável</span>
          </div>
        </div>

        {/* Modules accordion */}
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem
                key={module.id}
                value={module.id}
                className="border border-border rounded-2xl bg-card/50 px-6 overflow-hidden data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">
                          MÓDULO {module.id}
                        </span>
                        <span className="text-xs text-muted-foreground">
                          {module.duration}
                        </span>
                      </div>
                      <h3 className="font-bold text-lg">{module.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {module.subtitle}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pb-6">
                  <div className="pl-16">
                    <p className="text-muted-foreground mb-4">
                      {module.description}
                    </p>
                    <div className="space-y-2">
                      {module.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                          <span className="text-sm">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;