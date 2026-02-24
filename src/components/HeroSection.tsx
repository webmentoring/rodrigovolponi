import { motion } from "framer-motion";
import heroPortrait from "@/assets/rodrigo-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-background/70 to-background/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-0 py-24 lg:py-0 min-h-screen">
        {/* Portrait - left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center lg:justify-start"
        >
          <div className="relative w-72 h-[26rem] md:w-80 md:h-[30rem] lg:w-[420px] lg:h-[600px]">
            <img
              src={heroPortrait}
              alt="Rodrigo Volponi - Composer"
              className="w-full h-full object-cover object-top"
              style={{
                maskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 60%, transparent 100%)",
                WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 15%, black 70%, transparent 100%), linear-gradient(to right, transparent 0%, black 15%, black 60%, transparent 100%)",
                maskComposite: "intersect",
                WebkitMaskComposite: "destination-in",
              }}
            />
          </div>
        </motion.div>

        {/* Text - right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          className="text-center lg:text-left"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Composer
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight">
            <span className="text-gold-gradient">Rodrigo</span>
            <br />
            <span className="text-foreground">Volponi</span>
          </h1>
          <div className="h-px w-32 line-gold my-8 mx-auto lg:mx-0" />
          <p className="font-body text-muted-foreground text-lg max-w-md leading-relaxed mx-auto lg:mx-0">
            Crafting sonic landscapes that bring stories to life.
            Original music for film, TV & media.
          </p>
          <div className="mt-8 flex gap-6 justify-center lg:justify-start">
            <a
              href="#listen"
              className="font-body text-sm tracking-[0.2em] uppercase text-primary border border-primary px-6 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Listen
            </a>
            <a
              href="#contact"
              className="font-body text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
