import React from "react";
import HeroSection from "./hero";

import MadeAffordableSection from "./made-affordable-section";
import WhyChooseSolar from "./why-choose-solar";
import GetFreeQuote from "./contact";
import FAQ from "./faq-section";
import Newsletter from "./newsletter-section";
import HowItWorks from "./how-it-works-section";

const LandingPage = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <HeroSection />
      <MadeAffordableSection />
      <HowItWorks />
      <WhyChooseSolar />
      <GetFreeQuote />
      <FAQ />
      <Newsletter />
    </div>
  );
};

export default LandingPage;
