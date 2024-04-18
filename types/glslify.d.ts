import { ReactNode } from "react";

declare module "glslify" {
  const fn: (src: TemplateStringsArray) => string;
  export default fn;
}

declare module "*.glsl" {
  const content: string;
  export default content;
}

declare module "*.frag" {
  const content: string;
  export default content;
}

declare module "*.vert" {
  const content: string;
  export default content;
}