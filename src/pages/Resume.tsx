import { AdditionalSkills } from "../components/resume/AdditionalSkills.tsx";
import { Objective } from "../components/resume/Objective.tsx";
import { TechnicalSkills } from "../components/resume/TechnicalSkills.tsx";
import { Education } from "../components/resume/Education.tsx";
import { OtherExperience } from "../components/resume/OtherExperience.tsx";
import { WorkExperience } from "../components/resume/WorkExperience.tsx";
import { AchievementsAndAwards } from "../components/resume/AchivementsAndAwards.tsx";
import { Header } from "../components/resume/Header.tsx";
import {
  AccordionSection,
  WideBandAccordion,
} from "../components/WideBandAccordion.tsx";

const sections: AccordionSection[] = [
  {
    title: "Objective",
    children: <Objective />,
    expandedByDefault: true,
  },
  {
    title: "Technical Skills",
    children: <TechnicalSkills />,
    expandedByDefault: true,
  },
  {
    title: "Additional Skills",
    children: <AdditionalSkills />,
  },
  {
    title: "Work Experience",
    children: <WorkExperience />,
    expandedByDefault: true,
  },
  {
    title: "Other Experience",
    children: <OtherExperience />,
  },
  {
    title: "Education",
    children: <Education />,
  },
  {
    title: "Achievements // Awards",
    children: <AchievementsAndAwards />,
  },
];

export function Resume() {
  return (
    <div className="mb-8 flex flex-col items-center">
      <Header />
      <WideBandAccordion
        showDivider={false}
        selectionMode="multiple"
        sections={sections}
      />
    </div>
  );
}
