import { Button } from "@/components/ui/button";
import f5EducacaoLogo from "@/assets/f5-educacao-logo.svg";

const CHECKOUT_URL = "https://pay.hotmart.com/V103862397O?bid=1768402483101";

const FooterSection = () => {

  return (
    <footer className="section-padding bg-background border-t border-border">
      <div className="container-lp">
        {/* Final CTA */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 px-2">
            Pronto para se tornar uma
            <br />
            <span className="text-gradient">autoridade digital?</span>
          </h2>
          <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto px-4">
            Transforme sua comunicação e atraia os pacientes que reconhecem e valorizam 
            seu trabalho. Comece agora por apenas R$ 197.
          </p>
          <Button 
            asChild
            className="btn-primary text-sm md:text-lg px-8 md:px-12 py-5 md:py-6 h-auto"
          >
            <a href={CHECKOUT_URL}>QUERO COMEÇAR AGORA</a>
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col items-center gap-6">
            {/* Logo/Brand */}
            <div className="text-center">
              <img 
                src={f5EducacaoLogo} 
                alt="F5 Educação" 
                className="h-16 md:h-20 w-auto mx-auto mb-2"
              />
            </div>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-xs md:text-sm text-muted-foreground">
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
          <div className="text-center mt-6 md:mt-8 pt-6 md:pt-8 border-t border-border">
            <p className="text-xs md:text-sm text-muted-foreground">
              © {new Date().getFullYear()} F5 Educação. Todos os direitos reservados.
            </p>
            <p className="text-[10px] md:text-xs text-muted-foreground mt-2 px-4 max-w-2xl mx-auto">
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