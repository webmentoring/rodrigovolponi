import { motion } from "framer-motion";
import { useEffect, useState, useCallback } from "react";
import laurelHellChess from "@/assets/laurel-hell-chess.png";
import laurelIndieFilm from "@/assets/laurel-indie-film.png";
import laurelHollywood from "@/assets/laurel-hollywood.png";
import laurelEthos from "@/assets/laurel-ethos.png";

const awards = [
  {
    image: laurelHellChess,
    festival: "Hell Chess Festival",
    country: "Spain"
  },
  {
    image: laurelIndieFilm,
    festival: "International Indie Film & Screenplay Festival",
    country: "France"
  },
  {
    image: laurelHollywood,
    festival: "Hollywood International Indie Film & Screenplay Awards",
    country: "USA"
  },
  {
    image: laurelEthos,
    festival: "ETHOS Film Awards",
    country: "USA"
  }
];

const AwardsSection = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % awards.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + awards.length) % awards.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, [next]);

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
            Nominated &amp; Awarded for{" "}
            <span className="italic text-primary">Best Song of the Year</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg mb-14 max-w-2xl mx-auto">
            Recognised across international film festivals for excellence in
            original composition and cinematic scoring.
          </p>
          <div className="h-px w-20 line-gold mx-auto mb-14" />

          {/* Carousel */}
          <div className="relative flex items-center justify-center">
            <button
              onClick={prev}
              className="absolute left-0 md:left-8 z-10 p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Previous award"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="overflow-hidden w-64 md:w-72 mx-auto">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col items-center gap-4"
              >
                <img
                  src={awards[current].image}
                  alt={`${awards[current].festival}`}
                  className="w-56 md:w-64 h-auto"
                  style={{
                    filter:
                      "invert(1) sepia(0.4) saturate(2) hue-rotate(5deg) brightness(0.85)"
                  }}
                />
                <span className="font-body text-sm text-muted-foreground tracking-wide">
                  {awards[current].country}
                </span>
              </motion.div>
            </div>

            <button
              onClick={next}
              className="absolute right-0 md:right-8 z-10 p-2 text-muted-foreground hover:text-primary transition-colors"
              aria-label="Next award"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {awards.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === current
                    ? "bg-primary w-6"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to award ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AwardsSection;
