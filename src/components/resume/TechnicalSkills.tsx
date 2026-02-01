import { List, SkillList } from "./ResumePrimitives";

export function TechnicalSkills() {
  return (
    <>
      <List
        classNames={{ ul: "print:ml-4" }}
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
            <span className="screen:text-secondary font-semibold">AWS</span>{" "}
            including scale-to-zero deploys in{" "}
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
    </>
  );
}
