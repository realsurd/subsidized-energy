"use client";
import { useRef, useState } from "react";
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
  const refs = useRef<(HTMLDivElement | null)[]>([]);

  const handleClick = (index: number) => {
    setActive(index);

    refs.current.forEach((el, i) => {
      if (!el) return;

      gsap.to(el, {
        flex: i === index ? 10 : 1,
          height: i === index ? 600 : 570,
        alignSelf: i === index ? "start" : "center",
        duration: 0.5,
        ease: "power4.inOut",
      });
    });
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
          // ✅ Initial CSS flex: first is bigger, others small
          className={`relative cursor-pointer rounded-2xl overflow-hidden transition-all ${
            i === 0 ? "flex-10" : "flex-1 h-[570px] self-center"
          }`}
        >
          <Image src={item.src} alt={item.alt} fill className="object-cover" />

          {/* ✅ Overlay stays proportional + clean */}
          <div
            className={`absolute inset-0 transition-all ${
              active === i ? "bg-black/0" : "bg-black/40"
            }`}
          />
        </div>
      ))}
    </section>
  );
}
