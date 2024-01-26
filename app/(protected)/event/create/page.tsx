import Heading from "@/components/own/Heading";
import MidLayout from "@/components/own/MidLayout";
import { Separator } from "@/components/ui/separator";
import prismadb from "@/lib/prismadb";
import { css } from "@emotion/react";
import axios from "axios";
import FormEvent from "./components/FormEvent";
import { auth } from "@clerk/nextjs";

const CreateEventPage = async () => {
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

export default CreateEventPage;

{
  /* <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="max-w-[16rem]">
            <label
              css={css`
                font-size: 0.8rem;
              `}
              htmlFor="event-name"
            >
              Event Name
            </label>
            <input
              id="event-name"
              type="text"
              css={css`
                outline: none;
                width: 100%;
                border: 1px solid;
                border-radius: 8px;
                background-color: transparent;
                padding: 4px 8px;
                font-weight: 200;
                display: block;
                margin: 0.5rem 0;
                font-size: 0.9rem;

                &:focus {
                  background-color: rgba(255, 0, 0, 0.23);
                }
              `}
              placeholder="Nama Event"
              defaultValue="Coldplay"
              {...register("name")}
            />
            <label
              css={css`
                font-size: 0.8rem;
              `}
              htmlFor="location"
            >
              Location
            </label>
            <input
              id="location"
              type="text"
              css={css`
                outline: none;
                width: 100%;
                border: 1px solid;
                border-radius: 8px;
                background-color: transparent;
                padding: 4px 8px;
                font-weight: 100;
                display: block;
                margin: 0.5rem 0;
                font-size: 0.9rem;
              `}
              placeholder="Location"
              defaultValue="Jakarta"
              {...register("location")}
            />
            <label
              css={css`
                font-size: 0.8rem;
              `}
              htmlFor="date"
            >
              Date
            </label>
            <DatePickerDemo />
            <label
              css={css`
                font-size: 0.8rem;
              `}
              htmlFor="isActive"
            >
              Active
            </label>
            <input className="block h-4 w-4 bg-inherit" type="checkbox"></input>
          </div>
          <Button type="submit">Submit</Button>
        </form> */
}
