import { ArrowUpRight, Instagram, Facebook } from "lucide-react";
import { MAPS_URL, PHONE_LINK, SALON_ADDRESS, SALON_NAME, SALON_PHONE, SOCIAL_LINKS } from "../data.js";
import BookingWidget from "./BookingWidget.jsx";

export default function Footer() {
  const socials = [
    SOCIAL_LINKS.instagram ? { label: "Instagram", href: SOCIAL_LINKS.instagram, icon: Instagram } : null,
    SOCIAL_LINKS.facebook ? { label: "Facebook", href: SOCIAL_LINKS.facebook, icon: Facebook } : null,
  ].filter(Boolean);

  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#top" className="footer-wordmark">ZhuZhu<span>.</span></a>
          <p>Thoughtful beauty.<br />A warm welcome, always.</p>
        </div>
        <div className="footer-links">
          <span>EXPLORE</span>
          <a href="#about">Our story</a>
          <a href="#services">Services</a>
          <a href="#gallery">Lookbook</a>
          <a href="#reviews">Guest notes</a>
        </div>
        <div className="footer-contact">
          <span>FIND US</span>
          <a href={MAPS_URL} target="_blank" rel="noreferrer">{SALON_ADDRESS} <ArrowUpRight size={14} /></a>
          <a href={PHONE_LINK}>{SALON_PHONE}</a>
          {socials.length > 0 && (
            <div className="footer-socials">
              {socials.map(({ label, href, icon: Icon }) => (
                <a href={href} key={label} target="_blank" rel="noreferrer" aria-label={label}>
                  <Icon size={19} strokeWidth={1.6} />
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="footer-booking">
          <span>A LITTLE TIME FOR YOU</span>
          <p>Whenever you are ready, we are here.</p>
          <BookingWidget label="Book your visit" />
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {SALON_NAME.toUpperCase()}</span>
        <span>MADE WITH CARE IN NORTH HOLLYWOOD</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
