import { auth } from "@clerk/nextjs";
import React from "react";
import { faker } from "@faker-js/faker";
import SessionProvider from "@/provider/SessionProvider";
import HeroSection from "@/components/own/HeroSection";
import FeatureSection from "@/components/own/FeatureSection";
import TestimonialSection from "@/components/own/TestimonialSection";
import BlogSection from "@/components/own/BlogSection";
import Navbar from "@/components/own/Navbar";
import Footer from "@/components/own/Footer";

const HomePage = async () => {
  // const { userId } = auth();
  // const ticketname = faker.location.city();

  return (
    <>
      <Navbar className="border-none" />
      <main className="bg-[#F7F6F5]">
        <HeroSection />
        <FeatureSection />
        <TestimonialSection />
        <BlogSection />
        {/* <Footer /> */}
      </main>
    </>
  );
};

export default HomePage;
