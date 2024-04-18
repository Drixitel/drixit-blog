import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { matter } from "vfile-matter";
import type { VFile } from "vfile";
import { Transformer } from "unified";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function remarkParseFrontmatter(): Transformer {
  return function (_tree: unknown, file: unknown): undefined {
    matter(file as VFile);
  };
}

export function toSnakeCase(title: string) {
  return title.toLowerCase().replace(/ /g, "-");
}
