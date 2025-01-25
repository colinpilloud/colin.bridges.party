import { AdditionalSkills } from "../components/resume/AdditionalSkills.tsx";
import { Objective } from "../components/resume/Objective.tsx";
import { TechnicalSkills } from "../components/resume/TechnicalSkills.tsx";
import { Education } from "../components/resume/Education.tsx";
import { OtherExperience } from "../components/resume/OtherExperience.tsx";
import { WorkExperience } from "../components/resume/WorkExperience.tsx";
import { AchievementsAndAwards } from "../components/resume/AchivementsAndAwards.tsx";
import { Header } from "../components/resume/Header.tsx";
import { Accordion, AccordionItem } from "@heroui/react";

const sections = [
  {
    title: "Objective",
    content: <Objective />,
    defaultExpand: true,
  },
  {
    title: "Technical Skills",
    content: <TechnicalSkills />,
    defaultExpand: true,
  },
  {
    title: "Additional Skills",
    content: <AdditionalSkills />,
  },
  {
    title: "Work Experience",
    content: <WorkExperience />,
    defaultExpand: true,
  },
  {
    title: "Other Experience",
    content: <OtherExperience />,
  },
  {
    title: "Education",
    content: <Education />,
  },
  {
    title: "Achievements // Awards",
    content: <AchievementsAndAwards />,
  },
];

export function Resume() {
  return (
    <div className="mb-8 flex flex-col items-end gap-8">
      <Header />
      <Accordion
        showDivider={false}
        selectionMode="multiple"
        defaultExpandedKeys={sections
          .filter((section) => section.defaultExpand)
          .map((section) => section.title)}
        className=""
        itemClasses={{
          title:
            "text-xl md:text-2xl font-black text-black uppercase text-right",
          trigger:
            "w-screen bg-gradient-to-r from-transparent to-primary to-20% pb-3 pt-5 mb-2 md:pr-[10vw] -ml-2 overflow-hidden",
          indicator:
            "text-black text-xl rotate-0 data-[open=true]:rotate-45 pr-2",
          content: "flex flex-col flex-nowrap items-end space-y-4 mb-4",
        }}
      >
        {sections.map((section) => (
          <AccordionItem
            key={section.title}
            title={section.title}
            indicator={"+"}
          >
            {section.content}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
