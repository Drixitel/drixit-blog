declare module "*.mdx" {
  export const frontmatter: {
    title?: string;
    description?: string;
    date?: string;
    updated?: string;
    tags?: string[];
    headerImage?: string;
    private?: boolean;
  };
}
