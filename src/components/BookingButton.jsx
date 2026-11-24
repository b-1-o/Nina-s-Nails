import { useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BOOKING_URL } from "../data.js";

export default function BookingButton({
  bookingUrl = BOOKING_URL,
  label = "Reserve your visit",
  variant = "gold",
  className = "",
}) {
  const [hovered, setHovered] = useState(false);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { stiffness: 260, damping: 22, mass: 0.35 });
  const y = useSpring(rawY, { stiffness: 260, damping: 22, mass: 0.35 });

  const handleMove = (event) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set(Math.max(-7, Math.min(7, (event.clientX - rect.left - rect.width / 2) * 0.12)));
    rawY.set(Math.max(-5, Math.min(5, (event.clientY - rect.top - rect.height / 2) * 0.12)));
  };

  const reset = () => {
    rawX.set(0);
    rawY.set(0);
    setHovered(false);
  };

  return (
    <motion.a
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={"booking-button booking-button--" + variant + (className ? " " + className : "")}
      style={{ x, y }}
      onPointerEnter={() => setHovered(true)}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      whileTap={{ scale: 0.975 }}
      aria-label={label + " — opens the salon's online booking page in a new tab"}
      data-cursor="interactive"
    >
      <motion.span className="booking-button-fill" initial={false} animate={{ scaleX: hovered ? 1 : 0 }} transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }} />
      <span className="booking-button-label">{label}</span>
      <span className="booking-button-icon"><ArrowUpRight size={16} strokeWidth={1.5} /></span>
    </motion.a>
  );
}
