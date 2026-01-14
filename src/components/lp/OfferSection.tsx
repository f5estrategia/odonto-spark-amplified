import { Button } from "@/components/ui/button";
import { CheckCircle2, Gift, Shield, Clock, CreditCard } from "lucide-react";

const included = [
  "Acesso completo aos 5 módulos do programa",
  "Mais de 2h de conteúdo objetivo e aplicável",
  "Certificado de conclusão digital",
  "Acesso vitalício ao conteúdo",
  "Atualizações futuras incluídas",
  "Grupo exclusivo de alunos no WhatsApp",
];

const bonuses = [
  {
    title: "Roteiros Prontos",
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
  return (
    <section id="oferta" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container-lp relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Oferta especial
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Tudo isso por um investimento
            <br className="hidden md:block" />
            <span className="text-gradient">que cabe no seu bolso</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main offer card */}
          <div className="rounded-3xl bg-card border border-primary/30 overflow-hidden glow-orange">
            {/* Header */}
            <div className="bg-gradient-to-r from-primary to-orange-500 p-6 md:p-8 text-center">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-2">
                Autoridade Clínica
              </h3>
              <p className="text-primary-foreground/90">
                Dominando a comunicação digital
              </p>
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
                    <div key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bonuses */}
              <div className="mb-10">
                <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
                  <Gift className="w-5 h-5 text-primary" />
                  Bônus exclusivos:
                </h4>
                <div className="space-y-3">
                  {bonuses.map((bonus, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-4 rounded-xl bg-secondary/50 border border-border"
                    >
                      <div>
                        <p className="font-semibold text-sm">{bonus.title}</p>
                        <p className="text-xs text-muted-foreground">{bonus.description}</p>
                      </div>
                      <span className="text-primary font-bold whitespace-nowrap ml-4">
                        {bonus.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing */}
              <div className="text-center border-t border-border pt-10">
                <p className="text-muted-foreground mb-2">
                  <span className="line-through">De R$ 497,00</span>
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  Por apenas:
                </p>
                <div className="mb-6">
                  <span className="text-5xl md:text-6xl font-bold text-gradient">
                    R$ 97
                  </span>
                  <span className="text-muted-foreground">,00</span>
                </div>
                <p className="text-muted-foreground mb-8 flex items-center justify-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  ou 12x de R$ 9,70 no cartão
                </p>

                {/* CTA Button */}
                <Button className="btn-primary text-lg px-12 py-6 h-auto w-full md:w-auto animate-pulse-glow">
                  QUERO COMEÇAR AGORA
                </Button>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-primary" />
                    Compra segura
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    Acesso imediato
                  </div>
                  <div className="flex items-center gap-2">
                    <Gift className="w-4 h-4 text-primary" />
                    7 dias de garantia
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;