import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Clock3, MapPin, Phone, ShieldCheck, Star } from "lucide-react";
import { HOURS, MAPS_URL, MAP_EMBED_URL, PHONE_LINK, SALON_PHONE, SERVICES, TESTIMONIALS } from "../data.js";
import BookingButton from "./BookingButton.jsx";

function SectionIntro({ label, title, children }) {
  return (
    <div className="section-intro">
      <div className="eyebrow"><span className="eyebrow-line" />{label}</div>
      <h2 data-reveal="headline">{title}</h2>
      {children && <p data-reveal="fade">{children}</p>}
    </div>
  );
}

export function Philosophy() {
  return (
    <section className="philosophy section-pad" id="philosophy">
      <div className="philosophy-copy">
        <div className="eyebrow" data-reveal="fade"><span className="eyebrow-line" />A PLACE TO EXHALE</div>
        <h2 data-reveal="headline">Beauty is a ritual.<br /><em>Care is our craft.</em></h2>
        <p className="philosophy-lead" data-reveal="fade">Welcome to ZhuZhu — where considered beauty meets the warmth of being looked after.</p>
        <p data-reveal="fade">Led by Lika and Avo, we have created a welcoming sanctuary built around personal attention, thoughtful conversation and the little details that make a visit feel special. Come as you are; leave feeling cared for.</p>
        <p data-reveal="fade">Enjoy a coffee, share an idea or simply take a moment for yourself. We will take care of the rest.</p>
        <div className="founders-signature" data-reveal="fade"><span className="signature-script">Lika & Avo</span><span className="signature-caption">WITH WARMTH, ALWAYS</span></div>
        <a className="inline-link" href="#visit" data-cursor="interactive">Come say hello <ArrowUpRight size={15} /></a>
      </div>
      <div className="philosophy-visual" data-reveal="image">
        <div className="philosophy-photo-wrap">
          <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=88" alt="A serene spa interior with natural textures and soft light" loading="lazy" />
        </div>
        <div className="philosophy-photo-caption"><span>THE ZHUZHU FEELING</span><span>01 / 05</span></div>
        <div className="sterile-seal" data-reveal="fade"><span className="seal-icon"><ShieldCheck size={20} strokeWidth={1.25} /></span><span className="seal-title">CARE YOU CAN TRUST</span><span className="seal-copy">Tools sterilized in a<br />medical-grade autoclave</span></div>
      </div>
    </section>
  );
}

export function Services() {
  const [active, setActive] = useState(0);
  const selected = SERVICES[active];
  return (
    <section className="services section-pad" id="services">
      <div className="services-heading">
        <SectionIntro label="THE SERVICE EDIT" title={<>A little luxury.<br /><em>A lasting feeling.</em></>}>
          Thoughtful treatments, tailored to your style. Every appointment begins with listening.
        </SectionIntro>
        <p className="services-heading-note" data-reveal="fade">An individual approach, a considered finish, and time set aside just for you.</p>
      </div>
      <div className="services-layout">
        <div className="services-list" role="list" aria-label="Featured services">
          {SERVICES.map((service, index) => {
            const isActive = active === index;
            return (
              <div className={"service-item " + (isActive ? "is-active" : "")} key={service.id} role="listitem" data-reveal="fade">
                <button className="service-trigger" type="button" aria-expanded={isActive} aria-controls={"service-panel-" + service.id} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)} data-cursor="interactive">
                  <span className="service-number">{service.number}</span><span className="service-title">{service.title}</span><span className="service-chevron"><ArrowDownRight size={19} strokeWidth={1.3} /></span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && <motion.div id={"service-panel-" + service.id} className="service-panel" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}>
                    <p>{service.description}</p>
                    <div className="service-meta"><span>{service.note}</span><span className="service-availability">PERSONALIZED FOR YOU</span></div>
                  </motion.div>}
                </AnimatePresence>
              </div>
            );
          })}
          <p className="services-footnote">Looking for something different? Call us and we will be happy to help.</p>
        </div>
        <div className="service-image-stage" data-reveal="image">
          <AnimatePresence mode="wait">
            <motion.div className="service-image" key={selected.id} initial={{ opacity: 0, scale: 1.055 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.975 }} transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}>
              <img src={selected.image} alt={selected.alt} loading="lazy" /><div className="service-image-overlay" /><span className="service-image-label">{selected.note}</span>
            </motion.div>
          </AnimatePresence>
          <div className="service-image-bottom"><span>CRAFTED WITH INTENTION</span><span>0{active + 1} / 04</span></div>
        </div>
      </div>
      <div className="section-rule" />
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const review = TESTIMONIALS[index];
  const next = () => setIndex((current) => (current + 1) % TESTIMONIALS.length);
  const previous = () => setIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % TESTIMONIALS.length), 8500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="testimonials section-pad" id="testimonials">
      <div className="testimonial-topline">
        <div className="eyebrow"><span className="eyebrow-line" />KIND WORDS</div>
        <div className="testimonial-rating"><span className="rating-stars" aria-label="Five stars">{[1,2,3,4,5].map((star) => <Star key={star} size={13} fill="currentColor" strokeWidth={0} />)}</span><strong>5.0</strong><span>GUEST RATING</span></div>
      </div>
      <div className="testimonial-card" data-reveal="fade">
        <span className="quote-mark" aria-hidden="true">“</span>
        <AnimatePresence mode="wait">
          <motion.div className="testimonial-content" key={review.name} initial={{ opacity: 0, y: 22, filter: "blur(8px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0px)" }} exit={{ opacity: 0, y: -18, filter: "blur(6px)" }} transition={{ duration: 0.55 }}>
            <blockquote>{review.quote}</blockquote>
            <div className="testimonial-author"><span className="author-rule" /><span className="author-name">{review.name}</span><span className="author-detail">{review.detail}</span></div>
          </motion.div>
        </AnimatePresence>
        <div className="testimonial-controls"><span className="testimonial-count">0{index + 1} <i>/</i> 0{TESTIMONIALS.length}</span><button type="button" onClick={previous} aria-label="Previous review" data-cursor="interactive"><ArrowLeft size={18} /></button><button type="button" onClick={next} aria-label="Next review" data-cursor="interactive"><ArrowRight size={18} /></button></div>
      </div>
      <p className="testimonial-footnote">A heartfelt thank you to everyone who has made ZhuZhu part of their routine.</p>
    </section>
  );
}

function getSalonStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: "America/Los_Angeles", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" }).formatToParts(now);
  const weekday = parts.find((part) => part.type === "weekday")?.value;
  const hour = Number(parts.find((part) => part.type === "hour")?.value || 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value || 0);
  const dayIndex = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(weekday);
  const schedule = HOURS[dayIndex === 0 ? 6 : dayIndex - 1];
  const currentMinutes = hour * 60 + minute;
  if (!schedule || schedule.open === null) return { open: false, label: "Closed today" };
  const [openHour, openMinute] = schedule.open.split(":").map(Number);
  const [closeHour, closeMinute] = schedule.close.split(":").map(Number);
  const opening = openHour * 60 + openMinute;
  const closing = closeHour * 60 + closeMinute;
  const formatTime = (value) => {
    const h = Math.floor(value / 60);
    const suffix = h >= 12 ? "PM" : "AM";
    const display = h % 12 || 12;
    const mins = value % 60;
    return mins ? display + ":" + String(mins).padStart(2, "0") + " " + suffix : display + " " + suffix;
  };
  if (currentMinutes >= opening && currentMinutes < closing) return { open: true, label: "Open until " + formatTime(closing) };
  if (currentMinutes < opening) return { open: false, label: "Opens at " + formatTime(opening) };
  return { open: false, label: "Closed for today" };
}

export function Booking() {
  const [status, setStatus] = useState(() => getSalonStatus());
  useEffect(() => {
    const refresh = () => setStatus(getSalonStatus());
    const id = window.setInterval(refresh, 60000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="booking section-pad" id="visit">
      <div className="booking-heading">
        <SectionIntro label="YOUR NEXT MOMENT" title={<>Make time for<br /><em>something lovely.</em></>}>
          An appointment should feel like something to look forward to. We would love to welcome you to ZhuZhu.
        </SectionIntro>
        <div className="visit-details" data-reveal="fade">
          <div className="visit-detail"><span className="visit-icon"><MapPin size={17} strokeWidth={1.4} /></span><div><span className="detail-label">FIND US</span><a href={MAPS_URL} target="_blank" rel="noreferrer">13104 1/2 Sherman Way<br />North Hollywood, CA 91605</a></div></div>
          <div className="visit-detail"><span className="visit-icon"><Phone size={17} strokeWidth={1.4} /></span><div><span className="detail-label">SAY HELLO</span><a href={PHONE_LINK}>{SALON_PHONE}</a></div></div>
          <div className="visit-detail"><span className="visit-icon"><Clock3 size={17} strokeWidth={1.4} /></span><div><span className="detail-label">TODAY AT ZHUZHU</span><span className={"open-status " + (status.open ? "is-open" : "")}><i />{status.label}</span><span className="hours-caption">Pacific Time · Holiday hours may vary</span></div></div>
          <BookingButton label="Reserve your visit" />
        </div>
      </div>
      <div className="booking-bottom">
        <div className="booking-note" data-reveal="fade">
          <span className="eyebrow"><span className="eyebrow-line" />A LITTLE NOTE</span>
          <h3>Come as you are.<br /><em>Leave feeling cared for.</em></h3>
          <p>Have a question before your visit? Call our team and we will be happy to help you choose the right service.</p>
          <a className="inline-link" href={PHONE_LINK}>Speak with our team <ArrowUpRight size={15} /></a>
        </div>
        <div className="map-panel" data-reveal="image">
          <iframe title="Map showing ZhuZhu Beauty and Nail Salon in North Hollywood" src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <div className="map-caption"><div><span className="detail-label">A LITTLE SANCTUARY IN NOHO</span><strong>Easy to find.<br /><em>Lovely to return to.</em></strong></div><a href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Get directions to ZhuZhu"><ArrowUpRight size={20} /></a></div>
        </div>
      </div>
    </section>
  );
}
