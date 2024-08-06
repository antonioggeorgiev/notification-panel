"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { GearIcon, BellIcon, ExitIcon } from "@radix-ui/react-icons";
import UserAvatar from "@/app/components/navigation/UserAvatar";
import NavigationButton from "@/app/components/navigation/NavigationButton";
import DropdownItem from "@/app/components/navigation/DropdownItem";
import useSignOut from "@/app/hooks/useSignOut";

export function Navigation() {
  const signOut = useSignOut();

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex min-h-[2.5rem] w-full flex-row items-center justify-between gap-3 bg-sidebar px-2 py-1 text-white">
        <NavigationMenu.Item>
          <UserAvatar
            src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
            fallbackText="CT"
          />
        </NavigationMenu.Item>
        <div className="flex gap-3">
          <NavigationMenu.Item>
            <NavigationButton icon={BellIcon} ariaLabel="Notifications">
              <DropdownItem label="Notifications" icon={ExitIcon} />
            </NavigationButton>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationButton icon={GearIcon} ariaLabel="Settings">
              <DropdownItem
                label="Settings"
                icon={ExitIcon}
                onClick={signOut}
              />
            </NavigationButton>
          </NavigationMenu.Item>
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
