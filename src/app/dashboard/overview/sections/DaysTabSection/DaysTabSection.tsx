"use client";

import React, { JSX, useState } from "react";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabItems = [
  { value: "today", label: "Today" },
  { value: "this-week", label: "This week" },
  { value: "this-month", label: "This month" },
  { value: "this-year", label: "This Year" },
];

export const DaysTabSection = (): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState("this-week");

  return (
    <Tabs value={selectedTab} onValueChange={setSelectedTab} className="min-w-[356px]  ">
      <TabsList className="inline-flex h-12 items-center p-1.5  w-full justify-start bg-white rounded-2xl border border-solid border-[#e3e5e8]  shadow">
        {tabItems.map((tab) => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            className="inline-flex items-center justify-center gap-2.5 px-4 py-2.5 rounded-2xl data-[state=active]:bg-[#E3E5E8] data-[state=inactive]:bg-transparent  font-medium text-sm tracking-[0] leading-[normal] data-[state=active]:text-[#111827] cursor-pointer data-[state=inactive]:text-color-palettesecondary-text data-[state=active]:shadow-none transition-all duration-500 "
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
};
