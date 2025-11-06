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
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import ConnectWalletModal from "../wallet-connect-modal";
// import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

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
    <Dialog>
      <PageMaxWidth>
        <section
          className={`fixed w-full left-[50%] -translate-x-[50%] md:w-[95%] flex justify-between items-center z-30   py-2.5 px-4 transition-all font-sora duration-500  bg-white/5  rounded-4xl backdrop-blur-md   text-black shadow-lg  ${
            isScroll
              ? "md:max-w-[960px] md:px-8 shadow-nav md:top-9 bg-white/5 rounded-4xl backdrop-blur-md "
              : "md:max-w-[1200px] max-w-full   shadow-none md:top-3 md:rounded-none  md:bg-transparent md:backdrop-blur-none"
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
            <DialogTrigger asChild>
              <Link href={"/"}>
                <Button className="text-sm md:text-[16px] w-[200px] h-[60px] font-normal md:px-5 text-white  rounded-full  py-4 px-4 whitespace-nowrap cursor-pointer ">
                  Connect Wallet
                </Button>
              </Link>
            </DialogTrigger>
              <ConnectWalletModal />
            
          </section>
          <div
            className="flex cursor-pointer md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            {!isOpen && <AlignJustify className="sm:size-7 size-5" />}
          </div>
          <NavMobile isOpen={isOpen} handleLinkClick={handleLinkClick} />
        </section>
      </PageMaxWidth>
    </Dialog>
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
      <Dialog>
        <aside
          className={`fixed top-0 right-0 h-screen w-full bg-white/90  backdrop-blur-xl   shadow-xl z-50 flex flex-col pt-5 pb-10 rounded-l-2xl transition-transform duration-300 ease-out md:hidden 
        ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <div className=" flex justify-between p-3  w-full mb-10 items-center">
            <Image
              src="https://res.cloudinary.com/dk5mfu099/image/upload/v1762019013/Frame_1000011524_ekqlru.png"
              alt="logo"
              width={100}
              height={70}
            />
            <div
              className="flex cursor-pointer md:hidden  items-center"
              onClick={handleLinkClick}
            >
              {isOpen && <X className="size-8 " />}
            </div>
          </div>
          <nav className="flex flex-col space-y-2   ">
            {navbarItems.map((link, index) => (
              <Link
                href={link.link}
                key={index}
                className="px-6 py-3 text-lg font-medium text-gray-800 hover:text-primary transition "
                onClick={handleLinkClick}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}

          <div className="mt-4 px-6">
            <DialogTrigger asChild>
              <Link href="/">
                <Button
                  onClick={handleLinkClick}
                  className="w-full text-white bg-primary hover:bg-primary/90  py-3 text-sm h-[60px]"
                >
                  Connect Wallet
                </Button>
              </Link>
            </DialogTrigger>
            <ConnectWalletModal />
          </div>
        </aside>
      </Dialog>
    </>
  );
};
