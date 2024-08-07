import { Flex, Box } from "@radix-ui/themes";
import Image from "next/image";
import { ReactNode } from "react";
import { Navigation } from "../components/navigation/Navigation";
import { SessionProvider } from "next-auth/react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <SessionProvider>
        <Navigation />
      </SessionProvider>
      {children}
    </>
  );
}
