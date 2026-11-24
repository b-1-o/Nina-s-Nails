import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Star } from "lucide-react";
import { BOOKING_URL } from "../data.js";

const reveal = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } } };

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero-image" aria-hidden="true" /><div className="hero-wash" aria-hidden="true" /><div className="hero-grain" aria-hidden="true" />
      <motion.div className="hero-content" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.14, delayChildren: 0.12 } } }}>
        <motion.div className="eyebrow hero-eyebrow" variants={reveal}><span className="eyebrow-line" />NORTH HOLLYWOOD · CALIFORNIA</motion.div>
        <motion.h1 id="hero-title" variants={reveal}>Where marble<br />meets <em>nature</em><br />& beauty.</motion.h1>
        <motion.p className="hero-copy" variants={reveal}>Bespoke nail artistry and thoughtful care, in a place made for you to feel at home.</motion.p>
        <motion.div className="hero-actions" variants={reveal}>
          <a className="button-gold" href={BOOKING_URL} target="_blank" rel="noreferrer">Book your experience <ArrowUpRight size={16} /></a>
          <a className="hero-text-link" href="#philosophy">Discover ZhuZhu <span>↓</span></a>
        </motion.div>
        <motion.div className="hero-proof" variants={reveal}>
          <span className="proof-stars" aria-label="Five stars">{[1,2,3,4,5].map((star) => <Star key={star} size={12} fill="currentColor" strokeWidth={0} />)}</span>
          <span>5.0 RATED</span><span className="proof-divider" /><span>82 GUEST REVIEWS</span>
        </motion.div>
      </motion.div>
      <div className="hero-side-note" aria-hidden="true"><span>CARE IN EVERY DETAIL</span><span className="side-note-line" /><span>EST. WITH HEART</span></div>
      <a className="hero-scroll" href="#philosophy" aria-label="Scroll to our philosophy"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
    </section>
  );
}
