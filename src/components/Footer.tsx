import { Button, Link, Switch } from "@heroui/react";
import { Fragment } from "react";
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
    <footer className="bottom-0 left-0 mx-0 flex w-full justify-center border-t-2 border-primary/70 bg-black px-4 pb-4 pt-4 text-left font-['Helvetica_Neue',Roboto,sans] text-[0.666rem] lowercase leading-[0.9] tracking-normal text-primary/70 print:hidden">
      <div className="flex max-w-[calc(min(100%,1240px))] flex-col place-items-center gap-2 md:flex-row">
        {[
          `©${new Date().getFullYear()} Colin Bridges.`,
          "Thank you for visiting my website.",
          <Button
            key="source"
            tabIndex={0}
            className="h-3 border-0 bg-inherit px-0 text-[0.666rem] text-primary"
            as={Link}
            href="https://github.com/colinpilloud/colin.bridges.party"
            isExternal
          >
            View Source.
          </Button>,
          <Switch
            size="sm"
            key="metalMode"
            isSelected={metalMode}
            onChange={() => toggleMetalMode()}
            classNames={{
              wrapper: "bg-gray-800",
            }}
          >
            🤘
          </Switch>,
        ].map((item, index) => (
          <Fragment key={index}>
            {index > 0 && <p className="hidden md:flex">·</p>}
            <div className="block">{item}</div>
          </Fragment>
        ))}
      </div>
    </footer>
  );
}
