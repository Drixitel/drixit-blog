import { cn } from "@/lib/utils";

export function Paper(props: JSX.IntrinsicElements["div"]) {
  const { className, ...rest } = props;
  const classes = cn(
    className,
    "container py-8 w-full rounded",
    "bg-secondary text-secondary-foreground",
    "shadow-2xl dark:shadow-none dark:border"
  );

  return <div {...rest} className={classes} />;
}
