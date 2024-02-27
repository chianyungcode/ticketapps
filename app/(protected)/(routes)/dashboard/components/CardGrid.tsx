import Image from "next/image";
import React from "react";

import styles from "./CardGrid.module.css";

interface CardGridProps {
  title: string;
  description: string;
}

const CardGrid: React.FC<CardGridProps> = ({ title, description }) => {
  return (
    <div
      className={"relative h-56 overflow-hidden rounded-md  bg-[#212121] p-3"}
    >
      <div className="absolute bottom-0 left-0 h-20 w-20 bg-gradient-to-bl from-red-400 to-purple-300 blur-2xl after:absolute after:right-0 after:top-0 after:h-20 after:w-20 after:bg-gradient-to-t after:from-teal-600 after:to-blue-200  after:content-['']" />
      <div className="relative z-10">
        <h1 className="text-center text-xl">{title}</h1>
        <p className="text-center text-sm">{description}</p>
      </div>
    </div>
  );
};

export default CardGrid;
