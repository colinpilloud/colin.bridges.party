import { Link } from "@heroui/react";
import { List, ResumeHeading } from "./ResumePrimitives.tsx";

export function OtherExperience() {
  return (
    <>
      <ResumeHeading variant="h2">
        <Link
          isExternal={true}
          className="text-[length:inherit] text-inherit"
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
          className="text-[length:inherit] text-inherit"
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
    </>
  );
}
