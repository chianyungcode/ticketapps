import MidLayout from "@/components/own/MidLayout";
import Navbar from "@/components/own/Navbar";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";
import { SearchIcon } from "lucide-react";
import { faker } from "@faker-js/faker";
import CardTicket from "@/app/(root)/components/CardTicket";
import SessionProvider from "@/provider/SessionProvider";
import HeroSection from "@/components/own/HeroSection";
import FeatureSection from "@/components/own/FeatureSection";

const HomePage = async () => {
  const { userId } = auth();

  const ticketname = faker.location.city();

  return (
    <div className="bg-white">
      <SessionProvider />
      <main>
        <HeroSection />
        <FeatureSection />
      </main>
    </div>
  );
};

export default HomePage;
