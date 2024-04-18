import Link from "next/link";
import styles from "./main-footer.module.scss";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { socials } from "@/content/socials";

export function MainFooter() {
  return (
    <footer
      id="main-footer"
      className={cn(
        styles.footer,
        "bg-secondary text-secondary-foreground/80 py-16 border-t"
      )}
    >
      <div className="container flex gap-6">
        <div>
          <h1 className="text-6xl font-black mb-1">MPM</h1>
          <h3 className="font-medium mb-3">Michelle Pichardo-Munoz</h3>
          <div className="text-sm">
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.john-beresford.com">John Beresford</a>
          </div>
        </div>

        <Separator orientation="vertical" className="h-24" />

        <section>
          <h2>Navigation</h2>

          <div>
            <Link href="/contact">Contact</Link>
            <Link href="/resume">Resume</Link>
            <Link href="/blog">Blog</Link>
          </div>
        </section>

        <section>
          <h2>Socials</h2>

          <div>
            {socials.map((social) => (
              <Link href={social.url} key={social.name}>
                {social.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
}
