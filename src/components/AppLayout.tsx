import { type ReactNode } from "react";
import { Footer } from "./Footer";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <div className="not-print:text-primary flex min-h-screen overflow-hidden bg-right bg-blend-multiply filter not-print:bg-gradient-to-bl not-print:from-black not-print:to-gray-900 not-print:to-[95%] not-print:uppercase md:bg-cover md:bg-fixed not-print:md:bg-[url(/assets/img/bg/me-grainy.png)] print:block print:min-h-0 print:bg-white print:text-black">
        <main className="relative flex w-screen flex-1 flex-col print:static print:block print:w-full">
          <div className="pointer-events-none absolute top-0 left-0 h-full w-full bg-[url(/assets/img/bg/film-grain.png)] md:bg-cover md:bg-fixed print:hidden"></div>
          <div className="mt-4 flex flex-1 flex-col gap-8 print:my-0 print:mr-0 print:block print:text-sm">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
