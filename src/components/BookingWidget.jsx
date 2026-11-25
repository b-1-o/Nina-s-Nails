import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";
import { PHONE_LINK } from "../data.js";

export default function BookingWidget({
  label = "Call to book",
  className = "",
  showIcon = true,
}) {
  return (
    <motion.a
      href={PHONE_LINK}
      whileTap={{ scale: 0.97 }}
      className={["booking-widget", className].filter(Boolean).join(" ")}
      aria-label={label + " — calls Nina's Nails"}
    >
      {showIcon && <Phone size={19} strokeWidth={1.8} aria-hidden="true" />}
      <span>{label}</span>
      <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
    </motion.a>
  );
}
