import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollScenes() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return undefined;

    const context = gsap.context(() => {
      gsap.utils.toArray("[data-reveal='headline']").forEach((element) => {
        gsap.fromTo(element, { yPercent: 24, clipPath: "inset(0 0 100% 0)" }, {
          yPercent: 0,
          clipPath: "inset(0 0 0% 0)",
          duration: 1.12,
          ease: "power4.out",
          scrollTrigger: { trigger: element, start: "top 88%", once: true },
        });
      });

      gsap.utils.toArray("[data-reveal='fade']").forEach((element) => {
        gsap.fromTo(element, { y: 34, opacity: 0 }, {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: { trigger: element, start: "top 91%", once: true },
        });
      });

      gsap.utils.toArray("[data-reveal='image']").forEach((element) => {
        gsap.fromTo(element, { clipPath: "inset(12% 0 12% 0)", scale: 1.06 }, {
          clipPath: "inset(0% 0 0% 0)",
          scale: 1,
          duration: 1.25,
          ease: "power3.inOut",
          scrollTrigger: { trigger: element, start: "top 86%", once: true },
        });
      });

      gsap.utils.toArray(".section-rule").forEach((line) => {
        gsap.fromTo(line, { scaleX: 0 }, {
          scaleX: 1,
          duration: 1.15,
          ease: "power3.inOut",
          transformOrigin: "left center",
          scrollTrigger: { trigger: line, start: "top 90%", once: true },
        });
      });

      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: { trigger: element, start: "top bottom", end: "bottom top", scrub: 0.6 },
        });
      });
    });

    return () => context.revert();
  }, []);

  return null;
}
