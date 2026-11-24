import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, ArrowUpRight, Star } from "lucide-react";
import BookingButton from "./BookingButton.jsx";

const reveal = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const heroRef = useRef(null);
  const x = useSpring(useMotionValue(0), { stiffness: 70, damping: 24, mass: 0.8 });
  const y = useSpring(useMotionValue(0), { stiffness: 70, damping: 24, mass: 0.8 });

  const handlePointerMove = (event) => {
    if (event.pointerType !== "mouse") return;
    const bounds = heroRef.current?.getBoundingClientRect();
    if (!bounds) return;
    const dx = (event.clientX - bounds.left) / bounds.width - 0.5;
    const dy = (event.clientY - bounds.top) / bounds.height - 0.5;
    x.set(dx * -18);
    y.set(dy * -12);
  };

  const resetParallax = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="hero" id="top" aria-labelledby="hero-title" ref={heroRef} onPointerMove={handlePointerMove} onPointerLeave={resetParallax}>
      <motion.div className="hero-image" style={{ x, y, scale: 1.075 }} aria-hidden="true" />
      <div className="hero-wash" aria-hidden="true" />
      <div className="hero-grain" aria-hidden="true" />
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15, delayChildren: 0.18 } } }}
      >
        <motion.div className="eyebrow hero-eyebrow" variants={reveal}><span className="eyebrow-line" />NORTH HOLLYWOOD · CALIFORNIA</motion.div>
        <motion.h1 id="hero-title" variants={reveal}>Where marble<br />meets <em>nature</em><br />& beauty.</motion.h1>
        <motion.p className="hero-copy" variants={reveal}>Bespoke nail artistry and thoughtful care, in a place made for you to feel at home.</motion.p>
        <motion.div className="hero-actions" variants={reveal}>
          <BookingButton label="Reserve your visit" />
          <a className="hero-text-link" href="#philosophy">Discover ZhuZhu <span><ArrowDown size={14} /></span></a>
        </motion.div>
        <motion.div className="hero-proof" variants={reveal}>
          <span className="proof-stars" aria-label="Five stars">{[1,2,3,4,5].map((star) => <Star key={star} size={12} fill="currentColor" strokeWidth={0} />)}</span>
          <span>5.0 RATED</span><span className="proof-divider" /><span>GUEST REVIEWS</span>
        </motion.div>
      </motion.div>
      <div className="hero-side-note" aria-hidden="true"><span>CARE IN EVERY DETAIL</span><span className="side-note-line" /><span>EST. WITH HEART</span></div>
      <a className="hero-scroll" href="#philosophy" aria-label="Scroll to our philosophy"><span>SCROLL TO EXPLORE</span><ArrowDown size={15} /></a>
      <div className="hero-caption" aria-hidden="true"><span>01</span><span className="hero-caption-line" /><span>THE ZHUZHU EXPERIENCE</span></div>
    </section>
  );
}
