import { navigationlinks } from "@/constant";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import { MoveUpRight } from "lucide-react";

const Navbar = () => {
  const { userId } = auth();

  return (
    <div className="sticky top-0 z-50 flex h-[80px] w-full bg-white px-6 py-4">
      <div className="mx-auto flex max-w-6xl flex-1 items-center justify-between">
        <h2>{userId}</h2>
        <nav className="flex items-center justify-between gap-8">
          {navigationlinks.map((item, index) => (
            <Link
              className="cursor-pointer"
              key={item.name}
              href={index === 3 ? userId + "/" : item.href}
            >
              {item.name}
            </Link>
          ))}
          <Separator orientation="vertical" className="h-4 bg-black" />
          {userId ? (
            <UserButton />
          ) : (
            <>
              <Link href={"/sign-in"}>Sign in</Link>
              <Link
                href="/sign-up"
                className="group flex items-center justify-center gap-1 rounded-3xl bg-black px-6 py-[12px] text-white"
              >
                Sign up
                <MoveUpRight className="h-4 w-4 transition group-hover:-translate-y-1 group-hover:translate-x-[0.2rem]" />
              </Link>
            </>
          )}
        </nav>
        {/* <UserButton /> */}
      </div>
    </div>
  );
};

export default Navbar;
