import MidLayout from "@/components/own/MidLayout";

import FormEvent from "../create/components/FormEvent";
import { type Event } from "@prisma/client";
import prismadb from "@/lib/prismadb";

interface EventDetailPageProps {
  params: { eventId: string };
}

const EventDetailPage: React.FC<EventDetailPageProps> = async ({ params }) => {
  const event: Event | null = await prismadb.event.findUnique({
    where: {
      id: params.eventId,
    },
  });

  if (!event) {
    return <p>Loading</p>;
  }

  return (
    <div className="h-[100vh]">
      <MidLayout>
        <FormEvent initialData={event} />
      </MidLayout>
    </div>
  );
};

export default EventDetailPage;
