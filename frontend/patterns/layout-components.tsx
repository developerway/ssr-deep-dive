import { ReactNode } from "react";

import { merge } from "@fe/utils/merge-classnames";

export const Layout = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={merge(
        "blink-text-primary flex flex-col lg:flex-row h-screen bg-blinkGray50 dark:bg-blinkNeutral900 gap-0.5",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export const Content = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={merge(
        "flex flex-1 h-full overflow-y-auto flex-col",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export const ContentHeading = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={merge("h-24 p-6", className)} {...rest}>
      {children}
    </div>
  );
};

export const ContentBody = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={merge("px-6 pb-6 flex-grow flex flex-col", className)}
      {...rest}
    >
      <div className="bg-blinkNeutral50 dark:bg-blinkNeutral800 flex-1 py-7 px-6 rounded-lg overflow-x-auto">
        {children}
      </div>
    </div>
  );
};
