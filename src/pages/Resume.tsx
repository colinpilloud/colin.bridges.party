import { AdditionalSkills } from "../components/resume/AdditionalSkills.tsx";
import { Objective } from "../components/resume/Objective.tsx";
import { TechnicalSkills } from "../components/resume/TechnicalSkills.tsx";
import { Education } from "../components/resume/Education.tsx";
import { OtherExperience } from "../components/resume/OtherExperience.tsx";
import { WorkExperience } from "../components/resume/WorkExperience.tsx";
import { AchievementsAndAwards } from "../components/resume/AchivementsAndAwards.tsx";
import { Header } from "../components/resume/Header.tsx";

export function Resume() {
  return (
    <div className="flex flex-col items-end gap-8">
      <Header />
      <Objective />
      <TechnicalSkills />
      <AdditionalSkills />
      <WorkExperience />
      <OtherExperience />
      <Education />
      <AchievementsAndAwards />
    </div>
  );
}
