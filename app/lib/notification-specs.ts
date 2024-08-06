import { NotificationType } from "@prisma/client";

type NotificationSpec = {
  color: string;
  name: string;
  location?: string;
  generateMessage: (message: string) => string;
};

export const notificationSpecs: Record<NotificationType, NotificationSpec> = {
  [NotificationType.ACCESS_GRANTED]: {
    color: "success",
    name: "Access Granted",
    generateMessage: (message) => `${message} shared a chat with you`,
    location: "/chats",
  },
  [NotificationType.COMMENT_TAG]: {
    color: "warning",
    name: "Comment Tag",
    generateMessage: (message) => `${message} tagged you in a comment`,
    location: "/comments",
  },
  [NotificationType.JOIN_WORKSPACE]: {
    color: "primary",
    name: "Join Workspace",
    generateMessage: (message) => `${message} joined your workspace`,
    location: "/workspace",
  },
  [NotificationType.PLATFORM_UPDATE]: {
    color: "danger",
    name: "Platform Update",
    generateMessage: (message) => `New features - see what’s new ${message}`,
  },
};
