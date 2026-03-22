export const ResumeSection = {
  ProfessionalSummary: "ProfessionalSummary",
  TechnicalSkills: "TechnicalSkills",
  AdditionalSkills: "AdditionalSkills",
  WorkExperience: "WorkExperience",
  OtherExperience: "OtherExperience",
  Education: "Education",
  AchievementsAndAwards: "AchievementsAndAwards",
} as const;

export type ResumeSection = (typeof ResumeSection)[keyof typeof ResumeSection];
