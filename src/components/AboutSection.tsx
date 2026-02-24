import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center">

          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            About
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-8">
            The Art of Storytelling <br className="hidden md:block" />
            <span className="italic text-primary">Through Music</span>
          </h2>
          <div className="h-px w-20 line-gold mx-auto mb-10" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Rodrigo Volponi is a composer of orchestral and cinematic music focused on narratives that explore tension, atmosphere, and meaning. His work is rooted in classical structure and harmonic rigor inherited from the Baroque tradition, incorporating voice leading, sequential progressions, and gradual density building to create a sense of dramatic inevitability.


          </p>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">His compositions often engage with themes of boundary and transcendence, translating into sound the experience of crossing into the unknown. The result is a writing style that combines structural discipline, harmonic expansion, and emotional intensity, designed to sustain moments of contemplation, conflict, or cinematic climax.

          </p>
        </motion.div>
      </div>
    </section>);};

export default AboutSection;