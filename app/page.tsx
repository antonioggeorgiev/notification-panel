import { Button, Flex, Grid } from "@radix-ui/themes";
import { Navigation } from "@/app/components/navigation/Navigation";
import { PlusIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <div className="flex flex-col	 w-full h-screen bg-dashboard">
      <Navigation />
      <Grid
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 30%)",
          gap: "12px",
          width: "auto",
          height: "100%",
          padding: "20px",
        }}
      >
        <Flex
          justify={"center"}
          align={"center"}
          className="rounded hover:bg-gray-500 bg-gray-300 hover:text-white text-dashboard"
        >
          <Button className="w-full h-full bg-inherit ">
            {" "}
            <PlusIcon width={50} height={50} className="" />
          </Button>
        </Flex>
      </Grid>
    </div>
  );
}
