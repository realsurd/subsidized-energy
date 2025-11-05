"use client";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const SmoothScroll = ({ children }: Props) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    interface Lenis {
      raf(time: number): void;
    }

    interface ReactLenisRef {
      lenis?: Lenis | null;
    }

    function update(time: number): void {
      (lenisRef.current as ReactLenisRef | null)?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <ReactLenis
      root
      options={{
        autoRaf: false,
        anchors: {
          offset: -80,
          onComplete: () => {
            console.log("scrolled to anchor");
          },
        },
        smoothWheel: true,
        lerp: 0.1,
      }}
      ref={lenisRef}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScroll;