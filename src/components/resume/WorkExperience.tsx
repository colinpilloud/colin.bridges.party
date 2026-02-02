import { List, ResumeHeading } from "./ResumePrimitives";
import jobs from "./jobs.json";
import { useState } from "react";
import { useMediaQuery } from "../../UseMediaQuery";

interface JobProps {
  company: string;
  roles: RoleProps[];
  responsibilities: string[];
}

function Job(props: JobProps) {
  return (
    <div className="break-inside-avoid">
      {props.roles.map((role) => (
        <ResumeHeading variant="h3" key={role.title}>
          <div className="flex items-center justify-end gap-x-2 print:flex-row-reverse">
            <span className="align-middle text-xs text-nowrap sm:text-sm">
              ({role.startDate} – {role.endDate})
            </span>
            <span className="text-md font-semibold print:text-[0.75rem]">
              {role.title}
            </span>
          </div>
        </ResumeHeading>
      ))}
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
  const printMedia = useMediaQuery("print");

  return printMedia ? <ListWorkExperience /> : <AccordionWorkExperience />;
}

function AccordionWorkExperience() {
  const [selectedKeys, setSelectedKeys] = useState<Set<string>>(
    new Set([jobs[0].company]),
  );

  const isOpen = (company: string) => selectedKeys.has(company);

  // Toggle open/close for a job
  const handleToggle = (company: string) => {
    setSelectedKeys((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(company)) {
        newSet.delete(company);
      } else {
        newSet.add(company);
      }
      return newSet;
    });
  };

  return (
    <div className="px-0">
      {jobs.map((job) => (
        <div className="mb-2" key={job.company}>
          <div
            className={`collapse-plus collapse w-full ${isOpen(job.company) ? "collapse-open" : ""}`}
          >
            <div
              tabIndex={0}
              className="collapse-title to-secondary/20 text-secondary print:text-md flex w-full cursor-pointer items-center justify-between bg-gradient-to-r from-transparent text-lg font-bold uppercase md:text-xl print:ml-4 print:text-left"
              onClick={() => handleToggle(job.company)}
            >
              <span className="flex-1 text-right">{job.company}</span>
            </div>
            <div
              tabIndex={0}
              className={`collapse-content bg-base-100 mt-1 w-full p-4 shadow transition-all duration-200 ${isOpen(job.company) ? "block" : "hidden"} mb-6 flex flex-col items-end space-y-4 md:space-y-6 print:mb-3 print:space-y-2`}
            >
              <Job {...job} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ListWorkExperience() {
  return (
    <div className="flex flex-col flex-nowrap space-y-1.75">
      {jobs.map((job) => (
        <div key={job.company} className="break-inside-avoid">
          <h2 className="text-md font-bold uppercase">{job.company}</h2>
          <Job {...job} />
        </div>
      ))}
    </div>
  );
}
