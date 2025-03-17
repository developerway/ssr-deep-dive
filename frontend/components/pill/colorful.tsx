import { HTMLAttributes } from "react";

import { Pill, PillProps } from "@fe/components/pill/base";
import { merge } from "@fe/utils/merge-classnames";

export const PillLightGold = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkGold50 border-blinkGold700 dark:text-blinkNeutral900 dark:bg-blinkGold600 dark:border-blinkGold700",
        className,
      )}
      deleteClassName="hover:bg-blinkGold700/20"
    />
  );
};

export const PillStrongGold = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkGold100 border-blinkGold400 dark:text-blinkNeutral900 dark:bg-blinkGold200 dark:border-blinkGold400",
        className,
      )}
      deleteClassName="hover:bg-blinkGold400/40"
    />
  );
};

export const PillLightGreen = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkGreen100 border-blinkGreen500 dark:text-blinkNeutral900 dark:bg-blinkGreen400 dark:border-blinkGreen500",
        className,
      )}
      deleteClassName="hover:bg-blinkGreen400/40"
    />
  );
};

export const PillStrongGreen = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkGreen200 border-blinkGreen700 dark:text-blinkNeutral900 dark:bg-blinkGreen500 dark:border-blinkGreen700",
        className,
      )}
      deleteClassName="hover:bg-blinkGreen700/20"
    />
  );
};

export const PillLightPeach = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkPeach50 border-blinkPeach500 dark:text-blinkNeutral900 dark:bg-blinkPeach200 dark:border-blinkPeach600",
        className,
      )}
      deleteClassName="hover:bg-blinkPeach500/40"
    />
  );
};

export const PillStrongPeach = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkPeach400 border-blinkPeach700 dark:text-blinkNeutral900 dark:bg-blinkPeach400 dark:border-blinkPeach700",
        className,
      )}
      deleteClassName="hover:bg-blinkPeach700/20"
    />
  );
};

export const PillLightOrange = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkOrange50 border-blinkOrange100 dark:text-blinkNeutral900 dark:bg-blinkOrange100 dark:border-blinkOrange100",
        className,
      )}
      deleteClassName="hover:bg-blinkOrange100/40"
    />
  );
};

export const PillStrongOrange = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkOrange400 border-blinkOrange800 dark:text-blinkNeutral900 dark:bg-blinkOrange400 dark:border-blinkOrange800",
        className,
      )}
      deleteClassName="hover:bg-blinkOrange800/20"
    />
  );
};

export const PillLightCoral = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkCoral50 border-blinkCoral300 dark:text-blinkNeutral900 dark:bg-blinkCoral300 dark:border-blinkCoral300",
        className,
      )}
      deleteClassName="hover:bg-blinkCoral300/40"
    />
  );
};

export const PillStrongCoral = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkCoral500 border-blinkCoral600 dark:text-blinkNeutral900 dark:bg-blinkCoral600 dark:border-blinkCoral600",
        className,
      )}
      deleteClassName="hover:bg-blinkCoral600/20"
    />
  );
};

export const PillLightPink = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkPink50 border-blinkPink300 dark:text-blinkNeutral900 dark:bg-blinkPink200 dark:border-blinkPink300",
        className,
      )}
      deleteClassName="hover:bg-blinkPink300/20"
    />
  );
};

export const PillStrongPink = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkPink100 border-blinkPink800 dark:text-blinkNeutral900 dark:bg-blinkPink300 dark:border-blinkPink800",
        className,
      )}
      deleteClassName="hover:bg-blinkPink800/20"
    />
  );
};

export const PillLightBlue = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkBlue50 border-blinkBlue400 dark:text-blinkNeutral900 dark:bg-blinkBlue100 dark:border-blinkBlue400",
        className,
      )}
      deleteClassName="hover:bg-blinkBlue400/40"
    />
  );
};

export const PillStrongBlue = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={merge(
        "bg-blinkBlue500 border-blinkBlue800 dark:text-blinkNeutral900 dark:bg-blinkBlue500 dark:border-blinkBlue800",
        className,
      )}
      deleteClassName="hover:bg-blinkBlue800/20"
    />
  );
};
