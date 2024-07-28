import { ResumeSection } from "..";
import { RenderAcademics } from "./render";

export const academics: ResumeSection = {
  title: "Academics",
  RenderSection: RenderAcademics,
  entries: [
    {
      title: "Bachelor of Science in Applied Physics",
      location: "University of California, Santa Cruz",
      date: "2023",
      description:
        "",
      tags: ["Computer Science", "Bachelor of Science"],
    },
    {
      title: "Bachelor of Arts in Mathematics",
      location: "University of California, Santa Cruz",
      date: "2023",
      description:
        "",
      tags: ["Mathematics", "Bachelor of Arts"],
    },
    // {
    //   title: "Associate of Science in Physics",
    //   location: "College of the Desert",
    //   date: "2021",
    //   description:
    //     "",
    //   tags: ["Physics", "Associate of Science"],
    // },
    // {
    //   title: "Associate of Science in Mathematics",
    //   location: "College of the Desert",
    //   date: "2021",
    //   description:
    //     "",
    //   tags: ["Mathematics", "Associate of Arts"],
    // },
  ],
};
