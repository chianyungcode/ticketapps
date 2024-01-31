import MidLayout from "@/components/own/MidLayout";
import FormEvent from "./components/FormEvent";

const CreateEventPage = async () => {
  return (
    <div className="h-[100vh]">
      <MidLayout>
        <FormEvent />
      </MidLayout>
    </div>
  );
};

export default CreateEventPage;
