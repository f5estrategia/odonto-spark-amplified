import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Gift, Shield, Clock, CreditCard, Zap, Sparkles } from "lucide-react";

const included = [
  "5 Módulos Completos de Comunicação (125 min)",
  "Acesso por 1 Ano Completo",
  "Certificado Profissional",
  "Assista quantas vezes quiser",
  "Técnicas comprovadas em 13 anos de TV ao vivo",
  "Método adaptado para odontologia",
];

const bonuses = [
  {
    title: "🎁 CRC QUE CONVERTE",
    description: "Treinamento completo de vendas para sua CRC. 6 módulos para converter +60% mais pacientes.",
    value: "R$ 497",
    highlight: true,
  },
  {
    title: "📝 Roteiros Prontos para Vídeos",
    description: "10 modelos de roteiros para vídeos e posts que você pode adaptar e usar imediatamente.",
    value: "R$ 97",
    highlight: false,
  },
  {
    title: "✅ Checklist do Vídeo Perfeito",
    description: "Um guia prático para garantir que seus vídeos tenham qualidade profissional.",
    value: "R$ 47",
    highlight: false,
  },
  {
    title: "📅 Calendário de Conteúdo 30 dias",
    description: "Planejamento completo de posts para um mês inteiro de presença digital.",
    value: "R$ 67",
    highlight: false,
  },
];

const OfferSection = () => {
  const checkoutUrl = "https://pay.hotmart.com/V103862397O";

  const totalBonusValue = bonuses.reduce((acc, bonus) => {
    const value = parseInt(bonus.value.replace(/[^0-9]/g, ''));
    return acc + value;
  }, 0);

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
          className="text-center mb-8 md:mb-12"
        >
          <span className="text-primary font-semibold text-xs md:text-sm uppercase tracking-wider">
            Oferta especial
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 md:mt-4 mb-4 md:mb-6 px-2">
            Invista em Você: A Comunicação
            <br className="hidden sm:block" />
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
            className="rounded-2xl md:rounded-3xl bg-card border-2 border-primary/30 overflow-hidden glow-orange"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-orange-500 p-4 md:p-8 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnYtMmgtNHY2aDR2Mmgydi0yem0tOC04djJoMnYtMmgtMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30" />
              <div className="relative">
                <h3 className="text-xl md:text-3xl font-bold text-primary-foreground mb-1 md:mb-2">
                  Autoridade Clínica
                </h3>
                <p className="text-primary-foreground/90 text-sm md:text-base">
                  Dominando a comunicação digital para dentistas
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="p-4 md:p-10">
              {/* What's included */}
              <div className="mb-8 md:mb-10">
                <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  O que está incluso:
                </h4>
                <div className="grid sm:grid-cols-2 gap-2 md:gap-3">
                  {included.map((item, index) => (
                    <motion.div 
                      key={index} 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-xs md:text-sm text-muted-foreground">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Bonuses */}
              <div className="mb-8 md:mb-10">
                <h4 className="font-semibold text-base md:text-lg mb-3 md:mb-4 flex items-center gap-2">
                  <Gift className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  Bônus exclusivos (totalmente GRÁTIS):
                </h4>
                <div className="space-y-2 md:space-y-3">
                  {bonuses.map((bonus, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 md:p-4 rounded-lg md:rounded-xl border ${
                        bonus.highlight 
                          ? 'bg-gradient-to-r from-primary/20 to-primary/10 border-primary/50' 
                          : 'bg-primary/5 border-primary/20'
                      }`}
                    >
                      <div className="flex items-start sm:items-center gap-2 md:gap-3 mb-2 sm:mb-0">
                        <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                          bonus.highlight ? 'bg-primary/30' : 'bg-primary/10'
                        }`}>
                          {bonus.highlight ? (
                            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                          ) : (
                            <Gift className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                          )}
                        </div>
                        <div>
                          <p className={`font-semibold text-xs md:text-sm ${bonus.highlight ? 'text-primary' : ''}`}>
                            {bonus.title}
                          </p>
                          <p className="text-[11px] md:text-xs text-muted-foreground">{bonus.description}</p>
                        </div>
                      </div>
                      <span className={`text-primary font-bold whitespace-nowrap sm:ml-4 line-through opacity-50 text-sm md:text-base ${
                        bonus.highlight ? 'md:text-lg' : ''
                      }`}>
                        {bonus.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
                
                <div className="text-center mt-3 md:mt-4 p-2 md:p-3 rounded-lg bg-secondary/50">
                  <p className="text-xs md:text-sm text-muted-foreground">
                    Valor total em bônus: <span className="line-through">R$ {totalBonusValue},00</span>{" "}
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
                className="text-center border-t border-border pt-6 md:pt-10"
              >
                <p className="text-muted-foreground mb-2 text-xs md:text-sm">Por apenas:</p>
                
                <div className="mb-4 md:mb-6">
                  <p className="text-xl sm:text-2xl md:text-4xl font-bold text-foreground mb-1 md:mb-2">
                    10x de{" "}
                    <span className="text-primary">R$ 19,70</span>
                  </p>
                  <p className="text-muted-foreground text-sm md:text-base">
                    Ou <strong className="text-foreground text-base md:text-xl">R$ 197,00</strong> à vista no cartão ou PIX
                  </p>
                </div>

                {/* CTA Button */}
                <Button 
                  asChild
                  className="w-full md:w-auto btn-primary text-[13px] sm:text-sm md:text-lg px-4 sm:px-8 md:px-12 py-5 md:py-7 h-auto animate-pulse-glow mb-4 md:mb-6 leading-tight"
                >
                  <a href={checkoutUrl}>
                    <Zap className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 flex-shrink-0" />
                    SER UMA AUTORIDADE CLÍNICA
                  </a>
                </Button>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-3 md:gap-6 text-[11px] md:text-sm text-muted-foreground">
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                    <span>Pagamento seguro</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <Clock className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                    <span>Acesso imediato</span>
                  </div>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <CreditCard className="w-3.5 h-3.5 md:w-4 md:h-4 text-primary" />
                    <span>Parcelamento em até 12x</span>
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
            className="mt-6 md:mt-8 text-center"
          >
            <p className="text-muted-foreground flex items-center justify-center gap-1.5 md:gap-2 flex-wrap text-xs md:text-base">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              🛡️ <strong className="text-foreground">Garantia de 7 dias</strong> ou seu dinheiro de volta
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
