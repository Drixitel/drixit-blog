import { Post } from "..";
import Markdown from "./markdown.mdx";
import headerImage from "./Notion.png";

export function Render() {
  return <Markdown />;
}

export const metaData: Post = {
  title: "WiPA Officer",
  description: "WiPA Officer",
  date: "2023-10-25",
  tags: ["wipa", "clubs", "notion", "websites", "portfolio"],
  private: true,
  headerImage,
};
