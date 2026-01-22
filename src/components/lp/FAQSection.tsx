import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Funciona para clínicas pequenas?",
    answer: "Absolutamente! O método foi desenvolvido pensando em dentistas de todos os tamanhos de clínica. Na verdade, clínicas menores costumam ter resultados ainda mais expressivos porque conseguem aplicar as estratégias de forma mais ágil e personalizada.",
  },
  {
    question: "Não tenho tempo para criar conteúdo. Esse curso é para mim?",
    answer: "O curso foi criado justamente para profissionais ocupados. Você vai aprender a criar conteúdo de qualidade em poucos minutos por dia. Além disso, os bônus incluem roteiros prontos e um calendário de 30 dias para facilitar ainda mais sua rotina.",
  },
  {
    question: "Preciso de equipamentos profissionais?",
    answer: "Não! Você pode começar apenas com seu smartphone. No curso, ensinamos como ter qualidade profissional com equipamentos simples que você já possui.",
  },
  {
    question: "E se eu tiver vergonha de aparecer em vídeo?",
    answer: "Esse é um dos principais focos do treinamento! O Módulo 3 (Apresentação) é inteiramente dedicado a superar o medo da câmera e desenvolver confiança para gravar. Milhares de alunos que tinham o mesmo receio hoje gravam com naturalidade.",
  },
  {
    question: "Por quanto tempo terei acesso ao curso?",
    answer: "O acesso é vitalício. Uma vez adquirido, você pode assistir quantas vezes quiser, para sempre. Além disso, todas as atualizações futuras do conteúdo estão incluídas.",
  },
  {
    question: "O curso é focado em qual rede social?",
    answer: "O método ensina princípios de comunicação que funcionam em qualquer plataforma: Instagram, TikTok, YouTube, LinkedIn. Você aprende a essência e adapta para onde seu público está.",
  },
  {
    question: "Já fiz outros cursos de marketing e não funcionou. Por que esse seria diferente?",
    answer: "O Comunicação: Dentista que Vende não é um curso genérico de marketing. Foi criado especificamente para dentistas, por quem já ajudou mais de 3.000 clínicas. O foco é na comunicação e posicionamento, que é a base de qualquer estratégia de sucesso.",
  },
  {
    question: "Como funciona a garantia?",
    answer: "Você tem 7 dias de garantia incondicional. Se por qualquer motivo sentir que o curso não é para você, basta enviar um e-mail solicitando o reembolso e devolvemos 100% do valor, sem questionamentos.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-lp">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Dúvidas frequentes
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
            Perguntas
            <span className="text-gradient"> Frequentes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tire suas dúvidas sobre o programa Comunicação: Dentista que Vende
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-2xl bg-card/50 px-6 overflow-hidden data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="hover:no-underline py-6 text-left">
                  <span className="font-semibold pr-4">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Ainda tem dúvidas?{" "}
            <a href="#" className="text-primary hover:underline font-semibold">
              Fale com nosso time no WhatsApp
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;