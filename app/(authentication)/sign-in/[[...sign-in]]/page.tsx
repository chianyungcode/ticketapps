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
import { auth, useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import AuthLoginBox from "@/components/own/AuthLoginBox";

export default async function LoginPage() {
  const authentication = auth();

  return (
    <div className="flex h-screen items-center justify-center bg-white">
      <AuthLoginBox session={authentication.userId} />
    </div>
  );
}
