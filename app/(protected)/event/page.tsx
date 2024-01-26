import Heading from "@/components/own/Heading";
import MidLayout from "@/components/own/MidLayout";
import { Separator } from "@/components/ui/separator";

import { getAllEvent } from "@/lib/actions";
import Client from "./components/Client";

// Styling: SHADCN, Tailwind

const EventPage = async () => {
  const eventdata = await getAllEvent();

  return (
    <div className="">
      <MidLayout>
        <Heading title="Event" description="Available Event & Upcoming Event" />
        <Separator className="my-3" />

        <Client eventdata={eventdata} />
      </MidLayout>
    </div>
  );
};

export default EventPage;
