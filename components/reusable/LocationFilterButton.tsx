"use client";

import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useFilterStore } from "@/lib/zustand"; // Added import for useFilterStore
import { Event } from "@prisma/client";

interface LocationFilterButtonProps {
  initialData: Event[];
}

export function LocationFilterButton({
  initialData,
}: LocationFilterButtonProps) {
  const form = useForm();
  const locationState = useFilterStore((state) => state.location);
  const setLocation = useFilterStore((state) => state.setLocation); // Using useFilterStore
  console.log(locationState);

  const locationEvent = initialData.map((event) => event.location);
  const notDuplicateLocation = Array.from(new Set(locationEvent));
  const sortedArray = notDuplicateLocation.sort();

  async function onSubmit(values: any) {}

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel className="ml-1 font-semibold">Location</FormLabel> */}
              <Select
                onValueChange={(value) => {
                  if (value === locationState) {
                    setLocation("Jakarta");
                  } else {
                    field.onChange(value);
                    setLocation(value); // Updating location value in Zustand store
                  }
                }}
              >
                <FormControl>
                  <SelectTrigger className="focus-visible:ring-offset-0">
                    <SelectValue placeholder="Select a location" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {sortedArray.map((loc) => (
                    <SelectItem
                      className="cursor-pointer"
                      key={loc}
                      value={loc}
                    >
                      {loc}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

export default LocationFilterButton;
