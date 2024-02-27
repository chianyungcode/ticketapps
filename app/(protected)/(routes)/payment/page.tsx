import Heading from "@/components/own/Heading";
import MidLayout from "@/components/own/MidLayout";
import { Separator } from "@/components/ui/separator";
import React from "react";
import PaymentForm from "./components/PaymentForm";

const PaymentPage = () => {
  return (
    <MidLayout>
      <div className="h-screen w-full space-y-4 rounded-xl bg-white p-6">
        <Heading title="Payment Method" description="Add your payment" />
        <Separator />
        <PaymentForm />
        <Separator />
      </div>
    </MidLayout>
  );
};

export default PaymentPage;
