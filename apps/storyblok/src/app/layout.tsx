import type { Metadata } from "next";

import "./globals.css";
import "@shared/ui/styles/global.css";

import { CookieBanner } from "@shared/ui";

export const metadata: Metadata = {
  title: "StoryBlok / Next.js boilerplate",
  description: "A quick way to start a new project with StoryBlok and Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
