import prismadb from "@/lib/prismadb";
import { Event } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  try {
    const { name, location, eventdate, isactive } = await req.json();

    const newEvent: Event = await prismadb.event.create({
      data: {
        name,
        location,
        date: eventdate,
        isActive: isactive,
      },
    });

    return NextResponse.json({
      status: "200",
      message: "Success",
      data: {
        newEvent,
      },
    });
  } catch (error) {
    console.log("ERROR API [POST] : /api/event", error);
    return new NextResponse("Error", { status: 500 });
  }
};

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);

  const location = searchParams.get("location") || undefined;
  const isActive = searchParams.get("isActive") || undefined;
  const name = encodeURIComponent(searchParams.get("name") || "") || undefined;

  try {
    const allEvent: Event[] = await prismadb.event.findMany({
      where: {
        name,
        location,
        isActive:
          isActive === "true" ? true : isActive === "false" ? false : undefined,
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
