import Heading from "@/components/own/Heading";
import MidLayout from "@/components/own/MidLayout";
import { Separator } from "@/components/ui/separator";
import React from "react";

import styles from "./components/ContainerGradient.module.css";
import FormMlbb from "./components/FormMlbb";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const MLBBPage = () => {
  return (
    <MidLayout>
      <div className="relative ">
        <div className={styles.containerGradient} />
        <div className="relative z-10 min-h-screen space-y-6 border-2 px-6 py-3 ">
          <Heading title="Mobile Legends" description="Top up now" />
          <Separator />
          <div className="relative grid grid-cols-8 gap-x-4">
            <div id="information-card" className="col-span-2 h-screen">
              <div className="sticky top-[5rem] space-y-2 rounded-xl border p-3">
                <h1 className="text-xl">Mobile Legends</h1>
                <p className="text-sm">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Deserunt, sapiente?
                </p>
              </div>
            </div>
            <div className="col-span-6 h-screen ">
              <div className="overflow-hidden rounded-2xl border bg-orange-100">
                <div className="relative z-[2] rounded-b-2xl bg-white px-4 pb-6 pt-4">
                  <h2 className="mb-3 text-xl">Input your user ID</h2>
                  <FormMlbb />
                </div>
                <div className="relative -top-4 z-[1] bg-orange-100 px-4  pt-8 text-[#562500]">
                  <h3>User ID : Nameraras</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MidLayout>
  );
};

export default MLBBPage;
