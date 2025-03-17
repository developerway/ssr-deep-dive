import { ButtonHTMLAttributes } from "react";

import { merge } from "@fe/utils/merge-classnames";
import * as Switch from "@radix-ui/react-switch";

const ToggleBase = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Switch.Root
      {...props}
      className={merge(
        "peer inline-flex flex-shrink-0 items-center rounded-full blink-double-focus-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-blinkGreen400 data-[state=unchecked]:bg-blinkNeutral200 dark:data-[state=unchecked]:bg-blinkGray300",

        className,
      )}
    />
  );
};

const ThumbBase = ({ className, ...props }: Switch.SwitchThumbProps) => {
  return (
    <Switch.Thumb
      {...props}
      className={merge(
        "bg-blinkNeutral50 rounded-full transition-transform duration-100 data-[state=unchecked]:translate-x-0",
        className,
      )}
    />
  );
};

export const NarrowToggleNormal = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={merge("w-8 h-2.5 focus-visible:ring-offset-4", className)}
      {...props}
    >
      <ThumbBase className="w-4 h-4 border border-blinkGray200 mx-0 data-[state=checked]:translate-x-[1rem]" />
    </ToggleBase>
  );
};

export const NarrowToggleLarge = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={merge("w-12 h-3 focus-visible:ring-offset-4", className)}
      {...props}
    >
      <ThumbBase className="w-6 h-6 border border-blinkGray200 mx-0 data-[state=checked]:translate-x-[1.5rem]" />
    </ToggleBase>
  );
};

export const WideToggleNormal = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase className={merge("w-8 h-5", className)} {...props}>
      <ThumbBase className="w-4 h-4 mx-[0.125rem] data-[state=checked]:translate-x-[0.75rem]" />
    </ToggleBase>
  );
};

export const WideToggleLarge = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase className={merge("w-12 h-7", className)} {...props}>
      <ThumbBase className="w-6 h-6 data-[state=checked]:translate-x-[1.125rem] mx-[0.1875rem]" />
    </ToggleBase>
  );
};

export const NormalToLargeWideToggle = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={merge("w-[4.125rem] sm:w-8 h-[2.375rem] sm:h-5", className)}
      {...props}
    >
      <ThumbBase className="w-8 h-8 sm:w-4 sm:h-4 mx-[0.1875rem] sm:mx-[0.125rem] data-[state=checked]:translate-x-[1.75rem] sm:data-[state=checked]:translate-x-[0.75rem]" />
    </ToggleBase>
  );
};

export const LargerToXLargeWideToggle = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={merge("w-[4.75rem] sm:w-12 h-[2.8rem] sm:h-7", className)}
      {...props}
    >
      <ThumbBase className="w-10 h-10 sm:w-6 sm:h-6 data-[state=checked]:translate-x-[1.9rem] sm:data-[state=checked]:translate-x-[1.125rem] mx-[0.1875rem]" />
    </ToggleBase>
  );
};

export const NormalToLargeNarrowToggle = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={merge(
        "w-[4.125rem] sm:w-8 h-4 sm:h-2.5 focus-visible:ring-offset-4",
        className,
      )}
      {...props}
    >
      <ThumbBase className="w-8 h-8 sm:w-4 sm:h-4 border border-blinkGray200 mx-0 sm:mx-0 data-[state=checked]:translate-x-[2.125rem] sm:data-[state=checked]:translate-x-[1rem]" />
    </ToggleBase>
  );
};

export const LargerToXLargeNarrowToggle = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={merge(
        "w-[4.75rem] sm:w-12 h-5 sm:h-3 focus-visible:ring-offset-4",
        className,
      )}
      {...props}
    >
      <ThumbBase className="w-10 h-10 sm:w-6 sm:h-6 border border-blinkGray200 mx-0 sm:mx-0 data-[state=checked]:translate-x-[2.25rem] sm:data-[state=checked]:translate-x-[1.5rem]" />
    </ToggleBase>
  );
};
