import Heading from "@/components/own/Heading";
import { Separator } from "@/components/ui/separator";
import React from "react";
import SettingsForm from "./components/SettingsForm";
import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";

const ProfileSettingsPage = async () => {
  const { userId } = auth();

  if (!userId) {
    throw Error("User ID is null");
  }

  const initialData = await prismadb.user.findUnique({
    where: {
      userId,
    },
  });

  return (
    <div className="mx-auto h-[100dvh] w-full max-w-7xl bg-white px-7 pt-24">
      <Heading
        title="Profile Settings"
        description="Edit your profile here"
        className="pb-2"
      />
      <Separator />
      <SettingsForm initialData={initialData} userId={userId} />
    </div>
  );
};

export default ProfileSettingsPage;
