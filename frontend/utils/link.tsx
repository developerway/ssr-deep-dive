import { AnchorHTMLAttributes } from "react";

import { useNavigate } from "@fe/utils/use-client-router";

export const Link = ({
  href,
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const navigate = useNavigate();

  return href ? (
    <a
      {...props}
      href={href}
      onClick={(e) => {
        e.preventDefault();
        navigate(href);
      }}
    >
      {children}
    </a>
  ) : (
    <a {...props}>{children}</a>
  );
};
