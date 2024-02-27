"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { AlertDialogFooter } from "@/components/ui/alert-dialog";

//form import
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { Checkbox } from "../ui/checkbox";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { type Event } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";
import { getSpecificData } from "@/lib/actions";

interface FormDialogProps {
  initialData?: Event;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Event name must be at least 2 characters",
  }),
  location: z.string(),
  date: z.date(),
  ticketStock: z.string(),
  isActive: z.boolean().default(false),
});

const FormDialog: React.FC<FormDialogProps> = ({ initialData }) => {
  const router = useRouter();
  const [modalOpen, setModalOpen] = useState(false);

  // const { isLoading, data: dataEvent } = useQuery({
  //   queryKey: ["event"],
  //   queryFn: async () => {
  //     const response = await getSpecificData(`/api/event/${initialData?.id}`);
  //     const jsonData = response.data;
  //     console.log(jsonData);

  //     return jsonData;
  //   },
  //   initialData: initialData,
  // });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      location: "",
      date: new Date(),
      ticketStock: "",
      isActive: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      if (initialData) {
        const response = await axios.patch(
          `api/event/${initialData.id}`,
          values,
        );
        router.push("/events");
        router.refresh();
        console.log(response);
      } else {
        const response = await axios.post("/api/event", values);
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setModalOpen(false);
    }
  };

  return (
    <Dialog open={modalOpen} onOpenChange={() => setModalOpen(!modalOpen)}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-xl px-6 py-6 font-semibold"
        >
          Add new event
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add event</DialogTitle>
          <DialogDescription>Add your event detail here</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <FormLabel htmlFor="name" className="text-right">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="Isi nama event"
                          className="col-span-3 focus-visible:ring-4 focus-visible:ring-orange-100 focus-visible:ring-offset-0"
                          {...field}
                        />
                      </FormControl>
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <FormLabel htmlFor="location" className="text-right">
                        Location
                      </FormLabel>
                      <Input
                        id="location"
                        placeholder="Isi lokasi anda"
                        className="col-span-3"
                        {...field}
                      />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="ticketStock"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <FormLabel htmlFor="ticketStock" className="text-right">
                        Ticket Stock
                      </FormLabel>
                      <Input
                        id="ticketStock"
                        className="col-span-3"
                        {...field}
                      />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <div className="grid grid-cols-4 items-center gap-4">
                      <FormLabel htmlFor="location" className="text-right">
                        Date
                      </FormLabel>
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
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="terms"
                      onCheckedChange={field.onChange}
                      checked={field.value}
                    />
                    <label
                      htmlFor="terms"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      isFeatured
                    </label>
                  </div>
                )}
              />
              <AlertDialogFooter>
                <Button type="submit">Create Event</Button>
              </AlertDialogFooter>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FormDialog;
