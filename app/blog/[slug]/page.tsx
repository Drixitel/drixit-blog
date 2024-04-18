import { BlogHeader } from "@/components/blog-header";
import { toSnakeCase } from "@/lib/utils";
import { getPostRenderer, posts } from "@/content/posts";
import { notFound } from "next/navigation";

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export default async function Page(props: Props) {
  const { slug } = props.params;
  const postData = posts.find((post) => toSnakeCase(post.title) === slug);
  const Render = await getPostRenderer(slug);

  if (!Render || !postData) {
    notFound();
  }

  return (
    <div>
      <BlogHeader post={postData} />
      <Render />
    </div>
  );
}

export function generateStaticParams(): Params[] {
  return posts.map((post) => {
    return {
      slug: toSnakeCase(post.title),
    };
  });
}
