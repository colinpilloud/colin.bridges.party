export const ResumeSection = {
  Objective: "Objective",
  TechnicalSkills: "TechnicalSkills",
  AdditionalSkills: "AdditionalSkills",
  WorkExperience: "WorkExperience",
  OtherExperience: "OtherExperience",
  Education: "Education",
  AchievementsAndAwards: "AchievementsAndAwards",
} as const;

export type ResumeSection = (typeof ResumeSection)[keyof typeof ResumeSection];
