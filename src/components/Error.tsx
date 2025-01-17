import { Link } from "@nextui-org/react";

export function Error() {
  return (
    <div className="saturate-120 flex min-h-screen flex-col items-end justify-center gap-32 bg-[url('me-grainy.png')] bg-cover text-right uppercase leading-[1.125] text-primary bg-blend-multiply filter">
      <main className="relative mb-4 flex w-screen flex-1 flex-col justify-center text-center">
        <div className="pointer-events-none absolute left-0 top-0 h-screen w-full bg-[url('scratch.png')] bg-cover"></div>
        <div className="mr-2 flex flex-col gap-16 pb-36 text-right">
          <h1 className="text-2xl font-black md:text-4xl">
            You have
            <br />
            browsing
            <br />
            problems.
          </h1>
          <h3 className="font-bold md:text-2xl">We can solve them.</h3>
          <div className="my-6 flex flex-col items-end gap-4 font-semibold">
            <Link href="/">· Home</Link>
          </div>
        </div>
      </main>
    </div>
  );
}
