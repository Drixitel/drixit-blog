"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { ComponentProps, useState } from "react";

export function CarouselImage(props: ComponentProps <typeof Image>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="aspect-[3/2] w-full h-84 flex items-center justify-center overflow-hidden rounded-lg">
    <Image
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

export function CarouselImage2(props: ComponentProps <typeof Image>) {
  const [open, setOpen] = useState(false);

  return (
    <div className="aspect-[1/1] w-full h-84 flex items-center justify-center overflow-hidden rounded-lg">
    <Image
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

