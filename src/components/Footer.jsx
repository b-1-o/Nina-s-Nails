import { ArrowUpRight } from "lucide-react";
import { MAPS_URL, PHONE_LINK, SALON_PHONE } from "../data.js";
import BookingButton from "./BookingButton.jsx";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand"><a className="footer-wordmark" href="#top">ZhuZhu<span>.</span></a><p>Thoughtful beauty.<br />A warm welcome, always.</p></div>
        <div className="footer-column"><span className="footer-label">EXPLORE</span><a href="#philosophy">Our philosophy</a><a href="#services">Services</a><a href="#gallery">The lookbook</a><a href="#testimonials">Kind words</a></div>
        <div className="footer-column"><span className="footer-label">FIND US</span><a href={MAPS_URL} target="_blank" rel="noreferrer">13104 1/2 Sherman Way<br />North Hollywood, CA 91605 <ArrowUpRight size={13} /></a><a href={PHONE_LINK}>{SALON_PHONE}</a></div>
        <div className="footer-column footer-connect"><span className="footer-label">A MOMENT FOR YOU</span><p>Whenever you are ready, we are here.</p><BookingButton label="Book an appointment" /></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} ZHUZHU BEAUTY & NAIL SALON</span><span>MADE WITH CARE IN NORTH HOLLYWOOD</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  );
}
