import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { posts } from "@/content/posts";
import { badgeVariants } from "@/components/ui/badge";
import Link from "next/link";
import { cn, toSnakeCase } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const postsByDate = posts.sort((a, b) => {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
});

export function RecentPosts() {
  return (
    <div className="py-8">
      <section>
        <h1 className="text-6xl font-black mb-6 uppercase">Recent Posts</h1>
        <Separator className="mb-8" />

        <div className="container mb-8">
          <Carousel>
            <CarouselContent>
              {postsByDate.map((post, i) => (
                <CarouselItem
                  key={post.title + i}
                  className="md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="flex flex-col justify-between h-full">
                    <CardHeader>
                      <CardTitle
                        className={cn(
                          "font-bold text-2xl uppercase leading-none tracking-wider"
                        )}
                      >
                        {post.title}
                      </CardTitle>

                      <CardDescription className="text-muted-foreground font-semibold font-serif italic">
                        {post.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <p>{post.descriptionLong}</p>
                    </CardContent>

                    <CardFooter className="block">
                      <Button
                        size="sm"
                        className="font-medium tracking-wide"
                        asChild
                      >
                        <Link href={`/blog/${toSnakeCase(post.title)}`}>
                          read more
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <Link
          href={`/blog`}
          className={cn(
            "font-medium text-sm uppercase underline underline-offset-2 italic tracking-wide",
            "text-muted-foreground hover:text-foreground transition-colors"
          )}
        >
          see all posts &rarr;
        </Link>
      </section>
    </div>
  );
}
