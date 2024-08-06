"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import * as Form from "@radix-ui/react-form";
import * as Select from "@radix-ui/react-select";
import { useSession } from "next-auth/react";
import * as Tooltip from "@radix-ui/react-tooltip";
import { NotificationType } from "@prisma/client";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { useNotificationContext } from "@/app/context/NotificationContext";
import { notificationSpecs } from "@/app/lib/notification-specs";
import styles from "./NotificationForm.module.css";

const schema = z
  .object({
    notificationType: z.nativeEnum(NotificationType),
    releaseNumber: z.string().optional(),
    name: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.notificationType === NotificationType.PLATFORM_UPDATE) {
        return !!data.releaseNumber;
      } else {
        return !!data.name;
      }
    },
    {
      message: "Required field missing",
      path: ["releaseNumber", "name"],
    }
  );

type FormData = z.infer<typeof schema>;

const NotificationForm: React.FC<{ onSubmitAdditionalLogic: () => void }> = ({
  onSubmitAdditionalLogic,
}) => {
  const { data: session } = useSession();
  const { refreshNotifications } = useNotificationContext();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const notificationType = watch("notificationType");

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/notification/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session?.user?.id,
          type: data.notificationType,
          message:
            data.notificationType === NotificationType.PLATFORM_UPDATE
              ? data.releaseNumber
              : data.name,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const result = await response.json();
      console.log("Notification created:", result);
      refreshNotifications();
    } catch (error) {
      console.error("Failed to create notification:", error);
    }
    onSubmitAdditionalLogic();
  };

  return (
    <Tooltip.Provider>
      <Form.Root onSubmit={handleSubmit(onSubmit)} className={styles.formRoot}>
        <Form.Field className={styles.formField} name="notificationType">
          <Form.Label className={styles.formLabel}>
            Notification Type
          </Form.Label>
          <Select.Root
            onValueChange={(value) =>
              setValue("notificationType", value as NotificationType)
            }
          >
            <Select.Trigger className={styles.selectTrigger}>
              <Select.Value placeholder="Select a type" />
            </Select.Trigger>
            <Select.Content className={styles.selectContent}>
              {Object.values(NotificationType).map((notification) => (
                <Select.Item
                  key={notification}
                  value={notification}
                  className={styles.selectItem}
                >
                  <Select.ItemText>
                    <div className="flex items-center justify-between">
                      {notificationSpecs[notification].name}
                      <InfoCircledIcon
                        width={"30px"}
                        className={`text-${notificationSpecs[notification].color}`}
                      />
                    </div>
                  </Select.ItemText>
                </Select.Item>
              ))}
            </Select.Content>
          </Select.Root>
          {errors.notificationType && (
            <Tooltip.Root>
              <Tooltip.Trigger>
                <span className={styles.errorText}>
                  {errors.notificationType.message?.toString()}
                </span>
              </Tooltip.Trigger>
              <Tooltip.Content side="bottom" className={styles.tooltipContent}>
                {errors.notificationType.message?.toString()}
                <Tooltip.Arrow className="fill-current text-red-500" />
              </Tooltip.Content>
            </Tooltip.Root>
          )}
        </Form.Field>

        {notificationType === NotificationType.PLATFORM_UPDATE && (
          <Form.Field className={styles.formField} name="releaseNumber">
            <Form.Label className={styles.formLabel}>Release Number</Form.Label>
            <input
              type="text"
              {...register("releaseNumber")}
              className={styles.input}
            />
            {errors.releaseNumber && (
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <span className={styles.errorText}>
                    {errors.releaseNumber.message?.toString()}
                  </span>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="bottom"
                  className={styles.tooltipContent}
                >
                  {errors.releaseNumber.message?.toString()}
                  <Tooltip.Arrow className="fill-current text-red-500" />
                </Tooltip.Content>
              </Tooltip.Root>
            )}
          </Form.Field>
        )}

        {notificationType !== NotificationType.PLATFORM_UPDATE && (
          <Form.Field className={styles.formField} name="name">
            <Form.Label className={styles.formLabel}>Name</Form.Label>
            <input type="text" {...register("name")} className={styles.input} />
            {errors.name && (
              <Tooltip.Root>
                <Tooltip.Trigger>
                  <span className={styles.errorText}>
                    {errors.name.message?.toString()}
                  </span>
                </Tooltip.Trigger>
                <Tooltip.Content
                  side="bottom"
                  className={styles.tooltipContent}
                >
                  {errors.name.message?.toString()}
                  <Tooltip.Arrow className="fill-current text-red-500" />
                </Tooltip.Content>
              </Tooltip.Root>
            )}
          </Form.Field>
        )}
        <Form.Submit asChild>
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </Form.Submit>
      </Form.Root>
    </Tooltip.Provider>
  );
};

export default NotificationForm;
