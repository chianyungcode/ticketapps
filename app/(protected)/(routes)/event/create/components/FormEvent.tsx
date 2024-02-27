"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Event } from "@prisma/client";
import React from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

import Heading from "@/components/own/Heading";
import styles from "./FormEvent.module.css";
import { useQuery } from "@tanstack/react-query";
import { getSpecificData } from "@/lib/actions";

interface FormEventProps {
  initialData: Event | null;
}

const formSchema = z.object({
  name: z.string().min(1),
  location: z.string(),
  date: z.date({ required_error: "A date of birth is required" }),
  ticketStock: z.string(),
  isActive: z.boolean().default(false),
});

// REACT FC
const FormEvent: React.FC<FormEventProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();

  // Query Function
  const { isLoading, data } = useQuery({
    queryKey: ["event"],
    queryFn: async () => {
      const response = await getSpecificData(`/api/event/${params.eventId}`);
      const jsonData = response.data;
      console.log(jsonData);

      return jsonData;
    },
    initialData: initialData,
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          ...initialData,
          ticketStock: initialData.ticketStock.toString(),
        }
      : {
          name: "",
          location: "",
          date: new Date(),
          ticketStock: "",
          isActive: false,
        },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const url = initialData ? `/api/event/${params.eventId}` : "/api/event";

      const httpMethod = initialData ? axios.patch : axios.get;

      const response = await httpMethod(url, {
        ...values,
        ticketStock: parseInt(values.ticketStock),
      });

      router.push("/events");
    } catch (error) {
      console.log(error);
    }
  };

  const title = initialData ? "Edit event" : "Create Event";
  const subtitle = initialData
    ? "Edit event for a Concert"
    : "Create event for a concert";
  const submitBtn = initialData ? "Save changes" : "Submit";

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <Heading title={title} description={subtitle} />
      <Separator className="my-4" />
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <div className={styles.container}>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Event Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>Location</FormLabel>
                  <FormControl>
                    <Input placeholder="Location" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Event Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-[240px] pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground",
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={(date) =>
                        date > new Date() || date < new Date("1900-01-01")
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ticketStock"
            render={({ field }) => (
              <FormItem className="max-w-sm flex-1">
                <FormLabel>Ticket Stock</FormLabel>
                <FormControl>
                  <Input placeholder="Ticket Stock" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isActive"
            render={({ field }) => (
              <FormItem className="flex max-w-sm flex-row items-start space-x-3 space-y-0 rounded-md border p-4 shadow">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel>Active event</FormLabel>
                  <FormDescription>This event is active or not</FormDescription>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit">{submitBtn}</Button>
        </form>
      </Form>
    </>
  );
};

export default FormEvent;
