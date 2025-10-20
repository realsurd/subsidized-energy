import PageMaxWidth from "@/components/page-max-width";
import React from "react";

const Marketplace = () => {
  return (
    <PageMaxWidth>
      <div className="flex justify-between items-center w-full ">
        <h1 className="text-5xl font-extrabold text-[#B8860B] drop-shadow-[0_0_10px_rgba(184,134,11,0.8)] animate-pulse">
          MarketPlace
        </h1>
      </div>
    </PageMaxWidth>
  );
};

export default Marketplace;
