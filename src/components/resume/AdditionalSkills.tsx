import { List } from "./ResumePrimitives";

export function AdditionalSkills() {
  return (
    <List
      items={[
        <span key="management-experience">
          <span className="screen:text-secondary font-semibold">
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
