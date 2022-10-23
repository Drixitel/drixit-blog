import { Link } from "gatsby";
import React, { useMemo } from "react";

const Tag = ({ tagName, ...props }) => {
  const color = useMemo(() => {
    let r = 255;

    let g = (Math.pow(tagName.length, 3) * 10) % 255;

    let b =
      (tagName.split().reduce((prev, cur) => {
        return prev + cur.charCodeAt();
      }, 0) *
        10) %
      255;

    return { r, g, b };
  }, [tagName]);

  return (
    <div
      className="bg"
      style={{
        border: "1px solid",
        borderColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
        backgroundColor: `rgb(${color.r * 0.15}, ${color.g * 0.15}, ${
          color.b * 0.15
        })`,
        padding: "0.125rem 0.25rem",
        borderRadius: "5px",
        height: "min-content",
        cursor: "pointer",
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: "var(--fontSize-0)",
          fontFamily: "var(--fontFamily-sans)",
          fontWeight: "500",
        }}
      >
        <Link
          to={`/posts/tags/${tagName}`}
          className="noBar"
          style={{
            color: `rgb(${color.r}, ${color.g}, ${color.b})`,
          }}
        >
          {tagName}
        </Link>
      </p>
    </div>
  );
};

export default Tag;
