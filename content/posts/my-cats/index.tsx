import { Post } from "..";
import Markdown from "./markdown.mdx";
import headerImage from "./header3.jpg";

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

import { CarouselImage, CarouselImage2 } from "./carousel-image";

import ada1 from "./images/ada/ada1.jpg";
import ada2 from "./images/ada/ada2.jpg";
import ada4 from "./images/ada/ada4.jpg";
import ada7 from "./images/ada/ada7.jpg";
import ada8 from "./images/ada/ada8.jpg";
import ada9 from "./images/ada/ada9.jpg";
import ada10 from "./images/ada/ada10.jpg";
import ada11 from "./images/ada/ada11.jpg";
import ada12 from "./images/ada/ada12.jpg";
import ada13 from "./images/ada/ada13.jpg";
import ada14 from "./images/ada/ada14.jpg";
import ada15 from "./images/ada/ada15.jpg";
import ada16 from "./images/ada/ada16.png";
import ada17 from "./images/ada/ada17.png";

import gauss1 from "./images/gauss/gauss1.jpg";
import gauss2 from "./images/gauss/gauss2.png";
import gauss3 from "./images/gauss/gauss3.jpg";
import gauss4 from "./images/gauss/gauss4.jpg";
import gauss5 from "./images/gauss/gauss5.jpg";
import gauss6 from "./images/gauss/gauss6.jpg";
import gauss7 from "./images/gauss/gauss7.jpg";
import gauss8 from "./images/gauss/gauss8.jpg";
import gauss9 from "./images/gauss/gauss9.jpg";
import gauss10 from "./images/gauss/gauss10.jpg";
import gauss11 from "./images/gauss/gauss11.jpg";

import gna1 from "./images/gaussNada/gna1.jpg";
import gna2 from "./images/gaussNada/gna2.jpg";
import gna3 from "./images/gaussNada/gna3.jpg";
import gna4 from "./images/gaussNada/gna4.jpg";
import gna5 from "./images/gaussNada/gna5.jpg";
import gna6 from "./images/gaussNada/gna6.jpg";

export const metaData: Post = {
  title: "My Cats",
  date: "2025-10-2",
  description: "Gauss and Ada",
  tags: ["Fredrick Gauss, Ada Lovelace, cats"],
  headerImage,
  private: false,
};

export function Render() {
  const images1 = [
    ada14,
    ada1,
    ada2,
    ada4,
    ada7,
    ada8,
    ada9,
    ada10,
    ada11,
    ada12,
    ada13,
    ada15,
    ada16,
    ada17,
  ];
  const images2 = [
    gauss6,
    gauss11,
    gauss3,
    gauss1,
    gauss5,
    gauss2,
    gauss4,
    gauss8,
    gauss9,
    gauss10,
  ];
  const images3 = [
    gna1,
    gna2,
    gna4,
    gna5,
    gna6,
    gna3,
  ];

  return (
    <main>
      <h1 className="text-center"> Ada </h1>
      <hr className="my-4" />
      <div className="text-center">
        Named after Ada Lovelace, she is my green-eyed tabby cheeky girl with
        asthma.
      </div>
      <p></p>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              {images1.map((image, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                  <CarouselImage src={image.src}></CarouselImage>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

      <h1 className="text-center mt-8"> Gauss </h1>
      <hr className="my-4" />
      <div className="text-center">
        Named after Carl Friedrich Gauss, he's my green-eyed derp derp.
      </div>
      <p></p>

      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              {images2.map((image, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                  <CarouselImage src={image.src}></CarouselImage>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

      <h1 className="text-center mt-8"> My Chickens </h1>
      <hr className="my-4" />

      <p></p>

      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              {images3.map((image, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                  <CarouselImage2 src={image.src}></CarouselImage2>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
      </Card>

    </main>
  );
}
