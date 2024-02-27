import React from "react";
import MidLayout from "./MidLayout";
import Link from "next/link";

const HeroSection = () => {
  return (
    <MidLayout className="pt-32">
      <section>
        <div className="flex w-full flex-col gap-y-8">
          <div className="space-y-4">
            <h1 className="text-center text-4xl font-bold text-gray-900">
              Manage your customer using AI
            </h1>
            <h3 className="text-center text-lg font-normal text-gray-400">
              Powerful, flexible and data driven. Polio make it easy to build
              the exact CRM your business need
            </h3>
          </div>
          <div className="flex w-full items-center justify-center gap-x-2">
            <Link
              href="#"
              className="border-gray-2 00 rounded-2xl border px-6 py-3 text-gray-400"
            >
              Demo
            </Link>
            <Link
              href="#"
              className="rounded-2xl border bg-gray-900 px-6 py-3 text-gray-100"
            >
              Start for free
            </Link>
          </div>
        </div>
        <div></div>
      </section>
    </MidLayout>
  );
};

export default HeroSection;
