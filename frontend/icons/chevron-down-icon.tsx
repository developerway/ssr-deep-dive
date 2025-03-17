import { SVGProps } from "react";

export const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M15.25 10.75L12 14.25L8.75 10.75"
      ></path>
    </svg>
  );
};
