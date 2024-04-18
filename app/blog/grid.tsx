"use client";

import { useLayoutEffect, useEffect, useRef } from "react";
import { PostCard } from "./post-card";
import styles from "./page.module.scss";
import { cn } from "@/lib/utils";
import Scene, { WavesView } from "@/components/scene";
import { useFilteredPosts } from "./filter";

type Props = JSX.IntrinsicElements["main"];

export function Grid(props: Props) {
  const { className, ...rest } = props;
  const grid = useRef<HTMLDivElement>(null);
  const posts = useFilteredPosts().filteredPosts;

  useLayoutEffect(() => {
    function handleResize() {
      if (!grid.current) return;

      addFillerCells(grid.current);
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <main ref={grid} className={cn(styles.posts, className)} {...rest}>
      {posts.map((post, idx) => (
        <PostCard
          key={post.title + idx.toString()}
          post={post}
          className={styles.post}
        />
      ))}
      {Array(20)
        .fill(null)
        .map((_, i) => (
          <div key={i} hidden className={cn(styles.filler)} />
        ))}
      <WavesView className={cn("absolute inset-1 z-[-1]")} />
    </main>
  );
}

function addFillerCells(target: HTMLElement) {
  if (!(target instanceof HTMLElement)) return;

  for (const child of target.children) {
    if (child.classList.contains(styles.filler)) {
      child.setAttribute("hidden", "true");
    }
  }

  const cols = getComputedStyle(target)
    .getPropertyValue("grid-template-columns")
    .split(" ")
    .map((s) => parseInt(s.replace("px", "")));

  const rows = getComputedStyle(target)
    .getPropertyValue("grid-template-rows")
    .split(" ")
    .map((s) => parseInt(s.replace("px", "")));

  const gridCells = Math.round(rows.length * cols.length);
  let cellsLeft = gridCells;

  for (const child of target.children) {
    if (child.classList.contains(styles.post)) {
      const colStyle = getComputedStyle(child).getPropertyValue("grid-column");
      const rowStyle = getComputedStyle(child).getPropertyValue("grid-row");

      if (!colStyle.startsWith("span ") || !rowStyle.startsWith("span ")) {
        return;
      }

      const col = parseInt(colStyle.split("span ")[1]);
      const row = parseInt(rowStyle.split("span ")[1]);

      cellsLeft -= col * row;
    }
  }

  for (const child of target.children) {
    if (cellsLeft <= 0) break;

    if (child.classList.contains(styles.filler)) {
      child.removeAttribute("hidden");
      cellsLeft--;
    }
  }
}
