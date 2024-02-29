"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { LogIn } from "lucide-react";

interface NavbarProps {
  session?: string | null;
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ session, className }) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mengatur titik scroll, misal 50px
      const shouldBeScrolled = window.scrollY > 50;

      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    // Menambahkan event listener ketika komponen dimuat
    window.addEventListener("scroll", handleScroll);

    // Membersihkan event listener ketika komponen di-unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

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
    <div
      className={cn(
        "sticky top-0 z-50 flex h-[80px] w-full border-b px-6 py-4",
        className,
        isScrolled ? "bg-white" : "bg-transparent", // Mengganti warna latar berdasarkan state isScrolled
      )}
    >
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
          <div className="flex space-x-2">
            <Link
              className="flex items-center justify-center gap-x-2  rounded-[8px] bg-[#867A70] px-3 py-2 text-base font-medium text-white"
              href="/sign-in"
            >
              Sign in
              <LogIn size={20} />
            </Link>
            {/* <Link
              className="rounded-md bg-black px-4 py-2 text-gray-50"
              href="/sign-up"
            >
              Sign Up
            </Link> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
