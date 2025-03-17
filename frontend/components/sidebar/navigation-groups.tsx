import React, { ReactNode } from "react";

import { SidebarRegularItem } from "@fe/components/sidebar/navigation-items";
import { ChevronDownIcon } from "@fe/icons/chevron-down-icon";
import { ChevronRightIcon } from "@fe/icons/chevron-right-icon";
import { merge } from "@fe/utils/merge-classnames";
import * as CollapsiblePrimitives from "@radix-ui/react-collapsible";

type NavigationGroupProps = {
  left?: ReactNode;
  right?: ReactNode;
  header?: string;
  children: ReactNode;
  className?: string;
  divider?: "top" | "bottom";
};

export const NavigationGroup = ({
  header,
  children,
  right,
  left,
  divider,
  className,
  ...props
}: NavigationGroupProps) => {
  return (
    <div
      className={merge(
        "flex flex-col gap-1 flex-shrink-0",
        divider === "top"
          ? "pt-2 border-t border-blinkGray100 dark:border-blinkGray700"
          : undefined,
        divider === "bottom"
          ? "pb-2 border-b border-blinkGray100 dark:border-blinkGray700"
          : undefined,
        className,
      )}
      {...props}
    >
      {header || left || right ? (
        <div className="min-h-[2.125rem] flex items-center group-data-[sidebar-open=false]:hidden">
          {left}
          <span className="text-xs blink-text-subdued px-2 flex-grow uppercase">
            {header}
          </span>
        </div>
      ) : null}
      {children}
    </div>
  );
};

type ItemWithSubNavigationProps = {
  text: string;
  children: ReactNode;
  initialOpen?: boolean;
};

export const CollapsibleSubgroupLeft = ({
  text,
  children,
  initialOpen = false,
}: ItemWithSubNavigationProps) => {
  const [open, setOpen] = React.useState(initialOpen);

  return (
    <CollapsiblePrimitives.Root
      className="w-full group-data-[sidebar-open=false]:hidden"
      open={open}
      onOpenChange={setOpen}
    >
      <CollapsiblePrimitives.Trigger asChild>
        <SidebarRegularItem
          className="w-full"
          before={
            open ? (
              <ChevronDownIcon className="w-8 h-8 sm:w-6 sm:h-6" />
            ) : (
              <ChevronRightIcon className="w-8 h-8 sm:w-6 sm:h-6" />
            )
          }
          role="button"
          aria-expanded={open}
          aria-controls="collapsible-content-left"
        >
          {text}
        </SidebarRegularItem>
      </CollapsiblePrimitives.Trigger>

      <CollapsiblePrimitives.Content
        id="collapsible-content-left"
        className="py-1 flex flex-col gap-1"
      >
        {children}
      </CollapsiblePrimitives.Content>
    </CollapsiblePrimitives.Root>
  );
};

export const CollapsibleSubgroupRight = ({
  text,
  icon,
  children,
  initialOpen = false,
}: ItemWithSubNavigationProps & { icon?: ReactNode }) => {
  const [open, setOpen] = React.useState(initialOpen);

  return (
    <CollapsiblePrimitives.Root
      className="w-full"
      open={open}
      onOpenChange={setOpen}
    >
      <CollapsiblePrimitives.Trigger asChild>
        <SidebarRegularItem
          className="w-full"
          before={icon}
          after={
            open ? (
              <ChevronDownIcon className="w-8 h-8 sm:w-6 sm:h-6" />
            ) : (
              <ChevronRightIcon className="w-8 h-8 sm:w-6 sm:h-6" />
            )
          }
          role="button"
          aria-expanded={open}
          aria-controls="collapsible-content-right"
        >
          {text}
        </SidebarRegularItem>
      </CollapsiblePrimitives.Trigger>

      <CollapsiblePrimitives.Content
        id="collapsible-content-right"
        className="py-1 flex flex-col gap-1"
      >
        {children}
      </CollapsiblePrimitives.Content>
    </CollapsiblePrimitives.Root>
  );
};
