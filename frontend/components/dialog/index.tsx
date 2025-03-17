import { HTMLAttributes, ReactNode } from "react";

import { Button } from "@fe/components/button";
import { CloseIcon } from "@fe/icons/close-icon";
import { merge } from "@fe/utils/merge-classnames";
import * as DialogPrimitives from "@radix-ui/react-dialog";

type DialogProps = {
  trigger?: ReactNode;
  size?: "small" | "medium" | "large";
};

export const Dialog = ({
  trigger,
  size = "medium",
  children,
  ...props
}: DialogPrimitives.DialogProps & DialogProps) => {
  return (
    <DialogPrimitives.Root {...props}>
      <DialogPrimitives.Trigger asChild>{trigger}</DialogPrimitives.Trigger>
      <DialogPrimitives.Portal>
        <DialogPrimitives.Overlay className="bg-blinkGray900/40 dark:bg-blinkGray900/80 fixed inset-0 focus-visible:ring-offset-0 focus-visible:ring-0 data-[state=open]:animate-overlayShow" />

        <div
          className={merge(
            "fixed top-0 left-0 w-screen h-screen flex flex-col",
            "items-center justify-end sm:justify-center p-0 sm:p-8",
          )}
        >
          <DialogPrimitives.Content
            className={merge(
              "group",
              "flex flex-col overflow-y-auto",
              "bg-blinkNeutral50 dark:bg-blinkNeutral800 rounded-t-3xl sm:rounded-b-3xl relative data-[state=open]:animate-slide-in-bottom sm:data-[state=open]:animate-contentShow",
              "w-full sm:w-[28.75rem] max-h-[96%] sm:max-w-[90%] shadow-md",
              size === "medium" ? "sm:w-[37.5rem]" : undefined,
              size === "large" ? "sm:w-[53.25rem]" : undefined,
            )}
          >
            {children}
          </DialogPrimitives.Content>
        </div>
      </DialogPrimitives.Portal>
    </DialogPrimitives.Root>
  );
};

export const DialogTitle = ({
  className,
  ...props
}: DialogPrimitives.DialogTitleProps) => (
  <DialogPrimitives.Title
    className={merge(
      "font-blink-title text-4xl italic flex items-center mb-8",
      className,
    )}
    {...props}
  />
);

export const DialogClose = ({
  className,
  ...props
}: DialogPrimitives.DialogCloseProps) => (
  <DialogPrimitives.Close
    asChild
    className={merge(
      "absolute blink-text-primary",
      "top-2 right-2",
      "sm:group-data-[size=medium]:top-4 sm:group-data-[size=medium]:right-4",
      "sm:group-data-[size=large]:top-6 sm:group-data-[size=large]:right-6",
      className,
    )}
    {...props}
  >
    <Button appearance="text" className="w-10 h-10 px-2 rounded-full">
      <CloseIcon className="w-6 h-6" />
    </Button>
  </DialogPrimitives.Close>
);

export const DialogBody = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={merge("p-6 flex flex-col flex-grow", className)} {...props} />
);

export const DialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={merge("p-6", className)} {...props} />
);

export const DialogDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={merge("text-sm blink-text-subdued", className)} {...props} />
);
