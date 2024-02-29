import { Star, StarIcon } from "lucide-react";
import React from "react";

const TestimonialSection = () => {
  return (
    <div className="mx-auto max-w-4xl space-y-12 py-24 xl:max-w-6xl">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">
          What customers say...
        </h1>
        <h3 className="text-[#344054]">Lorem ipsum dolor sit amet.</h3>
      </div>
      <div className="flex gap-x-20">
        <div id="card-testimonial" className="space-y-4">
          <div className="flex gap-x-1">
            <StarIcon size={20} fill="" />
            <StarIcon size={20} fill="" />
            <StarIcon size={20} fill="" />
            <StarIcon size={20} fill="" />
            <StarIcon size={20} fill="" />
          </div>
          <p className="text-base font-semibold">
            Purchasing tickets through concert apps is a breeze. The convenience
            of browsing events, selecting seats, and securing tickets in a few
            taps is a game-changer. No more waiting in long lines or dealing
            with paper tickets.
          </p>
          <div className="flex items-center gap-x-4">
            <div className="h-10 w-10 rounded-full bg-slate-300"></div>
            <div className="">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Manager Specialist</p>
            </div>
          </div>
        </div>
        <div id="card-testimonial" className="space-y-4">
          <div className="flex gap-x-1">
            <StarIcon size={20} fill="" />
            <StarIcon size={20} fill="" />
            <StarIcon size={20} fill="" />
            <StarIcon size={20} fill="" />
            <StarIcon size={20} fill="" />
          </div>
          <p className="text-base font-semibold">
            The ability to access a wide range of concerts and events at your
            fingertips is impressive. With real-time updates on availability and
            instant booking confirmation, you can plan your entertainment
            effortlessly. The variety of payment options and secure transactions
            add to the seamless experience.
          </p>
          <div className="flex items-center gap-x-4">
            <div className="h-10 w-10 rounded-full bg-slate-300"></div>
            <div className="">
              <p className="font-semibold">John Doe</p>
              <p className="text-sm text-gray-500">Manager Specialist</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;
