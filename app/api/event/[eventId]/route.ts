import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const DELETE = async (
  _: Request,
  { params }: { params: { eventId: string } },
) => {
  try {
    await prismadb.event.delete({
      where: {
        id: params.eventId,
      },
    });

    return NextResponse.json({
      statusCode: "200",
      message: "Data deleted",
    });
  } catch (error) {
    console.log("ERROR API [DELETE], /api/event", error);
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: { eventId: string } },
) => {
  try {
    const { isActive, ticketStock } = await req.json();

    const updatedEvent = await prismadb.event.update({
      where: {
        id: params.eventId,
      },
      data: {
        isActive,
        ticketStock,
      },
    });

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.log(error);
  }
};

export const GET = async (
  _: Request,
  { params }: { params: { eventId: string } },
) => {
  try {
    const event = await prismadb.event.findFirst({
      where: {
        id: params.eventId,
      },
    });

    return NextResponse.json({
      statusCode: "200",
      message: "success",
      data: event,
    });
  } catch (error) {
    console.log(error);
  }
};
