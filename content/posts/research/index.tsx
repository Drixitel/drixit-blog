import { Post } from "..";
import Markdown from "./markdown.mdx";
import headerImage from "./internshipHeader.jpg";

import iris_group from "./images/1iris/iris_group.jpg";
import iris_device from "./images/1iris/iris_device.jpg";
import iris_programming from "./images/1iris/iris_programming.jpg";

import nasa_group from "./images/2codNasa/nasa_group.jpg";

import salton_group from "./images/3codSalton/salton_group.webp";
import salton_group2 from "./images/3codSalton/salton_group2.jpg";
import salton_impinger1 from "./images/3codSalton/salton_impinger1.jpg";
import salton_mesaSetup from "./images/3codSalton/salton_mesaSetup.jpg";
import salton_samples from "./images/3codSalton/salton_samples.jpg";
import salton_system from "./images/3codSalton/salton_system.jpg";

import csusb_melamine1 from "./images/4csusb/csusb_melamine1.jpg";
import csusb_melamine2 from "./images/4csusb/csusb_melamine2.jpg";
import csusb_melaminebreak from "./images/4csusb/csusb_melaminebreak.jpg";
import csusb_setup from "./images/4csusb/csusb_setup.png";

import { PDFViewer, PDFViewer3, PDFViewer4 } from "./pdfviewer";
import { PDFViewer2 } from "./pdfviewer";

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
  title: "Research",
  date: "2025-9-24",
  description: "Past Internships and Research Experiences",
  tags: ["internships, experiences, nasa, college, research"],
  private: false,
  headerImage,
};

export function Render() {
  const images1 = [iris_group, iris_device, iris_programming];
  const images2 = [nasa_group];
  const images3 = [
    salton_group,
    // salton_group2,
    salton_system,
    salton_mesaSetup,
    salton_samples,
    salton_impinger1,
  ];
  const images4 = [
    // csusb_setup,
    // csusb_melamine1,
    csusb_melamine2,
    csusb_melaminebreak,
  ];
  const images5 = [csusb_setup];

  return (
    <main>
      <h1 className="text-right"> 2023 - 2024 </h1>
      <hr className="my-4" />

      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl uppercase leading-none tracking-wider">
            IRIS Digital Dosimeter Group
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              {images1.map((image, i) => (
                // <CarouselItem key={i} className="">
                <CarouselItem key={i} className="basis-1/2">
                  <CarouselImage src={image.src}></CarouselImage>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </CardContent>
        <CardFooter>
          <ul className="list-disc list-inside">
            <li>
              <a
                href="https://github.com/IRIS-Digital-Dosimeter/IRIS-Project"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Repository
              </a>
            </li>
            <li>
              <a
                href="https://agu.confex.com/agu/fm23/meetingapp.cgi/Paper/1346450"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Motivation, Calibration, and Simulation of IRIS: Intense
                Radiation Integration Sensor
              </a>
            </li>
            <li>
              <a
                href="https://agu.confex.com/agu/fm23/meetingapp.cgi/Paper/1435137"
                target="_blank"
                rel="noopener noreferrer"
              >
                A Novel, Low-Cost Approach to Direct Measurement of Radiation
                Dose Associated with Terrestrial Gamma Ray Flashes
              </a>
            </li>
          </ul>
        </CardFooter>
      </Card>

      <p></p>
      <h1 className="text-right"> 2021 </h1>
      <hr className="my-4" />

      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl uppercase leading-none tracking-wider">
            My first Web Development internship @ SLAC
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PDFViewer2 />
        </CardContent>
        <CardFooter></CardFooter>
      </Card>

      <p></p>
      <h1 className="text-right"> 2020 </h1>
      <hr className="my-4" />

      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl uppercase leading-none tracking-wider">
            College of the Desert (COD) NASA JPL Group
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              {images2.map((image, i) => (
                // <CarouselItem key={i} className="">
                <CarouselItem key={i} className="md:basis-1/1 lg:basis-1/1">
                  <CarouselImage src={image.src}></CarouselImage>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardContent>
        <CardFooter>
          Intern cohort under the mentorship of Prof. Elshafie.
        </CardFooter>
      </Card>

      <p></p>
      <h1 className="text-right"> 2019 </h1>
      <hr className="my-4" />

      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl uppercase leading-none tracking-wider">
            Salton Sea Research Group
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              {images3.map((image, i) => (
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
        <CardFooter>
          <PDFViewer4 />
        </CardFooter>
      </Card>

      <p></p>
      <h1 className="text-right"> 2018 </h1>
      <hr className="my-4" />

      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl uppercase leading-none tracking-wider">
            CSUSB Material Science Research
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              {images5.map((image, i) => (
                // <CarouselItem key={i} className="">
                <CarouselItem key={i} className="md:basis-1/1 lg:basis-1/1">
                  <CarouselImage src={image.src}></CarouselImage>
                </CarouselItem>
              ))}
            </CarouselContent>

            <p></p>
          </Carousel>
          <Carousel>
            <CarouselContent>
              {images4.map((image, i) => (
                // <CarouselItem key={i} className="">
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/2">
                  <CarouselImage src={image.src}></CarouselImage>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardContent>
        <CardFooter className="flex flex-col items-start gap-4">
          <div>
            During my first internship, we measured melamine crystal capacitance
            as a function of temperature to identify nonlinear elements, but we
            got overzealous with the furnace and degraded our samples beyond
            replication. We still managed to get CT curves from our
            unintentionally destructive experiment.
            <p></p>
            <div className="w-full flex justify-center">
              <a
                href="/internshipPapers/csusb/CrestPoster2018.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Poster
              </a>
            </div>
          </div>
          <PDFViewer />
        </CardFooter>
      </Card>
    </main>
  );
}
