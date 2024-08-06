"use client";
import React from "react";
import { Flex } from "@radix-ui/themes";
import UserAvatar from "../shared/UserAvatar";
import { Notification, NotificationType } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useNotificationContext } from "@/app/context/NotificationContext";
import { notificationSpecs } from "@/app/lib/notification-specs";

interface NotificationComponentProps {
  notification: Notification;
}

const NotificationComponent: React.FC<NotificationComponentProps> = ({
  notification,
}) => {
  const router = useRouter();
  const { refreshNotifications } = useNotificationContext();
  const notificationSpecsByType = notificationSpecs[notification.type];

  const markNotificationAsRead = async (notificationId: string) => {
    try {
      const response = await fetch("/api/notification/update", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ notificationId }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Notification updated:", result);
    } catch (error) {
      console.error("Failed to update notification:", error);
    }
  };

  const handleOnClick = async () => {
    if (notificationSpecsByType.location) {
      router.push(notificationSpecsByType.location);
    } else {
      alert(notification.message);
    }
    await markNotificationAsRead(notification.id);
    await refreshNotifications();
  };

  return (
    <Flex
      align="center"
      onClick={handleOnClick}
      role="button"
      className={`notification-component w-[100%] cursor-pointer p-2 shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out bg-${notificationSpecsByType.color}-light border border-${notificationSpecsByType.color}-dark`}
    >
      <UserAvatar src="/user.png" fallbackText="CT" />
      <span className="ml-4 text-gray-800 w-[75%] text-sm">
        {notificationSpecsByType.generateMessage(notification.message)}
      </span>
    </Flex>
  );
};

export default React.memo(NotificationComponent);
