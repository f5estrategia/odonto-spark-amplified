import { Button } from "@/components/ui/button";

const FooterSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="section-padding bg-background border-t border-border">
      <div className="container-lp">
        {/* Final CTA */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para se tornar uma
            <br />
            <span className="text-gradient">autoridade digital?</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Transforme sua comunicação e atraia os pacientes que reconhecem e valorizam 
            seu trabalho. Comece agora por apenas R$ 97.
          </p>
          <Button 
            onClick={scrollToOffer}
            className="btn-primary text-lg px-12 py-6 h-auto"
          >
            QUERO COMEÇAR AGORA
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo/Brand */}
            <div className="text-center md:text-left">
              <h3 className="font-bold text-xl mb-1">
                <span className="text-primary">F5</span> Estratégia
              </h3>
              <p className="text-sm text-muted-foreground">
                Marketing digital para odontologia
              </p>
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                Termos de Uso
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} F5 Estratégia. Todos os direitos reservados.
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Este site não é afiliado ao Facebook ou qualquer entidade do Facebook.
              Depois que você sair do Facebook, a responsabilidade não é deles e sim do nosso site.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;