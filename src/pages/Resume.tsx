function Header() {
  return null;
}

function Skills({ header, skills }: { header: string; skills: string[] }) {
  return null;
}

function WorkExperience() {
  return null;
}

function OtherExperience() {
  return null;
}

function Education() {
  return null;
}

function AchievementsAndAwards() {
  return null;
}

function BulletList({ items }: { items: string[] }) {
  return null;
}

export function Resume() {
  const technicalSkills = [""];
  const additionalSkills = [""];

  return (
    <div className="flex flex-col items-center gap-4">
      <Header />
      <Skills header="Technical Skills" skills={technicalSkills} />
      <Skills header="Additional Skills" skills={additionalSkills} />
      <WorkExperience />
      <OtherExperience />
      <Education />
      <AchievementsAndAwards />
    </div>
  );
}
