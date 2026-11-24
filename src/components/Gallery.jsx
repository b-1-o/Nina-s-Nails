import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { GALLERY } from "../data.js";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const activeItem = activeIndex === null ? null : GALLERY[activeIndex];

  useEffect(() => {
    if (activeIndex === null) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowRight") setActiveIndex((current) => (current + 1) % GALLERY.length);
      if (event.key === "ArrowLeft") setActiveIndex((current) => (current - 1 + GALLERY.length) % GALLERY.length);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex]);

  return (
    <section className="gallery section-pad" id="gallery">
      <div className="gallery-heading">
        <div className="eyebrow"><span className="eyebrow-line" />THE ZHUZHU LOOKBOOK</div>
        <h2 data-reveal="headline">Artistry in every<br /><em>little detail.</em></h2>
        <p data-reveal="fade">An evolving collection of shapes, finishes and thoughtful details. Find a little inspiration for your next visit.</p>
      </div>

      <div className="gallery-grid">
        {GALLERY.map((item, index) => (
          <button
            className={"gallery-card " + item.shape}
            type="button"
            key={item.title}
            onClick={() => setActiveIndex(index)}
            aria-label={"View " + item.title}
            data-cursor="interactive"
          >
            <span className="gallery-card-image">
              <img src={item.src} alt={item.alt} loading="lazy" />
            </span>
            <span className="gallery-card-index">0{index + 1}</span>
            <span className="gallery-card-overlay">
              <span className="gallery-card-title">{item.title}</span>
              <span className="gallery-card-action">VIEW ARTISTRY <ArrowUpRight size={14} /></span>
            </span>
          </button>
        ))}
      </div>

      <div className="gallery-footer">
        <span>THE ART OF A PERSONAL TOUCH</span>
        <span className="gallery-footer-line" />
        <span>CURATED BY ZHUZHU</span>
      </div>

      <AnimatePresence>
        {activeItem && (
          <motion.div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeItem.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="gallery-lightbox-panel"
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(event) => event.stopPropagation()}
            >
              <img src={activeItem.src} alt={activeItem.alt} />
              <div className="gallery-lightbox-caption">
                <div><span>THE ZHUZHU LOOKBOOK</span><strong>{activeItem.title}</strong></div>
                <span>0{activeIndex + 1} / 0{GALLERY.length}</span>
              </div>
              <button className="lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label="Close image"><X size={20} /></button>
              <button className="lightbox-prev" type="button" onClick={() => setActiveIndex((activeIndex - 1 + GALLERY.length) % GALLERY.length)} aria-label="Previous image"><ArrowLeft size={19} /></button>
              <button className="lightbox-next" type="button" onClick={() => setActiveIndex((activeIndex + 1) % GALLERY.length)} aria-label="Next image"><ArrowRight size={19} /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
