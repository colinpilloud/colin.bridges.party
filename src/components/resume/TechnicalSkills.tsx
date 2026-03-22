import { List, SkillList } from "./ResumePrimitives";

export function TechnicalSkills() {
  return (
    <>
      <List
        classNames={{ ul: "print:ml-4" }}
        items={[
          <span key="llm-tooling">
            Generative{" "}
            <span className="not-print:text-secondary font-semibold">
              AI development workflows
            </span>{" "}
            for practical software delivery, including code generation,
            refactoring, and debugging
          </span>,
          <span key="api-development">
            Modern API development (both REST and GraphQL) in{" "}
            <SkillList skills={["Java", "Kotlin", "Scala", "Python"]} />
          </span>,
          <span key="web-app-development">
            Web application development with{" "}
            <SkillList skills={["React", "TypeScript", "Tailwind CSS"]} />
          </span>,
          <span key="cicd-automation">
            Build and deploy automation with{" "}
            <SkillList skills={["GitHub Actions", "CircleCI", "Docker"]} />
          </span>,
          <span key="cloud-architecture">
            Cloud-based architecture in{" "}
            <span className="not-print:text-secondary font-semibold">AWS</span>{" "}
            including scale-to-zero deploys in{" "}
            <SkillList skills={["Lambda", "API Gateway"]} />
          </span>,
          <span key="database-integration">
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
