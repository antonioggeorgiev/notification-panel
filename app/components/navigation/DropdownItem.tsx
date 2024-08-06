import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconProps } from "@radix-ui/themes";

interface DropdownItemProps {
  label: string;
  icon: React.FC<IconProps>;
  onClick?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  icon: Icon,
  onClick,
}) => (
  <DropdownMenu.Item
    className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
    onClick={onClick}
    aria-label={label}
  >
    <span className="mr-2">{label}</span>
    <Icon />
  </DropdownMenu.Item>
);

export default DropdownItem;
