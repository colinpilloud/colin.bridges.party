import React from "react";
import { useState } from "react";
import { useOnPrint } from "../UseOnPrint";
import FeatherIcon from "feather-icons-react";
import { ResumeSection } from "@/types";

export interface AccordionSection {
  key: string;
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
          .map((section) => (section.expandedByDefault ? section.key : null))
          .filter((i) => i !== null),
      ),
  );

  const expandAllAccordionSections = () => {
    setSelectedKeys("all");
  };

  // TODO: restore previously expanded sections
  useOnPrint(expandAllAccordionSections, () => {});

  const isSectionOpen = (section: AccordionSection) =>
    selectedKeys === "all" ||
    (selectedKeys instanceof Set && selectedKeys.has(section.key));

  const handleSectionToggle = (section: AccordionSection) => {
    setSelectedKeys((prev) => {
      if (prev === "all") {
        // If all are open, close all except this one
        return new Set([section.key]);
      }
      const newSet = new Set(prev);
      if (newSet.has(section.key)) {
        newSet.delete(section.key);
      } else {
        newSet.add(section.key);
      }
      return newSet;
    });
  };

  return (
    <div>
      {sections.map((section) => (
        <WideBandAccordionSection
          key={section.key}
          section={section}
          isOpen={isSectionOpen(section)}
          onToggle={() => handleSectionToggle(section)}
        />
      ))}
    </div>
  );
}

function WideBandAccordionSection({
  section,
  isOpen,
  onToggle,
}: {
  section: AccordionSection;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="mb-2">
      <div
        className={`collapse w-screen rounded-none ${isOpen ? "collapse-open" : ""}`}
      >
        <div
          tabIndex={0}
          className="collapse-title print:text-md print:font-metal via-primary/40 from-primary flex w-full cursor-pointer items-center justify-start bg-gradient-to-r via-75% to-transparent py-3 pl-1 text-lg font-bold tracking-tight text-black uppercase md:text-2xl print:ml-4"
          onClick={onToggle}
        >
          <span className="ml-2 text-xl text-black md:pl-58 print:hidden">
            {isOpen ? (
              <FeatherIcon size="16" icon="minus" />
            ) : (
              <FeatherIcon size="16" icon="plus" />
            )}
          </span>
          <span className="pl-2">{section.title}</span>
        </div>
        <div
          tabIndex={0}
          className={`collapse-content mt-1 w-full items-start px-0 pt-1 pb-0 shadow transition-all duration-200 ${isOpen ? "block" : "hidden"} mb-4 flex flex-col space-y-4 md:space-y-6 print:mb-2 print:space-y-1 ${section.key !== ResumeSection.WorkExperience ? "pl-4 md:pl-62" : ""}`}
        >
          {section.children}
        </div>
      </div>
    </div>
  );
}
