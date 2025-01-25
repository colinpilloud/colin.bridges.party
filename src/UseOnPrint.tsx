import { useEffect } from "react";

export function useOnPrint(onPrintStart: () => void, onPrintEnd: () => void) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("print");

    const handlePrintStart = () => {
      if (onPrintStart) onPrintStart();
    };

    const handlePrintEnd = () => {
      if (onPrintEnd) onPrintEnd();
    };

    // Listen to media query changes
    mediaQuery.addEventListener("change", (e) => {
      if (e.matches) {
        handlePrintStart();
      } else {
        handlePrintEnd();
      }
    });

    // Fallback for browsers that support beforeprint/afterprint
    window.addEventListener("beforeprint", handlePrintStart);
    window.addEventListener("afterprint", handlePrintEnd);

    return () => {
      mediaQuery.removeEventListener("change", handlePrintStart);
      window.removeEventListener("beforeprint", handlePrintStart);
      window.removeEventListener("afterprint", handlePrintEnd);
    };
  }, [onPrintStart, onPrintEnd]);
}
