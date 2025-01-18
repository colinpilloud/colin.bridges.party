import { ReactNode } from "react";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-[url('me-grainy.png')] bg-cover bg-fixed bg-left uppercase leading-[1.125] text-primary bg-blend-multiply saturate-[0.9] filter">
      <main className="relative flex w-screen flex-1 flex-col justify-center text-center">
        <div className="pointer-events-none absolute left-0 top-0 h-full w-full bg-[url('film-grain.png')] bg-cover"></div>
        <div className="m-2 flex flex-col justify-end gap-8 text-right md:mr-[20vw]">
          {children}
        </div>
      </main>
    </div>
  );
}
