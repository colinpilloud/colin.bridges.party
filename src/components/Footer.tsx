import { Button } from "@heroui/react";
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
    <footer className="bottom-0 left-0 mx-0 flex w-full justify-center border-t-2 border-primary/70 bg-black px-4 pb-6 pt-4 text-left font-['Helvetica_Neue',Roboto,sans] text-[0.666rem] lowercase leading-[0.9] text-primary/70 print:hidden">
      <div className="flex max-w-[calc(min(100%,1240px))] flex-col place-items-center gap-1 md:flex-row">
        <p>©{new Date().getFullYear()} Colin Bridges.</p>
        <p className="hidden md:flex">·</p>
        <p>Thank you for visiting my website.</p>
        <p className="hidden md:flex">·</p>
        <Button
          tabIndex={0}
          className="border-0 bg-inherit px-0 text-[0.666rem] text-primary underline"
          onPress={() => toggleMetalMode()}
          as={"span"}
        >
          {metalMode ? "Deactivate" : "Activate"} metal mode.
        </Button>
      </div>
    </footer>
  );
}
