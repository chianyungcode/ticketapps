import Heading from "@/components/own/Heading";
import MidLayout from "@/components/own/MidLayout";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import React from "react";
import { EventColumn, columns } from "./components/columns";
import { format } from "date-fns";
import Link from "next/link";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const EventsPage = async () => {
  const events = await prismadb.event.findMany({
    orderBy: {
      date: "desc",
    },
  });

  const formattedEvents: EventColumn[] = events.map((event) => ({
    ...event,
    date: format(event.date, "yyyy-MM-dd"),
    createdAt: format(event.createdAt, "yyyy-MM-dd"),
    updatedAt: format(event.updatedAt, "yyyy-MM-dd"),
  }));

  return (
    <MidLayout className="space-y-5">
      <Heading title="All Event" description="Edit & delete event here" />
      <Separator />
      <div className="flex justify-end">
        {/* <Link
          href="/event/create"
          className="cursor-pointer rounded-md bg-black px-4 py-2 text-sm font-light text-gray-50"
        >
          Add event
        </Link> */}
        <Dialog>
          <DialogTrigger>Open</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <DataTable data={formattedEvents} columns={columns} />
    </MidLayout>
  );
};

export default EventsPage;
