import React from "react";
import NotificationComponent from "./NotificationComponent";
import { Box } from "@radix-ui/themes";
import { useNotificationContext } from "@/app/context/NotificationContext";

const NotificationList = () => {
  const { notifications } = useNotificationContext();

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
