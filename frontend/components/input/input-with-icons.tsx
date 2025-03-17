import { InputHTMLAttributes, ReactElement } from "react";

import { BaseInput, NormalToLargeInput } from "@fe/components/input/base-input";
import { merge } from "@fe/utils/merge-classnames";

type InputWithIconsProps = {
  className?: string;
  before?: ReactElement;
  after?: ReactElement;
};

export const InputWithIcons = ({
  before,
  after,
  className,
  ...props
}: InputWithIconsProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="relative w-full">
      {before && (
        <div className="absolute top-0 left-1 min-w-8 h-10 flex items-center justify-center">
          {before}
        </div>
      )}
      <BaseInput
        {...props}
        className={merge(before ? "pl-9" : "", after ? "pr-9" : "", className)}
      />

      {after && (
        <div className="absolute top-0 right-1 min-w-8 h-10 flex items-center justify-center">
          {after}
        </div>
      )}
    </div>
  );
};

export const InputWithIconsNormalToLarge = ({
  before,
  after,
  className,
  ...props
}: InputWithIconsProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="relative w-full">
      {before && (
        <div className="absolute top-0 left-1 min-w-10 sm:min-w-8 h-14 sm:h-10 flex items-center justify-center">
          {before}
        </div>
      )}
      <NormalToLargeInput
        {...props}
        className={merge(
          before ? "pl-11 sm:pl-9" : "",
          after ? "pr-11 sm:pr-9" : "",
          className,
        )}
      />

      {after && (
        <div className="absolute top-0 right-1 min-w-10 sm:min-w-8 h-14 sm:h-10 flex items-center justify-center">
          {after}
        </div>
      )}
    </div>
  );
};
