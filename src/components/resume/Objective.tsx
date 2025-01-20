import { Prose } from "../Prose.tsx";
import { ResumeSection } from "./ResumePrimitives.tsx";

export function Objective() {
  return (
    <ResumeSection headingProps={{ variant: "h1", children: "Objective" }}>
      <Prose>
        Jack-of-all-trades backend engineer looking for a role in the{" "}
        <span className="font-semibold">Portland, OR</span> area or fully remote
      </Prose>
    </ResumeSection>
  );
}
