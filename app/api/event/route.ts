import prismadb from "@/lib/prismadb";
import { Event } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { name, location, date, isActive, ticketStock } = await req.json();

    const newEvent: Event = await prismadb.event.create({
      data: {
        name,
        location,
        date,
        ticketStock: Number(ticketStock),
        isActive,
      },
    });

    return NextResponse.json({
      status: "200",
      message: "Success",
      data: newEvent,
    });
  } catch (error) {
    console.log("ERROR API [POST] : /api/event", error);
    return new NextResponse("Error", { status: 500 });
  }
};

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const location = searchParams.get("location") || undefined;
  const isActive = searchParams.get("active") || undefined;
  const name = encodeURIComponent(searchParams.get("name") || "") || undefined;

  try {
    const allEvent: Event[] = await prismadb.event.findMany({
      where: {
        name,
        location,
        isActive:
          isActive === "1" ? true : isActive === "0" ? false : undefined,
      },
    });

    return NextResponse.json({
      status: "200",
      message: "success",
      count_data: allEvent.length,
      data: allEvent,
    });
  } catch (error) {
    console.log("ERROR API [GET] : /api/event", error);
    return NextResponse.json({
      status: "500",
      message: "failed",
    });
  }
};
