import React, { useMemo } from "react";

const Tag = ({ tagName }) => {
  const color = useMemo(() => {
    let r =
      tagName.split().reduce((prev, cur) => {
        return prev + cur.charCodeAt();
      }, 0) % 255;

    let g = Math.pow(tagName.length, 3) % 255;

    let b = 200;

    return { r, g, b };
  }, [tagName]);

  return (
    <div
      className="bg"
      style={{
        backgroundColor: `rgb(${color.r}, ${color.g}, ${color.b})`,
        padding: "0.125rem 0.25rem",
        borderRadius: "5px",
      }}
    >
      <p style={{ margin: 0, fontSize: "var(--fontSize-0)" }}>{tagName}</p>
    </div>
  );
};

export default Tag;
