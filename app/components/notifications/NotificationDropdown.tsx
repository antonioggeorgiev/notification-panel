import React, { useState } from "react";
import NavigationDropdown from "../navigation/NavigationDropdown";
import { BellIcon } from "@radix-ui/react-icons";
import { Box, Flex } from "@radix-ui/themes";
import NotificationDialog from "./NotificationDialog";
import NotificationList from "./NotificationList";
import { NotificationProvider } from "@/app/context/NotificationContext";
import styles from "./NotificationDropdown.module.css";

const NotificationDropdown: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavigationDropdown icon={BellIcon} ariaLabel="Notifications">
      <Flex height={"120px"} width={"300px"}>
        <NotificationProvider>
          <NotificationDialog
            open={open}
            setOpen={setOpen}
            trigger={
              <Box
                role="button"
                className={styles.notifyButton}
                onClick={() => setOpen(true)}
              >
                Notify
              </Box>
            }
          />
          <NotificationList />
        </NotificationProvider>
      </Flex>
    </NavigationDropdown>
  );
};

export default React.memo(NotificationDropdown);
