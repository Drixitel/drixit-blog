import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import Tag from "../components/tag";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  return (
    <>
      <Layout location={location} title={siteTitle}>
        <section className="top3">
          <h1>Check out my latest posts!</h1>

          <div
            className="cards"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(275px, 1fr))",
              alignItems: "stretch",
              justifyContent: "space-between",
              gap: "0.5rem",
            }}
          >
            {posts.slice(0, 3).map((post, idx) => {
              const { title, date, tags } = post.frontmatter;
              return (
                <div
                  key={idx}
                  className="card"
                  style={{
                    backgroundColor: "#393939",
                    padding: "0 1.125rem",
                    borderRadius: "10px",
                    display: "grid",
                    gridTemplateRows: "auto 200px auto",
                  }}
                >
                  <div className="head">
                    <h3 style={{ margin: "1.5rem 0 0.5rem 0" }}>
                      <Link to={post.fields.slug}>{title}</Link>
                    </h3>
                    <p
                      style={{
                        margin: 0,
                        color: "var(--color-text-light)",
                        fontSize: "var(--fontSize-0)",
                      }}
                    >
                      {date}
                    </p>
                    <hr
                      className="monochrome"
                      style={{
                        background: "var(--color-text-light-mono)",
                        width: "100%",
                      }}
                    />
                  </div>
                  <p style={{ overflowY: "auto" }}>{post.excerpt}</p>

                  <div
                    className="tags"
                    style={{
                      display: "flex",
                      marginBottom: "0.75rem",
                      gap: "0.35rem",
                    }}
                  >
                    {tags.map((tag, idx) => (
                      <Tag tagName={tag} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </Layout>
    </>
  );
};

export default BlogIndex;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="All posts" />;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`;
