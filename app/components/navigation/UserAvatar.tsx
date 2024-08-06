import React from "react";
import Avatar from "@/app/ui/Avatar";

interface UserAvatarProps {
  src: string;
  fallbackText: string;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, fallbackText }) => (
  <Avatar src={src} fallbackText={fallbackText} className="w-12 h-12" />
);

export default UserAvatar;
