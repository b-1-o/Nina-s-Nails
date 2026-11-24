import { useEffect, useRef } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import { Philosophy, Services, Gallery, Testimonials, Booking } from "./components/Sections.jsx";
import Footer from "./components/Footer.jsx";

function CursorAccent() {
  const cursorRef = useRef(null);
  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const node = cursorRef.current;
    if (!node) return undefined;
    const move = (event) => { node.style.transform = "translate3d(" + event.clientX + "px," + event.clientY + "px,0)"; };
    const show = () => node.classList.add("is-visible");
    const hide = () => node.classList.remove("is-visible");
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerenter", show);
    window.addEventListener("pointerleave", hide);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerenter", show);
      window.removeEventListener("pointerleave", hide);
    };
  }, []);
  return <span className="cursor-accent" ref={cursorRef} aria-hidden="true" />;
}

export default function App() {
  return <><CursorAccent /><Header /><main><Hero /><Philosophy /><Services /><Gallery /><Testimonials /><Booking /></main><Footer /></>;
}
