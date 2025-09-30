"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";

export function CarouselImage(props: { src: string;}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="aspect-[16/9] w-full h-72 flex items-center justify-center overflow-hidden rounded-lg">
    <img
      src={props.src}
      alt="Carousel Image"
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      className={cn(open && "scale-150", "cursor-pointer transition-all")}
    />
    </div>
  );
}

export function CarouselSingleImage(props: { src: string;}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="h-72 flex items-center justify-center overflow-hidden rounded-lg">
    <img
      src={props.src}
      alt="Carousel Image"
      onClick={() => {
        setOpen((prev) => !prev);
      }}
      className={cn(open && "scale-150", "cursor-pointer transition-all")}
    />
    </div>
  );
}