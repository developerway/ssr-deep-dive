import { twMerge } from "tailwind-merge";

export function merge(...cls: (string | undefined | boolean)[]) {
  return twMerge(cls.filter(Boolean).join(" "));
}
