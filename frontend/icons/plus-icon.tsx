import { SVGProps } from "react";

export const PlusIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg {...props} width="24" height="24" fill="none" viewBox="0 0 24 24">
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12 5.75V18.25"
      ></path>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.25 12L5.75 12"
      ></path>
    </svg>
  );
};
