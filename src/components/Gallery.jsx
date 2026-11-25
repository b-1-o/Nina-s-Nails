import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";
import { GALLERY } from "../data.js";

export default function Gallery() {
  const trackRef = useRef(null);
  const scrollFrameRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const scrollToCard = (nextIndex) => {
    const track = trackRef.current;
    if (!track) return;
    const safeIndex = Math.max(0, Math.min(GALLERY.length - 1, nextIndex));
    track.children[safeIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveIndex(safeIndex);
  };

  const handleScroll = () => {
    if (scrollFrameRef.current) return;

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = 0;
      const track = trackRef.current;
      if (!track) return;

      const center = track.getBoundingClientRect().left + track.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      for (let index = 0; index < track.children.length; index += 1) {
        const rect = track.children[index].getBoundingClientRect();
        const distance = Math.abs(center - (rect.left + rect.width / 2));
        if (distance < closestDistance) {
          closestIndex = index;
          closestDistance = distance;
        }
      }

      setActiveIndex((current) => current === closestIndex ? current : closestIndex);
    });
  };

  useEffect(() => () => {
    if (scrollFrameRef.current) window.cancelAnimationFrame(scrollFrameRef.current);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") {
        setLightboxIndex((current) => (current + 1) % GALLERY.length);
      }
      if (event.key === "ArrowLeft") {
        setLightboxIndex((current) => (current - 1 + GALLERY.length) % GALLERY.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxIndex]);

  const activeImage = lightboxIndex === null ? null : GALLERY[lightboxIndex];

  return (
    <section className="gallery-section section-space marble-surface" id="gallery">
      <motion.div
        className="section-heading"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
        <span className="eyebrow"><i /> THE ZHUZHU LOOKBOOK</span>
        <h2>Artistry in every<br /><em>little detail.</em></h2>
        <p>Swipe to explore the details, shapes and finishes. Tap any photograph to see it up close.</p>
      </motion.div>

      <div className="gallery-controls" aria-label="Lookbook controls">
        <span>0{activeIndex + 1} <i>/</i> 0{GALLERY.length}</span>
        <div>
          <motion.button type="button" whileTap={{ scale: 0.88 }} onClick={() => scrollToCard(activeIndex - 1)} aria-label="Previous look" disabled={activeIndex === 0}>
            <ArrowLeft size={17} />
          </motion.button>
          <motion.button type="button" whileTap={{ scale: 0.88 }} onClick={() => scrollToCard(activeIndex + 1)} aria-label="Next look" disabled={activeIndex === GALLERY.length - 1}>
            <ArrowRight size={17} />
          </motion.button>
        </div>
      </div>

      <div className="gallery-track" ref={trackRef} onScroll={handleScroll} aria-label="Swipeable nail artistry gallery">
        {GALLERY.map((item, index) => (
          <motion.article
            className={"gallery-card" + (activeIndex === index ? " is-active" : "")}
            key={item.title}
            layout
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.06 }}
          >
            <div className="gallery-card-image">
              <img
                src={item.src}
                srcSet={item.srcSet}
                sizes="(min-width: 1100px) 410px, (min-width: 700px) 36vw, 88vw"
                alt={item.alt}
                loading="lazy"
                decoding="async"
                fetchPriority="low"
              />
              <span className="gallery-film-grain" aria-hidden="true" />
              <span className="gallery-card-number">0{index + 1}</span>
              <motion.button
                className="gallery-card-open"
                type="button"
                onClick={() => setLightboxIndex(index)}
                whileTap={{ scale: 0.97 }}
                aria-label={"Open full-size photograph: " + item.title}
              >
                <span>VIEW DETAIL</span>
                <Expand size={16} strokeWidth={1.6} />
              </motion.button>
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
          <motion.button
            key={item.title}
            type="button"
            className={activeIndex === index ? "is-active" : ""}
            onClick={() => scrollToCard(index)}
            whileTap={{ scale: 0.85 }}
            aria-label={"Show look " + (index + 1)}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            className="lookbook-lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={activeImage.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              className="lookbook-lightbox-panel"
              initial={{ opacity: 0, scale: 0.96, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: 12 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.1}
              onDragEnd={(_, info) => {
                if (info.offset.x < -65) setLightboxIndex((current) => (current + 1) % GALLERY.length);
                if (info.offset.x > 65) setLightboxIndex((current) => (current - 1 + GALLERY.length) % GALLERY.length);
              }}
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={activeImage.src.replace(/w=\d+/, "w=1600").replace(/q=\d+/, "q=80")}
                alt={activeImage.alt}
                decoding="async"
                fetchPriority="high"
              />
              <div className="lookbook-lightbox-caption">
                <div><small>{activeImage.category}</small><strong>{activeImage.title}</strong></div>
                <span>0{lightboxIndex + 1} / 0{GALLERY.length}</span>
              </div>
              <motion.button className="lookbook-close" type="button" whileTap={{ scale: 0.88 }} onClick={() => setLightboxIndex(null)} aria-label="Close full-size image">
                <X size={20} />
              </motion.button>
              <motion.button className="lookbook-prev" type="button" whileTap={{ scale: 0.88 }} onClick={() => setLightboxIndex((lightboxIndex - 1 + GALLERY.length) % GALLERY.length)} aria-label="Previous photograph">
                <ArrowLeft size={19} />
              </motion.button>
              <motion.button className="lookbook-next" type="button" whileTap={{ scale: 0.88 }} onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY.length)} aria-label="Next photograph">
                <ArrowRight size={19} />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
