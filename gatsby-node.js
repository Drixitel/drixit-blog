const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`);
  const tagPosts = path.resolve(`./src/templates/tag-posts.js`);

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          tags: group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
          nodes {
            id
            fields {
              slug
            }
            frontmatter {
              private
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    );
    return;
  }

  const posts = result.data.allMarkdownRemark.nodes;
  const tags = result.data.allMarkdownRemark.tags;

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  const getNextPost = posts => {
    for (let post of posts) {
      if (post.frontmatter.private) continue;

      return post.id;
    }
    return null;
  };

  if (posts.length > 0) {
    posts.forEach((post, index, arr) => {
      const previousPostId =
        index === 0 ? null : getNextPost([...arr.slice(0, index)].reverse());
      const nextPostId =
        index > arr.length - 1 ? null : getNextPost(arr.slice(index + 1));

      createPage({
        path: `/posts${post.fields.slug}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }

  if (tags.length > 0) {
    tags.forEach(tag => {
      createPage({
        path: `/posts/tags/${tag.fieldValue}/`,
        component: tagPosts,
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
