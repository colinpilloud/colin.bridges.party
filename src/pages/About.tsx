import { ReactNode } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { Prose } from "../components/Prose";
import { Link } from "react-router-dom";

function BannerHeader({ content }: { content: string }) {
  return (
    <div className="to-primary w-screen bg-linear-to-r from-transparent to-20% pt-10 pr-4 pb-4 leading-[0.9] md:pt-16 md:pr-[10vw]">
      <h1 className="text-2xl leading-10 font-black whitespace-pre-line text-black md:text-4xl md:leading-14">
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
      <Prose className="text-primary font-extrabold">
        I am ready for my next role;{" "}
        <Link to="mailto:colin@bridges.party" className="underline">
          let's connect!
        </Link>
      </Prose>
    </section>
  );
}

function HighlightedLike() {
  return (
    <section className="text-secondary ml-4 flex flex-col items-end gap-4 text-2xl leading-[0.9] font-bold whitespace-pre-line md:text-4xl">
      <div>
        <h4 className="text-md mb-1 font-bold">I really like</h4>
        <span>solving problems{"\n"}with software.</span>
      </div>
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
    <section className="screen:space-y-6 flex flex-col flex-nowrap items-end">
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
    <span className="align-super text-xs">TM</span>, pinball, and pickleball.
  </span>,
  "watching sports.",
  "attempting various home improvement projects.",
];

export function About() {
  return (
    <div className="my-16 flex flex-col space-y-8 md:space-y-16">
      <BannerHeader content={"Colin\nBridges"} />
      <Blurb />
      <HighlightedLike />
      <LikesSection header="When I'm at work, I like..." likes={workLikes} />
      <LikesSection
        header="When I'm not at work, I like..."
        likes={outsideWorkLikes}
      />
    </div>
  );
}
