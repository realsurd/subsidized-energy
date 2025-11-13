import { CalendarIcon, ChevronDownIcon } from "lucide-react";
import React, { JSX } from "react";
import { Button } from "../../../../../components/ui/button";
import { Card, CardContent } from "../../../../../components/ui/card";

const yAxisLabels = ["16", "14", "12", "10", "8", "6"];
const xAxisLabels = ["1", "2", "3", "4", "5", "6", "7"];

const legendItems = [
  {
    color: "bg-color-paletteprimary",
    borderColor: "border-green-500",
    label: "Generated Energy kWh",
  },
  {
    color: "bg-color-palettesecondary",
    borderColor: "border-orange-500",
    label: "Consumed Energy kWh",
  },
];

const distributionData = [
  {
    color: "bg-color-paletteprimary",
    borderColor: "border-green-500",
    label: "Generated",
    value: "0 kWh",
    percentage: "0%",
    percentageColor: "text-color-paletteprimary",
  },
  {
    color: "bg-color-palettesecondary",
    borderColor: "border-orange-500",
    label: "Consumed",
    value: "0 kWh",
    percentage: "0%",
    percentageColor: "text-color-palettesecondary",
  },
  {
    color: "bg-color-paletteaccent",
    borderColor: "border-blue-500",
    label: "Excess",
    value: "0 kWh",
    percentage: "0%",
    percentageColor: "text-color-paletteaccent",
  },
];

export const AnalyticsSection = (): JSX.Element => {
  return (
    <section className="flex w-full items-center gap-6 relative">
      <Card className="flex flex-col flex-1 items-start gap-2 pt-8 pb-4 px-4 relative bg-white rounded-2xl overflow-hidden border border-solid border-[#e3e5e8]">
        <CardContent className="relative w-full p-0 flex flex-col gap-2">
          <h2 className="w-fit font-['HK_Grotesk-SemiBold',Helvetica] font-semibold text-black text-2xl text-left tracking-[0] leading-[normal]">
            Energy Usage Vs Generation
          </h2>

          <div className="relative self-stretch w-full h-7 flex justify-end gap-2">
            <Button
              variant="outline"
              className="h-7 items-center gap-1 px-2.5 py-[9px] bg-[#fcfcfc] rounded border-[0.6px] border-solid border-neutral-300"
            >
              <span className="font-['HK_Grotesk-Medium',Helvetica] font-medium text-color-palettesecondary-text text-xs tracking-[0] leading-2.5 whitespace-nowrap">
                October
              </span>
              <ChevronDownIcon className="w-[18px] h-[18px]" />
            </Button>

            <Button
              variant="outline"
              className="h-7 items-center gap-1 px-2.5 py-[9px] bg-[#fcfcfc] rounded border-[0.6px] border-solid border-neutral-300"
            >
              <CalendarIcon className="w-[18px] h-[18px]" />
            </Button>
          </div>

          <div className="flex flex-col items-start relative flex-1 self-stretch w-full">
            <div className="flex items-center relative flex-1 self-stretch w-full">
              <div className="inline-flex flex-col items-end justify-between px-1 py-0 relative self-stretch flex-[0_0_auto]">
                {yAxisLabels.map((label, index) => (
                  <div
                    key={`y-axis-${index}`}
                    className={`w-fit whitespace-nowrap relative font-['HK_Grotesk-Regular',Helvetica] font-normal text-[#000000b2] text-xs tracking-[0] leading-[normal] ${
                      index === 0 ? "-mt-px" : ""
                    }`}
                  >
                    {label}
                  </div>
                ))}
              </div>

              <div className="relative flex-1 h-[255px] flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <img
                    className="w-[120px] h-[90px]"
                    alt="Chart"
                    src="https://res.cloudinary.com/dlinprg6k/image/upload/v1762516273/chart-3_h2c6ix.png"
                  />
                  <div className="font-['HK_Grotesk-Regular',Helvetica] font-normal text-color-palettesecondary-text text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    No Data to show!
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start pl-[29px] pr-0 pt-0 pb-2 relative self-stretch w-full flex-[0_0_auto] -mt-0.5">
              {xAxisLabels.map((label, index) => (
                <div
                  key={`x-axis-${index}`}
                  className="flex flex-col items-end relative flex-1"
                >
                  <div
                    className={`self-stretch text-center relative font-['HK_Grotesk-Regular',Helvetica] font-normal text-[#000000b2] text-xs tracking-[0] leading-[normal] ${
                      index === 0 ? "-mt-px" : ""
                    }`}
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-start justify-center gap-[0px_0px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex flex-wrap items-center justify-center gap-[0px_8px] px-2 py-0 relative flex-[0_0_auto]">
              {legendItems.map((item, index) => (
                <div
                  key={`legend-${index}`}
                  className="inline-flex items-center gap-1 p-1 relative flex-[0_0_auto]"
                >
                  <div className="relative w-4 h-4">
                    <div
                      className={`absolute top-[7px] left-0 w-4 h-0.5 ${item.color}`}
                    />
                    <div className="absolute top-2 left-2 w-px h-px flex">
                      <div
                        className={`-mt-1 w-2 h-2 -ml-1 bg-white rounded border border-solid ${item.borderColor}`}
                      />
                    </div>
                  </div>
                  <div className="relative w-fit font-['HK_Grotesk-Regular',Helvetica] font-normal text-[#000000b2] text-xs tracking-[0] leading-[normal] whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="inline-flex items-center gap-2.5 px-[18px] py-8 relative self-stretch flex-[0_0_auto] bg-color-palettewhite rounded-2xl overflow-hidden border border-solid border-[#e3e5e8]">
        <CardContent className="flex flex-col w-[315px] items-center gap-[43px] relative p-0">
          <h2 className="relative w-[305px] -mt-px font-['HK_Grotesk-SemiBold',Helvetica] font-semibold text-[#111827] text-2xl tracking-[0.30px] leading-[normal]">
            Energy Distribution Overview
          </h2>

          <img
            className="relative w-[155px] h-[155px]"
            alt="Pie chart"
            src="https://res.cloudinary.com/dlinprg6k/image/upload/v1762513851/Pie_Chart_ok7v8f.png"
          />

          <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
            {distributionData.map((item, index) => (
              <div
                key={`distribution-${index}`}
                className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]"
              >
                <div className="gap-[5px] inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-4 h-4">
                    <div
                      className={`absolute top-[7px] left-0 w-4 h-0.5 ${item.color}`}
                    />
                    <div className="absolute top-2 left-2 w-px h-px flex">
                      <div
                        className={`-mt-1 w-2 h-2 -ml-1 bg-white rounded border border-solid ${item.borderColor}`}
                      />
                    </div>
                  </div>
                  <div className="relative w-fit -mt-px font-['HK_Grotesk-SemiBold',Helvetica] text-color-palettedark-text text-base tracking-[0.30px] leading-[normal] whitespace-nowrap">
                    {item.label}
                  </div>
                </div>
                <div className="gap-1.5 inline-flex items-center relative flex-[0_0_auto]">
                  <div className="relative w-fit -mt-px font-['HK_Grotesk-Medium',Helvetica] font-medium text-color-palettesecondary-text text-base tracking-[0.30px] leading-[normal] whitespace-nowrap">
                    {item.value}
                  </div>
                  <div
                    className={`relative w-fit -mt-px font-['HK_Grotesk-SemiBold',Helvetica] font-semibold text-base tracking-[0.30px] leading-[normal] whitespace-nowrap ${item.percentageColor}`}
                  >
                    {item.percentage}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};
