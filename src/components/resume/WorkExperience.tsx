import { List, ResumeHeading } from "./ResumePrimitives";
import jobs from "./jobs.json";
import { ResumeSubsection } from "./ResumeSubsection";

interface JobProps {
  company: string;
  roles: RoleProps[];
  responsibilities: string[];
}

function Job(props: JobProps) {
  return (
    <div className="flex break-inside-avoid flex-col not-print:gap-2">
      <div className="flex flex-col not-print:gap-2">
        {props.roles.map((role) => (
          <ResumeHeading variant="h3" key={role.title}>
            <div className="flex items-center gap-x-2 not-print:justify-between not-print:sm:justify-start">
              <span className="text-md font-semibold print:text-xs">
                {role.title}
              </span>
              <span className="align-middle text-xs text-nowrap sm:text-sm print:text-[0.6rem]">
                ({role.startDate} – {role.endDate})
              </span>
            </div>
          </ResumeHeading>
        ))}
      </div>
      <List items={props.responsibilities} />
    </div>
  );
}

interface RoleProps {
  title: string;
  startDate: string;
  endDate: string;
}

export function WorkExperience() {
  const items = jobs.map((job) => ({
    key: job.company,
    title: job.company,
    content: <Job {...job} />,
  }));

  const defaultOpenKeys = jobs.length > 0 ? [jobs[0].company] : [];

  return <ResumeSubsection items={items} defaultOpenKeys={defaultOpenKeys} />;
}
