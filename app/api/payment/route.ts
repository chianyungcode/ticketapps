import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
  const body = await req.json();
  const { name, paymentNumber } = body;

  try {
    const newPayment = await prismadb.paymentMethod.create({
      data: {
        name,
        paymentNumber,
      },
    });

    return NextResponse.json({
      success: true,
      code: 200,
      data: newPayment,
    });
  } catch (error) {
    console.log(error);
  }
};
