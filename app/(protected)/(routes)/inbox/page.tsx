"use client";

import Heading from "@/components/own/Heading";
import MidLayout from "@/components/own/MidLayout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import axios from "axios";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type messageInput = {
  message: string;
};

const InboxPage = () => {
  const { register, handleSubmit } = useForm<messageInput>({
    defaultValues: {
      message: "",
    },
  });

  const onSubmit: SubmitHandler<messageInput> = async (data) => {
    const response = await axios.post("/api/send", {
      message: data.message,
    });
    console.log(response.data);
  };

  // const clickedButton = async () => {
  //   const response = await axios.post("/api/send", {
  //     message: "Asik",
  //   });
  //   console.log(response.data);
  // };

  return (
    <MidLayout>
      <div className="h-screen space-y-4 rounded-2xl bg-white p-4 shadow-md">
        <Heading title="Inbox" description="Send and reply message" />
        <Separator />
        <form
          className="flex max-w-lg flex-col gap-4 text-sm"
          onSubmit={handleSubmit(onSubmit)}
        >
          <textarea
            {...register("message")}
            className="rounded-lg border bg-white px-4 py-5 outline-none"
          ></textarea>
          <Button type="submit">Send Email</Button>
        </form>
      </div>
    </MidLayout>
  );
};

export default InboxPage;
