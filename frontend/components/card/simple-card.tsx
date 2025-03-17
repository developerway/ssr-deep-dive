import React, { HTMLAttributes, LinkHTMLAttributes } from "react";

import { merge } from "@fe/utils/merge-classnames";

export const Card = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={merge(
        "bg-blinkNeutral50 dark:bg-blinkNeutral800 border border-blinkGray100 dark:border-blinkNeutral900 rounded-lg",
        className,
      )}
    />
  );
};

export const CardHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={merge(
        "bg-blinkGreen50 dark:bg-blinkGray900 p-4 rounded-t-lg text-base",
        className,
      )}
    />
  );
};

export const CardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={merge("p-4", className)} />;
};

export const CardContentLink = ({
  className,
  ...props
}: LinkHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      {...props}
      className={merge(
        "block p-4 hover:bg-blinkGreen300/30 last:rounded-b-lg first:rounded-t-lg only:rounded-lg focus-visible:ring-blinkGreen300 border-blinkGreen300 focus-visible:ring-offset-0",
        className,
      )}
    />
  );
};

export const CardFooterFull = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={merge(
        "bg-blinkGreen50 dark:bg-blinkGray900 p-4 rounded-b-lg",
        className,
      )}
    />
  );
};

export const CardFooterLight = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={merge("w-full flex justify-between p-4", className)}
    />
  );
};

export const CardImage = ({
  className,
  src,
  alt,
  ...props
}: HTMLAttributes<HTMLImageElement> & { src: string; alt?: string }) => {
  return (
    <img
      {...props}
      className={merge("object-cover flex-shrink-0 h-auto", className)}
      src={src}
      alt={alt}
    />
  );
};
