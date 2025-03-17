import { InputHTMLAttributes } from "react";

import { merge } from "@fe/utils/merge-classnames";

const Base = ({
  className,
  type = "text",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      type={type}
      className={merge(
        "rounded py-2.5 px-3 w-full blink-double-focus-ring focus-visible:ring-offset-0",
        "disabled:cursor-not-allowed disabled:bg-blinkNeutral200 disabled:text-blinkNeutral50 disabled:border-blinkNeutral200",
        "placeholder:blink-text-subdued blink-text-secondary border border-blinkGray100 bg-blinkGray50 hover:bg-blinkGray100 dark:bg-blinkGray900 dark:border-blinkGray900 dark:hover:bg-blinkGray800 dark:text-blinkNeutral50 dark:disabled:bg-blinkNeutral600 dark:disabled:border-blinkNeutral600 dark:disabled:text-blinkNeutral400 dark:disabled:placeholder:text-blinkNeutral500",
        className,
      )}
      {...props}
    />
  );
};

export const BaseInput = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <Base {...props} className={merge("h-10 text-sm", className)} />;
};

export const NormalToLargeInput = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Base
      {...props}
      className={merge("h-14 sm:h-10 text-lg sm:text-sm", className)}
    />
  );
};
