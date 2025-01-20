import { Fragment } from "react/jsx-runtime";
import { List, ResumeHeading, ResumeSection } from "./ResumePrimitives.tsx";
import { Divider } from "@nextui-org/react";
import jobs from "./jobs.json";

interface JobProps {
  company: string;
  roles: RoleProps[];
  responsibilities: string[];
}

function Job(props: JobProps) {
  return (
    <ResumeSection
      headingProps={{
        variant: "h2",
        content: <span className="text-secondary">{props.company}</span>,
      }}
    >
      {props.roles.map((role, i) => (
        <ResumeHeading
          variant="h3"
          content={
            <div className="justify-content-end flex flex-row items-center gap-2">
              <span className="text-nowrap align-middle text-xs sm:text-sm">
                ({role.startDate} – {role.endDate})
              </span>
              <span className="text-md font-semibold sm:text-lg">
                {role.title}
              </span>
            </div>
          }
          key={i}
        />
      ))}
      <List items={props.responsibilities} />
    </ResumeSection>
  );
}

interface RoleProps {
  title: string;
  startDate: string;
  endDate: string;
}

export function WorkExperience() {
  return (
    <ResumeSection headingProps={{ variant: "h1", content: "Work Experience" }}>
      {jobs.map((job, i) => (
        <Fragment key={i}>
          <Job key={i} {...job} />
          {i < jobs.length - 1 && (
            <Divider key={`divider-${i}`} className="w-64 bg-primary" />
          )}
        </Fragment>
      ))}
    </ResumeSection>
  );
}
