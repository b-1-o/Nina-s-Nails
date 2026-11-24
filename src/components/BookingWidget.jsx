import { motion } from "framer-motion";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { BOOKING_URL } from "../data.js";

/**
 * External booking entry point.
 * Pass the salon's Booksy profile URL when it is available.
 * Until then the default destination remains ZhuZhu's published Zoca booking page.
 */
export default function BookingWidget({
  bookingUrl = BOOKING_URL,
  label = "Book your visit",
  className = "",
  showIcon = true,
}) {
  const destination =
    bookingUrl && bookingUrl !== "YOUR_BOOKSY_LINK_HERE"
      ? bookingUrl
      : BOOKING_URL;

  return (
    <motion.a
      href={destination}
      target="_blank"
      rel="noopener noreferrer"
      whileTap={{ scale: 0.96 }}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={[
        "booking-widget",
        className,
      ].filter(Boolean).join(" ")}
      aria-label={label + " — opens online booking in a new tab"}
    >
      {showIcon && <CalendarDays size={20} strokeWidth={1.8} aria-hidden="true" />}
      <span>{label}</span>
      <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
    </motion.a>
  );
}
