import React from "react";
import PageMaxWidth from "../../../components/page-max-width";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className=" bg-white shadow-sm border border-[#E3E5E8] rounded-md mx-5 mt-5 sticky top-0 z-50">
      <nav className="flex justify-between items-center w-full px-8 py-2 text-black">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-1">
          <img
            src="https://res.cloudinary.com/du153mzwk/image/upload/v1762298908/Solar_Panel_Energy_Logo_fypqup.png"
            alt="logo"
            className="w-20 h-16 object-contain"
          />
          <div className="flex flex-col -ml-2 bg-linear-to-r from-[#22C55E] to-[#3B82F6] bg-clip-text text-transparent font-bold leading-none">
            <h1 className="font-(--font-hanken)">Subsidized</h1>
            <p>Energy</p>
          </div>
        </Link>

        {/* Search Bar */}
        <form className="flex items-center w-[400px] bg-white rounded-2xl border border-[#D5D5D5] overflow-hidden shadow-sm">
          <button
            type="submit"
            className="text-[#D5D5D5] px-4 py-2 flex items-center"
          >
            <CiSearch className="w-6 h-6" />
          </button>
          <input
            type="text"
            placeholder="Search..."
            className="grow text-gray-700 placeholder-gray-400 px-4 py-2 focus:outline-none"
          />
        </form>

        {/* Wallet Button */}
        <button className="bg-[#22C55E] text-white rounded-3xl px-6 py-2 font-medium">
          Connect Wallet
        </button>
      </nav>
    </div>
  );
};

export default Header;
