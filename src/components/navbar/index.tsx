import React from "react";
import PageMaxWidth from "../page-max-width";
import Link from "next/link";

const Navbar = () => {
  return (
    <PageMaxWidth>
      <nav className="flex justify-between items-center w-full p-5 bg-white text-black ">
        <Link href="/">
          <h1 className="font-bold">Logo</h1>
        </Link>

        <div className="flex gap-8 items-center">
          <Link href="/marketplace">
            <div>Marketplace</div>
          </Link>

          <Link href="/about">
            <div>About</div>
          </Link>

          <Link href="/community">
            <div>Community</div>
          </Link>

          <Link href="/news">
            <div>News</div>
          </Link>
        </div>
        <div>Connect Wallet</div>
      </nav>
    </PageMaxWidth>
  );
};

export default Navbar;
