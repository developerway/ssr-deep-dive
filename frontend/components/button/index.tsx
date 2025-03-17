import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";

import { merge } from "@fe/utils/merge-classnames";

const primaryLightCls =
  "bg-blinkNeutral900 hover:bg-blinkGray900 text-blinkGray50 disabled:bg-blinkNeutral300 disabled:text-blinkNeutral50 focus-visible:ring-offset-2";
const primaryDarkCls =
  "dark:bg-blinkGray50 dark:hover:bg-blinkGray400 dark:text-blinkGreen900 dark:disabled:bg-blinkGray400 dark:disabled:text-blinkNeutral400";

const secondaryLightCls =
  "bg-blinkGray600 hover:bg-blinkGray900 text-blinkGray50 disabled:bg-blinkNeutral300 disabled:text-blinkNeutral50 focus-visible:ring-offset-2";
const secondaryDarkCls =
  "dark:bg-blinkGray400 dark:hover:bg-blinkGray100 dark:text-blinkGreen900 dark:disabled:bg-blinkGray400 dark:disabled:text-blinkNeutral400";

const textLightCls =
  "bg-transparent hover:bg-blinkGray200 text-blinkGreen900b disabled:text-blinkGray400 disabled:hover:bg-transparent focus-visible:ring-offset-0";
const textDarkCls =
  "dark:hover:bg-blinkGray800 dark:text-blinkNeutral50 dark:disabled:text-blinkNeutral500 dark:disabled:hover:bg-transparent";

const linkLightCls =
  "underline underline-offset-2 bg-transparent hover:bg-blinkGray200 text-blinkGreen900b disabled:hover:bg-transparent disabled:text-blinkGray400 focus-visible:ring-offset-0";
const linkDarkCls =
  "dark:hover:bg-blinkGray800 dark:text-blinkNeutral50 dark:disabled:hover:bg-transparent dark:disabled:text-blinkNeutral500";

const dangerLightCls =
  "bg-blinkNeutral50 hover:bg-blinkCoral50/20 text-blinkCoral400 disabled:bg-blinkNeutral300 disabled:text-blinkNeutral50 border border-blinkCoral400 focus-visible:ring-offset-2";
const dangerDarkCls =
  "dark:bg-blinkGray900 dark:hover:bg-blinkGray800 dark:text-blinkNeutral50 dark:disabled:bg-blinkGray400 dark:disabled:text-blinkNeutral400 dark:border-blinkCoral300";

const appearanceCls = {
  primary: merge(primaryLightCls, primaryDarkCls),
  secondary: merge(secondaryLightCls, secondaryDarkCls),
  text: merge(textLightCls, textDarkCls),
  link: merge(linkLightCls, linkDarkCls),
  danger: merge(dangerLightCls, dangerDarkCls),
};

type Appearance = keyof typeof appearanceCls;

type ButtonProps = {
  as?: "button" | "span";
  appearance?: Appearance;
  children?: ReactNode;
  before?: ReactElement;
  after?: ReactElement;
};

const BaseButton = React.forwardRef(
  (
    {
      as = "button",
      appearance = "primary",
      children,
      before,
      after,
      className,
      ...rest
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const Component = as;
    return (
      <Component
        ref={ref}
        type="button"
        className={merge(
          "inline-flex gap-2 items-center justify-center rounded px-3 py-1 shrink-0 blink-double-focus-ring",
          appearanceCls[appearance],
          className,
        )}
        {...rest}
      >
        {before}
        {children}
        {after}
      </Component>
    );
  },
);

export const Button = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge("text-sm h-10", className)}
        {...props}
      />
    );
  },
);

export const SmallButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge("text-sm h-8", className)}
        {...props}
      />
    );
  },
);

export const LargeButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge("text-base h-11", className)}
        {...props}
      />
    );
  },
);

export const XLargeButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge("text-lg h-14", className)}
        {...props}
      />
    );
  },
);

export const SmallToLargeButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge(
          "h-11 sm:h-8 text-base sm:text-sm w-full sm:w-auto flex sm:inline-flex",
          className,
        )}
        {...props}
      />
    );
  },
);

export const NormalToLargeButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge(
          "h-14 sm:h-10 text-lg sm:text-sm w-full sm:w-auto flex sm:inline-flex",
          className,
        )}
        {...props}
      />
    );
  },
);
