import { HTMLAttributes, ReactElement, ReactNode } from "react";

import { CloseCircleIcon } from "@fe/icons/close-circle-icon";
import { merge } from "@fe/utils/merge-classnames";

export type PillProps = {
  children?: ReactNode;
  className?: string;
  before?: ReactElement;
  after?: ReactElement;
  onDelete?: () => void;
  deleteClassName?: string;
};

export function Pill({
  children,
  before,
  after,
  onDelete,
  deleteClassName,
  className,
  ...rest
}: PillProps & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      {...rest}
      className={merge(
        "inline-flex whitespace-nowrap gap-1 items-center justify-center rounded text-sm px-2 py-1 h-8 bg-blinkGray50 border border-blinkGray100 blink-text-primary",
        "dark:bg-blinkGray700 dark:border-blinkGray700",
        className,
      )}
    >
      {before}
      {children}
      {after}
      {onDelete ? (
        <button
          className={merge(
            "rounded-full blink-double-focus-ring focus-visible:ring-1 focus-visible:ring-offset-0 p-0 hover:bg-blinkNeutral900/20",
            deleteClassName,
          )}
        >
          <CloseCircleIcon className="w-5 h-5" />
        </button>
      ) : null}
    </span>
  );
}

Pill.displayName = "Pill";
