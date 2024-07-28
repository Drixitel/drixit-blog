import { ResumeSection } from "..";
import { cv } from "./cv";


export const about: ResumeSection = {
  title: "About",
  entries: [
    {
      title: "Freelance Simulation and Software Developer",
      date: "2023 - Present",
      description: "",
      tags: [],
    },
    {
      title: "Curriculum Vitae",
      date: "2024",
      description: "Highlights an elaborate history and personal milestones",
      tags: [],
      RenderPage: cv,

    },

  ],
};
