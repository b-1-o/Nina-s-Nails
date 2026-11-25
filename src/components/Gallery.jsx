import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Expand, X } from "lucide-react";
import { GALLERY } from "../data.js";

export default function Gallery() {
  const trackRef = useRef(null);
  const scrollFrameRef = useRef(0);
  const touchStartRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const scrollToCard = (nextIndex) => {
    const track = trackRef.current;
    if (!track) return;
    const safeIndex = Math.max(0, Math.min(GALLERY.length - 1, nextIndex));
    track.children[safeIndex]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
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
      if (event.key === "ArrowRight") setLightboxIndex((current) => (current + 1) % GALLERY.length);
      if (event.key === "ArrowLeft") setLightboxIndex((current) => (current - 1 + GALLERY.length) % GALLERY.length);
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
  const handleTouchEnd = (event) => {
    if (touchStartRef.current === null) return;
    const delta = event.changedTouches[0].clientX - touchStartRef.current;
    touchStartRef.current = null;
    if (delta < -65) setLightboxIndex((current) => (current + 1) % GALLERY.length);
    if (delta > 65) setLightboxIndex((current) => (current - 1 + GALLERY.length) % GALLERY.length);
  };

  return (
    <section className="gallery-section section-space marble-surface" id="gallery">
      <div className="section-heading reveal-on-scroll">
        <span className="eyebrow"><i /> NAIL STYLE INSPIRATION</span>
        <h2>A little inspiration.<br /><em>Your own style.</em></h2>
        <p>Browse nail looks for inspiration. Tap a photo to view it up close, then call the salon to ask what styles are available.</p>
      </div>

      <div className="gallery-controls" aria-label="Lookbook controls">
        <span>0{activeIndex + 1} <i>/</i> 0{GALLERY.length}</span>
        <div>
          <button type="button" onClick={() => scrollToCard(activeIndex - 1)} aria-label="Previous look" disabled={activeIndex === 0}>
            <ArrowLeft size={17} />
          </button>
          <button type="button" onClick={() => scrollToCard(activeIndex + 1)} aria-label="Next look" disabled={activeIndex === GALLERY.length - 1}>
            <ArrowRight size={17} />
          </button>
        </div>
      </div>

      <div className="gallery-track" ref={trackRef} onScroll={handleScroll} aria-label="Swipeable nail inspiration gallery">
        {GALLERY.map((item, index) => (
          <article className={"gallery-card" + (activeIndex === index ? " is-active" : "")} key={item.title}>
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
              <span className="gallery-card-number">0{index + 1}</span>
              <button
                className="gallery-card-open"
                type="button"
                onClick={() => setLightboxIndex(index)}
                aria-label={"Open inspiration photograph: " + item.title}
              >
                <span>VIEW DETAIL</span>
                <Expand size={16} strokeWidth={1.6} />
              </button>
            </div>
            <div className="gallery-card-caption">
              <div><span>{item.category}</span><h3>{item.title}</h3></div>
              <span className="gallery-card-arrow"><ArrowUpRight size={18} /></span>
            </div>
          </article>
        ))}
      </div>

      <p className="gallery-disclaimer">Images are style inspiration, not a verified portfolio of Nina's Nails work.</p>
      <div className="gallery-dots" aria-label="Gallery position">
        {GALLERY.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className={activeIndex === index ? "is-active" : ""}
            onClick={() => scrollToCard(index)}
            aria-label={"Show look " + (index + 1)}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>

      {activeImage && (
        <div
          className="lookbook-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activeImage.title}
          onClick={() => setLightboxIndex(null)}
        >
          <div
            className="lookbook-lightbox-panel"
            onTouchStart={(event) => { touchStartRef.current = event.touches[0].clientX; }}
            onTouchEnd={handleTouchEnd}
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={activeImage.src.replace(/w=\d+/, "w=1280").replace(/q=\d+/, "q=76")}
              alt={activeImage.alt}
              decoding="async"
            />
            <div className="lookbook-lightbox-caption">
              <div><small>{activeImage.category}</small><strong>{activeImage.title}</strong></div>
              <span>0{lightboxIndex + 1} / 0{GALLERY.length}</span>
            </div>
            <button className="lookbook-close" type="button" onClick={() => setLightboxIndex(null)} aria-label="Close full-size image">
              <X size={20} />
            </button>
            <button className="lookbook-prev" type="button" onClick={() => setLightboxIndex((lightboxIndex - 1 + GALLERY.length) % GALLERY.length)} aria-label="Previous photograph">
              <ArrowLeft size={19} />
            </button>
            <button className="lookbook-next" type="button" onClick={() => setLightboxIndex((lightboxIndex + 1) % GALLERY.length)} aria-label="Next photograph">
              <ArrowRight size={19} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
