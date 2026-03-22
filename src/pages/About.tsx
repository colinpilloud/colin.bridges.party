import { type ReactNode } from "react";
import { ButtonLink } from "../components/ButtonLink";
import { Prose } from "../components/Prose";
import { Link } from "react-router-dom";
import React from "react";

function BannerHeader({ content }: { content: string }) {
  return (
    <div className="to-primary w-screen bg-linear-to-l from-transparent to-20% pt-10 pb-4 pl-4 leading-[0.9] lg:pl-[clamp(1rem,15vw,16rem)]">
      <h1 className="text-4xl leading-10 font-bold whitespace-pre-line text-black md:text-6xl md:leading-14">
        {content}
      </h1>
    </div>
  );
}

function Blurb() {
  return (
    <section className="flex flex-col flex-nowrap space-y-4">
      <Prose>
        I'm a software engineer based in{" "}
        <span className="font-black">Portland, OR</span> with experience and
        interest across the full stack.
      </Prose>
      <Prose>
        I like creating{" "}
        <span className="font-black">lean, modern APIs in AWS</span>, as well as
        writing <span className="font-black">React / TypeScript webapps</span>.
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
    <section className="text-secondary flex flex-col gap-4 text-2xl font-bold whitespace-pre-line md:text-4xl">
      <div>
        <h4 className="text-sm font-bold">I really like</h4>
        <span className="text-6xl leading-[0.8]">
          solving problems{"\n"}with software.
        </span>
      </div>
      <div className="flex flex-col gap-4 lg:flex-row">
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
    <section className="flex flex-col flex-nowrap not-print:space-y-6">
      <h4 className="text-lg font-bold">{header}</h4>
      <ul className="flex flex-col flex-nowrap space-y-2">
        {likes.map((like) => (
          <li
            key={
              typeof like === "string"
                ? like
                : React.isValidElement(like)
                  ? like.key
                  : undefined
            }
            className="w-64 list-inside list-disc md:w-96"
          >
            {like}
          </li>
        ))}
      </ul>
    </section>
  );
}

const workLikes = [
  <span key="dx">
    establishing developer workflows with modern tooling, including{" "}
    <span className="font-black">AI and LLM-based assistants</span>.
  </span>,
  "working with teammates to build a collaborative and professional engineering culture.",
  "mentoring junior engineers, especially those new to backend engineering.",
  "folding useful functional programming concepts into everyday code.",
  "listening to metal.",
];

const outsideWorkLikes = [
  "listening to metal.",
  <span key="gaming-hobbies">
    playing Magic: The Gathering
    <span className="align-super text-xs">TM</span>, pinball, and pickleball.
  </span>,
  "watching sports.",
  "attempting various home improvement projects.",
];

export function About() {
  return (
    <>
      <BannerHeader content={"Colin\nBridges"} />
      <div className="flex flex-col space-y-8 pb-16 pl-4 lg:space-y-12 lg:pl-[clamp(1rem,15vw,16rem)]">
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
