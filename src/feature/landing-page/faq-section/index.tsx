"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import PageMaxWidth from "@/components/page-max-width";

interface FAQItem
{
    id: number;
  question: string;
  answer: string;
}
const faqItems:FAQItem[] = [
  {
    id: 1,
    question: "What is Subsidized Energy?",
    answer:
      "Subsidized Energy is a solar-powered energy marketplace that empowers households and communities to buy, sell, or trade energy using blockchain-backed tokens. It enables energy independence while supporting a decentralized, sustainable energy future.",
  },
  {
    id: 2,
    question: "How can I join the Subsidized Energy Community?",
    answer:
      'You can join our community by visiting our website and clicking "Join the Community". Fill out the signup form with your details, and you\'ll gain access to our energy marketplace platform and community features.',
  },
  {
    id: 3,
    question: "How does it work?",
    answer:
      "Our platform uses solar panels to capture energy, stores it in smart meters, tracks it on our blockchain-based system, and allows you to buy, sell, or trade energy. You pay for energy as you consume it using digital wallets or local payment methods.",
  },
];

export default function FAQ() {

    return (
      <section className=" bg-white font-trap">
        <PageMaxWidth>
          <div className="py-12 lg:py-20 px-4 sm:px-6 lg:px-25">
            {/* Header */}
            <div className="mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                  FAQ
                </h2>
                <p className="text-gray-600 text-lg">
                  Any{" "}
                  <span className="text-green-600 font-semibold">
                    Question?
                  </span>
                </p>
              </div>
            </div>

            {/* Accordion Items */}
            <div className="space-y-4">
              {faqItems.map((faq, idx) => (
                <FAQItem
                  key={idx}
                  question={faq.question}
                  answer={faq.answer}
                />
              ))}
            </div>

            {/* Show All Questions Button */}
            <div className="flex justify-center mt-10">
              <button className="px-8 py-3 border-2 border-gray-800 rounded-full font-semibold text-foreground hover:bg-gray-50 transition-colors duration-200">
                Show all questions
              </button>
            </div>
          </div>
        </PageMaxWidth>
      </section>
    );
}


const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full bg-[#F3F7FA]  rounded-xl p-5 mb-4  cursor-pointer transition-all duration-300  border-2 border-[#000000] "
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center px-6 ">
        <span className="text-base sm:text-lg font-bold text-[#1b4962] lg:text-[24px]">
          {question}
        </span>
        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${
          open ? "max-h-40 mt-2" : "max-h-0"
        }`}
      >
        <p className="text-sm sm:text-base text-gray-600">{answer}</p>
          </div>
          
    </div>
  );
};

