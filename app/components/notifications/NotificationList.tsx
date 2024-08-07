import React from "react";
import NotificationComponent from "./NotificationComponent";
import { Box, Flex } from "@radix-ui/themes";
import { useNotificationContext } from "@/app/context/NotificationContext";

const NotificationList = () => {
  const { notifications } = useNotificationContext();
  console.log(notifications);
  if (notifications.length === 0) {
    return (
      <Flex align={"center"}>
        <p>No unread notifications currently.</p>
      </Flex>
    );
  }

  return (
    <Box className="overflow-auto w-[100%]">
      {notifications.map((notification) => (
        <NotificationComponent
          key={notification.id}
          notification={notification}
        />
      ))}
    </Box>
  );
};

export default React.memo(NotificationList);
