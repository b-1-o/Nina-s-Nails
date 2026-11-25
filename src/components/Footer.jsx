import { Instagram } from "lucide-react";
import { INSTAGRAM_URL, PHONE_LINK, SALON_ADDRESS, SALON_NAME, SALON_PHONE } from "../data.js";
import BookingWidget from "./BookingWidget.jsx";
import DirectionsChooser from "./DirectionsChooser.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <a href="#top" className="footer-wordmark">Nina's Nails<span>.</span></a>
          <p>Manicure. Pedicure.<br />A fresh look, every visit.</p>
        </div>
        <div className="footer-links">
          <span>EXPLORE</span>
          <a href="#about">About the salon</a>
          <a href="#services">Services</a>
          <a href="#gallery">Nail inspiration</a>
          <a href="#reviews">Guest feedback</a>
          <a href="#visit">Opening hours</a>
        </div>
        <div className="footer-contact">
          <span>FIND US</span>
          <DirectionsChooser label={SALON_ADDRESS} className="footer-map-trigger" showIcon={false} showArrow={true} />
          <a href={PHONE_LINK}>{SALON_PHONE}</a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Nina's Nails on Instagram" className="footer-instagram">
            <Instagram size={17} aria-hidden="true" /> @nailsbynina86
          </a>
        </div>
        <div className="footer-booking">
          <span>QUESTIONS OR APPOINTMENTS?</span>
          <p>Call the salon to check availability and current pricing.</p>
          <BookingWidget label="Call Nina's Nails" />
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} {SALON_NAME.toUpperCase()}</span>
        <span>12912 SHERMAN WAY · NORTH HOLLYWOOD, CA</span>
        <a href="#top">BACK TO TOP ↑</a>
      </div>
    </footer>
  );
}
