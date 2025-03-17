import { HTMLAttributes, ReactNode } from "react";

import { merge } from "@fe/utils/merge-classnames";

export const VariationBase = ({
  children,
  title,
  className,
  ...props
}: {
  children: ReactNode;
  title?: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={merge(
        "blink-surface-default border blink-border-container-white p-10 rounded-lg shadow-[0_0_24px_0px_rgba(0,0,0,0.04)] overflow-auto",
        className,
      )}
    >
      {title ? <h3 className="text-base mb-6">{title}</h3> : null}
      <div className="flex gap-4 items-center flex-wrap w-full">{children}</div>
    </div>
  );
};

export const Variation = ({
  className,
  ...props
}: {
  children: ReactNode;
  title?: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <VariationBase
      {...props}
      className={merge(
        "blink-surface-default border blink-border-container-white",
        className,
      )}
    />
  );
};
export const VariationDarker = ({
  className,
  ...props
}: {
  children: ReactNode;
  title?: string;
  className?: string;
} & HTMLAttributes<HTMLDivElement>) => {
  return (
    <VariationBase
      {...props}
      className={merge(
        "border-b blink-border-container-white blink-surface-light",
        className,
      )}
    />
  );
};

export const VariationsContainer = ({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={merge("flex flex-col gap-6 p-6", className)} {...props}>
      {children}
    </div>
  );
};
