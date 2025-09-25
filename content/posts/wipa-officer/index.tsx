import { Post } from "..";
import Markdown1 from "./markdown.mdx";
import Markdown2 from "./markdown2.mdx";
import headerImage from "./NotionHeaderImage.png";
import astr from "./images/astr.png";
import griff from "./images/griff.png";
import johan from "./images/johan.png";
import wipaHalloween from "./images/wipaHalloween.png";

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
import { CarouselImage } from "./carousel-image";


export const metaData: Post = {
  title: "WiPA Officer",
  description: "WiPA Officer",
  date: "2023-10-25",
  tags: ["wipa", "clubs", "notion", "websites", "portfolio"],
  private: true,
  headerImage,
};

export function Render() {
  const images = [
    astr,
    griff,
    johan,
    wipaHalloween,
  ];
  return (
    <main>
      <h1>The Group </h1>

      <Markdown2 />

      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl uppercase leading-none tracking-wider">
            Event Webpages for WiPA's Visting Speakers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              {images.map((image, i) => (
                // <CarouselItem key={i} className="">
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                <CarouselImage src={image.src}></CarouselImage>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <Markdown1 />
    </main>
  );
}