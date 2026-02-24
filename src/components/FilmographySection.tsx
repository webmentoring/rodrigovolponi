import { motion } from "framer-motion";

const credits = [
  { year: "2024", title: "Título do Projeto", role: "Compositor", type: "Longa-metragem" },
  { year: "2023", title: "Título do Projeto", role: "Compositor", type: "Curta-metragem" },
  { year: "2023", title: "Título do Projeto", role: "Compositor / Produtor Musical", type: "Série de TV" },
  { year: "2022", title: "Título do Projeto", role: "Compositor", type: "Documentário" },
  { year: "2022", title: "Título do Projeto", role: "Música Adicional", type: "Publicidade" },
  { year: "2021", title: "Título do Projeto", role: "Compositor", type: "Curta-metragem" },
];

const FilmographySection = () => {
  return (
    <section id="filmografia" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Trabalhos
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium">
            Filmografia <span className="italic text-primary">Selecionada</span>
          </h2>
          <div className="h-px w-20 line-gold mx-auto mt-8" />
        </motion.div>

        <div className="space-y-0">
          {credits.map((credit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group grid grid-cols-12 gap-4 items-center py-5 border-b border-border hover:bg-secondary/30 transition-colors duration-300 px-4"
            >
              <span className="col-span-2 md:col-span-1 font-body text-sm text-muted-foreground">
                {credit.year}
              </span>
              <span className="col-span-5 md:col-span-4 font-display text-lg md:text-xl font-medium group-hover:text-primary transition-colors">
                {credit.title}
              </span>
              <span className="col-span-3 md:col-span-4 font-body text-sm text-muted-foreground hidden md:block">
                {credit.role}
              </span>
              <span className="col-span-5 md:col-span-3 font-body text-xs tracking-[0.2em] uppercase text-primary/70 text-right">
                {credit.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FilmographySection;
