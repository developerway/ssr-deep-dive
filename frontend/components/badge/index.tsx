import { HTMLAttributes } from "react";

import { merge } from "@fe/utils/merge-classnames";

export type BadgeProps = {
  className?: string;
  size?: "default" | "small" | "xsmall";
  text?: string;
};

export const BadgeBase = ({
  className,
  size = "default",
  text,
  ...rest
}: BadgeProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...rest}
      className={merge(
        "inline-flex gap-1 items-center justify-center rounded-full h-6 px-2 py-1",
        size === "xsmall" ? "h-2 min-w-2 px-0.5 py-0 text-[0.5rem]" : "",
        size === "small" ? "h-4 min-w-4 px-1 py-0.5 text-xs" : "",
        size === "default" ? "min-w-6 h-6 px-2 py-1 text-sm" : "",
        className,
      )}
    >
      {text}
    </span>
  );
};

export const Badge = ({
  className,
  ...props
}: BadgeProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <BadgeBase
      className={merge("text-blinkNeutral50 bg-blinkCoral400", className)}
      {...props}
    />
  );
};
