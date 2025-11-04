"use client";
import { useEffect, useState } from "react";
// import Logo from './logo'
// import NavBar from './navBar'
import Image from "next/image";
import Link from "next/link";
import { AlignJustify, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { navbarItems } from "@/lib/nav";
import PageMaxWidth from "../page-max-width";

const HeaderSection = () => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 20);
    };
    if (typeof window !== "undefined") {
      setIsScroll(window.scrollY > 20);
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false); // close the menu after clicking a link
  };
  return (
    <PageMaxWidth>
      <section
        className={`fixed left-[50%] -translate-x-[50%] w-[95%] flex justify-between items-center z-30   py-2.5 px-4 transition-all font-sora duration-500  bg-white/5  rounded-4xl backdrop-blur-md   text-black shadow-lg  ${
          isScroll
            ? "md:max-w-[960px] max-w-[90%] px-8 shadow-nav top-9 bg-white/5 rounded-4xl backdrop-blur-md "
            : "md:max-w-[1200px] max-w-full   shadow-none top-3 md:rounded-none  md:bg-transparent md:backdrop-blur-none"
        }`}
      >
        <Link href={"/"}>
          <div className="w-[140px]  h-[60px] flex  items-center ">
            <Image
              src="https://res.cloudinary.com/dk5mfu099/image/upload/v1762019013/Frame_1000011524_ekqlru.png"
              alt="logo"
              width={100}
              height={70}
            />
          </div>
        </Link>
        <section className="items-center justify-center hidden gap-9 px-4 py-3 text-base font-normal  md:flex flex-1 md:mx-3 ">
          {navbarItems.map((link, index) => (
            <Link
              href={link.link}
              key={index}
              className="whitespace-nowrap text-[16px] md:text-[20px] "
            >
              {link.title}
            </Link>
          ))}
        </section>
        <section className="items-center justify-center hidden gap-6 md:flex">
          <Link href={"/"}>
            <Button className="text-sm md:text-[16px] w-[200px] h-[60px] font-normal md:px-5 text-white  rounded-full  py-4 px-4 whitespace-nowrap cursor-pointer ">
              Connect Wallet
            </Button>
          </Link>
        </section>
        <div
          className="flex cursor-pointer md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <X className="sm:size-7 size-5" />
          ) : (
            <AlignJustify className="sm:size-7 size-5" />
          )}
        </div>
        <NavMobile isOpen={isOpen} handleLinkClick={handleLinkClick} />
      </section>
    </PageMaxWidth>
  );
};

export default HeaderSection;
interface NavMobileProps {
  isOpen: boolean;
  handleLinkClick: () => void;
}
const NavMobile = ({ isOpen, handleLinkClick }: NavMobileProps) => {
  return (
    <>
      <section
        className="absolute md:hidden flex flex-col items-start justify-start px-2 py-6 top-20 w-full   shadow-nav  bg-white rounded-4xl backdrop-blur-md  transition-all duration-500 z-40 text-black h-full min-h-screen"
        style={{ right: isOpen ? 0 : "-200%" }}
      >
        {navbarItems.map((link, index) => (
          <Link
            href={link.link}
            key={index}
            className="whitespace-nowrap px-5 py-3.5  w-full text-base  "
            onClick={handleLinkClick}
          >
            {link.title}
          </Link>
        ))}
        <section className="flex flex-col items-start justify-start w-full gap-4">
          <Link href={"/"}>
            <Button className="text-sm font-normal text-white ml-3 bg-primary border border-primary rounded-lg py-2.5 px-4 whitespace-nowrap cursor-pointer">
              Download Now
            </Button>
          </Link>
        </section>
      </section>
      <div
        className={`fixed -bottom-10 -top-10 -left-10 w-[200vw] min-h-[300vh] md:hidden  bg-black/30 backdrop-blur-md transition-all duration-500 ${
          isOpen ? "block " : "hidden"
        }`}
        onClick={handleLinkClick}
      ></div>
    </>
  );
};
