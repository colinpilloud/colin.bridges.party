import { useState, useEffect } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    // Check initial match
    const mediaQueryList = window.matchMedia(query);
    setMatches(mediaQueryList.matches);

    // Add listener for changes
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mediaQueryList.addEventListener("change", handler);

    // Clean up listener on unmount
    return () => {
      mediaQueryList.removeEventListener("change", handler);
    };
  }, [query]); // Re-run effect if the query string changes

  return matches;
}
