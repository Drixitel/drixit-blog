import { cn } from "@/lib/utils";
import { Post } from "@/content/posts";
import Image from "next/image";
import Scene, { Waves } from "./scene";

type Props = { post: Post } & JSX.IntrinsicElements["header"];

export function BlogHeader(props: Props) {
  const { post, className, ...rest } = props;
  const { title, description, date, headerImage } = post;

  const classes = cn("mb-8 text-center", className);
  const textClasses = cn(
    "uppercase",
    headerImage ? "" : "mix-blend-overlay text-black"
  );
  const imageClasses = cn(
    "absolute object-cover left-0 right-0 -z-10 top-0 filter-darken"
  );

  return (
    <header className={classes} {...rest}>
      <div className="relative rounded-lg overflow-hidden z-30">
        <div className={`my-16`}>
          {title && <h1 className={textClasses}>{title}</h1>}
          {description && <h6 className={textClasses}>{description}</h6>}
          {date && (
            <time dateTime={date} className={cn(textClasses, "font-medium")}>
              {new Date(date).toLocaleDateString()}
            </time>
          )}
        </div>
        <div className="absolute inset-0 bg-black opacity-60 z-[-1]"></div>
        {headerImage ? (
          <Image alt="" className={imageClasses} src={headerImage} />
        ) : (
          <Scene className="absolute inset-0 z-[-1]">
            <Waves />
          </Scene>
        )}
      </div>
    </header>
  );
}
