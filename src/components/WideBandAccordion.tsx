import React from "react";
import { useState } from "react";
import { useOnPrint } from "../UseOnPrint";

export interface AccordionSection {
  title: React.ReactNode;
  children: React.ReactNode;
  expandedByDefault?: boolean;
}

export function WideBandAccordion({
  sections,
  ...accordionProps
}: {
  sections: AccordionSection[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}) {
  // selectedKeys is a Set of string indices of open dropdowns, or "all" for all open
  const [selectedKeys, setSelectedKeys] = useState<Set<string> | "all">(
    new Set(
      sections
        .map((section, i) => (section.expandedByDefault ? i.toString() : null))
        .filter((i) => i !== null) as string[],
    ),
  );

  const expandAllAccordionSections = () => {
    setSelectedKeys("all");
  };

  // TODO: restore previously expanded sections
  useOnPrint(expandAllAccordionSections, () => {});

  const isOpen = (i: number) =>
    selectedKeys === "all" ||
    (selectedKeys instanceof Set && selectedKeys.has(i.toString()));

  const handleToggle = (i: number) => {
    setSelectedKeys((prev) => {
      if (prev === "all") {
        // If all are open, close all except this one
        return new Set([i.toString()]);
      }
      const newSet = new Set(prev);
      if (newSet.has(i.toString())) {
        newSet.delete(i.toString());
      } else {
        newSet.add(i.toString());
      }
      return newSet;
    });
  };

  return (
    <div {...accordionProps}>
      {sections.map((section, i) => (
        <div className="mb-2" key={i}>
          <div
            className={`dropdown w-full ${isOpen(i) ? "dropdown-open" : ""}`}
          >
            <div
              tabIndex={0}
              className="dropdown-title to-primary/20 print:text-md print:font-metal flex w-full cursor-pointer items-center justify-between bg-gradient-to-r from-transparent px-4 py-3 text-lg font-black text-black uppercase md:text-2xl print:ml-4 print:text-left"
              onClick={() => handleToggle(i)}
            >
              <span>{section.title}</span>
              <span className="ml-2 text-xl text-black print:hidden">
                {isOpen(i) ? "−" : "+"}
              </span>
            </div>
            <div
              tabIndex={0}
              className={`dropdown-content bg-base-100 mt-1 w-full p-4 shadow transition-all duration-200 ${isOpen(i) ? "block" : "hidden"} mb-4 flex flex-col items-end space-y-4 md:space-y-6 print:mb-2 print:space-y-1`}
            >
              {section.children}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
