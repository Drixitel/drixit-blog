import { ResumeSection } from "..";
import { cv } from "./cv";


export const about: ResumeSection = {
  title: "About",
  entries: [
    {
      title: "Curriculum Vitae",
      date: "Updated 2025",
      description: "Highlights an elaborate history and personal milestones",
      tags: [],
      RenderPage: cv,
    },
    {
      title: "Github Repository",
      date: "Ongoing",
      description: "Houses personal projects",
      tags: [],
      linkExternal: "https://github.com/Drixitel", // Add your actual GitHub URL here
      // Remove RenderPage to indicate this entry is a link
    },
  ],
};
