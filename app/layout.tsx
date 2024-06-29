import type { Metadata } from "next";
import { Fredoka } from "next/font/google";
import "./globals.tailwind.css";
import Navbar from "@/components/Navbar";
import Provider from "@/components/sessionprovider";
import { getServerSession } from "next-auth";

const fredoka = Fredoka({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aniportal",
  description: "Dive into the anime experience at Aniportal!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession()

  return (
    <html lang="en">
      <body className={fredoka.className + " min-h-screen bg-[#1c1c1c]"}>
        <Provider session={session}>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
