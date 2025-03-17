import React from "react";

import { merge } from "@fe/utils/merge-classnames";
import * as DialogPrimitives from "@radix-ui/react-dialog";

type DrawerProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  position?: "left" | "right";
};

export const Drawer = ({
  trigger,
  position = "left",
  ...props
}: DialogPrimitives.DialogProps & DrawerProps) => {
  return (
    <>
      <DialogPrimitives.Root {...props}>
        <DialogPrimitives.Trigger asChild>{trigger}</DialogPrimitives.Trigger>

        <DialogPrimitives.Portal>
          <DialogPrimitives.Overlay className="fixed bg-buGray900 opacity-5 inset-0" />

          <DialogPrimitives.Content
            className={merge(
              "fixed top-0 bg-blinkNeutral50 dark:bg-blinkNeutral800 h-full overflow-y-auto shadow-md",
              position === "left" &&
                "left-0 w-[22rem] max-w-[90%] animate-slide-in-left",
              position === "right" &&
                "right-0 w-[22rem] max-w-[90%] animate-slide-in-right",
            )}
          >
            {props.children}
          </DialogPrimitives.Content>
        </DialogPrimitives.Portal>
      </DialogPrimitives.Root>
    </>
  );
};
