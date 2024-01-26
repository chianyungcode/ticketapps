import Heading from "@/components/own/Heading";
import MidLayout from "@/components/own/MidLayout";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { css } from "@emotion/react";
import axios from "axios";
import { auth } from "@clerk/nextjs";

const EventDetailPage = async () => {
  return (
    <div className="h-[100vh]">
      <MidLayout>
        <Heading
          title="Create Event"
          description="Create Event for a Concert"
        />
        <Separator className="my-4" />
        <FormEvent />
      </MidLayout>
    </div>
  );
};

export default EventDetailPage;
