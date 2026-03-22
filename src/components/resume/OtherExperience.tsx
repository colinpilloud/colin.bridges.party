import { Link } from "react-router-dom";
import { List } from "./ResumePrimitives";
import { ResumeSubsection } from "./ResumeSubsection";

export function OtherExperience() {
  const magicCircle = [
    { href: "https://bestmagiccard.com", text: "Triplicate" },
    { href: "https://bestbasicland.com", text: "sister" },
    { href: "https://bestmagicart.com", text: "sites" },
  ];

  const items = [
    {
      key: "magic-circle",
      title: (
        <span>
          Magic Circle
          <span className="pl-px align-super text-[0.6em]">Ⓜ️</span> Webring
        </span>
      ),
      content: (
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
              <span className="align-super text-[0.6em]">TM</span> cards
            </span>,
            "Monorepo TypeScript / React frontend powering all three web applications",
            "AWS infrastructure deployed via TypeScript CDK v2",
          ]}
        />
      ),
    },
    {
      key: "future-flip-city",
      title: "future.flip.city",
      content: (
        <List
          items={[
            <span key="ffc-link">
              <Link
                className="not-print:text-secondary underline print:text-black print:no-underline"
                to="https://future.flip.city/demo"
                target="_blank"
                rel="noopener noreferrer"
              >
                Tournament companion webapp
              </Link>{" "}
              for bespoke pinball events
            </span>,
            "Syncs with Firebase updates published from organizer's iOS app in real-time",
          ]}
        />
      ),
    },
    {
      key: "ogr4u",
      title: "ogr4u.com",
      content: (
        <List
          items={[
            <span key="ogr-link">
              <Link
                className="not-print:text-secondary underline print:text-black print:no-underline"
                to="https://ogr4u.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                At-hand scouting reference
              </Link>{" "}
              for Pinball League matches
            </span>,
            "Interactive filters allow rapid querying of machine and player data",
          ]}
        />
      ),
    },
  ];

  return <ResumeSubsection items={items} />;
}
