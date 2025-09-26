import Markdown from "./markdown.mdx";
import headerImage from "./header-img1.jpg";
import { Post } from "..";

export function Render() {
  return <Markdown />;
}

export const metaData: Post = {
  title: "Hello World",
  description: "Baby's first post",
  date: "2022-11-11",
  tags: ["poem"],
  headerImage,
  private: false,
};
