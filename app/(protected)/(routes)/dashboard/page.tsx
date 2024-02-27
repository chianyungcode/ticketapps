import MidLayout from "@/components/own/MidLayout";
import React from "react";
import CardGrid from "./components/CardGrid";
import styles from "./components/CardGrid.module.css";
import {
  ArrowDownNarrowWide,
  ArrowUpRightFromCircle,
  BarChart,
  Star,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import Sidebar from "@/components/own/Sidebar";

const DashboardPage = () => {
  return (
    <>
      <MidLayout>
        <div className="grid w-full grid-cols-12 gap-x-2 ">
          <div className="col-span-9 grid h-80 w-full grid-cols-9 rounded-xl bg-white shadow-sm">
            <div className="col-span-9 flex items-start p-6">
              <div className="col-span-3 flex w-full grid-cols-3 items-center gap-x-4">
                <div className="rounded-xl bg-slate-100 p-4">
                  <TrendingUp size={15} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Earnings
                  </h3>
                  <h2 className="text-xl font-bold">$74,892</h2>
                </div>
              </div>
              <div className="col-span-3 flex w-full grid-cols-3 items-center gap-x-4">
                <div className="rounded-xl bg-slate-100 p-4">
                  <TrendingDown size={15} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Earnings
                  </h3>
                  <h2 className="text-xl font-bold">$74,892</h2>
                </div>
              </div>
              <div className="col-span-3 flex w-full grid-cols-3 items-center gap-x-4">
                <div className="rounded-xl bg-slate-100 p-4">
                  <Star size={15} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-500">
                    Total Earnings
                  </h3>
                  <h2 className="text-xl font-bold">$74,892</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 hidden space-y-2 rounded-2xl bg-white px-4 py-4 shadow-sm md:block">
            <h1 className="text-xl font-bold">Top buyer</h1>
            <div
              id="card-buyer"
              className="flex w-full items-center gap-3 rounded-2xl bg-gray-100 p-2 
            "
            >
              <div className="relative h-14 w-14 min-w-[56px] overflow-hidden rounded-xl">
                <Image
                  src="https://picsum.photos/200"
                  alt=""
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div>
                <h3 className="text-sm font-bold">Lisa Bartoletiti</h3>
                <p className="text-xs font-normal text-gray-400">14.33 PM</p>
              </div>
              <div className="text-xs font-bold">$44.03</div>
            </div>
          </div>
        </div>
      </MidLayout>
    </>
  );
};

export default DashboardPage;
