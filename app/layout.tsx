import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
            <div className="flex flex-col	w-full h-screen bg-dashboard text-white">
              {children}
            </div>
        </Theme>
      </body>
    </html>
  );
}
