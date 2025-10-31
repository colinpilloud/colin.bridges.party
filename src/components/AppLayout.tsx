import { ReactNode } from "react";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="flex min-h-screen overflow-hidden bg-left bg-blend-multiply filter md:bg-cover md:bg-fixed screen:bg-gradient-to-bl screen:from-black screen:to-gray-900 screen:to-[95%] screen:uppercase screen:text-primary screen:md:bg-[url('me-grainy.png')] print:bg-white print:text-black">
        <main className="relative flex w-screen flex-1 flex-col justify-center text-center">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url('film-grain.png')] md:bg-cover md:bg-fixed print:hidden"></div>
          <div className="my-4 mr-4 flex flex-col justify-end gap-8 screen:text-right screen:md:mr-[10vw] print:text-left print:text-sm">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
