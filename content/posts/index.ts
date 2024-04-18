import { toSnakeCase } from "@/lib/utils";
import { StaticImageData } from "next/image";
import { FC } from "react";

export type Post = {
  title: string;
  description: string;
  descriptionLong?: string;
  date: string;
  tags: string[];
  private: boolean;
  headerImage?: StaticImageData;
};

const postData: Post[] = [
  await import("./example").then((mod) => mod.metaData),
  await import("./fourier-analysis").then((mod) => mod.metaData),
  await import("./wipa-officer").then((mod) => mod.metaData),
  await import("./hello-world").then((mod) => mod.metaData),
  await import("./my-second-post").then((mod) => mod.metaData),
];

if (process.env.NODE_ENV === "development") {
  postData.push(...postData, ...postData);
}

export const posts = postData.map(sanitizePost).filter((post) => !post.private);

function sanitizePost(post: Post): Post {
  return {
    ...post,
    tags: post.tags.map((tag) => toSnakeCase(tag)),

    // show all posts when in development
    private: process.env.NODE_ENV === "development" ? false : post.private,
  };
}

export async function getPostRenderer(postTitle: Post["title"]): Promise<FC> {
  return await import(`./${postTitle}`).then((mod) => mod.Render);
}
