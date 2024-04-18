"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import { ReactNode } from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/contact", title: "Contact" },
  { href: "/resume", title: "Resume" },
  { href: "/blog", title: "Blog" },
];

export function MainHeader() {
  return (
    <header
      id="main-header"
      className="sticky bg-secondary text-secondary-foreground top-0 w-full h-20 z-40 mb-12 border-b"
    >
      <div className="container relative h-full">
        <NavigationMenu className="w-full max-w-none h-full">
          <h3 className="text-2xl font-black flex-grow z-10">
            <Link href="/" className="font-serif">
              MPM
            </Link>
          </h3>

          <NavigationMenuList className="uppercase">
            {navItems.map((item) => (
              <LinkItem key={item.href} href={item.href}>
                {item.title}
              </LinkItem>
            ))}

            <NavigationMenuItem>
              <Separator orientation="vertical" className="h-6 mx-2 block" />
            </NavigationMenuItem>

            <Item>
              <ThemeSwitcher />
            </Item>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

function Item({ children }: { children: ReactNode }) {
  return <NavigationMenuItem>{children}</NavigationMenuItem>;
}

function LinkItem({ href, children }: { href: string; children: ReactNode }) {
  const pathname = usePathname();

  return (
    <NavigationMenuItem>
      <Link href={href} passHref legacyBehavior>
        <NavigationMenuLink
          className={cn(
            navigationMenuTriggerStyle(),
            "font-semibold text-md bg-transparent font-serif",
            pathname.startsWith(href)
              ? "[&:not(:focus,:hover)]:text-accent"
              : ""
          )}
        >
          {children}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}
