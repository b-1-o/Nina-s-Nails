import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BookingWidget from "./BookingWidget.jsx";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Nail inspiration", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const previousY = useRef(0);
  const frameRef = useRef(0);

  useEffect(() => {
    previousY.current = window.scrollY;
    const handleScroll = () => {
      if (frameRef.current) return;
      frameRef.current = window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - previousY.current;
        if (currentY < 48 || delta < -5 || menuOpen) {
          setVisible(true);
        } else if (delta > 7 && currentY > 120) {
          setVisible(false);
          setMenuOpen(false);
        }
        previousY.current = currentY;
        frameRef.current = 0;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frameRef.current) window.cancelAnimationFrame(frameRef.current);
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={"site-header" + (!visible && !menuOpen ? " is-hidden" : "")}>
      <div className="site-header-inner">
        <a className="brand-mark" href="#top" aria-label="Nina's Nails home" onClick={closeMenu}>
          <span className="brand-mark-name">Nina's Nails</span>
          <span className="brand-mark-sub">NAIL CARE · NORTH HOLLYWOOD</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => <a href={item.href} key={item.href}>{item.label}</a>)}
          <BookingWidget label="Call now" showIcon={false} className="header-booking" />
        </nav>
        <div className="mobile-header-actions">
          <button
            type="button"
            className="menu-button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {menuOpen && (
        <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item, index) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              <span>0{index + 1}</span>
              {item.label}
              <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          ))}
          <BookingWidget label="Call the salon" className="mobile-menu-booking" />
        </nav>
      )}
    </header>
  );
}
