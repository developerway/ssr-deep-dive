import { ReactNode } from "react";

import { merge } from "@fe/utils/merge-classnames";
import * as TabsPrimitives from "@radix-ui/react-tabs";

export const TabsRoot = ({
  children,
  className,
  appearance = "full",
  ...props
}: TabsPrimitives.TabsProps & {
  appearance?: "full" | "reduced" | "minimal" | "vertical";
}) => {
  return (
    <TabsPrimitives.Root
      {...props}
      data-appearance={appearance}
      orientation={appearance === "vertical" ? "vertical" : "horizontal"}
      className={merge(
        "group sm:data-[orientation=vertical]:flex data-[orientation=vertical]:w-full sm:w-auto",
        className,
      )}
    >
      {children}
    </TabsPrimitives.Root>
  );
};
export const TabsList = ({
  children,
  className,
  ...props
}: TabsPrimitives.TabsListProps) => {
  return (
    <TabsPrimitives.List
      {...props}
      className={merge(
        "flex overflow-x-auto p-1 -m-1 w-full",
        "sm:group-data-[appearance=vertical]:flex-col sm:group-data-[appearance=vertical]:overflow-y-auto sm:group-data-[appearance=vertical]:w-56",
        className,
      )}
    >
      {children}
    </TabsPrimitives.List>
  );
};

type TabButton = {
  after?: ReactNode;
  before?: ReactNode;
} & TabsPrimitives.TabsTriggerProps;

export const TabButton = ({
  after,
  before,
  children,
  className,
  ...props
}: TabButton) => {
  return (
    <TabsPrimitives.Trigger
      {...props}
      className={merge(
        "group/tab",
        "h-[3.375rem] flex gap-2 items-center justify-center px-3 data-[state=active]:bg-blinkGray200 shrink-0 blink-double-focus-ring data-[state=active]:z-10",
        // full appearance
        "group-data-[appearance=full]:border group-data-[appearance=full]:border-blinkGray100 group-data-[appearance=full]:first:rounded-l-lg group-data-[appearance=full]:last:rounded-r-lg group-data-[appearance=full]:[&:not(:first-child)]:border-l-0 group-data-[appearance=full]:dark:bg-blinkNeutral800 group-data-[appearance=full]:dark:border-blinkGray900 group-data-[appearance=full]:dark:data-[state=active]:bg-blinkGray700",
        // reduced appearance
        "group-data-[appearance=reduced]:data-[state=active]:rounded group-data-[appearance=reduced]:dark:data-[state=active]:bg-blinkGray700",
        // minimal appearance
        "group-data-[appearance=minimal]:rounded-t-sm group-data-[appearance=minimal]:border-b group-data-[appearance=minimal]:border-blinkGray100 group-data-[appearance=minimal]:data-[state=active]:border-blinkGreen100 group-data-[appearance=minimal]:data-[state=active]:bg-transparent group-data-[appearance=minimal]:data-[state=active]:border-b-[3px] group-data-[appearance=minimal]:data-[state=active]:border-t-[2px] group-data-[appearance=minimal]:data-[state=active]:border-t-transparent group-data-[appearance=minimal]:dark:border-b-blinkNeutral800",
        // vertical appearance
        "sm:group-data-[appearance=vertical]:justify-start sm:group-data-[appearance=vertical]:h-[2.375rem] group-data-[appearance=vertical]:rounded group-data-[appearance=vertical]:dark:data-[state=active]:bg-blinkGray700",
        className,
      )}
    >
      {before}
      <span className="flex flex-grow group-data-[appearance=minimal]:flex-grow-0 justify-center sm:group-data-[appearance=vertical]:justify-start">
        {children}
      </span>
      {after}
    </TabsPrimitives.Trigger>
  );
};

export const TabContent = ({
  children,
  className,
  ...props
}: TabsPrimitives.TabsContentProps) => {
  return (
    <TabsPrimitives.Content {...props} className={merge("", className)}>
      {children}
    </TabsPrimitives.Content>
  );
};
