import Image from "next/image";
import React from "react";

const FeatureSection = () => {
  return (
    <section className="bg-[#F1F0EE] py-24">
      <div className="mx-auto w-full max-w-4xl xl:max-w-6xl">
        <h1 className="text-4xl font-bold tracking-tight text-black">
          Perfect app for millenial.
          <span className="block text-[#4C4542]">Never lost your event.</span>
        </h1>
        <div className="flex flex-col items-start gap-y-2 py-8">
          <div className="grid w-full grid-cols-9 gap-x-2 ">
            <div
              id="card"
              className="col-span-6 space-y-2 rounded-3xl bg-[#5D544F] px-10 py-8 text-white"
            >
              <h1 className="text-2xl font-medium tracking-tight text-white">
                Get the best event
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, asperiores.
              </p>
            </div>
            <div
              id="card"
              className="relative col-span-3 space-y-2 rounded-3xl bg-[#5D544F] px-10 pt-8 text-white"
            >
              <h1 className="text-2xl font-medium tracking-tight text-white">
                Create moment
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, asperiores.
              </p>
              <Image
                src="/assets/Illustration.svg"
                alt="svg-illustration"
                width={250}
                height={100}
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-9 gap-x-2 ">
            <div
              id="card"
              className="col-span-3 space-y-2 rounded-3xl bg-[#5D544F] px-10 py-8 text-white"
            >
              <h1 className="text-2xl font-medium tracking-tight text-white">
                Get the best event
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, asperiores.
              </p>
            </div>
            <div
              id="card"
              className="col-span-3 space-y-2 rounded-3xl bg-[#5D544F] px-10 py-8 text-white"
            >
              <h1 className="text-2xl font-medium tracking-tight text-white">
                Get the best event
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, asperiores.
              </p>
            </div>
            <div
              id="card"
              className="col-span-3 space-y-2 rounded-3xl bg-[#5D544F] px-10 pt-8 text-white"
            >
              <h1 className="text-2xl font-medium tracking-tight text-white">
                Get the best event
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, asperiores.
              </p>
              <Image
                src="/assets/Illustration.svg"
                alt="svg-illustration"
                width={250}
                height={100}
              />
            </div>
          </div>
          <div className="grid w-full grid-cols-9 gap-x-2">
            <div
              id="card"
              className="col-span-3 space-y-2 rounded-3xl bg-[#5D544F] px-10 pt-8 text-white"
            >
              <h1 className="text-2xl font-medium tracking-tight text-white">
                Get the best event
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, asperiores.
              </p>
              <Image
                src="/assets/Illustration.svg"
                alt="svg-illustration"
                width={250}
                height={100}
              />
            </div>
            <div
              id="card"
              className="col-span-6 space-y-2 rounded-3xl bg-[#5D544F] px-10 py-8 text-white"
            >
              <h1 className="text-2xl font-medium tracking-tight text-white">
                Get the best event
              </h1>
              <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, asperiores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
