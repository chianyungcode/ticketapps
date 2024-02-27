"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { type PaymentMethod } from "@prisma/client";
import { CreditCard, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

type payment = Pick<PaymentMethod, "name" | "paymentNumber">;

const paymentSchema = z.object({
  name: z.string().min(1, { message: "Payment name required!" }),
  paymentNumber: z.number().min(3),
});

type validationSchema = z.infer<typeof paymentSchema>;

const PaymentForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
  });

  const onSubmit = async (values: validationSchema) => {
    try {
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const responseData = await response.json();
      console.log(responseData);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-max flex-col  gap-y-2 rounded-xl p-2 shadow-md backdrop-blur-lg"
    >
      {/* Input */}
      <div className="relative w-full max-w-xs ">
        <svg
          className="absolute inset-y-0 left-3 my-auto h-6 w-6 text-gray-400"
          width="24px"
          height="24px"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.352 16.2306H19.327V14.7306H14.352V16.2306ZM10.126 16.2306H12.374V14.7306H10.126V16.2306ZM2.5 19.6686H22V10.6716H2.5V19.6686Z"
            fill="#9DA3AE"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.5 9.17164H22V4.60864H2.5V9.17164Z"
            fill="#9DA3AE"
          />
        </svg>
        <input
          {...register("name")}
          type="text"
          placeholder="Enter your payment name"
          className="w-full rounded-lg border bg-transparent py-2 pl-12 pr-3 text-gray-900 shadow-sm outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="relative w-full max-w-xs">
        <svg
          className="absolute inset-y-0 left-3 my-auto h-6 w-6 text-gray-400"
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <title>Iconly/Bold/Document</title>
          <g
            id="Iconly/Bold/Document"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="Document"
              transform="translate(3.000000, 2.000000)"
              fill="#9DA3AE"
              fill-rule="nonzero"
            >
              <path d="M13.191,0 C16.28,0 18,1.78 18,4.83 L18,4.83 L18,15.16 C18,18.26 16.28,20 13.191,20 L13.191,20 L4.81,20 C1.77,20 0,18.26 0,15.16 L0,15.16 L0,4.83 C0,1.78 1.77,0 4.81,0 L4.81,0 Z M5.08,13.74 C4.78,13.71 4.49,13.85 4.33,14.11 C4.17,14.36 4.17,14.69 4.33,14.95 C4.49,15.2 4.78,15.35 5.08,15.31 L5.08,15.31 L12.92,15.31 C13.319,15.27 13.62,14.929 13.62,14.53 C13.62,14.12 13.319,13.78 12.92,13.74 L12.92,13.74 Z M12.92,9.179 L5.08,9.179 C4.649,9.179 4.3,9.53 4.3,9.96 C4.3,10.39 4.649,10.74 5.08,10.74 L5.08,10.74 L12.92,10.74 C13.35,10.74 13.7,10.39 13.7,9.96 C13.7,9.53 13.35,9.179 12.92,9.179 L12.92,9.179 Z M8.069,4.65 L5.08,4.65 L5.08,4.66 C4.649,4.66 4.3,5.01 4.3,5.44 C4.3,5.87 4.649,6.22 5.08,6.22 L5.08,6.22 L8.069,6.22 C8.5,6.22 8.85,5.87 8.85,5.429 C8.85,5 8.5,4.65 8.069,4.65 L8.069,4.65 Z"></path>
            </g>
          </g>
        </svg>
        <input
          {...register("paymentNumber")}
          type="number"
          placeholder="Enter your payment number"
          className="w-full rounded-lg border bg-transparent py-2 pl-12 pr-3 text-gray-900 shadow-sm outline-none  focus:ring-2 focus:ring-black "
        />
      </div>
      <button
        className="flex min-w-[300px] max-w-xs items-center justify-center gap-2 rounded-lg bg-gray-50 px-4 py-2 text-gray-600 transition-all duration-150 hover:bg-gray-100 hover:ring-2 hover:ring-gray-200 active:bg-gray-200"
        type="submit"
      >
        <Send size={16} />
        Submit
      </button>
    </form>
  );
};

export default PaymentForm;
