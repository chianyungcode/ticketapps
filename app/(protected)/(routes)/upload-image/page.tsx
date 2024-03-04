"use client";

import MidLayout from "@/components/own/MidLayout";
import { UploadButton } from "@/lib/utils";
import toast from "react-hot-toast";

export default function UploadPage() {
  return (
    <MidLayout>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <UploadButton
          className="rounded-xl bg-black p-4 text-white"
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response

            console.log("Files: ", res);
            toast("Upload succesfull!");
          }}
          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      </main>
    </MidLayout>
  );
}
