"use client";

import { ColumnDef } from "@tanstack/react-table";
import CellAction from "./CellAction";
import ToggleActive from "./ToggleActive";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type EventColumn = {
  id: string;
  name: string;
  date: string;
  location: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export const columns: ColumnDef<EventColumn>[] = [
  {
    accessorKey: "name",
    header: "Event Name",
  },
  {
    accessorKey: "date",
    header: "Event Date",
  },
  {
    accessorKey: "location",
    header: "Location",
  },
  {
    accessorKey: "isActive",
    header: "Active",
    cell: ({ row }) => <ToggleActive data={row.original} />,
  },
  {
    accessorKey: "createdAt",
    header: "Created Date",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated Date",
  },
  {
    id: "actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
