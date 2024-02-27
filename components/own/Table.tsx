"use client";

import { useQuery } from "@tanstack/react-query";
import { DataTable } from "../ui/data-table";
import { EventColumn } from "@/app/(protected)/(routes)/events/components/columns";
import { ColumnDef } from "@tanstack/react-table";
import { useFilterStore } from "@/lib/zustand";
import { format } from "date-fns";
import { getSpecificData as getEvents } from "@/lib/actions";
import { Event } from "@prisma/client";
import { Skeleton } from "../ui/skeleton";

interface TableProps {
  events: Event[];
  columns: ColumnDef<EventColumn>[];
}

const Table: React.FC<TableProps> = ({ events, columns }) => {
  const locationState = useFilterStore((state) => state.location);
  const activeState = useFilterStore((state) => state.active);

  const queryParam =
    `?location=${locationState}&active=${activeState}` || undefined;

  const { data, isLoading } = useQuery({
    queryKey: ["eventsdata", locationState, activeState],
    queryFn: async () => {
      const response = await getEvents(`/api/event${queryParam}`);
      const eventsQuery = response.data;

      return eventsQuery;
    },
    // initialData: events,
  });

  if (isLoading) {
    return <Skeleton className="h-40 w-full" />;
  }

  const formattedEvents: EventColumn[] = data.map((event: Event) => ({
    ...event,
    date: format(event.date, "yyyy-MM-dd"),
    createdAt: format(event.createdAt, "yyyy-MM-dd"),
    updatedAt: format(event.updatedAt, "yyyy-MM-dd"),
    ticketStock: event.ticketStock.toString(),
  }));

  return <DataTable data={formattedEvents} columns={columns} />;
};

export default Table;
