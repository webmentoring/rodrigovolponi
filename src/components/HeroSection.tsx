import { motion } from "framer-motion";
import heroPortrait from "@/assets/rodrigo-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 py-24">
        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="w-64 h-80 md:w-80 md:h-[28rem] lg:w-96 lg:h-[32rem] flex-shrink-0"
        >
          <img
            src={heroPortrait}
            alt="Rodrigo Volponi - Compositor"
            className="w-full h-full object-cover object-top rounded-sm shadow-2xl shadow-gold/10"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Compositor
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight">
            <span className="text-gold-gradient">Rodrigo</span>
            <br />
            <span className="text-foreground">Volponi</span>
          </h1>
          <div className="h-px w-32 line-gold my-8 mx-auto lg:mx-0" />
          <p className="font-body text-muted-foreground text-lg max-w-md leading-relaxed">
            Criando paisagens sonoras que dão vida às histórias.
            Música original para cinema, TV e mídia.
          </p>
          <div className="mt-8 flex gap-6 justify-center lg:justify-start">
            <a
              href="#ouvir"
              className="font-body text-sm tracking-[0.2em] uppercase text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Ouvir
            </a>
            <a
              href="#contato"
              className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contato
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
