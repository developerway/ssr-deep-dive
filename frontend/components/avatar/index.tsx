import { HTMLAttributes, ReactNode } from "react";

import { merge } from "@fe/utils/merge-classnames";

type AvatarImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const AvatarImage = ({
  src,
  alt,
  className,
  ...props
}: AvatarImageProps) => {
  return <img src={src} alt={alt} {...props} className={merge(className)} />;
};

type AvatarFallbackProps = {
  className?: string;
  children?: ReactNode;
};

export const AvatarFallback = ({
  className,
  children,
  ...props
}: AvatarFallbackProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={merge(
        "flex items-center justify-center bg-blinkGreen400 text-blinkGreen700",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
