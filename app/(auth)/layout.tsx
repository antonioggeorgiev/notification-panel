import { Flex, Box } from "@radix-ui/themes";
import Image from "next/image";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Flex className="h-screen">
      <Flex
        className="w-full bg-dirty-white"
        align="center"
        justify="center"
        direction="column"
      >
        <Box className="w-[75%] max-w-[400px]">
          {children}
        </Box>
      </Flex>
      <Flex
        className="hidden md:flex w-full bg-gradient-to-br from-emerald-500 to-emerald-900"
        align="center"
        justify="center"
      >
        <Image
          src="/client-review.jpg"
          width={380}
          height={250}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing the desktop version"
          layout="intrinsic"
        />
      </Flex>
    </Flex>
  );
}
