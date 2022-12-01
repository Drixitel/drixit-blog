import { Link } from "gatsby";
import React from "react";
import Tag from "../components/tag";

const PostList = ({ posts, ...props }) => {
  return (
    <>
      {posts.length > 0 ? (
        <ol style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug;

            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header>
                    <h2>
                      <Link
                        to={`/posts${post.fields.slug}`}
                        itemProp="url"
                        className="underline noBar"
                      >
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>

                    <small style={{ color: "var(--color-text-light)" }}>
                      {post.frontmatter.date}
                    </small>
                  </header>
                  <section>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <div
                      className="tags"
                      style={{
                        display: "flex",
                        alignItems: "flex-end",
                        flexWrap: "wrap",
                        gap: "0.35rem",
                        maxWidth: "100%",
                        marginTop: "0.5rem",
                      }}
                    >
                      {post.frontmatter.tags.map((tag, idx) => (
                        <Tag key={idx} tagName={tag} />
                      ))}
                    </div>
                  </section>
                </article>
              </li>
            );
          })}
        </ol>
      ) : (
        <div className="noPostsFound">
          <div className="text">
            <h1>There's nothing here...</h1>
            <h4>Try adjusting your search!</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default PostList;
