"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface NavbarProps {
  session: string | null;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  const pathname = usePathname();

  const router = [
    {
      href: "/",
      label: "Home",
      active: pathname === "/",
    },
    {
      href: "/events",
      label: "Events",
      active: pathname === "/events",
    },
    {
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
    },
    {
      href: "/transaction",
      label: "Transaction",
      active: pathname === "/transaction",
    },
    {
      href: "/experimentalmlbb",
      label: "MLBB",
      active: pathname === "/experimentalmlbb",
    },
  ];

  return (
    <div className="sticky top-0 z-50 flex h-[80px] w-full border-b bg-white px-6 py-4">
      <div className="mx-auto flex max-w-6xl flex-1 items-center justify-between">
        <h2>Logo</h2>
        <nav className="flex items-center gap-8 bg-teal-400">
          {router.map((route) => (
            <Link href={route.href} key={route.label}>
              {route.label}
            </Link>
          ))}
        </nav>
        {session ? (
          <div>Logged in</div>
        ) : (
          <div className="space-x-4">
            <Link
              className="rounded-md border border-black px-4 py-2"
              href="sign-in"
            >
              Sign In
            </Link>
            <Link
              className="rounded-md bg-black px-4 py-2 text-gray-50"
              href="sign-up"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
