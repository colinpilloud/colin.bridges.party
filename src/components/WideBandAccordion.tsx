import { Accordion, AccordionItem } from "@heroui/react";
import { ReactNode } from "react";

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
  return (
    <Accordion
      itemClasses={{
        title:
          "text-lg sm:text-xl md:text-2xl font-black text-black uppercase text-right whitespace-pre-line ml-16",
        trigger:
          "w-screen bg-gradient-to-r from-transparent to-primary to-20% pb-3 pt-5 mb-2 md:pr-[10vw] -ml-2 overflow-hidden",
        indicator:
          "text-black text-xl rotate-0 data-[open=true]:rotate-45 pr-4",
        content:
          "flex flex-col flex-nowrap items-end space-y-6 md:space-y-12 mb-4 overflow-hidden",
      }}
      defaultExpandedKeys={sections
        .map((section, i) => (section.expandedByDefault ? i.toString() : null))
        .filter((i) => i !== null)}
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
