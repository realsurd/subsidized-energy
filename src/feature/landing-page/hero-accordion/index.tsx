"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

const images = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dk5mfu099/image/upload/v1762157390/792a0d2b59cf4c5187b9f4eb8f213b77ba3198f2_txfjfo_ympujl.jpg",
    alt: "Energy Panel",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dk5mfu099/image/upload/v1762157667/c0225f6e6be4df6ea1b1b070a5f4cf07d14b9823_1_aeohjh.jpg",
    alt: "Solar System",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dk5mfu099/image/upload/v1762157703/a99587089b0c55407279b900f7f647a82e336bf3_1_eqng18.jpg",
    alt: "Industrial Energy",
  },
];

export default function HeroAccordion() {
  const [active, setActive] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const refs = useRef<(HTMLDivElement | null)[]>([]);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);
  const resumeTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ✅ Handle animation when active changes
  const animateAccordion = (index: number) => {
    refs.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        flex: i === index ? 10 : 1,
        height: i === index ? 600 : 570,
        alignSelf: i === index ? "start" : "center",
        duration: 0.8,
        ease: "power4.inOut",
      });
    });
  };

  // ✅ On mount & when active changes
  useEffect(() => {
    animateAccordion(active);
  }, [active]);

  // ✅ Autoplay logic
  useEffect(() => {
    if (isPaused) return;

    autoplayRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused]);

  // ✅ Handle user click (pause + resume after 5s)
  const handleClick = (index: number) => {
    setActive(index);
    setIsPaused(true);
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 5000);
  };

  return (
    <section className="w-full h-[600px] md:flex overflow-hidden rounded-2xl mb-18 gap-4 hidden">
      {images.map((item, i) => (
        <div
          key={item.id}
          ref={(el) => {
            refs.current[i] = el;
          }}
          onClick={() => handleClick(i)}
          className={`relative cursor-pointer rounded-2xl overflow-hidden flex-1 transition-all`}
        >
          <Image
            src={item.src}
            alt={item.alt}
            fill
            className="object-cover duration-700"
          />

          {/* Overlay */}
          <div
            className={`absolute inset-0 transition-all duration-500 ${
              active === i ? "bg-black/0" : "bg-black/40"
            }`}
          />
        </div>
      ))}
    </section>
  );
}
