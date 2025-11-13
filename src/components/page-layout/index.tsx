"use client"; // required if using hooks like usePathname

import Footer from "../footer";
import Navbar from "../navbar";
import { usePathname } from "next/navigation";

interface PageLayoutProps {
  children: React.ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  const pathname = usePathname();

  // Define pages where navbar and footer should be hidden
  const hiddenPaths = [
    "/dashboard/overview",
    "/dashboard/analytics",
    "/dashboard/marketplace",
    "/dashboard/leaderboard",
    "/dashboard/profile",
    "/dashboard/transactions",
    "/dashboard/settings",
  ];

  // Check if current pathname matches any of them
  const hideNavbarFooter = hiddenPaths.includes(pathname);

  return (

    <div className="flex flex-col min-h-screen">
      <Navbar />

    <div className="flex flex-col min-h-screen bg-white text-black shadow-md">
      {!hideNavbarFooter && <Navbar />}
      {children}
      {!hideNavbarFooter && <Footer />}
      </div>
      </div>
  );
}
