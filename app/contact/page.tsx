import { Separator } from "@/components/ui/separator";
import { socials } from "@/content/socials";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ContactForm } from "./form";
import { Code } from "@/components/code";

export default function Page() {
  return (
    <div>
      <h1 className="text-6xl font-black uppercase">Contact Me</h1>
      <Separator className="mt-4 mb-8" />

      <main className="md:grid grid-cols-[1fr_auto_max-content] sm:flex flex-col">
        <ContactForm />

        <Separator orientation="vertical" className="mx-8" />

        <div>
          <h2 className="mb-6">
            I can be found in plenty of other places too!
          </h2>

          <section className="flex flex-col">
            {socials.map(({ Icon, ...social }) => (
              <Link
                href={social.url}
                key={social.name}
                draggable={false}
                className={cn(
                  "group select-text",
                  "text-card-foreground/80 hover:text-accent transition-colors",
                  "flex gap-3 items-center",
                  "h-[50px] bg-card border p-3 rounded mb-3"
                )}
              >
                <Icon className="aspect-square h-full fill-primary" />

                <div>
                  <h3 className="font-sans font-medium mr-2">
                    {social.username}
                  </h3>
                </div>

                <p
                  className={cn(
                    "font-sans ml-auto font-black",
                    "transition-transform -translate-x-1 group-hover:translate-x-0"
                  )}
                >
                  &rarr;
                </p>
              </Link>
            ))}

            <div className="flex flex-col pt-3">
              <h5>My email:</h5>

              <Code lang="sh" lineNumbers={false}>
                {"echo esjyjufm@hnbjm.dpn | tr '[b-{]' '[a-z]'"}
              </Code>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
