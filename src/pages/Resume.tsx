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
import { useMediaQuery } from "../UseMediaQuery";
import { GridResume } from "../components/resume/GridResume";

export enum ResumeSection {
  Objective,
  TechnicalSkills,
  AdditionalSkills,
  WorkExperience,
  OtherExperience,
  Education,
  AchievementsAndAwards,
}

export const sections: (AccordionSection & { section: ResumeSection })[] = [
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

export function Resume() {
  const printMedia = useMediaQuery("print");

  return (
    <div className="mb-8 flex flex-col items-center">
      <Header />
      {printMedia ? (
        <GridResume />
      ) : (
        <WideBandAccordion
          showDivider={false}
          selectionMode="multiple"
          sections={sections}
        />
      )}
    </div>
  );
}
