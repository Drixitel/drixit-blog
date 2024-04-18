"use client";

import { CatView } from "@/components/cat-sprite";
import Scene from "@/components/scene";
import { ReactNode, useRef } from "react";

export function Content(props: { children: ReactNode }) {
  const container = useRef<HTMLDivElement>(null);

  return (
    <div ref={container} id="main-content" className="relative pb-16">
      <Scene
        eventSource={container.current ?? undefined}
        className="absolute inset-0 pointer-events-none touch-none"
      />

      {props.children}

      <CatView className="absolute inset-0" />
    </div>
  );
}
