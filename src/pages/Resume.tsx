import { Header } from "../components/resume/Header";
import { WideBandAccordion } from "../components/WideBandAccordion";
import { useMediaQuery } from "../UseMediaQuery";
import { GridResume } from "../components/resume/GridResume";
import sections from "@/components/resume/ResumeSections";

export function Resume() {
  const printMedia = useMediaQuery("print");

  return (
    <div className="mb-8 flex flex-col items-center">
      <Header />
      {printMedia ? <GridResume /> : <WideBandAccordion sections={sections} />}
    </div>
  );
}
