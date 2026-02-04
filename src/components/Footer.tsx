import { useState } from "react";
import { Link } from "react-router-dom";

export function Footer() {
  const [metalMode, setMetalMode] = useState(false);

  const toggleMetalMode = () => {
    if (metalMode) {
      document.documentElement.style.fontFamily = [
        '"Helvetica Neue"',
        "Roboto",
        "sans-serif",
      ].join(",");
      document.documentElement.style.lineHeight = "1.5";
      document.documentElement.style.letterSpacing = "0.001em";
      setMetalMode(false);
    } else {
      document.documentElement.style.fontFamily = "'Burn The Witch',serif";
      document.documentElement.style.lineHeight = "0.666";
      document.documentElement.style.letterSpacing = "-0.333rem";

      setMetalMode(true);
    }
  };

  return (
    <footer className="border-primary/70 text-primary/70 bottom-0 left-0 mx-0 flex w-full justify-center border-t-2 bg-black px-4 pt-4 pb-4 text-left font-['Helvetica_Neue',Roboto,sans] text-[0.666rem] leading-[0.9] tracking-normal lowercase print:hidden">
      <div className="flex max-w-[calc(min(100%,1240px))] flex-col place-items-center gap-2 md:flex-row">
        <span>©{new Date().getFullYear()} Colin Bridges.</span>
        <span className="hidden md:flex">·</span>
        <span>Thank you for visiting my website.</span>
        <span className="hidden md:flex">·</span>
        <Link
          tabIndex={0}
          className="text-primary h-3 border-0 bg-inherit px-0 text-[0.666rem]"
          to="https://github.com/colinpilloud/colin.bridges.party"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Source.
        </Link>
        <span className="hidden md:flex">·</span>
        <input
          type="checkbox"
          checked={metalMode}
          onChange={toggleMetalMode}
          className="toggle checked:bg-primary/70"
        />
        <span>🤘</span>
      </div>
    </footer>
  );
}
