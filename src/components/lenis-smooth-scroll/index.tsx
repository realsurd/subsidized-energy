"use client";

import { ReactNode, FC, useEffect } from "react";
import { ReactLenis } from "lenis/react";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";

interface SmoothScrollProps {
  children: ReactNode;
}

gsap.registerPlugin(ScrollTrigger);
const SmoothScroll: FC<SmoothScrollProps> = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
    lenis.on("scroll", ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This ensures Lenis's smooth scroll animation updates on each GSAP tick
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert time from seconds to milliseconds
    });

    // Disable lag smoothing in GSAP to prevent any delay in scroll animations
    gsap.ticker.lagSmoothing(0);

    return () => {};
  }, []);

  return (
    <ReactLenis
      root
      options={{
        anchors: {
          offset: -80,
          onComplete: () => {
            console.log("scrolled to anchor");
          },
        },
        smoothWheel: true,
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
