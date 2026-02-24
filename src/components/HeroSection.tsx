import { motion } from "framer-motion";
import heroPortrait from "@/assets/rodrigo-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      {/* Portrait blended into background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-[500px] h-[700px] md:w-[600px] md:h-[800px]">
          <img
            src={heroPortrait}
            alt="Rodrigo Volponi - Composer"
            className="w-full h-full object-cover object-top"
            style={{
              maskImage: "radial-gradient(ellipse 70% 65% at 50% 40%, black 30%, transparent 75%)",
              WebkitMaskImage: "radial-gradient(ellipse 70% 65% at 50% 40%, black 30%, transparent 75%)",
            }}
          />
        </div>
      </div>

      {/* Text overlay */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Composer
          </p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight">
            <span className="text-gold-gradient">Rodrigo</span>
            <br />
            <span className="text-foreground">Volponi</span>
          </h1>
          <div className="h-px w-32 line-gold my-8 mx-auto" />
          <p className="font-body text-muted-foreground text-lg max-w-md leading-relaxed mx-auto">
            Crafting sonic landscapes that bring stories to life.
            Original music for film, TV & media.
          </p>
          <div className="mt-8 flex gap-6 justify-center">
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
