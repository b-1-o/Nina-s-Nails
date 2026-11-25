import { useEffect, useState } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, Clock3, MapPin, Phone, Star } from "lucide-react";
import {
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  HOURS,
  LOCATION_NOTE,
  PHONE_LINK,
  SALON_ADDRESS,
  SALON_PHONE,
  SERVICES,
  TESTIMONIALS,
} from "../data.js";
import BookingWidget from "./BookingWidget.jsx";
import DirectionsChooser from "./DirectionsChooser.jsx";

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <div className={"reveal-on-scroll " + className} style={{ "--reveal-delay": delay + "s" }}>
      {children}
    </div>
  );
}

export function Philosophy() {
  return (
    <section className="about-section section-space marble-surface" id="about">
      <Reveal className="about-copy">
        <span className="eyebrow"><i /> A NEIGHBORHOOD NAIL SALON</span>
        <h2>A fresh set.<br /><em>A little time for you.</em></h2>
        <p className="about-lead">Welcome to Nina's Nails, at Vardashen Marketplace in North Hollywood.</p>
        <p>
          Stop by for manicure and pedicure services, talk through the look you have in mind,
          and ask the team which options are available for your visit.
        </p>
        <p>Appointments are recommended. Call ahead to check availability and current pricing.</p>
        <div className="about-signature">
          <span>Nina's Nails</span>
          <small>12912 SHERMAN WAY · NORTH HOLLYWOOD</small>
        </div>
      </Reveal>

      <Reveal className="about-visual" delay={0.08}>
        <img
          src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=76"
          srcSet="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=480&q=76 480w, https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=76 800w, https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=76 1200w"
          sizes="(min-width: 700px) 50vw, calc(100vw - 48px)"
          alt="A welcoming salon interior"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
        <div className="about-stamp">
          <MapPin size={21} strokeWidth={1.4} />
          <span>FIND NINA'S NAILS</span>
          <small>{LOCATION_NOTE}</small>
        </div>
        <span className="about-image-caption">12912 SHERMAN WAY · NORTH HOLLYWOOD</span>
      </Reveal>
    </section>
  );
}

export function Services() {
  const [active, setActive] = useState(0);

  return (
    <section className="services-section section-space" id="services">
      <Reveal className="section-heading">
        <span className="eyebrow"><i /> NAIL CARE MENU</span>
        <h2>Find your<br /><em>next favorite.</em></h2>
        <p>Explore the main service categories. Call the salon for current availability, service details and pricing.</p>
      </Reveal>

      <div className="services-list">
        {SERVICES.map((service, index) => {
          const isOpen = active === index;
          return (
            <article className={"service-item" + (isOpen ? " is-open" : "")} key={service.id}>
              <button
                className="service-trigger"
                type="button"
                onClick={() => setActive(isOpen ? -1 : index)}
                aria-expanded={isOpen}
                aria-controls={"service-panel-" + service.id}
              >
                <span className="service-number">{service.number}</span>
                <span className="service-name">{service.title}</span>
                <span className="service-toggle">
                  <ArrowDown size={19} strokeWidth={1.4} />
                </span>
              </button>

              {isOpen && (
                <div id={"service-panel-" + service.id} className="service-panel service-panel-enter">
                  <div className="service-panel-inner">
                    <p>{service.description}</p>
                    <div className="service-panel-bottom">
                      <span>{service.priceNote}</span>
                      <BookingWidget label="Call to ask" showIcon={false} className="service-booking-link" />
                    </div>
                    <img
                      src={service.image}
                      srcSet={service.imageSrcSet}
                      sizes="(min-width: 700px) 560px, calc(100vw - 64px)"
                      alt={service.alt}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
      <p className="services-note">Service availability and pricing can change. Please confirm details with the salon before your visit.</p>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const review = TESTIMONIALS[index];

  const previous = () => setIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIndex((current) => (current + 1) % TESTIMONIALS.length);

  return (
    <section className="reviews-section section-space" id="reviews">
      <Reveal className="reviews-heading">
        <div>
          <span className="eyebrow eyebrow-light"><i /> FROM THE COMMUNITY</span>
          <h2>Local love.<br /><em>Honest feedback.</em></h2>
        </div>
        <div className="reviews-rating">
          <Star size={19} fill="currentColor" strokeWidth={0} aria-hidden="true" />
          <strong>{GOOGLE_RATING}</strong>
          <small> / 5 · {GOOGLE_REVIEW_COUNT} REVIEWS</small>
        </div>
      </Reveal>

      <div className="review-slider">
        <div className="review-card review-card-enter" key={index}>
          <span className="review-quote-mark" aria-hidden="true">“</span>
          <blockquote>{review.quote}</blockquote>
          <div className="review-author">
            <span className="review-author-line" />
            <strong>{review.name}</strong>
            <small>{review.detail}</small>
          </div>
        </div>

        <div className="review-controls">
          <span>0{index + 1} <i>/</i> 0{TESTIMONIALS.length}</span>
          <div>
            <button type="button" onClick={previous} aria-label="Previous review summary"><ArrowLeft size={18} /></button>
            <button type="button" onClick={next} aria-label="Next review summary"><ArrowRight size={18} /></button>
          </div>
        </div>
      </div>

      <p className="reviews-footnote">Experiences are personal. Read the latest Google feedback and contact the salon with any questions before visiting.</p>
      <a className="reviews-link" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
        Read Google reviews <span aria-hidden="true">↗</span>
      </a>
    </section>
  );
}

function getSalonStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);

  const weekday = parts.find((part) => part.type === "weekday")?.value;
  const hour = Number(parts.find((part) => part.type === "hour")?.value || 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value || 0);
  const schedule = HOURS.find((item) => item.day.slice(0, 3) === weekday);

  if (!schedule || schedule.open === null) return { isOpen: false, label: "Closed today" };

  const [openHour, openMinute] = schedule.open.split(":").map(Number);
  const [closeHour, closeMinute] = schedule.close.split(":").map(Number);
  const currentTime = hour * 60 + minute;
  const openingTime = openHour * 60 + openMinute;
  const closingTime = closeHour * 60 + closeMinute;

  const formatTime = (minutes) => {
    const h = Math.floor(minutes / 60);
    const suffix = h >= 12 ? "PM" : "AM";
    const displayHour = h % 12 || 12;
    const mins = minutes % 60;
    return mins ? displayHour + ":" + String(mins).padStart(2, "0") + " " + suffix : displayHour + " " + suffix;
  };

  if (currentTime >= openingTime && currentTime < closingTime) return { isOpen: true, label: "Open now · Until " + formatTime(closingTime) };
  if (currentTime < openingTime) return { isOpen: false, label: "Opens today · " + formatTime(openingTime) };
  return { isOpen: false, label: "Closed for today" };
}

function BusinessStatus() {
  const [status, setStatus] = useState(() => getSalonStatus());

  useEffect(() => {
    const updateStatus = () => setStatus(getSalonStatus());
    const interval = window.setInterval(updateStatus, 60000);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <span className={"business-status" + (status.isOpen ? " is-open" : "")}>
      <i aria-hidden="true" />
      {status.label}
    </span>
  );
}

function OpeningHours() {
  const today = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    weekday: "long",
  }).format(new Date());

  const formatTime = (time) => {
    if (!time) return "Closed";
    const [hour, minute] = time.split(":").map(Number);
    const suffix = hour >= 12 ? "PM" : "AM";
    const displayHour = hour % 12 || 12;
    return minute ? displayHour + ":" + String(minute).padStart(2, "0") + " " + suffix : displayHour + " " + suffix;
  };

  return (
    <div className="hours-list" aria-label="Opening hours">
      {HOURS.map((item) => (
        <div className={"hours-row" + (item.day === today ? " is-today" : "")} key={item.day}>
          <span>{item.day}</span>
          <strong>{formatTime(item.open) + (item.close ? " – " + formatTime(item.close) : "")}</strong>
        </div>
      ))}
    </div>
  );
}

export function BookingSection() {
  return (
    <section className="booking-section section-space marble-surface" id="visit">
      <Reveal className="booking-heading">
        <span className="eyebrow"><i /> COME SAY HELLO</span>
        <h2>Your next visit<br /><em>starts here.</em></h2>
        <p>Find Nina's Nails inside Vardashen Marketplace. Call ahead to check availability and ask about current services.</p>
      </Reveal>

      <div className="booking-details">
        <div className="booking-detail">
          <span className="booking-detail-icon"><MapPin size={19} strokeWidth={1.5} /></span>
          <div>
            <small>FIND US · {LOCATION_NOTE.toUpperCase()}</small>
            <DirectionsChooser label={SALON_ADDRESS} className="booking-detail-address" showIcon={false} showArrow={true} />
          </div>
        </div>
        <div className="booking-detail">
          <span className="booking-detail-icon"><Phone size={19} strokeWidth={1.5} /></span>
          <div><small>CALL THE SALON</small><a href={PHONE_LINK}>{SALON_PHONE}</a></div>
        </div>
        <div className="booking-detail">
          <span className="booking-detail-icon"><Clock3 size={19} strokeWidth={1.5} /></span>
          <div><small>OPENING STATUS · PACIFIC TIME</small><BusinessStatus /></div>
        </div>
      </div>

      <div className="booking-hours">
        <div className="booking-hours-heading">
          <span className="eyebrow"><i /> OPENING HOURS</span>
          <BusinessStatus />
        </div>
        <OpeningHours />
      </div>

      <Reveal className="booking-cta-wrap">
        <DirectionsChooser label="Get directions" className="directions-link" />
        <p>Choose Apple Maps, Google Maps or another map app on Android.</p>
      </Reveal>
    </section>
  );
}
