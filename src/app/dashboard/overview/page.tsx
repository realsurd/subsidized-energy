import PageMaxWidth from "@/components/page-max-width";
import React from "react";
import { Separator } from "../../../components/ui/separator";
import { AnalyticsSection } from "./sections/AnalyticsSection";
import { DaysTabSection } from "./sections/DaysTabSection";
import { OverviewSection } from "./sections/OverviewSection";

const Overview = () => {
  return (
    <PageMaxWidth>
      <div className="m-5  px-2">
        <div className="flex flex-col w-full max-w-[1124px] items-start gap-6 relative">
          <header className="relative w-full">
            <h1 className=" font-bold text-[#202224] text-[32px] tracking-[-0.11px] leading-normal">
              Overview
            </h1>
          </header>

          <DaysTabSection />

          <OverviewSection />

          <div className="flex w-full items-center gap-4 relative">
            <h2 className=" font-medium text-black text-xl tracking-[0] leading-normal whitespace-nowrap">
              Analytics
            </h2>
            <Separator className="flex-1" />
          </div>

          <AnalyticsSection />

          <footer className="flex items-center justify-center gap-2.5 relative w-full">
            <p className=" font-semibold text-[#6B7280] text-sm tracking-[0] leading-normal text-center">
              Powered by Base · Daonergy Labs © {new Date().getFullYear()} – All Rights Reserved.
            </p>
          </footer>
        </div>
      </div>
    </PageMaxWidth>
  );
};

export default Overview;
