import React, { ReactNode } from "react";
import { Transition } from "react-transition-group";

import { Button } from "@fe/components/button";
import { DoubleChevronsLeftIcon } from "@fe/icons/double-chevrons-left-icon";
import { DoubleChevronsRightIcon } from "@fe/icons/double-chevrons-right-icon";
import { MenuIcon } from "@fe/icons/menu-icon";
import { merge } from "@fe/utils/merge-classnames";
import * as DialogPrimitives from "@radix-ui/react-dialog";

export const SecondarySidebar = ({
  children,
  className,
  ...rest
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={merge(
        "w-[4.25rem] bg-blinkNeutral50 dark:bg-blinkNeutral800 h-full overflow-y-auto flex flex-col gap-6 items-center",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export const PrimarySidebar = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <DialogPrimitives.Root>
        <div className="flex pt-3 px-3 lg:hidden">
          <DialogPrimitives.Trigger asChild>
            <Button
              appearance="text"
              className="w-11 h-11 px-0 py-0 inline-flex"
              aria-label="Open sidebar"
              aria-controls="primary-sidebar-content"
            >
              <MenuIcon className="w-6 h-6 shrink-0" />
            </Button>
          </DialogPrimitives.Trigger>
        </div>
        <DialogPrimitives.Portal>
          <DialogPrimitives.Overlay className="fixed bg-buGray900 opacity-5 inset-0" />

          <DialogPrimitives.Content
            id="primary-sidebar-content"
            className={merge(
              "fixed top-0 left-0 w-[22rem] max-w-[90%] bg-blinkNeutral50 dark:bg-blinkNeutral800 h-full overflow-y-auto p-4 flex flex-col gap-6 animate-slide-in-left",
              className,
            )}
          >
            {children}
          </DialogPrimitives.Content>
        </DialogPrimitives.Portal>
      </DialogPrimitives.Root>

      <div
        className={merge(
          "w-[16.25rem] bg-blinkNeutral50 dark:bg-blinkNeutral800 h-full overflow-y-auto p-4 hidden lg:flex flex-col gap-6",
          className,
        )}
      >
        {children}
      </div>
    </>
  );
};

export const CollapsiblePrimarySidebar = ({
  children,
  collapsedElements,
  className,
}: {
  children: ReactNode;
  collapsedElements: ReactNode;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <DialogPrimitives.Root>
        <div className="flex pt-3 px-3 lg:hidden">
          <DialogPrimitives.Trigger asChild>
            <Button
              appearance="text"
              className="w-11 h-11 px-0 py-0 inline-flex"
              aria-label="Open sidebar"
              aria-controls="collapsible-primary-sidebar-content"
            >
              <MenuIcon className="w-6 h-6 shrink-0" />
            </Button>
          </DialogPrimitives.Trigger>
        </div>
        <DialogPrimitives.Portal>
          <DialogPrimitives.Overlay className="fixed bg-buGray900 opacity-5 inset-0" />

          <DialogPrimitives.Content
            id="collapsible-primary-sidebar-content"
            className={merge(
              "fixed top-0 left-0 z-50 w-[22rem] max-w-[90%] bg-blinkNeutral50 dark:bg-blinkNeutral800 h-full overflow-y-auto p-4 flex flex-col gap-6 animate-slide-in-left",
              className,
            )}
          >
            {children}
          </DialogPrimitives.Content>
        </DialogPrimitives.Portal>
      </DialogPrimitives.Root>
      <Transition in={isOpen} timeout={300}>
        {(state) => {
          return (
            <div
              data-sidebar-open={state !== "exited" ? "true" : "false"}
              className={merge(
                "group",
                "hidden lg:block",
                "transition-all duration-300 overflow-hidden",
                isOpen ? "w-[16.25rem]" : "w-[4.25rem]",
                className,
              )}
            >
              <div
                className={merge(
                  "group-data-[sidebar-open=true]:w-[16.25rem] group-data-[sidebar-open=false]:items-center",
                  "bg-blinkNeutral50 dark:bg-blinkNeutral800 h-full overflow-y-auto p-4 hidden lg:flex flex-col gap-6 relative",
                )}
              >
                <Button
                  appearance="text"
                  className="px-0 w-16 sm:w-8 h-16 sm:h-8 group-data-[sidebar-open='true']:absolute group-data-[sidebar-open=true]:top-4 group-data-[sidebar-open='true']:right-4"
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
                  aria-expanded={isOpen}
                >
                  {state !== "exited" ? (
                    <DoubleChevronsLeftIcon className="w-8 h-8 sm:w-6 sm:h-6" />
                  ) : (
                    <DoubleChevronsRightIcon className="w-8 h-8 sm:w-6 sm:h-6" />
                  )}
                </Button>
                {state === "exited" ? collapsedElements : children}
              </div>
            </div>
          );
        }}
      </Transition>
    </>
  );
};
