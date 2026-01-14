import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import bannerDesktop from "@/assets/banner-desktop.jpg";
import bannerMobile from "@/assets/banner-mobile.jpg";
import logotipoCurso from "@/assets/logotipo-curso.svg";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Top navigation bar */}
      <nav className="relative z-20 flex items-center justify-center px-4 py-4 md:px-6">
        <img 
          src={logotipoCurso} 
          alt="Autoridade Clínica - Dominando a Comunicação Digital" 
          className="h-8 md:h-10 w-auto"
        />
      </nav>

      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      
      {/* Glow effects */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      
      <div className="relative z-10 container-lp flex-1 flex flex-col items-center justify-center text-center py-8 md:py-12">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-primary/10 border border-primary/30 mb-6 md:mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-xs md:text-sm text-primary font-medium">
            Método exclusivo para dentistas
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 leading-tight px-2">
            Você é um excelente dentista.
            <br />
            <span className="text-gradient">Mas ninguém sabe disso.</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 px-2"
        >
          Descubra como transformar sua expertise clínica em{" "}
          <span className="text-foreground font-semibold">autoridade digital</span> e atrair os 
          pacientes que valorizam (e pagam) pelo seu trabalho.
        </motion.p>

        {/* Course Banner */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-full max-w-4xl mx-auto mb-6 md:mb-8 px-2"
        >
          {/* Desktop Banner */}
          <img 
            src={bannerDesktop}
            alt="Autoridade Clínica - Dominando a Comunicação Digital"
            className="hidden md:block w-full rounded-xl md:rounded-2xl border-2 border-primary/30 glow-orange"
          />
          {/* Mobile Banner */}
          <img 
            src={bannerMobile}
            alt="Autoridade Clínica - Dominando a Comunicação Digital"
            className="block md:hidden w-full max-w-xs sm:max-w-sm mx-auto rounded-xl border-2 border-primary/30 glow-orange"
          />
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-md px-4"
        >
          <Button 
            onClick={scrollToOffer}
            className="w-full btn-primary text-sm sm:text-base md:text-lg px-6 py-5 md:py-6 h-auto animate-pulse-glow"
          >
            QUERO ME TORNAR UMA AUTORIDADE →
          </Button>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-2 sm:gap-4 mt-4 md:mt-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span>Método validado em +3.000 clínicas</span>
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
              <span>Garantia de 7 dias</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
