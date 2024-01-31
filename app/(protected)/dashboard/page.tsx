import MidLayout from "@/components/own/MidLayout";
import React from "react";
import CardGrid from "./components/CardGrid";
import styles from "./components/CardGrid.module.css";

const cardGridContent = [
  {
    title: "High runtime",
    description: "Get availability for 99.99% server up time",
  },
  {
    title: "High runtime",
    description: "Get availability for 99.99% server up time",
  },
  {
    title: "High runtime",
    description: "Get availability for 99.99% server up time",
  },
  {
    title: "High runtime",
    description: "Get availability for 99.99% server up time",
  },
];

const DashboardPage = () => {
  return (
    <div
      className={
        "mx-auto min-h-screen max-w-7xl border bg-[#141414] px-10 pt-20 text-white"
      }
    >
      <div className="grid grid-cols-4 gap-4 rounded-md ">
        {cardGridContent.map((item) => (
          <CardGrid
            key={item.title}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
