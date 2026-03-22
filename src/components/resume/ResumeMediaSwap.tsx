import type React from "react";
import { useMediaQuery } from "../../UseMediaQuery";

interface ResumeMediaSwapProps {
  screen: React.ReactNode;
  print: React.ReactNode;
}

export function ResumeMediaSwap({ screen, print }: ResumeMediaSwapProps) {
  const printMedia = useMediaQuery("print");
  return printMedia ? print : screen;
}
