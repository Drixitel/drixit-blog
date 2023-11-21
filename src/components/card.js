import React from "react";
import { Link } from "gatsby";
import Tag from "../components/tag";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Card({ post }) {
  const { title, date, tags, description } = post.frontmatter;
  const image = getImage(post.frontmatter.headerImage);

  return (
    <Link className="noBar" to={`/posts${post.fields.slug}`}>
      <div
        className="card"
        style={{
          position: "relative",
          backgroundColor: "rgb(0,0,0)",
          padding: "0 1.125rem",
          borderRadius: "10px",
          display: "grid",
          height: "350px",
          gridTemplateRows: "auto 1fr auto",
          filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5))",
          gridTemplateColumns: "100%",
          overflow: "hidden",
        }}
      >
        <GatsbyImage
          image={image}
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            // filter: "blur(2px)",
          }}
          objectFit="cover"
          alt=""
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.9)",
            background:
              "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.5) 80%, rgba(0,0,0,0) 100%)",
          }}
        />
        <div className="head" style={{ zIndex: 2 }}>
          <h3 style={{ margin: "1.5rem 0 0.5rem 0" }}>{title}</h3>
          <p
            style={{
              margin: 0,
              color: "var(--color-text-light)",
              fontSize: "var(--fontSize-0)",
            }}
          >
            {date}
          </p>
        </div>
        <p style={{ overflow: "hidden", zIndex: 2, marginTop: "1em" }}>
          {description}
        </p>

        <div className="tags">
          {tags.map((tag, idx) => (
            <Tag key={idx} tagName={tag} />
          ))}
        </div>
      </div>
    </Link>
  );
}
