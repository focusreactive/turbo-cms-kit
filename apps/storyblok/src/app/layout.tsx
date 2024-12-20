import type { Metadata } from "next";

import "./globals.css";
import "@shared/ui/styles/global.css";

import StoryblokProvider from "@/components/StoryblokProvider";

export const metadata: Metadata = {
  title: "Storyblok / Next.js boilerplate",
  description: "A quick way to start a new project with StoryBlok and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StoryblokProvider>
        <body>{children}</body>
      </StoryblokProvider>
    </html>
  );
}
