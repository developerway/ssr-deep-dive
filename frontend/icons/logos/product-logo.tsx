import { SVGProps } from "react";

export const ProductLogo = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="2" fill="#757575" />

      <path
        d="M22.0431 8.24225C22.4051 8.13747 22.7485 8.45559 22.6717 8.82451L19.3684 24.6804C19.2893 25.0596 18.8277 25.2088 18.5417 24.9476L6.15429 13.6338C5.86593 13.3704 5.97732 12.8929 6.35246 12.7843L22.0431 8.24225Z"
        fill="url(#paint0_linear_1116_350)"
        fillOpacity="0.6"
        stroke="#F3F7F5"
      />

      <defs>
        <linearGradient
          id="paint0_linear_1116_350"
          x1="23.5"
          y1="16.9"
          x2="4.5"
          y2="16.9"
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
