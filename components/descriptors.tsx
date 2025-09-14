import { cn } from "@/lib/utils";
import { Fragment } from "react";

const classNames = cn("text-xl font-semibold text-foreground");

export function Descriptors() {
  return (
    <div className="text-inherit">
      <h2 className="text-center font-bold text-3xl mb-2">LIVES IN MY HEAD:</h2>

      <div className="flex whitespace-nowrap overflow-x-hidden">
        <div className="relative uppercase">
          <DescriptorList className="animate-marquee" />
          <DescriptorList
            className="animate-marquee2 absolute top-0"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
}

function DescriptorList(props: JSX.IntrinsicElements["ul"]) {
  const classes = cn(props.className, "flex items-center list-none");

  return (
    <ul {...props} className={classes}>
      {DESCRIPTORS.map((descriptor, i) => (
        <Fragment key={i}>
          <li className="bg-muted py-1 px-2">
            <h3 className={classNames}>{descriptor}</h3>
          </li>
          <li className="mx-2">
            <span className={classNames}>—</span>
          </li>
        </Fragment>
      ))}
    </ul>
  );
}

const DESCRIPTORS = [
  "L.O.R. audio book",
  "speg, the all knowing",
  "spanish punk music",
  "'it's just algebra - Lee'",
  "Ada & Gauss",
  "the master equations but derived with vectors",
];
