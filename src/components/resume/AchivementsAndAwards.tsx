import { List, ResumeSection } from "./ResumePrimitives.tsx";

export function AchievementsAndAwards() {
  return (
    <ResumeSection
      headingProps={{ variant: "h1", children: "Achievements / Awards" }}
    >
      <List
        items={[
          "National Merit Scholarship Finalist",
          "Northrop Grumman Corporate Sponsor Scholarship Winner",
        ]}
      />
    </ResumeSection>
  );
}
