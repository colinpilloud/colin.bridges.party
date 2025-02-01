import { AdditionalSkills } from "../components/resume/AdditionalSkills";
import { Objective } from "../components/resume/Objective";
import { TechnicalSkills } from "../components/resume/TechnicalSkills";
import { Education } from "../components/resume/Education";
import { OtherExperience } from "../components/resume/OtherExperience";
import { WorkExperience } from "../components/resume/WorkExperience";
import { AchievementsAndAwards } from "../components/resume/AchivementsAndAwards";
import { Header } from "../components/resume/Header";
import {
  AccordionSection,
  WideBandAccordion,
} from "../components/WideBandAccordion";

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
