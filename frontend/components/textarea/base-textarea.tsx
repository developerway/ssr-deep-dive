import { TextareaHTMLAttributes } from "react";

import { merge } from "@fe/utils/merge-classnames";

export function BaseTextarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={merge(
        "block placeholder:blink-text-subdued blink-text-secondary rounded h-36 min-h-10 py-2.5 px-3 w-full blink-double-focus-ring focus-visible:ring-offset-0 text-lg sm:text-sm",
        "bg-blinkGray50 hover:bg-blinkGray100 dark:bg-blinkGray900 border border-blinkGray100 dark:border-blinkGray900 dark:hover:bg-blinkGray800 dark:text-blinkNeutral50 dark:disabled:bg-blinkNeutral600 dark:disabled:border-blinkNeutral600 dark:disabled:text-blinkNeutral400 dark:disabled:placeholder:text-blinkNeutral500",

        // disabled state
        "disabled:cursor-not-allowed disabled:bg-blinkNeutral200 disabled:text-blinkNeutral50 disabled:border-blinkNeutral200",
        className,
      )}
      {...props}
    />
  );
}

BaseTextarea.displayName = "BaseTextarea";
