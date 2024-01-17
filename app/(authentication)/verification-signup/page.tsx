import { Button } from "@/components/ui/button";
import { useActiveStore, useCodeStore } from "@/provider/zustand";
import { useRouter } from "next/navigation";
import React from "react";

import OtpInput from "react-otp-input";
import { useStore } from "zustand";

const VerificationPage = () => {
  const router = useRouter();

  const code = useCodeStore((state) => state.code);
  const setCode = useCodeStore((state) => state.setCode);

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

  return (
    <div>
      <form onSubmit={handleVerify} className="w-full max-w-md space-y-5">
        <OtpInput
          value={code}
          onChange={setCode}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input {...props} className="w-20 h-10" />}
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default VerificationPage;
