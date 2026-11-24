import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import BookingWidget from "./BookingWidget.jsx";

const NAV_ITEMS = [
  { label: "Our story", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const previousY = useRef(0);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const delta = latest - previousY.current;

    if (latest < 48 || delta < -5 || menuOpen) {
      setVisible(true);
    } else if (delta > 7 && latest > 120) {
      setVisible(false);
      setMenuOpen(false);
    }

    previousY.current = latest;
  });

  const closeMenu = () => setMenuOpen(false);

  return (
    <motion.header
      className="site-header"
      initial={{ y: -90, opacity: 0 }}
      animate={{ y: visible || menuOpen ? 0 : -110, opacity: visible || menuOpen ? 1 : 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <div className="site-header-inner">
        <a className="brand-mark" href="#top" aria-label="ZhuZhu home" onClick={closeMenu}>
          <span className="brand-mark-name">ZhuZhu</span>
          <span className="brand-mark-sub">BEAUTY & NAIL SALON</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
          <BookingWidget label="Book now" showIcon={false} className="header-booking" />
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

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
          >
            {NAV_ITEMS.map((item, index) => (
              <a href={item.href} key={item.href} onClick={closeMenu}>
                <span>0{index + 1}</span>
                {item.label}
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            ))}
            <BookingWidget label="Reserve your experience" className="mobile-menu-booking" />
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
