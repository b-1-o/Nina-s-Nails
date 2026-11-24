import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const rawX = useMotionValue(-40);
  const rawY = useMotionValue(-40);
  const x = useSpring(rawX, { stiffness: 420, damping: 34, mass: 0.28 });
  const y = useSpring(rawY, { stiffness: 420, damping: 34, mass: 0.28 });

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reduced) return undefined;
    setEnabled(true);

    const move = (event) => {
      rawX.set(event.clientX);
      rawY.set(event.clientY);
    };
    const over = (event) => {
      const target = event.target instanceof Element ? event.target.closest("a, button, [data-cursor='interactive']") : null;
      setHovered(Boolean(target));
    };
    const leave = () => setHovered(false);

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", over);
    document.addEventListener("pointerout", leave);
    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", over);
      document.removeEventListener("pointerout", leave);
    };
  }, [rawX, rawY]);

  if (!enabled) return null;

  return (
    <motion.div className="custom-cursor" style={{ x, y }} animate={{ scale: hovered ? 2.7 : 1, opacity: 1 }} transition={{ type: "spring", stiffness: 360, damping: 25 }} aria-hidden="true">
      <span />
    </motion.div>
  );
}
