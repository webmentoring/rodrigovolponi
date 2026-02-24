import { motion } from "framer-motion";

const ListenSection = () => {
  return (
    <section id="listen" className="py-24 lg:py-32 bg-card">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Listen
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium">
            My <span className="italic text-primary">Music</span>
          </h2>
          <div className="h-px w-20 line-gold mx-auto mt-8" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <iframe
            width="100%"
            height="450"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/rodrigo-volponi&color=%23c9a050&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false"
            className="rounded-sm"
            title="SoundCloud Player - Rodrigo Volponi"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ListenSection;
