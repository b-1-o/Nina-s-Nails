import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import Lenis from "lenis";
import App from "./App.jsx";
import "./styles.css";

function Root() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return undefined;

    const lenis = new Lenis({
      lerp: 0.085,
      smoothWheel: true,
      smoothTouch: false,
      anchors: true,
    });

    let frameId = 0;
    const raf = (time) => {
      if (document.visibilityState !== "visible") {
        frameId = 0;
        return;
      }
      lenis.raf(time);
      frameId = window.requestAnimationFrame(raf);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        if (frameId) window.cancelAnimationFrame(frameId);
        frameId = 0;
      } else if (!frameId) {
        frameId = window.requestAnimationFrame(raf);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    frameId = window.requestAnimationFrame(raf);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      if (frameId) window.cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
