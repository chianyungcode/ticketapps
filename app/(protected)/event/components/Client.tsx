"use client";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Event } from "@prisma/client";
import { MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ButtonCustom from "./ButtonCustom";
import FilterEvent from "./FilterEvent";

interface ClientProps {
  eventdata: Event[];
}

const Client: React.FC<ClientProps> = ({ eventdata }) => {
  const [eventActive, setEventActive] = useState(true);

  const location = eventdata.map((event) => {
    return {
      value: event.location.charAt(0).toUpperCase() + event.location.slice(1),
      label: event.location.charAt(0).toUpperCase() + event.location.slice(1),
    } as const;
  });

  return (
    <>
      <FilterEvent location={location} />
      <div className="mt-10 grid grid-cols-8 rounded-xl border ">
        <div className="col-span-2 space-y-1 border-r py-4">
          <ButtonCustom onClick={() => setEventActive(true)}>
            ON SALE EVENT
          </ButtonCustom>
          {/* Buat ketika dihover transition smooth dan linear gradient background-colornya   */}
          <ButtonCustom onClick={() => setEventActive(false)}>
            UPCOMING EVENT
          </ButtonCustom>
        </div>
        <div
          className={"col-span-6 h-[30rem] space-y-4 overflow-auto px-4 py-4 "}
        >
          {eventActive
            ? eventdata.map((event) => {
                if (event.isActive) {
                  return (
                    <div
                      key={event.name}
                      className="space-y-2 rounded-2xl bg-slate-100"
                    >
                      <div
                        id="card-event"
                        className="flex items-center justify-between px-4 pt-4"
                      >
                        <div className="flex items-center gap-2">
                          <h2>{event.name}</h2>
                          <Separator
                            orientation="vertical"
                            className="h-[0.9rem] bg-gray-400"
                          />
                          <div className="flex items-center text-[0.6rem]">
                            <MapPin className="mr-[0.1rem] h-3 w-3  text-gray-700" />
                            <p className="text-gray-700">{event.location}</p>
                          </div>
                        </div>
                        <Badge variant="destructive" className="border-red-900">
                          Hot Event!
                        </Badge>
                      </div>
                      <div className="grid grid-cols-6 py-4">
                        <div className="col-span-2 px-3">
                          <div
                            id="image-wrapper-rounded"
                            className="relative  w-full overflow-hidden rounded-xl border-2 border-black"
                          >
                            <Image
                              src="/assets/Coldplay.jpg"
                              alt="coldplay-concert"
                              // style={{ objectFit: "contain" }}
                              width={500}
                              height={200}
                              className=""
                              // fill
                            />
                          </div>
                        </div>
                        <div className="col-span-4 px-3">
                          <h3 className="text-xl font-bold">{event.name}</h3>
                          <p className="mt-2 text-gray-700">
                            Bergabunglah dalam konser Coldplay yang luar biasa
                            ini! Dapatkan tiket Anda sekarang dan jangan
                            lewatkan kesempatan untuk melihat mereka live.
                          </p>
                          <Link href={`/event/${event.name}`} />
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default Client;
