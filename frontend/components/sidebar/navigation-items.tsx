import React, { HTMLAttributes, ReactNode } from "react";

import { Tooltip } from "@fe/components/tooltip";
import { Link } from "@fe/utils/link";
import { merge } from "@fe/utils/merge-classnames";
import { usePath } from "@fe/utils/use-client-router";

type SidebarItemProps = {
  before?: ReactNode;
  after?: ReactNode;
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  ariaLabel?: string;
} & HTMLAttributes<HTMLElement>;

export const SidebarBaseItem = React.forwardRef(
  (
    {
      before,
      after,
      children,
      href,
      onClick,
      isActive,
      className,
      ...rest
    }: SidebarItemProps,
    ref: React.ForwardedRef<never>,
  ) => {
    const Component = href ? "a" : onClick ? "button" : "span";
    return (
      <Component
        ref={ref}
        className={merge(
          "flex items-center min-h-[3.375rem] sm:min-h-[2.125rem] rounded blink-double-focus-ring focus-visible:ring-offset-0",
          isActive ? "bg-blinkGray200 dark:bg-blinkGray700" : undefined,
          href || onClick
            ? "hover:bg-blinkGray100 dark:hover:bg-blinkGray800"
            : undefined,
          className,
        )}
        href={href}
        onClick={onClick}
        tabIndex={0}
        role={onClick ? "button" : undefined}
        {...rest}
      >
        {before && <span className="flex-shrink-0 inline-flex">{before}</span>}
        <span className="flex-grow inline-flex group-data-[sidebar-open=false]:hidden">
          {children}
        </span>
        {after && (
          <span className="flex-shrink-0 inline-flex group-data-[sidebar-open=false]:hidden">
            {after}
          </span>
        )}
      </Component>
    );
  },
);

export const SidebarLinkItem = React.forwardRef(
  (
    {
      before,
      after,
      children,
      href,
      onClick,
      isActive,
      className,
      ...rest
    }: SidebarItemProps,
    ref: React.ForwardedRef<never>,
  ) => {
    const Component = href ? Link : onClick ? "button" : "span";
    return (
      <Component
        ref={ref}
        className={merge(
          "flex items-center min-h-[3.375rem] sm:min-h-[2.125rem] rounded blink-double-focus-ring focus-visible:ring-offset-0",
          isActive ? "bg-blinkGray200 dark:bg-blinkGray700" : undefined,
          href || onClick
            ? "hover:bg-blinkGray100 dark:hover:bg-blinkGray800"
            : undefined,
          className,
        )}
        href={href}
        onClick={onClick}
        tabIndex={0}
        role={onClick ? "button" : undefined}
        {...rest}
      >
        {before && <span className="flex-shrink-0 inline-flex">{before}</span>}
        <span className="flex-grow inline-flex group-data-[sidebar-open=false]:hidden">
          {children}
        </span>
        {after && (
          <span className="flex-shrink-0 inline-flex group-data-[sidebar-open=false]:hidden">
            {after}
          </span>
        )}
      </Component>
    );
  },
);

export const SidebarIconItem = ({
  className,
  title,
  ...props
}: SidebarItemProps & { title: string }) => {
  return (
    <Tooltip text={title} position="right">
      <SidebarBaseItem
        className={merge(
          "flex items-center justify-center min-w-8 min-h-[2.125rem] hover:bg-blinkGray100 dark:hover:bg-blinkGray800 rounded",
          className,
        )}
        aria-label={title}
        {...props}
      />
    </Tooltip>
  );
};

export const SidebarRegularItem = React.forwardRef(
  (
    { className, ...props }: SidebarItemProps,
    ref: React.ForwardedRef<never>,
  ) => {
    return (
      <SidebarBaseItem
        ref={ref}
        className={merge("px-2 gap-3 sm:gap-2", className)}
        {...props}
      />
    );
  },
);

export const SidebarRegularLinkItem = React.forwardRef(
  (
    { className, ...props }: SidebarItemProps,
    ref: React.ForwardedRef<never>,
  ) => {
    const path = usePath();
    return (
      <SidebarLinkItem
        ref={ref}
        className={merge("px-2 gap-3 sm:gap-2 cursor-pointer", className)}
        isActive={props.href === path}
        {...props}
      />
    );
  },
);

type SidebarHeadingProps = {
  children?: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  className?: string;
};

export const SidebarHeading = ({
  before,
  after,
  children,
  className,
  ...rest
}: SidebarHeadingProps) => {
  return (
    <div className={merge("flex gap-2 items-center", className)} {...rest}>
      {before && <span className="flex-shrink-0 inline-flex">{before}</span>}
      <span className="flex-grow inline-flex">{children}</span>
      {after && <span className="flex-shrink-0 inline-flex">{after}</span>}
    </div>
  );
};
