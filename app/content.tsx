"use client";

import { ReactNode, useRef } from "react";

export function Content(props: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} id="main-content" className="relative pb-16">
      {props.children}
    </div>
  );
}
