import { Flex, Box } from "@radix-ui/themes";
import Image from "next/image";
import { ReactNode } from "react";
import { Navigation } from "../components/navigation/Navigation";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
