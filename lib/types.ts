import { Event, EventImage } from "@prisma/client";

export type EventDetail = Event & {
  images: EventImage[];
};
