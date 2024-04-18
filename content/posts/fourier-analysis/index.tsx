import { Post } from "../metadata";
import Markdown from "./markdown.mdx";

export function Render() {
  return <Markdown />;
}

export const metaData: Post = {
  title: "Fourier Analysis",
  description: "An introduction to Fourier Analysis",
  date: "2022-11-11",
  tags: ["math", "fourier", "desmos", "series"],
  private: false,
};
