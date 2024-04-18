import { Card, CardContent } from "@/components/ui/card";
import { cn, toSnakeCase } from "@/lib/utils";
import { Post } from "@/content/posts";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { ComponentProps } from "react";

type Props = { post: Post } & ComponentProps<typeof Card>;

export function PostCard(props: Props) {
  const { post, className, ...rest } = props;
  const { title, headerImage } = post;

  const outerClasses = cn(
    "inset-4 scale-100 group-hover:scale-105 transition-transform rounded-lg"
  );

  return (
    <div className={cn(className, "group relative overflow-hidden")}>
      <Link href={`/blog/${toSnakeCase(title)}`}>
        <div
          className={cn(
            "absolute outline outline-secondary outline-[1000px] z-10",
            outerClasses
          )}
        />
        <Card
          className={cn(
            "absolute bg-transparent overflow-visible border-none",
            headerImage ? "" : "mix-blend-overlay",
            outerClasses
          )}
          {...rest}
        >
          {headerImage && <ImageBackground img={headerImage} />}

          <CardContent className="w-full h-full p-0">
            <Text
              post={post}
              hasImage={headerImage !== undefined}
              className={cn(
                headerImage ? "opacity-0" : "",
                "group-hover:opacity-100 transition-opacity"
              )}
            />
          </CardContent>
        </Card>
      </Link>
    </div>
  );
}

function ImageBackground(props: { img: StaticImageData }) {
  const { img } = props;
  const sizeClasses = cn("absolute block max-h-none max-w-none");

  return (
    <div className="absolute inset-0 rounded-lg z-[-1] grid place-items-center">
      <div className="absolute -inset-5 opacity-0 bg-black group-hover:opacity-75 transition-opacity" />
      <Image
        alt=""
        src={img}
        className={cn(
          sizeClasses,
          "transition-transform scale-100 group-hover:scale-105 z-[-1]"
        )}
      />
    </div>
  );
}

function Text(
  props: { post: Post; hasImage: boolean } & JSX.IntrinsicElements["div"]
) {
  const { post, className, hasImage, ...rest } = props;
  const { title, description } = post;

  const noHeaderImageClasses = cn(
    hasImage ? "text-background dark:text-foreground" : "text-black"
  );

  return (
    <div
      className={cn(
        className,
        "h-full w-full text-center p-2 flex flex-col justify-center",
        "@container"
      )}
      {...rest}
    >
      <h1
        className={cn(
          "text-3xl uppercase font-black @[13rem]:text-6xl",
          noHeaderImageClasses
        )}
      >
        {title}
      </h1>
      <h3
        className={cn(
          "text-sm font-sans font-medium uppercase",
          noHeaderImageClasses
        )}
      >
        {description}
      </h3>
    </div>
  );
}
