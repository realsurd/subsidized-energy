import PageMaxWidth from "@/components/page-max-width";
import React from "react";

const Analytics = () => {
  return (
    <PageMaxWidth>
      <div className="m-5">
        <div className="flex flex-col w-full max-w-[1124px] items-start gap-6 relative">
          <header className="relative w-full">
            <h1 className="font-['HK_Grotesk-Bold',Helvetica] font-bold text-[#202224] text-[32px] tracking-[-0.11px] leading-normal">
              Analytics
            </h1>
          </header>
        </div>
      </div>
    </PageMaxWidth>
  );
};

export default Analytics;
