import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  return <>{children}</>;
};

export default AccountLayout;
