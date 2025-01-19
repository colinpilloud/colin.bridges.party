import { Prose } from "../components/Prose.tsx";
import {
  List,
  ResumeSection,
  SkillList,
} from "../components/ResumeComponents.tsx";

function Header() {
  return null;
}

function Objective() {
  return (
    <ResumeSection headingProps={{ variant: "h1", content: "Objective" }}>
      <Prose>
        Jack-of-all-trades backend engineer looking for a role in the{" "}
        <span className="font-semibold">Portland, OR</span> area or fully remote
      </Prose>
    </ResumeSection>
  );
}

function TechnicalSkills() {
  return (
    <ResumeSection
      headingProps={{ variant: "h1", content: "Technical Skills" }}
    >
      <List
        items={[
          <span>
            Modern API development (both REST and GraphQL) in{" "}
            <SkillList skills={["Java", "Kotlin", "Scala", "Python"]} />
          </span>,
          <span>
            Web application development with{" "}
            <SkillList skills={["React", "TypeScript", "Tailwind CSS"]} />
          </span>,
          <span>
            Build and deploy automation with{" "}
            <SkillList skills={["GitHub Actions", "CircleCI", "Docker"]} />
          </span>,
          <span>
            Cloud-based architecture in{" "}
            <span className="font-semibold">AWS</span> including scale-to-zero
            deploys in <SkillList skills={["Lambda", "API Gateway"]} />
          </span>,
          <span>
            Database integration and management with{" "}
            <SkillList
              skills={["PostgreSQL", "MySQL", "DynamoDB", "MongoDB"]}
            />
          </span>,
        ]}
      />
    </ResumeSection>
  );
}

function AdditionalSkills() {
  return (
    <ResumeSection
      headingProps={{ variant: "h1", content: "Additional Skills" }}
    >
      <List
        items={[
          <span>
            <span className="font-semibold">Management experience</span>,
            leading two teams of engineers towards aggressive goals
          </span>,
          "Ability to work efficiently in a team environment as well as independently",
          "Effective interpersonal and written communication skills",
        ]}
      />
    </ResumeSection>
  );
}

function WorkExperience() {
  return (
    <ResumeSection headingProps={{ variant: "h1", content: "Work Experience" }}>
      <p>hello</p>
    </ResumeSection>
  );
}

function OtherExperience() {
  return (
    <ResumeSection
      headingProps={{ variant: "h1", content: "Other Experience" }}
    >
      <p>hello</p>
    </ResumeSection>
  );
}

function Education() {
  return (
    <ResumeSection headingProps={{ variant: "h1", content: "Education" }}>
      <p>hello</p>
    </ResumeSection>
  );
}

function AchievementsAndAwards() {
  return (
    <ResumeSection
      headingProps={{ variant: "h1", content: "Achievements /\nAwards" }}
    >
      <p>hello</p>
    </ResumeSection>
  );
}

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
