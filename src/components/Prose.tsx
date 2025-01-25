import { ReactNode } from "react";

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`ml-4 w-64 md:w-[32rem] ${className || ""}`}>{children}</p>
  );
}
