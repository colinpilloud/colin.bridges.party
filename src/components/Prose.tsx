import { ReactNode } from "react";

export function Prose({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <p className={`screen:w-64 screen:md:w-[32rem] ${className || ""}`}>
      {children}
    </p>
  );
}
