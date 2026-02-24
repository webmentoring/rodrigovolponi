import { motion } from "framer-motion";
import { Mail } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 lg:py-32">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Contact
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-medium mb-8">
            Let's <span className="italic text-primary">Work Together</span>
          </h2>
          <div className="h-px w-20 line-gold mx-auto mb-10" />
          <p className="font-body text-muted-foreground text-lg leading-relaxed mb-10">
            Interested in collaborating on a project? I'm always open to new creative opportunities in film, television, games, and other media.
          </p>

          <a
            href="mailto:studio@rodrigovolponi.com"
            className="inline-flex items-center gap-3 font-body text-sm tracking-[0.2em] uppercase text-primary border border-primary px-8 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            <Mail size={18} />
            Get in Touch
          </a>

          <div className="mt-16 flex justify-center gap-8">
            <a
              href="https://soundcloud.com/rodrigo-volponi"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              SoundCloud
            </a>
            <a
              href="http://instagram.com/volponirodrigo"
              target="_blank"
              rel="noopener noreferrer"
              className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
