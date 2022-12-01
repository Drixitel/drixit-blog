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
              gap: "0.75rem",
            }}
          >
            {posts.slice(0, 3).map((post, idx) => {
              const { title, date, tags } = post.frontmatter;
              return (
                <div
                  key={idx}
                  className="card"
                  style={{
                    position: "relative",
                    backgroundColor: "rgb(43 35 35)",
                    padding: "0 1.125rem",
                    borderRadius: "10px",
                    display: "grid",
                    height: "350px",
                    gridTemplateRows: "auto 1fr auto",
                    gridTemplateColumns: "100%",
                  }}
                >
                  <div className="head">
                    <h3 style={{ margin: "1.5rem 0 0.5rem 0" }}>
                      <Link
                        className="underline noBar"
                        to={`/posts${post.fields.slug}`}
                      >
                        {title}
                      </Link>
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
                    {/* <hr
                      className="monochrome"
                      style={{
                        background: "var(--color-text-light)",
                        width: "100%",
                      }}
                    /> */}
                  </div>
                  <p style={{ overflowY: "auto", zIndex: 2, marginTop: "1em" }}>
                    {post.excerpt}
                  </p>

                  <div
                    className="tags"
                    style={{
                      display: "flex",
                      alignItems: "flex-end",
                      flexWrap: "wrap",
                      gap: "0.35rem",
                      marginBottom: "0.75rem",
                      maxWidth: "100%",
                      zIndex: 2,
                    }}
                  >
                    {tags.map((tag, idx) => (
                      <Tag key={idx} tagName={tag} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <h6>
            <Link to="/posts" className="underline noBar">
              check out the rest
            </Link>
          </h6>
        </section>

        <section
          style={{ position: "relative", padding: "3em 0", marginTop: "5em" }}
        >
          <div
            className="bg"
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "50%",
              transform: "translateX(-50%)",
              width: "100vw",
              zIndex: -1,
              backgroundColor: "rgb(43, 35, 35)",
            }}
          />

          <div className="wrapper">
            <h1 style={{ margin: "0 0 1em" }}>Let's Talk!</h1>

            <form name="Contact Form" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="Contact Form" />
              <p>
                <label>
                  Name:
                  <input type="text" name="name" />
                </label>
              </p>
              <p>
                <label>
                  Email:
                  <input type="text" name="email" />
                </label>
              </p>
              <p>
                <label>
                  Message:<textarea name="message" rows={5}></textarea>
                </label>
              </p>
              <button type="submit">Send</button>
            </form>
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
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { private: { ne: true } } }
    ) {
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
