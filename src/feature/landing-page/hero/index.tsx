"use client";
import HeroAccordion from "@/feature/landing-page/hero-accordion";
import HeroSponsor from "@/feature/landing-page/hero-sponsor";
import { Button } from "@/components/ui/button";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import Image from "next/image";
import React, { useRef } from "react";
import PageMaxWidth from "@/components/page-max-width";

gsap.registerPlugin(SplitText);

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!heroRef.current) return;

    // ✅ Split Text
    const split = new SplitText(".hero-title", {
      type: "words, lines",
      linesClass: "line",
      autoSplit: true,
      mask: "lines",
    });
    let tl = gsap.timeline({
      defaults: { ease: "power4.out", duration: 1, immediateRender: true },
    });

    // ✅ Title line animation
    tl.from(split.lines, {
      opacity: 0,
      yPercent: 500,
      duration: 3,
      autoAlpha: 0,
    })
      // ✅ Button
      .from(
        ".hero-btn",
        {
          opacity: 0,
          scale: 0.6,
          duration: 1,
          ease: "back.out(1.7)",
        },
        ">-2"
      )
      .from(
        ".hero-svg",
        {
          opacity: 0,
          y: 50,
          scale: 0.8,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
        },
        ">-1"
      )
      .from(
        ".hero-banner",
        {
          opacity: 0,
          scale: 0.8,
          duration: 1,
          ease: "power3.out",
        },
        ">-.5"
      );
  }, []);

  return (
    <PageMaxWidth>
      <div className="min-h-screen pt-[180px]" ref={heroRef}>
        <div className=" w-full ">
          <section className="flex flex-col md:flex-row gap-4  md:gap-8 lg:gap-16 items-center md:items-start mb-12 md:justify-between ">
            {/* Left Content */}
            <div className="flex flex-col gap-2 ">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-bold leading-tight  hero-title ">
                  Power Your World with
                </h1>
                <div className="flex items-center gap-3">
                  <h2 className="text-3xl sm:text-4xl lg:text-[75px] font-normal instrument-serif-regular-italic text-[#D28820]  hero-title">
                    subsidized energy
                  </h2>
                  {/* Icons */}
                  <div className="flex  items-center justify-center overflow-clip">
                    <Image
                      src={
                        "https://res.cloudinary.com/dk5mfu099/image/upload/v1762155301/solar_cpu-bolt-line-duotone_wuhirj.png"
                      }
                      alt="solar icon"
                      width={50}
                      height={50}
                      className=" translate-y-5 translate-x-5 hero-svg"
                    />
                    <Image
                      src={
                        "https://res.cloudinary.com/dk5mfu099/image/upload/v1762155301/solar_cpu-bolt-line-duotone_1_cymuhv.png"
                      }
                      alt="solar icon"
                      width={50}
                      height={50}
                      className=" translate-y-5 hero-svg"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="flex flex-col gap-6 hero-btn">
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-sm md:text-[20px]  ">
                A decentralized, affordable, and community-driven solar energy
                network powered by blockchain.
              </p>
              <div className="flex flex-wrap gap-3 ">
                <Button className="rounded-full bg-foreground text-background hover:bg-foreground/90 font-medium px-6 sm:px-8 text-sm md:text-[16px] flex-1 h-[60px] cursor-pointer">
                  Join the Community

                  {/* <Image
                    src="/assets/arrow-right-round.svg"
                    alt="arrow-right-round"
                    width={24}
                    height={24}
                    className=" bg-white"
                  /> */}
            
                </Button>
                <Button
                  variant="outline"
                  className="rounded-full h-[60px] cursor-pointer font-medium px-6 sm:px-8 border-foreground text-foreground hover:bg-foreground/5 bg-transparent flex-1 md:text-[16px] text-sm"
                >
                  Learn More
                </Button>
              </div>
            </div>
          </section>
          <div className="hero-banner">
            <HeroAccordion />
          </div>
          <HeroSponsor />
        </div>
      </div>
    </PageMaxWidth>
  );
};

export default HeroSection;
