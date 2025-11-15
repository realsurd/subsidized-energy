import {
  LayoutDashboard,
  LineChart,
  Store,
  Trophy,
  User,
  Receipt,
  Settings,
  LogOut,
  LucideIcon,
} from "lucide-react";



type navTypes = {
  title: string;
  link: string;
}[];
export const navbarItems: navTypes = [
  {
    title: "Marketplace",
    link: "/marketplace",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Community",
    link: "/community",
  },
  {
    title: "News",
    link: "/news",
  },
];

// data/sidebarItems.ts
export interface SidebarItem {
  name: string;
  icon: LucideIcon;
  path: string;
  section: string;
}



export const sidebarItems: SidebarItem[] = [
  // 🔹 MAIN SECTION
  {
    name: "Overview",
    icon: LayoutDashboard,
    path: "/dashboard/overview",
    section: "main",
  },
  {
    name: "Analytics",
    icon: LineChart,
    path: "/dashboard/analytics",
    section: "main",
  },
  {
    name: "Marketplace",
    icon: Store,
    path: "/dashboard/marketplace",
    section: "main",
  },
  {
    name: "Leaderboard",
    icon: Trophy,
    path: "/dashboard/leaderboard",
    section: "main",
  },

  // 🔹 ACCOUNT SECTION
  {
    name: "Profile",
    icon: User,
    path: "/dashboard/profile",
    section: "account",
  },
  {
    name: "Transactions",
    icon: Receipt,
    path: "/dashboard/transactions",
    section: "account",
  },
  {
    name: "Settings",
    icon: Settings,
    path: "/dashboard/settings",
    section: "account",
  },
  { name: "Logout", icon: LogOut, path: "/logout", section: "account" },
];
