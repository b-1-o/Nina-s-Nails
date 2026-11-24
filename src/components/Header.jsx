import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { BOOKING_URL } from "../data.js";

const links = [
  { label: "Our philosophy", href: "#philosophy" },
  { label: "Services", href: "#services" },
  { label: "The edit", href: "#gallery" },
  { label: "Kind words", href: "#testimonials" },
  { label: "Visit us", href: "#visit" }
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="ZhuZhu home" onClick={closeMenu}>
        <span className="wordmark-main">ZhuZhu</span><span className="wordmark-sub">BEAUTY & NAIL SALON</span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {links.map((link) => <a href={link.href} key={link.href}>{link.label}</a>)}
      </nav>
      <a className="header-book button-outline" href={BOOKING_URL} target="_blank" rel="noreferrer">Book a visit <ArrowUpRight size={14} /></a>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((current) => !current)}>
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
      <AnimatePresence>
        {menuOpen && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}>
          {links.map((link, index) => <a href={link.href} key={link.href} onClick={closeMenu}><span className="mobile-nav-index">0{index + 1}</span>{link.label}<ArrowUpRight size={16} /></a>)}
          <a className="mobile-book-link" href={BOOKING_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Book your experience <ArrowUpRight size={16} /></a>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
