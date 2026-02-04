import React from "react";
import { useState } from "react";
import { useOnPrint } from "../UseOnPrint";
import FeatherIcon from "feather-icons-react";

export interface AccordionSection {
  section: string;
  title: React.ReactNode;
  children: React.ReactNode;
  expandedByDefault?: boolean;
}

export function WideBandAccordion({
  sections,
}: {
  sections: AccordionSection[];
}) {
  // selectedKeys is a Set of string indices of open dropdowns, or "all" for all open
  const [selectedKeys, setSelectedKeys] = useState<Set<string> | "all">(
    () =>
      new Set(
        sections
          .map((section, i) =>
            section.expandedByDefault ? section.section : null,
          )
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
    (selectedKeys instanceof Set && selectedKeys.has(sections[i].section));

  const handleToggle = (i: number) => {
    setSelectedKeys((prev) => {
      if (prev === "all") {
        // If all are open, close all except this one
        return new Set([sections[i].section]);
      }
      const newSet = new Set(prev);
      if (newSet.has(sections[i].section)) {
        newSet.delete(sections[i].section);
      } else {
        newSet.add(sections[i].section);
      }
      return newSet;
    });
  };

  return (
    <div>
      {sections.map((section, i) => (
        <WideBandAccordionSection
          key={section.section}
          section={section}
          i={i}
          isOpen={isOpen}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
}

function WideBandAccordionSection({
  section,
  i,
  isOpen,
  handleToggle,
}: {
  section: AccordionSection;
  i: number;
  isOpen: (i: number) => boolean;
  handleToggle: (i: number) => void;
}) {
  return (
    <div className="mb-2">
      <div
        className={`collapse -mr-[10vw] w-screen rounded-none ${isOpen(i) ? "collapse-open" : ""}`}
      >
        <div
          tabIndex={0}
          className="collapse-title to-primary print:text-md print:font-metal via-primary/60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-r from-transparent via-25% px-4 py-3 pr-[10vw] text-lg font-bold tracking-tight text-black uppercase md:text-2xl print:ml-4 print:text-left"
          onClick={() => handleToggle(i)}
        >
          <span className="flex-1 text-right">{section.title}</span>
          <span className="ml-2 text-xl text-black print:hidden">
            {isOpen(i) ? (
              <FeatherIcon size="16" icon="minus" />
            ) : (
              <FeatherIcon size="16" icon="plus" />
            )}
          </span>
        </div>
        <div
          tabIndex={0}
          className={`collapse-content mt-1 w-full p-4 pr-[10vw] shadow transition-all duration-200 ${isOpen(i) ? "block" : "hidden"} mb-4 flex flex-col items-end space-y-4 md:space-y-6 print:mb-2 print:space-y-1`}
        >
          {section.children}
        </div>
      </div>
    </div>
  );
}
