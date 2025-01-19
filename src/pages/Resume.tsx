import { Divider } from "@nextui-org/react";
import { Prose } from "../components/Prose.tsx";
import {
  Job,
  List,
  ResumeSection,
  SkillList,
} from "../components/ResumeComponents.tsx";

function Header() {
  return null;
}

function Objective() {
  return (
    <ResumeSection headingProps={{ variant: "h1", content: "Objective" }}>
      <Prose>
        Jack-of-all-trades backend engineer looking for a role in the{" "}
        <span className="font-semibold">Portland, OR</span> area or fully remote
      </Prose>
    </ResumeSection>
  );
}

function TechnicalSkills() {
  return (
    <ResumeSection
      headingProps={{ variant: "h1", content: "Technical Skills" }}
    >
      <List
        items={[
          <span>
            Modern API development (both REST and GraphQL) in{" "}
            <SkillList skills={["Java", "Kotlin", "Scala", "Python"]} />
          </span>,
          <span>
            Web application development with{" "}
            <SkillList skills={["React", "TypeScript", "Tailwind CSS"]} />
          </span>,
          <span>
            Build and deploy automation with{" "}
            <SkillList skills={["GitHub Actions", "CircleCI", "Docker"]} />
          </span>,
          <span>
            Cloud-based architecture in{" "}
            <span className="font-semibold text-secondary">AWS</span> including
            scale-to-zero deploys in{" "}
            <SkillList skills={["Lambda", "API Gateway"]} />
          </span>,
          <span>
            Database integration and management with{" "}
            <SkillList
              skills={["PostgreSQL", "MySQL", "DynamoDB", "MongoDB"]}
            />
          </span>,
        ]}
      />
    </ResumeSection>
  );
}

function AdditionalSkills() {
  return (
    <ResumeSection
      headingProps={{ variant: "h1", content: "Additional Skills" }}
    >
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
    </ResumeSection>
  );
}

function WorkExperience() {
  const jobs = [
    {
      company: "Truework",
      roles: [
        {
          title: "Senior Software Engineer",
          startDate: "Apr 2023",
          endDate: "",
        },
      ],
      responsibilities: [
        "Deliver user-facing features, contributing towards Python monorepo and React/Typescript frontend",
        "Add integrations with LOS platforms and employment/income data providers",
      ],
    },
    {
      company: "Flow Finance",
      roles: [
        {
          title: "Lead Engineer",
          startDate: "Sep 2022",
          endDate: "Jan 2023",
        },
        {
          title: "Senior Software Engineer",
          startDate: "Feb 2021",
          endDate: "Sep 2022",
        },
      ],
      responsibilities: [
        "Develop generic platform for building and deploying Scala code to AWS Lambda",
        "Build data pipeline from scratch, pulling data in real time and at low cost from several data providers",
        "Write backing logic for internal services, enabling bookkeepers to easily manipulate data upstream",
        "Mentor junior engineers on the JVM, Scala, and functional programming concepts from the ground up",
      ],
    },
    {
      company: "Cash App",
      roles: [
        {
          title: "Senior Software Engineer",
          startDate: "Sep 2020",
          endDate: "Feb 2021",
        },
      ],
      responsibilities: [
        "Maintain integration with Salesforce, empowering Cash App's customer support team",
        "Discovery and solution work for handling official customer complaints via multiple input sources",
      ],
    },
    {
      company: "Acorns",
      roles: [
        {
          title: "Engineering Manager",
          startDate: "Oct 2019",
          endDate: "May 2020",
        },
        {
          title: "Senior Software Engineer",
          startDate: "Jul 2018",
          endDate: "Oct 2019",
        },
      ],
      responsibilities: [
        "Harden, refine, and reconstruct monolithic Scala service, responsible for managing over a million IRAs",
        "Create serverless infrastructure to synchronize investment statuses across systems",
        "Lead engineering team of nine, emphasizing individual growth and team achievements",
        "Reinforce adherence to Scrum principles, increasing velocity and productivity",
      ],
    },
    {
      company: "Nike",
      roles: [
        {
          title: "Senior Software Engineer",
          startDate: "Jan 2017",
          endDate: "Jul 2018",
        },
      ],
      responsibilities: [
        "Devise and implement architecture for promoting search results on store.nike.com",
        "Craft Elasticsearch solutions for multi-tenant needs",
        "Implement and tune search engine scoring mechanism via Apache Spark/Hive",
      ],
    },
  ];

  return (
    <ResumeSection headingProps={{ variant: "h1", content: "Work Experience" }}>
      {jobs.map((job, i) => (
        <>
          <Job key={i} {...job} />
          {i < jobs.length - 1 && <Divider className="w-64 bg-primary" />}
        </>
      ))}
    </ResumeSection>
  );
}

function OtherExperience() {
  return (
    <ResumeSection
      headingProps={{ variant: "h1", content: "Other Experience" }}
    >
      <p>hello</p>
    </ResumeSection>
  );
}

function Education() {
  return (
    <ResumeSection headingProps={{ variant: "h1", content: "Education" }}>
      <p>hello</p>
    </ResumeSection>
  );
}

function AchievementsAndAwards() {
  return (
    <ResumeSection
      headingProps={{ variant: "h1", content: "Achievements / Awards" }}
    >
      <p>hello</p>
    </ResumeSection>
  );
}

export function Resume() {
  return (
    <div className="flex flex-col items-end gap-8">
      <Header />
      <Objective />
      <TechnicalSkills />
      <AdditionalSkills />
      <WorkExperience />
      <OtherExperience />
      <Education />
      <AchievementsAndAwards />
    </div>
  );
}
