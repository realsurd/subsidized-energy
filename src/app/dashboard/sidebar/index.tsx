"use client"
import Link from "next/link";
import React from "react";
import { LuWallet } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import { sidebarItems } from "@/lib/nav";
import { usePathname } from "next/navigation";



const Sidebar = () =>
{
  const pathname = usePathname();
    const mainItems = sidebarItems.filter((i) => i.section === "main");
    const accountItems = sidebarItems.filter((i) => i.section === "account");
  
  return (
    <div className="w-[240px] h-screen bg-white border border-[#E8E8E8] shadow-lg mx-5 mt-5 py-5 flex flex-col overflow-hidden">
      <div className="flex items-center gap-4 px-5 py-5 shrink-0">
        <div className="w-12 h-12 rounded-full bg-linear-to-r from-[#22C55E] to-[#3B82F6] flex items-center justify-center">
          <LuWallet className="text-white text-2xl" />
        </div>

        <div className="flex flex-col">
          <h1 className="text-[#6B7280] text-sm font-medium">Balance</h1>
          <p className="text-black font-semibold text-lg">200.029 SRE</p>
          <div className="mt-2 border-b-2 w-full text-[#E3E5E8]" />
        </div>
      </div>

      <nav className="flex flex-col  overflow-y-auto flex-1  mt-8 space-y-3">
        {/* 🔹 MAIN MENU */}
        {mainItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-2 pl-[40px] h-[50px] text-gray-600 font-semibold text-sm hover:text-green-600 relative py-2 pl-2  ${
                isActive ? "text-green-600" : ""
              }`}
            >
              {/* RIGHT ACTIVE BORDER */}
              <span
                className={`absolute left-0 top-0 h-full w-1 rounded-r-[12px]  ${
                  isActive ? "bg-green-600" : "bg-transparent"
                }`}
              />
              <Icon size={18} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}

        {/* 🔹 DIVIDER */}
        <div className="my-4 h-px w-full bg-gray-200" />

        {/* 🔹 ACCOUNT MENU */}
        {accountItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname.startsWith(item.path);

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center gap-2 pl-[40px] h-[50px]   text-gray-600 hover:text-green-600 relative py-2 pl-2 ${
                isActive ? "text-green-600" : ""
              }`}
            >
              {/* RIGHT ACTIVE BORDER */}
              <span
                className={`absolute right-0 top-0 h-full w-1 rounded-l ${
                  isActive ? "bg-green-600" : "bg-transparent"
                }`}
              />
              <Icon size={18} />
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}

        <div className="flex flex-col gap-5 px-6 py-3 text-[#6B7280] shrink-0 px-4  mt-8">
          <h1 className="text-sm font-semibold text-black">Follow Us:</h1>
          <div className="flex justify-between items-center w-full gap-3">
            <div className="flex justify-center border border-[#F97316] rounded-full p-2 text-lg text-[#F97316]">
              <Link href="">
                <FaInstagram />
              </Link>
            </div>

            <div className="flex justify-center border border-[#111827] rounded-full p-2 text-lg text-[#111827]">
              <Link href="">
                <BsTwitterX />
              </Link>
            </div>
            <div className="flex justify-center border border-[#3B82F6] rounded-full p-2 text-lg text-[#3B82F6]">
              <Link href="">
                <RiTelegram2Fill />
              </Link>
            </div>

            <div className="flex justify-center border bg-[#4170D8] rounded-full p-2 text-lg text-[#D4D7E0]">
              <Link href="">
                <FaDiscord />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
