import { ShieldCheck } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <section className="section-padding">
      <div className="container-lp">
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-card to-secondary border border-border">
            {/* Shield icon */}
            <div className="absolute -top-8 left-1/2 -translate-x-1/2">
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center shadow-lg shadow-primary/30">
                <ShieldCheck className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>

            <div className="text-center pt-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Garantia Incondicional de{" "}
                <span className="text-primary">7 Dias</span>
              </h2>

              <p className="text-muted-foreground leading-relaxed mb-6">
                Estamos tão confiantes no poder do método <strong className="text-foreground">Comunicação: Dentista que Vende</strong> que 
                oferecemos uma garantia incondicional. Se nos primeiros 7 dias você 
                não sentir que este treinamento vai transformar sua comunicação, 
                basta solicitar o reembolso e devolvemos <strong className="text-foreground">100% do seu investimento</strong>.
              </p>

              <p className="text-foreground font-semibold">
                Sem perguntas. Sem burocracia. Risco zero.
              </p>

              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">7</span>
                  <p className="text-xs text-muted-foreground">DIAS</p>
                </div>
                <div className="text-muted-foreground">=</div>
                <div className="text-center">
                  <span className="text-4xl font-bold text-primary">100%</span>
                  <p className="text-xs text-muted-foreground">DE VOLTA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;