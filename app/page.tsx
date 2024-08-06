import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import SignOutButton from "./ui/sing-out-button";

export default function Home() {
  return (
    <div className="w-full h-screen bg-dashboard">
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex min-h-[2.5rem] w-full flex-row items-center justify-between gap-3 bg-sidebar px-2 py-1 text-white">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item one</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item one content</NavigationMenu.Content>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger>Item two</NavigationMenu.Trigger>
            <NavigationMenu.Content>Item Two content</NavigationMenu.Content>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
      <SignOutButton />
    </div>
  );
}
