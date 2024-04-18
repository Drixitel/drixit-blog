import { ResumeSection } from "..";
import { RenderAcademics } from "./render";

export const academics: ResumeSection = {
  title: "Academics",
  RenderSection: RenderAcademics,
  entries: [
    {
      title: "Bachelor of Science in Applied Physics",
      location: "University of California, Santa Cruz",
      date: "2021 - 2023",
      description:
        "I graduated with a Bachelor of Science in Applied Physics from the University of California, Santa Cruz.",
      tags: ["Computer Science", "Bachelor of Science"],
    },
    {
      title: "Bachelor of Arts in Mathematics",
      location: "University of California, Santa Cruz",
      date: "2021 - 2023",
      description:
        "I graduated with a Bachelor of Arts in Mathematics from the University of California, Santa Cruz.",
      tags: ["Mathematics", "Bachelor of Arts"],
    },
    {
      title: "Associate of Science in Physics",
      location: "College of the Desert",
      date: "2019 - 2021",
      description:
        "I graduated with an Associate of Science in Physics from College of the Desert.",
      tags: ["Physics", "Associate of Science"],
    },
    {
      title: "Associate of Science in Mathematics",
      location: "College of the Desert",
      date: "2019 - 2021",
      description:
        "I graduated with an Associate of Science in Mathematics from College of the Desert.",
      tags: ["Mathematics", "Associate of Arts"],
    },
    {
      title: "Associate of Arts in Psychology",
      location: "College of the Desert",
      date: "2019 - 2021",
      description:
        "I graduated with an Associate of Arts in Psychology from College of the Desert.",
      tags: ["Psychology", "Associate of Arts"],
    },
  ],
};
