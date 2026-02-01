import { ReactNode } from "react";
import { Footer } from "./Footer";
import { ScrollRestoration } from "react-router-dom";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <ScrollRestoration />
      <div className="screen:bg-gradient-to-bl screen:from-black screen:to-gray-900 screen:to-[95%] screen:uppercase screen:text-primary screen:md:bg-[url('me-grainy.png')] flex min-h-screen overflow-hidden bg-left bg-blend-multiply filter md:bg-cover md:bg-fixed print:block print:min-h-0 print:bg-white print:text-black">
        <main className="relative flex w-screen flex-1 flex-col text-center print:static print:block print:w-full">
          <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-[url('film-grain.png')] md:bg-cover md:bg-fixed print:hidden"></div>
          <div className="screen:text-right screen:md:mr-[10vw] my-4 mr-4 flex flex-1 flex-col gap-8 print:my-0 print:mr-0 print:block print:text-left print:text-sm">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
