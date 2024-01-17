import { auth } from "@clerk/nextjs";
import { useParams, useRouter } from "next/navigation";
import React from "react";
import CheckParams from "./component/CheckParams";
import prismadb from "@/lib/prismadb";

const ProfilePage = async ({ params }: { params: { profileId: string } }) => {
  // const { userId } = auth();

  const user = await prismadb.user.findFirst({
    where: {
      userId: params.profileId,
    },
  });

  return (
    <div>
      <CheckParams user={user} />
    </div>
  );
};

export default ProfilePage;
