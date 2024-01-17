import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { userId: string } },
) {
  try {
    const { sessionClaims } = auth();

    const id = params.userId;

    const body = await req.json();

    const { name, address } = body;

    if (!id) {
      return new NextResponse("User ID is Required!", { status: 500 });
    }

    const newProfile = await prismadb.user.create({
      data: {
        name,
        address,
        userId: params.userId,
        email: (sessionClaims?.emailAddress || "").toString(),
      },
    });

    return NextResponse.json(newProfile);
  } catch (error) {
    console.log(error);
  }
}

export async function GET(
  _req: Request,
  { params }: { params: { userId: string } },
) {
  try {
    const userInfo = await prismadb.user.findFirst({
      where: {
        userId: params.userId,
      },
    });

    return NextResponse.json(userInfo);
  } catch (error) {
    console.log(error);
  }
}

export async function PATCH(
  req: Request,
  { params }: { params: { userId: string } },
) {
  try {
    const { name, address } = await req.json();

    if (!params.userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    const updateProfile = await prismadb.user.update({
      where: {
        userId: params.userId,
      },
      data: {
        name,
        address,
      },
    });

    return NextResponse.json(updateProfile);
  } catch (error) {
    console.log(error);
    return new NextResponse("API ERROR [PATCH] : /api/profile/[userId]");
  }
}
