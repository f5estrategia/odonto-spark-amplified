import { Button } from "@/components/ui/button";
import { Play, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container-lp text-center py-12">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-primary font-medium">
            Método exclusivo para dentistas
          </span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Você é um excelente dentista.
          <br />
          <span className="text-gradient">Mas ninguém sabe disso.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Descubra como transformar sua expertise clínica em{" "}
          <span className="text-foreground font-semibold">autoridade digital</span> e atrair os pacientes 
          que valorizam (e pagam) pelo seu trabalho.
        </p>

        {/* VSL Placeholder */}
        <div className="relative max-w-4xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <div className="aspect-video bg-card rounded-2xl border border-border overflow-hidden glow-orange">
            <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-secondary">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center cursor-pointer hover:bg-primary/30 transition-all hover:scale-110">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </div>
                <p className="text-muted-foreground text-sm">
                  Assista ao vídeo e descubra o método
                </p>
              </div>
            </div>
            {/* Video placeholder - substituir por embed real */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center gap-4">
              <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
                <div className="w-0 h-full bg-primary rounded-full" />
              </div>
              <span className="text-xs text-muted-foreground">12:34</span>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            onClick={scrollToOffer}
            className="btn-primary text-lg px-12 py-6 h-auto animate-pulse-glow"
          >
            QUERO ME TORNAR UMA AUTORIDADE
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            💳 Até 12x no cartão • Acesso imediato
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <ChevronDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;