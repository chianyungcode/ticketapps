import { Switch } from "@/components/ui/switch";
import { useMutation } from "@tanstack/react-query";
import { EventColumn } from "./columns";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import axios from "axios";

interface ToggleActiveProps {
  data: EventColumn;
}

const FormSchema = z.object({
  isActive: z.boolean(),
});

const ToggleActive = ({ data }: ToggleActiveProps) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      isActive: data.isActive,
    },
  });

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      const response = await axios.patch(`/api/event/${data.id}`, values);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="isActive"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={(newValue) => {
                    field.onChange(newValue);
                    form.handleSubmit(onSubmit)();
                  }}
                />
              </FormControl>
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default ToggleActive;
