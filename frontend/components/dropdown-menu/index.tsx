import { ReactNode, ReactElement } from "react";

import { merge } from "@fe/utils/merge-classnames";
import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu";

type DropdownMenuProps = {
  trigger: ReactElement<DropdownMenuPrimitives.DropdownMenuTriggerProps>;
  children: ReactElement<DropdownMenuPrimitives.DropdownMenuContentProps>;
};
export const DropdownMenu = ({
  trigger,
  children,
  ...rest
}: DropdownMenuProps & DropdownMenuPrimitives.DropdownMenuProps) => {
  return (
    <DropdownMenuPrimitives.Root {...rest}>
      {trigger}
      {children}
    </DropdownMenuPrimitives.Root>
  );
};

export const DropdownMenuTrigger = (
  props: DropdownMenuPrimitives.DropdownMenuTriggerProps,
) => {
  return <DropdownMenuPrimitives.Trigger asChild {...props} />;
};

export const DropdownMenuContent = ({
  className,
  ...props
}: DropdownMenuPrimitives.DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitives.Portal>
      <DropdownMenuPrimitives.Content
        className={merge(
          "bg-blinkNeutral50 dark:bg-blinkNeutral800 rounded hover:ring-0 hover:ring-offset-0 focus:ring-0 focus:ring-offset-0 shadow-[0_3px_24px_0px_rgba(0,0,0,0.13)] min-w-[13.75rem] max-h-96 overflow-auto",
          className,
        )}
        {...props}
      />
    </DropdownMenuPrimitives.Portal>
  );
};

type DropdownMenuItemProps = {
  before?: ReactNode;
  after?: ReactNode;
};

export const DropdownMenuItem = ({
  before,
  after,
  children,
  className,
  ...props
}: DropdownMenuItemProps & DropdownMenuPrimitives.DropdownMenuItemProps) => {
  return (
    <DropdownMenuPrimitives.Item
      className={merge(
        "text-sm blink-text-subdued hover:bg-blinkGray100 dark:hover:bg-blinkGray800 focus:bg-blinkGray100 dark:focus:bg-blinkGray800 hover:ring-0 hover:ring-offset-0 focus:ring-0 focus:ring-offset-0 cursor-pointer first:rounded-t last:rounded-b",
        className,
      )}
      {...props}
    >
      <span className="flex py-2 px-3 gap-1 items-center h-12 sm:h-10">
        {before && <span className="shrink-0">{before}</span>}
        <span className="flex-grow">{children}</span>
        {after && <span className="shrink-0">{after}</span>}
      </span>
    </DropdownMenuPrimitives.Item>
  );
};

export const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuPrimitives.DropdownMenuSeparatorProps) => {
  return (
    <DropdownMenuPrimitives.Separator
      {...props}
      className={merge("border-b border-blinkGray100 my-1", className)}
    />
  );
};

export const DropdownMenuLabel = ({
  className,
  ...props
}: DropdownMenuPrimitives.DropdownMenuLabelProps) => {
  return (
    <DropdownMenuPrimitives.Label
      {...props}
      className={merge(
        "block text-sm blink-text-secondary px-3 py-2",
        className,
      )}
    />
  );
};
