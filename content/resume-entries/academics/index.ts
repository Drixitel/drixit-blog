import { ResumeSection } from "..";
import { RenderAcademics } from "./render";

export const academics: ResumeSection = {
  title: "Academics",
  RenderSection: RenderAcademics,
  entries: [
    {
      title: "B.S., Applied Physics",
      location: "University of California, Santa Cruz",
      date: "2023",
      description:
        "",
      tags: ["Physics", "Bachelor of Science"],
    },
    {
      title: "B.A., Mathematics",
      location: "University of California, Santa Cruz",
      date: "2023",
      description:
        "",
      tags: ["Mathematics", "Bachelor of Arts"],
    },
    {
      title: "A.S., Physics",
      location: "College of the Desert",
      date: "2021",
      description:
        "",
      tags: ["Physics", "Associate of Science"],
    },
    {
      title: "A.S., Mathematics",
      location: "College of the Desert",
      date: "2021",
      description:
        "",
      tags: ["Mathematics", "Associate of Arts"],
    },
  ],
};
