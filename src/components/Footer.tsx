import { useState } from "react";

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
      setMetalMode(false);
    } else {
      document.documentElement.style.fontFamily = "'Burn The Witch',serif";
      document.documentElement.style.lineHeight = "0.666";

      setMetalMode(true);
    }
  };

  return (
    <footer className="bottom-0 left-0 mx-0 flex w-full justify-center border-t-2 border-primary/70 bg-black px-4 pb-6 pt-4 text-left font-['Helvetica_Neue',Roboto,sans] text-[0.666rem] lowercase leading-[0.9] text-primary/70">
      <div className="flex max-w-[calc(min(100%,1240px))] flex-col place-items-center gap-1 md:flex-row">
        <p>©{new Date().getFullYear()} Colin Bridges.</p>
        <p className="hidden md:flex">·</p>
        <p>Thank you for visiting my website.</p>
        <p className="hidden md:flex">·</p>
        <p>
          <span
            tabIndex={0}
            className="underline"
            onClick={() => toggleMetalMode()}
          >
            {metalMode ? "Deactivate" : "Activate"} metal mode
          </span>
          .
        </p>
      </div>
    </footer>
  );
}
