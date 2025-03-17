import { ReactNode } from "react";

import { merge } from "@fe/utils/merge-classnames";
import * as TooltipPrimitives from "@radix-ui/react-tooltip";

type TooltipProps = {
  text: string;
  children: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
};

export const Tooltip = ({ text, children, position }: TooltipProps) => {
  return (
    <TooltipPrimitives.Provider>
      <TooltipPrimitives.Root>
        <TooltipPrimitives.Trigger asChild>
          {children}
        </TooltipPrimitives.Trigger>
        <TooltipPrimitives.Portal>
          <TooltipPrimitives.Content
            className={merge(
              "bg-blinkNeutral800 dark:bg-blinkNeutral50 rounded p-2 blink-text-inverse text-sm drop-shadow-lg max-w-44",
            )}
            side={position}
            sideOffset={10}
          >
            {text}
            <TooltipPrimitives.Arrow className="fill-blinkNeutral800 dark:fill-blinkNeutral50" />
          </TooltipPrimitives.Content>
        </TooltipPrimitives.Portal>
      </TooltipPrimitives.Root>
    </TooltipPrimitives.Provider>
  );
};
