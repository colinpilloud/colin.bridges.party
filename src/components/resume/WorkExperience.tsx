import { List, ResumeHeading } from "./ResumePrimitives.tsx";
import { Accordion, AccordionItem, Divider } from "@heroui/react";
import jobs from "./jobs.json";

interface JobProps {
  company: string;
  roles: RoleProps[];
  responsibilities: string[];
}

function Job(props: JobProps) {
  return (
    <>
      {props.roles.map((role, i) => (
        <ResumeHeading variant="h3" key={i}>
          <div className="justify-content-end flex flex-row items-center gap-2">
            <span className="text-nowrap align-middle text-xs sm:text-sm">
              ({role.startDate} – {role.endDate})
            </span>
            <span className="text-md font-semibold sm:text-lg">
              {role.title}
            </span>
          </div>
        </ResumeHeading>
      ))}
      <List items={props.responsibilities} />
    </>
  );
}

interface RoleProps {
  title: string;
  startDate: string;
  endDate: string;
}

export function WorkExperience() {
  return (
    <Accordion
      selectionMode="multiple"
      defaultExpandedKeys={["0", "1", "2"]}
      itemClasses={{
        base: "-mr-2",
        title: "text-xl font-bold uppercase text-right text-secondary",
        trigger: "w-screen flex flex-row md:pr-[10vw]",
        indicator:
          "text-secondary text-xl mr-3 pr-4 rotate-0 data-[open=true]:rotate-45 pr-5",
        content: "flex flex-col flex-nowrap items-end space-y-4 mb-4",
      }}
    >
      {jobs.map((job, i) => (
        <AccordionItem title={job.company} key={i} indicator="+">
          <Job key={i} {...job} />
          {i < jobs.length - 1 && (
            <Divider key={`divider-${i}`} className="w-64 bg-primary" />
          )}
        </AccordionItem>
      ))}
    </Accordion>
  );
}
