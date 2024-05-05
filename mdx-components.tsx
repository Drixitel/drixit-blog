import type { MDXComponents } from "mdx/types";
import Image, { ImageProps, StaticImageData } from "next/image";
import { getBase64 } from "./lib/plaiceholder";
import { cn } from "./lib/utils";
import {
  Table,
  TableHead,
  TableHeader,
  TableRow,
  TableBody,
  TableCell,
  TableCaption,
  TableFooter,
} from "./components/ui/table";
import { Children, PropsWithoutRef, ReactElement } from "react";
import { Separator } from "./components/ui/separator";
import { Code } from "./components/code";

function propsWithoutRef<T>(props: T): PropsWithoutRef<T> {
  const { ref, ...rest } = props as any;
  return rest;
}

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    table: (props) => <Table {...propsWithoutRef(props)} />,
    thead: (props) => <TableHeader {...propsWithoutRef(props)} />,
    th: (props) => <TableHead {...propsWithoutRef(props)} />,
    tr: (props) => <TableRow {...propsWithoutRef(props)} />,
    td: (props) => <TableCell {...propsWithoutRef(props)} />,
    tbody: (props) => <TableBody {...propsWithoutRef(props)} />,
    tfoot: (props) => <TableFooter {...propsWithoutRef(props)} />,
    caption: (props) => <TableCaption {...propsWithoutRef(props)} />,
    hr: (props) => <Separator {...propsWithoutRef(props)} />,
    pre: Code,
    img: async (props) => {
      const { alt = "", src, className, ...rest } = props;

      const classes = cn(
        className,
        "float-left max-w-[850px] md:max-w-[600px] sm:max-w-[400px] mr-3 my-3"
      );

      if (src === undefined) {
        throw new Error("Image src is required");
      }

      const imageData = normalizeImageData(src);

      if (imageData.src.startsWith("http")) {
        return (
          <img {...rest} alt={alt} src={imageData.src} className={classes} />
        );
      }

      const blurredImage = await getBase64(imageData.src);

      return (
        <Image
          className={classes}
          sizes="100vw"
          {...(rest as ImageProps)}
          alt={alt}
          src={imageData}
          placeholder="blur"
          blurDataURL={blurredImage}
        />
      );
    },
    ...components,
  };
}

function normalizeImageData(src: string | StaticImageData): StaticImageData {
  const data: StaticImageData = {
    src: "",
    height: 0,
    width: 0,
    blurWidth: 10,
    blurHeight: 10,
  };

  if (typeof src === "string") {
    data.src = src;
  } else {
    data.src = src.src;
    data.height = src.height;
    data.width = src.width;
  }

  return data;
}
