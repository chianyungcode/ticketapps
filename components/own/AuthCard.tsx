"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

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
import { Check, CheckCircle, CheckCircle2 } from "lucide-react";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { auth, useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import OtpInput from "react-otp-input";

const formSchema = z.object({
  email: z.string().email(),
  username: z.string().min(3),
  pass: z
    .object({
      password: z.string(),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Password and confirm password must be the same",
      path: ["confirmPassword"],
    }),
});

interface AuthCardProps {
  userId: string | null;
}

const AuthCard: React.FC<AuthCardProps> = ({ userId }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      pass: {
        password: "",
        confirmPassword: "",
      },
    },
  });

  const { isLoaded, signUp, setActive } = useSignUp();

  const [code, setCode] = useState("");
  const [verifying, setVerifying] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState({
    length: false,
    specialChar: false,
    capitalLetter: false,
    number: false,
  });
  const router = useRouter();
  const passwordWatch = form.watch("pass.password");
  type FormValues = z.infer<typeof formSchema>;

  useEffect(() => {
    if (userId) {
      router.push("/");
    }

    const password = form.watch("pass.password");
    setIsPasswordValid({
      length: password.length >= 8,
      specialChar: /.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?].*/.test(password),
      capitalLetter: /[A-Z]/.test(password),
      number: /\d/.test(password),
    });
  }, [passwordWatch, form, userId, router]);

  const onSubmit: (values: FormValues) => Promise<void> = async (values) => {
    if (!isLoaded) return;

    try {
      await signUp.create({
        emailAddress: values.email,
        password: values.pass.password,
      });

      await signUp.prepareEmailAddressVerification({
        strategy: "email_code",
      });

      // Set 'verifying' true to display second form and capture the OTP code
      setVerifying(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoaded) return;

    try {
      // Submit the code that the user provides to attempt verification
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status !== "complete") {
        // The status can also be `abandoned` or `missing_requirements`
        // Please see https://clerk.com/docs/references/react/use-sign-up#result-status for  more information
        console.log(JSON.stringify(completeSignUp, null, 2));
      }

      // Check the status to see if it is complete
      // If complete, the user has been created -- set the session active
      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        // Redirect the user to a post sign-up route
        router.push("/");
      }
    } catch (err: any) {
      // This can return an array of errors.
      // See https://clerk.com/docs/custom-flows/error-handling to learn about error handling
      console.error("Error:", JSON.stringify(err, null, 2));
    }
  };

  if (verifying) {
    return (
      <form onSubmit={handleVerify}>
        <div className="flex flex-col items-center justify-center gap-3">
          <label id="code" className="text-3xl tracking-tight">
            Input OTP
          </label>
          <input
            value={code}
            id="code"
            name="code"
            onChange={(e) => setCode(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-black focus:border-transparent focus:outline-none focus:ring-1 focus:ring-indigo-600"
          />
          <button
            type="submit"
            className="rounded-lg bg-gray-900 px-4 py-2 text-white"
          >
            Complete Sign Up
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-center font-sans text-4xl font-bold">Sign up page</h1>
      <div className="divider -mb-5">or</div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="your@company.com"
                    {...field}
                    className="focus-visible:ring-1 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input
                    placeholder="username"
                    {...field}
                    className="focus-visible:ring-1 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pass.password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="password"
                    {...field}
                    className="focus-visible:ring-1 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pass.confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-black">Confirm Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="confirm password"
                    {...field}
                    className="focus-visible:ring-1 focus-visible:ring-offset-0"
                  />
                </FormControl>
                <FormMessage className="ml-1 flex items-center gap-1 text-[13px] font-normal" />
              </FormItem>
            )}
          />
          <div className="space-y-2 rounded-lg text-sm">
            <div
              className={clsx(
                "flex items-center justify-start gap-1",
                isPasswordValid.length
                  ? "text-green-700 transition-colors"
                  : "text-gray-500",
              )}
            >
              <CheckCircle2 className="h-4 w-4" />
              Password harus memiliki setidaknya 8 karakter
            </div>
            <div
              className={clsx(
                "flex items-center justify-start gap-1",
                isPasswordValid.specialChar
                  ? "text-green-700 transition-colors"
                  : "text-gray-500",
              )}
            >
              <CheckCircle2 className="h-4 w-4" />
              Password harus memiliki setidaknya satu karakter unik
            </div>
            <div
              className={clsx(
                "flex items-center justify-start gap-1",
                isPasswordValid.capitalLetter
                  ? "text-green-700 transition-colors"
                  : "text-gray-500",
              )}
            >
              <CheckCircle2 className="h-4 w-4" />
              Password harus memiliki setidaknya satu huruf kapital
            </div>
            <div
              className={clsx(
                "flex items-center justify-start gap-1",
                isPasswordValid.number
                  ? "text-green-700 transition-colors"
                  : "text-gray-500",
              )}
            >
              <CheckCircle2 className="h-4 w-4" />
              Password harus memiliki setidaknya satu angka
            </div>
          </div>
          <Button type="submit">Sign up</Button>
        </form>
      </Form>
    </div>
  );
};

export default AuthCard;
