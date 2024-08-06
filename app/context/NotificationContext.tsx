import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { useSession } from "next-auth/react";
import { Notification } from "prisma/prisma-client";

interface NotificationContextProps {
  notifications: Notification[];
  refreshNotifications: () => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(
  undefined
);

export const useNotificationContext = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotificationContext must be used within a NotificationProvider"
    );
  }
  return context;
};

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  const { data: session } = useSession();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const userId = session?.user?.id;

  const fetchNotifications = async () => {
    try {
      const response = await fetch(`/api/notification/get?userId=${userId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch notifications");
      }
      const data = await response.json();
      setNotifications(data.notifications);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (userId) {
      fetchNotifications();
    }
  }, []);

  return (
    <NotificationContext.Provider
      value={{ notifications, refreshNotifications: fetchNotifications }}
    >
      {children}
    </NotificationContext.Provider>
  );
};
