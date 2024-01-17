"use client";

import * as z from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { type User } from "@prisma/client";

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
import axios from "axios";
import { useRouter } from "next/navigation";

interface SettingsFormProps {
  initialData: User | null;
  userId: string;
}

const formSchema = z.object({
  name: z.string().min(2).max(50),
  address: z.string(),
});

const SettingsForm: React.FC<SettingsFormProps> = ({ initialData, userId }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      name: "",
      address: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (initialData) {
        const response = await axios.patch(`/api/profile/${userId}`, values);
      } else {
        const response = await axios.post(`/api/profile/${userId}`, values);
        console.log(response);
      }

      router.refresh();
      router.push(`/${userId}/settings`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="grid grid-cols-3 p-3">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nama</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="mb-6">
                <FormLabel>Alamat</FormLabel>
                <FormControl>
                  <Input placeholder="Your address" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};

export default SettingsForm;
