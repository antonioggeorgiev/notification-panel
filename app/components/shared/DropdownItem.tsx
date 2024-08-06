import React from "react";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { IconProps } from "@radix-ui/themes";

interface DropdownItemProps {
  label: string;
  icon?: React.FC<IconProps>;
  onClick?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  label,
  icon: Icon,
  onClick,
}) => (
  <DropdownMenu.Item
    className="group text-[13px] leading-none text-violet11 rounded-[3px] flex items-center h-[25px] px-[5px] relative pl-[25px] select-none outline-none disabled:text-mauve8 disabled:pointer-events-none highlighted:bg-violet9 highlighted:text-violet1"
    onClick={onClick}
    aria-label={label}
  >
    {Icon && <Icon className="mr-2" />}
    <span>{label}</span>
  </DropdownMenu.Item>
);

export default DropdownItem;
