import React from "react";
import MidLayout from "./MidLayout";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUp, ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-center justify-center gap-y-8 py-24 xl:max-w-6xl">
      <p className="flex items-center rounded-2xl border px-4 py-1.5 font-bold">
        <span className="mr-1 bg-gradient-to-b from-transparent to-red-300">
          200k+
        </span>
        Tickets sold out for Radwimps Event
      </p>
      <h1 className="text-center text-6xl font-semibold tracking-tight">
        Grab the ticket where you need
      </h1>
      <h1 className="rounded-2xl border-2 border-[#D0D5DD] bg-[#867A70] px-4 py-3 text-center text-6xl font-semibold tracking-tight text-white">
        enjoy the concert
      </h1>
      <p className="text-center text-lg font-medium text-[#475467]">
        Explore a world of music at your fingertips. From rock to pop, jazz to
        hip-hop, weve got you covered. Find your favorite artists, check out
        upcoming shows, and book your tickets effortlessly.
      </p>
      <Link
        href="#"
        className="group flex items-center justify-center gap-x-1.5 rounded-lg bg-[#867A70] px-4 py-2.5 text-lg font-semibold text-white transition-all hover:scale-105"
      >
        Explore event
        <ArrowUpRight
          size={20}
          className="transition-all group-hover:-translate-y-1 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
};

export default HeroSection;
