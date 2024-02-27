"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { cn } from "@/lib/utils";

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
      href: "/dashboard",
      label: "Dashboard",
      active: pathname === "/dashboard",
    },
    {
      href: "/events",
      label: "Events",
      active: pathname === "/events",
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
        <Link href="/">
          <Image
            src="/assets/Logoipsum.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </Link>
        <nav className="flex items-center gap-8">
          {router.map((route) => (
            <Link
              href={route.href}
              key={route.label}
              className={cn(
                "font-medium",
                route.active
                  ? "rounded-2xl bg-black px-4 py-2 text-gray-100"
                  : "",
              )}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        {session ? (
          <UserButton />
        ) : (
          <div className="space-x-2">
            <Link
              className="rounded-md border border-black px-4 py-2"
              href="/sign-in"
            >
              Sign In
            </Link>
            <Link
              className="rounded-md bg-black px-4 py-2 text-gray-50"
              href="/sign-up"
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
