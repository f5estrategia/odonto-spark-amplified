import { Button } from "@/components/ui/button";
import { ChevronDown, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const HeroSection = () => {
  const scrollToOffer = () => {
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Top navigation bar */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center font-bold text-primary-foreground">
            F5
          </div>
          <span className="text-sm font-medium text-muted-foreground hidden sm:block">estratégia</span>
        </div>
        <span className="text-sm text-muted-foreground">Autoridade Clínica</span>
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
      
      <div className="relative z-10 container-lp flex-1 flex flex-col items-center justify-center text-center py-12">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-8"
        >
          <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <span className="text-sm text-primary font-medium">
            Método exclusivo para dentistas
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="text-primary font-semibold text-sm md:text-base uppercase tracking-wider mb-4 block">
            Assista ao vídeo abaixo
          </span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            A comunicação é a única arma
            <br />
            <span className="text-gradient">que você tem para jogar esse jogo</span>
          </h1>
        </motion.div>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto mb-8"
        >
          Descubra como uma pessoa que falava "poblema" virou apresentador de TV — e como{" "}
          <span className="text-foreground font-semibold">você pode dominar essa habilidade</span> e 
          se tornar uma autoridade no cenário digital odontológico.
        </motion.p>

        {/* VSL Player - VTurb embed */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative w-full max-w-4xl mx-auto mb-8"
        >
          <div className="aspect-video rounded-2xl border-2 border-primary/30 overflow-hidden glow-orange bg-card">
            {/* VTurb Player Embed */}
            <div 
              id="vid_6931672e8f0253bca66460a0" 
              style={{ position: 'relative', width: '100%', padding: '56.25% 0 0' }}
            >
              <img 
                id="thumb_6931672e8f0253bca66460a0" 
                src="https://images.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/6931672e8f0253bca66460a0/thumbnail.jpg" 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                alt="thumbnail"
              />
              <div 
                id="backdrop_6931672e8f0253bca66460a0" 
                style={{ 
                  WebkitBackdropFilter: 'blur(5px)', 
                  backdropFilter: 'blur(5px)', 
                  position: 'absolute', 
                  top: 0, 
                  height: '100%', 
                  width: '100%' 
                }}
              />
            </div>
            <script 
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    var s = document.createElement('script');
                    s.src = 'https://scripts.converteai.net/de1f52b9-182e-4159-9b25-8c5e55b7fd12/players/6931672e8f0253bca66460a0/player.js';
                    s.async = true;
                    document.head.appendChild(s);
                  })();
                `
              }}
            />
          </div>
          
          {/* Progress bar visual */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-muted">
            <div className="h-full bg-primary" style={{ width: '0%' }} />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-full max-w-md"
        >
          <Button 
            onClick={scrollToOffer}
            className="w-full btn-primary text-base md:text-lg px-8 py-6 h-auto animate-pulse-glow"
          >
            QUERO ME TORNAR UMA AUTORIDADE →
          </Button>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 text-xs md:text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Método validado em +3.000 clínicas
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-primary" />
              Garantia de 7 dias
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
