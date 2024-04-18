import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdxFrontmatter from "remark-mdx-frontmatter";
import remarkMdxImages from "remark-mdx-images";
import remarkSectionize from "remark-sectionize";
import rehypeKatex from "rehype-katex";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx", "md"],
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.(glsl|vs|fs|vert|frag)$/,
        exclude: /node_modules/,
        use: ["raw-loader", "glslify-loader"],
      },
      {
        test: /\.(svg|pdf)$/,
        type: "asset/resource",
      },
      {
        resourceQuery: /url/,
        type: "asset/resource",
      },
      {
        resourceQuery: /raw/,
        type: "asset/source",
      }
    );

    return config;
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      remarkFrontmatter,
      remarkMdxImages,
      remarkMdxFrontmatter,
      remarkGfm,
      remarkMath,
      remarkSectionize,
    ],
    rehypePlugins: [rehypeKatex],
  },
});

export default withMDX(nextConfig);
