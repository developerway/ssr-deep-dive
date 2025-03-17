import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";

import { merge } from "@fe/utils/merge-classnames";

export const TableCell = ({
  children,
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <td
      {...props}
      className={merge("px-2 py-3 blink-text-secondary text-left", className)}
    >
      {children}
    </td>
  );
};

export const TableHeadCell = ({
  children,
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <th
      {...props}
      className={merge(
        "px-2 py-2 blink-text-primary text-sm text-left dark:border-b dark:border-blinkNeutral800",
        className,
      )}
    >
      {children}
    </th>
  );
};

export const TableRow = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) => {
  return (
    <tr
      {...props}
      className={merge(
        "border-b border-blinkGray100 dark:border-0 last:border-b-0",
        className,
      )}
    >
      {children}
    </tr>
  );
};

export const Table = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableElement>) => {
  return (
    <table {...props} className={merge("w-full border-collapse", className)}>
      {children}
    </table>
  );
};

export const TableBody = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <tbody {...props} className={merge("", className)}>
      {children}
    </tbody>
  );
};

export const TableHead = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <thead {...props} className={merge("", className)}>
      {children}
    </thead>
  );
};

export const TableFoot = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <tfoot {...props} className={merge("", className)}>
      {children}
    </tfoot>
  );
};
