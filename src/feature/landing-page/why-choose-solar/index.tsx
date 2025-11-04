"use client";

import PageMaxWidth from "@/components/page-max-width";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function WhyChooseSolar() {
  const benefits = [
    {
      id: 1,
      icon: "/assets/reduce-icon.svg",
      title: "Up to 90% Bill Reduction",
      description:
        "Dramatically reduce your monthly electricity costs with government-subsidized solar installations.",
    },
    {
      id: 2,
      icon: "/assets/environ-icon.svg",
      title: "Environmental Impact",
      description:
        "Reduce your carbon footprint by 3-4 tons of CO2 annually while supporting clean energy.",
    },
    {
      id: 3,
      icon: "/assets/home-icon.svg",
      title: "Increase Home Value",
      description:
        "Solar installations can increase your property value by up to 4% according to recent studies.",
    },
    {
      id: 4,
      icon: "/assets/graph-icon.svg",
      title: "Long-term Investment",
      description:
        "Enjoy 25+ years of free electricity with industry-leading solar panel warranties.",
    },
    {
      id: 5,
      icon: "/assets/sheild-icon.svg",
      title: "Energy Independence",
      description:
        "Protect yourself from rising utility rates and power outages with reliable solar energy.",
    },
    {
      id: 6,
      icon: "/assets/flash-icon.svg",
      title: "Fast Installation",
      description:
        "Professional installation completed in 1-3 days with minimal disruption to your routine.",
    },
  ];

    return (
      <PageMaxWidth>
        <section className="py-16 lg:py-24">
          {/* Header */}
          <div className="relative px-4 md:px-20 rounded-3xl min-h-[1054px]  overflow-hidden ">
            <Image
              src={
                "https://res.cloudinary.com/dk5mfu099/image/upload/v1762235713/a85852b1d87714c5ff0002e32129aed382ab16a6_1_cnrw5u.png"
              }
              alt="banner"
              fill
              className="object-cover object-center  w-full h-full absolute inset-0 pointer-events-none select-none"
            />
            <div className="text-center mb-12 lg:mb-16 mt-5 md:mt-14 relative z-10">
              <h2 className="text-3xl lg:text-[40px] font-semibold text-white mb-4">
                Why Choose Solar Energy?
              </h2>
              <p className="text-base lg:text-[20px] text-[white] max-w-2xl mx-auto font-light">
                Discover the incredible benefits of switching to subsidized
                solar energy and join the renewable revolution.
              </p>
            </div>

            {/* Benefits Grid - 3x2 responsive */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
              {benefits.map((benefit) => (
                <Card
                  key={benefit.id}
                  className="rounded-2xl md:h-[350px] flex justify-center  border-2 transition-transform duration-300 hover:scale-105 bg-[#fffaf5] border-[#FFFFFF]"
                >
                  <CardContent>
                    <div className="text-4xl mb-4">
                      <Image
                        src={benefit.icon}
                        alt={benefit.title}
                        width={50}
                        height={50}
                        className="object-cover w-[50px] h-[50px]"
                      />
                    </div>
                    <h3
                      className={`text-xl lg:text-[28px] font-bold mb-3 text-[#BD783D]`}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-sm lg:text-base text-[#868686] leading-relaxed md:text-[20px]">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </PageMaxWidth>
    );
}
