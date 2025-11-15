import Header from "./header/header";
import Sidebar from "./sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" min-h-screen bg-gray-50 ">
      {/* Header on top */}
      <Header />
      {/* Main section below (Sidebar + content) */}
      <div className="flex  min-h-screen  ">
        <Sidebar />
        <main className=" flex-1">{children}</main>
      </div>
    </div>
  );
}
