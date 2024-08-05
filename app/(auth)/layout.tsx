import { Flex, Box } from "@radix-ui/themes";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Flex className="h-screen">
      <Flex
        className="w-full bg-[#f8f8ff]"
        align={"center"}
        justify={"center"}
        direction={"column"}
      >
        <Box className="min-w-3/4">{children}</Box>
      </Flex>
      <Flex
        className="hidden md:flex w-full bg-gradient-to-br from-emerald-500 to-emerald-900"
        align={"center"}
        justify={"center"}
      >
        <Image
          src="/client-review.jpg"
          width={380}
          height={250}
          className="hidden md:block"
          alt="Screenshots of the dashboard project showing desktop version"
        />
      </Flex>
    </Flex>
  );
}
