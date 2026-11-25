import { ArrowDown, Instagram, Star } from "lucide-react";
import BookingWidget from "./BookingWidget.jsx";
import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT, INSTAGRAM_URL } from "../data.js";
import heroBackground from "./Роскошный маникюр на мягком полотенце.png";

export default function Hero() {
  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <div className="hero-image-wrap">
        <img
          className="hero-image"
          src={heroBackground}
          width="1100"
          height="619"
          sizes="100vw"
          decoding="async"
          loading="eager"
          fetchPriority="high"
          alt=""
          aria-hidden="true"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-location hero-reveal" style={{ "--hero-delay": "120ms" }}>
          <span className="hero-location-rule" />
          VARDASHEN MARKETPLACE · NORTH HOLLYWOOD
        </div>

        <h1 className="hero-reveal" id="hero-title" style={{ "--hero-delay": "200ms" }}>
          Nina's<br />
          <em>Nails.</em>
        </h1>

        <p className="hero-description hero-reveal" style={{ "--hero-delay": "280ms" }}>
          Manicures, pedicures and nail care in North Hollywood. A friendly neighborhood salon for your next fresh set.
        </p>

        <div className="hero-cta hero-reveal" style={{ "--hero-delay": "360ms" }}>
          <BookingWidget label="Call to book" className="hero-booking" />
          <a className="hero-instagram-link" href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer">
            <Instagram size={17} aria-hidden="true" />
            <span>See Instagram</span>
          </a>
        </div>

        <div className="hero-rating hero-reveal" style={{ "--hero-delay": "440ms" }}>
          <span className="hero-stars" aria-hidden="true"><Star size={15} fill="currentColor" strokeWidth={0} /></span>
          <strong>{GOOGLE_RATING}</strong>
          <span>GOOGLE RATING</span>
          <span className="hero-rating-dot">·</span>
          <span>{GOOGLE_REVIEW_COUNT} REVIEWS</span>
        </div>
      </div>

      <a className="hero-scroll-link" href="#about">
        <span>GET TO KNOW THE SALON</span>
        <ArrowDown size={15} strokeWidth={1.5} />
      </a>
      <div className="hero-corner-mark" aria-hidden="true">MANICURE · PEDICURE · NAIL ART</div>
    </section>
  );
}
