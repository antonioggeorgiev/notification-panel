import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import NotificationForm from "./NotificationForm";
import styles from "./NotificationDialog.module.css";
import { NotificationProvider } from "@/app/context/NotificationContext";

interface NotificationDialogProps {
  trigger: React.ReactNode;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NotificationDialog: React.FC<NotificationDialogProps> = ({
  trigger,
  open,
  setOpen,
}) => {
  const closeDialog = () => setOpen(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen} modal>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={styles.overlay} />
        <Dialog.Content className={styles.content}>
          <Dialog.Title className={styles.title}>
            Create Notification
          </Dialog.Title>
          <Dialog.Description className={styles.description} />
          <NotificationForm onSubmitAdditionalLogic={closeDialog} />
          <Dialog.Close asChild>
            <button
              className={styles.closeButton}
              aria-label="Close"
              onClick={closeDialog}
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default React.memo(NotificationDialog);
