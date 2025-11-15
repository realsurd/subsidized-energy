import React, { JSX } from "react";
import { Card, CardContent } from "@/components/ui/card";

export const OverviewSection = (): JSX.Element => {
  return (
    <section className="w-full ">
      <div className="grid grid-cols-4 gap-4">
        {[...Array(4)].map((_, index) => (
          <Card
            key={index}
            className="relative shadow-[6px_6px_54px_#0000000d] overflow-hidden border-0"
          >
            <CardContent className="relative flex items-center justify-center px-5 py-6 min-h-[199px]">
              <div className="w-full max-w-[214px]  font-normal text-color-palettesecondary-text text-sm text-center tracking-[0] leading-[normal]">
                <span className="font-medium text-gray-500">
                  No data recorded, yet! <br />
                </span>
                <span className=" font-bold text-green-500">
                  Connect wallet
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
