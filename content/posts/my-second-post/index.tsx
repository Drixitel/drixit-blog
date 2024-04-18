import { Post } from "@/posts/metadata";
import Markdown from "./markdown.mdx";

export function Render() {
  return <Markdown />;
}

export const metaData: Post = {
  title: "My Second Post",
  description: "My Second Post",
  date: "2015-05-06T23:46:37.121Z",
  tags: ["physics", "programming"],
  private: true,
};
