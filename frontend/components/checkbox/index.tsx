"use client";
import React from "react";

import {
  CheckmarkIcon,
  CheckmarkIndeterminateIcon,
} from "@fe/icons/checkbox-icon";
import { merge } from "@fe/utils/merge-classnames";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";

function CheckboxBase({
  className,
  ...props
}: CheckboxPrimitives.CheckboxProps) {
  return (
    <CheckboxPrimitives.Root
      className={merge(
        // general appearance styles
        "peer blink-double-focus-ring focus-visible:ring-1 focus-visible:ring-offset-1 inline-flex items-center justify-center shrink-0 rounded-sm border bg-blinkGray50 border-blinkGreen300",
        // checked styles
        "data-[state='checked']:bg-blinkGreen100 data-[state='checked']:border-blinkGreen100 data-[state='checked']:text-blinkGreen800",
        "data-[state='indeterminate']:bg-blinkGreen100 data-[state='indeterminate']:border-blinkGreen100 data-[state='indeterminate']:text-blinkGreen800",
        // disabled styles
        "disabled:cursor-not-allowed disabled:bg-blinkNeutral200 disabled:text-blinkGray300 disabled:border-blinkGray200",
        // disabled checked styles
        "data-[state='checked']:disabled:bg-blinkNeutral100 data-[state='checked']:disabled:border-blinkGray200 data-[state='checked']:disabled:text-blinkNeutral300",
        "data-[state='indeterminate']:disabled:bg-blinkNeutral100 data-[state='indeterminate']:disabled:border-blinkGray200 data-[state='indeterminate']:disabled:text-blinkNeutral300",
        // dark general appearance styles
        "dark:bg-blinkGray900",
        // dark checked styles
        "data-[state='checked']:dark:bg-blinkGreen300 data-[state='checked']:dark:border-blinkGreen100",
        "data-[state='indeterminate']:dark:bg-blinkGreen300 data-[state='indeterminate']:dark:border-blinkGreen100",
        // dark disabled styles
        "dark:disabled:bg-blinkNeutral600 dark:disabled:text-blinkNeutral600 dark:disabled:border-blinkNeutral600",
        // dark disabled checked styles
        "data-[state='checked']:dark:disabled:bg-blinkGray900 data-[state='checked']:dark:disabled:border-blinkNeutral600 data-[state='checked']:dark:disabled:text-blinkNeutral600",
        "data-[state='indeterminate']:dark:disabled:bg-blinkGray900 data-[state='indeterminate']:dark:disabled:border-blinkNeutral600 data-[state='indeterminate']:dark:disabled:text-blinkNeutral600",
        className,
      )}
      {...props}
    />
  );
}

export const Checkbox = ({
  className,
  ...props
}: CheckboxPrimitives.CheckboxProps) => {
  return (
    <CheckboxBase
      {...props}
      className={merge("h-[1.125rem] w-[1.125rem]", className)}
    >
      <CheckboxPrimitives.Indicator>
        {props.checked === "indeterminate" ? (
          <CheckmarkIndeterminateIcon className={merge("w-4 h-4")} />
        ) : (
          <CheckmarkIcon className={merge("w-4 h-4")} />
        )}
      </CheckboxPrimitives.Indicator>
    </CheckboxBase>
  );
};

export const NormalToLargeCheckbox = ({
  className,
  ...props
}: CheckboxPrimitives.CheckboxProps) => {
  return (
    <CheckboxBase
      {...props}
      className={merge("h-6 w-6 sm:h-[1.125rem] sm:w-[1.125rem]", className)}
    >
      <CheckboxPrimitives.Indicator>
        {props.checked === "indeterminate" ? (
          <CheckmarkIndeterminateIcon
            className={merge("w-6 h-6 sm:w-4 sm:h-4")}
          />
        ) : (
          <CheckmarkIcon className={merge("w-6 h-6 sm:w-4 sm:h-4")} />
        )}
      </CheckboxPrimitives.Indicator>
    </CheckboxBase>
  );
};
