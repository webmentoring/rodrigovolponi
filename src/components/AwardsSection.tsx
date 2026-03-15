import { motion } from "framer-motion";
import laurelHellChess from "@/assets/laurel-hell-chess.png";
import laurelIndieFilm from "@/assets/laurel-indie-film.png";

const awards = [
  {
    image: laurelHellChess,
    festival: "Hell Chess Festival",
    country: "Spain",
  },
  {
    image: laurelIndieFilm,
    festival: "International Indie Film & Screenplay Festival",
    country: "France",
  },
];

const AwardsSection = () => {
  return (
    <section className="py-20 lg:py-28">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="font-body text-sm tracking-[0.4em] uppercase text-primary mb-4">
            Recognition
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
            Nominated for{" "}
            <span className="italic text-primary">Best Score of the Year</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
            Recognised across international film festivals for excellence in original composition and cinematic scoring.
          </p>
          <div className="h-px w-20 line-gold mx-auto mb-14" />

          <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
            {awards.map((award, index) => (
              <motion.div
                key={award.festival}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex flex-col items-center gap-4"
              >
                <img
                  src={award.image}
                  alt={`Official Selection - ${award.festival}`}
                  className="w-56 md:w-64 h-auto invert brightness-75 sepia saturate-[300%] hue-rotate-[5deg]"
                  style={{
                    filter:
                      "invert(1) sepia(0.4) saturate(2) hue-rotate(5deg) brightness(0.85)",
                  }}
                />
                <span className="font-body text-sm text-muted-foreground tracking-wide">
                  {award.country}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
