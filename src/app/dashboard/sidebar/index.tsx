import Link from "next/link";
import React from "react";
import { LuWallet } from "react-icons/lu";
import { LuLayoutDashboard } from "react-icons/lu";
import { LuChartNoAxesCombined } from "react-icons/lu";
import { FaStore } from "react-icons/fa";
import { CiGift } from "react-icons/ci";
import { LuUserRound } from "react-icons/lu";
import { LuReceiptText } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { FiLogOut } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-80 h-screen bg-white border border-[#E8E8E8] shadow-lg mx-5 mt-5 p-5 flex flex-col overflow-hidden">
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

      <nav className="flex flex-col gap-1 overflow-y-auto flex-1 px-3">
        <Link
          href="/dashboard/overview"
          className="group flex gap-3 items-center px-2 py-2 text-[#6B7280] transition-all duration-300 hover:scale-[1.03] rounded-lg"
        >
          <div className="rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
            <LuLayoutDashboard className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E] " />
          </div>
          <span className="text-base font-medium text-gray-500 transition-all duration-300 group-hover:text-[#22C55E] group-hover:scale-105">
            Overview
          </span>
        </Link>

        <Link
          href="/dashboard/analytics"
          className="group flex gap-3 items-center px-2 py-2 text-[#6B7280] transition-all duration-300 hover:scale-[1.03] rounded-lg"
        >
          <div className="rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
            <LuChartNoAxesCombined className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E] " />
          </div>
          <span className="text-base font-medium text-gray-500 transition-all duration-300 group-hover:text-[#22C55E] group-hover:scale-105">
            Analytics
          </span>
        </Link>

        <Link
          href="/marketplace"
          className="group flex gap-3 items-center px-2 py-2 text-[#6B7280] transition-all duration-300 hover:scale-[1.03] rounded-lg"
        >
          <div className="rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
            <FaStore className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E] " />
          </div>
          <span className="text-base font-medium text-gray-500 transition-all duration-300 group-hover:text-[#22C55E] group-hover:scale-105">
            Marketplace
          </span>
        </Link>

        <Link
          href="/leaderboard"
          className="group flex gap-3 items-center px-2 py-2 text-[#6B7280] transition-all duration-300 hover:scale-[1.03] rounded-lg"
        >
          <div className="rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
            <CiGift className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E]" />
          </div>
          <span className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E] ">
            Leaderboard
          </span>
        </Link>

        <div className="my-2 border-b border-[#E3E5E8]" />

        <Link
          href="/profile"
          className="group flex gap-3 items-center px-2 py-2 text-[#6B7280] transition-all duration-300 hover:scale-[1.03] rounded-lg"
        >
          <div className="rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
            <LuUserRound className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E]" />
          </div>
          <span className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E] ">
            Profile
          </span>
        </Link>

        <Link
          href="/transactions"
          className="group flex gap-3 items-center px-2 py-2 text-[#6B7280] transition-all duration-300 hover:scale-[1.03] rounded-lg"
        >
          <div className="rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
            <LuReceiptText className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E]" />
          </div>
          <span className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E] ">
            Transactions
          </span>
        </Link>

        <Link
          href="/settings"
          className="group flex gap-3 items-center px-2 py-2 text-[#6B7280] transition-all duration-300 hover:scale-[1.03] rounded-lg"
        >
          <div className="rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
            <CiSettings className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E]" />
          </div>
          <span className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#22C55E] ">
            Settings
          </span>
        </Link>

        <Link
          href="/logout"
          className="group flex gap-3 items-center px-2 py-2 text-[#6B7280] transition-all duration-300 hover:scale-[1.03] rounded-lg"
        >
          <div className="rounded-full p-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 shrink-0">
            <FiLogOut className="text-gray-500 text-xl transition-transform duration-300 group-hover:text-[#ff0000] " />
          </div>
          <span className="text-base font-medium text-gray-500 transition-all duration-300 group-hover:text-[#ff0000]  group-hover:scale-105">
            Logout
          </span>
        </Link>

        <div className="my-2 border-b border-[#E3E5E8]" />

        <div className="flex flex-col gap-3 items-center px-2 py-3 text-[#6B7280] shrink-0">
          <h1 className="text-sm font-medium">Follow Us:</h1>
          <div className="flex justify-between items-center w-full gap-6">
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
