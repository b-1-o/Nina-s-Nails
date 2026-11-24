import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Sparkles, Star } from "lucide-react";
import BookingWidget from "./BookingWidget.jsx";

export default function Hero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "14%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, reduceMotion ? 1.04 : 1.13]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 38]);

  return (
    <section className="hero-section" id="top" ref={heroRef} aria-labelledby="hero-title">
      <motion.div className="hero-image-wrap" style={{ y: imageY }}>
        <motion.img
          className="hero-image"
          style={{ scale: imageScale }}
          src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1800&q=88"
          alt=""
          fetchPriority="high"
          aria-hidden="true"
        />
      </motion.div>
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />

      <motion.div className="hero-content" style={{ y: copyY }}>
        <motion.div
          className="hero-location"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.12 }}
        >
          <span className="hero-location-rule" />
          NORTH HOLLYWOOD · CALIFORNIA
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
          Where Marble<br />
          Meets <em>Nature</em><br />
          <span>& Beauty.</span>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
        >
          Bespoke nail artistry & premium care in North Hollywood. A 5.0-star guest experience.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
        >
          <BookingWidget label="Book your visit" className="hero-booking" />
        </motion.div>

        <motion.div
          className="hero-rating"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <span className="hero-stars" aria-label="Five stars">
            {[1, 2, 3, 4, 5].map((star) => <Star key={star} size={12} fill="currentColor" strokeWidth={0} />)}
          </span>
          <span>5.0 GUEST RATING</span>
          <span className="hero-rating-dot">·</span>
          <span>CARE IN EVERY DETAIL</span>
        </motion.div>
      </motion.div>

      <a className="hero-scroll-link" href="#about">
        <span>DISCOVER ZHUZHU</span>
        <ArrowDown size={15} strokeWidth={1.5} />
      </a>
      <div className="hero-corner-mark" aria-hidden="true"><Sparkles size={17} strokeWidth={1.2} /> EST. WITH HEART</div>
    </section>
  );
}
