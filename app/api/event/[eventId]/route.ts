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
    const { isActive, ticketStock, imagesUrl } = await req.json();

    const updatedEvent = await prismadb.event.update({
      where: {
        id: params.eventId,
      },
      data: {
        isActive,
        ticketStock,
      },
    });

    // if (imageUrl) {
    //   await prismadb.eventImage.create({
    //     data: {
    //       eventId: params.eventId,
    //       url: imageUrl,
    //     },
    //   });
    // }

    if (imagesUrl && imagesUrl.length > 0) {
      await Promise.all(
        imagesUrl.map((url: string) => {
          prismadb.eventImage.create({
            data: {
              eventId: params.eventId,
              url,
            },
          });
        }),
      );
    }

    return NextResponse.json(updatedEvent);
  } catch (error) {
    console.log(error);
  }
};

export const POST = async (
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
