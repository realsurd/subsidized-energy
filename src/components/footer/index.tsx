import { Mail, MessageCircle, Github, Copyright } from "lucide-react";
import PageMaxWidth from "../page-max-width";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

interface socialMediaType {
  name: string;
  icon: string;
  path: string;
}

export default function Footer() {
  const socialMediaIcon: socialMediaType[] = [
    {
      name: "Instagram",
      icon: "/assets/instagram.svg",
      path: "#",
    },
    {
      name: "X",
      icon: "/assets/x.svg",
      path: "#",
    },
    {
      name: "Telegram",
      icon: "/assets/telegram.svg",
      path: "#",
    },
    {
      name: "Discord",
      icon: "/assets/discord.svg",
      path: "#",
    },
  ];
  return (
    <footer className=" bg-[#f4f4f4] py-8 lg:py-12 ">
      <PageMaxWidth>
        <div className="px-6 sm:px-8 lg:px-12 py-12 lg:py-16 bg-[#001324] text-white rounded-3xl">
          <div className="max-w-7xl mx-auto">
            {/* Top Section - Logo and Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-4 ">
              {/* Logo */}
              <div>
                <Image
                  src="https://res.cloudinary.com/dk5mfu099/image/upload/v1762496834/Logo_Preview_hhlrv0.png"
                  alt="logo"
                  width={140}
                  height={70}
                  className="object-cover "
                />
              </div>

              <div className="flex  gap-10 items-center py-1 flex-col sm:flex-row sm:justify-between w-full sm:w-auto">
                {/* Navigation Links */}
                <nav className="flex  gap-6 flex-wrap lg:gap-10 text-sm lg:text-base inter">
                  <Link
                    href="#"
                    className="hover:text-teal-400 transition-colors tetx-[20px]"
                  >
                    Events
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-teal-400 transition-colors"
                  >
                    About Us
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-teal-400 transition-colors"
                  >
                    FAQ
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Blog
                  </Link>
                  <Link
                    href="#"
                    className="hover:text-teal-400 transition-colors"
                  >
                    Forum
                  </Link>
                </nav>

                {/* Join Button */}
                <Button className="px-6 py-4 bg-white text-slate-950 font-bold rounded-full hover:bg-gray-100 transition-colors whitespace-nowrap inter text-[18px] h-[50px]">
                  Join our community
                </Button>
              </div>
            </div>
            <div className="border-b border-gray-700 my-4" />
            {/* Middle Section - Social Icons */}
            <div className="flex justify-end gap-4 py-8 lg:py-8">
              {/* Instagram */}
              {socialMediaIcon.map((socialMedia, idx) => (
                <Link
                  href={socialMedia.path}
                  key={idx}
                  aria-label={socialMedia.name}
                  className="hover:opacity-75 transition-opacity"
                >
                  <Image
                    src={socialMedia.icon}
                    alt={socialMedia.name}
                    width={45}
                    height={45}
                  />
                </Link>
              ))}
            </div>

            {/* Bottom Section - Copyright and Links */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs lg:text-sm text-gray-400 font-trap">
              <p className="flex items-center gap-2">
                {" "}
                <span className="flex ">
                  &copy;
                </span> {new Date().getFullYear()} Subsidized Energy, All Rights
                Reserved.
              </p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="hover:text-teal-400 transition-colors">
                  Disclaimers
                </a>
              </div>
            </div>
          </div>
        </div>
      </PageMaxWidth>
    </footer>
  );
}
