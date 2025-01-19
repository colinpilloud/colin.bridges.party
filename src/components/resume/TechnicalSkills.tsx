import { List, ResumeSection, SkillList } from "./ResumePrimitives.tsx";

export function TechnicalSkills() {
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
            <span className="font-semibold text-secondary">AWS</span> including
            scale-to-zero deploys in{" "}
            <SkillList skills={["Lambda", "API Gateway"]} />
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
