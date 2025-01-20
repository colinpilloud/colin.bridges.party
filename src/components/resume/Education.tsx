import { ResumeSection } from "./ResumePrimitives.tsx";

function Degree() {
  return (
    <span className="text- whitespace-pre-line">
      <span className="italic">
        {"BS in Computer Science and Applied Mathematics,\n"}
      </span>
      <span className="font-bold">Colorado School of Mines</span>
    </span>
  );
}

export function Education() {
  return (
    <ResumeSection headingProps={{ variant: "h1", children: "Education" }}>
      <Degree />
    </ResumeSection>
  );
}
