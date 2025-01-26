import { Accordion, AccordionItem, Selection } from "@heroui/react";
import { ReactNode, useState } from "react";
import { useOnPrint } from "../UseOnPrint.tsx";

export interface AccordionSection {
  title: ReactNode;
  children: React.ReactNode;
  expandedByDefault?: boolean;
}

export function WideBandAccordion({
  sections,
  ...accordionProps
}: {
  sections: AccordionSection[];
  [key: string]: any;
}) {
  const [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(
      sections
        .map((section, i) => (section.expandedByDefault ? i.toString() : null))
        .filter((i) => i !== null),
    ),
  );

  const expandAllAccordionSections = () => {
    setSelectedKeys("all");
  };

  // TODO; restore previously expanded sections
  useOnPrint(expandAllAccordionSections, () => {});

  return (
    <Accordion
      selectedKeys={selectedKeys}
      onSelectionChange={setSelectedKeys}
      itemClasses={{
        title:
          "text-lg sm:text-xl md:text-2xl font-black text-black uppercase text-right whitespace-pre-line ml-16 print:mr-6",
        trigger:
          "w-screen bg-gradient-to-r from-transparent to-primary to-20% print:pb-0 print:pt-0 screen:pb-3 screen:pt-5 screen:mb-2 md:pr-[10vw] -ml-2 overflow-hidden",
        indicator:
          "text-black text-xl rotate-0 data-[open=true]:rotate-45 mr-4 print:hidden",
        content:
          "flex flex-col flex-nowrap items-end print:space-y-1 screen:space-y-4 screen:md:space-y-6 print:mb-2 screen:mb-4",
      }}
      {...accordionProps}
    >
      {sections.map((section, i) => (
        <AccordionItem title={section.title} key={i} indicator="+">
          {section.children}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
