import { Button, Link } from "@nextui-org/react";

function RedBannerHeader({ content }: { content: string }) {
  return (
    <div className="-mx-2 w-screen bg-primary pb-4 pt-16">
      <h1 className="mr-2 whitespace-pre-line text-2xl font-black text-black md:text-4xl">
        {content}
      </h1>
    </div>
  );
}

function HighlightedLike() {
  return (
    <section className="mb-24 flex flex-col items-end gap-4 whitespace-pre-line text-2xl font-bold md:text-4xl">
      <h4 className="text-lg font-bold">I really like</h4>
      <span>solving problems{"\n"}with software.</span>
      <div className="grid grid-cols-2 gap-4">
        <Button size="sm" radius="lg" className="bg-primary p-6 md:p-8">
          <Link className="font-black uppercase text-black" href="/resume">
            Résumé
          </Link>
        </Button>
        <Button size="sm" radius="lg" className="bg-primary p-6 md:p-8">
          <Link className="font-black uppercase text-black" href="/portfolio">
            Portfolio
          </Link>
        </Button>
      </div>
    </section>
  );
}

function LikesSection({ header, likes }: { header: string; likes: string[] }) {
  return (
    <section className="flex flex-col flex-nowrap items-end space-y-6">
      <h4 className="text-lg font-bold">{header}</h4>
      <ul className="flex flex-col flex-nowrap items-end space-y-2">
        {likes.map((like) => (
          <li key={like} className="w-64 list-inside list-disc md:w-96">
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
  "playing Magic: The Gathering™️, pinball, and pickleball.",
  "watching sports.",
  "attempting various home improvement projects.",
];

export function About() {
  return (
    <>
      <RedBannerHeader content={"Colin\nBridges"} />
      <div className="space-y-16">
        <section className="flex flex-col flex-nowrap items-end space-y-4">
          <p className="w-64 md:w-96">
            I'm a career backend engineer in{" "}
            <span className="font-black">Portland, OR</span> who's done a little
            bit of everything.
          </p>
          <p className="w-64 md:w-96">
            I like programming on the JVM and writing React/TypeScript webapps.
          </p>
        </section>
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
