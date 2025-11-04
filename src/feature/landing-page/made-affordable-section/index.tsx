import PageMaxWidth from "@/components/page-max-width";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

interface Benefits {
  title: string;
  description: string;
}

const MadeAffordableSection = () => {
  const benefits: Benefits[] = [
    {
      title: "Own Your Energy",
      description:
        "Generate your own solar power and take control of how it's used or shared. With smart meters and wallet integration, you're not just a consumer — you're a stakeholder.",
    },
    {
      title: "Buy & Sell in a Decentralized Marketplace",
      description:
        "Trade your excess energy with others in a peer-to-peer marketplace. Prices are transparent and set by the system, ensuring fairness and accessibility for everyone.",
    },
    {
      title: "Drive Sustainability Through Tokenized Access",
      description:
        "Each kilowatt-hour is tokenized as SSUB, creating a traceable, equitable system for distributing renewable energy. Every transaction helps fund a cleaner, more resilient energy future.",
    },
  ];

  const features: string[] = [
    "Own Your Energy",
    "Buy & Sell in a Decentralized Marketplace",
    "Drive Sustainability Through Tokenized Access",
  ];
    return (
      
        <section className="py-16 lg:py-24 ">
            <PageMaxWidth>
          {/* Header */}
          <div className="text-center mb-12 lg:mb-18">
            <h2 className="text-3xl lg:text-[40px] font-bold text-foreground instrument-serif-regular ">
              Solar Energy -{" "}
              <span className="text-green-600">Made Affordable</span>
            </h2>
            <p className="text-base lg:text-lg text-[#868686] max-w-3xl mx-auto mt-4 font-light">
              Take advantage of personal subsidies and reduce your electricity
              bills by up to 90%. Join thousands of homeowners who've made the
              switch to clean, affordable solar energy.
            </p>
          </div>
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16 lg:mb-20  min-h-[485px]">
            {/* Left Image */}
            <div className="flex items-center justify-center  rounded-3xl overflow-hidden h-[400px] md:h-auto">
              <Image
                src="https://res.cloudinary.com/dk5mfu099/image/upload/v1762179706/29d2130138b0944bc15f093124198da623b0974a_atbr3n.jpg"
                alt="Hands holding glowing lightbulb representing energy"
                width={500}
                height={500}
                className=" object-cover shadow-lg w-full h-full hover:scale-105 transition-transform duration-500 ease-in-out "
              />
            </div>

            {/* Right Content */}
            <div className="flex flex-col justify-center  px-3">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-[#EDF9FF] border border-[#23AEFF] rounded-full px-4 py-2 w-fit mb-6">
                <div>
                  <Image
                    src="/assets/discover-circle.svg"
                    alt="discover-circle"
                    width={17}
                    height={17}
                    className="object-cover"
                  />
                </div>
                <span className="text-sm font-medium text-[#23AEFF] md:text-[16px]">
                  Product Goals
                </span>
              </div>

              {/* Heading */}
              <h3 className="text-2xl lg:text-[40px] font-bold text-[#303030] mb-4 Instrument-serif-regular">
                What is Subsidized Energy?
              </h3>

              {/* Description */}
              <p className="text-base lg:text-[20px] text-[#868686] mb-6 leading-relaxed">
                Subsidized Energy is a solar-powered energy marketplace that
                empowers households and communities to buy, sell, or trade
                energy using blockchain-backed tokens.
              </p>

              {/* Features List */}
              <div className="space-y-3">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div>
                      <Image
                        src="/assets/subtract.svg"
                        alt="check icon"
                        width={22}
                        height={22}
                        className="object-cover "
                      />
                    </div>
                    <span className="text-sm text-[#868686] md:text-[20px] leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 lg:p-8  transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <h4 className="text-lg lg:text-[24px] leading-tight font-semibold text-[#303030] mb-3 text-center">
                  {benefit.title}
                </h4>
                <p className="text-sm lg:text-base text-[#868686] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
                </div>
                </PageMaxWidth>
        </section>
    );
};
export default MadeAffordableSection;
