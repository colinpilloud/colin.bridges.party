import { Header } from "../components/resume/Header";
import { WideBandAccordion } from "../components/WideBandAccordion";
import { GridResume } from "../components/resume/GridResume";
import sections from "@/components/resume/ResumeSections";
import { ResumeMediaSwap } from "@/components/resume/ResumeMediaSwap";

export function Resume() {
  return (
    <div className="mb-8 flex flex-col items-center">
      <Header />
      <ResumeMediaSwap
        screen={<WideBandAccordion sections={sections} />}
        print={<GridResume />}
      />
    </div>
  );
}
