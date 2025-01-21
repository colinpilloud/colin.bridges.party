import { List } from "./ResumePrimitives.tsx";

export function AdditionalSkills() {
  return (
    <List
      items={[
        <span>
          <span className="font-semibold text-secondary">
            Management experience
          </span>
          , leading two teams of engineers towards aggressive goals
        </span>,
        "Ability to work efficiently in a team environment as well as independently",
        "Effective interpersonal and written communication skills",
      ]}
    />
  );
}
