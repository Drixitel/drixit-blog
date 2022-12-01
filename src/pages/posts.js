import React, { useCallback, useMemo, useState } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import Seo from "../components/seo";
import PostList from "../components/postList";
import { FiSearch } from "react-icons/fi";

const BlogPosts = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMarkdownRemark.nodes;

  const [textFilter, setTextFilter] = useState("");

  const filteredPosts = useMemo(() => {
    return posts.filter(post => {
      let title = post.frontmatter.title.toLowerCase();
      let tags = post.frontmatter.tags;

      return (
        title.includes(textFilter.toLowerCase()) ||
        tags?.includes(textFilter.toLowerCase())
      );
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
      <h1>Posts</h1>
      <div
        className="filterWrapper"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "1rem",
          height: "3rem",
          borderRadius: "10px",
          padding: "0 1rem",
        }}
      >
        <FiSearch />
        <input
          type="text"
          placeholder="Search"
          value={textFilter}
          onChange={handleInput}
        />
      </div>
      <PostList posts={filteredPosts} />
    </Layout>
  );
};

export default BlogPosts;

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
