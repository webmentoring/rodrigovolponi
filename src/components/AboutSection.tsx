import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Sobre
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-8">
            A Arte de Contar Histórias <br className="hidden md:block" />
            <span className="italic text-primary">Através da Música</span>
          </h2>
          <div className="h-px w-20 line-gold mx-auto mb-10" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-6">
            Rodrigo Volponi é um compositor brasileiro especializado em música para cinema, televisão e mídia. Com uma abordagem que combina orquestração clássica com elementos eletrônicos contemporâneos, Rodrigo cria trilhas sonoras que amplificam a narrativa visual e conectam o público emocionalmente com cada cena.
          </p>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Sua formação musical diversificada e paixão por storytelling o levaram a colaborar com diretores e produtores em projetos que vão desde curtas-metragens independentes até produções de maior escala. Cada projeto é uma oportunidade de explorar novas sonoridades e criar uma identidade musical única.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
