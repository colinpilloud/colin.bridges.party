import { List, ResumeHeading } from "./ResumePrimitives.tsx";
import { Accordion, AccordionItem } from "@heroui/react";
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
      defaultExpandedKeys={[jobs[0].company]}
      showDivider={false}
      itemClasses={{
        base: "-mr-2 flex flex-col items-end",
        title:
          "text-lg md:text-xl font-bold uppercase text-right text-secondary",
        trigger: "w-screen flex flex-row",
        indicator: "text-secondary text-xl rotate-0 data-[open=true]:rotate-45",
        content: "flex flex-col flex-nowrap items-end space-y-4 mb-4",
      }}
    >
      {jobs.map((job, i) => (
        <AccordionItem title={job.company} key={job.company} indicator="+">
          <Job {...job} />
        </AccordionItem>
      ))}
    </Accordion>
  );
}
