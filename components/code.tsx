"use server";

import { cn } from "@/lib/utils";
import { BrightProps, Code as CodeImpl, Extension } from "bright";
import { ComponentProps } from "react";

/**
 * An **inline** code component.
 * */
export async function Cd(props: JSX.IntrinsicElements["code"]) {
  const { className, ...rest } = props;
  const classes = cn("bg-zinc-700 text-zinc-100 p-1 rounded", className);

  return <code {...rest} className={classes} />;
}

/**
 * A **block** code component.
 **/
export async function Code(props: ComponentProps<typeof CodeImpl>) {
  const { className, lineNumbers = true, ...rest } = props;
  return (
    <CodeImpl
      {...rest}
      extensions={extensions}
      lineNumbers={lineNumbers}
      className={cn(className, "group")}
    />
  );
}

const Title: BrightProps["TitleBarContent"] = (props) => {
  const { title, colors } = props;
  const { foreground, background } = colors;

  const buttonClasses = cn(
    "transition-[background-color] duration-200 bg-zinc-700 h-3 w-3 rounded-full"
  );

  return (
    <div
      className={`bg-[${background}] text-[${foreground}] py-1 text-sm flex items-center justify-between w-full`}
    >
      <div style={{ gap: 4, display: "flex", marginLeft: 8 }}>
        <div
          className={cn(buttonClasses, "group-hover:bg-[rgb(255,100,100)]")}
        />
        <div
          className={cn(buttonClasses, "group-hover:bg-[rgb(255,255,100)]")}
        />
        <div
          className={cn(buttonClasses, "group-hover:bg-[rgb(100,255,100)]")}
        />
      </div>
      <span style={{ opacity: 0.8 }}>{title}</span>
      <div style={{ width: 45 }} />
    </div>
  );
};

const extensions: Extension[] = [
  {
    name: "titlebar",
    TitleBarContent: Title,
  },
  {
    name: "mark",
    InlineAnnotation: ({ children, query }) => (
      <mark style={{ background: query }}>{children}</mark>
    ),
    MultilineAnnotation: ({ children, query }) => (
      <mark style={{ background: query }}>{children}</mark>
    ),
  },
  {
    name: "focus",
    MultilineAnnotation: ({ children }) => (
      <div style={{ filter: "contrast(0.1)" }}>{children}</div>
    ),
    beforeHighlight: (props, focusAnnotations) => {
      if (focusAnnotations.length === 0) return props;

      const lineCount = props.code.split("\n").length;

      const ranges = focusAnnotations.flatMap((a) => a.ranges);

      let newRanges = [{ fromLineNumber: 1, toLineNumber: lineCount }];

      for (const range of ranges) {
        const { fromLineNumber, toLineNumber } = range as {
          fromLineNumber: number;
          toLineNumber: number;
        };

        newRanges = newRanges
          .flatMap((r) => {
            if (
              r.fromLineNumber > toLineNumber ||
              r.toLineNumber < fromLineNumber
            )
              return [r];
            if (
              r.fromLineNumber >= fromLineNumber &&
              r.toLineNumber <= toLineNumber
            )
              return [];
            if (
              r.fromLineNumber < fromLineNumber &&
              r.toLineNumber > toLineNumber
            )
              return [
                {
                  fromLineNumber: r.fromLineNumber,
                  toLineNumber: fromLineNumber - 1,
                },
                {
                  fromLineNumber: toLineNumber + 1,
                  toLineNumber: r.toLineNumber,
                },
              ];
            if (r.fromLineNumber < fromLineNumber)
              return [
                {
                  fromLineNumber: r.fromLineNumber,
                  toLineNumber: fromLineNumber - 1,
                },
              ];
            if (r.toLineNumber > toLineNumber)
              return [
                {
                  fromLineNumber: toLineNumber + 1,
                  toLineNumber: r.toLineNumber,
                },
              ];
          })
          .filter((r) => r !== undefined) as {
          fromLineNumber: number;
          toLineNumber: number;
        }[];
      }

      const newAnnotations = props.annotations.filter(
        (a) => a.name !== "focus"
      );
      newAnnotations.push({
        name: "focus",
        ranges: newRanges,
      });
      return { ...props, annotations: newAnnotations };
    },
  },
];
