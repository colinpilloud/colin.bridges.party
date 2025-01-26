import { Link } from "@heroui/react";
import { List, ResumeHeading } from "./ResumePrimitives.tsx";

export function OtherExperience() {
  return (
    <div className="flex flex-col flex-nowrap items-end space-y-4">
      <ResumeHeading variant="h2">
        <Link
          isExternal={true}
          className="text-right text-lg font-bold uppercase md:text-xl screen:text-secondary print:text-black"
          href="https://bestmagiccard.com"
        >
          bestmagiccard.com
        </Link>
        {
          // eslint-disable-next-line react/jsx-no-comment-textnodes
          <span className="text-lg"> // </span>
        }
        <Link
          isExternal={true}
          className="text-right text-lg font-bold uppercase md:text-xl screen:text-secondary print:text-black"
          href="https://bestbasicland.com"
        >
          bestbasicland.com
        </Link>
      </ResumeHeading>
      <List
        items={[
          <span>
            Sister sites that crowdsource rankings for Magic: the Gathering
            <span className="align-super text-xs">TM</span> cards
          </span>,
          "Monorepo TypeScript / React frontend powering both web applications",
          "AWS infrastructure deployed via TypeScript CDK v2",
        ]}
      />
      <ResumeHeading variant="h2">
        <Link
          isExternal={true}
          className="text-right text-lg font-bold uppercase md:text-xl screen:text-secondary print:text-black"
          href="https://future.flip.city/demo"
        >
          future.flip.city
        </Link>
      </ResumeHeading>
      <List
        items={[
          "Tournament companion webapp for bespoke pinball events",
          "Syncs with Firebase updates published from organizer's iOS app in real-time",
        ]}
      />
    </div>
  );
}
