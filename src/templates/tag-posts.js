import React, { useCallback, useMemo, useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PostList from "../components/postList";
import { FiSearch } from "react-icons/fi";

const TagPostsTemplate = ({ pageContext, data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;
  const { tag } = pageContext;
  const [textFilter, setTextFilter] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      let title = post.frontmatter.title.toLowerCase();

      return title.includes(textFilter.toLowerCase());
    });
  }, [posts, textFilter]);

  const handleInput = useCallback(
    e => {
      setTextFilter(e.target.value);
    },
    [setTextFilter]
  );

  return (
    <Layout location={location} title={siteTitle}>
      <h1 style={{ textTransform: "capitalize" }}>Posts about {tag}</h1>
      <div
        className="filterWrapper"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          border: "2px solid",
          height: "3rem",
          borderRadius: "10px",
          padding: "0 1rem",
        }}
      >
        <FiSearch />
        <input
          type="text"
          style={{
            backgroundColor: "rgba(255,255,255,0)",
            outline: "none",
            border: "none",
            height: "90%",
            color: "var(--color-text)",
            width: "100%",
          }}
          placeholder="Search"
          value={textFilter}
          onChange={handleInput}
        />
      </div>
      <PostList posts={filteredPosts} />
    </Layout>
  );
};

export default TagPostsTemplate;

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = ({ pageContext, data }) => {
  const { tag } = pageContext;
  return <Seo title={`${tag.charAt(0).toUpperCase() + tag.slice(1)} posts`} />;
};

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { private: { ne: true }, tags: { in: [$tag] } } }
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
