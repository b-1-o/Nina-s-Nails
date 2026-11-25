import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Instagram, Star } from "lucide-react";
import BookingWidget from "./BookingWidget.jsx";
import heroBackground from "./Роскошный маникюр на мягком полотенце.png";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, INSTAGRAM_URL } from "../data.js";

export default function Hero() {
  const heroRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduceMotion ? "0%" : "12%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.03, reduceMotion ? 1.03 : 1.1]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduceMotion ? 0 : 28]);

  return (
    <section className="hero-section" id="top" ref={heroRef} aria-labelledby="hero-title">
      <motion.div className="hero-image-wrap" style={{ y: imageY }}>
        <motion.img
          className="hero-image"
          style={{ scale: imageScale }}
          src={heroBackground}
          decoding="async"
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
          VARDASHEN MARKETPLACE · NORTH HOLLYWOOD
        </motion.div>

        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
        >
          Nina's<br />
          <em>Nails.</em>
        </motion.h1>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.3 }}
        >
          Manicures, pedicures and nail care in North Hollywood. A friendly neighborhood salon for your next fresh set.
        </motion.p>

        <motion.div
          className="hero-cta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.4 }}
        >
          <BookingWidget label="Call to book" className="hero-booking" />
          <a className="hero-instagram-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Instagram size={17} aria-hidden="true" />
            <span>See Instagram</span>
          </a>
        </motion.div>

        <motion.div
          className="hero-rating"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <span className="hero-stars" aria-hidden="true"><Star size={15} fill="currentColor" strokeWidth={0} /></span>
          <strong>{GOOGLE_RATING}</strong>
          <span>GOOGLE RATING</span>
          <span className="hero-rating-dot">·</span>
          <span>{GOOGLE_REVIEW_COUNT} REVIEWS</span>
        </motion.div>
      </motion.div>

      <a className="hero-scroll-link" href="#about">
        <span>GET TO KNOW THE SALON</span>
        <ArrowDown size={15} strokeWidth={1.5} />
      </a>
      <div className="hero-corner-mark" aria-hidden="true">MANICURE · PEDICURE · NAIL ART</div>
    </section>
  );
}
