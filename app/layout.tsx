import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";
import localFont from "next/font/local";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const myFont = localFont({
  src: "../public/font/PlusJakartaSans-SemiBold.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "red" },
      }}
    >
      <html lang="en" className={myFont.className}>
        <body className="min-h-screen bg-white">
          <Toaster />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
