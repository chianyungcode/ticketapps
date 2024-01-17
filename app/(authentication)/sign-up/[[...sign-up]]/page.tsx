import AuthCard from "@/components/own/AuthCard";
import { auth } from "@clerk/nextjs";
import React from "react";

const SignUpPage = () => {
  const { userId } = auth();

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <div
        className="w-full max-w-lg rounded-2xl border border-black px-8 py-8"
        id="cardbox"
      >
        <AuthCard userId={userId} />
      </div>
    </div>
  );
};

export default SignUpPage;
