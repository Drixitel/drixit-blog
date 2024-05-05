import { ResumeSection } from "..";
import { PrettyLady } from "./pretty-lady";

export const experience: ResumeSection = {
  title: "Experience",
  entries: [
    {
      title: "Freelance Software Engineer",
      date: "2021 - Present",
      description: "I am a software engineer.",
      tags: ["React", "TypeScript", "Node.js", "GraphQL", "AWS"],
    },
    {
      title: "Pretty Lady",
      location: "Everywhere",
      date: "Forever",
      description: "I am a pretty lady.",
      tags: ["Pretty", "Lady"],
      RenderPage: PrettyLady,
    },
  ],
};
