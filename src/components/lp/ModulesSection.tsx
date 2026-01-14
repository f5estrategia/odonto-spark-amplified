import { motion } from "framer-motion";
import { BookOpen, Mic, Camera, MessageSquare, Crown, Gift, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const modules = [
  {
    id: "01",
    icon: BookOpen,
    title: "FUNDAÇÃO: CONTEÚDO REINA",
    subtitle: "Técnicas de oratória são inúteis sem conteúdo relevante",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo1.webp",
    lessons: [
      "Boas-vindas e apresentação",
      "Conteúdo - A Base de Tudo",
      "Nivelar por Baixo",
      "Não Seja Intelectual",
    ],
    duration: "~2h",
    phase: "FASE 1",
    color: "from-orange-500 to-amber-500",
  },
  {
    id: "02",
    icon: Mic,
    title: "PREPARAÇÃO: CHECKLIST ESTRATÉGICO",
    subtitle: "Framework jornalístico de 20 anos para estruturar apresentações",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo2.webp",
    lessons: [
      "5W1H e Pirâmide Invertida",
      "Monte Seu Roteiro",
      "Priorize Informação",
      "Storytelling na Prática",
    ],
    duration: "~3h",
    phase: "FASE 2",
    color: "from-amber-500 to-yellow-500",
  },
  {
    id: "03",
    icon: Camera,
    title: "APRESENTAÇÃO: DESAFIANDO O MEDO",
    subtitle: "Técnicas de TV ao vivo para dominar a ansiedade",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo3.webp",
    lessons: [
      "O Medo de Falar",
      "Preparação da Voz",
      "Linguagem Corporal",
      "Palavras Difíceis",
      "Abertura e Fechamento",
    ],
    duration: "~2.5h",
    phase: "FASE 3",
    color: "from-yellow-500 to-orange-500",
  },
  {
    id: "04",
    icon: MessageSquare,
    title: "DOMINANDO O IMPROVISO",
    subtitle: "O que fazer quando dá tudo errado ao vivo",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo4.webp",
    lessons: [
      "O Famoso Branco",
      "Técnicas de Respiração",
      "Pare de Pedir Desculpas",
      "A Arte do Improviso",
      "Lidando com Interrupções",
    ],
    duration: "~2h",
    phase: "FASE 4",
    color: "from-orange-500 to-red-500",
  },
  {
    id: "05",
    icon: Crown,
    title: "ENGAJAMENTO DE LIDERANÇA",
    subtitle: "Como conquistar uma sala (ou uma câmera) em 30 segundos",
    image: "https://crcqueconverte.f5educacao.com/assets/images/modulo5.webp",
    lessons: [
      "Criando Rapport",
      "Lidando com Objeções",
      "Posicionamento de Líder",
      "Comunicação Digital",
      "Câmera e Gravação",
    ],
    duration: "~3h",
    phase: "FASE 5",
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
            O Programa que Transforma Sua
            <br className="hidden md:block" />
            <span className="text-gradient">Comunicação Digital</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            5 módulos práticos | Conteúdo direto ao ponto adaptado para odontologia
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
            <span className="text-primary font-bold">⏱️ +12 horas</span>
            <span className="text-muted-foreground text-sm">de conteúdo objetivo e aplicável</span>
          </div>
        </motion.div>

        {/* Modules carousel style */}
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
              <div className="aspect-[3/4] relative overflow-hidden">
                <img 
                  src={module.image} 
                  alt={module.title}
                  className="w-full h-full object-contain bg-gradient-to-b from-card to-card/50 group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                
                {/* Phase badge */}
                <div className="absolute top-4 left-4">
                  <span className={`bg-gradient-to-r ${module.color} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg`}>
                    {module.phase}
                  </span>
                </div>
                
                {/* Duration badge */}
                <div className="absolute top-4 right-4">
                  <span className="bg-background/90 backdrop-blur-sm text-foreground text-xs font-medium px-3 py-1.5 rounded-full border border-border">
                    {module.duration}
                  </span>
                </div>

                {/* Module number */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center border border-primary/30">
                      <module.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-primary block">MÓDULO {module.id}</span>
                      <h3 className="font-bold text-sm text-foreground leading-tight">{module.title.split(':')[0]}</h3>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {module.subtitle}
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

          {/* Bonus CRC Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="group bg-gradient-to-br from-primary/20 via-card to-primary/10 border-2 border-primary/50 rounded-2xl overflow-hidden hover:border-primary transition-all hover:shadow-xl hover:shadow-primary/20 relative"
          >
            {/* Sparkle decorations */}
            <div className="absolute top-4 right-4 z-10">
              <Sparkles className="w-6 h-6 text-primary animate-pulse" />
            </div>
            
            {/* Image */}
            <div className="aspect-[3/4] relative overflow-hidden">
              <img 
                src="https://crcqueconverte.f5educacao.com/assets/images/modulo6.webp" 
                alt="Bônus CRC que Converte"
                className="w-full h-full object-contain bg-gradient-to-b from-primary/10 to-card/50 group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
              
              {/* BÔNUS badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-gradient-to-r from-primary to-orange-400 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Gift className="w-3 h-3" /> BÔNUS
                </span>
              </div>

              {/* Content overlay */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/30 backdrop-blur-sm flex items-center justify-center border border-primary/50">
                    <Gift className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary block">INCLUSO NA COMPRA</span>
                    <h3 className="font-bold text-sm text-foreground leading-tight">CRC QUE CONVERTE</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content */}
            <div className="p-5">
              <p className="text-sm text-muted-foreground mb-4">
                Treinamento completo de vendas para sua CRC converter mais pacientes!
              </p>
              
              <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Valor real:</span>
                  <span className="text-sm font-bold text-foreground line-through opacity-60">R$ 497</span>
                </div>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-xs text-primary font-semibold">Seu bônus:</span>
                  <span className="text-lg font-bold text-primary">GRÁTIS</span>
                </div>
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
