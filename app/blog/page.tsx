import { Paper } from "@/components/paper";
import { FilteredPostsProvider, Filters } from "./filter";
import { Grid } from "./grid";
import { posts } from "@/content/posts";
import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";

export default async function Page() {
  return (
    <div className="container py-8 rounded border relative">
      <h1 className="text-6xl font-black mb-8 uppercase text-secondary-foreground">
        Blog Posts
      </h1>

      <FilteredPostsProvider posts={posts}>
        <Suspense fallback={null}>
          <Filters posts={posts} />
        </Suspense>

        <Separator className="mb-4" />

        <div className="relative border border-secondary">
          <Grid />
        </div>
      </FilteredPostsProvider>

      <div className="absolute inset-0 bg-secondary -z-10" />
    </div>
  );
}
