import React from 'react'
import HeroSection from './hero'
import PageMaxWidth from '@/components/page-max-width';
import MadeAffordableSection from './made-affordable-section';
import WhyChooseSolar from './why-choose-solar';
import GetFreeQuote from './contact';
import FAQ from './faq-section';

const LandingPage = () => {
  return (
    <div className="bg-[#f4f4f4]">
      {/* <PageMaxWidth> */}
              <HeroSection />
              <MadeAffordableSection />
              <WhyChooseSolar />
              <GetFreeQuote />
              <FAQ />
      {/* </PageMaxWidth> */}
    </div>
  );
}

export default LandingPage