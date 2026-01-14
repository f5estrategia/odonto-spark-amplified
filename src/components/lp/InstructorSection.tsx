import { motion } from "framer-motion";
import { Tv, Building2, Mic2, Users, Award, TrendingUp, Trophy } from "lucide-react";

const credentials = [
  {
    icon: Tv,
    value: "13 anos",
    label: "de TV ao vivo",
  },
  {
    icon: Building2,
    value: "+3.000",
    label: "clínicas atendidas",
  },
  {
    icon: TrendingUp,
    value: "R$ 30M+",
    label: "vendas geradas",
  },
  {
    icon: Users,
    value: "+1.000",
    label: "marcas impactadas",
  },
];

const achievements = [
  {
    icon: Tv,
    title: "13 anos no SBT",
    description: "Âncora de TV ao vivo, Teleton, coberturas internacionais. Milhares de horas improvisando e apresentando para milhões.",
  },
  {
    icon: Trophy,
    title: "Prêmio Fatma de Jornalismo",
    description: "Reconhecimento pela excelência em comunicação e impacto gerado.",
  },
  {
    icon: Building2,
    title: "CEO F5 Estratégia",
    description: "R$30 milhões em vendas geradas. 1.000+ marcas impactadas. Transformando comunicação em resultados.",
  },
  {
    icon: Mic2,
    title: "Especialista em Comunicação Estratégica",
    description: "Treinando executivos e líderes a usar comunicação como ferramenta de poder e resultado.",
  },
];

const InstructorSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container-lp relative z-10">
        {/* Section header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Seu mentor
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Quem Está Por Trás dos
            <br className="hidden md:block" />
            <span className="text-gradient">Resultados Comprovados</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border-2 border-primary/20 glow-orange">
              <img 
                src="https://crcqueconverte.f5educacao.com/assets/images/fernando-machado.webp" 
                alt="Fernando Machado"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            
            {/* Floating badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 -right-4 md:bottom-8 md:-right-8 bg-primary text-primary-foreground p-4 md:p-6 rounded-2xl shadow-lg shadow-primary/30"
            >
              <div className="text-center">
                <Award className="w-8 h-8 mx-auto mb-2" />
                <p className="font-bold text-lg">CEO & Fundador</p>
                <p className="text-sm opacity-90">F5 Estratégia</p>
              </div>
            </motion.div>

            {/* Stats overlay */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-auto"
            >
              <div className="grid grid-cols-2 gap-2 md:gap-4 p-3 md:p-4 rounded-xl bg-background/90 backdrop-blur-sm border border-border">
                <div className="text-center px-2 md:px-4">
                  <div className="text-primary font-bold text-sm md:text-lg">22% → 45%</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Taxa de Conversão</div>
                </div>
                <div className="text-center px-2 md:px-4 border-l border-border">
                  <div className="text-primary font-bold text-sm md:text-lg">+35%</div>
                  <div className="text-[10px] md:text-xs text-muted-foreground">Ticket Médio</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl md:text-4xl font-bold mb-2">Fernando Machado</h3>
            <p className="text-primary font-medium mb-6">Ex-Âncora SBT • CEO F5 Estratégia</p>
            
            <div className="space-y-4 text-lg text-muted-foreground mb-8">
              <p className="leading-relaxed">
                Uma pessoa que falava "poblema" virou{" "}
                <span className="text-foreground font-semibold">apresentador de televisão nacional</span>.
              </p>
              
              <p className="leading-relaxed">
                Por <span className="text-primary font-semibold">13 anos</span>, apresentou jornal ao vivo no SBT.
                2 horas por dia. 5 dias por semana. Zero margem para erro.
              </p>
              
              <p className="leading-relaxed">
                Começou narrando rodeios aos 15 anos. Trabalha desde os 11.
                Hoje é <span className="text-foreground font-semibold">CEO da F5 Estratégia</span>, 
                uma das maiores aceleradoras de marketing odontológico do Brasil.
              </p>

              <p className="leading-relaxed">
                Mais de <span className="text-primary font-semibold">R$ 30 milhões em vendas geradas</span>.
                Mais de 1.000 marcas impactadas.
              </p>

              <p className="leading-relaxed font-medium text-foreground">
                Agora, pela primeira vez, ele revela tudo que aprendeu em 20 anos de comunicação profissional — 
                adaptado especificamente para dentistas.
              </p>
            </div>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4">
              {credentials.map((cred, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <cred.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{cred.value}</p>
                    <p className="text-xs text-muted-foreground">{cred.label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Achievements section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Da TV ao Vivo para Transformar{" "}
            <span className="text-gradient">Clínicas Odontológicas</span>
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <achievement.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold mb-2">{achievement.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstructorSection;
