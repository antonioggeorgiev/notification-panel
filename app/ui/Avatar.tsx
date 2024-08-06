import React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

interface AvatarProps {
  src: string;
  fallbackText: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ src, fallbackText, className }) => (
  <AvatarPrimitive.Root
    className={`inline-flex items-center justify-center align-middle overflow-hidden select-none rounded-full bg-black/30 ${className}`}
  >
    <AvatarPrimitive.Image
      className="w-full h-full object-cover rounded-inherit"
      src={src}
      alt={fallbackText}
    />
    <AvatarPrimitive.Fallback
      className="w-full h-full flex items-center justify-center bg-white text-violet-700 text-[15px] leading-none font-medium"
      delayMs={600}
    >
      {fallbackText}
    </AvatarPrimitive.Fallback>
  </AvatarPrimitive.Root>
);

export default Avatar;
