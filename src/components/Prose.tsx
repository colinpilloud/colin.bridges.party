import { type ReactNode } from "react";

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`not-print:w-full not-print:md:w-[32rem] ${className || ""}`}>
      {children}
    </p>
  );
}
