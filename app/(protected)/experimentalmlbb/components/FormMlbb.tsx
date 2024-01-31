"use client";

import React, { useCallback, useState } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

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
import clsx from "clsx";
import axios from "axios";

const formSchema = z.object({
  gameId: z.string(),
  serverId: z.string(),
});

const FormMlbb = () => {
  const [username, setUsername] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      gameId: "",
      serverId: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await axios.get(
        `/api/experimental?id=${values.gameId}+${values.serverId}`,
      );
      console.log(values);
      console.log(response.data.data);

      const userName = response.data.data.username;
      setUsername(userName);
    } catch (error) {
      console.log(error);
    }
  };

  // return (
  //   <form onSubmit={handleSubmit(onSubmit)} className="space-x-3">
  //     <input
  //       {...register("gameId")}
  //       type="text"
  //       className="focus:ring-5 appearance-none rounded-lg border bg-white px-2 py-1 text-sm text-black outline-none transition-all hover:bg-slate-50  focus:ring-4 focus:ring-orange-100 focus:ring-offset-2"
  //     />
  //     <button
  //       type="submit"
  //       className="rounded-lg bg-orange-50 px-4 py-2 text-sm text-amber-900 transition-all hover:bg-orange-100"
  //     >
  //       Cek ID
  //     </button>
  //   </form>
  // );
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
        <div className="flex items-end space-x-2">
          <FormField
            control={form.control}
            name="gameId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Game ID</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your ID Game..."
                    {...field}
                    className={clsx(
                      " rounded-lg  focus-visible:ring-4 focus-visible:ring-orange-100 focus-visible:ring-offset-0",
                    )}
                  />
                </FormControl>
                {/* <FormDescription>{username}</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="serverId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Server</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your server"
                    {...field}
                    className={clsx(
                      "rounded-lg focus-visible:ring-4 focus-visible:ring-orange-100 focus-visible:ring-offset-0",
                    )}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </div>
      </form>
      {username === "" ? (
        <p></p>
      ) : (
        <p
          className={clsx(
            "mt-8 inline-block rounded-lg bg-orange-100 px-4 py-2 text-amber-900  transition-opacity delay-1000 ",
            username === "" ? "opacity-0" : "opacity-100",
          )}
        >
          {username}
        </p>
      )}
    </Form>
  );
};

export default FormMlbb;
