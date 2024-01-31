import Navbar from "@/components/own/Navbar";
import { auth } from "@clerk/nextjs";
import React from "react";

const SessionProvider = () => {
  const { userId } = auth();

  return <Navbar session={userId} />;
};
export default SessionProvider;
