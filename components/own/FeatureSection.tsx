import React from "react";
import MidLayout from "./MidLayout";
import { BarChart } from "lucide-react";

const FeatureSection = () => {
  return (
    <MidLayout className="bg-slate-50">
      <section className="w-full space-y-20">
        <div className="space-y-6">
          <div className="space-y-2">
            <h3 className="text-center text-base font-semibold text-gray-400">
              Features
            </h3>
            <h1 className="text-center text-4xl font-bold text-gray-900">
              The CRM thats truly your own
            </h1>
          </div>
          <p className="text-center font-medium text-gray-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id,
            deserunt molestiae, corporis numquam dolores obcaecati nihil
            doloremque iure ipsa dolorem aliquam sapiente ea, voluptates ipsam
            aspernatur provident perferendis corrupti dignissimos.
          </p>
        </div>
        <div className="grid grid-cols-3">
          <div className="space-y-2">
            <div className="flex size-10 items-center justify-center self-center rounded-full bg-slate-400 p-2">
              <BarChart className="h-4 w-4 text-gray-900" />
            </div>
          </div>
        </div>
      </section>
    </MidLayout>
  );
};

export default FeatureSection;
