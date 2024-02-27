import Heading from "@/components/own/Heading";
import MidLayout from "@/components/own/MidLayout";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import React from "react";
import { columns } from "./components/columns";
import FormDialog from "@/components/own/FormDialog";
import Table from "@/components/own/Table";
import LocationFilterButton from "@/components/reusable/LocationFilterButton";
import ActiveFilterButton from "@/components/reusable/ActiveFilterButton";

const EventsPage = async () => {
  const events = await prismadb.event.findMany({
    orderBy: {
      date: "desc",
    },
  });

  return (
    <MidLayout className="space-y-2">
      <div className="space-y-2 rounded-xl bg-white p-4">
        <Heading title="All Event" description="Edit & delete event here" />
        <Separator />
        <div className="flex items-center justify-between">
          <h2 className="text-md self-end font-medium  text-gray-400">
            Filter data
          </h2>
          <FormDialog />
        </div>
        <div className="grid w-full grid-cols-2 overflow-hidden rounded-lg border px-2 py-4">
          <div className="mx-auto flex w-full gap-x-4">
            <LocationFilterButton initialData={events} />
            <ActiveFilterButton />
          </div>
        </div>
        <Table events={events} columns={columns} />
      </div>
    </MidLayout>
  );
};

export default EventsPage;
