import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import App from "./App.jsx";
import "./styles.css";

function Root() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;
    const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, anchors: true });
    let frameId;
    const raf = (time) => { lenis.raf(time); frameId = window.requestAnimationFrame(raf); };
    frameId = window.requestAnimationFrame(raf);
    return () => { window.cancelAnimationFrame(frameId); lenis.destroy(); };
  }, []);
  return <App />;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><Root /></React.StrictMode>);
