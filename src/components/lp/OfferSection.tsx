import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Gift, Shield, Clock, CreditCard, Zap } from "lucide-react";

const included = [
  "5 Módulos Completos (125 minutos)",
  "Acesso por 1 Ano",
  "Certificado Profissional",
  "Assista quantas vezes quiser",
  "Técnicas comprovadas em TV ao vivo",
  "Método adaptado para odontologia",
];

const bonuses = [
  {
    title: "Roteiros Prontos para Vídeos",
    description: "10 modelos de roteiros para vídeos e posts que você pode adaptar e usar imediatamente.",
    value: "R$ 97",
  },
  {
    title: "Checklist do Vídeo Perfeito",
    description: "Um guia prático para garantir que seus vídeos tenham qualidade profissional.",
    value: "R$ 47",
  },
  {
    title: "Calendário de Conteúdo 30 dias",
    description: "Planejamento completo de posts para um mês inteiro de presença digital.",
    value: "R$ 67",
  },
];

const OfferSection = () => {
  const checkoutUrl = "#"; // Substituir pelo link real do checkout

  return (
    <section id="oferta" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

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
            Oferta especial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Invista em Você: A Comunicação
            <br className="hidden md:block" />
            <span className="text-gradient">Que Transforma Sua Carreira</span>
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main offer card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-card border-2 border-primary/30 overflow-hidden glow-orange"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-orange-500 p-6 md:p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHY2aDR2Mmgydi0yem0tOC04djJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
              <div className="relative">
                <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                  Autoridade Clínica
                </h3>
                <p className="text-primary-foreground/90">
                  Dominando a comunicação digital para dentistas
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10">
              {/* What's included */}
              <div className="mb-10">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  O que está incluso:
                </h4>
                <div className="grid md:grid-cols-2 gap-3">
                  {included.map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bonuses */}
              <div className="mb-10">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  Bônus exclusivos (totalmente GRÁTIS):
                </h4>
                <div className="space-y-3">
                  {bonuses.map((bonus, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className="flex items-center justify-between p-4 rounded-xl bg-primary/5 border border-primary/20"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Gift className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{bonus.title}</p>
                          <p className="text-xs text-muted-foreground">{bonus.description}</p>
                        </div>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4 line-through opacity-50">
                        {bonus.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center mt-4 p-3 rounded-lg bg-secondary/50">
                  <p className="text-sm text-muted-foreground">
                    Valor total em bônus: <span className="line-through">R$ 211,00</span>{" "}
                    <span className="text-primary font-bold">GRÁTIS</span>
                  </p>
                </div>
              </div>

              {/* Pricing */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center border-t border-border pt-10"
              >
                <p className="text-muted-foreground mb-2 text-sm">Por apenas:</p>
                
                <div className="mb-4">
                  <p className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    10x de{" "}
                    <span className="text-primary">R$ 9,70</span>
                  </p>
                  <p className="text-muted-foreground">
                    Ou <strong className="text-foreground">R$ 97,00</strong> à vista no cartão ou PIX
                  </p>
                </div>

                {/* CTA Button */}
                <Button 
                  asChild
                  className="w-full md:w-auto btn-primary text-lg px-12 py-7 h-auto animate-pulse-glow mb-6"
                >
                  <a href={checkoutUrl}>
                    <Zap className="w-5 h-5 mr-2" />
                    COMEÇAR AGORA
                  </a>
                </Button>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Pagamento seguro
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Acesso imediato
                  </div>
                  <div className="flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-primary" />
                    Parcelamento em até 12x
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Guarantee preview */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-primary" />
              🛡️ <strong className="text-foreground">Garantia de 7 dias</strong> ou seu dinheiro de volta
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
