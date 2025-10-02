import "./globals.scss";
import "katex/dist/katex.min.css";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Cutive_Mono as FontMono } from "next/font/google";
import { Inter_Tight as FontSans } from "next/font/google";
import { Playfair_Display as FontSerif } from "next/font/google";
import { MainHeader } from "@/components/main-header";
import { MainFooter } from "@/components/main-footer";
import { Content } from "./content";

const fontMono = FontMono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontSerif = FontSerif({
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "MPM",
  description: "My Personal Medium",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(fontSerif.variable, fontMono.variable, fontSans.variable)}
    >
      <body className={cn("relative min-h-screen w-screen max-w-screen bg-background antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <MainHeader />
          <Content>{children}</Content>
          <MainFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
