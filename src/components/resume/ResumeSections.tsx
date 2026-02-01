import type { AccordionSection } from "../WideBandAccordion";
import { Objective } from "./Objective";
import { TechnicalSkills } from "./TechnicalSkills";
import { AdditionalSkills } from "./AdditionalSkills";
import { WorkExperience } from "./WorkExperience";
import { OtherExperience } from "./OtherExperience";
import { Education } from "./Education";
import { AchievementsAndAwards } from "./AchivementsAndAwards";
import { ResumeSection } from "@/types";

const sections: (AccordionSection & { section: ResumeSection })[] = [
  {
    section: ResumeSection.Objective,
    title: "Objective",
    children: <Objective />,
    expandedByDefault: true,
  },
  {
    section: ResumeSection.TechnicalSkills,
    title: "Technical Skills",
    children: <TechnicalSkills />,
    expandedByDefault: true,
  },
  {
    section: ResumeSection.AdditionalSkills,
    title: "Additional Skills",
    children: <AdditionalSkills />,
  },
  {
    section: ResumeSection.WorkExperience,
    title: "Work Experience",
    children: <WorkExperience />,
    expandedByDefault: true,
  },
  {
    section: ResumeSection.OtherExperience,
    title: "Other Experience",
    children: <OtherExperience />,
  },
  {
    section: ResumeSection.Education,
    title: "Education",
    children: <Education />,
  },
  {
    section: ResumeSection.AchievementsAndAwards,
    title: "Achievements // Awards",
    children: <AchievementsAndAwards />,
  },
];

export default sections;
