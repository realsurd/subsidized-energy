"use client";

import { useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    step: "Step One:",
    title: "Solar Energy Capture",
    text: "High-efficiency solar panels installed in houses, communities or businesses harness sunlight and convert it into electricity.",
    bg: "bg-[#F0FFF3]", // light green
    image:
      "https://res.cloudinary.com/dk5mfu099/image/upload/v1762331989/solar_panels_mzvqcl.png",
  },
  {
    step: "Step Two:",
    title: "Energy Storage & Management:",
    text: "The captured energy is stored in smart meters, ensuring uninterrupted power supply even when sunlight is low or at night.",
    bg: "bg-[#F2FAE6]", // light yellow
    image:
      "https://res.cloudinary.com/dk5mfu099/image/upload/v1762331988/payment_terminal_q2gc4o.png",
  },
  {
    step: "Step Three:",
    title: "Digital Monitoring & Billing:",
    text: "An Algorand blockchain-based system that tracks energy production, consumption, and payments in real-time, ensuring transparency.",
    bg: "bg-[#fffaf5]", // pale orange
  },
  {
    step: "Step Four:",
    title: "Flexible Access & Payment:",
    text: "Users pay for energy as they consume it (Pay-As-You-Go) using digital wallets, mobile money, or local methods — making clean energy scalable.",
    bg: "bg-[#F2F8FF]", // pale blue
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".how-card", {
      opacity: 0,
      y: 40,
      duration: 1,
      stagger: 0.15,
      ease: "power4.out",
      markers: true,

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center", // when the top of the box hits 90% of viewport height
        end: "bottom center",
      },
    });
    gsap.from(".card-img", {
      opacity: 0,
      x: 300,
      duration: 1.5,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center", // when the top of the box hits 90% of viewport height
        end: "bottom center",
      },
    });
     gsap.from(".card-img1", {
       opacity: 0,
       x: -300,
       duration: 1.5,
       ease: "power4.out",
       scrollTrigger: {
         trigger: sectionRef.current,
         start: "top center", // when the top of the box hits 90% of viewport height
         end: "bottom center",
       },
     });
  }, []);

  return (
    <section className="w-full py-20 px-4 lg:px-0 bg-white">
      {/* Headings */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-gray-800">
          How It Works
        </h2>
        <p className="text-gray-500 mt-2 text-base lg:text-[20px]">
          Getting started with subsidized solar is simple. Follow these four
          easy steps to begin your journey to energy independence.
        </p>
      </div>

      {/* Cards grid */}
      <div
        ref={sectionRef}
        className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-6 max-w-6xl mx-auto md:min-h-[700px]"
      >
        {steps.map((item, i) => (
          <div
            key={i}
            className={`how-card ${item.bg} rounded-2xl  ${
              i === 0 ? "lg:row-span-2 flex flex-col" : ""
            } ${
              i === 1
                ? " lg:col-span-2 flex justify-between gap-8 items-center overflow-hidden"
                : ""
            } p-6 shadow-[0px_5px_20px_rgba(0,0,0,0.05)]`}
          >
            <div className="flex flex-col flex-1">
              <span className="text-sm font-medium text-gray-500">
                {item.step}
              </span>
              <h3 className="mt-1 font-bold text-xl md:text-[28px] text-[#5B7238]">
                {item.title}
              </h3>
              <p className="mt-3 text-[#000000]leading-relaxed text-sm md:text-[20px]">
                {item.text}
              </p>
            </div>

            {item.image && (
              <div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={300}
                  className={`object-cover hidden lg:flex flex-1   ${
                    i === 0 ? "-translate-x-20 card-img1" : ""
                  }   ${i === 1 ? "card-img" : ""}`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="text-center mt-12">
        <Button className="group inline-flex items-center gap-2 bg-[#005C43] text-white px-7 py-4 rounded-full font-medium shadow-md hover:shadow-xl transition-all md:text-lg h-[60px]">
          Start your subsidized journey today
          <span className="inline-block transform group-hover:translate-x-2 transition-transform">
            ➜
          </span>
        </Button>
      </div>
    </section>
  );
}
