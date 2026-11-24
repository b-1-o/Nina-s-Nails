import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowDownRight, ArrowLeft, ArrowRight, ArrowUpRight, Clock3, MapPin, Phone, ShieldCheck, Sparkles, Star } from "lucide-react";
import { BOOKING_URL, GALLERY, HOURS, MAPS_URL, MAP_EMBED_URL, PHONE_LINK, SALON_PHONE, SERVICES, TESTIMONIALS } from "../data.js";

function SectionIntro({ label, title, children }) {
  return (
    <motion.div className="section-intro" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}>
      <div className="eyebrow"><span className="eyebrow-line" />{label}</div>
      <h2>{title}</h2>
      {children && <p>{children}</p>}
    </motion.div>
  );
}

export function Philosophy() {
  return (
    <section className="philosophy section-pad" id="philosophy">
      <div className="philosophy-copy">
        <div className="eyebrow"><span className="eyebrow-line" />A PLACE TO EXHALE</div>
        <h2>Beauty is a ritual.<br /><em>Care is our craft.</em></h2>
        <p className="philosophy-lead">Welcome to ZhuZhu — where considered beauty meets the warmth of being looked after.</p>
        <p>Led by Lika and Avo, we have created a welcoming sanctuary built around personal attention, thoughtful conversation and the little details that make a visit feel special. Come as you are; leave feeling cared for.</p>
        <p>Enjoy a coffee, share an idea or simply take a moment for yourself. We will take care of the rest.</p>
        <div className="founders-signature"><span className="signature-script">Lika & Avo</span><span className="signature-caption">WITH WARMTH, ALWAYS</span></div>
        <a className="inline-link" href="#visit">Come say hello <ArrowUpRight size={15} /></a>
      </div>
      <div className="philosophy-visual">
        <div className="philosophy-photo-wrap"><img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=1200&q=88" alt="A serene spa interior with natural textures and soft light" loading="lazy" /></div>
        <div className="philosophy-photo-caption"><span>THE ZHUZHU FEELING</span><span>01 / 05</span></div>
        <div className="sterile-seal"><span className="seal-icon"><ShieldCheck size={20} strokeWidth={1.25} /></span><span className="seal-title">CARE YOU CAN TRUST</span><span className="seal-copy">Tools sterilized in a<br />medical-grade autoclave</span></div>
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
        <SectionIntro label="THE SERVICE EDIT" title={<>A little luxury.<br /><em>A lasting feeling.</em></>} />
        <p className="services-heading-note">Thoughtful treatments, tailored to your style. Every appointment begins with listening.</p>
      </div>
      <div className="services-layout">
        <div className="services-list" role="list" aria-label="Featured services">
          {SERVICES.map((service, index) => {
            const isActive = active === index;
            return (
              <div className={"service-item " + (isActive ? "is-active" : "")} key={service.id} role="listitem">
                <button className="service-trigger" type="button" aria-expanded={isActive} aria-controls={"service-panel-" + service.id} onClick={() => setActive(index)}>
                  <span className="service-number">{service.number}</span><span className="service-title">{service.title}</span><span className="service-chevron"><ArrowDownRight size={19} strokeWidth={1.3} /></span>
                </button>
                <AnimatePresence initial={false}>
                  {isActive && <motion.div id={"service-panel-" + service.id} className="service-panel" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}>
                    <p>{service.description}</p>
                    <div className="service-meta"><span>{service.note}</span><a href={BOOKING_URL} target="_blank" rel="noreferrer">DISCOVER & BOOK <ArrowUpRight size={13} /></a></div>
                  </motion.div>}
                </AnimatePresence>
              </div>
            );
          })}
          <p className="services-footnote">Looking for something different? Call us and we will be happy to help.</p>
        </div>
        <div className="service-image-stage">
          <AnimatePresence mode="wait">
            <motion.div className="service-image" key={selected.id} initial={{ opacity: 0, scale: 1.035 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.985 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}>
              <img src={selected.image} alt={selected.alt} loading="lazy" /><div className="service-image-overlay" /><span className="service-image-label">{selected.note}</span>
            </motion.div>
          </AnimatePresence>
          <div className="service-image-bottom"><span>CRAFTED WITH INTENTION</span><span>0{active + 1} / 04</span></div>
        </div>
      </div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="gallery section-pad" id="gallery">
      <SectionIntro label="A VISUAL JOURNAL" title={<>Little details.<br /><em>Beautifully considered.</em></>}>
        A glimpse into the art, textures and finishes that inspire us. Your next favorite look begins with a conversation.
      </SectionIntro>
      <div className="gallery-grid">
        {GALLERY.map((item, index) => <a className={"gallery-item " + item.shape} href={BOOKING_URL} target="_blank" rel="noreferrer" key={item.title} aria-label={"Ask us about " + item.title}>
          <img src={item.src} alt={item.alt} loading="lazy" /><span className="gallery-index">0{index + 1}</span>
          <span className="gallery-hover"><span>{item.title}</span><span className="gallery-view">ENQUIRE <ArrowUpRight size={14} /></span></span>
        </a>)}
      </div>
      <p className="gallery-note"><Sparkles size={14} strokeWidth={1.3} /> YOUR VISION, OUR ARTISTRY</p>
    </section>
  );
}

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const review = TESTIMONIALS[index];
  const next = () => setIndex((current) => (current + 1) % TESTIMONIALS.length);
  const previous = () => setIndex((current) => (current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  return (
    <section className="testimonials section-pad" id="testimonials">
      <div className="testimonial-topline">
        <div className="eyebrow"><span className="eyebrow-line" />KIND WORDS</div>
        <div className="testimonial-rating"><span className="rating-stars" aria-label="Five stars">{[1,2,3,4,5].map((star) => <Star key={star} size={13} fill="currentColor" strokeWidth={0} />)}</span><strong>5.0</strong><span>GUEST RATING</span></div>
      </div>
      <div className="testimonial-card">
        <span className="quote-mark" aria-hidden="true">“</span>
        <AnimatePresence mode="wait">
          <motion.div className="testimonial-content" key={review.name} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.35 }}>
            <blockquote>{review.quote}</blockquote>
            <div className="testimonial-author"><span className="author-rule" /><span className="author-name">{review.name}</span><span className="author-detail">{review.detail}</span></div>
          </motion.div>
        </AnimatePresence>
        <div className="testimonial-controls"><span className="testimonial-count">0{index + 1} <i>/</i> 0{TESTIMONIALS.length}</span><button type="button" onClick={previous} aria-label="Previous review"><ArrowLeft size={18} /></button><button type="button" onClick={next} aria-label="Next review"><ArrowRight size={18} /></button></div>
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
    const refreshStatus = () => setStatus(getSalonStatus());
    const intervalId = window.setInterval(refreshStatus, 60000);
    return () => window.clearInterval(intervalId);
  }, []);
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "America/Los_Angeles" });
  const [form, setForm] = useState({ name: "", service: "Signature French Manicure", date: "", note: "" });
  const update = (event) => setForm((current) => ({ ...current, [event.target.name]: event.target.value }));
  const submitRequest = (event) => {
    event.preventDefault();
    const message = ["Hello ZhuZhu, I would love to ask about an appointment.", "Name: " + form.name, "Service: " + form.service, "Preferred date: " + (form.date || "Flexible"), form.note ? "Note: " + form.note : ""].filter(Boolean).join("\n");
    window.location.href = "sms:+18188633111?&body=" + encodeURIComponent(message);
  };

  return (
    <section className="booking section-pad" id="visit">
      <div className="booking-heading">
        <SectionIntro label="YOUR NEXT MOMENT" title={<>Make time for<br /><em>something lovely.</em></>}>
          We would love to welcome you. Reserve your visit online, give us a call or send a note with your preferred details.
        </SectionIntro>
        <div className="visit-details">
          <div className="visit-detail"><span className="visit-icon"><MapPin size={17} strokeWidth={1.4} /></span><div><span className="detail-label">FIND US</span><a href={MAPS_URL} target="_blank" rel="noreferrer">13104 1/2 Sherman Way<br />North Hollywood, CA 91605</a></div></div>
          <div className="visit-detail"><span className="visit-icon"><Phone size={17} strokeWidth={1.4} /></span><div><span className="detail-label">SAY HELLO</span><a href={PHONE_LINK}>{SALON_PHONE}</a></div></div>
          <div className="visit-detail"><span className="visit-icon"><Clock3 size={17} strokeWidth={1.4} /></span><div><span className="detail-label">TODAY AT ZHUZHU</span><span className={"open-status " + (status.open ? "is-open" : "")}><i />{status.label}</span><span className="hours-caption">Pacific Time · Holiday hours may vary</span></div></div>
          <a className="button-forest" href={BOOKING_URL} target="_blank" rel="noreferrer">Book online <ArrowUpRight size={16} /></a>
        </div>
      </div>
      <div className="booking-bottom">
        <form className="booking-form" onSubmit={submitRequest}>
          <div className="form-heading"><span className="eyebrow"><span className="eyebrow-line" />A PERSONAL NOTE</span><h3>Tell us what you have in mind.</h3><p>Share a few details and your messaging app will open with a ready-to-review note to our team.</p></div>
          <label className="form-field"><span>Your name</span><input name="name" value={form.name} onChange={update} placeholder="How should we address you?" autoComplete="name" required /></label>
          <div className="form-row">
            <label className="form-field"><span>Service of interest</span><select name="service" value={form.service} onChange={update}>{SERVICES.map((service) => <option key={service.id}>{service.title}</option>)}<option>Something else</option></select></label>
            <label className="form-field"><span>Preferred date</span><input type="date" name="date" min={today} value={form.date} onChange={update} /></label>
          </div>
          <label className="form-field"><span>A note for our team <i>OPTIONAL</i></span><textarea name="note" value={form.note} onChange={update} rows="3" placeholder="A design idea, a question, or anything we should know..." /></label>
          <button className="button-gold form-submit" type="submit">Prepare my message <ArrowUpRight size={16} /></button>
          <p className="form-disclaimer">This opens your messaging app; your message is not sent automatically.</p>
        </form>
        <div className="map-panel">
          <iframe title="Map showing ZhuZhu Beauty and Nail Salon in North Hollywood" src={MAP_EMBED_URL} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          <div className="map-caption"><div><span className="detail-label">A LITTLE SANCTUARY IN NOHO</span><strong>Easy to find.<br /><em>Lovely to return to.</em></strong></div><a href={MAPS_URL} target="_blank" rel="noreferrer" aria-label="Get directions to ZhuZhu"><ArrowUpRight size={20} /></a></div>
        </div>
      </div>
    </section>
  );
}
