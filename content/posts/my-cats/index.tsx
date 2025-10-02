import { Post } from "..";
import Markdown from "./markdown.mdx";
import headerImage from "./header2.jpg";



import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { CarouselImage, CarouselSingleImage } from "./carousel-image";



export const metaData: Post = {
  title: "My Cats",
  date: "2025-10-2",
  description: "Gauss and Ada",
  tags: ["Fredrick Gauss, Ada Lovelace, cats"],
  headerImage,
  private: false,
};

export function Render() {
  //const images1 = [];


  return (
    <main>
      <h1 className="text-right"> 2023 - 2024 </h1>
      <hr className="my-4" />

      <Markdown />
    </main>
  );
}
