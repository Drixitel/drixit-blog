import { Cd, Code } from "@/components/code";
import Markdown, { frontmatter } from "./markdown.mdx";
import saltyEggImage from "./salty_egg.jpg";
import { Post } from "..";
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
import Image from "next/image";
import { CarouselImage } from "./carousel-image";


const descriptionLong =
  "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat. Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.";

export const metaData: Post = {
  title: "Example",
  description: "This is an example post",
  descriptionLong,
  date: "2024-01-01",
  tags: ["example"],
  private: true,
};



export function Render() {
  const images = [
    saltyEggImage,
    saltyEggImage,
    saltyEggImage,
    saltyEggImage,
    saltyEggImage,
  ];
  return (
    <main>
      <h1>This is an example post</h1>
      <Card>
        <CardHeader>
          <CardTitle className="font-bold text-2xl uppercase leading-none tracking-wider">
            Image Carousel Example
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Carousel>
            <CarouselContent>
              {images.map((image, i) => (
                // <CarouselItem key={i} className="">
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/3">
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

      <p>
        We can write whatever HTML content we want here using JSX syntax. JSX is
        essentially HTML with some JavaScript functionality baked in.
      </p>

      <section>
        <blockquote>
          We can import markdown files, and render them in the JSX as well. Note
          we can also fetch any frontmatter defined in the markdown and use it
          here in our JSX
        </blockquote>
        <ul className="list-disc list-inside">
          <li>Title: {frontmatter.title}</li>
          <li>Description: {frontmatter.description}</li>
          <li>Date: {frontmatter.date}</li>
        </ul>
        <h3>Styling our content with TailwindCSS</h3>
        <div>
          We can use TailwindCSS classes to style our content. This tool lets us
          define our styles in our JSX rather than in a separate CSS file. Add
          the relevant classes to the <code>className</code> property of your
          JSX elements. For example, to make a paragraph text red, we can do:
          <p className="text-red-500">This text is red</p>
        </div>
        <h3>Using code blocks</h3>
        We can render code blocks in JSX via the <Cd>{`<Code>`}</Cd> component.
        For example, the above red text was rendered using the following code:
        <Code lang="tsx" title="index.tsx">
          {`<p className="text-red-500">This text is red</p>`}
        </Code>
        We can similarly render inline code using the <Cd>{`<Cd>`}</Cd>{" "}
        component. e.g. for the <Cd>{`<Code>`}</Cd> component:
        <Code lang="tsx">{"<Cd>{`<Code>`}</Cd>"}</Code>
        <h3>Using images</h3>
        <p>
          We can use a basic HTML <code>{`<img>`}</code> tag to display images:
          <img width={250} src={saltyEggImage.src} alt="egg pic" />
        </p>
        <Markdown />
      </section>
    </main>
  );
}
