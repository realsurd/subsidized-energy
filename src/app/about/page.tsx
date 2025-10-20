import PageMaxWidth from "@/components/page-max-width";
import React from "react";

const About = () => {
  return (
    <PageMaxWidth>
      <div className="flex justify-between items-center w-full ">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
          <h1 className="text-5xl font-extrabold text-[#B8860B] drop-shadow-[0_0_10px_rgba(184,134,11,0.8)] animate-pulse">
            About
          </h1>
        </main>
      </div>
    </PageMaxWidth>
  );
};

export default About;
