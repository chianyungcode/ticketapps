import MidLayout from "@/components/own/MidLayout";
import Navbar from "@/components/own/Navbar";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { SearchIcon } from "lucide-react";
import { css } from "@emotion/react";

const HomePage = async () => {
  const { userId } = auth();

  return (
    <div className="bg-white">
      <Navbar session={userId} />
      <MidLayout>
        <main className="main mx-auto h-[2400px] w-full">
          <section id="hero-section" className="grid grid-cols-2 ">
            <div className="space-y-2 p-7">
              <h1 className="text-5xl">Get ur latest ticket here</h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Inventore, quas!
              </p>
            </div>
            <div className="card-gradient">
              <div className="gradient" style={{ zIndex: 1 }} />
              {/* <div className="move-box"></div> */}
              <div className="flex h-[10rem] flex-col items-center justify-center gap-y-2 px-4 py-6 shadow-lg">
                <Image
                  src="/ticket.svg"
                  alt="heroicon-ticket"
                  width={50}
                  height={100}
                />
                <h3>Get your ticket cheaper than others in the world!</h3>
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

            <div
              className={css`
                grid-column: 3 / span 4;
                background-color: antiquewhite;
                margin: 0.25rem 0;
                width: 50rem;
                height: 100%;
              `}
            >
              <h1>Hets</h1>
            </div>
          </section>
        </main>
      </MidLayout>
    </div>
  );
};

export default HomePage;
