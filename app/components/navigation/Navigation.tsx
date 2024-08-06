"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { GearIcon, ExitIcon } from "@radix-ui/react-icons";
import useSignOut from "@/app/hooks/useSignOut";
import UserAvatar from "../shared/UserAvatar";
import DropdownItem from "../shared/DropdownItem";
import NavigationDropdown from "./NavigationDropdown";
import NotificationDropdown from "../notifications/NotificationDropdown";

export function Navigation() {
  const signOut = useSignOut();

  return (
    <NavigationMenu.Root>
      <NavigationMenu.List className="flex min-h-[2.5rem] w-full flex-row items-center justify-between gap-3 bg-sidebar py-1 text-white">
        <NavigationMenu.Item>
          <UserAvatar src="/user.png" fallbackText="User" />
        </NavigationMenu.Item>
        <div className="flex gap-3">
          <NavigationMenu.Item>
            <NotificationDropdown />
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationDropdown icon={GearIcon} ariaLabel="Settings">
              <DropdownItem
                label="Sign Out"
                icon={ExitIcon}
                onClick={signOut}
              />
            </NavigationDropdown>
          </NavigationMenu.Item>
        </div>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
}
