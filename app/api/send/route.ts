import EmailTemplate from "@/components/own/EmailTemplate";
import { Resend } from "resend";
import React from "react";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { message } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["cnytechcode@gmail.com"],
      subject: "Hello world",
      react: React.createElement(EmailTemplate, { firstName: message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
