import type { Metadata } from "next";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import "./globals.css";

storyblokInit({
  accessToken: process.env.storyblokApiToken,
  use: [apiPlugin],
  apiOptions: {
    region: process.env.NEXT_PUBLIC_SB_REGION,
  },
});

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
      <body>{children}</body>
    </html>
  );
}
