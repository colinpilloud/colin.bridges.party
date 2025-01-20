import { ReactNode } from "react";

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <p className={`w-64 md:w-[32rem] ${className || ""}`}>{children}</p>;
}
