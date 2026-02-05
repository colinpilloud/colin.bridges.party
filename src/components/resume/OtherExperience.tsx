import { Link } from "react-router-dom";
import { List } from "./ResumePrimitives";

function OtherExperienceHeader({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="not-print:text-secondary font-extrabold whitespace-pre-line uppercase print:leading-none">
      {children}
    </h2>
  );
}

export function OtherExperience() {
  const magicCircle = [
    { href: "https://bestmagiccard.com", text: "Triplicate" },
    { href: "https://bestbasicland.com", text: "sister" },
    { href: "https://bestmagicart.com", text: "sites" },
  ];

  return (
    <div className="flex flex-col flex-nowrap not-print:space-y-4 print:space-y-0">
      <OtherExperienceHeader>
        <span>
          Magic Circle
          <span className="pl-px align-super text-[0.40rem]">Ⓜ️</span> Webring
        </span>
      </OtherExperienceHeader>
      <List
        items={[
          <span key="magic-circle-intro">
            {magicCircle.map((l) => (
              <span key={l.href}>
                <Link
                  className="not-print:text-secondary underline print:text-black print:no-underline"
                  to={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {l.text}
                </Link>{" "}
              </span>
            ))}
            that crowdsource rankings for Magic: the Gathering
            <span className="align-super text-[0.3rem]">TM</span> cards
          </span>,
          "Monorepo TypeScript / React frontend powering all three web applications",
          "AWS infrastructure deployed via TypeScript CDK v2",
        ]}
      />
      <OtherExperienceHeader>
        <Link
          className="not-print:text-secondary print:text-md text-right uppercase print:text-black"
          to="https://future.flip.city/demo"
          target="_blank"
          rel="noopener noreferrer"
        >
          future.flip.city
        </Link>
      </OtherExperienceHeader>
      <List
        items={[
          "Tournament companion webapp for bespoke pinball events",
          "Syncs with Firebase updates published from organizer's iOS app in real-time",
        ]}
      />
      <OtherExperienceHeader>
        <Link
          className="not-print:text-secondary print:text-md text-right uppercase print:text-black"
          to="https://ogr4u.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          ogr4u.com
        </Link>
      </OtherExperienceHeader>
      <List
        items={[
          "At-hand scouting reference for Pinball League matches",
          "Interactive filters allow rapid querying of machine and player data",
        ]}
      />
    </div>
  );
}
