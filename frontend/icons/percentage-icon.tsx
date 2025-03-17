import { SVGProps } from "react";

export const PercentageIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M17.25 6.75L6.75 17.25"
      ></path>
      <circle
        cx="16"
        cy="16"
        r="1.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
      <circle
        cx="8"
        cy="8"
        r="1.25"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      ></circle>
    </svg>
  );
};
