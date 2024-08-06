import React, { ReactNode } from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconProps } from "@radix-ui/themes";

interface NavigationDropdownProps {
  icon: React.FC<IconProps>;
  ariaLabel: string;
  children: ReactNode;
}

const NavigationDropdown: React.FC<NavigationDropdownProps> = ({
  icon: Icon,
  ariaLabel,
  children,
}) => (
  <DropdownMenu.Root>
    <DropdownMenu.Trigger asChild>
      <button
        className="rounded-full w-[50px] h-[50px] inline-flex items-center justify-center text-violet11 shadow-blackA4 outline-none hover:bg-violet3"
        aria-label={ariaLabel}
      >
        <Icon width={20} height={20} />
      </button>
    </DropdownMenu.Trigger>
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        className="min-w-[120px] bg-white rounded-sm shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
        sideOffset={5}
        aria-label={`${ariaLabel} Dropdown Menu`} // Improved accessibility
      >
        {children}
        <DropdownMenu.Arrow className="fill-white" />
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  </DropdownMenu.Root>
);

export default React.memo(NavigationDropdown);
