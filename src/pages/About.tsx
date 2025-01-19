import { ReactNode } from "react";
import { ButtonLink } from "../components/ButtonLink.tsx";
import { Prose } from "../components/Prose.tsx";

function RedBannerHeader({ content }: { content: string }) {
  return (
    <div className="-mx-2 w-screen bg-gradient-to-r from-transparent to-primary to-20% pb-4 pt-16">
      <h1 className="whitespace-pre-line text-2xl font-black text-black md:mr-[calc(12vw+2px)] md:text-4xl">
        {content}
      </h1>
    </div>
  );
}

function Blurb() {
  return (
    <section className="flex flex-col flex-nowrap items-end space-y-4">
      <Prose>
        I'm a career backend engineer in{" "}
        <span className="font-black">Portland, OR</span> who's done a little bit
        of everything.
      </Prose>
      <Prose>
        I like programming on the JVM and writing React / TypeScript webapps.
      </Prose>
    </section>
  );
}

function HighlightedLike() {
  return (
    <section className="flex flex-col items-end gap-2 whitespace-pre-line text-2xl font-bold text-secondary md:text-4xl">
      <h4 className="text-lg font-bold">I really like</h4>
      <span>solving problems{"\n"}with software.</span>
      <div className="grid grid-cols-1 justify-items-end gap-4 sm:grid-cols-2">
        <ButtonLink
          href="/portfolio"
          text="Portfolio"
          variant="primary-on-black"
        />
        <ButtonLink href="/resume" text="Résumé" variant="primary-on-black" />
      </div>
    </section>
  );
}

type Like = string | ReactNode;

function LikesSection({ header, likes }: { header: string; likes: Like[] }) {
  return (
    <section className="flex flex-col flex-nowrap items-end space-y-6">
      <h4 className="text-lg font-bold">{header}</h4>
      <ul className="flex flex-col flex-nowrap items-end space-y-2">
        {likes.map((like, i) => (
          <li key={i} className="w-64 list-inside list-disc md:w-96">
            {like}
          </li>
        ))}
      </ul>
    </section>
  );
}

const workLikes = [
  "working with teammates to build a fun, inclusive engineering culture.",
  "mentoring junior engineers, especially those new to backend engineering.",
  "establishing standards and building automation.",
  "folding useful functional programming concepts into everyday code.",
  "listening to metal.",
];

const outsideWorkLikes = [
  "listening to metal.",
  <span>
    playing Magic: The Gathering
    <span className="align-super text-xs">TM</span>, pinball, and pickleball."
  </span>,
  "watching sports.",
  "attempting various home improvement projects.",
];

export function About() {
  return (
    <>
      <RedBannerHeader content={"Colin\nBridges"} />
      <div className="space-y-16">
        <Blurb />
        <HighlightedLike />
        <LikesSection header="When I'm at work, I like..." likes={workLikes} />
        <LikesSection
          header="When I'm not at work, I like..."
          likes={outsideWorkLikes}
        />
      </div>
    </>
  );
}
