import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Map, MapPin, X } from "lucide-react";
import { APPLE_MAPS_URL, GOOGLE_MAPS_URL, GEO_MAPS_URL } from "../data.js";

export default function DirectionsChooser({
  label = "Get directions",
  className = "directions-link",
  showIcon = true,
  showArrow = true,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const supportsAndroidMapIntent = typeof navigator !== "undefined" && /android/i.test(navigator.userAgent);
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll('a[href], button:not([disabled])');
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    dialogRef.current?.querySelector("a[href]")?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isOpen]);

  return (
    <>
      <motion.button
        ref={triggerRef}
        type="button"
        className={className}
        onClick={() => setIsOpen(true)}
        whileTap={{ scale: 0.98 }}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        {showIcon && <MapPin size={18} strokeWidth={1.6} aria-hidden="true" />}
        <span>{label}</span>
        {showArrow && <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="directions-overlay"
            role="presentation"
            onClick={() => setIsOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.section
              ref={dialogRef}
              className="directions-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="directions-dialog-title"
              aria-describedby="directions-dialog-description"
              onClick={(event) => event.stopPropagation()}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
            >
              <button
                type="button"
                className="directions-dialog-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close map options"
              >
                <X size={19} />
              </button>
              <span className="eyebrow"><i /> FIND YOUR WAY</span>
              <h3 id="directions-dialog-title">Choose your map app.</h3>
              <p id="directions-dialog-description">
                Open Nina's Nails in the map app you prefer. If it is not installed,
                the map service may open in your browser.
              </p>

              <a className="directions-choice" href={APPLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                <span className="directions-choice-icon directions-choice-icon--apple"><MapPin size={21} /></span>
                <span className="directions-choice-copy">
                  <strong>Apple Maps</strong>
                  <small>Directions with Apple Maps</small>
                </span>
                <ArrowUpRight size={18} />
              </a>

              <a className="directions-choice" href={GOOGLE_MAPS_URL} target="_blank" rel="noopener noreferrer">
                <span className="directions-choice-icon directions-choice-icon--google"><Map size={21} /></span>
                <span className="directions-choice-copy">
                  <strong>Google Maps</strong>
                  <small>Directions with Google Maps</small>
                </span>
                <ArrowUpRight size={18} />
              </a>

              {supportsAndroidMapIntent && (
                <a className="directions-choice" href={GEO_MAPS_URL}>
                  <span className="directions-choice-icon directions-choice-icon--other"><MapPin size={21} /></span>
                  <span className="directions-choice-copy">
                    <strong>Other map apps</strong>
                    <small>Let your device choose an installed app</small>
                  </span>
                  <ArrowUpRight size={18} />
                </a>
              )}
            </motion.section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
