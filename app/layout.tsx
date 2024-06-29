import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.tailwind.css";
import Navbar from "@/components/Navbar";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniportal",
  description: "Dive into the anime experience at Aniportal!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fredoka.className + " min-h-screen bg-[#1c1c1c]"}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
