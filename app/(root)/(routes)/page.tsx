import MidLayout from "@/components/own/MidLayout";
import Navbar from "@/components/own/Navbar";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { SearchIcon } from "lucide-react";
import { faker } from "@faker-js/faker";
import CardTicket from "@/app/(root)/components/CardTicket";

const HomePage = async () => {
  const { userId } = auth();

  const ticketname = faker.location.city();

  return (
    <div className="bg-white">
      <Navbar />
      <MidLayout>
        <main className="mid-gradient mx-auto h-[2400px] w-full">
          <section
            id="hero-section"
            className="relative z-40 grid grid-cols-2 "
          >
            <div className="space-y-2 p-7">
              <h1 className="z-50 text-5xl">Get ur latest ticket here</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, quas!
              </p>
            </div>
            <div className="side-section">
              <div className="gradient-card flex h-[10rem] flex-col items-center justify-center gap-y-2  px-4 py-6 shadow-lg">
                <div style={{ zIndex: 2 }}>
                  <Image
                    src="/ticket.svg"
                    alt="heroicon-ticket"
                    width={50}
                    height={100}
                  />
                  <h3>Get your ticket cheaper than others in the world!</h3>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-4 grid h-[20rem] w-full grid-cols-6 gap-x-2 bg-orange-300">
            <div className="col-span-2">
              <div className="space-y-2 p-2 pt-10">
                <h1 className="text-center text-3xl">Dynamic Title</h1>
                <form className="relative flex flex-col gap-3 border-2 border-red-300">
                  <label htmlFor="search-ticket">Search ticket</label>
                  <div className="absolute bottom-2 left-2">
                    <SearchIcon />
                  </div>
                  <input
                    id="search-ticket"
                    type="text"
                    className="rounded-xl border-none bg-white px-2 py-2 pl-12 text-gray-900 focus:outline-none focus:ring-1 focus:ring-red-500 focus:ring-offset-2"
                  />
                </form>
              </div>
            </div>

            <div className="col-span-4 py-4">
              <h1 className="text-2xl">List Ticket</h1>
              <div className="px-2 py-4">
                <CardTicket ticketname={ticketname} />
              </div>
            </div>
          </section>
        </main>
      </MidLayout>
    </div>
  );
};

export default HomePage;
