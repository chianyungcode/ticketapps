"use client";

import Link from "next/link";
import { FiGithub } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { z } from "zod";
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
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import { OAuthStrategy } from "@clerk/nextjs/server";

interface AuthLoginBoxProps {
  session: string | null;
}

const loginFormSchema = z.object({
  email: z.string().email({
    message: "Email is invalid",
  }),
  password: z.string(),
});

const AuthLoginBox: React.FC<AuthLoginBoxProps> = ({ session }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [passwordShowed, setPasswordShowed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [invalidAuth, setInvalidAuth] = useState(false);

  const router = useRouter();

  const { isLoaded, signIn, setActive } = useSignIn();

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (session) {
      router.push("/");
    }
  });

  const signInWith = (strategy: OAuthStrategy) => {
    return signIn?.authenticateWithRedirect({
      strategy,
      redirectUrl: "/sso-callback",
      redirectUrlComplete: "/events",
    });
  };

  // Handle submit
  const onSubmit = async (values: z.infer<typeof loginFormSchema>) => {
    setIsLoading(true);

    if (!isLoaded) return;

    try {
      const completeSignIn = await signIn.create({
        identifier: values.email,
        password: values.password,
      });

      if (completeSignIn.status !== "complete") {
        console.log(JSON.stringify(completeSignIn, null, 2));
      }

      if (completeSignIn.status === "complete") {
        // If complete, user exists and provided password match -- set session active
        await setActive({ session: completeSignIn.createdSessionId });
        // Redirect the user to a post sign-in route
        router.push("/");
      }
    } catch (err: any) {
      // console.error(JSON.stringify(err, null, 2));
      const jsonError = JSON.stringify(err, null, 2);
      const parsedError = JSON.parse(jsonError);

      if (parsedError.errors[0].code === "form_identifier_not_found") {
        setErrorMessage("Akun tidak ditemukan");
      }
      if (parsedError.errors[0].code === "form_password_incorrect") {
        setErrorMessage("Password anda salah");
      }

      setInvalidAuth(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg space-y-3 rounded-2xl border border-black py-32">
      <h1 className="text-center text-3xl font-bold tracking-tight">
        Sign in page
      </h1>
      <div className="mx-auto max-w-md space-y-1">
        <div
          className="flex items-center justify-center gap-3 py-4"
          id="social-media-button"
        >
          <button
            onClick={() => signInWith("oauth_google")}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg border border-black/50 px-2 py-2"
          >
            <FcGoogle className="h-5 w-5" />
            <p className="text-sm">
              Sign in with <strong>Google</strong>
            </p>
          </button>
          <button
            className="flex flex-1 cursor-not-allowed items-center justify-center gap-1 rounded-lg border border-gray-300 px-2 py-2 text-gray-300"
            disabled
          >
            <FiGithub className="h-4 w-4" />
            <p className="text-sm">
              Sign in with <strong>Github</strong>
            </p>
          </button>
        </div>

        <div className="divider">Or sign with</div>

        {/* Form Login */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="email@company.com" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <div className="relative">
                      <Input
                        {...field}
                        placeholder="password"
                        type={passwordShowed ? "password" : "text"}
                        className="pr-14"
                      />
                      <button
                        type="button"
                        className="absolute right-3 top-2"
                        onClick={() => setPasswordShowed(!passwordShowed)}
                      >
                        {passwordShowed ? (
                          <EyeIcon className="h-6 w-6 text-gray-200" />
                        ) : (
                          <EyeOffIcon className="h-6 w-6 text-gray-200" />
                        )}
                      </button>
                    </div>
                  </FormControl>
                  {invalidAuth ? (
                    <FormMessage className="flex items-center gap-x-2">
                      {errorMessage}
                    </FormMessage>
                  ) : null}
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Link href="/forgot-password">
                <p className="text-sm text-blue-500">Forgot password?</p>
              </Link>
            </div>
            <Button type="submit" className="w-full" disabled={isLoading}>
              Sign in
            </Button>
          </form>
        </Form>
      </div>

      <div className="mt-8 flex items-center justify-center text-sm text-gray-500">
        Belum memiliki akun?
        <Link href="/sign-up" className="ml-1 text-blue-600">
          Daftar sekarang.
        </Link>
      </div>
    </div>
  );
};

export default AuthLoginBox;
