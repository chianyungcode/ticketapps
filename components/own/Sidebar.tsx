"use client";

import {
  ArrowRightLeft,
  CreditCard,
  Inbox,
  LayoutDashboard,
  Ticket,
} from "lucide-react";
import React from "react";
import SidebarNav from "../reusable/SidebarNav";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();

  const generalTabs = [
    {
      title: "Dashboard",
      icon: <LayoutDashboard size={15} className="text-gray-900" />,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      title: "Transaction",
      icon: <ArrowRightLeft size={15} className="text-gray-900" />,
      href: "/transaction",
      active: pathname === "/transaction",
    },
    {
      title: "Events",
      icon: <Ticket size={15} className="text-gray-900" />,
      href: "/events",
      active: pathname === "/events",
    },
    {
      title: "Inbox",
      icon: <Inbox size={15} className="text-gray-900" />,
      href: "/inbox",
      active: pathname === "/inbox",
    },
    {
      title: "Payment Method",
      icon: <CreditCard size={15} className="text-gray-900" />,
      href: "/payment",
      active: pathname === "/payment",
    },
  ];

  return (
    <nav
      className=" fixed z-50 mt-20 flex flex-col border-r border-gray-200 bg-white sm:w-[100px] 2xl:w-[320px]"
      style={{ height: "calc(100vh - 80px)" }}
    >
      <h1 className="border-b p-4 text-center text-xl font-bold">Store</h1>
      <div className="space-y-2 px-4 py-2">
        <h3 className="ml-1 text-sm font-normal text-gray-400">General</h3>

        <div>
          {generalTabs.map((tab) => (
            <SidebarNav
              key={tab.title}
              title={tab.title}
              icon={tab.icon}
              href={tab.href}
              active={tab.active}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
