import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";
import { GALLERY } from "../data.js";

export default function Gallery() {
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const nextIndex = Math.max(0, Math.min(GALLERY.length - 1, activeIndex + direction));
    const card = track.children[nextIndex];
    card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    setActiveIndex(nextIndex);
  };

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const cards = Array.from(track.children);
    const center = track.getBoundingClientRect().left + track.clientWidth / 2;
    let closest = 0;
    let closestDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.left + rect.width / 2;
      const distance = Math.abs(center - cardCenter);
      if (distance < closestDistance) {
        closest = index;
        closestDistance = distance;
      }
    });
    setActiveIndex(closest);
  };

  return (
    <section className="gallery-section section-space" id="gallery">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <span className="eyebrow"><i /> THE ZHUZHU LOOKBOOK</span>
        <h2>Artistry in every<br /><em>little detail.</em></h2>
        <p>A little inspiration for your next visit. Swipe to explore the details, shapes and finishes we love.</p>
      </motion.div>

      <div className="gallery-controls" aria-label="Lookbook controls">
        <span>0{activeIndex + 1} <i>/</i> 0{GALLERY.length}</span>
        <div>
          <button type="button" onClick={() => scrollToCard(-1)} aria-label="Previous look" disabled={activeIndex === 0}><ArrowLeft size={17} /></button>
          <button type="button" onClick={() => scrollToCard(1)} aria-label="Next look" disabled={activeIndex === GALLERY.length - 1}><ArrowRight size={17} /></button>
        </div>
      </div>

      <div className="gallery-track" ref={trackRef} onScroll={handleScroll} aria-label="Swipeable nail artistry gallery">
        {GALLERY.map((item, index) => (
          <motion.article
            className="gallery-card"
            key={item.title}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.06 }}
          >
            <div className="gallery-card-image">
              <img src={item.src} alt={item.alt} loading="lazy" />
              <span className="gallery-film-grain" aria-hidden="true" />
              <span className="gallery-card-number">0{index + 1}</span>
            </div>
            <div className="gallery-card-caption">
              <div><span>{item.category}</span><h3>{item.title}</h3></div>
              <span className="gallery-card-arrow"><ArrowUpRight size={18} /></span>
            </div>
          </motion.article>
        ))}
      </div>

      <div className="gallery-dots" aria-label="Gallery position">
        {GALLERY.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={activeIndex === index ? "is-active" : ""}
            onClick={() => {
              const card = trackRef.current?.children[index];
              card?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
              setActiveIndex(index);
            }}
            aria-label={"Show look " + (index + 1)}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}
