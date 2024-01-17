"use client";

import Heading from "@/components/own/Heading";
import MidLayout from "@/components/own/MidLayout";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { User } from "@prisma/client";
import { useParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import ProfileModal from "./ProfileModal";

interface CheckParamsProps {
  user: User | null;
}

const CheckParams: React.FC<CheckParamsProps> = ({ user }) => {
  const params = useParams();
  const router = useRouter();

  // if (params.profileId !== user?.userId) {
  //   router.push("/");
  // }

  return (
    <MidLayout>
      <div className="bg-orange-50">
        <Heading
          title="Profile Page"
          description="All about your profile"
          className="tracking-tight"
        />
        <Separator className="my-5" />
        <div className="grid grid-cols-4">
          <div className="relative col-span-2 space-y-2 rounded-[20px] bg-white px-6 py-6 shadow-[2px_4px_12px_rgba(0,0,0,0.08)]">
            <ProfileModal initialData={user} />
            <h1 className="text-xl text-gray-800">Basic Information</h1>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <h2 className="space-y-reverse text-sm text-gray-500">Name</h2>
                <h2 className="text-sm">{user?.name}</h2>
              </div>
              <div>
                <h2 className="space-y-reverse text-sm text-gray-500">
                  Address
                </h2>
                <h2 className="text-sm">{user?.address}</h2>
              </div>
              <div>
                <h2 className="space-y-reverse text-sm text-gray-500">Email</h2>
                <h2 className="text-sm">{user?.email}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MidLayout>
  );
};

export default CheckParams;
