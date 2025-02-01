import { ReactNode } from "react";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="to-[95%]x flex min-h-screen overflow-hidden bg-gradient-to-bl from-black to-gray-900 bg-left bg-blend-multiply filter md:bg-cover md:bg-fixed screen:uppercase screen:text-primary screen:md:bg-[url('me-grainy.png')] print:bg-white print:text-black">
        <main className="relative flex w-screen flex-1 flex-col justify-center text-center">
          <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url('film-grain.png')] md:bg-cover md:bg-fixed print:hidden"></div>
          <div className="my-4 mr-4 flex flex-col justify-end gap-8 text-right md:mr-[10vw]">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
