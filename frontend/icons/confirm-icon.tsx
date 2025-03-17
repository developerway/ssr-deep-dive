import { SVGProps } from "react";

export const ConfirmIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5071 54.5117L34.0505 19.5217C36.5102 14.6158 43.5128 14.6171 45.9707 19.5239L63.498 54.5139C65.7185 58.9469 62.4954 64.1664 57.5373 64.1664H22.4667C17.5076 64.1664 14.2844 58.9448 16.5071 54.5117Z"
        fill="url(#paint0_linear_1239_9539)"
        fillOpacity="0.6"
        stroke="#090909"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M40 33.3333V39.9999"
        stroke="#090909"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M41.6667 53.3334C41.6667 54.2539 40.9205 55.0001 40 55.0001C39.0796 55.0001 38.3334 54.2539 38.3334 53.3334C38.3334 52.4129 39.0796 51.6667 40 51.6667C40.9205 51.6667 41.6667 52.4129 41.6667 53.3334Z"
        stroke="#090909"
        strokeWidth="3.33333"
      />

      <defs>
        <linearGradient
          id="paint0_linear_1239_9539"
          x1="64.2126"
          y1="40.0047"
          x2="15.7914"
          y2="40.0047"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D79401" />

          <stop offset="0.39" stopColor="#F95E5A" />

          <stop offset="0.685" stopColor="#C3DCCF" />

          <stop offset="1" stopColor="#FFB9B7" />
        </linearGradient>
      </defs>
    </svg>
  );
};
