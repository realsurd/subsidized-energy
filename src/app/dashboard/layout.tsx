import Header from "./header/header";
import Sidebar from "./sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header on top */}
      <Header />

      {/* Main section below (Sidebar + content) */}
      <div className="flex flex-1 overflow-y-auto">
        <Sidebar />

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
