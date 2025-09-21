"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export function CarouselImage(props: { src: string;}) {
  const [open, setOpen] = useState(false);

  return (
    <img
      src={props.src}
      alt="Carousel Image"
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      className={cn(open && "scale-150", "cursor-pointer transition-all")}
    />
  );
}